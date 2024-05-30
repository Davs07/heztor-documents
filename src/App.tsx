import { useMediaQuery } from "@uidotdev/usehooks";
import { BetweenHorizontalEnd, CircleX, Menu, PanelLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Document as DocumentType, Foulder, Id } from "../types";
import { initialDocuments } from "./api/documents";
import { initialFoulders } from "./api/foulders";
import { Sidebar } from "./components/Sidebar";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { Document } from "./pages/Document";
import { Documents } from "./pages/Documents";
import { Prueba } from "./pages/Prueba";

export const App = () => {
  const [foulders] = useState<Foulder[]>(initialFoulders);
  const [docs, setDocs] = useState<DocumentType[]>(initialDocuments);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState("theme-1");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-1",
      "theme-2",
      "theme-3",
      "theme-4"
    );
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const onChangeDocument = (id: Id, content: DocumentType["content"]) => {
    setDocs(
      docs.map((document) => {
        if (document.id === id) {
          return { ...document, content: content };
        }
        return document;
      })
    );
  };

  return (
    <div className="relative w-screen h-screen min-h-screen overflow-x-hidden flex flex-row bg-background text-primary overflow-y-auto px-4 dark theme-1">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-[52px] bg-transparent",
          isSmallDevice && "bg-card"
        )}>
        <Button
          className="fixed top-2 left-2 cursor-pointer bg-card text-primary"
          variant={"icon"}
          size={"icon3"}
          onClick={() => setOpenSidebar(true)}>
          <Menu size={20} />
        </Button>

        {!openMenu && (
          <Button
            className="fixed top-2 right-2 cursor-pointer bg-card text-primary "
            variant={"icon"}
            size={"icon3"}
            onClick={() => setOpenMenu(true)}>
            <BetweenHorizontalEnd size={20} />
          </Button>
        )}
      </div>
      <aside
        onBlur={() => setOpenMenu(false)}
        className={cn(
          "relative top-0 left-0 h-full bg-card transition-transform transform duration-300 z-[9]  max-w-xs w-full",
          openSidebar ? "translate-x-0" : "hidden ",
          isMediumDevice || isSmallDevice ? "fixed " : "translate-x-[-5%]"
        )}>
        {openSidebar && (
          <PanelLeft
            width={24}
            className="absolute z-[999] m-4 left-64 cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          />
        )}
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-grow py-16 px-0">
        <Routes>
          <Route
            path="/"
            element={<Documents foulders={foulders} documents={docs} />}
          />
          <Route path="/prueba" element={<Prueba />} />
          <Route
            path="/document"
            element={
              <Document
                onChangeDocument={onChangeDocument}
                initialDocument={docs[1]}
              />
            }
          />
        </Routes>
      </main>

      {/* Right Menu */}
      <section
        className={`fixed top-0 right-0 h-full bg-card transition-transform transform z-[9] ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } max-w-xs w-full`}>
        <CircleX
          className="m-4 cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />
      </section>
    </div>
  );
};

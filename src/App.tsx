import {
  BetweenHorizontalEnd,
  ChevronFirst,
  CircleX,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { initialDocuments } from "./api/documents";
import { initialFoulders } from "./api/foulders";
import { Document } from "./pages/Document";
import { Documents } from "./pages/Documents";
import { Document as DocumentType, Foulder } from "./types";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  const [foulders] = useState<Foulder[]>(initialFoulders);
  const [documents] = useState<DocumentType[]>(initialDocuments);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="relative w-screen h-screen min-h-screen overflow-x-hidden flex flex-row bg-background text-primary overflow-y-auto">
      {/* Sidebar */}

      <Menu
        className="absolute top-4 left-4 cursor-pointer"
        onClick={() => setOpenSidebar(true)}
      />
      <aside
        className={`fixed top-0 left-0 h-full bg-card transition-transform transform z-[9999999] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } max-w-xs w-full`}>
        {openSidebar && (
          <ChevronFirst
            className="m-4 cursor-pointer"
            onClick={() => setOpenSidebar(false)}
          />
        )}
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-grow p-4">
        <Routes>
          <Route
            path="/"
            element={<Documents foulders={foulders} documents={documents} />}
          />
          <Route
            path="/document"
            element={<Document document={documents[0]} />}
          />
        </Routes>
      </main>

      {/* Right Menu */}
      <section
        className={`fixed top-0 right-0 h-full bg-card transition-transform transform z-[9999999] ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } max-w-xs w-full`}>
        <CircleX
          className="m-4 cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />
      </section>

      {!openMenu && (
        <BetweenHorizontalEnd
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
      )}
    </div>
  );
};

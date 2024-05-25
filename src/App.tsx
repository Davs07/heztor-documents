import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { initialDocuments } from "./api/documents";
import { initialFoulders } from "./api/foulders";
import { Documents } from "./pages/Documents";
import { Document, Foulder } from "./types";
import { BetweenHorizontalEnd, ChevronFirst, CircleX, Menu, SquareMenu } from "lucide-react";

export const App = () => {
  const [foulders] = useState<Foulder[]>(initialFoulders);
  const [documents] = useState<Document[]>(initialDocuments);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen min-h-screen overflow-x-hidden overflow-y-hidden flex flex-row bg-background text-primary ">
      {openSidebar ? (
        <aside className="w-full max-w-[300px] h-full bg-card">
          <ChevronFirst
            onClick={() => {
              setOpenSidebar(false);
            }}
          />
        </aside>
      ) : (
        <Menu
          onClick={() => {
            setOpenSidebar(true);
          }}
        />
      )}
      <main className="w-full h-full min-h-full max-h-full ">
        <Routes>
          <Route
            path="/"
            element={<Documents foulders={foulders} documents={documents} />}
          />
        </Routes>
      </main>
      {openMenu ? (
        <section className="w-full max-w-[300px] h-full bg-card">
          <CircleX
            onClick={() => {
              setOpenMenu(false);
            }}
          />
        </section>
      ) : (
        <BetweenHorizontalEnd
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      )}
    </div>
  );
};

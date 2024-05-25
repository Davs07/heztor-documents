import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { initialDocuments } from "./api/documents";
import { initialFoulders } from "./api/foulders";
import { Documents } from "./pages/Documents";
import { Document, Foulder } from "./types";

export const App = () => {
  const [foulders] = useState<Foulder[]>(initialFoulders);
  const [documents] = useState<Document[]>(initialDocuments);

  return (
    <div className="w-screen h-screen min-h-screen overflow-x-hidden overflow-y-hidden flex flex-row bg-background text-primary ">
      {/* <aside className="w-full max-w-[300px] h-full bg-card"></aside> */}
      <main className="w-full h-full min-h-full max-h-full ">
        <Routes>
          <Route
            path="/"
            element={<Documents foulders={foulders} documents={documents} />}
          />
        </Routes>
      </main>
      {/* <section className="w-full max-w-[300px] h-full bg-card"></section> */}
    </div>
  );
};

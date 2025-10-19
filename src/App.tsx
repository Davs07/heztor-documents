import { useMediaQuery } from "@uidotdev/usehooks";
import { BetweenHorizontalEnd, CircleX, Menu, PanelLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Document as DocumentType, Foulder, Id } from "../types";
import { initialDocuments } from "./api/documents";
import { initialFoulders } from "./api/foulders";
import { Sidebar } from "./components/Sidebar";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";
import { Document } from "./pages/Document";
import { Documents } from "./pages/Documents";
import { Prueba } from "./pages/Prueba";

// Componente wrapper para manejar la ruta dinámica del documento
const DocumentWrapper = ({
  documents,
  onChangeDocument,
  onUpdateDocumentName,
}: {
  documents: DocumentType[];
  onChangeDocument: (id: Id, content: DocumentType["content"]) => void;
  onUpdateDocumentName: (id: Id, name: string) => void;
}) => {
  const { id } = useParams<{ id: string }>();
  const documentId = id ? (isNaN(Number(id)) ? id : Number(id)) : null;
  const document = documents.find((doc) => doc.id === documentId);

  if (!document) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Documento no encontrado</p>
      </div>
    );
  }

  return (
    <Document
      onChangeDocument={onChangeDocument}
      onUpdateDocumentName={onUpdateDocumentName}
      initialDocument={document}
    />
  );
};

export const App = () => {
  const [foulders] = useState<Foulder[]>(initialFoulders);
  
  // Cargar documentos desde localStorage o usar los iniciales
  const [docs, setDocs] = useState<DocumentType[]>(() => {
    const savedDocs = localStorage.getItem("heztor-documents");
    if (savedDocs) {
      try {
        return JSON.parse(savedDocs);
      } catch (error) {
        console.error("Error parsing saved documents:", error);
        return initialDocuments;
      }
    }
    return initialDocuments;
  });

  // Guardar documentos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("heztor-documents", JSON.stringify(docs));
  }, [docs]);

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );

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

  const onUpdateDocumentName = (id: Id, name: string) => {
    setDocs(
      docs.map((document) => {
        if (document.id === id) {
          return { ...document, name: name };
        }
        return document;
      })
    );
  };

  const onCreateDocument = () => {
    const newId = Math.max(...docs.map((d) => Number(d.id))) + 1;
    const newDocument: DocumentType = {
      id: newId,
      name: "Sin título",
      content: undefined,
      foulderId: 1, // Por defecto a Inbox
      isFavourite: false,
    };
    setDocs([...docs, newDocument]);
    return newId;
  };

  return (
    <div className="relative w-screen h-screen min-h-screen overflow-x-hidden flex flex-row bg-background text-primary overflow-y-auto px-4 ">
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
          "relative top-0 left-0 h-full bg-card border-r border-border transition-transform transform duration-300 z-[9] max-w-xs w-full shadow-sm",
          openSidebar ? "translate-x-0" : "hidden ",
          isMediumDevice || isSmallDevice ? "fixed shadow-lg" : "translate-x-[-5%]"
        )}>
        {openSidebar && isMediumDevice || isSmallDevice && (
          <PanelLeft
            width={24}
            className="absolute z-[999] m-4 left-64 cursor-pointer hover:text-primary transition-colors"
            onClick={() => setOpenSidebar(false)}
          />
        )}
        <Sidebar 
          foulders={foulders} 
          documents={docs} 
          onCreateDocument={onCreateDocument}
        />
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
            path="/document/:id"
            element={
              <DocumentWrapper
                documents={docs}
                onChangeDocument={onChangeDocument}
                onUpdateDocumentName={onUpdateDocumentName}
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

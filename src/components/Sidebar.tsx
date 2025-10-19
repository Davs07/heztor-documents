import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import { Bell, ChevronDown, ChevronRight, FileText, Folder, Home, Star, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { Document, Foulder } from "types";
import { cn } from "@/lib/utils";

interface SidebarProps {
  foulders?: Foulder[];
  documents?: Document[];
  onCreateDocument?: () => number;
}

export const Sidebar = ({ foulders = [], documents = [], onCreateDocument }: SidebarProps) => {
  const navigate = useNavigate();
  const [expandedFolders, setExpandedFolders] = useState<Set<string | number>>(new Set());
  const [favoriteDocuments, setFavoriteDocuments] = useState<Document[]>([]);

  // Obtener documentos favoritos
  useEffect(() => {
    setFavoriteDocuments(documents.filter(doc => doc.isFavourite));
  }, [documents]);

  const toggleFolder = (folderId: string | number) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const getDocumentsByFolder = (folderId: string | number) => {
    return documents.filter(doc => doc.foulderId === folderId);
  };

  return (
    <nav className="absolute top-0 w-full h-full flex flex-col">
      {/* Header con usuario */}
      <div className="flex flex-row items-center justify-between px-4 py-3 border-b border-border">
        <UserButton />
        <Button variant={"ghost"} size={"icon"} className="p-2">
          <Bell size={20} />
        </Button>
      </div>

      {/* Contenido del sidebar con scroll */}
      <div className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="flex flex-col gap-1">
          {/* Inicio */}
          <li>
            <Link to="/">
              <Button variant={"ghost"} className="w-full justify-start gap-3 hover:bg-accent">
                <Home size={18} />
                <span>Inicio</span>
              </Button>
            </Link>
          </li>

          {/* Botón para nuevo documento */}
          <li className="mt-2">
            <Button 
              variant={"outline"} 
              className="w-full justify-start gap-3 border-dashed hover:bg-accent"
              onClick={() => {
                if (onCreateDocument) {
                  const newId = onCreateDocument();
                  navigate(`/document/${newId}`);
                }
              }}>
              <Plus size={18} />
              <span>Nuevo documento</span>
            </Button>
          </li>

          {/* Separador */}
          <li className="my-3">
            <div className="border-t border-border" />
          </li>

          {/* Favoritos */}
          {favoriteDocuments.length > 0 && (
            <>
              <li className="mb-2">
                <div className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Favoritos
                </div>
              </li>
              {favoriteDocuments.map((doc) => (
                <li key={`fav-${doc.id}`}>
                  <Button
                    variant={"ghost"}
                    onClick={() => navigate(`/document/${doc.id}`)}
                    className="w-full justify-start gap-3 hover:bg-accent pl-6">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="truncate">{doc.name}</span>
                  </Button>
                </li>
              ))}
            </>
          )}

          {/* Separador antes de carpetas si hay favoritos */}
          {favoriteDocuments.length > 0 && (
            <li className="my-3">
              <div className="border-t border-border" />
            </li>
          )}

          {/* Carpetas */}
          <li className="mb-2">
            <div className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Carpetas
            </div>
          </li>

          {foulders.map((folder) => {
            const folderDocs = getDocumentsByFolder(folder.id);
            const isExpanded = expandedFolders.has(folder.id);

            return (
              <li key={folder.id}>
                <div className="flex flex-col">
                  {/* Carpeta */}
                  <Button
                    variant={"ghost"}
                    onClick={() => toggleFolder(folder.id)}
                    className="w-full justify-start gap-2 hover:bg-accent">
                    {folderDocs.length > 0 ? (
                      isExpanded ? (
                        <ChevronDown size={16} className="text-muted-foreground" />
                      ) : (
                        <ChevronRight size={16} className="text-muted-foreground" />
                      )
                    ) : (
                      <span className="w-4" />
                    )}
                    <Folder size={18} />
                    <span className="flex-1 text-left truncate">{folder.name}</span>
                    <span className="text-xs text-muted-foreground">{folderDocs.length}</span>
                  </Button>

                  {/* Documentos de la carpeta */}
                  {isExpanded && folderDocs.length > 0 && (
                    <ul className="ml-4 mt-1 flex flex-col gap-1">
                      {folderDocs.map((doc) => (
                        <li key={doc.id}>
                          <Button
                            variant={"ghost"}
                            onClick={() => navigate(`/document/${doc.id}`)}
                            className={cn(
                              "w-full justify-start gap-3 hover:bg-accent pl-6 text-sm",
                              "text-muted-foreground hover:text-foreground"
                            )}>
                            <FileText size={16} />
                            <span className="truncate">{doc.name}</span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

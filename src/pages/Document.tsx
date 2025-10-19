import { Input } from "@/components/ui/input";
import { Editor } from "@/sections/Editor";
import { Document as DocumentType, Id } from "types";
import { useState, useEffect } from "react";

interface Props {
  initialDocument: DocumentType;
  onChangeDocument: (id: Id, content: DocumentType["content"]) => void;
  onUpdateDocumentName?: (id: Id, name: string) => void;
}

export const Document = ({ initialDocument, onChangeDocument, onUpdateDocumentName }: Props) => {
  const [title, setTitle] = useState(initialDocument.name);

  // Actualizar el título cuando cambia el documento
  useEffect(() => {
    setTitle(initialDocument.name);
  }, [initialDocument.id, initialDocument.name]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (onUpdateDocumentName) {
      onUpdateDocumentName(initialDocument.id, newTitle);
    }
  };

  return (
    <div className="m-auto w-full h-full max-w-[calc(1000px+8px)] flex items-center justify-start text-center flex-col gap-2 ">
      <div className="w-full">
        <div className="w-full h-48 bg-gradient-700 rounded-2xl"></div>
      </div>

      <Input
        className="w-full max-h-[90px] h-[86px] min-h-max text-6xl font-bold border-none focus:outline-none focus:ring-0 resize-none focus:border-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        placeholder="Sin título"
        value={title}
        onChange={handleTitleChange}
      />
      <div className="w-full max-w-[100vw] h-full ml-[-3em]">
        <Editor
          key={`${initialDocument.id}-${JSON.stringify(initialDocument.content)?.substring(0, 100)}`}
          initialDocument={initialDocument}
          onChangeDocument={onChangeDocument}
        />
      </div>
    </div>
  );
};

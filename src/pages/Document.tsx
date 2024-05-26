import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@/sections/Editor";
import { Document as DocumentType, Id } from "@/types";

interface Props {
  initialDocument: DocumentType;
  onChangeDocument: (id: Id, content: DocumentType["content"]) => void;
}

export const Document = ({ initialDocument, onChangeDocument }: Props) => {
  return (
    <div className="m-auto w-full h-full max-w-[calc(1000px+8px)] flex items-center justify-start text-center flex-col gap-2 ">
      <div className="w-full">
        <div className="w-full h-48 bg-gradient-700 rounded-2xl"></div>
      </div>

      <div className="w-full h-full">
        <Textarea
          className="w-full max-h-[72px]  min-h-max text-5xl font-bold border-none focus:outline-none focus:ring-0 resize-none focus:border-transparent focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
          placeholder="Sin título"
          defaultValue={initialDocument.name}
        />
        <Editor
          initialDocument={initialDocument}
          onChangeDocument={onChangeDocument}
        />
      </div>
    </div>
  );
};

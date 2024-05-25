import { Editor } from "@/sections/Editor";
import { Document as DocumentType } from "@/types";

interface Props {
  document: DocumentType;
}

export const Document = (props: Props) => {
  const { document } = props;

  return (
    <div className="m-auto w-full h-full max-w-[calc(1000px+8px)] flex items-center justify-start text-center flex-col gap-8 py-4 px-4 ">
      <div className="w-full">
        <div className="w-full h-48 bg-gradient-700 rounded-2xl"></div>
      </div>
      <h1>Documento 1</h1>
      <Editor onChange={() => {}} initialContent={document.content} />
    </div>
  );
};

import { Document, Foulder } from "../types";

interface Props {
  foulders: Foulder[];
  documents: Document[];
}

export const Documents = (props: Props) => {
  const { foulders, documents } = props;

  return (
    <div className="m-auto w-full h-full max-w-[calc(1000px+8px)] flex items-center justify-start text-center flex-col gap-2 py-4 px-4">
      {/* Header */}
      <div className="flex justify-between w-full  md:items-end flex-col md:flex-row">
        <div className="text-start">
          <h3 className="text-3xl font-semibold">Documents</h3>
          <p>Todos tus ideas y anotaciones en un solo espacio</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-primary">Esta semana</button>
          <button className="btn btn-primary">Cambiar vista</button>
        </div>
      </div>

      {/* Content */}

      <div className="flex w-full">
        <h4 className="text-2xl">Carpetas</h4>

        {foulders.map((foulder) => (
          <div key={foulder.id}>{foulder.name}</div>
        ))}
      </div>
      <div className="flex w-full">
        <h4 className="text-2xl">Documentos</h4>
        {documents.map((document) => (
          <div key={document.id}>{document.name}</div>
        ))}
      </div>
    </div>
  );
};

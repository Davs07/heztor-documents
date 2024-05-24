import { Card, CardHeader } from "@/components/ui/card";
import { Document, Foulder } from "../types";
import { ChevronDown, Folder, Grid, LayoutDashboard } from "lucide-react";

interface Props {
  foulders: Foulder[];
  documents: Document[];
}

export const Documents = (props: Props) => {
  const { foulders, documents } = props;

  return (
    <div className="m-auto w-full h-full max-w-[calc(1000px+8px)] flex items-center justify-start text-center flex-col gap-12 py-4 px-4">
      {/* Header */}
      <div className="flex justify-between w-full  md:items-end flex-col md:flex-row">
        <div className="text-start">
          <h3 className="text-3xl font-semibold">Documents</h3>
          <p>Todos tus ideas y anotaciones en un solo espacio</p>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-primary flex flex-row">
            <ChevronDown />
            <p>Esta semana</p>
          </button>
          <button className="btn btn-primary flex flex-row">
            <LayoutDashboard />
            <p>Cambiar vista</p>
          </button>
        </div>
      </div>

      {/* Content */}

      <div className="flex w-full flex-col items-start gap-3">
        <h4 className="text-2xl">Carpetas</h4>

        <div className="w-full flex flex-wrap gap-4">
          {foulders.map((foulder) => (
            <Card className="w-[200px] h-[90px]">
              <CardHeader
                key={foulder.id}
                className="h-full w-full flex flex-row justify-start items-center gap-3">
                <div className="h-full items-center w-max flex justify-center ">
                  <Folder size={32} />
                </div>
                <div className="flex flex-col text-start h-full items-start justify-center">
                  <span className="text-lg">{foulder.name}</span>
                  <span className="text-xs text-slate-500">
                    {`${
                      documents.filter(
                        (document) => document.foulderId === foulder.id
                      ).length
                    } documentos`}
                  </span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-3">
        <h4 className="text-2xl">Documentos</h4>
        <div className="w-full flex flex-wrap gap-4">
          {documents.map((document) => (
            <Card className="w-[200px] h-[90px]">
              <CardHeader key={document.id}>{document.name}</CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

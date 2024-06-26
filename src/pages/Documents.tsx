import { Card, CardHeader } from "@/components/ui/card";
import { Text } from "@/components/ui/custom/text";
import { ChevronDown, Folder, LayoutGrid } from "lucide-react";
import { Document, Foulder } from "types";

interface Props {
  foulders: Foulder[];
  documents: Document[];
}

export const Documents = (props: Props) => {
  const { foulders, documents } = props;

  return (
    <div className="m-auto w-full h-full max-w-[calc(1200px+8px)] flex items-center justify-start text-center flex-col gap-12 py-4 px-4 overflow-y-auto">
      {/* Header */}
      <div className="flex justify-between w-full  md:items-end flex-col md:flex-row ">
        <div className="text-start flex flex-col">
          <Text variant={"h2"}>Documents</Text>
          <Text variant={"pbase"}>
            Todas tus ideas y anotaciones en un solo espacio
          </Text>
        </div>
        <div className="flex gap-3">
          <button className="btn btn-primary flex flex-row">
            <ChevronDown />
            <Text variant={"pbase"}>Esta semana</Text>
          </button>
          <button className="btn btn-primary flex flex-row">
            <LayoutGrid />
            <Text variant={"pbase"}>Vista</Text>
          </button>
        </div>
      </div>

      {/* Content */}

      <div className="flex w-full flex-col items-start gap-6">
        <Text variant={"h4"}>Carpetas</Text>

        <div className="w-full h-max place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {foulders.map((foulder) => (
            <Card
              key={foulder.id}
              className="w-[180px] h-[90px]  hover:shadow-lg cursor-pointer rounded-2xl">
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
          <Card className="w-[180px] h-[90px]  hover:shadow-lg cursor-pointer rounded-2xl"></Card>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-6">
      <Text variant={"h4"}>Documentos</Text>
        
        <div className="w-full h-max place-items-center grid  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {documents.map((document, index) => (
            <Card
              key={document.id}
              className={`group w-[250px] h-[120px] flex flex-col  hover:shadow-lg cursor-pointer rounded-2xl overflow-hidden transition-all duration-1000`}>
              <CardHeader
                key={document.id}
                className={`bg-gradient-${
                  index + 1
                }00 h-full group-hover:h-16 `}></CardHeader>
              <div className="w-full grid place-items-center group-hover:h-full bg-card  rounded-2xl py-2 transition-all group-hover:duration-300 transform   ">
                <p> {document.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

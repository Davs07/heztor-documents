import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Document as DocumentType, Id } from "../../types";
import { PartialBlock } from "@blocknote/core";
import { useMediaQuery } from "@uidotdev/usehooks";

interface Props {
  initialDocument: DocumentType;
  onChangeDocument: (id: Id, content: DocumentType["content"]) => void;
}

export const Editor = ({ initialDocument, onChangeDocument }: Props) => {
  // Creates a new editor instance with some initial content.
  const initialContent = initialDocument.content as PartialBlock[] | undefined;

  const editor = useCreateBlockNote({
    initialContent,
    uploadFile,
  });

  async function uploadFile(file: File) {
    const body = new FormData();
    body.append("file", file);

    const ret = await fetch("https://tmpfiles.org/api/v1/upload", {
      method: "POST",
      body: body,
    });
    return (await ret.json()).data.url.replace(
      "tmpfiles.org/",
      "tmpfiles.org/dl/"
    );
  }

  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    await editor.blocksToMarkdownLossy(editor.document);
    console.log(editor.document.map((block) => block.content));
    console.log(typeof Array(editor.document));
    onChangeDocument(initialDocument.id, editor.document);
  };

  const customTheme = {
    colors: {
      editor: {
        text: "hsl(var(--background))",
        background: "hsl(var(--foreground))",
      },
      menu: {
        text: "hsl(var(--foreground))",
        background: "hsl(var(--card))",
      },
      tooltip: {
        text: "hsl(var(--foreground))",
        background: "hsl(var(--card))",
      },
      hovered: {
        text: "hsl(var(--foreground))",
        background: "hsl(var(--accent))",
      },
      selected: {
        text: "hsl(var(--accent-foreground))",
        background: "hsl(var(--accent))",
      },
      disabled: {
        text: "hsl(var(--muted-foreground))",
        background: "hsl(var(--muted))",
      },
      shadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
      border: "hsl(var(--border))",
      sideMenu: "hsl(var(--card))",
      highlights: {
        gray: {
          text: "hsl(var(--foreground))",
          background: "hsl(var(--muted))",
        },
        blue: {
          text: "hsl(220, 90%, 20%)",
          background: "hsl(220, 90%, 90%)",
        },
        red: {
          text: "hsl(0, 90%, 20%)",
          background: "hsl(0, 90%, 90%)",
        },
        yellow: {
          text: "hsl(45, 90%, 20%)",
          background: "hsl(45, 90%, 90%)",
        },
        green: {
          text: "hsl(120, 90%, 20%)",
          background: "hsl(120, 90%, 90%)",
        },
      },
    },
    borderRadius: 12,
    fontFamily: "Inter, sans-serif",
  };

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );

  // Renders the editor instance, and its contents as Markdown below.
  return (
    <div className="w-full  h-max">
      <BlockNoteView
        theme={customTheme}
        style={{
          width: isMediumDevice || isSmallDevice ? "115%" : "107%",
          height: "100%",
        }}
        editor={editor}
        onChange={onChange}
      />
      {/* <div>Output (Markdown):</div>
      <div className={"item bordered"}>
        <pre>
          <code>{markdown}</code>
        </pre>
      </div> */}
    </div>
  );
};

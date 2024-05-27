import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";
import { Document as DocumentType, Id } from "@/types";
import { PartialBlock } from "@blocknote/core";
import { useMediaQuery } from "@uidotdev/usehooks";

interface Props {
  initialDocument: DocumentType;
  onChangeDocument: (id: Id, content: DocumentType["content"]) => void;
}

export const Editor = ({ initialDocument, onChangeDocument }: Props) => {
  // Stores the editor's contents as Markdown.
  const [markdown, setMarkdown] = useState<string>("");

  // Creates a new editor instance with some initial content.
  const initialContent = initialDocument.content?.map((content) => ({
    content,
  })) as PartialBlock[];

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
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
    console.log(editor.document.map((block) => block.content));
    console.log(typeof Array(editor.document));
    onChangeDocument(initialDocument.id, editor.document);
  };

  const customTheme = {
    colors: {
      editor: {
        text: "primary",
        background: "foreground",
      },
      menu: {
        text: "primary",
        background: "--background",
      },
      tooltip: {
        text: "",
        background: "",
      },
      hovered: {
        text: "",
        background: "",
      },
      selected: {
        text: "",
        background: "",
      },
      disabled: {
        text: "",
        background: "",
      },
      shadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
      border: "#ddd",
      sideMenu: "#2c3e50",
      highlights: {},
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

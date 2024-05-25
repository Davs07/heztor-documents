import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";

interface Props {
  initialContent: string;
  onChange: (content: string) => void;
}

export const Editor = ({ initialContent }: Props) => {
  // Stores the editor's contents as Markdown.
  const [markdown, setMarkdown] = useState<string>("");

  // Creates a new editor instance with some initial content.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        content: [JSON.stringify(initialContent)],
      },
    ],
  });

  const onChange = async () => {
    // Converts the editor's contents from Block objects to Markdown and store to state.
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
  };

  // Renders the editor instance, and its contents as Markdown below.
  return (
    <div className="w-full h-full">
      <BlockNoteView
        className="h-96 bg-blue-500"
        editor={editor}
        onChange={onChange}
      />
      <div>Output (Markdown):</div>
      <div className={"item bordered"}>
        <pre>
          <code>{markdown}</code>
        </pre>
      </div>
    </div>
  );
};

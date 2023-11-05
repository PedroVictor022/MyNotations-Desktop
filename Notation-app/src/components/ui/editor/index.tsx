import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
// import lowlight from "lowlight";
import "highlight.js/styles/github-dark.css";
import { BubbleButton } from "./BubbleButton";

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      // CodeBlockLowlight.configure({
      // //   lowlight,
      //   defaultLanguage: "javascript",
      // }),
    ],
    content: "<h2>Escreva suas notas aqui!</h2>",
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent editor={editor} className="m-6 bg-zinc-500" />
      {editor && (
        <BubbleMenu
          editor={editor}
          className="bg-zinc-800 shadow-lg border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
        >
          <div>
            <BubbleButton>
              <RxFontBold className="w-4  h-4" />
            </BubbleButton>
            <BubbleButton>
               <RxFontItalic className="w-4 h-4"/>
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}

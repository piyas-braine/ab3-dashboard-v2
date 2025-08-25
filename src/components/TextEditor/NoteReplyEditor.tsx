"use client";

import * as React from "react";
import { Editor, EditorContent, EditorContext, useEditor } from "@tiptap/react";

// --- Tiptap Core Extensions ---
import { StarterKit } from "@tiptap/starter-kit";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { Typography } from "@tiptap/extension-typography";
import { Selection } from "@tiptap/extensions";

// --- UI Primitives ---
import { Spacer } from "@/components/tiptap-ui-primitive/spacer";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
} from "@/components/tiptap-ui-primitive/toolbar";

// --- Tiptap Node ---
import { HorizontalRule } from "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node-extension";
import "@/components/tiptap-node/blockquote-node/blockquote-node.scss";
import "@/components/tiptap-node/code-block-node/code-block-node.scss";
import "@/components/tiptap-node/horizontal-rule-node/horizontal-rule-node.scss";
import "@/components/tiptap-node/list-node/list-node.scss";
import "@/components/tiptap-node/heading-node/heading-node.scss";
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss";
import { FileAttachmentNode } from "@/components/tiptap-node/fileupload-node/FileUploadNode";
import { FileUploadButton } from "@/components/tiptap-node/fileupload-node/FileUploadButton";

// --- Tiptap UI ---
import { HeadingDropdownMenu } from "@/components/tiptap-ui/heading-dropdown-menu";
import { ListDropdownMenu } from "@/components/tiptap-ui/list-dropdown-menu";
import { BlockquoteButton } from "@/components/tiptap-ui/blockquote-button";
import {
  ColorHighlightPopover,
  ColorHighlightPopoverButton,
} from "@/components/tiptap-ui/color-highlight-popover";
import { LinkPopover, LinkButton } from "@/components/tiptap-ui/link-popover";
import { MarkButton } from "@/components/tiptap-ui/mark-button";
import { UndoRedoButton } from "@/components/tiptap-ui/undo-redo-button";

// --- Hooks ---
import { useIsMobile } from "@/hooks/use-mobile";

// --- Components ---
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle";

// --- Styles ---
import "@/components/tiptap-templates/simple/simple-editor.scss";
import AttachmentBadge from "@/components/Badges/AttachmentBadge";
import FilledButton from "@/components/Buttons/FilledButton";
import OutlineButton from "@/components/Buttons/OutlinedButton";

const MainToolbarContent = ({
  onHighlighterClick,
  onLinkClick,
  isMobile,
  editor,
  setAttachments,
}: {
  onHighlighterClick: () => void;
  onLinkClick: () => void;
  isMobile: boolean;
  editor: Editor | null;
  setAttachments: React.Dispatch<
    React.SetStateAction<{ src: string; name: string }[]>
  >;
}) => (
  <>
    {/* <Spacer /> */}

    <ToolbarGroup>
      <UndoRedoButton action="undo" />
      <UndoRedoButton action="redo" />
    </ToolbarGroup>

    <ToolbarSeparator />

    <ToolbarGroup>
      <HeadingDropdownMenu levels={[1, 2, 3, 4]} portal={isMobile} />
      <ListDropdownMenu
        types={["bulletList", "orderedList", "taskList"]}
        portal={isMobile}
      />
      <BlockquoteButton />
    </ToolbarGroup>

    <ToolbarSeparator />

    <ToolbarGroup>
      <MarkButton type="bold" />
      <MarkButton type="italic" />
      <MarkButton type="strike" />
      <MarkButton type="underline" />
      {!isMobile ? (
        <ColorHighlightPopover />
      ) : (
        <ColorHighlightPopoverButton onClick={onHighlighterClick} />
      )}
      {!isMobile ? <LinkPopover /> : <LinkButton onClick={onLinkClick} />}
    </ToolbarGroup>

    <ToolbarSeparator />

    <ToolbarGroup>
      {/* Only File Upload */}
      <FileUploadButton
        editor={editor}
        text="Add File"
        onUpload={async (file) => {
          const fileUrl = URL.createObjectURL(file); // create local blob URL
          editor?.chain()?.focus().run();

          setAttachments((prev) => [
            ...prev,
            { src: fileUrl, name: file.name },
          ]);
        }}
      />
    </ToolbarGroup>

    <Spacer />

    {isMobile && <ToolbarSeparator />}

    <ToolbarGroup>
      <ThemeToggle />
    </ToolbarGroup>
  </>
);

export function NoteReplyEditor({
  setIsReplyOpen,
}: {
  setIsReplyOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isMobile = useIsMobile();
  const [mobileView, setMobileView] = React.useState<
    "main" | "highlighter" | "link"
  >("main");
  const toolbarRef = React.useRef<HTMLDivElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    editorProps: { attributes: { class: "simple-editor" } },
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
        link: { openOnClick: false, enableClickSelection: true },
      }),
      HorizontalRule,
      TaskList,
      TaskItem.configure({ nested: true }),
      Typography,
      Selection,
      FileAttachmentNode,
    ],
    content: "",
  });

  React.useEffect(() => {
    if (!isMobile && mobileView !== "main") setMobileView("main");
  }, [isMobile, mobileView]);

  const [attachments, setAttachments] = React.useState<
    { src: string; name: string }[]
  >([]);

  const handleSubmit = async () => {
    const html = editor?.getHTML();
    const text = editor?.getText();

    console.log(html);
    console.log(text);
  };

  return (
    <>
      <div
        className="simple-editor-wrapper relative max-w-full max-h-[450px] sm:max-h-[350px] !overflow-hidden rounded-2xl"
        style={{
          boxShadow: "0px 3px 8px 0px #3232470D, 0px 0px 1px 0px #0C1A4B3D",
        }}
      >
        <EditorContext.Provider value={{ editor }}>
          <Toolbar
            ref={toolbarRef}
            
            className="!bg-bg-soft-blue !flex !flex-wrap !justify-center !items-center !h-[120px] sm:!h-fit"
          >
            <MainToolbarContent
              onHighlighterClick={() => setMobileView("highlighter")}
              onLinkClick={() => setMobileView("link")}
              isMobile={isMobile}
              editor={editor}
              setAttachments={setAttachments}
            />
          </Toolbar>
          <div className="max-h-[200px] !mt-[120px] sm:!mt-0 overflow-y-auto">
            <EditorContent
              editor={editor}
              role="presentation"
              className="simple-editor-content text-text-default-dark !ml-0 !pl-0 !mt-0 !pt-0 !mr-0 !max-w-full !w-full bg-bg-surface-secondary selection:bg-blue-500/30 selection:text-black"
            />
          </div>

          {attachments.length > 0 && (
            <div className="ml-10 absolute bottom-5">
              <h6 className="text-text-natural-gray-77 text-[12px] leading-[130%] font-normal">
                Attachments
              </h6>
              <div className="mt-6 flex flex-col sm:flex-row justify-start items-center gap-4">
                {attachments.map((attachment, index) => (
                  <AttachmentBadge
                    key={index}
                    isImage={true}
                    placeholderText={
                      attachment?.name?.length > 10
                        ? `${attachment?.name?.slice(
                            0,
                            5
                          )}...${attachment.name?.slice(-5)}`
                        : `${attachment?.name}`
                    }
                  />
                ))}
              </div>
            </div>
          )}

          <div className="absolute bottom-5 right-5 flex justify-end items-center gap-4">
            <OutlineButton
              onClick={() => setIsReplyOpen(false)}
              text="Cancel"
            />
            <FilledButton
              onClick={handleSubmit}
              text="Reply To Note"
              className="text-nowrap"
            />
          </div>
        </EditorContext.Provider>
      </div>
    </>
  );
}

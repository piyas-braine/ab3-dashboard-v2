// FileAttachmentNode.ts
import { Node, mergeAttributes } from "@tiptap/core";

export interface FileAttachmentOptions {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fileAttachment: {
      setFileAttachment: (options: { src: string; name: string }) => ReturnType;
    };
  }
}

export const FileAttachmentNode = Node.create<FileAttachmentOptions>({
  name: "fileAttachment",

  group: "block",

  inline: false, // set true if you want it inline with text
  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      src: { default: null },
      name: { default: "Attachment" },
    };
  },

  parseHTML() {
    return [{ tag: "a[data-file-attachment]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "a",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-file-attachment": "",
        href: HTMLAttributes.src,
        target: "_blank",
        rel: "noopener noreferrer",
        class:
          "tiptap-file-attachment flex items-center gap-2 px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition",
      }),
      [
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          class: "h-4 w-4",
        },
        [
          "path",
          {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": 2,
            d: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a4 4 0 10-5.656-5.656L6.172 9.172a6 6 0 008.486 8.486L19.828 12",
          },
        ],
      ],
      HTMLAttributes.name,
    ];
  },

  addCommands() {
    return {
      setFileAttachment:
        ({ src, name }) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { src, name },
          });
        },
    };
  },
});
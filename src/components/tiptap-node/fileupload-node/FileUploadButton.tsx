import * as React from "react";
import { Editor } from "@tiptap/react";
import { Upload } from "lucide-react";

interface FileUploadButtonProps {
  editor: Editor | null;
  text?: string;
  onUpload?: (file: File) => Promise<void>; // <--- callback to update attachments
}

export function FileUploadButton({
  editor,
  text = "📎 Upload File",
  onUpload,
}: FileUploadButtonProps) {
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      if (onUpload) {
        // call the callback passed from MainToolbarContent
        await onUpload(file);
      } else {
        // fallback: default behavior if no onUpload provided
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const { url } = await res.json();

        editor
          ?.chain()
          ?.focus()
          ?.setFileAttachment({ src: url, name: file.name })
          .run();
      }
    } catch (err) {
      console.error("File upload failed:", err);
    }
  };

  return (
    <label className="cursor-pointer px-5 py-1 bg-bg-default-white rounded hover:bg-blue-200 transition-colors shadow-sm">
      <div className="flex justify-center items-center gap-4">
        <Upload className="w-4 h-4" />
        <span className="text-text-default-dark text-[14px] font-medium">{text}</span>
      </div>
      <input type="file" className="hidden" onChange={onChange} />
    </label>
  );
}

import React, { useRef, useCallback, useMemo } from "react";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";
import "react-quill/dist/quill.snow.css";
import styles from "./RichTextEditor.module.css";

const RichTextEditor = ({
  className = "",
  value,
  onChange,
  placeholder = "Start writing...",
  readOnly = false,
  preserveWhitespace = true,
}) => {
  const quillRef = useRef(null);

  const handleImageUpload = useCallback(() => {
    if (readOnly) return;

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          console.error("File size exceeds 5MB limit");
          return;
        }

        try {
          const reader = new FileReader();
          reader.onload = (e) => {
            const range = quillRef.current?.getEditor().getSelection();
            if (range) {
              quillRef.current
                ?.getEditor()
                .insertEmbed(range.index, "image", e.target?.result);
            }
          };
          reader.readAsDataURL(file);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    };
  }, [readOnly]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike"],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
          [{ direction: "rtl" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image", "video"],
          ["clean"],
        ],
        handlers: {
          image: handleImageUpload,
        },
      },
      clipboard: {
        matchVisual: false,
      },
      keyboard: {
        bindings: {
          tab: {
            key: 9,
            handler: () => true,
          },
        },
      },
    }),
    [handleImageUpload]
  );

  const formats = useMemo(
    () => [
      "font",
      "header",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "script",
      "blockquote",
      "code-block",
      "list",
      "bullet",
      "indent",
      "direction",
      "color",
      "background",
      "align",
      "link",
      "image",
      "video",
    ],
    []
  );

  return (
    <div
      className={`${styles.richTextEditorContainer} ${readOnly ? styles.disabled : ""}`}
    >
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={readOnly ? () => {} : onChange} // Disable onChange if disabled
        placeholder={placeholder}
        readOnly={readOnly} // Set readOnly if disabled
        preserveWhitespace={preserveWhitespace}
        className={`${styles.quillEditor} ${className}`}
        aria-label="Rich text editor"
      />
    </div>
  );
};

RichTextEditor.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  preserveWhitespace: PropTypes.bool,
};

export default React.memo(RichTextEditor);

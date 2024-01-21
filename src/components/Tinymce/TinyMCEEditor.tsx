"use client";

import { updateUserContent } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useState } from "react";

const TinyMCEEditor = (props: { initialValue: string; id: string }) => {
  const [value, setValue] = useState(props.initialValue ?? "");
  useEffect(() => setValue(props.initialValue ?? ""), [props.initialValue]);

  const handleOnClick = async () => {
    await updateUserContent(props.id, value);
    console.log("saved");
  };

  return (
    <>
      <Editor
        initialValue={props.initialValue}
        value={value}
        onEditorChange={(newValue, editor) => setValue(newValue)}
        apiKey={process.env.Editor_apiKey}
        init={{
          plugins:
            "tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
        }}
      />

      <Button variant="outline" onClick={handleOnClick}>
        Save
      </Button>
    </>
  );
};

export default TinyMCEEditor;

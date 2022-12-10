import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

let currentUser = JSON.parse(localStorage.getItem("user"));
let api_url = process.env.REACT_APP_API;

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const notify = (msg) => toast(msg);

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    fetch(`${api_url}blogs/${id}`)
      .then((response) => response.json())
      .then((res) => {
        setTitle(res.title);
        setContent(res.body)
        // setBlogs(res);
      });
  };
  const handleChange = (editorContent) => {
    setContent(editorContent)
  };

  const handleEditBlog = () => {
    let data = {title, body: content, authorId: currentUser.id }
    if(title && content){
        fetch(`${api_url}blogs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.ok) {
                navigate("/blogs");
                notify("Blog edited successfully!");
            } else {
                notify("Something went wrong! Try again.");
            }
        })
    }else{
        notify('Please fill all fields!')
    }
  }

  return (
    <div>
      <h2 className="text-2xl text-center underline m-2">Edit Blog</h2>
      <div className="flex flex-col w-full border-2 my-2">
        <input
          type="text"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="m-2 border-[1px] p-2"
        />
         <SunEditor
          onChange={handleChange}
          setContents={content}
          autoFocus={false}
          setOptions={{
            height: 200,
            buttonList: [
     
              ["formatBlock", "font","fontSize"],
              [
                "bold",
                "underline",
                "italic",
                "strike",
                "subscript",
                "superscript",
                "lineHeight",
                'textStyle',
                'codeView',
                "fontColor"
              ],
              ["align", "list", "italic"],
              ["image"],
            ],
            // plugins: [font] set plugins, all plugins are set by default
            // Other option
          }}
        />
      </div>
      <button
        className="bg-green-200 w-full text-grey-500 p-2 text-xl"
        onClick={handleEditBlog}
      >
        Add
      </button>
    </div>
  );
};

export default EditBlog;

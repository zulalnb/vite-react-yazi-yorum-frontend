import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import PostForm from "./PostForm";

const UpdatePost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    api()
      .get(`/posts/${id}`)
      .then((res) => {
        const { title, content } = res.data;
        setPost({ title, content });
      });
  }, []);

  return (
    <div>
      <h1>Yazı Düzenleme Formu</h1>
      <PostForm post={post} />
    </div>
  );
};

export default UpdatePost;

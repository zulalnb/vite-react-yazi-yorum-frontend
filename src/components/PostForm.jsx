import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";

const PostForm = (props) => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (props?.post?.title) {
      api()
        .put(`/posts/${id}`, post)
        .then((res) => {
          console.log(res);
          navigate(`/posts/${id}`);
        })
        .catch((error) => {
          setError("Başlık ve yazı içeriği alanları zorunludur.");
        });
    } else {
      api()
        .post("/posts", post)
        .then((res) => {
          navigate("/");
        })
        .catch((error) => {
          setError("Başlık ve yazı içeriği alanları zorunludur.");
        });
    }
  };

  useEffect(() => {
    if (props?.post?.title && props?.post?.content) setPost(props.post);
  }, [props.post]);

  return (
    <React.Fragment>
      {error && (
        <div className="ui error message">
          <div className="header">Hata</div>
          <p>{error}</p>
        </div>
      )}
      <div className="ui form">
        <div className="field">
          <label>Yazı Başlığı</label>
          <input
            value={post.title}
            type="text"
            name="title"
            onChange={onInputChange}
          />
        </div>
        <div className="field">
          <label>Yazı İçeriği</label>
          <textarea
            value={post.content}
            rows="2"
            name="content"
            onChange={onInputChange}
          ></textarea>
        </div>
        <button className="ui primary button" onClick={onFormSubmit}>
          Gönder
        </button>
        <button className="ui button" onClick={() => navigate(-1)}>
          İptal Et
        </button>
      </div>
    </React.Fragment>
  );
};

export default PostForm;

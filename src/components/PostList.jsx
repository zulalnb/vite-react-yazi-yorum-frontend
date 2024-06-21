import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api";

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    api()
      .get("/posts")
      .then((res) => {
        setPostList(res.data);
      });
  }, []);

  return (
    <div className="ui relaxed divided list">
      <Link to="/addpost" className="ui primary button">
        Yazı Ekle
      </Link>
      {postList.map((post) => {
        return (
          <div className="item" key={post.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${post.id}`} className="header">
                {post.title}
              </Link>
              <div className="description">{post.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

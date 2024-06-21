import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import AddPost from "./components/AddPost";
import UpdatePost from "./components/UpdatePost";

export default function App() {
  return (
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
            <Route path="/" index element={<PostList />} />
            <Route path="/posts/:id" index element={<PostDetail />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/posts/:id/update" element={<UpdatePost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

import axios from "axios";

export function api() {
  return axios.create({
    baseURL: "http://localhost:4001/"
  });
}

// api().get("/posts")
// api().post("/posts")
// axios.get("http://localhost:4001/posts")

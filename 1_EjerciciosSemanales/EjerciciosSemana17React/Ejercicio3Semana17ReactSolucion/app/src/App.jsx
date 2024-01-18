import "./App.css";
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  // Carga aquí los posts con un useEffect...

  return (
    <>
      <h1>Ejercicio Posts</h1>

      <PostForm />

      {posts.length > 0 && <PostList posts={posts} />}

      {posts.length === 0 && <p>No hay posts todavía</p>}
    </>
  );
}

export default App;
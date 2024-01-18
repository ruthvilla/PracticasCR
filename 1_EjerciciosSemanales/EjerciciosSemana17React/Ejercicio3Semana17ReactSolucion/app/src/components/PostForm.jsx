import { useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <form
      onSubmit={() => {
        // Envía los datos del nuevo post a la API. Si la respuesta es correcta, añadiremos el nuevo post al estado de posts
      }}
    >
      <label htmlFor="title">Título:</label>
      <input
        id="title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="body">Contenido:</label>
      <textarea
        id="body"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <label htmlFor="userId">ID usuario:</label>
      <input
        type="number"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button>Crear post</button>
    </form>
  );
};

export default PostForm;
import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

const Content = () => {
  const { tema } = useContext(TemaContext);
  return (
    <main className={tema}>
      <h2>Welcome to my app</h2>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
        doloremque nesciunt harum vel veritatis voluptatibus consequatur ipsa
        nam, quam est consequuntur! Sed pariatur quisquam voluptatum omnis enim.
        Quae, nostrum magni.
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
        doloremque nesciunt harum vel veritatis voluptatibus consequatur ipsa
        nam, quam est consequuntur! Sed pariatur quisquam voluptatum omnis enim.
        Quae, nostrum magni. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Provident iure veritatis libero non quod deserunt ea sed
        necessitatibus quisquam tenetur ipsa neque sapiente repellendus ducimus,
        repellat cupiditate quidem voluptas doloremque.
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
        doloremque nesciunt harum vel veritatis voluptatibus consequatur ipsa
        nam, quam est consequuntur! Sed pariatur quisquam voluptatum omnis enim.
        Quae, nostrum magni. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quaerat, dolores quas dicta aperiam ea molestias nam quis,
        temporibus vel, ratione veniam quam ipsum ipsa eius. Odit voluptatum
        voluptatibus dolores accusantium.
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
        doloremque nesciunt harum vel veritatis voluptatibus consequatur ipsa
        nam, quam est consequuntur! Sed pariatur quisquam voluptatum omnis enim.
        Quae, nostrum magni.
      </p>
    </main>
  );
};

export default Content;

const user1 = { name: "Pepe", lastname: "González" };
const user2 = { name: "María", lastname: "Fernández" };
const user3 = { name: "Juan", lastname: "Pérez" };

const Paragraph = (props) => {
  // Dentro del objeto de 'props' recibimos todas las propiedades que se envían al componente cuando es ejecutado. Si queremos acceder a la propiedad 'user', podemos hacer props.user
  return <p className="text">Hola {props.user.name}</p>;
};

const rootDiv = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootDiv);

reactRoot.render([
  <Paragraph user={user1} />, // Estamos ejecutando el componente Paragraph y le estamos enviando la propiedad 'user' con el valor 'user1'. Las llaves son para poder evaluar JavaScript dentro de JSX, ya que user1 es una variable de JS
  <Paragraph user={user2} />,
  <Paragraph user={user3} />,
]);

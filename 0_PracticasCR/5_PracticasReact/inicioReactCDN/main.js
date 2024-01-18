const paragraph = React.createElement("p", { className: "text" }, "Hola Mundo");

const rootDiv=document.getElementById("root");
const reactRoot=ReactDOM.createRoot(rootDiv);
reactRoot.render(paragraph)
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Juan", "Jorge", "Joah"];
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Esto es para el texto" />
      <List data={list} />
    </Card>
  );
}

export default App;

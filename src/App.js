import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <div className="mx-auto max-w-screen-lg">
        <div className="h-screen flex justify-between items-center">
          <Form />
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;

import { Route } from "react-router-dom";
import "./App.css";
import Complete from "./components/complete/complete";
import Form from "./components/form/form";

function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center">
      <Route exact path="/">
        <Form />
      </Route>
      <Route path="/:id">
        <Complete />
      </Route>
    </div>
  );
}

export default App;

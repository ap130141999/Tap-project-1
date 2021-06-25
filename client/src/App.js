import "./App.css";
import { Container, Col } from "reactstrap";


import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";

export function App() {
  return (
    <main>
      <Container>
        <HomePage />
        <FormPage />
      </Container>
    </main>
  );
}

export default App;

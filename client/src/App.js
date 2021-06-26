import "./App.css";
import { Container } from "reactstrap";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
import TrialFormPage from "./components/trialIputFields";

export function App() {
  return (
    <main>
      <Container>
        <HomePage />
        <FormPage />
        <TrialFormPage />

      </Container>
    </main>
  );
}










export default App;

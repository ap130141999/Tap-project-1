import "./App.css";
import { Container, Col } from "reactstrap";
import {
  DropdownSelectGender,
  DropdownSelectLoan,
  DropdownSelectMartial,
  DropdownSelectEducation,
  DropdownSelectEmplyoment,
} from "./components/dropDownItems";

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

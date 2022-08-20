import { BrowserRouter } from "react-router-dom";
import { Header } from "components/Header";
import { Navigation } from "./routes";
import "styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
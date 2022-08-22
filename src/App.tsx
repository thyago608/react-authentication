import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "contexts/Auth/AuthContext";
import { Header } from "components/Header";
import { Navigation } from "./routes";
import "styles/global.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Navigation />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
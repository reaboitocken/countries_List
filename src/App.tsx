import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;

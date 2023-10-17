import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./hooks/useProducts";
import Router from "./routes/Router";

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Router />
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;

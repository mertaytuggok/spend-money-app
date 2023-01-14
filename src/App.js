import "./App.css";
import { Basket } from "./Components/Basket/Basket";
import { Header } from "./Components/Header/Header";
import { Product } from "./Components/Product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <Basket />
    </div>
  );
}

export default App;

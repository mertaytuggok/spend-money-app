import "./App.css";
import { Basket } from "./Components/Basket/Basket";
import { Header } from "./Components/Header/Header";
import { MoneyCard } from "./Components/MoneyCard/MoneyCard";
import { Product } from "./Components/Product/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <MoneyCard />
      <Product />
      <Basket />
    </div>
  );
}

export default App;

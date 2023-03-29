import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryid" element={ <ItemListContainer/> } /> 
        <Route path="/detalle/:productid" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Error 404: Page not found</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
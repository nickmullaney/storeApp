import Categories from './Components/Categories';
import Footer from './Components/Footer';
import Header from './Components/Header'
// import Products from './Components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Storefront from './Components/Storefront';
import ProductDetails from './Components/ProductDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Storefront />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/products" element={<Storefront />} />
          <Route exact path="/products/:id" element={
          <ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  )
}

export default App;
import Categories from './Components/Categories';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Products from './Components/Products';
import ActiveCategory from './Components/ActiveCategory';
// import SimpleCart from './Components/SimpleCart';

function App() {

  return (
    <>
      <Header /> 
      <Categories />
      {/* <SimpleCart /> */}
      <ActiveCategory />
      <Products />
      <Footer />
    </>
  )
}

export default App;
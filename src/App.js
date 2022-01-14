

import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ProductListing from './components/ProductListing';
import ProductComponent from './components/ProductComponent';
import ProductDetail from './components/ProductDetails';

function App() {
  return (
    <>
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path="*" element={<h1>This page does not exists.</h1>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

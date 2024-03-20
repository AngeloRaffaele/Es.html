import { Route, Routes } from 'react-router-dom';
import Home_page from './components/Home_page';
import Products from './components/Products';

const App = () => {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home_page />}></Route>
          <Route path="/Products" element={<Products />}></Route>
      </Routes>
    </>
  )
};

export default App

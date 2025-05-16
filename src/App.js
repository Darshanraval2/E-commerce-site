import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Componets/Home/Home';
import Cart from './Componets/Cart/Cart';
import Navbar from './Componets/Navbar/Navbar';
import Whishlist from "./Componets/Whishlist/Whishlist"
import { Provider } from 'react-redux';
import Store from './Componets/Store/Srore';
import Log from './Componets/Login/Log';
import Single from './Componets/Singlepage/Single';
import Footer from './Componets/Footer/Footer';
import { ToastContainer, Zoom } from 'react-toastify';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Log';

  return (
    <>
      <Navbar />
      
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
        ClassName="toastBody" />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='Cart' element={<Cart />}></Route>
        <Route path='item/:id' element={<Single />}></Route>
        <Route path='Whishlist' element={<Whishlist />}></Route>
        <Route path='log' element={<Log />}></Route>
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

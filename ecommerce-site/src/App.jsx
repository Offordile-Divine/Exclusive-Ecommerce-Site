import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// // Pages
// import Home from "./pages/home/Home";
// // import Reg_nav from "./register-nav/Reg_nav";
// import Products from "./pages/products/Products";
// import About from "./pages/about/About";
// import Help from "./pages/help/Help";
// import Get_started from "./pages/get-started/Get_started";
// import Reg from "./pages/registration/Reg";
// import Login from "./pages/log-in/Login";
// import Carts from "./pages/carts/Carts";
// import Contact from "./pages/contact/Contact";
// import Order from "./pages/orders/Order";
// import SavedItems from "./pages/savedItems/SavedItems";
// import Inbox from "./pages/inbox/Inbox";
// import Track_order from "./pages/track-order/Track_order";
// import Payment_wallet from "./pages/payment-wallet/Payment_wallet";
// import Logout from "./pages/logout/Logout";
// import Profile_inactive from "./pages/profile/Profile_inactive";
// import Profile from "./pages/profile/Profile";
// import Checkout from "./pages/checkout/Checkout";

export const AppContext = createContext("Bruce");

function App() {

  const [name, setName] = useState("Bruce");
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/registration" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getStarted" element={<Get_started />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inactiveProfile" element={<Profile_inactive />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/savedItems" element={<SavedItems />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/track" element={<Track_order />} />
          <Route path="/paymentWallet" element={<Payment_wallet />} />
          <Route path="/logOut" element={<Logout />} />
        </Routes> */}
      {/* </BrowserRouter> */}
      <AppContext.Provider value={{ name, setName }}>
        {/* <Get_started /> */}
        {/* <Login /> */}
        {/* <Reg /> */}
        {/* <Otp /> */}
        {/* <Checkout /> */}
      </AppContext.Provider>
    </>
  );
}

export default App;


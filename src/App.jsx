import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/profile/Profile.jsx";
import About from "./pages/about/About.jsx";
import Help from "./pages/help/Help.jsx";
import Reg from "./pages/registration/Reg.jsx";
import Login from "./pages/log-in/Login.jsx";
import Get_started from "./pages/get-started/Get_started.jsx";
import Carts from "./pages/carts/Carts.jsx";
import ProfileInactive from "./pages/profile/profileInfo/ProfileInactive.jsx";
import Order from "./pages/orders/Order.jsx";
import SavedItems from "./pages/savedItems/SavedItems.jsx";
import Inbox from "./pages/inbox/Inbox.jsx";
import Track_order from "./pages/track-order/Track_order.jsx";
import Payment_wallet from "./pages/payment-wallet/Payment_wallet.jsx";
import Logout from "./pages/logout/Logout.jsx";
import Home from "./pages/home/Home.jsx";
import NofoundPage from "./pages/noFoundPage/NofoundPage.jsx";
import ProfileAccountInfo from "./pages/profile/profileInfo/ProfileAccountInfo.jsx";
import ProfileDeliveryDrop from "./pages/profile/profileInfo/ProfileDeliveryDrop.jsx";
import ProfileSubmitAddress from "./pages/profile/profileInfo/ProfileSubmitAddress.jsx";
import ProfileEditDelete from "./pages/profile/profileInfo/ProfileEditDelete.jsx";
import ProfileDelete from "./pages/profile/profileInfo/ProfileDelete.jsx";
import Otp from "./pages/otp/Otp.jsx";
import Products from "./pages/products/Product.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ShopContextProvider from "./context/Shop-context.jsx";
import Shop from "./pages/products/Shop.jsx";
import ReturnPolicy from "./pages/returnPolicy/ReturnPolicy.jsx";
import Faq from "./pages/faq/Faq.jsx";
import Terms from "./pages/terms/Terms.jsx";
import { EmailProvider } from "./context/EmailContext.jsx";
import Privacy from "./pages/privacy/Privacy.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import GoogleAuthSuccess from "./pages/googleauth/GoogleAuthSuccess.jsx";
import GoogleAuthFailure from "./pages/googleauth/GoogleAuthFailure.jsx";
import ProfileOrderHistory from "./pages/profile/profileInfo/ProfileOrderHistory.jsx";
import ProfileOrder2 from "./pages/profile/profileInfo/ProfileOrder2.jsx";

export const AppContext = createContext("Bruce");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NofoundPage />,
  },

  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "/profile/",
        element: <ProfileInactive />,
      },
      {
        path: "/profile/myProfile",
        element: <ProfileAccountInfo />,
      },
      {
        path: "/profile/myAdddress",
        element: <ProfileDeliveryDrop />,
      },
      {
        path: "/profile/myAddress/deliveryDrop",
        element: <ProfileSubmitAddress />,
      },
      {
        path: "/profile/delAcct",
        element: <ProfileDelete />,
      },
      {
        path: "/profile/orderHistory",
        element: <ProfileOrderHistory />,
      },
      {
        path: "/profile/orderHistory2",
        element: <ProfileOrder2 />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/registration",
    element: <Reg />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/getStarted",
    element: <Get_started />,
  },
  {
    path: "/cart",
    element: <Carts />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/inactiveProfile",
    element: <ProfileInactive />,
  },
  {
    path: "/orders",
    element: <Order />,
  },
  {
    path: "/savedItems",
    element: <SavedItems />,
  },
  {
    path: "/inbox",
    element: <Inbox />,
  },
  {
    path: "/track",
    element: <Track_order />,
  },
  {
    path: "/paymentWallet",
    element: <Payment_wallet />,
  },
  {
    path: "/logOut",
    element: <Logout />,
  },
  {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/returnPolicy",
    element: <ReturnPolicy />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "googleSuccess",
    element: <GoogleAuthSuccess />,
  },
  {
    path: "/googleFailure",
    element: <GoogleAuthFailure />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

function App() {
  const [name, setName] = useState("Bruce");
  const [loggedIn, setLoggedIn] = useState("");
  return (
    <>
      <AppContext.Provider
        value={{
          name,
          loggedIn,
        }}
      >
        <EmailProvider>
          <ShopContextProvider>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </ShopContextProvider>
        </EmailProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
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
 ],
 },

 {
 path: "/products",
 element: <Products />,
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
]);

createRoot(document.getElementById("root")).render(
 <StrictMode>
 {/* <App /> */}
 <RouterProvider router={router} />
 </StrictMode>
);


import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginRegister from "./pages/login&register.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import Dashboard from "./pages/dashboard.tsx";
import Aboutus from "./pages/aboutus.tsx";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<LoginRegister/>
        },
        {
            path:"/forgotpassword",
            element:<ForgotPassword/>
        },
        {
            path:"/dashboard",
            element:<Dashboard/>
        },
        {
            path:"/aboutus",
            element:<Aboutus/>
        },











    ]
)
function App() {

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}
export default App
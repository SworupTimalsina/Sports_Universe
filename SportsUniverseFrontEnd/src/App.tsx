import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginRegister from "./pages/login&register.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";

const router = createBrowserRouter(
    [
        {
            path:"/login&register",
            element:<LoginRegister/>
        },
        {
            path:"/forgotpassword",
            element:<ForgotPassword/>
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
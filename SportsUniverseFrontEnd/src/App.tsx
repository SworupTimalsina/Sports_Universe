import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from "./pages/register.tsx";

const router = createBrowserRouter(
    [
        {
            path:"/register",
            element:<Register/>
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
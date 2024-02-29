import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import HomeComponent from "../components/topbar/Homecomonents";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeComponent/>,
    },
  ]);  
  export default router;
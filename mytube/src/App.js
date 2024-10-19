import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watchpage from "./components/Watchpage";
import { Outlet } from "react-router-dom";

function App() {


  const AppLayout = () => {
    return (
      <div>
      <Header />
      <div className="flex w-full m-0">
        <Leftbar/>
        <Outlet />
      </div>
    </div>
    )
  }

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/watch",
          element: <Watchpage/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;

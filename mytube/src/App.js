import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {


  const AppLayout = () => {
    return (
      <div>
      <Header />
      <div className="flex w-full m-0">
        <Leftbar/>
        <Body/>
      </div>
    </div>
    )
  }

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
    }
  ])
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;

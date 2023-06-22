import "./App.css";
import HomePage, {loader as homePageLoader } from "./components/HomePage";
import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route 
    path="/" 
    element={<HomePage />} 
    errorElement={<h1>There was an error</h1>}
    loader={homePageLoader} />
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

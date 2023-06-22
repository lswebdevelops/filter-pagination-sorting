import "./App.css";
import HomePage from "./components/HomePage";
import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/characters" element={<HomePage />} />
));

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import React from "react"
import './index.css'
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
  useLoaderData
} from "react-router-dom"
import { requireAuth } from "./utils"

import Layout from "./Layout"
import AuthRequired from "./AuthRequired"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route
      index
      element={<h1>Home page</h1>}
    />
    <Route
      path="protected"
      element={<h1>Super secret info here</h1>}
      loader={async () => await requireAuth()}
    />
    <Route path="login" element={<Login />} loader={loginLoader}/>

  </Route>
))


function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

function Login() {
  const message = useLoaderData()
 
  return (
    <>
    {
      message && <h2>{message}</h2>
    }
      <h1>Login page goes here</h1>
    
    </>
  )
}

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
import React from "react";
import { useNavigate, Form } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  // process this info however I wanted 
  // pass the email and password to the loginuser function 
  console.log(email, password);
  
  return null
}

export default function Login() {
  return (
    <Form method="post">
      <input type="email" name="email" placeholder="Email address" />
      <br />
      <input type="password" name="password" placeholder="Password" />
      <br />
      <button>Log in</button>
    </Form>
  );
}

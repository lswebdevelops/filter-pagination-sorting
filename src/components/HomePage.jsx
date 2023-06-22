import React from "react";
import { useLoaderData } from "react-router-dom";


export function loader() {
    // throw new Error(" this is an error")
    return "The data is here"
}

const HomePage = () => {
    const data = useLoaderData()
    console.log(data);
    // throw new Error("undefined")

    return(
   <div>
         <h2>Home page</h2>

   </div>
    )


}

export default HomePage;
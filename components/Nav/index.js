import requests from "../../utils/requests";
import { useRouter } from "next/dist/client/router";

export default function Results() {
    // 
    const router = useRouter();
    return (
        <nav>
        <h1></h1>
        {/* mobile friendly css using flex & grid*/}
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {/* map through my requests.js to grab my key (variable) and the value (borough and url) */}
            {Object.entries(requests).map(([key, { borough, url }]) => (
                // when i click a borough the url will change and will add the key "name" fro example "fetch" that i grabbed from results.js
                <h2 key={key}  onClick={() => router.push(`/?borough=${key}`)} 
                className=" cursor-pointer bg-blue-600 hover:bg-blue-500 text-white
                py-4 border-b-4 border-blue-800 hover:border-blue-500 rounded m-5 tracking-widest">{borough}</h2>
                ))}
        </div>
    </nav>
    )
   
}
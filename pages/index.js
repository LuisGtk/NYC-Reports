import Head from 'next/head'
import Link from 'next/link'
import requests from '../utils/requests';
import Results from '../components/Results';
import { useState } from 'react';

export default function Home(props) {
  // using useState to grab data from api since I couldnt get data from using getServerSideProps
  const [result, setResult] = useState([]);
  const onGetData = async (borough, url) => {
    // console.log(borough, url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setResult(data);
  }
  return (
      <div className="bg-gradient-to-r from-green-400 to-blue-500">
        <Head>
          <title className="">NYC-Reports</title>
          {/* Added 311 logo to add more "realism" to site */}
          <link rel="icon" href="https://www.nuance.com/content/dam/nuance/shared-images/logos/non-nuance/logo-nyc311.png" />
        </Head>
        {/* making the title a link to go back to home page */}
        <Link href="/"><a className="font-extrabold m-l:4 text-2xl"> NEW YORK CITY 311-REPORTS </a></Link>
        <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
          {/* map through my requests.js to grab my key (variable) and the value (borough and url) */}
          {Object.entries(requests).map(([key, { borough, url }]) => (
            <h2 key={key} onClick={() => onGetData(borough, url)}
              className=" cursor-pointer bg-blue-600 hover:bg-blue-500 text-white
                py-4 border-b-4 border-blue-800 hover:border-blue-500 rounded m-6 tracking-widest">{borough}</h2>
          ))}
        </div>
        {/* tabel-head element */}
        <table className="table-auto border-separate ">
          <thead>
            <tr>
              {/* headers to the tabel */}
              <th className="px-4 py-3">Agent</th>
              <th >Agent Name</th>
              <th >Borough</th>
              <th>City</th>
              <th>Complaint Type</th>
              <th>Descriptor</th>
              <th>Cross Street 1</th>
              <th>Cross Street 2</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody >
            {/* all the called data */}
            {
              result.map((row, index) => (
                <tr className="bg-blue-600 border-separate border font-bold tracking-widest " key={index}>
                  {/* added padding due to data being too close together */}
                  <td className="px-4 py-3">{row['agency']}</td>
                  <td className="px-4 py-3">{row['agency_name']}</td>
                  <td className="px-4 py-3">{row['borough']}</td>
                  <td className="px-4 py-3">{row['city']}</td>
                  <td className="px-4 py-3">{row['complaint_type']}</td>
                  <td className="px-4 py-3">{row['descriptor']}</td>
                  <td className="px-4 py-3">{row['cross_street_1']}</td>
                  <td className="px-4 py-3">{row['cross_street_2']}</td>
                  <td className="px-4 py-3">{row['status']}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
  )
}
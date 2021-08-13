import Head from 'next/head'
import Nav from '../components/Nav'
import Link from 'next/link'
import requests from '../utils/requests';
import Results from '../components/Results';
import { useState  } from 'react';

// import Results from '../components/Nav';
export const getStaticProps = async () => {
  
  const res = await fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?unique_key=10693408');
  const data = await res.json();
  return {
    props: {results: data}
  }
}

export default function Home(props) {
  const [result, setResult] = useState([]);
  const onGetData = async (borough, url) => {  
    console.log(borough, url);
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
    setResult(data);
  }
  // console.log(props)
  return (
    <div className=''>
      <Head>
        <title>NYC-Reports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* making the title a link to go back to home page */}
      <Link href="/"><a className="font-extrabold m-l:4"> NEW YORK CITY 311-REPORTS </a></Link>
      
      <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {/* map through my requests.js to grab my key (variable) and the value (borough and url) */}
            {Object.entries(requests).map(([key, { borough, url }]) => (
                // when i click a borough the url will change and will add the key "name" fro example "fetch" that i grabbed from results.js
                <h2 key={key}  onClick={() => onGetData(borough, url)} 
                className=" cursor-pointer bg-blue-600 hover:bg-blue-500 text-white
                py-4 border-b-4 border-blue-800 hover:border-blue-500 rounded m-5 tracking-widest">{borough}</h2>
                ))}
        </div>
   {/* tabel-head element */}
      <table>
        <thead>
            <tr>
              <th>Agent Name</th>
              <th>Borough</th>
              <th>City</th>
              <th>Complaint Type</th>
              <th>Descriptor</th>
            </tr>
        </thead>
        <tbody>
          {
            result.map((row, index) => (
              <tr key={index}>
                <td>{row['agency_name']}</td>
                <td>{row['borough']}</td>
                <td>{row['city']}</td>
                <td>{row['complaint_type']}</td>
                <td>{row['descriptor']}</td>
              </tr>
            ))
          }
        </tbody>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
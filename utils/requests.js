const API_KEY = process.env.API_KEY;
// creating my backend
export default {
    fetchQueens: {
        borough: "Queens",
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS"
    },
    fetchBronx: {
        borough: "Bronx",
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX",
    },
    fetchBrookyln: {
        borough: "Brooklyn",
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN"
    },
    fetchStatenIsland: {
        borough: "Staten Island",
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN%20ISLAND"
    },
    fetchManhattan: {
        borough: "Manhattan",
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN"
    },
    fetchRecent: {
        borough: "Recent",
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
    },
}
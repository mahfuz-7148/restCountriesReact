import {use, useState} from 'react';
import Country from "./Country.jsx";

const Countries = ({countries}) => {
    const countriesData = use(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");



    const handleVisitedCountries = country => {
        setVisitedCountries((prevCountries) => {
            const isCountryVisited = prevCountries.some(
                (c) => c.name.common === country.name.common
            );
            if (!isCountryVisited) {
                return [...prevCountries, country];
            }
            return prevCountries.filter(
                (c) => c.name.common !== country.name.common
            );
        });
    }

    return (
        <div className='max-w-screen-2xl mx-auto px-5'>
            <h1 className="text-indigo-700 text-4xl font-medium my-6 text-center">
                Travelling Countries: {countriesData.length}
            </h1>

           <div className='flex justify-end'>
               <h1 className="text-2xl mb-5">Traveled so far: {visitedCountries.length}</h1>
               <ul className="my-6 text-fuchsia-500 text-2xl text-end">
                   {visitedCountries.map((country) => (
                       <li className='text-center' key={country.name.common}>
                           {country.name.common}
                       </li>
                   ))}
               </ul>
           </div>
           <div className='grid grid-cols-4 gap-5 p-3'>
                   {
                       countriesData.map(country => (
                           <Country key={country.cca3} country={country}  onVisitedCountries={handleVisitedCountries}/>
                       ))
                   }
           </div>


        </div>
    );
};

export default Countries;
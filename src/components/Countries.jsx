import {use, useState} from 'react';
import Country from "./Country.jsx";

const Countries = ({countries}) => {
    const countriesData = use(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    return (
        <div className='max-w-screen-2xl mx-auto px-5'>
            <h1 className="text-indigo-700 text-4xl font-medium my-6 text-center">
                Travelling Countries: {countriesData.length}
            </h1>
            <h1 className="text-2xl mb-10">Traveled so far: {visitedCountries.length}</h1>
           <div className='grid grid-cols-3 gap-5 p-3'>
                   {
                       countriesData.map(country => (
                           <Country key={country.cca3} country={country} />
                       ))
                   }
           </div>
        </div>
    );
};

export default Countries;
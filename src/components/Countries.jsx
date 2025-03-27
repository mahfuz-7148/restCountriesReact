import {use, useState} from 'react';
import Country from "./Country.jsx";

const Countries = ({countries}) => {
    const countriesData = use(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = country => {
        setVisitedCountries((prevCountries) => {
            // চেক করি এই দেশ আগে ভিজিট করা আছে কিনা
            const isCountryVisited = prevCountries.some(
                (c) => c.name.common === country.name.common
            );

            // যদি না থাকে, তাহলে লিস্টে যোগ করি
            if (!isCountryVisited) {
                return [...prevCountries, country];
            }

            // যদি থাকে, তাহলে বাদ দিয়ে নতুন লিস্ট দিই
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
            <h1 className="text-2xl mb-10">Traveled so far: {visitedCountries.length}</h1>
           <div className='grid grid-cols-3 gap-5 p-3'>
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
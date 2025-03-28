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
        <div className='container mx-auto px-5'>
            <h1 className="text-indigo-700 text-4xl font-medium my-6 text-center">
                Travelling Countries: {countriesData.length}
            </h1>

            <div className='w-full flex justify-between'>
                <div className='w-3/4 grid grid-cols-4 gap-5 p-3'>
                    {
                        countriesData.map(country => (
                            <Country key={country.cca3} country={country}  onVisitedCountries={handleVisitedCountries}/>
                        ))
                    }
                </div>

                <div className='w-1/4  my-6 text-emerald-600 text-2xl text-center'>
                    <h1 className="mb-5 text-indigo-700 text-3xl">Traveled so far: {visitedCountries.length}</h1>
                    <div>
                        {visitedCountries.map((country) => (
                            <p key={country.name.common}>
                                {country.name.common}
                            </p>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Countries;
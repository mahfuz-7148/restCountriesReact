import 'remixicon/fonts/remixicon.css'
import {use, useState} from 'react';
import Country from "./Country.jsx";

const Countries = ({countries}) => {
    const countriesData = use(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


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

    const filteredCountries = countriesData.filter((country) =>
        country.name.common
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container mx-auto px-5'>
            <h1 className="text-indigo-700 text-4xl font-medium my-6 text-center">
                Travelling Countries: {countriesData.length}
            </h1>

            <div className="mb-5 text-center">

                <div>
                    <i className="ri-search-line text-indigo-900 text-2xl"></i>
                    <input
                        value={searchTerm}
                        onChange={(evt) => setSearchTerm(evt.target.value)}
                        className="border border-gray-400 rounded-md ml-2 px-2 py-2 outline-none"
                        placeholder='Search Country'
                    />
                </div>
            </div>

            <div className='w-full flex justify-between'>
                <div className='w-3/4 grid grid-cols-4 gap-5 p-3'>
                    {filteredCountries.map(country => (
                        <Country
                            key={country.cca3}
                            country={country}
                            onVisitedCountries={handleVisitedCountries}
                            visitedCountries={visitedCountries}
                        />
                    ))}
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
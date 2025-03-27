import {useState} from "react";


const Country = ({country, onVisitedCountries}) => {
    const [visited, setVisited] = useState(false);

    return (
        <div className='border border-amber-900 p-3 rounded-lg text-2xl'>
            <div className="w-full h-52">
                <img className="w-full h-full" src={country.flags.png} alt="" />
            </div>
            <h3>Name: {country.name.common}</h3>
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population: {country.population}</p>
            <button
                onClick={()=> {setVisited(!visited),
                    onVisitedCountries(country)}}
                className="border mt-3 border-slate-400 py-2 px-4 rounded-md cursor-pointer"
            >
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;
import {useState} from "react";


const Country = ({country, onVisitedCountries}) => {
    const [visited, setVisited] = useState(false);

    return (
        <div className='border border-amber-900 p-3 rounded-lg text-xl'>
            <div className="w-full">
                <img className="w-full h-44" src={country.flags.png} alt="" />
            </div>
          <div className='flex flex-col justify-between items-start gap-y-5'>
             <div>
                 <h3>Name: {country.name.common}</h3>
                 <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
                 <p>Population: {country.population}</p>
             </div>
              <button
                  onClick={()=> {setVisited(!visited),
                      onVisitedCountries(country)}}
                  className="border mt-3 border-slate-400 py-2 px-4 rounded-md cursor-pointer"
              >
                  {visited ? "Visited" : "Not Visited"}
              </button>
          </div>
        </div>
    );
};

export default Country;
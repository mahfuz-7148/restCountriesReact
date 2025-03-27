

const Country = ({country}) => {
    return (
        <div className='border border-amber-900 p-3 rounded-lg text-2xl'>
            <div className="w-full h-52">
                <img className="w-full h-full" src={country.flags.png} alt="" />
            </div>
            <h3>Name: {country.name.common}</h3>
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population: {country.population}</p>
        </div>
    );
};

export default Country;
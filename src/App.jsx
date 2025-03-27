import {Suspense} from "react";
import Spinner from "./components/Spinner.jsx";
import Countries from "./components/Countries.jsx";


const App = () => {
    const countries = fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json()
    );
    return (
        <div>
            <Suspense fallback = { <Spinner />}>
                <Countries countries={countries} />
            </Suspense>
        </div>
    );
};

export default App;
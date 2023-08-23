import { createContext, useEffect, useState } from "react";

export const FetchContext = createContext()

const FetchProvider = ({ children }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/logements.json")
            .then(res => (res.json()))
            .then(res => setCards(res))
            .catch((error) => console.log(error))

    }, []);

    return (
        <FetchContext.Provider value={{ cards, setCards }}>
            {children}
        </FetchContext.Provider>
    )
}

export default FetchProvider
import { useEffect, useState } from "react";
import { SuperHero } from '../interfaces/superHeroesInterfaces';

export const useSuperheros = () => {
    const data = require('./superhero.json');
    const [isLoadingHero, setIsLoadingHero] = useState(true);
    const [superHeroesState, setSuperHeroes] = useState<SuperHero[]>([]);

    useEffect(() => {
      getSuperHeroes();
    }, []);

    
    const getSuperHeroes =async () => {
        // console.log(JSON.stringify(data, null, 5));        
        setSuperHeroes(data);
        setIsLoadingHero(false);
    }

    return{
        superHeroesState,
        isLoadingHero
    }
}
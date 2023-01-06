import {useEffect, useState} from "react";
import baseApi from "../apis/baseApi";
import { SuperheroInterface } from '../interfaces/superheroInterface';
import data from '../data/api.json';


export const useSuperheroes = () =>{
    
    const [isLoading, setIsLoading] = useState(true);
    const [superHeroes, setSuperHeroes] = useState<SuperheroInterface[]>([]);

    useEffect(() => {
      getSuperhero();
    }, []);

    useEffect(() => {
        getSuperhero();
      }, []);

    const getSuperhero = async () => {
        const resp = await baseApi.get<SuperheroInterface[]>('/all.json');
        console.log(JSON.stringify(resp.data, null, 5));
        setSuperHeroes(resp.data);
        setIsLoading(false);
    }


    const getSuperheroJSON = async () => {
        setSuperHeroes(data);
        setIsLoading(false);
    }
    
    return{
        isLoading,
        superHeroes
    }
}

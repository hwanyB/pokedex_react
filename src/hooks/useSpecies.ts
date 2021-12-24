import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from 'react-query';


const speciesApi =(id: string) => axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

const useSpecies = (id: string) => useQuery<AxiosResponse<SpeciesResponse>, Error>(['species', { id }, () => speciesApi(id)]);


export default useSpecies;
"use server"

import AnimeCard, { IAnimeCardProps } from "@/components/AnimeCard"
import axios from "axios"

export const fetchApi = async (page:number)=>{
    const response = await axios.get(`https://shikimori.one/api/animes/?page=${page}&limit=6&order=popularity`)
    const data = response.data

    return (data.map((anime:IAnimeCardProps,index:number)=><AnimeCard anime={anime} index={index} key={anime.id}/>))
}

// data.map((item:IAnimeCardProps,index:number)=><AnimeCard anime={item} index={index} key={item.id}/>
//     )
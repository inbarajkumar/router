import React from 'react';

import { useLoaderData , useNavigation } from 'react-router-dom';
export const Data = () => {
    const  petUrl = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === "loading"){
        return <h1>Loading...</h1>
    }
    return (
        <img width={400} height={400} src={petUrl} alt="" />
    )
}

export const dataLoader = async () => {
    const res =  await fetch("https://random.dog/woof.json")
    const pet = await res.json();

    return pet.url;

};

export default Data;
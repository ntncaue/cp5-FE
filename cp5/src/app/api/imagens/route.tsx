import { NextResponse } from "next/server";


const imagens = [
    {id: 1, url:"https://apod.nasa.gov/apod/image/2410/zaparolliA3.png"}, 
    {id: 2, url:"https://apod.nasa.gov/apod/image/2410/earliestsolareclipse1024.jpg"}, 
    {id: 3, url:"https://apod.nasa.gov/apod/image/2410/LMC_Nowak_2160.jpg"}
];

export async function GET(){
    return NextResponse.json(imagens)
}

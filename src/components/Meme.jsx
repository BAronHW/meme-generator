import { useState } from 'react';
import memesData from '../memesData'
export default function Meme(){
    const [memeImage,setmemeImage] = useState("");

    function getMemeImage(){
        event.preventDefault();
        const memeArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setmemeImage(memeArray[randomNumber].url);
    }

    
    return(
        <main>
            <form action="" className="form">
                <input type="text" name="" id="" className="form--input" placeholder="Top text"/>
                <input type="text" name="" id="" className="form--input" placeholder="Bottom text"/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <div className='meme--image--container'>
            <img src = {memeImage} className='meme--image'/>
            </div> 
        </main>
    )
}

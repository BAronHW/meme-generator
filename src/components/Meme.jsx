import { useEffect, useState } from 'react';
export default function Meme(){
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allmemeimg, setallmemeimg] = useState([])

    function getMemeImage(){
        event.preventDefault();
        const randomnumber = Math.floor(Math.random() * allmemeimg.length)
        const randomurl = allmemeimg[randomnumber].url;
        setMeme(prevstate => {
            return {
                ...prevstate,
                randomImage: randomurl
            }
        })
        
    }

    const handleformchange = (event) => {
        const { name, value } = event.target;
    
        setMeme(prev => ({
            ...prev,
            [name]: value
        }));
    }

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallmemeimg(data.data.memes))
    },[]);
    

    // async function fetchmemes() {
    //     try {
    //         const response = await fetch("https://api.imgflip.com/get_memes");
    
    //         // Check if the fetch was successful
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    
    //         const memesjson = await response.json();
    //         return memesjson;
    //     } catch (error) {
    //         console.error('Failed to fetch memes:', error);
    //         // Handle errors or rethrow, depending on your use case
    //     }
    // }

    return(
        <main>
            <form action="" className="form">
                <input type="text" id="" className="form--input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleformchange}/>
                <input type="text" id="" className="form--input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleformchange}/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

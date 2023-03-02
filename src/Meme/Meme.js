import React, { useEffect, useState} from 'react';



export const Meme = () => {
    
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then(res => {
          res.json().then(res => {
            const _memes = res.data.memes;
        
            
          });
        });
      }, []); 
    
    
    return (
    <>Hello</>
    );
    
}
import React from "react";
import { useState } from "react";

const buttons = [1,2,3,4,5];
const imgs = [1,2,3,4,5];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextClick = () => {
        if(currentIndex === imgs.length - 1){
          setCurrentIndex(imgs.length - 1);
        }else{
          setCurrentIndex(currentIndex + 1);
        }
        
    };

    const preClick = () => {
        if(currentIndex  === 0){
            setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex - 1);
        }
       
    };

    const clickImgNum = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div>
            <div className="layout-div">
                <div className="btn-div">
                    <button className="btn-style" onClick={preClick}>Previous</button>
                </div>
                <div className="img-div">
                    {
                        imgs.map((img, index)=>{
                            if(currentIndex === index){
                                return <div key={index} className="img-style">Image Number {img}</div>
                            }     
                        })
                    }
                </div>
                <div className="btn-div">
                    <button className="btn-style" onClick={nextClick}>Next</button>
                </div>
            </div>
            <div className="btns-div">
                {buttons.map((btn, index)=>{
                     return <button key={index} onClick={()=>clickImgNum(index)}>{btn}</button>
                })}
            </div>
        </div>
   )
};

export default ImageSlider;
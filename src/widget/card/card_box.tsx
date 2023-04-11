import React, { FC, useState } from "react";
import { IMAGE_URL } from "../../config/config";
import Yugioh_Card from "../../domain/yugioh_card";



type Yugioh_Card_Prop = {

    info : Yugioh_Card
}
const CardBox = ({info}: Yugioh_Card_Prop) => {
    
    // const IMAGE_URL = 'https://jinsu-s3.s3.ap-northeast-2.amazonaws.com/images/10000.jpg'
    const image_url = IMAGE_URL
    const [monster, setMonster] = useState(false)

    // bg should be different by card type 

    const atkdef = (korean_string: String | null) => {
        const battle_value =  korean_string!.split(' ')[1]
        return battle_value
    }
    
    const isMonster = (card_type: String) => {

    }
    

    const attribute_image = (attr: String) => {
        switch(attr){
            case '화염':
                return 'fire' 
            case '물':
                return 'water' 
            case '바람':
                return 'wind' 
            case '땅':
                return 'earth' 
            case '어둠':
                return 'dark' 
            case '빛':
                return 'light' 
            case '속공':
                return 'quick' 
            case '필드':
                return 'field' 
            case '장착':
                return 'equip' 
            case '의식':
                return 'ritual' 
            case '지속':
                return 'cont' 
            case '카운터':
                return 'counter' 
            default:
                return ''
        }
    }


    const Level_Star = ({info}: Yugioh_Card_Prop) => {
        return(
            <div>
                {info.level}
            </div>
        )
    }

    return(
        <div className="bg-blue-200 border-solid border-4 border-black rounded-md max-w-xs">
            <div className="m-2 w-1/2? flex flex-1 bg-white bg-opacity-20 justify-between items-center
                    border-b-2 border-r-2 border-t-red-200 border-t-2 border-l-red-200 border-l-2 border-black" id="name_box">
                <div className="m-1 text-left overflow-hidden " id="name">
                    {info.name}
                </div>
                <div className="p-0 float-right">
                    <img src={`card_icon/${attribute_image(info.attribute!)}.png`} className="w-8"  alt="" />
                </div>
            </div>
            <div className="flex flex-1 items-end">
                {info.type === '몬스터' ?
                    <Level_Star info={info}></Level_Star>:
                    <div className="flex flex-1 left-0 items-end">
                        [{info.type} 카드]
                    </div>
                }
            </div>
            <div className="m-4">
                <div className="m-auto w-52 border-blue-500 border-4 rounded-sm shadow-lg" id="image_box">
                    <img className="object-cover w-52 h-52" src={`${IMAGE_URL}/${info.eng_id}.jpg`} alt="" />
                </div>

            </div>
            <div className="m-2 p-1 bg-white bg-opacity-50 border-2 border-orange-600" id="description_box">
                <div className="text-xs p-1">
                    {info.description}
                </div>
                {info.atk &&
                <div className="text-right text-sm border-t border-black">
                    {`ATK/${atkdef(info.atk)} DEF/${atkdef(info.def)}`}
                </div>    
                }
            </div>
        </div>
    )
}

export default CardBox



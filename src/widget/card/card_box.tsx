import React, { FC } from "react";
import { IMAGE_URL } from "../../config/config";
import Yugioh_Card from "../../domain/yugioh_card";

type Yugioh_Card_Prop = {

    info : Yugioh_Card
}
const CardBox = ({info}: Yugioh_Card_Prop) => {
    
    // const IMAGE_URL = 'https://jinsu-s3.s3.ap-northeast-2.amazonaws.com/images/10000.jpg'
    const image_url = IMAGE_URL

    // bg should be different by card type 

    const atkdef = (korean_string: String | null) => {
        const battle_value =  korean_string!.split(' ')[1]
        return battle_value
    }

    return(
        <div className="bg-blue-200 border-solid border-4 border-black rounded-md max-w-xs">
            <div className="m-1 p-1 w-1/2? flex flex-1 bg-white rounded-md justify-between" id="name_box">
                <div className="text-left overflow-hidden" id="name">
                    {info.name}
                </div>
                <div className="float-right">
                    {info.attribute}
                </div>
            </div>
            <div className="m-4 w-52" id="image_box">
                <img src={`${IMAGE_URL}/${info.eng_id}.jpg`} alt="" />
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



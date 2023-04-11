
import React, { useEffect, useState } from "react"
import axios from "axios"
import { API_URL } from "../../config/config"
import Yugioh_Card from "../../domain/yugioh_card"
import CardBox from "../card/card_box"

const MainPage = () => {
    const [cardList, setCardList] = useState<Yugioh_Card[]>([])

    useEffect(() => {
        axios.get(API_URL + '/random')
        .then((result) =>{
            setCardList(result.data)
            console.log('result.data : ', result.data)
        })
    },[])

    return(
        <div className="p-2 m-auto container bg-slate-200">
            <h1>
                메인페이지
                <img src="kuriboh.png" alt="" />
            </h1>
            <div className="flex flex-row mobile:flex-col p-2">
                {cardList.map((item, index) => 
                    <CardBox info={item}></CardBox>

                )}
            </div>
        </div>
    )
}

export default MainPage
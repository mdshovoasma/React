import React,{useState} from "react";
import NewExponsesForm from './NewExponsesForm'
import './NewExponses.css'
import Exponses from "../Exponses/Exponses";

const NewExponses=(props)=>{

    const excepttransferDAta=(data)=>{
       
        const ExponseData={
            ...data, //kana data ka copy kora hoica
            id:Math.random().toString()

        }
         
        props.sendData(ExponseData);
            console.log(ExponseData);

    }
    return(
        <div>
            <NewExponsesForm transferDAta = {excepttransferDAta}></NewExponsesForm>
        </div>
    )
}
export default NewExponses;
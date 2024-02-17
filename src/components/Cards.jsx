import React, { useState } from "react";
import styles from "../Styles/Cards.module.css";
import { TbReportMoney } from "react-icons/tb";
import { LuNewspaper } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

function Cards() {
    const cardContent=[
        {name:"AMZN",price:200,percentage:-0.25,risk:"Low Risk"},
        {name:"TSLA",price:200,percentage:0.25,risk:"High Risk"},
        {name:"ABQQ",price:200,percentage:0.25,risk:"High Risk"},
        {name:"MSFT",price:200,percentage:-0.25,risk:"Low Risk"},
        {name:"PYPL",price:200,percentage:-0.25,risk:"Low Risk"},
        {name:"NFLX",price:200,percentage:-0.25,risk:"Low Risk"},
        {name:"NFLX",price:200,percentage:-0.25,risk:"Low Risk"},
        {name:"NFLX",price:200,percentage:-0.25,risk:"Low Risk"},
        {name:"NFLX",price:200,percentage:-0.25,risk:"Low Risk"},
        {name:"NFLX",price:200,percentage:-0.25,risk:"Low Risk"},
        {name:"NFLX",price:200,percentage:-0.25,risk:"Low Risk"},
    ]
    const [openCardIndex, setOpenCardIndex] = useState(null);

  function handleToggle(index) {
    if (openCardIndex === index) {
      setOpenCardIndex(null);
    } else {
      setOpenCardIndex(index);
    }
  }
    return (
        <>
           <div className="row ms-4 ps-3">
                {cardContent.map((card,i)=>(
                <div key={i}>
                    <div style={{cursor:"pointer"}} onClick={()=>handleToggle(i)} className={`col-md-12 mt-3 ${openCardIndex ===i?`${styles.opencard}`:`${styles.card}`}`}>
                   <div className="row p-3 text-white">
                   <div className={`col-md-3  d-flex justify-content-center align-items-center ${styles.cardLine}`}>
                    <span className="d-flex align-items-center"><TbReportMoney style={{fontSize:"22px",marginRight:"20px"}}/> {card.name}</span>
                    </div>
                    <div className={`col-md-3  d-flex justify-content-center align-items-center ${styles.cardLine}`}>
                    <span className="d-flex align-items-center"><LuNewspaper style={{fontSize:"22px",marginRight:"20px"}}/> {card.price}</span>
                    </div>
                    <div className={`col-md-3  d-flex justify-content-center align-items-center ${styles.cardLine}`}>
                    <span className="d-flex align-items-center"><SlGraph style={{fontSize:"22px",marginRight:"20px"}}/> <span style={card.percentage >0?{fontSize:"11px",color:"green"}:{fontSize:"11px",color:"red"}}>{card.percentage} %</span></span>
                    </div>
                    <div className={`col-md-3  d-flex justify-content-center align-items-center`}>
                    <span className="d-flex align-items-center">{card.risk==="Low Risk"?<><LiaMoneyBillWaveSolid style={{fontSize:"22px",marginRight:"20px"}}/> {card.risk}</>:<><LiaMoneyBillWaveAltSolid style={{fontSize:"22px",marginRight:"20px"}}/> {card.risk}</>}</span>
                    </div>
                   </div>
                 {openCardIndex === i&& <div className={`${styles.details} text-white p-3`}>
                    <p style={{fontSize:"12px"}}>${card.name} is just announced as an aquisition of ${card.name} at ${card.price}B .</p>

                    <p style={{fontSize:"10px"}}>This is an <a href="https://example.com">arbitrage opportunity</a>, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails, If the deal success is % and therefore the recommended play is <a href="https://example.com">long/short</a> mathrm ABC$
                    </p>
                  </div>}
                </div>
                </div>))}
               
              </div>  
        </>
    )
}

export default Cards

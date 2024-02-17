import { GoTriangleDown } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import { FaHeartbeat } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { IoMdBuild } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { TbBuildingFactory } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdBuildCircle } from "react-icons/md";
import { FaIdCard } from "react-icons/fa6";
import { useState } from "react";
import styles from "../Styles/Filters.module.css"
function Filters() {
  const [industryOpen, setIndustryOpen] = useState(true);
  const [marketOpen, setMarketOpen] = useState(true);
  const [riskOpen, setRiskOpen] = useState(true);

  function handleIndustryToggle() {
    setIndustryOpen((industryOpen) => !industryOpen);
  }
  function handleMarketToggle() {
    setMarketOpen((marketOpen) => !marketOpen);
  }
  function handleRiskToggle() {
    setRiskOpen((risk) => !risk);
  }
  return <>
<div className={`row ${styles.filters} px-2   rounded-1 pb-3 text-white`}>

<h3 className="text-center">Filters</h3>

<div className=" d-flex justify-content-between align-items-end">
  <p className="text-muted" style={{fontSize:"14px"}}>filters Applied</p>
  <p style={{fontSize:"14px"}}>Clear All</p>
</div>

<div className={`${styles.card}  p-3 position-relative`}>
  <div className={`${styles.realstate} position-absolute top-0 start-0 m-2 w-25 border rounded-1 d-flex justify-content-center align-items-center`}>
    <p className="p-0 m-0" style={{fontSize:"10px"}}>Real State</p> <span style={{fontSize:"8px"}}>❌</span>
  </div>
</div>

<div className={`mt-3 text-white ${styles.card}`}>
  <h6>Stock</h6>
  <input className={`mx-auto w-100 text-start ${styles.search} text-muted mb-2`} type="text" placeholder="$ TICKER" style={{ color: "white" }} />

  <p style={{cursor:"pointer"}} onClick={handleIndustryToggle}>{industryOpen?<GoTriangleDown/>:<GoTriangleRight/>} industry</p>

  {industryOpen&&<div className="row pt-1">
    <div className={`col-md-6 ${styles.line1} ps-4`}>
      <p style={{fontSize:"12px"}} className="p-0"><FaHeartbeat/> Health care</p>
      <p style={{fontSize:"12px"}} className="p-0"><FaRecycle/> Materials</p>
      <p style={{fontSize:"12px"}} className="p-0"><SlEnergy/> Energy</p>
      <p style={{fontSize:"12px"}} className="p-0"><FaIdCard/> Consumer Discretionary</p>
      <p style={{fontSize:"12px"}} className="p-0"><FaCartShopping/> Consumer Staples</p>
      <p style={{fontSize:"12px"}} className="p-0 m-0"><FaHome/> Real State</p>
      </div>
    <div className={`col-md-6 ${styles.line2}`}>
      <p style={{fontSize:"12px"}} className="p-0"><MdBuildCircle/> IT</p>
      <p style={{fontSize:"12px"}} className="p-0"><SiWechat/> Communication</p>
      <p style={{fontSize:"12px"}} className="p-0"><TbBuildingFactory/> Industrial</p>
      <p style={{fontSize:"12px"}} className="p-0"><IoMdBuild/> Utilities</p>
      <p style={{fontSize:"12px"}} className="p-0"><RiMoneyDollarCircleLine/> Financials</p>
     </div>
  </div>}

  <div className="row pt-1">
    <div className="col-md-6">
    <p style={{cursor:"pointer"}} onClick={handleMarketToggle}>{marketOpen?<GoTriangleDown/>:<GoTriangleRight/>} Market Cap</p>

    {marketOpen&& <div className="ps-2">
     <ul className="p-0 m-0">
      <li className="list-unstyled d-flex align-items-center">
        <input type="radio" className={`p-0 m-0 ${styles.radio} `}/> <p style={{fontSize:"11px"}} className="ps-2">Micro</p>
      </li>
      <li className="list-unstyled d-flex align-items-center">
        <input type="radio" className={`p-0 m-0 ${styles.radio} `}/> <p style={{fontSize:"11px"}} className="ps-2">Small</p>
      </li>
      <li className="list-unstyled d-flex align-items-center">
        <input type="radio" className={`p-0 m-0 ${styles.radio} `}/> <p style={{fontSize:"11px"}} className="ps-2">Large</p>
       </li>
     </ul>
     </div>}
    </div>

    <div className="col-md-6">
    <p style={{cursor:"pointer"}} onClick={handleRiskToggle}>{riskOpen?<GoTriangleDown/>:<GoTriangleRight/>} Risk Level</p>

     {riskOpen&&<div className="ps-2">
     <ul className="p-0 m-0">
      <li className="list-unstyled d-flex align-items-center">
        <input type="radio" className={`p-0 m-0 ${styles.radio} `}/> <p style={{fontSize:"11px"}} className="ps-2">Low Risk</p>
      </li>
      <li className="list-unstyled d-flex align-items-center">
        <input type="radio" className={`p-0 m-0 ${styles.radio} `}/> <p style={{fontSize:"11px"}} className="ps-2">Mid Risk</p>
      </li>
      <li className="list-unstyled d-flex align-items-center">
        <input type="radio" className={`p-0 m-0 ${styles.radio} `}/> <p style={{fontSize:"11px"}} className="ps-2">High Risk</p>
       </li>
     </ul>
     </div>}
    </div>

  </div>


  <div className="row pt-1">
    <div className="col-md-6 mt-2">
      <h5 style={{fontSize:"13px"}}>Strategy</h5>
      
        <p style={{fontSize:"10px"}} className={`${styles.strat}`}>Big Option Buy</p>
        <p style={{fontSize:"10px"}} className={`${styles.options}`}>Merge Arbitrage</p>
        <p style={{fontSize:"10px"}} className={`${styles.strat2}`}>Short Reports</p>
     </div>
    <div className="col-md-6 mt-2">
      <h5 style={{fontSize:"13px"}}>Assets</h5>
      
        <p style={{fontSize:"10px"}} className={`${styles.strat}`}>Stock</p>
        <p style={{fontSize:"10px"}} className={`${styles.options2}`}>Option</p>
        <p style={{fontSize:"10px"}} className={`${styles.strat2}`}>Future</p>
     </div>
  </div>

</div>

<button className={`btn ${styles.applyBtn} mt-3 w-50 text-white mx-auto`}>Apply</button>
</div>  
  </>;
}

export default Filters;

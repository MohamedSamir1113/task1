import React, { useState } from "react";
import styles from "../Styles/Sidebar.module.css";
import logo from "../assets/street suite logo-04 1.png";
import { FaGraduationCap } from "react-icons/fa";
import { BsGraphDown } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { GiOpenFolder } from "react-icons/gi";
import { FaGears } from "react-icons/fa6";
import person from "../assets/Group 101(2).png";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    {
      name: "Alerts",
      icon: <IoIosNotifications className={`${isOpen?`ms-4 me-2`:`ms-4 me-2 mb-4 text-white`}`}/>,
    },
    {
      name: "training",
      icon: <FaGraduationCap className={`${isOpen?`ms-4 me-2`:`ms-4 me-2 mb-4 text-white`}`}/>,
    },
    {
      name: "portfolio",
      icon: <GiOpenFolder className={`${isOpen?`ms-4 me-2`:`${styles.logoColor} ms-4 me-2 mb-4 `}`}/>,
      color: "#5d5d5d",
    },
    {
      name: "automation",
      icon: <FaGears className={`${isOpen?`ms-4 me-2`:`${styles.logoColor} ms-4 me-2 mb-4 `}`}/>,
      color: "#5d5d5d",
    },
    {
      name: "trading",
      icon: <BsGraphDown className={`${isOpen?`ms-4 me-2`:`${styles.logoColor} ms-4 me-2 mb-4 `}`}/>,
      color: "#5d5d5d",
    }
  ];

  return (
    <div>
      <div className={styles.sidebar} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >

         <div className="d-flex justify-content-center align-items-center">
            <img src={logo} alt="Logo" className={` w-75 h-75 my-4 `}/>
          </div>
          <div>
            {isOpen ? (
              <>
              {menuItem.map((item,i)=> (
              <div key={i} style={{ color: `${item.color?item.color:"white"}` }} className={`${!item.color?`mb-3 ${styles.Links}`:"mb-3"}`}>
                    {item.icon}
                    {item.name}
              </div>))
              }
                  <div className={styles.personWrapper}>
                  <div className={`mb-3 d-flex`}>
                    <img src={person} alt="Logo" className={`${styles.person} ms-4 me-2`}/>
                    <div className="d-block" style={{ marginTop: "-3px" }}>
                      <p className="personName text-white"> Moni Roy</p>
                      
                      <span style={{ marginTop: "-2.5rem", color: "gray" }}>
                        Beginner
                      </span>
                    </div>
                  </div>
                </div>

                 <div className={`text-muted ${styles.inc}`}>street suite 2.0</div> 
              </>
            ):
            <div>
            {menuItem.map((item, i) => (<div key={i}>{item.icon}</div>))}

          <img src={person} alt="Logo" className={`${styles.person2} ms-3 me-2`} />
          </div>}
          </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
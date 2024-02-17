
import styles from "../Styles/Searchbar.module.css";
import { IoIosNotifications } from "react-icons/io";


function Searchbar() {
   
  return (
    <>       
       <div className="row d-flex  align-items-center justify-content-between mb-4">
                <div className="col-md-3">
                  <h1 className={`ms-4 ps-4 text-white ${styles.alert}`}>Alerts</h1>
                </div>
                <div className="col-md-8">
                  <input className={`mx-auto w-100 text-start ${styles.search}`} type="text" placeholder="Search By..." style={{ color: "white" }} />
                </div>
                <div className="col-md-1">
               
                <div className="position-relative ">
                    <IoIosNotifications style={{color:"cyan",display:"inline-block",fontSize:"30px"}}/>
                     <div className={styles.notifyNumber}>6</div>
                </div>
              </div>
              </div>
             
            
       
    </>
  );
}

export default Searchbar;

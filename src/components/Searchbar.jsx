
import styles from "../Styles/Searchbar.module.css";
import { IoIosNotifications } from "react-icons/io";
import styled from 'styled-components';


function Searchbar() {
  const NotificationContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const NotificationIcon = styled(IoIosNotifications)`
  color: cyan;
  font-size: 40px;
`;

const NotificationCounter = styled.div`
  position: absolute;
  top: -7px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
`;

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
               
                <NotificationContainer>
      <NotificationIcon />
      <NotificationCounter>3</NotificationCounter>
    </NotificationContainer>
              </div>
              </div>
             
            
       
    </>
  );
}

export default Searchbar;

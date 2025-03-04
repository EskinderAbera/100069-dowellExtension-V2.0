import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";

const SideButtons = ({ setHover, initialState, keys, value }) => {
  const { sessionId,notifications,userInfo,handleShow  } = useStateContext();

  const [showText, setShowText] = useState(false);

  const allNotifications = Array.from(
    new Set(notifications));

  
  const user = userInfo?.username;
  // const notification = [];
  const notificationNumber =(allNotifications.filter((datum)=>(datum.seen===false && datum.username === user ))).length
  

  
  return (
    <>
      {sessionId && keys !== "login" ? (
        <div
          className="power"
          onClick={() => {
            // keys !== "login"
            //   ? setHover({ ...initialState, [keys]: true, login: false })
            //   : setHover({ ...initialState, [keys]: true })
            setHover({ ...initialState, [keys]: true, login: false });
            handleShow(true);
          }}
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
          {showText && (
            <p
              style={{
                color: "black",
                position: "absolute",
                // marginBottom: 70,
                // marginLeft: 20,
              }}
            >
              {keys}
            </p>
          )}
          <i aria-hidden="true" className={value}></i>
          {keys==='notifications' && notificationNumber>0 && <p style={{position:'absolute',border:"3px solid white",padding:"2px 8px 8px 8px",height:15,marginBottom:43,marginLeft:50,borderRadius:100,color:'white',backgroundColor:"#ff0000"}}>
            {notificationNumber}</p>}
            {/* {console.log(notifNumber)} */}
        </div>
      ) : (
        !sessionId &&
        keys !== "logout" && (
          <div
            className="power"
            style={
              (keys === "profiles") |
              (keys === "notifications") |
              (keys === "products") |
              (keys === "favourites")
                ? { cursor: "not-allowed" }
                : {}
            }
            onClick={() =>
              keys !== "login"
                ? sessionId
                  ? setHover({
                      ...initialState,
                      [keys]: true,
                      login: false,
                    })
                  : keys !== "profiles" &&
                    keys !== "notifications" &&
                    keys !== "products" &&
                    keys !== "favourites"
                  ? setHover({
                      ...initialState,
                      [keys]: true,
                      login: false,
                    })
                  : {}
                : sessionId
                ? setHover({ ...initialState, [keys]: true })
                : keys !== "profiles" &&
                  keys !== "notifications" &&
                  keys !== "products" &&
                  keys !== "favourites"
                ? setHover({ ...initialState, [keys]: true })
                : {}
            }
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
          >
            {/* <div
          class="elementor-divider"
          style={
            (keys === "profiles") |
            (keys === "notifications") |
            (keys === "products")
              ?
            {position:"absolute",width: "58px", borderTop: "2px solid green",marginTop: "5px",marginLeft: 0,transform: "rotate(140deg)"}:
            {color: ""}
              }
            ></div> */}

            {showText && (
              <p
                style={{
                  color: "black",
                  position: "absolute",
                  // marginBottom: 70,
                }}
              >
                {keys}
              </p>
            )}
            <i aria-hidden="true" className={value}></i>
          </div>
        )
      )}
    </>
  );
};

export default SideButtons;

import React,{useState,useEffect} from 'react'
import "./Nav.css"
function Nav() {
    const [show, handleshow] = useState(false)
    const navbarTransition = () => {
        if (window.screenY > 100) {
            handleshow(true)
        } else {
            handleshow(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", navbarTransition,true);
        return () => {
            window.removeEventListener("scroll",navbarTransition,true)
        }
    },[])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
                <div>
                    <img style={
                        {
                            width: "80px",
                            height: "20px",
                            top: "20px",
                            cursor: "pointer",
                            paddingRight: "20px"}
                            }
                            src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/netflix.png" alt="Not Found"/>
            </div>
                <img className="nav_avatar"
                    src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png" alt="" />
            </div>

        </div>
    )
}

export default Nav

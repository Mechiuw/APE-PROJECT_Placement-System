import { IconBrandTeams, IconBuildingSkyscraper, IconHome, IconIdBadge2, IconMessage, IconUser, IconUsersGroup } from "@tabler/icons-react"
import "../nvbr/Nvb.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { Link,Outlet } from "react-router-dom";

export const NavBar = () => {
    const iconsRefs = useRef([])
    const [indicator,setIndicator] = useState(null);

    const onHover = (index) => {
        gsap.to(iconsRefs.current[index],{
            backgroundColor:"#4cd2ff",
            duration: 0.5,
            borderRadius:5,
            width:100
        })
        setIndicator(index);
    }
    const offHover = (index) => {
        gsap.to(iconsRefs.current[index],{
            backgroundColor:"#00bfff",
            duration: 0.3,
            width:"auto"
        })
        setIndicator(null);
    }

    const labels = [
        "bd team",
        "message",
        "clients",
        "batch",
        "trainees",
        "home",
        "user settings"
    ]
   

    const icons = [
        <><IconBrandTeams className="icn"/> <span>{indicator === 0 && labels[0]}</span></>,
        <><IconMessage className="icn"/> <span>{indicator === 1 && labels[1]}</span></>,
        <><IconBuildingSkyscraper className="icn"/> <span>{indicator === 2 && labels[2]}</span></>,
        <><IconUsersGroup className="icn"/> <span>{indicator === 3 && labels[3]}</span></>,
        <><IconIdBadge2 className="icn"/> <span>{indicator === 4 && labels[4]}</span></>,
        <><IconHome className="icn"/> <span>{indicator === 5 && labels[5]}</span></>,
        <><IconUser className="icn"/> <span>{indicator === 6 && labels[6]}</span></>
    ]

    return (
        <>
        <div className="d-flex gap-5 justify-content-between px-4 rounded-pill nvbr" >
            {icons.map((icon,index)=>(
                <div key={index} 
                onMouseEnter={() =>{onHover(index)}} 
                onMouseLeave={() => {offHover(index)}} 
                ref={el => (iconsRefs.current[index] = el)}>
                    {icon}
                </div>
            ))}
        </div>
        </>
    )
}
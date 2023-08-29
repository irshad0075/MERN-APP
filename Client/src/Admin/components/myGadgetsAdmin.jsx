myGadgetsAdmin
import React from 'react'
import img6 from "../../assets/images/interior.jpeg"
import img7 from "../../assets/images/interior2.jpeg"
import Carousel from "react-bootstrap/Carousel";
import './adminComp.css'

export default function myGadgetsAdmin() {
    return (
        <>
            <Carousel className='beforefoot'>
            <Carousel.Item>
            <img className="slide-content" src={img6} alt="" />
          </Carousel.Item>
            <Carousel.Item>
            <img className="slide-content" src={img7} alt="" />
          </Carousel.Item>
        </Carousel>

        </>
    )
}

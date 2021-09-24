import React from 'react'

import './styles.css'



const Board = () => {
    return(
        <div className="upSlider">
            <div className="sliderItemText">
                <p className="premiereSlickText">Прем’єра</p>
                <p className="dateSlickTExt">Сьогодні <span>03.09</span></p>
                <p className="nameSlickText">Месники</p>
                <p className="slickText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <img src="./image/film.jpg" alt="" className="sliderItemImage"></img>
        </div>
    )
}

export default Board
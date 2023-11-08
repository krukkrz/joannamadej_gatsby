import React, {Children} from 'react';

// @ts-ignore
import "slick-carousel/slick/slick.css"
// @ts-ignore
import "slick-carousel/slick/slick-theme.css"
// @ts-ignore
import * as styles from "./Carousel.module.scss";
// @ts-ignore
import * as slick from "./slickOverwrites.scss";

import Slider from "react-slick";
import Arrow from "./Arrow";

type Props = {
    children: React.ReactNode;
}

const Carousel = ({children}:Props) => {
    const settings = {
        dots: true,
        infinite: true,
        // those blank properties are somehow overwritten by slick
        prevArrow: <Arrow direction="left" className="" style="" onClick={()=>{}}/>,
        nextArrow: <Arrow direction="right" className="" style="" onClick={()=>{}}/>,
    };
    return (
        <div className={slick}>
            <Slider {...settings} className={styles.carousel}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;
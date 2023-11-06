import {Slider} from './Homepage/Slider';
import slides from '../../public/slider.json'

const Banner = () => {
    return (
        <Slider slides={slides}></Slider>

    );
};

export default Banner;
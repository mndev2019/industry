import features1 from '../../assets/features1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const Features = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className=" py-5 features">
            <div className="container">
                <div className='position-relative'>
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}>
                        {[...Array(7)].map((_, index) => (
                            <div key={index} className="feature-slide">
                                <img src={features1} alt={`Feature ${index + 1}`} className="img-fluid" />
                            </div>
                        ))}
                    </Slider>
                    <div >
                        <button className="button previous border-0 " onClick={previous}>
                            <GoArrowLeft className='previousarrow' />
                        </button>
                        <button className="button next border-0 " onClick={next}>
                            <GoArrowRight  className='nextarrow' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RecommendationCard from './RecommendationCard';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    const getRecommendations = async () => {
        try {
            const response = await fetch("http://localhost:3000/recommendations");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setRecommendations(data);
        } catch (error) {
            console.log("An Error Occurred: ", error);
        }
    };

    useEffect(() => {
        getRecommendations();
    }, []);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true
    };

    return (
        <div className='h-[520px] w-full flex flex-col gap-[45px] bg-[#F0F0F6] items-center'>
            <div className="h-[101px] w-[655px] flex flex-col gap-[12px]">
                <h1 className='text-center  font-[700] text-[32px]'>Recommendations</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati deserunt repellendus ipsum quae rerum officiis nulla repudiandae! Praesentium non tenetur placeat esse!</p>
            </div>
            <div className="h-[327px] w-[1245px] z-0">
                <Slider {...settings} className='z-1'>
                    {recommendations.map((rec) => (
                        <RecommendationCard key={rec.id} data={rec} />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Recommendations


// import React from 'react'
// import rating from "../assets/Rating.png";

// const RecommendationCard = (props) => {
//     const { title, user, profession, imageURL, description } = props.data;
//     return (
//         <div className='h-[327px] w-[340px] flex flex-col gap-3 bg-[#FFFFFF] px-[15px] py-[15px]'>
//             <div className="h-[65%]">
//                 <div className="h-[18px] w-[145.5px]"><img src={rating} alt="" /></div>
//                 <div className="h-[45px] w-[145.5px] flex items-center">{title}</div>
//                 <div className="h-[90px] w-[293.5px]">{description}</div>
//             </div>
//             <div className="h-[35%] flex">
//                 <div className="h-[81px] w-[90px]">
//                     <img src={imageURL} alt="" />
//                 </div>
//                 <div className="flex flex-col justify-evenly px-[10px]">
//                     <div className="h-[22px] w-[159px]">{user}</div>
//                     <div className="h-[24px] w-[158px]">{profession}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default RecommendationCard



import React from 'react';
import rating from "../assets/Rating.png";

const RecommendationCard = (props) => {
    const { title, user, profession, imageURL, description } = props.data;
    return (
        <div className='h-[327px] w-[340px] flex flex-col gap-3 bg-[#FFFFFF] px-[15px] py-[15px] border border-gray-200 shadow-lg'>
            <div className="h-[65%]">
                <div className="h-[18px] w-[145.5px]">
                    <img src={rating} alt="Rating" />
                </div>
                <div className="h-[45px] w-[145.5px] flex items-center font-bold text-lg">{title}</div>
                <div className="h-[90px] w-[293.5px] text-gray-600">{description}</div>
            </div>
            <div className="h-[35%] flex items-center">
                <div className="h-[81px] w-[90px]">
                    <img src={imageURL} alt={user} className="object-cover rounded-full" />
                </div>
                <div className="flex flex-col justify-evenly px-[10px]">
                    <div className="h-[22px] w-[159px] font-semibold">{user}</div>
                    <div className="h-[24px] w-[158px] text-gray-500">{profession}</div>
                </div>
            </div>
        </div>
    );
};

export default RecommendationCard;


import React, { useState } from 'react';
import axios from 'axios';
import location from "../assets/location.png";
import mail from "../assets/mail.png";
import mobile from "../assets/mobile.png";

const LeaveInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name,
            email,
            subject,
            message,
        };

        axios.post('http://localhost:3000/leaveMeYourInfo', formData)
            .then(response => {
                console.log('Success:', response.data);
                // Optionally clear the form or provide user feedback
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='h-[760px] w-full bg-[#F0F0F6] flex justify-center items-center'>
            <div className="h-[760px] w-[1244px] flex justify-between">
                <div className="h-[760px] w-[846px] flex flex-col gap-[45px]">
                    <div className="h-[40px] w-[846px] font-[700] text-[32px]">Leave ME Your Info</div>
                    <form onSubmit={handleSubmit} className="h-[674px] w-[846px] flex flex-col gap-[22px] px-[25px] py-[36px] bg-white">
                        <div className="h-[80px] w-[774px] flex flex-col justify-evenly rounded-[5px] gap-[5px]">
                            <label htmlFor="name">Your Full Name (Required)</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='bg-[#F0F0F6] w-[773px] h-[50px] rounded-[5px] px-3' 
                                required 
                            />
                        </div>
                        <div className="h-[80px] w-[774px] flex flex-col justify-evenly rounded-[5px] gap-[5px]">
                            <label htmlFor="email">Your Email (Required)</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-[#F0F0F6] w-[773px] h-[50px] rounded-[5px] px-3' 
                                required 
                            />
                        </div>
                        <div className="h-[80px] w-[774px] flex flex-col justify-evenly rounded-[5px] gap-[5px]">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                name="subject" 
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className='bg-[#F0F0F6] w-[773px] h-[50px] rounded-[5px] px-3' 
                            />
                        </div>
                        <div className="h-[240.5px] w-[774px] flex flex-col justify-evenly rounded-[5px] gap-[5px]">
                            <label htmlFor="message">Your Message</label>
                            <textarea 
                                name="message" 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='bg-[#F0F0F6] w-[773px] h-[210px] rounded-[5px] px-3' 
                            />
                        </div>
                        <button type="submit" className="h-[51px] w-[151px] rounded-[5px] flex justify-center items-center px-[17px] py-[16px] bg-[#FFB400] text-black font-[600] text-[14px]">SEND MESSAGE</button>
                    </form>
                </div>
                <div className="h-[760px] w-[372px] flex flex-col justify-between">
                    <div className="h-[39px] w-[318px]  font-[700] text-[32px]">Contact Information</div>
                    <div className="flex flex-col justify-between h-[674px] w-[372px]">
                        <div className="h-[211px] w-[373px] bg-white flex flex-col">
                            <div className="h-[45%] flex justify-center items-center">
                                <div className="h-[40.3px] w-[40.3px] bg-[#FFB400] rounded-[50%] flex justify-center items-center">
                                    <img src={location} alt="" />
                                </div>
                            </div>
                            <div className="h-[55%] flex flex-col justify-between px-[25px] py-[15px]">
                                <div className="flex justify-between">
                                    <p>Country:</p>
                                    <p>Bangladesh</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>City:</p>
                                    <p>Dhaka</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Street:</p>
                                    <p>35 Vhatara, Badda</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[211px] w-[373px] bg-white flex flex-col">
                            <div className="h-[45%] flex justify-center items-center">
                                <div className="h-[40.3px] w-[40.3px] bg-[#FFB400] rounded-[50%] flex justify-center items-center">
                                    <img src={mail} alt="" />
                                </div>
                            </div>
                            <div className="h-[55%] flex flex-col justify-between px-[25px] py-[15px]">
                                <div className="flex justify-between">
                                    <p>Email:</p>
                                    <p>Youremail@gmail.com</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Skype:</p>
                                    <p>@Yourusername</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Telegram:</p>
                                    <p>@Yourusername</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-[211px] w-[373px] bg-white flex flex-col">
                            <div className="h-[45%] flex justify-center items-center">
                                <div className="h-[40.3px] w-[40.3px] bg-[#FFB400] rounded-[50%] flex justify-center items-center">
                                    <img src={mobile} alt="" />
                                </div>
                            </div>
                            <div className="h-[55%] flex flex-col justify-between px-[25px] py-[15px]">
                                <div className="flex justify-between">
                                    <p>Support Services:</p>
                                    <p>15369</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Office:</p>
                                    <p>+58 (021)356 587 235</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Personal:</p>
                                    <p>+58 (021)356 587 235</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveInfo


import React from "react"
import { useState } from "react";
import home1 from './Assets/home-img.png'
import lastimg from './Assets/last-image.jpeg'

export default function Contact() {
    return (
        <div className="bg-slate-950">
        <div className="py-5 px-5 sm:px-10 text-slate-300">
        <div className="grid justify-center place-items-center pb-8">
            <h1 className="font-bold text-red-900 text-2xl mt-4 mb-2 text-center">Get In Touch</h1>
            <h2 className="font-bold text-4xl text-center mt-4 mb-6">Make A Reservation</h2>
            <hr className="w-30 h-[3px] rounded-lg bg-red-900 text-red-900 text-center"/>
        </div>
        <div className="flex flex-col-reverse mt-16 lg:grid lg:grid-cols-2 sm:pla-items-center gap-8">
        <div>
            <h1 className="font-bold text-4xl text-center mt-4 mb-6">Book a Table</h1>
                <Userform />
        </div>
        <div className="py-8 px-5 border-3 w-full border-slate-300  bg-cover " style={{backgroundImage: `url(${home1})`}}>
            <h1 className="text-2xl font-bold ">Opening Hours</h1>
            <div className="mt-10 grid gap-8">
                <div className="flex flex-row gap-2 justify-center place-items-center">
                    <p className="text-lg font-semibold uppercase">Sunday</p>
                    <hr className="bg-white text-slate-300 h-0.1 w-full "/>
                    <p className="text-red-900 text-xl font-semibold w-full sm:basis-3xs">Closed</p>
                </div>
                <div className="flex flex-row gap-2 justify-center place-items-center">
                    <p className="text-lg font-semibold uppercase">Monday</p>
                    <hr className="bg-white text-slate-300 h-0.1 w-full"/>
                    <p className="text-slate-300 text-lg font-semibold w-full sm:basis-3xs">9am - 10pm</p>
                </div>
                <div className="flex gap-2 justify-center place-items-center">
                    <p className="text-lg font-semibold uppercase">Tuesday</p>
                    <hr className="bg-white text-slate-300 h-0.1 w-full"/>
                    <p className="text-slate-300 text-lg font-semibold w-full sm:basis-3xs">9am - 10pm</p>
                </div>
                <div className="flex flex-row gap-2 justify-center place-items-center">
                    <p className="text-lg font-semibold uppercase">Wednesday</p>
                    <hr className="bg-white text-slate-300 h-0.1 w-20 sm:w-full"/>
                    <p className="text-slate-300 text-lg font-semibold text-start w-full sm:basis-3xs">9am - 10pm</p>
                </div>
                <div className="flex flex-row gap-2 justify-center place-items-center">
                    <p className="text-lg font-semibold uppercase">Thursday</p>
                    <hr className="bg-white text-slate-300 h-0.1 w-20 sm:w-full"/>
                    <p className="text-slate-300 text-lg font-semibold w-full sm:basis-3xs">9am - 10pm</p>
                </div>
                <div className="flex flex-row gap-2 justify-center place-items-center">
                    <p className="text-lg font-semibold uppercase">Friday</p>
                    <hr className="bg-white text-slate-300 h-0.1 w-full"/>
                    <p className="text-slate-300 text-lg font-semibold w-full sm:basis-3xs">9am - 10pm</p>
                </div>
                <div className="flex flex-row gap-2 justify-center place-items-center">
                    <p className="text-lg font-semibold uppercase">Saturday</p>
                    <hr className="bg-white text-slate-300 h-0.1 w-full"/>
                    <p className="text-slate-300 text-lg font-semibold w-full sm:basis-3xs">9am - 2pm</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="py-10 mt-10 px-5 sm:px-10 text-slate-300">
            <h1 className="text-4xl text-center mb-8 font-bold ">Where It All Begins</h1>
            <div className="pt-8 gap-5 sm:gap-10 grid md:grid-cols-2">
                <div>
                <img src={lastimg} alt="burger" className="rounded-lg"/>
            </div>
            <div>
                <div className="mt-8">
                    <h1 className="text-2xl font-semibold">Locations</h1>
                <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <div className="flex place-items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
               <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span className="text-semibold">LA, Galuxy, Ave 122</span>
                </div>
            <div className="flex place-items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
               <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span className="text-semibold">New york, Ave 122</span>
                </div>
            <div className="flex place-items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
               <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span className="text-semibold">Colorado, Ave 122</span>
                </div>
            <div className="flex place-items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
               <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <span className="text-semibold">Washington, Ave 122</span>
                </div>
                    </div>
                </div>
                <p className="pt-10 ">Sit amet purus gravida quis blandit turpis cursus in hac. 
                    Adipiscing bibendum est ultricies integer quis auctor elit. 
                    Hendrerit dolor magna eget est lorem ipsum dolor sit amet.</p>
            </div>
            </div>
            
        </div>
         <div className="text-white text-center bg-slate-900 sticky bottom-0 py-4 bottom-0 w-full left-0">
                &copy; {new Date().getFullYear()} The Luxury Resturant. All rights reserved.
            </div>
        </div>
    )
}

export function Userform() {
    const [name, setName] = useState({
        surName:'', date:'', email:'', number:'', person:'', time:''
    })
    const [error, setError] = useState({});
    const [success, setSuccess] = useState(false);
    const [input, setInput] = useState(true);

    const validate = () => {
        const newErrors = {};

        if(!name.surName || name.surName.trim() ==='') newErrors.surName = 'Name is required';
        if(!name.date || name.date.trim() ==='') newErrors.date = 'Date is required';
        if(!name.number || name.number.trim() ==='') newErrors.number = 'Number is required';
        if(!name.person || name.person.trim() ==='') newErrors.person = 'Persons is required';
        if(!name.time || name.time.trim() ==='') newErrors.time = 'Time is required';
        if(!name.email || name.email.trim() ==='') {
            newErrors.email = 'Email is required';
        } else if(!/\s+/.test(name)) {
            newErrors.email = 'Email is invalid';
        }

        return newErrors;
    }

    const subHandler = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        console.log('validation errors:', validationErrors);
        console.log('type of validationErrors:', typeof validationErrors);

        if(Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            setSuccess(false);
        } else {
            setError({});
            setSuccess(true);
            setInput(false)
        }
        
    }

    return(
        <div className="">
        {input && 
<form className="grid sm:justify-center mt-20" onSubmit={subHandler}>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10">
        <div>
            <label className="font-semibold text-slate-300">Name</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-full mt-2 px-3 py-2" type="name"  name="surName" value={name.surName} onChange={e => {setName({...name, surName: e.target.value}); setError({...error, surName: ''})}}/>
            {error.surName && <p className="text-red-800 text-sm mt-2">{error.surName}</p>}
        </div>
        <div>
            <label className="font-semibold text-slate-300">Email</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-full mt-2 px-3 py-2" name="email" type="email" value={name.email} onChange={e => {setName({...name, email: e.target.value}); setError({...error, email: ''})}}/>
            {error.email && <p className="text-red-800 text-sm mt-2">{error.email}</p>}
        </div>
        <div>
            <label className="font-semibold text-slate-300">Number</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-full mt-2 px-3 py-2" name="number" type="tel" value={name.number} onChange={e => {setName({...name, number: e.target.value}); setError({...error, number: ''})}}/>
            {error.number && <p className="text-red-800 text-sm mt-2">{error.number}</p>}
        </div>
        
        <div>
            <label className="font-semibold text-slate-300">Person</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm mt-2 px-3 w-full py-2" name="person" type="number" value={name.person} onChange={e => {setName({...name, person: e.target.value}); setError({...error, person: ''})}}/>
            {error.person && <p className="text-red-800 text-sm mt-2">{error.person}</p>}
        </div>
        <div>
            <label className="font-semibold text-slate-300">Date</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-full mt-2 px-3 py-2" name="date" value={name.date} onChange={e => {setName({...name, date: e.target.value}); setError({...error, date: ''})}} type="date"/>
            {error.date && <p className="text-red-800 text-sm mt-2">{error.date}</p>}
        </div>
        <div>
            <label className="font-semibold text-slate-300">Time</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-full mt-2 px-3 py-2" name="time" type="time" value={name.time} onChange={e => {setName({...name, time: e.target.value}); setError({...error, time: ''})}}/>
            {error.time && <p className="text-red-800 text-sm mt-2">{error.time}</p>}
        </div>
      </div>
        <button className="bg-slate-900 text-white px-5 py-2 font-semibold mt-10">submit</button>

        
      </form>
        }
        {success && 
        <div className="text-slate-300 font-semibold text-lg leading-8">{name.surName} you have successfuly booked a table with {name.person} people at The Luxury Restaurant on {name.date} by {name.time}, an email will be sent to {name.email}.
        Thank you for your reservation </div>
        }
      </div>
    )

}
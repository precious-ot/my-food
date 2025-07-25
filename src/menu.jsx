import React from "react";
import { useState } from "react";
import snack1 from './Assets/snack-1.png'
import snack2 from './Assets/snack-2.png'
import snack3 from './Assets/snack-3.png'
import snack4 from './Assets/snack-4.png'
import salad1 from './Assets/salad - 1.png'
import salad2 from './Assets/salad-2.png'
import salad3 from './Assets/salad-3.png'
import salad4 from './Assets/salad-4.png'
import burger1 from './Assets/burger-1.png'
import burger2 from './Assets/burger-2.png'
import burger3 from './Assets/burger-3.png'
import burger4 from './Assets/burger-4.png'
import drink1 from './Assets/drink-1.png'
import drink2 from './Assets/drink-2.png'
import drink3 from './Assets/drink-3.png'
import drink4 from './Assets/drink-4.png'
import drink5 from './Assets/drink-5.png'
import drink6 from './Assets/drink-6.png'
import untitled1 from './Assets/Untitled design - 1.png'
import untitled2 from './Assets/Untitled design - 2.png'
import untitled3 from './Assets/Untitled design - 3.png'
import untitled4 from './Assets/Untitled design - 4.png'
import untitled5 from './Assets/Untitled design - 5.png'
import untitled6 from './Assets/Untitled design - 6.png'
import { Link } from "react-router-dom"

function Snacks({image, name, price}){
    const [sent, setSent] = useState(false);
    const [snackLink, setSnackLink] = useState(false);
    const handSent = () => {
        setSent(true)
    }
    const openSnack = () => {
        setSnackLink(true);
    }
    const closeSnack = () => {
        setSnackLink(false);
    }
    return(
        <div className="">
        <div className="border-2 cursor-pointer border-slate-900 w-auto md:w-auto rounded-sm">
            <div onClick={openSnack}>
            <img className="w-70 md:w-70 md:h-50 rounded-sm" src={image}/>
            <div className="text-white pt-3 px-3  pb-3">
            <p className="font-semibold">{name}</p>
            <p className="font-bold text-2xl">${price}</p>
            </div>
            </div>
            <div className="text-white px-3 pb-3">
            {!sent && (
            <button onClick={handSent} type="submit" className="bg-slate-900 py-2 px-3 mt-4 rounded-md font-semibold hover:border-2 hover:bg-transparent hover:border-slate-900">Add to Cart</button>
           )}
           {sent && (
             <div className="flex gap-2 place-items-center pt-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg> <span>Added to chat</span></div>
           )}

            </div>
        </div>
        <div>
            {snackLink &&
        <div className="fixed top-0 bg-slate-950 right-0 text-white pt-5 h-full">
           <button className="flex place-items-center px-5" onClick={closeSnack}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
           <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
           </svg> <span className="ms-1">Close</span></button>
           <img className="w-80 h-50 mt-10" src={image}/>
           <div className="flex border-b-2 mt-8 border-slate-400 pb-2 mx-5">
             <span className="font-semibold grow-1">{name}</span>
             <span className="font-bold text-2xl">${price}</span>
           </div>
           <div className="grid grid-cols-2 mt-60 border-t-1 px-3 border-slate-500">
            <div className="grow-1 mt-5">
            <Link to={"/Order"} className="py-2 px-5 rounded-md hover:bg-slate-900 border-2 border-slate-900 font-semibold">
                Order
            </Link>
            </div>
            <div className="text-white px-3">
            {!sent && (
            <button onClick={handSent} type="submit" className="place-items-center bg-slate-900 py-2 px-3 mt-4 rounded-md font-semibold hover:border-2 hover:bg-transparent hover:border-slate-900">Add to Cart</button>
           )}
           {sent && (
             <div className="flex gap-2 place-items-center mt-2 py-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg> <span>Added to chat</span></div>
           )}

            </div>
           </div>
        </div>
        }
        </div>
        </div>
    );
}

export function Order(){
        return (
            <div className="bg-white text-slate-900">
                <div className="grid px-5 py-5 border-b-2 border-slate-300 grid-cols-2 ">
                <span className="place-items-start font-bold text-xl">Checkout</span>
                <span className="place-items-end"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="oklch" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg></span>
                </div>
                <div>
                    <Userform />
                </div>
            </div>
        );
}

export function Userform() {
    const [name, setName] = useState({
        firstName:'', lastName:'', email:'', address:''
    })
    const [error, setError] = useState({})

    const validate = () => {
        const newErrors = {};

        if(!name.firstName || name.firstName.trim() ==='') newErrors.firstName = 'Firstname is required';
        if(!name.lastName || name.lastName.trim() ==='') newErrors.lastName = 'Lastname is required';
        if(!name.address || name.address.trim() ==='') newErrors.address = 'Address is required';
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
        } else {
            setError({});
            alert(`Hello ${name.firstName} ${name.lastName} your order has been sent. You will receive your package within 24hours`);
        }
        
    }

    return(
      <form className="grid place-items-center mt-20" onSubmit={subHandler}>
        <div className="grid place-items-center md:grid-cols-2 gap-10">
        <div>
            <label className="font-semibold text-slate-900">First Name</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-60 md:w-80 mt-2 px-3 py-2" type="text" name="firstname" value={name.firstName} onChange={e => {setName({...name, firstName: e.target.value}); setError({...error, firstName: ''})}}/>
            {error.firstName && <p className="text-red-800 text-sm mt-2">{error.firstName}</p>}
        </div>
        <div>
            <label className="font-semibold text-slate-900">Last Name</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-60 md:w-80 mt-2 px-3 py-2" name="lastname" value={name.lastName} onChange={e => {setName({...name, lastName: e.target.value}); setError({...error, lastName: ''})}} type="text"/>
            {error.lastName && <p className="text-red-800 text-sm mt-2">{error.lastName}</p>}
        </div>
        <div>
            <label className="font-semibold text-slate-900">Email</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-60 md:w-80 mt-2 px-3 py-2" name="email" type="email" value={name.email} onChange={e => {setName({...name, email: e.target.value}); setError({...error, email: ''})}}/>
            {error.email && <p className="text-red-800 text-sm mt-2">{error.email}</p>}
        </div>
        <div>
            <label className="font-semibold text-slate-900">Address</label> <br/>
            <input className="border-slate-300 border-2 rounded-sm w-60 md:w-80 mt-2 px-3 py-2" name="address" type="text" value={name.address} onChange={e => {setName({...name, address: e.target.value}); setError({...error, address: ''})}}/>
            {error.address && <p className="text-red-800 text-sm mt-2">{error.address}</p>}
        </div>
      </div>
        <button className="bg-slate-900 text-white px-5 py-2 font-semibold mt-10">submit</button>
      </form>
    )

}

export default function Menu(){
    return(
        <div className="bg-scroll bg-cover bg-black py-10 px-5 md:py-10 md:px-10">
            <div>
            <div className="text-center text-white text-4xl font-bold">MENU</div>
            <div className="grid justify-center grid-rols-6">
                <div className="mt-10 ">
                    <h1 className="text-white font-semibold text-lg mb-5">SNACKS</h1>
                  <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3">
                        <Snacks image={snack1} name={'Crispy Onion Rings'} price={'6.00'}/>
                        <Snacks image={snack2} name={'Mozarella Sticks'} price={'6.00'}/>
                        <Snacks image={snack3} name={'Fried Potatoes'} price={'5.00'}/>
                        <Snacks image={snack4} name={'Fried Chicked'} price={'7.00'}/>
                  </div>
                </div>
                <div className="mt-10 ">
                    <h1 className="text-white font-semibold text-lg mb-5">SALADS</h1>
                  <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 ">
                        <Snacks image={salad1} name={'Grilled Chicken Salad'} price={'10.00'}/>
                        <Snacks image={salad2} name={'Mediterranean Salad'} price={'9.00'}/>
                        <Snacks image={salad3} name={'Shrimp Salad'} price={'15.00'}/>
                        <Snacks image={salad4} name={'Healthy Salad'} price={'8.00'}/>
                  </div>
                </div>
                <div className="mt-10 ">
                    <h1 className="text-white font-semibold text-lg mb-5">BURGERS</h1>
                  <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 ">
                        <Snacks image={burger1} name={'Classic Burger'} price={'12.00'}/>
                        <Snacks image={burger2} name={'BBQ and Ranch Burger'} price={'13.00'}/>
                        <Snacks image={burger3} name={'Double Burger'} price={'16.00'}/>
                        <Snacks image={burger4} name={'Hot Burger'} price={'13.00'}/>
                  </div>
                </div>
                <div className="mt-10 ">
                    <h1 className="text-white font-semibold text-lg mb-5">DRINKS</h1>
                  <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 ">
                        <Snacks image={drink1} name={'Lemonade'} price={'4.00'}/>
                        <Snacks image={drink2} name={'Cider'} price={'5.00'}/>
                        <Snacks image={drink3} name={'Detox'} price={'7.00'}/>
                        <Snacks image={drink4} name={'Latte'} price={'6.00'}/>
                        <Snacks image={drink5} name={'Turkish Coffee'} price={'7.00'}/>
                        <Snacks image={drink6} name={'Soda'} price={'4.00'}/>
                  </div>
                </div>
                <div className="mt-10 ">
                    <h1 className="text-white font-semibold text-lg mb-5">SNACKS</h1>
                  <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 ">
                        <Snacks image={untitled1} name={'Crispy Onion Rings'} price={'6.00'}/>
                        <Snacks image={untitled2} name={'Mozarella Sticks'} price={'6.00'}/>
                        <Snacks image={untitled3} name={'Fried Potatoes'} price={'5.00'}/>
                        <Snacks image={untitled4} name={'Fried Chicked'} price={'7.00'}/>
                  </div>
                </div>
                <div className="mt-10 ">
                    <h1 className="text-white font-semibold text-lg mb-5">SOUPS</h1>
                  <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 ">
                        <Snacks image={untitled5} name={'Tomato Soup'} price={'5.00'}/>
                        <Snacks image={untitled6} name={'Pumpkin Soup'} price={'5.00'}/>
                  </div>
                </div>
            </div>
           </div>
        </div>
    )
}
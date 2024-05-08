import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import FormButton from './form_button.js'
import Input from './input.js'


function FormSignIn() {
    const [user, setUser] = useState({
        mail: '',
        password: ''
    }) //sarqel enq state user-i state-i hamar, vory uni fielder

    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value//vercnum enq html-i konkret input-i value
        //state-y update enq anum nor input-i valuenerov
        setUser({ ...user, [name]: value })
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { mail, password } = user
        try {
            const res = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ mail, password })
            })

            if (res.status == 400 || !res) {
                console.log('incorrect details')
            }

            else {
                console.log('logged in')
            }

        }
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='authenticate_container'>
            <div className="form_container_sign_in">
                <form onSubmit={handleSubmit} className="form">
                    <h3>Մուտք Գործել</h3>
                    <Input name="mail" value={user.mail} onChange={handleChange} type="email" txt="Էլ․հասցե" />
                    <Input name="password" value={user.password} onChange={handleChange} type="password" txt="Գաղտնաբառ" />
                    <button type="submit" class="btn btn-secondary btn-sm">Մուտք Գործել</button>
                    <NavLink to="/register"><h6 className='form_navlinks'>Գրանցված չե՞ք</h6></NavLink>
                    <NavLink to="/forgot_password"><h6 className='form_navlinks'>Մոռացե՞լ եք գաղտնաբառը</h6></NavLink>
                </form>
            </div>
        </div>
    )
}



function FormSignUp() {
    const navigate=useNavigate()
    const [passError, setPassError] = useState(false)
    const [matchPass, setMatchPass] = useState(false)
    const [user,setUser]=useState({
        name: '',
        mail: '',
        password: '',
        check_password: ''
    })
    const handleInput=(event)=>{
        const {password, check_password}=user; 
        console.log(password.length)
        console.log(check_password == password)
        if(password == null || password == 0 || check_password == password){
            setPassError(false)
            setMatchPass(true)
        }else if (password.length >=8 || check_password == password){
            setPassError(false)
            setMatchPass(false)
        }else{
            setPassError(true)
            
        }
        let name=event.target.name
        let value=event.target.value
        setUser({...user,[name]:value})
    }
    const handleSubmit=async (event)=> {
        event.preventDefault();
        const {name,mail,password, check_password}=user; 
        if(password === check_password && password.length <= 8 ){
            setPassError(false)
            try{
                const res = await fetch('/register',{
                    method: "POST",
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({name,mail, password})
                })
                if(res.status==400 || !res) {
                    console.log('already used details')
                }
                else {
                    console.log('registered successfully')
                    navigate('/login')
                }
    
            }catch(error) {
                console.log(error)
            }

        }else {
            console.log('passwords are not matching')
        }
       

    }
    return (
        <div className='authenticate_container'>
            <div className="form_container_sign_up">
                <form onSubmit={handleSubmit} method='POST' className="form">
                    <h3>Գրանցվել</h3>
                    <Input name='name' value={user.name} onChange={handleInput} type="text" txt="Անուն" />
                    <Input name='mail' value={user.mail} onChange={handleInput} type="email" txt="Էլ․հասցե" />
                    <Input name='password' value={user.password} onChange={handleInput} type="password" txt="Գաղտնաբառ" />
                    {passError && <p>8 նիշից ցածր ա</p>}
                    <Input name='check_password' value={user.check_password} onChange={handleInput} type="password" txt="Կրկնել գաղտնաբառը" />
                    {matchPass && <p>Գաղտնաբառերը չեն համընկնում</p>}
                    <button type="submit" class="btn btn-secondary btn-sm">Գրանցվել</button>
                    <NavLink to="/login"><h6 className='form_navlinks'>Ունե՞ք հաշիվ</h6></NavLink>
                </form>
            </div>
        </div>
    )
}

function FormForgPass() {
    return (
        <div className='authenticate_container'>
            <div className="form_container_forg_pass">
                <form className="form">
                    <h3>Մոռացե՞լ եք Ձեր գաղտնաբառը</h3>
                    <Input type="email" txt="Էլ․հասցե" />
                    <NavLink to="/login"><h6 className='form_navlinks'>Մուտք գործել</h6></NavLink>
                </form>
            </div>
        </div>
    )
}


export { FormSignIn, FormSignUp, FormForgPass }
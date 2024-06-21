import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"
import Input from './input.js'


function FormSignIn() {
    const navigate = useNavigate()
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
                navigate('/home')
                window.location.reload()
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
                    <button type="submit" className="btn btn-secondary btn-sm">Մուտք Գործել</button>
                    <NavLink to="/register"><h6 className='form_navlinks'>Գրանցված չե՞ք</h6></NavLink>
                    <NavLink to="/forgot_password"><h6 className='form_navlinks'>Մոռացե՞լ եք գաղտնաբառը</h6></NavLink>
                </form>
            </div>
        </div>
    )
}



function FormSignUp() {
    const navigate = useNavigate()
    const [passError, setPassError] = useState(false) //8 nishic cacr
    const [matchPass, setMatchPass] = useState(false) //passery chen hamynknum
    const [user, setUser] = useState({
        name: '',
        mail: '',
        password: '',
        check_password: ''
    })
    
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        // Update the user state
        setUser({ ...user, [name]: value });

        // Perform the validations
        if (name === 'password' || name === 'check_password') {
            // Use event.target.form to access the current values of the form fields
            const form = event.target.form;
            const password = form.password.value;
            const check_password = form.check_password.value;

            // Password match validation
            if (check_password !== '' && password !== check_password) {
                setMatchPass(true);
            } else {
                setMatchPass(false);
            }

            // Password length validation
            if (password.length < 8) {
                setPassError(true);
            } else {
                setPassError(false);
            }
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, mail, password, check_password } = user;
        if (password === check_password && password.length >= 8) {
            
            try {
                const res = await fetch('/register', {
                    method: "POST",
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({ name, mail, password })
                })
                if (res.status == 400 || !res) {
                    console.log('already used details')
                }
                else {
                    console.log('registered successfully')
                    navigate('/login')
                }

            } catch (error) {
                console.log(error)
            }

        } else {
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
                    <button type="submit" className="btn btn-secondary btn-sm">Գրանցվել</button>
                    <NavLink to="/login"><h6 className='form_navlinks'>Ունե՞ք հաշիվ</h6></NavLink>
                </form>
            </div>
        </div>
    )
}

function FormForgPass() {
    const navigate = useNavigate()
    const[showError, setShowError] = useState(false)
    const [user, setUser] = useState({
        mail: ''
    })
    
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {mail } = user
        try {
            const res = await fetch('/forgot_password', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ mail})
            })

            if (res.status == 400 || !res) {
                console.log("incorrect detals")
                setShowError(true)
                console.log(showError)
            }

            else {
                navigate('/login')
                console.log('namaky uxarkvec')
                setShowError(false)
                console.log(showError)
            }

        }
        catch (error) {
            console.log(error)
        }

    }
    return (
        <div className='authenticate_container'>
            <div className="form_container_forg_pass">
                <form onSubmit={handleSubmit} method="POST" className="form">
                    <h3>Մոռացե՞լ եք Ձեր գաղտնաբառը</h3>
                    <Input name='mail' value={user.mail} onChange={handleChange} type="email" txt="Էլ․հասցե" />
                    <button type="submit" className="btn btn-secondary btn-sm">Ուղարկել Նամակ</button>
                    {showError && <p>Չկա նման էլ․ հասցե</p>}
                    </form>
            </div>
        </div>
    )
}


export { FormSignIn, FormSignUp, FormForgPass }
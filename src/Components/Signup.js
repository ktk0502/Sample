import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [name,setName] = useState()
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,username,email,password})
        .then(result=> {console.log(result)
        navigate('/login')
        })        
        .catch(err=>console.log(err))
    }

  return (
    <> 
    <div className="flex min-h-full flex-col justify-center px-6 py-20 lg:px-8">
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
        <div>
            <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
            <input id="name" name="name" type="text" autocomplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-pink-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6" onChange={(e)=>{
                setName(e.target.value)
            }}/>
            </div>
        </div>

        <div>
            <label for="username" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
            <div className="mt-2">
            <input id="username" name="username" type="username" autocomplete="username" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-pink-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6" onChange={(e)=>{
                setUsername(e.target.value)
            }}/>
            </div>
        </div>

        <div>
            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-pink-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            </div>
        </div>

        <div>
            <div className="flex items-center justify-between">
            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-400">Forgot password?</a>
            </div> */}
            </div>
            <div className="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-pink-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm sm:leading-6" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            </div>
        </div>

        <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600" onClick={handleSubmit}>Signup</button>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="block text-sm font-medium leading-6 text-gray-900">Already have an account</h2>
        <div>
            <Link to="/login" type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Login</Link>
        </div>
    </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Signup

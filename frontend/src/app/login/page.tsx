"use client"
import { useRouter } from "next/navigation"
import { FormEvent } from 'react'
import axios from "axios";
export default function Login() {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const data = {
            email,
            password
        }
        const response = await axios.post('http://localhost:3000/users/login',data)

        if (response.data && response.data.authed) {
            localStorage.setItem('authed',response.data.authed);
            router.push('/');
        } else {
        }
    }
    return (
        <>
            <section className="container">
                <div className="columns">
                    <form className="column col-6" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" >Email</label>
                            <input className="form-input" type="text" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label className="form-label" >Password</label>
                            <input className="form-input" type="password" id="password" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
import React from 'react'
import {useForm} from "react-hook-form"

import {name, email, password} from "../../utils/constants";
import Layout from "../../components/Layout"

import './styles.css'


const SignUp = () =>{
    const {register, handleSubmit, formState:{errors},} = useForm()
    const onSubmit = (data) =>{
        console.log(data)
    }
    return(
        <Layout>
            {errors?.name || errors?.password || errors?.email ? ( <div className="formRequired">
                <img src="./image/required.svg" alt="!" className="requiredImg"/>
                <p className="requiredText">Данні введено не вірно будь ласка заповніть поля</p>
            </div>) : <div className="formRequired" style={{height: 45}}></div>}
            <section className="signUp">
                <h1 className="signUpTitle">Registration</h1>
                <form className="signUpForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="signUpItem">
                        <label style={!errors.name ? {} : {color: 'red'}} htmlFor={name} className="signUpLabel">name</label>
                        <input {...register(name, {required: 'Please input name', defaultValue: ''})} placeholder="Input Name" type="text" id={name} className="signUpInput"/>
                    </div>
                    <div className="signUpItem">
                        <label style={!errors.email ? {} : {color: 'red'}} htmlFor={email} className="signUpLabel">e-mail</label>
                        <input {...register(email, {required: 'Please input email', defaultValue: ''})} autoComplete="false" placeholder="Input e-mail" type="email" id={email} className="signUpInput"/>
                    </div>
                    <div className="signUpItem">
                        <label style={!errors.password ? {} : {color: 'red'}} htmlFor={password} className="signUpLabel">password</label>
                        <input {...register(password, {required: 'Please input password', defaultValue: ''})} autoComplete="false" placeholder="Input password" type="password" id={password} className="signUpInput"/>
                    </div>
                    <button type="submit" className="signUpBtn">Sign Up</button>
                </form>
            </section>
        </Layout>
    )
}

export default SignUp
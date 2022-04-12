import React from "react";
import { useForm } from "react-hook-form";
import './ContactForm.css'

export default (props) => {


    const Input = ({ label, register, required }) => (
        <>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </>
    );

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        window.location.reload();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="First Name" register={register} required />
                <Input label="Last Name" register={register} required />
                <Input label="E-mail" register={register} required />
                <Input label="Age" register={register} required />
                <Input label="Phone" register={register} required />
                <input className="Submit" type='submit' value='Sign-Up' />
            </form>
        </div>

    );
}
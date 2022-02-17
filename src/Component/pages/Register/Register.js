import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../Hooks/useFirebase';
import { useLocation, useNavigate } from 'react-router';

const Register = () => {
    const { user, setUser, loginEmailAndPassword, setIsLoading, error, setError } = useFirebase()
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const url = location.state?.from || '/dashboard';
    const onSubmit = async data => {
        await loginEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                navigate(url)
                if (user) {
                    reset()
                }
            })
            .catch((error) => {
                if (error) {
                    setError(false)
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <h2 className="">Please Register !!!</h2>
                    <input  {...register("name")} required  />
                    <br />
                    <input  {...register("email")} required  />
                    <br />
                    <input  {...register("password")} required  />
                    <br />
                    <input {...register("password2")} required  type="password"  />
                    <br />
                    <input type="submit" />
                </div >
            </form>
        </div  >
    );
};

export default Register;
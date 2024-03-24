import React from "react"
import { useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import form from "../assets/images/form-img.png"
import { Link } from "react-router-dom"
import FormRow from "../components/Formrow"
import { useGlobalContext } from '../context/globalContext';
const initialState = {
    isMember: true,
};
const Register = () => {
    const navigate = useNavigate();
    const [inputState, setInputState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: '',
        admin_password:'',

    })
    const [values, setValues] = useState(initialState);

    const { firstname, lastname, email, password, role ,admin_password } = inputState;

    const { isMember } = values;


    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
    }

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const calltoggleMember = () => {
        toggleMember();
    };

    const onSubmit = async (e) => {
        e.preventDefault();


        // if (!email || !password || (!isMember && !name)) {
        //     toast.error('Please Fill Out All Fields');
        // }
        if (isMember) {


            const loginres = await fetch("api/signin-user", {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({

                    email: email,
                    password: password,
                    role:role
                }), credentials: 'include'
            });


            const data = loginres.json();

            if (loginres.status === 400 || !data) {
                // toast.error("INVALID");
            }
            else {
                // toast.success("LOGIN SUCCESSFUL");

                navigate('/dashboard');
            }
        }

        else {
            const res = await fetch("api/register-user", {
                method: "POST", headers: { "Content-type": "application/json" }, body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password
                })
            });

            const correctres = await res.json();

            if (correctres.status === 422 || !correctres) {
                // toast.error("INVALID");
            }
            else {
                // toast.success("VALID");

                calltoggleMember();
            }

        }
        // setInputState({
        //     name: '',
        //     email: '',
        //     password: '',
        // })

    };
    return <>
        <section className="bg-[#f0f4f8] font-semibold">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="Night"
                        src={form}
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <Link className="block text-white" to='/'>
                            <span className="sr-only">Home</span>
                            <svg
                                className="h-8 sm:h-10"
                                viewBox="0 0 28 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Link>


                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">

                        <div className="relative -mt-16 block lg:hidden">
                            <Link
                                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 dark:bg-gray-900 sm:h-20 sm:w-20"
                                to='/'
                            >
                                <span className="sr-only">Home</span>
                                <svg
                                    className="h-8 sm:h-10"
                                    viewBox="0 0 28 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </Link>


                        </div>

                        {/* <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"> */}
                        {/* <div className="mx-auto max-w-lg "> */}
                        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl"> {values.isMember ? 'Welcome Back' : 'Get Started Today'}</h1>

                        <p className="mx-auto  max-w-md text-center text-gray-500 invisible">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
                            inventore quaerat mollitia?
                        </p>

                        <form className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={onSubmit} >
                            <p className="text-center text-lg font-bold">  {values.isMember ? 'Log in to your account' : 'Sign in to your account'}</p>

                            {!values.isMember && (<FormRow type='text' name={'First Name'} value={firstname} handleChange={handleInput('firstname')}></FormRow>)}

                            {!values.isMember && (<FormRow type='text' name={'Last Name'} value={lastname} handleChange={handleInput('lastname')}></FormRow>)}

                            {values.isMember && (
                                <div >
                                    <select
                                        required value={role} name="category" id="category" onChange={handleInput('role')}
                                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    >
                                        <option value="" disabled>Please select Role</option>
                                        <option value="User">User</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </div>
                            )}

                            <FormRow type='email' name={'Email'} value={email} handleChange={handleInput('email')}></FormRow>

                            <FormRow type='password' name={'Password'} value={password} handleChange={handleInput('password')}></FormRow>

                            

                            {role==="Admin" && (<FormRow type='password' name={'Admin Password'} value={admin_password} handleChange={handleInput('admin_password')}></FormRow>)}


                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
                            >
                                {values.isMember ? 'Log in' : 'Sign in'}
                            </button>

                            <p className="text-center text-sm text-gray-500 font-semibold">
                                {values.isMember ? 'Not a member yet?' : 'Already a member?'}

                                <button type='button' onClick={toggleMember} className="underline">
                                    {values.isMember ? 'Register' : 'Login'}
                                </button>

                            </p>
                        </form>
                        {/* </div> */}
                        {/* </div> */}


                    </div>
                </main>
            </div>
        </section>
    </>
}

export default Register
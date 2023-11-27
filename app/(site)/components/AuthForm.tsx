"use client" 
import Button from '@/components/Button';
import Input from '@/components/inputs/Input';
import React, { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import AuthSocialButton from './AuthSocialButton';
import {BsGoogle, BsGithub} from 'react-icons/bs'

type variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=>{
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        }
        else{
            setVariant('LOGIN')
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // Axios Register
        }

        if (variant === 'LOGIN') {
            // NextAuth SignIn
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        // NextAuth Social SignIn

    }

    return (
        <div className=' mt-8 sm:w-full sm:mx-auto sm:max-w-md'>
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form 
                    className='space-y-6' 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input 
                            id='name' 
                            label='Nom' 
                            register={register} 
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input 
                        id='email' 
                        label='E-mail' 
                        type='email'
                        register={register} 
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input 
                        id='password' 
                        label='Mot de passe' 
                        type='password'
                        register={register} 
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Button
                        type='submit'
                        fullwidth
                        disable={isLoading}
                    >
                        {variant === "LOGIN" ? "Se connecter" : "S'enregister"}
                    </Button>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute flex items-center inset-0">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className=" relative flex  justify-center text-sm">
                            <span className=" bg-white px-2 text-gray-500">
                                Ou continuer avec
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton icon={BsGithub} onClick={()=>socialAction('github')}/>
                        <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction('google')}/>
                    </div>
                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>
                        {variant === 'LOGIN' ? 'Nouveau sur Talk?' : 'Vous avez déjà un compte?' }
                    </div>
                    <div onClick={toggleVariant} className='underline cursor-pointer text-sky-500'>
                        {variant === 'LOGIN' ? 'créez un compte' : 'connectez-vous'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
'use client';


import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Divide, Loader2 } from 'lucide-react';
import { ITEMS } from '@/constants';
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { useRouter } from 'next/navigation';



const AuthForm = ({ type}: {type: string}) => {
    const router = useRouter();
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const formSchema = authFormSchema(type);
        // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: '',

        },
    })
    // 2. Define a submit handler.
    const onSubmit = (data: z.infer<typeof formSchema>) =>{
      
        setIsLoading(true)
        try{
         // Sign up with Appwrite and create plain Link token
         if(type=== 'sign-up'){
          //  const newUser = await signUp(data);
          //  setUser(newUser);
         }
         if(type=='sign-in'){
          // const response = await SignIn({
          //   email: data.email,
          //   password: data.password,
          // })
          // if(response) router.push('/')

         }
        } catch(error){
          console.log(error)
        }
        finally{
        
        setIsLoading(false)
        }
    }
    
  return (
    <section className='auth-form'>
       <header className='flex flex-col gap-5 md:gap-8'>
       <Link href="/" className='cursor-pointer flex items-center gap-1 '>
            <Image
             src="/icons/logo.svg"
             width={34}
             height={34}
             alt='Horizon logo'
            
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
             </Link>
             <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {
                        user
                        ? 'Link Account'
                        : type=='sign-in'
                        ? 'Sign In'
                        : 'Sign Up'
                    }
                </h1>
                <p className='text-16 font-normal text-gray-600'>
                    {user
                       ? 'Link your account to get started'
                       : 'Please enter your detail'
                    }

                </p>
             </div>
        
        </header> 
        {user ?(
          <div className="flex flex-col gap-4">
            {/* PlaidLink */}
          </div>
        ):(
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                       {type ==='sign-up' &&
                       <>
                       <div className='flex gap-4'>
                         <CustomInput 
                        form = {form}
                        name = 'firstName' 
                        label = 'First Name' 
                        placeholder = 'ex: Bhavishya'
                        
                        />
                         <CustomInput 
                        form = {form}
                        name = 'lastName' 
                        label = 'Last Name' 
                        placeholder = 'ex: Sangwan'
                        
                        />
                        </div>
                         <CustomInput 
                        form = {form}
                        name = 'address' 
                        label = 'Address' 
                        placeholder = 'Enter your specific address'
                        
                        />
                         <CustomInput 
                        form = {form}
                        name = 'city' 
                        label = 'City' 
                        placeholder = 'Enter your city'
                        
                        />
                        <div className='flex gap-4'>
                         <CustomInput 
                        form = {form}
                        name = 'state' 
                        label = 'State' 
                        placeholder = 'ex: Haryana'
                        />
                         <CustomInput 
                        form = {form}
                        name = 'postalCode' 
                        label = 'Postal Code' 
                        placeholder = 'ex: 113318'
                        /> 
                        </div>
                        <div className='flex gap-4'>
                        <CustomInput 
                        form = {form}
                        name = 'dateOfBirth' 
                        label = 'Date of Birth' 
                        placeholder = 'yyyy-mm-dd'
                        
                        />
                         <CustomInput 
                        form = {form}
                        name = 'phone' 
                        label = 'Phone No.' 
                        placeholder = 'ex: 98XXXXXXXX'
                        
                        />
                        </div>
                       
                       
                       
                       </> }
                        <CustomInput 
                        form = {form}
                        name = 'Email' 
                        label = 'Email' 
                        placeholder = 'Enter your email'
                        
                        />
                        <CustomInput 
                        form = {form}
                        name = 'password' 
                        label = 'Password' 
                        placeholder = 'Enter your password'
                       
                        />
                       <div className='flex flex-col gap-4'>
                        <Button type="submit" disabled={isLoading} className='form-btn'>
                          {isLoading? (
                            <>
                            <Loader2 size={20} className="animate-spin"/> &nbsp;
                            Loading...
                            
                            </>
                          ):type === 'sign-in' ?
                          'Sign In': 'Sign Up'}
                        </Button>
                        </div>
                    </form>
                    </Form>

                  <footer className='flex justify-center gap-1'>
                          <p className='text-14 font-normal text-gray-600'>
                            {type === 'sign-in' ? 
                             "Don't have an account?" : "Already have an account?"}
                          </p>
                          <Link href={type=== 'sign-in'? '/sign-up':'/sign-in'} className='form-link'>
                          {type=== 'sign-in'? 'Sign Up':'Sign In'}
                          </Link>

                  </footer>
              
            </>
        )
        }
    </section>
  )

}
export default AuthForm
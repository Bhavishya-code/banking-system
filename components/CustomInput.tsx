
import React, { useState } from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { authFormSchema } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const CustomInput = ({form ,name ,label,placeholder}:CustomInputProps) => {

  
  return (
    <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
        <div className='form-item'>
           <FormLabel className='form-label'>{label}</FormLabel> 
            <div className='flex w-full flex-col'>
            <FormControl>
                <Input 
                  placeholder={placeholder} 
                  className='input-class'
                  type={name === 'password' ? 'password' : 'text'}
                  {...field}
                />
            </FormControl>
            <FormMessage className='form-message mt-2'/>
            </div>
            
        </div>
    )}
    />
  )
}

export default CustomInput
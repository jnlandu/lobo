'use client'


import { Input } from "@/components/ui/input"
import { Control, useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import React, { useState } from 'react'
import { FormFieldType } from "./forms/PatientForm"
import Image from "next/image"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string
    label?: string,
    placeholder: string,
    iconSrc : string,
    iconAlt: string,
    disabled?: boolean,
    dateFormat?: string,
    children?: React.ReactNode, 
    renderSkeleton?: (field: any) => React.ReactNode

}

const RenderField = ({ field, props}: { field: any, props: CustomProps}) =>{
    const {fieldType, iconAlt, iconSrc, placeholder} =props
    switch (fieldType){
        case FormFieldType.INPUT:
            return(
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {iconSrc && (
                       <Image
                        src = {iconSrc}
                        height={24}
                        width={24}
                        alt={iconAlt || 'icon'}
                        className="ml-2"
                    />
                    )}
                    <FormControl >
                        <Input
                        placeholder={placeholder}
                        {...field}
                        className="shad-input border-0"


                        />
                    </FormControl>
                </div>
            )
        case FormFieldType.PHONE_INPUT:
            // const [value, setValue] = useState()
                return (
                     //  phone field: install eact-phone-number-input
                    <FormControl>
                        <PhoneInput
                        defaultCountry="CD"
                        placeholder={placeholder}
                        international
                      value = {field.value as e16Numner | undefined}
                      className="input-phone shad input border"
                        />
                    </FormControl>
                
            )
        default:
            break
            

    }
    
}



const CustomFormField = (props : CustomProps) => {
    const { control , fieldType, name, label} =props
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex-1">
            {fieldType !== FormFieldType.CHECKBOX && label  &&(
                <FormLabel> {label} </FormLabel>
            )}
            
            <RenderField field= {field} props={props} />


            <FormMessage className="shad-error" />
          </FormItem>
        )}
      />
  )
}

export default CustomFormField
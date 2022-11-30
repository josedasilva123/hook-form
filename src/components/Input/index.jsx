import React from 'react'

const Input = ({label, type, placeholder, register}) => {
  return (
    <fieldset>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...register}/>
    </fieldset>    
  )
}

export default Input
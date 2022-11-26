import React from 'react'

export default function Input({onChange, value, name, label}) {
  return (
    <div className="form-outline mb-4">
      <label className="form-label" htmlFor="name">{label}</label>
        <input 
        onChange={onChange} 
        value={value}
        type={name}
        id={name}
        name={name}
        className="form-control form-control-lg" />
    </div>
  )
}

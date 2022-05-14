import React from 'react'

const Button = ({title,btnType,btnClass}) => {
  return (
    <button type={btnType} className={btnClass}>
      {title}
    </button>
  )
}

export default Button

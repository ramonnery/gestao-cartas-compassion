function Input({id='', label, type='text', placeholder=''}) {
  return (
    <>
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input 
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
        />
      </div>
    </>
  )
}

export default Input
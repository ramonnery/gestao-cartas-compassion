function Input({id='', label, type='text', placeholder='', labelClass='', inputClass='', containerClass=''}) {

  const labelStyle = `text-base font-semibold
                      tracking-wide
                      text-(--color-compassion-font-main)
                      ${labelClass}` 

  const inputStyle = `bg-compassion-background
                      h-full
                      pl-[0.5rem]
                      ${inputClass}`

  const containerStyle = `flex flex-col
                          justify-around
                          h-[4.25rem]
                          w-full
                          my-4
                          ${containerClass}`

  return (
      <div className={containerStyle}>
        {label && <label className={labelStyle} htmlFor={id}>{label}</label>}
        <input className={inputStyle}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
        />
      </div>
  )
}

export default Input
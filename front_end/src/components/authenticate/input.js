const Input = ({txt,name,value,onChange}) => {
    return(
        <div>
           <input className='form_input' type='text' placeholder={txt} name={name} value={value} onChange={onChange} /></div>
    )
}

export default Input;
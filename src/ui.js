
const Ui = (props) => {
    const { htmlFor, type, name, placeholder, stateFields, stateErrors, onChange, error } = props;
    return <>
        <div className='inputContainer'>
            <label htmlFor={htmlFor} />
                <input type={type} name={name} className="input" placeholder={placeholder} value={stateFields[name]} onChange={onChange} />
        </div>
        <em className='em'> {stateErrors[error]} </em>
    </>
}

export default Ui;

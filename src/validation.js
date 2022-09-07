import {useState, useEffect} from 'react';
import Ui from './ui';
import './validation.css';


const defaultFields = {
    username: '',
    password: '',
    confpass: '',
    email: '',
    tel: '',
};

const defaultErrors = {
    usernameError: '',
    passwordError: '',
    confpassError: '',
    emailError: '',
    telError: '',
};

const tagsValues = [
    {
        htmlFor: 'username',
        type: 'txet',
        name: 'username',
        placeholder: 'User Name',
        error: 'usernameError'
    },

    {
        htmlFor: 'pass',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        error: 'passwordError'
    },
    {
        htmlFor: 'confirmPass',
        type: 'password',
        name: 'confpass',
        placeholder: 'Confirm Password',
        error: 'confpassError'
    },
   
    {
        htmlFor: 'email',
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        error: 'emailError'
    },
    {
        htmlFor: 'phone',
        type: 'tel',
        name: 'tel',
        placeholder: 'Number',
        error: 'telError'
    }
]


function ValidationPage(){
    const [fields, setFields] = useState(defaultFields);
    const [errors, setErrors] = useState(defaultErrors); 

    function handleInputChange(e) {
        const {name, value} = e.target;
        setFields(() => ({
            ...fields,
            [name]: value
        }));
        
    };   

   
    function isValid() {
        const { username, password, confpass, email, tel } = fields;
        let valid = false;

        const submittedErrors = {};
        
        if(username.length < 5) {
            submittedErrors.usernameError = 'user name should have more than 5 charackters';
        };
        if (password.length < 8){
            submittedErrors.passwordError = 'password should have at least 8 charackters';
        };
        if(!/[0-9]/.test(password)){
            submittedErrors.passwordError = 'should contain numbers';
        };
        if(!/[A-Z]/.test(password)){
            submittedErrors.passwordError = 'should contain capital letters';
        };
        if(!/[a-z]/.test(password)){
            submittedErrors.passwordError = 'should contain lower letters';
        };
        if(password !== confpass){
            submittedErrors.confpassError = 'passwords dont match!';
        };
        if(!email.includes('@')){
            submittedErrors.emailError = 'not an email'; 
        };
        if(isNaN(tel) || tel === ''){
            submittedErrors.telError = 'this input must be number';
        };

        setErrors((errors) => ({...errors, ...submittedErrors}));  
        const errorsLength = Object.keys(submittedErrors).length;
        if( errorsLength === 0 ) {
            valid = true;
        }
        return valid;
    }

    function alertBtn() {
        const { username, password, confpass, email, tel } = fields;
        if(isValid()){
            alert(`User Name is -->  ${username}
            \nPassword is --> ${password}
            \nConfirmed Password is --> ${confpass}
            \nEmail is --> ${email}
            \nTelephone number is --> ${tel}`);
            setFields(defaultFields)
            setErrors(defaultErrors);
        }
    };

    function resetBtn () {
        setFields(defaultFields);
        setErrors(defaultErrors);
    };


    function handleSubmit(event) {
        event.preventDefault();
    };
    
    

    return (
        <div className='signupFrm'>
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='title'> Sign Up </h2>
                    {
                        tagsValues.map((tagsValue) => {
                            return <Ui stateFields={fields} stateErrors={errors} {...tagsValue} onChange={handleInputChange}/>
                        })
                    }
                <div className='btnClass'> 
                        <button className='submitBtn' onClick={alertBtn}> Submit </button>
                        <button className='submitBtnReset' onClick={resetBtn}> Reset </button>
                </div>
            </form>
        </div>
   )
}

export default ValidationPage;
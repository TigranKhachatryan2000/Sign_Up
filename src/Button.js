import './button.css'
import ValidationPage from './validation';
import { ThemeContext } from './App';
import { useContext, useRef, useState } from 'react';
import Portal from './Portal';

function Button() {
    const [background, setBackground] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [modelOpen, setModelOpen] = useState(false);
    const myRef = useRef();
    const colorBC = useContext(ThemeContext);
    
 

    ////    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    function darkLightBtn(){
        // this.setState({isValid: !this.state.isValid});
        setIsValid(!isValid);
        console.log(isValid);
        if(!isValid){
            myRef.current.style.backgroundColor = background;
            setBackground("");
        } else{
            myRef.current.style.backgroundColor = background;
            setBackground(colorBC);
        }
    }

    function openModel() {
        setModelOpen(!modelOpen)
    }
    
    function closeWindow() {
        setModelOpen(false)
    }

    return (
        
        <div ref={myRef} style={{height: '100vh'}}>
          <button onClick={darkLightBtn}> {isValid ? "Light" : "Dark"} </button>
          <button onClick={openModel}>About</button>
          <Portal isOpen={modelOpen} onClose={closeWindow}></Portal>
          <ValidationPage />
        </div>
    )
}

export default Button;
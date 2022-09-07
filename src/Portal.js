import ReactDOM from 'react-dom';
import './model.css'


export default function Portal({isOpen, onClose}) {
    
        return isOpen && ReactDOM.createPortal(
            <div className="wrap">
                <div className="window">
                    <div>
                        <span className='close-button' onClick={onClose}>X</span>
                        <div className='content'>
                            <strong>This is a page for registering your personal information </strong>
                        </div>
                    </div>
                </div>
            </div>, 
            document.getElementById('portal')
        ) 
    
    
}
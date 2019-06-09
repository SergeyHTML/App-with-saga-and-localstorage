import React, {useState} from 'react'
import './style.scss'

function EnterName(props) {
    const [userName, setUserName] = useState('');

    let handleChange = () => (ev) => {
        const {value} = ev.target;

        setUserName(value)
    };

    let handleSubmit = (e) => {
        e.preventDefault();

        props.onEnter(userName)
    };

    return (
        <div className='enter-name'>
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    <label htmlFor="enterName">Enter your name</label>
                    <input className='form-control' value={userName} id='enterName' type='text'
                           placeholder='Enter your name' onChange={handleChange()} />
                </div>
                <button className='btn btn-primary' type='submit'>Add name</button>
            </form>
        </div>
    )

}

export default EnterName

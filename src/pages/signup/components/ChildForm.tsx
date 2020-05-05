import React from 'react'
import { useHistory } from 'react-router-dom'

const ChildForm = () => {
    const history = useHistory();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        history.push('/child-form-01')
    }

    return (
        <div className='onb-container'>
            <h1 className='onb-heading'>Let's create your child's profile!</h1>
            <form onSubmit={handleSubmit}>
                <input />
                <input />
                <input />
                <br />
                <button className='onb-btn'>Next</button>
            </form>
        </div>
    )
}

export default ChildForm;
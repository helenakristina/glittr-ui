import React from 'react'
import { useHistory } from 'react-router-dom'

const ChildForm = () => {
    const history = useHistory();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        history.push('/child-form-01')
    }

    return (
        <div>
            <h1>Let's create your child's profile!</h1>
            <form onSubmit={handleSubmit}>
                <input />
                <input />
                <input />
                <button>Next</button>
            </form>
        </div>
    )
}

export default ChildForm;
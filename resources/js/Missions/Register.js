import React, { useState } from 'react'
import axios from 'axios';


const Register = () => {
// values in the form
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
// error messages to put in a form
    const [errors, setErrors] = useState([]);

    const handleChange = (event) => {
        setValues(
            previous_values => {
                return (
                    {
                        ...previous_values,
                        [event.target.name]: event.target.value
                    }
                );
                }
            );
    }
    // handle the submission of the form
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/register', values);
            
            getUserInfo();
            
            console.log(response);
            
        } catch (error) {

            if (error.response.status == 422) {

                setErrors(error.response.data.errors);

                console.log("Validation failed!")
            }
        }
    }

    return (
        <form action="" method="post" onSubmit={ handleSubmit }>
       
            {
              Object.values(errors).map((field_errors, i) => field_errors.map((error, j) => (
                  <div className='error' key={ `${i}-${j}` }>
                      { error }
                </div>
            )))
            }

          <div className='form-group'>
              <label for="name">Name</label><br />
              
              <input type="text" name="name" value={ values.name } onChange={ handleChange } />
          </div>    
      
          <div className='form-group'>
              <label for="email">E-mail:</label><br />
              
              <input type="email" name="email" value={ values.email } onChange={ handleChange } />
          </div>    
      
          <div className='form-group'>
              <label for="password">Password:</label><br />
              
              <input type="password" name="password" value={ values.password } onChange={ handleChange } />
          </div>    
      
          <div className='form-group'>
              <label for="password_confirmation">Confirm password:</label><br />
              
              <input type="password" name="password_confirmation" value={values.password_confirmation} onChange={handleChange} />
              <br />
              <br />

              <button>Register</button>
          </div>    
      
      </form>
  )
}

export default Register
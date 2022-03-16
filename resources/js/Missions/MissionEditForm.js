import React, { useState } from 'react'
import axios from 'axios';

const MissionEditForm = () => {

    const [values, setValues] = useState({
        name: '',
        year: 2022,
        outcome: 'in_progress'
    })

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
        
    const handleSubmit = async event => {
        event.preventDefault();
        
        const meta_tag = document.querySelector('meta[name="csrf-token');
        const csrf_value = meta_tag.getAttribute('content');

        // fetch
        const response = await fetch('/api/missions', {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrf_value
            }
        })

        // axios
        const axios_response = await axios.post('api/missions', values);
}
        
        
        
        const years = [];
        for (let year = 1900; year <= 2030; year++){
            years.push(year);
        }
        
    console.log(values);
    
        return (
            <div>
          <h1>This is the mission edit form.</h1>
            
          <form
            className='edit-mission'
              action=""
              method="post"
              onSubmit={ handleSubmit }
          >

                <div className='form-group'>
                        <label>Name:</label><br />
                        
                  <input
                      type="text"
                      name="name"
                      value={ values.name }
                      onChange= { handleChange }
                      />

                </div>

                <div className='form-group'>
                        <label>Year:</label><br />
                        
                  <select
                    name="year"
                    value={ values.year }
                    onChange= { handleChange }  
                  >
                        {
                          years.map(year => (
                            <option value={year} key={ year }>{ year }</option>
                                    ))
                        }
                        </select>

                </div>

                <div className='form-group'>
                        <label>Outcome:</label><br />
                        
                  <select
                    name="outcome"
                    value={values.outcome}
                    onChange={ handleChange }  
                  >
                      <option value="in_progress">In progress</option>
                      <option value="success">Success</option>
                      <option value="failure">Failure</option>
                  </select>
              </div>
              
              <br />

              <button>Submit the mission</button>
                
            </form>
    </div>
  )
}

export default MissionEditForm
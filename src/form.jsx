import { useEffect, useState } from "react";
import useForm from './useForm';

const Form = () => {
  const { inputs, handleChange, handleSubmit,errors} = useForm()
  
  useEffect(()=>{
    console.log(errors)
    if(Object.keys(errors).length == 0){
        alert('All Field are fullfiled')
    }
},[errors])

  return (
    <div className="form-container" >
      <div className="form-bg">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <span>Name: </span>
            <input
              className="form"
              id="name"
              name="name"
              type="text"
              value={inputs.name}
              onChange={handleChange}
            />
            {
              errors.name && 
              <span>{errors.name}</span>
            }
          </div>
          <div className="form-group">
            <span>Phone Number: </span>
            <input
              className="form"
              id="phonenumber"
              name="phonenumber"
              type="number"
              value={inputs.phonenumber}
              onChange={handleChange}
            />
              {
              errors.phonenumber && 
              <span>{errors.phonenumber}</span>
            }
          </div>
          <div className="form-group">
            <span>Job Position: </span>
            <input
              className="form"
              id="jobpostion"
              name="jobposition"
              type="text"
              value={inputs.jobposition}
              onChange={handleChange}
            />
              {
              errors.jobposition && 
              <span>{errors.jobposition}</span>
            }
          </div>
          <div className="form-group" type="submit">
                <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

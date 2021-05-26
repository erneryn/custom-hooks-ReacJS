import { useEffect, useState } from "react"

const useForm = ()=>{
    const [inputs,setInputs] = useState({
        name:'',
        phonenumber:'',
        jobposition:''
    })
    const [errors,setErrors] = useState({})
    const [submited,setSubmited] = useState(false)
  

    const handleChange = (event) =>{
        let objectProperty = event.target.name;
        let value = event.target.value
        setInputs({
            ...inputs,
            [objectProperty]: value
        })
    }

    const handleErrors = (values)=>{
        let errors = {}
        if(!values.name) errors.name = "Name Required!"
        if(!values.phonenumber) errors.phonenumber = "Phone Number Required!"
        if(!values.jobposition) errors.jobposition = "Job Position Required"
        setErrors(errors)
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        handleErrors(inputs)
        setSubmited(true)
    }

    

    

    return {
        inputs,
        handleChange,
        handleSubmit,
        errors
    }
}

export default useForm
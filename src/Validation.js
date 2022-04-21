const Validation = (values) =>{
   
    let errors ={};
    if(!values.fullname){
        errors.fullname="Name is required."
    }
   if(!values.email){
        errors.email="email is required."
    }
        if(!values.password){
            errors.password ="password is required"
        }else if(values.password.length<5){
            errors.password ="password must be greater than 5 character"
        }
  return errors;
}

export default Validation
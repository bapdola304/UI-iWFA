export default  validate = (values, type) => {
    console.log(values);
    alph = /^[a-zA-Z0-9]+$/
    const error= {};
    if(!values){
        error[type] = type + ' is required';
    }

    if(!alph.test(values)){
       
            error[type] = type + ' must not char spec';
    }
   
    return error;
  };
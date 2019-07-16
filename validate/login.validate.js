export default  validate = (values, type) => {
    console.log(values);
    alph = /^[a-z0-9_-]{3,60}$/
    const error= {};
    if(!values){
        error[type] = type + ' can only contain: a-z, 0-9 and must has between 3 and 60 characters';
    }

    if(!alph.test(values)){
       
            error[type] = type + ' can only contain: a-z, 0-9 and must has between 3 and 60 characters';
    }
   
    return error;
  };
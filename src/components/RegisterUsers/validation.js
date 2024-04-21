const validation = (userData) => {
  const errors = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    dni: "",
    address: "",
    age: "",
    phoneNumber: "",
  };
  if (!userData.name) {
    errors.name = "Name input field is empty";
  } else if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s']/g.test(userData.name)) {
    errors.name = "The name cannot contain symbols and numbers";
  } else if (userData.name.length > 15) {
    errors.name = "The name cannot be more than 15 characters long";
  }
  if (!userData.lastname) {
    errors.lastname = "Lastname input field is empty";
  } else if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s']/g.test(userData.lastname)) {
    errors.lastname = "The lastname cannot contain symbols and numbers";
  } else if (userData.lastname.length > 15) {
    errors.lastname = "The lastname cannot be more than 15 characters";
  }
  if (!userData.email) {
    errors.email = "Email input empty";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)
  ) {
    errors.email = "Invalid email";
  } else if (userData.email.length > 35) {
    errors.email = "The email must not contain more than 35 characters";
  }
  if (!userData.password) {
    errors.password = "Empty password";
  } else if (!/\d/.test(userData.password)) {
    errors.password = "The password must contain a number";
  } else if (userData.password.length < 5 || userData.password.length > 10) {
    errors.password = "The password must be between 6 and 10 characters long";
  }
  if(!userData.dni){
    errors.dni = "DNI input field is empty"
  }else if(isNaN(userData.dni)){
    errors.dni = "DNI must be a valid number"
  }else if(userData.dni.length < 8){
    errors.dni = "Invalid DNI value"
  }
  if(!userData.address){
    errors.address = "Address input is empty"
  }
  if(!userData.age){
    errors.age = "The age input field is emprty"
  }else if(isNaN(userData.age)){
    errors.age = "The age must be a number"
  }
  if(!userData.phoneNumber){
    errors.phoneNumber = "The phone number input field is empty"
  }else if(isNaN(userData.phoneNumber)){
    errors.phoneNumber = "The phone number must be a number"
  }else if(userData.phoneNumber.length < 10){
    errors.phoneNumber = "Invalid telephone number value"
  }

  return errors;
};

export default validation;



const validation = (productData) => {
  const errors = {
    name: "",
    price: "",

    stock: "",
    image: "",
  };

  if (!productData.name) {
    errors.name = "Name input field is empty";
  } else if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s']/g.test(productData.name)) {
    errors.name = "The name cannot contain symbols and numbers";
  } else if (productData.name.length > 15) {
    errors.name = "The name cannot be more than 15 characters long";
  } else if (productData.name.length < 3) {
    errors.name = "The name must contain more than 2 characters";
  }

  if(!productData.stock){
    errors.stock = "Stock input field is empty"
  }else if(isNaN(productData.stock)){
    errors.stock = "Stock must be a valid number"
  }

  if (!productData.price) {
    errors.price = "Price input field is empty";
  } else if (isNaN(productData.price)) {
    errors.price = "Price must be a valid number";
  }
  if (!productData.image) {
    errors.image = "Image input field is empty";
  } else if (!/^((https?|ftp):\/\/)?[^\s/$.?#].[^\s]*$/i.test(productData.image)) {
    errors.image = "The image input field must be a valid URL"; 
  }
  return errors;
};

export default validation;

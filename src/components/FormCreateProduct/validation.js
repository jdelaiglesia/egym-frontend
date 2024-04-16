const validation = (productData) => {
  const errors = {
    name: "",
    price: "",
    available: "",
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

  if (!productData.price) {
    errors.price = "Price input field is empty";
  } else if (isNaN(productData.price)) {
    errors.price = "Price must be a valid number";
  }
  return errors;
};

export default validation;

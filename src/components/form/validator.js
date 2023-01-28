let validator = (input) => {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regexDate = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  let errors = {};

  if (input.full_name.length < 1 || input.full_name.length > 20) {
    errors.full_name = "Nombre debe tener entre 1 y 20 caracteres.";
  }
  if (!regexEmail.test(input.email)) {
    errors.email = "Mail inválido.";
  }
  if (input.country_of_origin === "") {
    errors.country_of_origin = "Debe seleccionar un paìs.";
  }
  if (!regexDate.test(input.birth_date)) {
    errors.birth_date = "Fecha inválida.";
  }
  return errors;
};

export default validator;

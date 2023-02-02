const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateAddProjectInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  data.owner = !isEmpty(data.owner) ? data.owner : "";
  data.images = !isEmpty(data.images) ? data.images : [];

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (Validator.isEmpty(data.owner)) {
    errors.owner = "The creator is not not given";
  }
  // if (data.images.length !== 0) {
  //   for (let i = 0; i < data.images.length; i++) {
  //     //check id and path
  //     data.images[i].id = !isEmpty(data.images[i].id) ? data.images[i].id : "";
  //     data.images[i].path_url = !isEmpty(data.images[i].path_url)
  //       ? data.images[i].path_url
  //       : "";
  //     if (Validator.isEmpty(data.images[i].id.toString())) {
  //       errors.images = "The id of the " + i + " image is not defined ";
  //       break;
  //     }
  //     if (Validator.isEmpty(data.images[i].path_url)) {
  //       errors.images = "The path_url of the " + i + " image is not defined ";
  //       break;
  //     }
  //   }
  // }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};

var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});
function validateEmail(value) {
  var input = document.createElement('input');

  input.type = 'email';
  input.required = true;
  input.value = value;

  return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
}

function validate(){
  var elems = document.getElementsByClassName( 'dynamicAddedItems' );
  var allgood = true;

  //Loop through all elements with this class
  for( var i = 0; i < elems.length; i++ ) {
    if( !elems[i].value || !elems[i].value.length ) {
      elems[i].className += " error";
      allgood = false;
    } else {
      elems[i].className = "item_text_area item_name dynamicAddedItems";
    }
  }

  //If any element did not meet the requirements, prevent it from being submitted and display an alert
  if( !allgood ) {
    alert( "Please fill in all the required fields." );
    return false;
  }

  //Otherwise submit the form
  return true;
}

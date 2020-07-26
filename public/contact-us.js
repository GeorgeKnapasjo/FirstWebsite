document.getElementById("products").addEventListener('click', productsClicked)
function productsClicked(){
    alert("Products coming soon!")
}

function validateFirstName() {
    var x = document.forms["contact-us"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  
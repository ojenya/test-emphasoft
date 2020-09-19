
ScrollReveal().reveal('.wrapper',{ 
  distance: '200px', 
  opacity: 0 ,
  easing: 'ease-in',
  delay: 350 })


  function btnclck(){
    if (window.confirm('Жми ОК и глянешь исходники на гитхабе :)')) 
    {
    window.location.href='https://github.com/ojenya/test-emphasoft/';
    };
  }

  function drop() {
    document.getElementById("dropdown_menu").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  
    $('.nav-toggle').on('click', function(){
      console.log('click');
      $('.left_bar').toggleClass('view');
    });

})




window.addEventListener("DOMContentLoaded", () => {
    $('.nav-toggle').on('click', function(){
      console.log('click');
      $('.left_bar').toggleClass('view');
    });
})
 const res = document.querySelector('#onSendMessage')
 res.addEventListener('click', () => {
   console.log('click');

 })



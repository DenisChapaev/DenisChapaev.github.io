 <script src="lib/jquery/jquery.min.js"></script>


 <script>
$(document).ready(function(){
var height = $(window).height();
$('.header__arrow').on('click',function(){
   $(window).scrollTop(height);
})
});
 </script>

$('#menusuutap,#hiddenbosuutap').hover(function(){
    $("#hiddenbosuutap").addClass("test");  

});

$('#menusuutap,#hiddenbosuutap').mouseleave(function(){
    $("#hiddenbosuutap").removeClass("test");
    $("#hiddenbosuutap").addClass("test1");
     
});

//    hết js tab bộ sưu tập hiện lên


$('#menuSanpham,#menuSPhiden').hover(function(){
    $("#menuSPhiden").addClass("test5");  
});

$('#menuSanpham,#menuSPhiden').mouseleave(function(){
    $("#menuSPhiden").removeClass("test5");
    $("#menuSPhiden").addClass("test6");
});

//   Hết js tab sản phẩm hiện lên


$('#col2 img').hover(function(){
   $('#col2 img').removeClass('test70');

   $('#col2 img').addClass('test60');
});

$('#col2 img').mouseleave(function(){
    $('#col2 img').removeClass('test60');

    $('#col2 img').addClass('test70')
});

    //   Hết quảng cáo img hover


$('#col1 img, #iconRight').hover(function(){
    $("#iconRight").removeClass("test11");
    
    $('#iconRight').addClass('test10');

});
 
$('#col1 img, #iconRight').mouseleave(function(){
    $("#iconRight").removeClass("test10");
    $("#iconRight").addClass("test11");
     
});
//   Hết slide ẩn hiện bên trái
$('#col1 img, #iconLeft').hover(function(){
    $("#iconLeft").removeClass("test111");

     $('#iconLeft').addClass('test100');

});

$('#col1 img, #iconLeft').mouseleave(function(){
    $("#iconLeft").removeClass("test100");

    $("#iconLeft").addClass("test111");
     
});
    // Hết slide ẩn hiện bên phải

$('.effect img').mouseleave(function(){
     
    $('.effect img').addClass('effect00');
})



    $(document).ready(function(){
          
        

         // Phần back to top

        //Check to see if the window is top if not then display button
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
    
        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},600);
            return false;
        });
                    
    })
    //    Hết back to top

$(".dangnhap").click(function(){
    $(".contain-login").slideToggle();
});
//  Hết onclick đăng nhập

$(".timkiem").click(function(){
    $(".search").slideToggle();
});
//   hết onclick tìm kiếm

var slideIndex = 0;
carousell();

function carousell() {
    var i;
    var x = document.getElementsByClassName("col1-slide1");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousell, 7000); 
};
//   hết hiệu ứng slice chạy liên tục slice1

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("col1-slide1");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
};



var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("sclice-sanpham");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
}
//   hết hiệu ứng slice chạy slice2    
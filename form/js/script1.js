var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#user").html("Tên đăng nhập: "+searchParams.get("username"));
$("#email").html("Email: "+searchParams.get("email"));
$("#pass").html("Mật khẩu: "+searchParams.get("pass"));


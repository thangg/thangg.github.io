var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#name").html("Họ và tên: "+searchParams.get("name"));
//searchParams.get("") là lấy kết quả của trang chủ.
$("#user").html("Tên đăng nhập: "+searchParams.get("username"));
$("#email").html("Email: "+searchParams.get("email"));
$("#pass").html("Mật khẩu: "+searchParams.get("pass"));
$("#date").html("Ngày sinh: "+searchParams.get("dateOfBirth"));
$("#genden").html("Giới tính: "+searchParams.get("gioitinh"));

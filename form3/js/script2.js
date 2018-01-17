
$('#form-register').on('submit', function(){
	    var isCorrectly = true;
          if ($('#name').val().trim() == ''){
          	 $('#name').next('span').text('!Error').css('color','red').css('font-size','22px');
          	 isCorrectly = false;
          } else {
          	$('#name').next('span').text('');
          }

          if ($('#username').val().trim() == ''){
          	 $('#username').next('span').text('!Error').css('color','red').css('font-size','22px');
          	 isCorrectly = false;
          } else {
          	$('#username').next('span').text('');
          }

          if ($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null){
          	 $('#email').next('span').text('!Error').css('color','red').css('font-size','22px');
          	 isCorrectly = false;
          } else {
          	$('#email').next('span').text('');
          }
          
          if ($('#pass').val().match(/^[a-zA-Z]\w{3,14}$/) == null){
          	 $('#pass').next('span').text('!Error').css('color','red').css('font-size','22px');
          	 isCorrectly = false;
          } else {
          	$('#pass').next('span').text('');
          }
          
          if ($('#pass2').val() != $('#pass').val()){
          	 $('#pass2').next('span').text('!Error').css('color','red').css('font-size','22px');
          	 isCorrectly = false;
          } else {
          	$('#pass2').next('span').text('');
          }

          if ($('#date').val().trim() == ''){
          	 $('#date').next('span').text('!Error').css('color','red').css('font-size','22px');
          	 isCorrectly = false;
          } else {
          	$('#date').next('span').text('');
          }
 
          return isCorrectly;
    });
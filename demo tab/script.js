

var arr=['anh', 'anh1', 'anh2', 'anh3', 'anh4', 'anh5', 'anh6', 'anh7'];
var html = "";
for(var x = 0; x < arr.length; x++){
    html = '<img src =' + arr[x] + '.jpg>';
    document.getElementById(arr[x]).innerHTML = html;
};

  

var mang = [ {
    name: "Nguyễn Đình Lâm",
    birthday: "01-01-1999",
    gender: "Nam",
    phone: "012353257454"
},
{
    name: "Nguyễn Văn Trường",
    birthday: "02-02-1999",
    gender: "Nam",
    phone: "0475375364"
},
{
    name: "Phạm Trọng Tuyên",
    birthday: "03-03-1999",
    gender: "Nam",
    phone: "0464364657345"
},
{
    name: "Nguyễn Văn Hào",
    birthday: "04-04-1999",
    gender: "Nam",
    phone: "04634647565"
},
{
    name: "Nguyễn Văn Thắng",
    birthday: "05-05-1999",
    gender: "Nam",
    phone: "055654654"
},
{
    name: "Nguyễn Đình Hải",
    birthday: "06-06-1999",
    gender: "Nam",
    phone: "0456565"
},
{
    name: "Nguyễn Thị Thu",
    birthday: "07-07-1999",
    gender: "Nữ",
    phone: "0534654757756"
},
{
    name: "Nguyễn Thị Ngọc",
    birthday: "08-08-1999",
    gender: "Nữ",
    phone: "035346537575"
},
];

var mangname = ['name', 'name1', 'name2', 'name3','name4','name5','name6', 'name7'];
var mangbirthday = ['birthday', 'birthday1', 'birthday2', 'birthday3','birthday4','birthday5', 'birthday6', 'birthday7'];
var manggender = ['gender', 'gender1', 'gender2', 'gender3', 'gender4', 'gender5', 'gender6', 'gender7' ];
var mangphone = ['phone', 'phone1', 'phone2', 'phone3', 'phone4', 'phone5', 'phone6', 'phone7'];

var n = " ";
var b = " ";
var g = " ";
var p = " ";
var name;
var birthday;
var gender;
var phone;

for(var n1 = 0; n1 < mangname.length; n1++){
    n = mangname[n1];
    name = '<p>' + mang[n1].name + '</p>';
    document.getElementById(n).innerHTML = name;
};
//  họ và tên

for(var b1 = 0; b1 < mangbirthday.length; b1++){
    b = mangbirthday[b1];
    birthday = '<p>' + mang[b1].birthday + '</p>';
    document.getElementById(b).innerHTML = birthday;
};
//  ngày sinh

for(var g1 = 0; g1 < manggender.length; g1++){
    g = manggender[g1];
    gender = '<p>' + mang[g1].gender + '</p>';
    document.getElementById(g).innerHTML = gender;
};
// giới tính

for(var p1 = 0; p1 < manggender.length; p1++){
    p = mangphone[p1];
    phone = '<p>' + mang[p1].phone + '</p>';
    document.getElementById(p).innerHTML = phone;
};
    // số điện thoại


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

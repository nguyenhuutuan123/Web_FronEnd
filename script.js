var arr=[
	{user:"huutuan",password:"12345678"},
	{user:"khanhvi",password:"123456789"},
	{user:"hoangkhanh",password:"1234567890"}
];


function kiemtra(){
	var user = document.getElementById("user").value;
	var password = document.getElementById("password").value;

	var count=0;
	for (var i=0; i<arr.length; i++) {
		if (user==arr[i].user && password==arr[i].password) {
			count=count+1;
			top.location="https://www.w3schools.com/js/js_array_methods.asp";

		}
	}
	if(count==0)
	{
		document.getElementById("error").innerHTML = "tai khoan khong ton tai";
	}

}
				// var swiper = new Swiper('.swiper-container', {
				// 	slidesPerView: 3,
				// 	spaceBetween: 30,
				// 	freeMode: true,
				// 	pagination: {
				// 		el: '.swiper-pagination',
				// 		clickable: true,
				// 	},
				// });
				// 
				// 


function dichvu(evt, goidichvu) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(goidichvu).style.display = "block";
    evt.currentTarget.className += " active";
}



function signup_func(currentUserInfo) {
// Nếu userInfo trong localStorage trống thì mình sẽ gán nó bằng mảng rỗng để tí parse nó ra sẽ ra mảng.
//  còn nếu không nó không ra gì đâu
	if (!localStorage.userInfo) localStorage.userInfo = "[]";

//Xử lí sự kiện click của nút sign up
	$('#signup').click((e) => {
	  //Nếu trường signup-email và trường signup-password không để trống + trường password và confirm password giống nhau thì xử lí tiếp, nếu không thì thông báo thông tin không hợp lệ
	  if ($('#signup-email').val() && $('#signup-password').val() && $('#signup-password').val() === $('#signup-confirm-password').val()) {
	// Lấy thông tin từ trong localStorage ra một biến tạm là currentUserInfo. Thông tin được lưu theo dạng json nên mình parse hắn ra sẽ thành mảng 
	    let currentUserInfo = JSON.parse(localStorage.userInfo);
	// Đẩy thông tin user mới-> dạng object 
	// đẩy nó vào biến currentUserInfo
	    currentUserInfo.push({
	      email: $('#signup-email').val(),
	      password: $('#signup-password').val(),
	    });
    
// gán userInfo trong localStorage bằng cái mảng mới được update trên kia nè. Mình phải mã hóa cái mảng đó thành dạng JSON bằng cách dùng lệnh JSON.stringtify
    localStorage.userInfo = JSON.stringify(currentUserInfo);
    alert('Sign up successfully');
	  } else {
	    alert('Check your information again!! Something is wrong.');
	  }
	  // lệnh này để cho khi submit form thì trang không bị reload. 
	  e.preventDefault();
	})
}

// xử lí sự kiện click nút login
function login_func() {
	// body...
$("#login").click((e) => {
// dùng JQuery lấy thông tin từ form ra -> bỏ vô Object rồi lưu vô biến currenLoginInfo
 let currentLoginInfo = {
    email: $('#login-email').val(),
    password: $('#login-password').val()
  }
 
 // Hàm checkauthentication ni được viết ở dưới
  if (checkAuthentication(currentLoginInfo)) {
    alert('Login successfully');
    location.replace("homeafterlogin.html");
  } else alert('Email or Password is incorrect');
  
  // ngăn trang reload khi submit form
  e.preventDefault();
	})


// Hàm kiểm tra login. Có tham số truyền vào là userInfo 
checkAuthentication = function(userInfo) {

// lấy user info từ localStorage ra - đổi thành mảng -> lưu vô currenUserInfo
	  const currentUserInfo = JSON.parse(localStorage.userInfo);
	  
	 // Tìm trong mảng lưu user coi có thằng nào giống với email và password đã nhập không bằng vòng lặp
	  for (i = 0; i < currentUserInfo.length; i++) {
	    
	// Đây là cách so sánh object trong javascript. 
	    if (JSON.stringify(currentUserInfo[i]) == JSON.stringify(userInfo)) {
	      return true;
	    }
	  }
	  return false;
	}

}

function exits() {
	location.replace("home.html");
}

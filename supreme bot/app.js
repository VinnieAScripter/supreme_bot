var full_name = "John Doe";
var email = "example@gmail.com";
var phone = "12345678900";
var address = "17 Test Road";
var city = "Example";

document.getElementById("order_billig_name").value = full_name;
document.getElementById("order_email").value = email;
document.getElementById("order_tel").value = phone;
document.getElementById("bo").value = address;
document.getElementById("order_billing_city").value = city;
document.getElementsByClassName('iCheck-helper')[1].click();
document.getElementsByName("commit")[0].click();

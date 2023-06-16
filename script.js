var inputPass2 = document.getElementById('pass2'),
    icon = document.getElementById('icon');

   icon.onclick = function () {

     if(inputPass2.className == 'active') {
        inputPass2.setAttribute('type', 'text');
        icon.className = 'fa fa-eye';
       inputPass2.className = '';

     } else {
        inputPass2.setAttribute('type', 'password');
        icon.className = 'fa fa-eye-slash';
       inputPass2.className = 'active';
    }
   }


function changeLabelColorInBlue(label_id){
	var label = document.querySelector(label_id);
	label.style.color = "rgb(30,144,255)";
	// alert(label.style.color);
}

function changeLabelColorInDefault(label_id){
	var label = document.querySelector(label_id);
	label.style.color = "rgba(0,0,0,0.5)";
	// alert(label.style.color);
}

	var sys_info = document.querySelector("#sys_info");
	sys_info.value = navigator.appVersion;

var appCodeName = navigator.appCodeName
var appName = navigator.appName
var appVersion = navigator.appVersion
var cookieEnabled = navigator.cookieEnabled
var platform = navigator.platform
var userAgent = navigator.userAgent
var vendor = navigator.vendor
var languages = navigator.languages

var browser_info = "Nav-appCodeName: " + appCodeName + ",Nav-appName: " + appName + ",Nav-appVersion: " + appVersion + ",Nav-cookieEnabled: " + cookieEnabled + ",Nav-platform: " + platform + ",Nav-userAgent: " + userAgent + ",Nav-vendor: " + vendor + ",Nav-languages: " + languages

document.getElementById("browser_info").value = browser_info;

$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
  // Convert key-value pairs to JSON
  // https://stackoverflow.com/a/39284735/452587
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  // console.log(data['ip']);
  // console.log('---------------------------------')
  // console.log(data);

  var getIpAddress = document.querySelector("#the-ip-address")
  getIpAddress.value = data['ip']
});







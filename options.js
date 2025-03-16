$(document).ready(function () {
	$("#notifications").bind("click", check_notifications);
	$("#checkadd").bind("click", check_sync);
	$("#cleanname").bind("click", check_cleanname);
	$("#namelength").bind("click", check_namelength);
	$("#checkreplace").bind("click", check_sync);
});

document.addEventListener('DOMContentLoaded', restore_options);

function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  browser.storage.local.get({
    notifications: true,
    cleanname: true,
    namelength: true,
    add: true
  }, function(items) {
    document.getElementById('notifications').checked = items.notifications;
    document.getElementById('checkadd').checked = items.add;
    document.getElementById('cleanname').checked = items.cleanname;
    document.getElementById('namelength').value = items.namelength;
    document.getElementById('checkreplace').checked = !(items.add);
  });
}

function check_notifications(){
	if(document.getElementById("notifications").checked) {
    	browser.storage.local.set({'notifications': true}, function () {});
	}
	else{
		browser.storage.local.set({'notifications': false}, function () {});
	}
}

function check_cleanname()
{
    if(document.getElementById("cleanname").checked)
    {
    	browser.storage.local.set({'cleanname': true}, function () {});
	}
	else
    {
		browser.storage.local.set({'cleanname': false}, function () {});
	}
    
}

function check_namelength()
{
    browser.storage.local.set({'namelength': parseInt(document.getElementById("namelength").value)}, function () {});
}

function check_sync(){
	if(document.getElementById("checkadd").checked){
		browser.storage.local.set({add: true}, function () {});
	}
	else{
		browser.storage.local.set({add: false}, function () {});
	}
}
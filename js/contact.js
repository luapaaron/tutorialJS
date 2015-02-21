	document.addEventListener("DOMContentLoaded", function(event) { 

	document.getElementById("DownloadLink").style.visibility='hidden';
});

var template2 = [
  '<?xml version="1.0"?>',
  '<unattend xmlns="urn:schemas-microsoft-com:unattend">',
  '...',
  '<Name><?Name?></Name>',
  '...',
  '<Email><?Email?></Email>',
  '...',
   '<Message><?Message?></Message>',
 
  '</unattend>'
].join('\r\n');

	function contact()
	{
		var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
		var emailExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([com\co\.\in])+$/;
		
		if (name == '' && email == '' && message == '')
		{
            alert("Fill all the textboxes");
            return false;

        }
		if (name == '') {
            alert("Please Enter Your Name");
            return false;
        }
		if (name == 'Your Name')
		{
			alert("Please Enter Your Name");
            return false;
		}
		if (email == '') {
            alert("Please Enter Your Email");
            return false;
        }
		if (email == 'Your Email')
		{
			alert("Please Enter Your Email");
            return false;
		}
		
		if (email != '') {

            if (!email.match(emailExp)) {
                alert("Invalid Email Address");
                return false;
            }
        }
		if (message == '') {
            alert("Please Enter Your Message");
            return false;
        }
		if (message == 'Your Message')
		{
			alert("Please Enter Your Message");
            return false;
		}
		
		  var variables2 = {
    'Name': name, 
    'Email': email,
    'Message': message
  };
  
  var newXml = template2.replace(/<\?(\w+)\?>/g,
    function(match, name) {
	 
      return variables2[name];
    });


  $('#DownloadLink')
    .attr('href', 'data:text/xml;base64,' + btoa(newXml))
    .attr('download', 'autounattended.xml');
	
$link = $('#DownloadLink');
$link[0].click()
	


if (!window.btoa) {
  // Source: http://www.koders.com/javascript/fid78168FE1380F7420FB7B7CD8BAEAE58929523C17.aspx
  btoa = function (input) {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    
    var result = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    
    do {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      
      result += chars.charAt(enc1) + chars.charAt(enc2) + chars.charAt(enc3) + chars.charAt(enc4);
    } while (i < input.length);
      
    return result;
  };
}
		
		alert("Message successfully sent.");
		
	}
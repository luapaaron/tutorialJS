<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Javascript Tutorial</title>
<link href="style2.css" rel="stylesheet" type="text/css" />
<link href="add.css" rel="stylesheet" type="text/css" />
</head>

<body>
<div id="page">

  <div id="menu">
		<ul>
			<li><a href="index.html">Home</a></li><img src="images/menuspace.png" />
            <li><a href="about.html">About</a></li><img src="images/menuspace.png" />
			<li><a href="tutorials.html">Tutorials</a></li><img src="images/menuspace.png" />
			<li><a href="feedback.html">Feedback</a></li><img src="images/menuspace.png" />
            <li><a href="quiz.html">Take a Quiz</a></li><img src="images/menuspace.png" />
            <img src="images/logo.png" width="284" height="38" />
		</ul>
  </div><!-- end menu -->
  <div id="white">
  
    <!-- from here******************************************************************************* -->
  

<div id="white">

    <div id="title" style="font-size:50px">QUIZ</div>
		<% int score2 = (int)session.getAttribute("score");  %>
	 <%
             if(request.getParameter("radios") != null) {
                if(request.getParameter("radios").equals("radio1")) {
				 out.println("<p class='error'>You are Wrong!</p><p class='answer'> the answer is JavaScript Functions  </p>");
                  
                }
                else if(request.getParameter("radios").equals("radio2")) {
				  out.println("<p class='correct'>You are correct!</p>");
				   score2 += 1;
					  session.setAttribute( "score", score2 );
                    
                }
                else if(request.getParameter("radios").equals("radio3")) {
                  out.println("<p class='error'>You are Wrong!</p><p class='answer'> the answer is JavaScript Functions  </p>");
                }   
            }
%>
<br/>
		<div class="formradios2">
		
		Your Score is: 
				 <%= session.getAttribute( "score" ) %>	
				 /10
		
	
  </div>
</div>
		
		
  <!-- to here******************************************************************************* -->
  
  </div>
</div><!-- end page -->
<div id="footer">
  	<a href="facebook.html"><img src="images/facebook.png" width="19" height="20" /></a>LIKE US ON FACEBOOK
  	<a href="twitter.html"><img src="images/twitter.png" width="21" height="20" /></a>FOLLOW US ON TWITTER |
	<a href="#">Privacy Policy</a>
	<p>© 2015. ALL RIGHTS RESERVED.</p>
</div><!-- end footer -->
</body>
</html>
<?php
	
	$email=$_POST['email'];
    $password=$_POST['password'];
	
	if($email=='b221210350@sakarya.edu.tr'){

    if(isset($_POST['email'])&&isset($_POST['password'])){ 
    
    
	
	

    echo "HOŞGELDİNİZ <br/>";
	
	echo "Kullanıcı Adı: ";
	echo "<b>".$email."<b/><br/>";
	
	echo "Şifre: ";
	echo  "<b>".$password."</b><br/>";
	  }
	

    }
    else{
        echo "Lütfen kullanıcı adınızı ve şifrenizi düzgün giriniz.";
    }
	
	echo "<p> <a href='giris.html'>&lt;Giriş sayfasına geri dön&gt;</a></p> ";

?>
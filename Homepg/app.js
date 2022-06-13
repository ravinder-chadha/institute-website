window.onscroll = function() {
  var institute_name = document.getElementsByClassName("institute_name");
  var full_navbar = document.getElementsByTagName("header");
  var logo = document.getElementById("logo_250");
  var topbar = document.getElementById("top_bar");
  if(window.scrollY > 100) {
    topbar.style.display = "none";
  for(var i=0;i<institute_name.length;i++){
    logo.style.width="90px";
    logo.style.height="90px";
    logo.classList.remove("top-8");
    logo.classList.add("top-0");
    if(institute_name[i].classList.contains("text-xl")){
      institute_name[i].classList.remove("text-xl");
      institute_name[i].classList.add("text-lg");
    }
    else if(institute_name[i].classList.contains("text-lg")){
    institute_name[i].classList.remove("text-lg");
    institute_name[i].classList.add("text-sm");
    }

    // if(institute_name[i].classList.contains("px-16") || institute_name[i].classList.contains("px-8")){
    // }
    // else{
    //   institute_name[i].classList.add("text-base");
    //   institute_name[i].classList.add("text-sm");
    // }
  }
  
}
else{
  logo.style.width="120px";
  logo.style.height="120px";
  topbar.style.display = "flex";
  logo.classList.remove("top-0");
  logo.classList.add("top-8");
  for(var i=0;i<institute_name.length;i++){
    console.log(institute_name[i].classList);
    if(institute_name[i].classList.contains("text-lg")){
      institute_name[i].classList.remove("text-lg");
      institute_name[i].classList.add("text-xl");
    }
    else if(institute_name[i].classList.contains("text-sm")){
    institute_name[i].classList.remove("text-sm");
    institute_name[i].classList.add("text-lg");
    }

    // if(institute_name[i].classList.contains("text-sm")){
    //   institute_name[i].classList.remove("text-sm");
    //   institute_name[i].classList.remove("text-lg");
    // }
  }
  }
}
var visited = false;
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
  }
  if(window.scrollY > 1000 && !visited){
    animateValueIntiator();
  }
}
else{
  logo.style.width="120px";
  logo.style.height="120px";
  topbar.style.display = "flex";
  logo.classList.remove("top-0");
  logo.classList.add("top-8");
  for(var i=0;i<institute_name.length;i++){
    // console.log(institute_name[i].classList);
    if(institute_name[i].classList.contains("text-lg")){
      institute_name[i].classList.remove("text-lg");
      institute_name[i].classList.add("text-xl");
    }
    else if(institute_name[i].classList.contains("text-sm")){
    institute_name[i].classList.remove("text-sm");
    institute_name[i].classList.add("text-lg");
    }
  }
  }
}
 
function openDropdown() {
  var dropdown = document.getElementById("dropdown");
    if(dropdown.classList.contains("hidden")){
      dropdown.classList.remove("hidden");
    }
    else{
      dropdown.classList.add("hidden");
    }
}

function showSearchPage(event){
  if(event.target.id=="search_form"){
    return;
  }
  var search_page = document.getElementById("search_page");
  if(search_page.classList.contains("hidden")){
    search_page.classList.remove("hidden");
    search_page.classList.add("grid");
  }
  else{
    search_page.classList.remove("grid");
    search_page.classList.add("hidden");
  }
}

function isInViewPort(element) {
  var bounding = element.getBoundingClientRect();
  if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
      console.log('In the viewport! :)');
      return true;
  } else {
      console.log('Not in the viewport. :(');
      return false;
  }
}
function animateValue(obj, start, end, duration,index) {
  if(isInViewPort(obj)){
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    if(index==0 || index==1){
      obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
    }
    else{
      obj.innerHTML = Math.floor(progress * (end - start) + start);
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
  }
}

function animateValueIntiator(){
  var rolling_nums = document.getElementById("rolling_nums").children;
  visited=true;
  for(var i=0;i<rolling_nums.length;i++){
    obj=rolling_nums[i];
    animateValue(obj,0,parseInt(obj.innerHTML),3000,i);
  }
}
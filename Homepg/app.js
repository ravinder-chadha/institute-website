var visited = false
window.onscroll = function () {
  const institute_name = document.getElementsByClassName('institute_name')
  const full_navbar = document.getElementsByTagName('header')
  const logo = document.getElementById('logo_250')
  const topbar = document.getElementById('top_bar')
  const diff_lang = document.getElementsByClassName('mySlides')
  animateValueIntiator()

  if (window.scrollY > 100) {
    topbar.style.transform = 'translateY(-50px)'
    for (let i = 0; i < diff_lang.length; i++) {
      diff_lang[i].classList.remove('mt-7')
    }
    for (let i = 0; i < institute_name.length; i++) {
      if(window.innerWidth > 620){
      logo.style.width = '90px'
      logo.style.height = '90px'
      }
      logo.classList.remove('sm:top-8')
      logo.classList.remove('sm:translate-y-0')
      logo.classList.add('sm:-translate-y-9')
      logo.classList.add('sm:top-0')
      logo.classList.remove('top-9')
      logo.classList.add('top-0','py-4')
      if (institute_name[i].classList.contains('sm:text-xl')) {
        institute_name[i].classList.remove('sm:text-xl')
        institute_name[i].classList.add('sm:text-lg')
        institute_name[i].classList.add('tracking-widest')
        console.log(institute_name)
      } else if (institute_name[i].classList.contains('sm:text-lg')) {
        institute_name[i].classList.remove('sm:text-lg')
        institute_name[i].classList.add('sm:text-sm')
        institute_name[i].classList.remove('tracking-widest')
      }
    }
  } else {
    logo.style.width = '120px'
    logo.style.height = '120px'
    topbar.style.transform = 'translateY(0)'
    for (let i = 0; i < diff_lang.length; i++) {
      diff_lang[i].classList.add('mt-7')
    }
    logo.classList.add('sm:top-8')
    logo.classList.add('sm:translate-y-0')
    logo.classList.remove('sm:-translate-y-9')
    logo.classList.remove('sm:top-0')
    logo.classList.add('top-9')
      logo.classList.remove('top-0','py-4')
    for (var i = 0; i < institute_name.length; i++) {
      // console.log(institute_name[i].classList);
      if (institute_name[i].classList.contains('sm:text-lg')) {
        institute_name[i].classList.remove('sm:text-lg')
        institute_name[i].classList.add('sm:text-xl')
        institute_name[i].classList.remove('tracking-widest')
      } else if (institute_name[i].classList.contains('sm:text-sm')) {
        institute_name[i].classList.remove('sm:text-sm')
        institute_name[i].classList.add('sm:text-lg')
        institute_name[i].classList.remove('tracking-widest')
      }
      else if (institute_name[i].classList.contains('sm:text-lg')){
        
      }
    }
  }
}

function openDropdown() {
  var dropdown = document.getElementById('dropdown')
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden')
  } else {
    dropdown.classList.add('hidden')
  }
}

function showSearchPage(event) {
  if (event.target.id == 'search_form') {
    return
  }
  var search_page = document.getElementById('search_page')
  if (search_page.classList.contains('hidden')) {
    search_page.classList.remove('hidden')
    search_page.classList.add('grid')
  } else {
    search_page.classList.remove('grid')
    search_page.classList.add('hidden')
  }
}

function isInViewPort(element) {
  var bounding = element.getBoundingClientRect()
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    console.log('In the viewport! :)')
    return true
  } else {
    console.log('Not in the viewport. :(')
    return false
  }
}

function animateValue(obj, start, end, duration) {
  if (isInViewPort(obj)) {
    visited = true
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      obj.innerText = Math.floor(progress * (end - start) + start)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }
}

function animateValueIntiator() {
  const rolling_nums = document.querySelectorAll('.number h1 span')
  if (visited) return
  for (let i = 0; i < rolling_nums.length; i++) {
    obj = rolling_nums[i]
    animateValue(obj, 0, Number(obj.innerText), 3000)
  }
}

// Parallex Effect

// const numbers = document.getElementById('numbers')

// window.addEventListener('scroll', () => {
//   let offset = scrollY
//   const viewport = window.outerHeight
//   console.log('running')
//   if (offset >= numbers.offsetTop - viewport) {
//     console.log('touched')
//     numbers.style.backgroundPositionY =
//       -(numbers.offsetTop - offset) * 0.8 + 'px'
//   }
// })

// Old Image slider

// let home = 0
// window.onload = function () {
//   showHome()
// }
// function showHome() {
//   let i
//   let homeslider = document.getElementsByClassName('homeslide')
//   for (i = 0; i < homeslider.length; i++) {
//     homeslider[i].style.display = 'none'
//   }
//   home++
//   if (home > homeslider.length) {
//     home = 1
//   }
//   homeslider[home - 1].style.display = 'block'
//   setTimeout(showHome, 3000) // Change image every 3 seconds
// }

// ////////////////////////////
// Right and left buttons on the research and news section

function slideCards(direction) {
  var container = document.getElementById('cards')
  scrollCompleted = 0
  var slideVar = setInterval(function () {
    if (direction == 'left') {
      container.scrollLeft -= 300
    } else {
      container.scrollLeft += 300
    }
    scrollCompleted += 100
    if (scrollCompleted >= 1000) {
      window.clearInterval(slideVar)
    }
  }, 2)
}

function slideResearch(direction) {
  var container = document.getElementById('slides')
  scrollComp = 0
  var slide = setInterval(function () {
    if (direction == 'left') {
      container.scrollLeft -= 300
    } else {
      container.scrollLeft += 300
    }
    scrollComp += 10
    if (scrollComp >= 100) {
      window.clearInterval(slide)
    }
  }, 2)
}

// ///////////////////////////
// Admission Section Tabs

const openCourse = (e) => {
  let tabcontent = document.getElementsByClassName('courseContent')
  let tablinks = document.getElementsByClassName('tab-link')

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('hidden')
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.add('bg-blue-100', 'hover:bg-blue-200', 'text-accent')
    tablinks[i].classList.remove('bg-accent', 'text-white')
  }
  e.classList.remove('bg-blue-100', 'hover:bg-blue-200', 'text-accent')
  e.classList.add('bg-accent', 'text-white')
  document.getElementById(e.dataset.course).classList.remove('hidden')
}

// ///////////////////////////
// Image Slider Animation::

// const mainText = document.getElementById('main-slider-text')
const mainImg = document.getElementById('main-image')
const slider = [
  ['The Place of transformation', './img/IMG_0196.JPG'],
  ['78th IN OVERALL NIRF RANKING', './img/IMG_0198.JPG'],
  ['49th IN ENGINEERING NIRF', './img/IMG_0195.JPG'],
]

let i = 0
setInterval(() => {
  // mainText.innerText = slider[i % slider.length][0]
  mainImg.style.backgroundImage = `url('${slider[i % slider.length][1]}')`
  i++
}, 2000)

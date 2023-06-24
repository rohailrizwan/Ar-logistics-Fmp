var bar = document.getElementById("bar")
var xbar = document.getElementById("xbar")
var displaynav = document.getElementById("displaynav")
xbar.style.display = "none"

function shownav() {
    bar.style.display = "none"
    xbar.style.display = "block"
    displaynav.style.display = "block"
}

function hidenav() {
    bar.style.display = "block"
    xbar.style.display = "none"
    displaynav.style.display = "none"
}

var Services=document.getElementById("Service_para")
var servicebtn=document.getElementById("servicebtn")
var servicesarea=document.getElementById("services_area")
function Readmore(){
    var services_para = "we offer tailored solutions to meet the unique needs of our clients.Our team of logistics experts leverages advanced technology and strategic partnerships to ensure timely and secure delivery of goods, optimize inventory levels, and streamline operations.We are committed to delivering exceptional customer service and driving growth for businesses through operational excellence and continuous improvement."
    Services.innerHTML +=services_para
    console.log(Services)
    servicebtn.style.display="none"
    servicesarea.classList.add("addclass")
}

var airsec=document.getElementById("airsec")
 function airfreight(){
     var air_para = "We leverage a global network of airlines and cargo carriers to ensure seamless and timely delivery of goods by air."
     air.innerHTML +=air_para
     airsec.style.display="none"
 }

 var oceansec=document.getElementById("oceansec")
 var ocean=document.getElementById("Ocean")
 function oceanfreight(){
    var ocean_text=" With our extensive network of ocean carriers and shipping lines, we provide efficient and timely shipping options to various destinations around the world."
    ocean.innerHTML +=ocean_text
    oceansec.style.display="none"
}

var roadsec=document.getElementById("roadsec")
 var road=document.getElementById("road")
 function roadfreight(){
    var road_text="Our road freight services provide seamless connectivity, allowing for the smooth movement of goods within local, regional, and national markets."
    road.innerHTML +=road_text
    roadsec.style.display="none"
}
var SH = [
  { date: 'حي السلام', location: [32.276847, 30.606981] },
  { date: 'جامع فاطمة الزهراء', location: [32.274186,30.607398] },
  { date: 'شارع ي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السي السالمستشفي', location: [32.277946,30.609672] },
  { date: 'البحري', location: [32.282272,30.610130] },
];
// map
mapboxgl.accessToken = 'pk.eyJ1IjoibWF6ZW54ZWxnYXlhciIsImEiOiJjbDV3eDEwejAwZmU3M2NwaXU4YzY5dTE0In0.ywGQXbcUzmKG1zk8e8ZYyg';
const map = new mapboxgl.Map({
 container: 'map', // container ID
 style: 'mapbox://styles/mapbox/streets-v12', // style URL
 center: [32.276847, 30.606981], // starting position [lng, lat]
 zoom: 12, // starting zoom
});

var d = document.getElementById("div");
// window.onload = function(){
//   //document.getElementById("menu_addresssAndClose").src==""
//   // document.getElementsByClassName("menu-btn")[0].addEventListener("click" , function(){
//   //     if (document.getElementById("menu_addresssAndClose").src=="imgs/menue.png") {
//   //       setTimeout(() => {
        
//   //         // 👇️ hides element (still takes up space on the page)
//   //         document.getElementsByClassName("menu-btn")[0].innerHTML="X";
//   //       }, 100);
//   //     } else {
//   //       setTimeout(() => {
        
//   //         // 👇️ hides element (still takes up space on the page)
//   //         document.getElementById("menu_addresssAndClose").src=="imgs/menue.png";
//   //       }, 100);
        
//   //     }
//   //   })
  
//   document.getElementById("PreLoader").style.display="none";
//   var cDiv = d.children;
//       for (var i = 0; i < cDiv.length; i++) {
//           cDiv[i].style.visibility= "hidden";  //do styling here
//       }
// }
//marker icon
//var im = document.createElement("img")
// window.onload = function() {
    
//     im.setAttribute('id','fa');
//     im.setAttribute('src','imgs/icon.png');
//     im.setAttribute('width','32px');
//     im.setAttribute('height','32px');
//     im.style.cursor = "pointer";
    
//     document.body.appendChild(im);
// };

//marker to map
var zoom = map.getZoom(); //zoom level

//var d = document.getElementById("div");

var address = document.getElementById("address");
var x = document.getElementById("XBTN");
SH.forEach(({date,location})=>{
  var im = document.createElement("img")
    im.setAttribute('id','fa');
    im.setAttribute('src','imgs/icon.png');
    im.setAttribute('width','32px');
    im.setAttribute('height','32px');
    im.style.cursor = "pointer";
    
    var m = new mapboxgl.Marker(im).setLngLat(location).addTo(map)._element.id = location;
    //m._element.id = location;
    map.on('zoom', () => {
        // document.getElementById("fa").width = Math.round(map.getZoom()*2);
        // document.getElementById("fa").height = Math.round(map.getZoom()*2);
        if (map.getZoom() >= 12) {
          
          im.style.display = "block";
      } else {
        im.style.display = "none";
      }
        //console.log(map.getZoom());
    });
    
    im.addEventListener("click" , function(){
      // map.on('click', function(e) {
      //   var coordinates = e.lngLat;
      for (let i = 0; i < SH.length; i++) {
        address.innerHTML=date
      }
          
      // });
      
      // if (d.style.display === "none") {
      //   d.style.display = "block";
      // } else {
      //   d.style.display = "none";
      // }

      if (d.style.width="0") {
        d.style.width="570px";
      } else {
        d.style.width="0px";
      }
      //x.style.display = "block";
      document.getElementById("div").style.transition = "all 0.5s";
      document.getElementById("div").style.width="570px";
      document.getElementById("div").style.height="500px";
      //address.display="block";
      var cDiv = d.children;
      for (var i = 0; i < cDiv.length; i++) {
      
          cDiv[i].style.visibility= "visible";  //do styling here
      }

    })

})
//new mapboxgl.Marker().setLngLat([32.276847, 30.606981]).addTo(map);
// new mapboxgl.Marker().setLngLat([32.274186,30.607398]).addTo(map);
// new mapboxgl.Marker().setLngLat([32.277946,30.609672]).addTo(map);
// new mapboxgl.Marker(im).setLngLat(SH[0].location).addTo(map);
// new mapboxgl.Marker(im).setLngLat(SH[1].location).addTo(map);

// new mapboxgl.Marker(im).setLngLat(SH[2].location).addTo(map);

// Set an event listener
// map.on('click', (e) => {
//     new mapboxgl.Marker(im)
// .setLngLat([32.276847, 30.606981])
// .addTo(map);
// });

// hide and show the icon with zooming
// var zoom = map.getZoom(); //zoom level
// map.on('zoom', () => {
//     // document.getElementById("fa").width = Math.round(map.getZoom()*2);
//     // document.getElementById("fa").height = Math.round(map.getZoom()*2);
//     if (map.getZoom() >= 12) {
      
//       document.getElementById("fa").style.display = "block";
//   } else {
//     document.getElementById("fa").style.display = "none";
//   }
//     console.log(map.getZoom());
// });

//marker click
// document.getElementsByClassName("fa").addEventListener("click" , function(){
//     var x = document.getElementsByClassName("div");
//     if (d.style.display === "none") {
//       d.style.display = "block";
//     } else {
//       d.style.display = "none";
//     }
//   })

  //hide and show marker in menu clicking
  //document.getElementsByClassName("menu-btn")[0].addEventListener("click" , function(){
  //   if (im.style.display === "none") {
  //     setTimeout(() => {
      
  //       // 👇️ hides element (still takes up space on the page)
  //       im.style.display = "block";
  //     }, 100);
  //   } else {
  //     setTimeout(() => {
      
  //       // 👇️ hides element (still takes up space on the page)
  //       im.style.display = "none";
  //     }, 100);
      
  //   }
  // })
  
// map.on('boxzoomstart', (e) => {
// console.log('event type:', e.type);
// // event type: boxzoomstart
// });
// document.getElementById('bu').addEventListener('click' , myFunction)

// function myFunction() {
//     console.log(map.getZoom());

// }



// CLOSE FUNCTION
function Xbtn(elm) {
 //document.getElementById(elm.addressentNode.id).style.display="none"
 //x.style.display = "none";
 d.style.height="0px";
 d.style.width="0px";
 
  console.log("ali");
  var cDiv = d.children;
      for (var i = 0; i < cDiv.length; i++) {
          cDiv[i].style.visibility= "hidden";  //do styling here
      }
 
}
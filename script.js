// cashing the dom...
var main=document.querySelector('main');
var data=document.querySelectorAll('div');
var input=document.querySelector('input');
var condition=document.querySelector('.cond span'); 
var temp=document.querySelector('.temp span');
var hmdt=document.querySelector('.hmdt span');
var region=document.querySelector('.region span');
var TZ=document.querySelector('.timezone span');
var lat=document.querySelector('#lat');
var lon=document.querySelector('#lon');
var icon=document.querySelector('.cond img');




input.addEventListener('keydown',(e)=>{
  if(e.key=='Enter'){
    dataFetch(input.value);
    reset();
    dataSlide();

  }
})


// FETCHING DATA......
let dataFetch=(city)=>{

    fetch(`http://api.weatherapi.com/v1/current.json?key=f17a28237a4b4442801110833242701&q=${city}&aqi=no`)
   .then(response=>response.json())
   .then(data=>{
   

    condition.innerHTML=data.current.condition.text;
    temp.innerHTML=data.current.temp_c;
    hmdt.innerHTML=data.current.humidity;
    region.innerHTML=data.location.region;
    TZ.innerHTML=data.location.tz_id;
    lat.innerHTML=data.location.lat;
    lon.innerHTML=data.location.lon;
    icon.setAttribute('src',data.current.condition.icon)


    })
  .catch(error=>console.error(error))
}



// reset data divs to rest position...
let reset=()=>{
  data.forEach((div)=>{
    div.style.transform='translateX(-103%)'
  })
}


//  Data slide functionality..
let dataSlide=()=>{
    data.forEach(function (div,index){
        setTimeout(()=>{
            div.style.transform='translateX(0%)';
        },(index+1)*1000)
    })
}


const apiKey ="62196f24555d497aa89212655241212";
const api =" https://api.weatherapi.com/v1/forecast.json?key=62196f24555d497aa89212655241212&q=cairo&days=3";

async function getTodoweather() {
    const res = await fetch(" https://api.weatherapi.com/v1/forecast.json?key=62196f24555d497aa89212655241212&q=cairo&days=3");
    const data =await res .json();


    displayweather(data);
};


getTodoweather();




const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();

const day = date.getDay(); 
const daate = date.getDate(); 
const month = date.getMonth(); 

const nextday = day + 1;
let dayAfterNextDay = nextday + 1;

if (nextday >= 7) {
  nextday = 0; 
}
if (dayAfterNextDay >= 7) {
  dayAfterNextDay = 0; 
}


console.log(`Today: ${days[day]}, ${daate} ${months[month]}`);
console.log(`Tomorrow: ${days[nextday]}`);
console.log(`AfterTomorrow: ${days[dayAfterNextDay]}`);







function displayweather(list){

    let blackBox =`<div class="col-xl-4  px-0">
                        <div class="card border-0 " style="background-color: #323544;" >
                          <div class="header d-flex justify-content-between  ps-1 " style="background-color: #2D303D; color: rgb(191, 193, 200);">
                            <h2>${days[day]}</h2>
                            <h3> ${daate} ${months[month]}</h3>
                          </div>
        
        
        
                          <div class="card p-3 h-100" style="background-color: #323544;  color: rgb(191, 193, 200);">
                            <h4 class="name">${list.location.name}</h4>
                            <div class=" justify-content-between align-items-center">
                              <h3 class="cardtext degree " style="color: white;">${list.forecast.forecastday[0].day.avgtemp_c}<sup class="position-relative">o</sup>C</h3>
                              <img src="${list.forecast.forecastday[0].day.condition.icon}" width="90" class="img-fluid" alt="">
                            </div>
                            <h5 class="cloudy mt-3" style="color: #009ad8;">${list.forecast.forecastday[0].day.condition.text}</h5>
          
                            <div class="imgs d-flex gap-2 justify-content-between w-50 pt-4 pb-2">
                              <div class="one d-flex align-items-center gap-2">
                        <img class="po" width="20px" src="images/icon-umberella.png" alt="cloud">
                                
                                <p class="mb-0">20%</p>
                              </div>
          
                              <div class="two d-flex align-items-center gap-2">
                            <img width="20px" src="images/icon-wind.png" alt="cloud">
                                <p class="mb-0">18km/h</p>
                              </div>
          
                              <div class="three d-flex align-items-center gap-2">
                             <img width="20px" src="images/icon-compass.png" alt="cloud">
                                <p class="mb-0" style="color: rgb(191, 193, 200);">East</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
          
          
          <!-- ====================================== -->
          
          
          <div class="col-xl-4  px-0">
                        <div class="card border-0 text-center h-100 "style="background-color: #262936;">
                          <div class="header rounded-2" style="background-color: #222530; color: rgb(191, 193, 200);">
                            <h2>${days[nextday]}</h2>
                          </div>
                          <div class="card " style="background-color: #262936;">
                            <div class="mt-4">
                              <img src="${list.forecast.forecastday[1].day.condition.icon}" width="40" class="img-fluid" alt="cloud">
                            </div>
          

                          <div class=" mt-4 text-center" >
                            <h3 class="textu  maxmimum  text-white" >${list.forecast.forecastday[1].day.maxtemp_c}<sup class="position-relative">o</sup>C</h3>
                            <h3 class="card-text  minmum " style="color: rgb(191, 193, 200);">${list.forecast.forecastday[1].day.mintemp_f }<sup class="position-relative">o</sup></h3>
                            <h5 class="cloudy mt-3" style="color: #009ad8;">${list.forecast.forecastday[1].day.condition.text}</h5>
                          </div>
          
                          </div>
                        </div>
                      </div>
          







          
          <!-- ========================================== -->
          
           <div class="col-xl-4 px-0">
                        <div class="card  border-0  text-center h-100"style="background-color: #323544;">
                          <div class="header  rounded-2 " style="background-color: #2D303D; color: white;">
                            <h2>${days[dayAfterNextDay]}</h2>
                          </div>
                          <div class="card "  style="background-color: #323544;  color: white;">
                            <div class="mt-4">
                              <img src="${list.forecast.forecastday[1].day.condition.icon}" width="40" class="img-fluid" alt="cloud">
                            </div>
                          

                          <div class=" mt-4">
                            <h3 class="textu  maxmimum">${list.forecast.forecastday[2].day.maxtemp_c}<sup class="position-relative">o</sup>C</h3>
                            <h3 class="card-text  minmum " style="color: rgb(191, 193, 200);">${list.forecast.forecastday[2].day.mintemp_f}<sup class="position-relative">o</sup></h3>
                            <h5 class="cloudy mt-3" style="color: #009ad8;">${list.forecast.forecastday[2].day.condition.text}</h5>
                          </div>
          
                          </div>
                        </div>
                      </div>`
                      document.getElementById("moon").innerHTML=blackBox;
}






// const appii = `https://api.weatherapi.com/v1/forecast.json?key=1353d466fd5b4543b21133209240812&q=${code}&days=3`;



async function search(code){
    const req = await fetch(
       `https://api.weatherapi.com/v1/forecast.json?key=1353d466fd5b4543b21133209240812&q=${code}&days=3`

        // `http://api.weatherapi.com/v1/search.json?key=1353d466fd5b4543b21133209240812&q=${code}&days=3`
       
      );
      console.log(req)
      if (req.ok==true){

        const data = await req.json();
      
        displayweather(data);
        
      }
      else{
        
      }
      
}

const listcity =document.getElementById("search");

listcity.addEventListener("keypress",function(){
    search(listcity.value)
})
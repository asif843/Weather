$("weather").ready(function(){
    
        
           $.ajax({
              
               url:"http://api.openweathermap.org/data/2.5/forecast?q=Sydney&units=metric&APPID=674ad835e03737b8eb4194b6dd27cf3b",
               type:"GET",
               dataType:"jsonp",
               
               success: function(data){
                    
                   document.getElementById("show").style.visibility = "visible";
                   var i = 0;
                   for(i=0;i<data.list.length;i+=8)
                       {
                           var img = data.list[i].weather[0].icon;
                           
                           $('#td0').append(data.list[i].dt_txt.substr(0,10)+"<br>");
                           $('#td1').append(data.list[i].weather[0].main+"<br>");
                           $('#td2').append("<img src='http://openweathermap.org/img/w/"+img+".png' width='30px' height='30px'/> "+data.list[i].weather[0].description+"<br>");
                           $('#td3').append(data.list[i].main.temp+"&deg;C<br>");
                           $('#td4').append(data.list[i].wind.speed+" m/s<br>");
                           $('#td5').append(data.list[i].main.humidity+"%<br>");
                           
                            
                       }
                       
               }
                        
                             
           });
  
});

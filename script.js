
function date(){
	var str = document.getElementById('text').value;
	console.log(str);
	var endDate = new Date(str); //(2017,0,27,11,15,0);
	var startDate = new Date;
  var a = Date.parse(endDate);
  console.log(a);
	var t = Date.parse(endDate) - Date.parse(new Date());
  console.log(t)
  var Sec = Math.floor( (t/1000) % 60 );
  var Minut = Math.floor( (t/1000/60) % 60 );
  var Hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );

function secOut(){

  if(Sec==0){
	if(Minut==0){
	 if (Hours==0){
	   if(days==0){
			       showMessage(timerId)
		      }
		  else{
		  	days--;
		  	Hours= 24;
		  	Minut = 59;
		  	Sec =59;

		  }
		}
		else{
			Hours--;
			Minut = 59;
			Sec = 59;
		}
	}
		else{
			Minut--;
			Sec = 59;
		}
	}
		else{
			Sec--;
		}

		getStartTime(days,Hours,Minut,Sec);
	}
	timerId = setInterval(secOut,1000);
}


function showMessage(timerId){
	alert('Finish!')
	clearInterval(timerId);
}
function getStartTime(d,h,m,s){
	var start = document.getElementsByTagName("DIV")[1].innerHTML=d+':'+h+':'+m+':'+s;
}

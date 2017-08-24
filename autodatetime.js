function cautodatetime(timestamp,localtz){
	
	try{
	timestamp = timestamp.toString();
	localtz = parseFloat(localtz);
	if(timestamp.match(/^[0-9]+$/) != null){
	var d = new Date();
	var n = -(d.getTimezoneOffset())/60;
	var time;
	var timezonedifferences=n-localtz;
	timezonedifferences=timezonedifferences*60*60*1000;	
	var date = new Date((timestamp*1000)+timezonedifferences);			
	var rdate = date.toISOString().substring(0, 10);
	rdate = rdate.split("-");
		
	var rtime =date.toISOString().substring(10, 19).replace('T', ' ');
	
	rtime = rtime.split(":");	
	if(rtime[0]>12){	
		var ampm="PM";
		
	}
	else{	
		var ampm="AM";
		
	}
	try{
		return {
        day: rdate[2],
        month: rdate[1],
		year: rdate[0],
		hour: rtime[0],
		minute: rtime[1],
		second: rtime[2],
		ampm: ampm
    };
		
	}catch(err){console.log(err);}
}
	
	}catch(err){console.log(err+" double quote required");}
	}
	
function sautodatetime(timestamp,localtz,id,statement){
	
	try{
	timestamp = timestamp.toString();
	localtz = parseFloat(localtz);
	if(timestamp.match(/^[0-9]+$/) != null){
	var d = new Date();
	var n = -(d.getTimezoneOffset())/60;
	var time;
	var timezonedifferences=n-localtz;
	timezonedifferences=timezonedifferences*60*60*1000;	
	var date = new Date((timestamp*1000)+timezonedifferences);			
	var rdate = date.toISOString().substring(0, 10);
	rdate = rdate.split("-");
		
	var rtime =date.toISOString().substring(10, 19).replace('T', ' ');
	
	rtime = rtime.split(":");	
	if(rtime[0]>12){	
		var ampm="PM";
		var hf=rtime[0]-12;
	}
	else{	
		var ampm="AM";
		var hf=rtime[0]-12;
	}
	try{
		if(statement=="date"){		
		$("#"+id).html(rdate[2]+"-"+rdate[1]+"-"+rdate[0]);}
		else if(statement=="time"){		
		$("#"+id).html(hf+":"+rtime[1]+" "+ampm);}
		else if(statement=="dt"){		
		$("#"+id).html(rdate[2]+"-"+rdate[1]+"-"+rdate[0]+" "+hf+":"+rtime[1]+" "+ampm);}
		else{
			$("#"+id).html(rdate[2]+"-"+rdate[1]+"-"+rdate[0]+" "+hf+":"+rtime[1]+" "+ampm);
		}
		
	}catch(err){console.log(err);}
}
	
	}catch(err){console.log(err+" double quote required");}
	}

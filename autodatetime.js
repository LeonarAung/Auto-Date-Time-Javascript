function autodatetime(timestamp,localtimezone){
	
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
	var rdate1=rdate[2]+"-"+rdate[1]+"-"+rdate[0];
	var rdate2=rdate[2]+"/"+rdate[1]+"/"+rdate[0];
		
	var rtime =date.toISOString().substring(10, 19).replace('T', ' ');
	alert(rtime);
	rtime = rtime.split(":");	
	if(rtime[0]>12){
		time=rtime[0]-12+":"+rtime[1]+" PM";
		var ampm="PM";
	}
	else{
		rtime[0]=parseInt(rtime[0], 10);
		time=rtime[0]+":"+rtime[1]+" AM";
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

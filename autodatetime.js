function autodatetime(timestamp,localtz){
	
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
	rdate = rdate.split("-");rdate=rdate[2]+"-"+rdate[1]+"-"+rdate[0];
	var rtime =date.toISOString().substring(10, 16).replace('T', ' ');
	rtime = rtime.split(":");	
	if(rtime[0]>12){
		time=rtime[0]-12+":"+rtime[1]+" PM";
	}
	else{
		rtime[0]=parseInt(rtime[0], 10);
		time=rtime[0]+":"+rtime[1]+" AM";
	}
	try{
	alert(rdate+" "+time)	
	}catch(err){console.log(err);}
}}catch(err){console.log(err+" double quote required");}
	}

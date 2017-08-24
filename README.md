# Auto DateTime Javascript 

It is a client script that can convert a static date/time/timestamp to the appropriate local date/time of every client. If you are trying to share a date/time that can vary according to users' timezone, it can help you.

### Set up

Download autodatetime.js and upload to your hosting folders and include external autodatetime.js.

<script src="js/autodatetime.js"></script> // to uploaded location

## Sample
You can check output result at http://www.autodatetime.com/

## Getting start

After initialized autodatetime.js, you need to generate the timestamp of the static date/time unit that you want to globalize.
if you want to convert "24-08-2017 3:00 PM" to auto date/time, you need to get that timestamp first. You can try with php or other online tools.

There is 2 types of formats available, standard and custom. You can get normal date or time converted by Standard method. But if you want to customize in detail even to seconds and each individuals, You can use custom method to grab each of day,month,year,hour,minutes,seconds and am/pm.

### Coding

1 - For standard (JQuery Required)

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/LeonarAung/Auto-Date-Time-Javascript/21cc7587/autodatetime.js"></script>
<div id="converteddate"> </div><div id="convertedtime"> </div><div id="converteddatetime"> </div>
<script> 
sautodatetime(1503585000,6.5,"converteddate","date"); //for Date
sautodatetime(1503585000,6.5,"convertedtime","time"); //for Time
sautodatetime(1503585000,6.5,"converteddatetime","dt"); //for both
</script>
				
```

2 - For Custom

```
<script src="https://cdn.rawgit.com/LeonarAung/Auto-Date-Time-Javascript/97138aec/autodatetime.js"></script>
<div id="SomeID"> </div><br/>
<script> var adt = cautodatetime(1503585000,6.5);
document.getElementById("SomeID").innerHTML=adt.day+"-"+adt.month+"-"+adt.year+" "+adt.hour+":"+adt.minute+":"+adt.second+" "+adt.ampm; 
</script>
				
```

### Explaination

in Standard method, 
```
sautodatetime(parameter1,parameter2,"parameter3","parameter4");

parameter1=timestamp(int)
parameter2=your local timezone(float) 
parameter3=id of element(String)
parameter4=static format(String)
```

in Custom method, 
```
cautodatetime(parameter1,parameter2,"parameter3","parameter4");

parameter1=timestamp(int)
parameter2=your local timezone(float) 
parameter3=id of element(String)
parameter4=static format(String)
```
## Deployment

Add additional notes about how to deploy this on a live system

## Built With

Javascript /(Jquery)

## Authors

* **[Leonar Aung](https://github.com/LeonarAung)**


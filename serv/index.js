var API_KEY = '98522788c6d5086e3ced7e5a3d0fee10-3e51f8d2-190abe45';
var DOMAIN  = 'sandbox308f7d6161db4f88a27890bb64600058.mailgun.org';
var wAPPID  = '6a6c8dd39231762264f84188e476e052';


//Dependente - Prompt, Mailgun si OpenWeatherMap
//Setam si API keys
//Prompt este folosit atunci cand introduci date de la tastatura
var prompt  = require('prompt');
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});
var weather = require('openweather-apis');
weather.setAPPID(wAPPID);

//Incepem cu prompt pentru a prelua orasul si adresa de email.
prompt.start();
prompt.get(['city', 'email'], function (err, result) {
	console.log('City: ' + result.city);    
    console.log('Email: ' + result.email);
    var city     = result.city;
    var emailTo  = result.email;   
    //Console.log scrie in consola
    //Setam orasul in OpenWeatherMap
    weather.setCity(city);

    //Preluam temperatura pentru orasul respectiv din OpenWeatherMap
    weather.getTemperature(function(err, temp){        
    	//Adaugam temperatura intr-un string ce va fi trimis pe mail
        var mailBody = temp + ' Grade celsius in ' + city;      		
        console.log('Temperature: ' + temp);    
        //Setam datele pentru Mailgun (trimitere email)
		const data = {
  			from: 'Informatii vreme <weather@info.com>',
  			to: emailTo,
  			subject: 'Temperatura actuala in orasul ' + city,
  			text: mailBody
		};
		//Apelam Mailgun pentru a trimite emailul
		mailgun.messages().send(data, (error, body) => {
			console.log(body);
		});
    });
});

    
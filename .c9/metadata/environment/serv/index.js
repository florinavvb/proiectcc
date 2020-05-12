{"filter":false,"title":"index.js","tooltip":"/serv/index.js","undoManager":{"mark":35,"position":35,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":67},"action":"insert","lines":["var API_KEY = '60261f249af6f1aa21b2a1d28d44a499-6140bac2-244dee81';"],"id":1}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":65},"action":"remove","lines":["60261f249af6f1aa21b2a1d28d44a499-6140bac2-244dee81"],"id":2},{"start":{"row":0,"column":15},"end":{"row":0,"column":65},"action":"insert","lines":["98522788c6d5086e3ced7e5a3d0fee10-3e51f8d2-190abe45"]}],[{"start":{"row":0,"column":67},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":0,"column":67},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":49},"action":"insert","lines":["var DOMAIN  = 'sandbox752625a4e3bb4de4936a006b55045f35.mailgun.org';","var wAPPID  = 'cb04cf7a3416411fa03dbe72eaedc321';"],"id":5}],[{"start":{"row":1,"column":15},"end":{"row":1,"column":66},"action":"remove","lines":["sandbox752625a4e3bb4de4936a006b55045f35.mailgun.org"],"id":6},{"start":{"row":1,"column":15},"end":{"row":1,"column":66},"action":"insert","lines":["sandbox308f7d6161db4f88a27890bb64600058.mailgun.org"]}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":47},"action":"remove","lines":["cb04cf7a3416411fa03dbe72eaedc321"],"id":7},{"start":{"row":2,"column":15},"end":{"row":2,"column":47},"action":"insert","lines":["6a6c8dd39231762264f84188e476e052"]}],[{"start":{"row":3,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["var prompt  = require('prompt');","var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});","var weather = require('openweather-apis');","weather.setAPPID(wAPPID);",""],"id":8}],[{"start":{"row":2,"column":49},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":9}],[{"start":{"row":8,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["prompt.start();","prompt.get(['city', 'email'], function (err, result) {","    console.log('City: ' + result.city);    ","    console.log('Email: ' + result.email);","    var city     = result.city;","    var emailTo  = result.email;   ",""],"id":10}],[{"start":{"row":6,"column":42},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":26},"action":"insert","lines":["    weather.setCity(city);"],"id":12}],[{"start":{"row":15,"column":26},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":[" "],"id":14}],[{"start":{"row":15,"column":25},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":15},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":16,"column":3},"end":{"row":33,"column":0},"action":"insert","lines":["weather.getTemperature(function(err, temp){        ","    \t//Adaugam temperatura intr-un string ce va fi trimis pe mail","        var mailBody = temp + ' Celsius grades in ' + city;      \t\t","        console.log('Temperature: ' + temp);    ","        //Setam datele pentru Mailgun (trimitere email)","\t\tconst data = {","  \t\t\tfrom: 'Your Weather Info <weather@info.com>',","  \t\t\tto: emailTo,","  \t\t\tsubject: 'Weather forecast in ' + city,","  \t\t\ttext: mailBody","\t\t};","\t\t//Apelam Mailgun pentru a trimite emailul","\t\tmailgun.messages().send(data, (error, body) => {","\t\t\tconsole.log(body);","\t\t});","    });","});",""],"id":16}],[{"start":{"row":4,"column":0},"end":{"row":32,"column":3},"action":"remove","lines":["var prompt  = require('prompt');","var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});","var weather = require('openweather-apis');","","weather.setAPPID(wAPPID);","prompt.start();","prompt.get(['city', 'email'], function (err, result) {","    console.log('City: ' + result.city);    ","    console.log('Email: ' + result.email);","    var city     = result.city;","    var emailTo  = result.email;   ","   weather.setCity(city);","   weather.getTemperature(function(err, temp){        ","    \t//Adaugam temperatura intr-un string ce va fi trimis pe mail","        var mailBody = temp + ' Celsius grades in ' + city;      \t\t","        console.log('Temperature: ' + temp);    ","        //Setam datele pentru Mailgun (trimitere email)","\t\tconst data = {","  \t\t\tfrom: 'Your Weather Info <weather@info.com>',","  \t\t\tto: emailTo,","  \t\t\tsubject: 'Weather forecast in ' + city,","  \t\t\ttext: mailBody","\t\t};","\t\t//Apelam Mailgun pentru a trimite emailul","\t\tmailgun.messages().send(data, (error, body) => {","\t\t\tconsole.log(body);","\t\t});","    });","});"],"id":17},{"start":{"row":4,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["","//Dependente - Prompt, Mailgun si OpenWeatherMap","//Setam si API keys","//Prompt este folosit atunci cand introduci date de la tastatura","var prompt  = require('prompt');","var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});","var weather = require('openweather-apis');","weather.setAPPID(wAPPID);","","//Incepem cu prompt pentru a prelua orasul si adresa de email.","prompt.start();","prompt.get(['city', 'email'], function (err, result) {","\tconsole.log('City: ' + result.city);    ","    console.log('Email: ' + result.email);","    var city     = result.city;","    var emailTo  = result.email;   ","    //Console.log scrie in consola","    //Setam orasul in OpenWeatherMap","    weather.setCity(city);","","    //Preluam temperatura pentru orasul respectiv din OpenWeatherMap","    weather.getTemperature(function(err, temp){        ","    \t//Adaugam temperatura intr-un string ce va fi trimis pe mail","        var mailBody = temp + ' Celsius grades in ' + city;      \t\t","        console.log('Temperature: ' + temp);    ","        //Setam datele pentru Mailgun (trimitere email)","\t\tconst data = {","  \t\t\tfrom: 'Your Weather Info <weather@info.com>',","  \t\t\tto: emailTo,","  \t\t\tsubject: 'Weather forecast in ' + city,","  \t\t\ttext: mailBody","\t\t};","\t\t//Apelam Mailgun pentru a trimite emailul","\t\tmailgun.messages().send(data, (error, body) => {","\t\t\tconsole.log(body);","\t\t});","    });","});"]}],[{"start":{"row":31,"column":12},"end":{"row":31,"column":29},"action":"remove","lines":["Your Weather Info"],"id":18},{"start":{"row":31,"column":12},"end":{"row":31,"column":13},"action":"insert","lines":["I"]},{"start":{"row":31,"column":13},"end":{"row":31,"column":14},"action":"insert","lines":["n"]},{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["f"]},{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["o"]},{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["r"]},{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["m"]},{"start":{"row":31,"column":18},"end":{"row":31,"column":19},"action":"insert","lines":["a"]},{"start":{"row":31,"column":19},"end":{"row":31,"column":20},"action":"insert","lines":["t"]},{"start":{"row":31,"column":20},"end":{"row":31,"column":21},"action":"insert","lines":["i"]},{"start":{"row":31,"column":21},"end":{"row":31,"column":22},"action":"insert","lines":["i"]}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":[" "],"id":19}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"remove","lines":[" "],"id":20}],[{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"insert","lines":["l"],"id":21},{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":31,"column":24},"end":{"row":31,"column":25},"action":"insert","lines":[" "],"id":22},{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"insert","lines":["t"]},{"start":{"row":31,"column":26},"end":{"row":31,"column":27},"action":"insert","lines":["a"]},{"start":{"row":31,"column":27},"end":{"row":31,"column":28},"action":"insert","lines":["l"]},{"start":{"row":31,"column":28},"end":{"row":31,"column":29},"action":"insert","lines":["e"]}],[{"start":{"row":31,"column":29},"end":{"row":31,"column":30},"action":"insert","lines":[" "],"id":23},{"start":{"row":31,"column":30},"end":{"row":31,"column":31},"action":"insert","lines":["d"]},{"start":{"row":31,"column":31},"end":{"row":31,"column":32},"action":"insert","lines":["e"]},{"start":{"row":31,"column":32},"end":{"row":31,"column":33},"action":"insert","lines":["s"]},{"start":{"row":31,"column":33},"end":{"row":31,"column":34},"action":"insert","lines":["p"]},{"start":{"row":31,"column":34},"end":{"row":31,"column":35},"action":"insert","lines":["r"]},{"start":{"row":31,"column":35},"end":{"row":31,"column":36},"action":"insert","lines":["e"]}],[{"start":{"row":31,"column":36},"end":{"row":31,"column":37},"action":"insert","lines":[" "],"id":24},{"start":{"row":31,"column":37},"end":{"row":31,"column":38},"action":"insert","lines":["t"]},{"start":{"row":31,"column":38},"end":{"row":31,"column":39},"action":"insert","lines":["e"]},{"start":{"row":31,"column":39},"end":{"row":31,"column":40},"action":"insert","lines":["m"]},{"start":{"row":31,"column":40},"end":{"row":31,"column":41},"action":"insert","lines":["p"]},{"start":{"row":31,"column":41},"end":{"row":31,"column":42},"action":"insert","lines":["a"]},{"start":{"row":31,"column":42},"end":{"row":31,"column":43},"action":"insert","lines":["r"]},{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":["a"]},{"start":{"row":31,"column":44},"end":{"row":31,"column":45},"action":"insert","lines":["t"]},{"start":{"row":31,"column":45},"end":{"row":31,"column":46},"action":"insert","lines":["u"]},{"start":{"row":31,"column":46},"end":{"row":31,"column":47},"action":"insert","lines":["r"]}],[{"start":{"row":31,"column":47},"end":{"row":31,"column":48},"action":"insert","lines":["a"],"id":25}],[{"start":{"row":33,"column":15},"end":{"row":33,"column":34},"action":"remove","lines":["Weather forecast in"],"id":26},{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["T"]}],[{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"remove","lines":["T"],"id":27}],[{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["T"],"id":28},{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["e"]},{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["m"]},{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["p"]},{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["e"]},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["r"]},{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["a"]},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["t"]},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["u"]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["r"]},{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"insert","lines":["a"]}],[{"start":{"row":33,"column":26},"end":{"row":33,"column":27},"action":"insert","lines":[" "],"id":29},{"start":{"row":33,"column":27},"end":{"row":33,"column":28},"action":"insert","lines":["a"]},{"start":{"row":33,"column":28},"end":{"row":33,"column":29},"action":"insert","lines":["c"]},{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["t"]},{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"insert","lines":["u"]},{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"insert","lines":["a"]},{"start":{"row":33,"column":32},"end":{"row":33,"column":33},"action":"insert","lines":["l"]},{"start":{"row":33,"column":33},"end":{"row":33,"column":34},"action":"insert","lines":["a"]}],[{"start":{"row":33,"column":34},"end":{"row":33,"column":35},"action":"insert","lines":[" "],"id":30},{"start":{"row":33,"column":35},"end":{"row":33,"column":36},"action":"insert","lines":["i"]},{"start":{"row":33,"column":36},"end":{"row":33,"column":37},"action":"insert","lines":["n"]}],[{"start":{"row":33,"column":37},"end":{"row":33,"column":38},"action":"insert","lines":[" "],"id":31},{"start":{"row":33,"column":38},"end":{"row":33,"column":39},"action":"insert","lines":["o"]},{"start":{"row":33,"column":39},"end":{"row":33,"column":40},"action":"insert","lines":["r"]},{"start":{"row":33,"column":40},"end":{"row":33,"column":41},"action":"insert","lines":["a"]},{"start":{"row":33,"column":41},"end":{"row":33,"column":42},"action":"insert","lines":["s"]},{"start":{"row":33,"column":42},"end":{"row":33,"column":43},"action":"insert","lines":["u"]},{"start":{"row":33,"column":43},"end":{"row":33,"column":44},"action":"insert","lines":["l"]}],[{"start":{"row":31,"column":25},"end":{"row":31,"column":48},"action":"remove","lines":["tale despre temparatura"],"id":32},{"start":{"row":31,"column":25},"end":{"row":31,"column":26},"action":"insert","lines":["v"]},{"start":{"row":31,"column":26},"end":{"row":31,"column":27},"action":"insert","lines":["r"]},{"start":{"row":31,"column":27},"end":{"row":31,"column":28},"action":"insert","lines":["e"]},{"start":{"row":31,"column":28},"end":{"row":31,"column":29},"action":"insert","lines":["m"]},{"start":{"row":31,"column":29},"end":{"row":31,"column":30},"action":"insert","lines":["e"]}],[{"start":{"row":27,"column":32},"end":{"row":27,"column":49},"action":"remove","lines":["Celsius grades in"],"id":33},{"start":{"row":27,"column":32},"end":{"row":27,"column":33},"action":"insert","lines":["G"]},{"start":{"row":27,"column":33},"end":{"row":27,"column":34},"action":"insert","lines":["r"]},{"start":{"row":27,"column":34},"end":{"row":27,"column":35},"action":"insert","lines":["a"]},{"start":{"row":27,"column":35},"end":{"row":27,"column":36},"action":"insert","lines":["d"]},{"start":{"row":27,"column":36},"end":{"row":27,"column":37},"action":"insert","lines":["e"]}],[{"start":{"row":27,"column":37},"end":{"row":27,"column":38},"action":"insert","lines":[" "],"id":34},{"start":{"row":27,"column":38},"end":{"row":27,"column":39},"action":"insert","lines":["c"]},{"start":{"row":27,"column":39},"end":{"row":27,"column":40},"action":"insert","lines":["e"]},{"start":{"row":27,"column":40},"end":{"row":27,"column":41},"action":"insert","lines":["l"]},{"start":{"row":27,"column":41},"end":{"row":27,"column":42},"action":"insert","lines":["s"]},{"start":{"row":27,"column":42},"end":{"row":27,"column":43},"action":"insert","lines":["i"]},{"start":{"row":27,"column":43},"end":{"row":27,"column":44},"action":"insert","lines":["u"]},{"start":{"row":27,"column":44},"end":{"row":27,"column":45},"action":"insert","lines":["s"]}],[{"start":{"row":27,"column":45},"end":{"row":27,"column":46},"action":"insert","lines":[" "],"id":35},{"start":{"row":27,"column":46},"end":{"row":27,"column":47},"action":"insert","lines":["i"]},{"start":{"row":27,"column":47},"end":{"row":27,"column":48},"action":"insert","lines":["n"]}],[{"start":{"row":31,"column":23},"end":{"row":31,"column":24},"action":"remove","lines":["e"],"id":36},{"start":{"row":31,"column":22},"end":{"row":31,"column":23},"action":"remove","lines":["l"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":25},"end":{"row":11,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1589190362649,"hash":"4a7c42cd22b6bc2d687303aeab1f7b768487c97e"}
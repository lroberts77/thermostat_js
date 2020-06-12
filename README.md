# Thermostat
### Technologies: Javascript, Jasmine, HTML, CSS, APIs, JSON

## Index
* [Project Direction](#Project)
* [Installation](#Install)
* [Rspec Tests](#Rspec)
* [Usage](#Usage)


## Thermostat Specification

Thermostat starts at 20 degrees
You can increase the temperature with an up function
You can decrease the temperature with a down function
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default
You can reset the temperature to 20 with a reset function
You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)

## <a name="Project">Project Direction</a>
I used TDD to cover all the points in the specification and with all the tests passing I knew the code was working. Next I structured all the basic HTML to output all the necessary points from the specification and then I created interface.js which made the thermostat come to life. This connected all the logic to event handlers for the HTML buttons, inputs and submits. After everything was working correctly I began to experiment with styling and created something clean and simple.


## <a name="Install">Installation</a>
* To clone the repo
```shell
$ git clone git@github.com:lroberts77/thermostat_js.git
$ cd thermostat_js
```

## <a name="Rspec">Rspec Tests</a>
* Copy the file path of SpecRunner.html in the jasmine-standalone-3.5.0 folder and paste it into your internet URl bar and press return. This will show all the tests in Jasmine that I have created to build the thermostat and their passing or failing status.

## <a name="Usage">Usage</a>

The thermostat is has two distinct parts to it,
1. The first part uses Openweather API to get JSON information about the current weather. I have split the API call function to accept a parameter of city which gets inserted into the API call to specify the city to get information for. From the JSON response I have pulled the city name, temperature and country which I display on the page in the same row as the city input box.

2. The second part is a Javascript async thermostat that covers the afore mentioned specification. thermostat.js handles all the base logic while interface.js encompasses the API handling and event handling.

## Next steps 
* Make page responsive to diffent screen sizes
* Pull some different information from the API
* Restyle to a futuristic thermostat
$ ( document ).ready (function(){


    // call MAAS API=========================================
    // API Object numbers.
    var maasObjects = ['9731', '352206', '341505', '95470'];
    var maasURL = 'https://api.maas.museum/v2/objects/';

    // Not used yet, but will when turn callPageData into a loop some other solution
    var cards = ['.card1', '.card2', '.card3', '.card4'];

    // Initial loaging info
    var callPageData = function(maasObjects){
        // call info for box 1
        var c1url = maasURL+maasObjects[0]
        $.getJSON(c1url, function(callData){
            $('.card1 h3, .card1 p').remove();
            $('.card1').append('<h3>' + callData.title + '</h3>');
            $('.card1').append('<p>' + callData.description + '</p>');
            // add object title as "alt" text.
            $('.card1 img').attr('alt', callData.title);
        });
        // Add Image
        // create image string
        c1src = '<img src="assets/images/' + maasObjects[0] + '.jpeg" alt="">';
        // remove old image.
        $('.card1 .img img').remove();
        // Add the new image
        $('.card1 .img').append(c1src);

        // call info for box 2
        var c2url = maasURL+maasObjects[1]
        $.getJSON(c2url, function(callData){
            $('.card2 h3, .card2 p').remove();
            $('.card2').append('<h3>' + callData.title + '</h3>');
            $('.card2').append('<p>' + callData.description + '</p>');
            $('.card2 img').attr('alt', callData.title);
        });
        // Add Image
        // create image string
        c2src = '<img src="assets/images/' + maasObjects[1] + '.jpeg" alt="">';
        // remove old image.
        $('.card2 .img img').remove();
        // Add the new image
        $('.card2 .img').append(c2src);

        // call info for box 3
        var c3url = maasURL+maasObjects[2]
        $.getJSON(c3url, function(callData){
            $('.card3 h3, .card3 p').remove();
            $('.card3').append('<h3>' + callData.title + '</h3>');
            $('.card3').append('<p>' + callData.description + '</p>');
            $('.card3 img').attr('alt', callData.title);
        });
        // Add Image
        // create image string
        c3src = '<img src="assets/images/' + maasObjects[2] + '.jpeg" alt="">';
        // remove old image.
        $('.card3 .img img').remove();
        // Add the new image
        $('.card3 .img').append(c3src);

        // call info for box 4
        var c4url = maasURL+maasObjects[3]
        $.getJSON(c4url, function(callData){
            $('.card4 h3, .card4 p').remove();
            $('.card4').append('<h3>' + callData.title + '</h3>');
            $('.card4').append('<p>' + callData.description + '</p>');
            $('.card1 img').attr('alt', callData.title);
        });
        // Add Image
        // create image string
        c4src = '<img src="assets/images/' + maasObjects[3] + '.jpeg" alt="">';
        // remove old image.
        $('.card4 .img img').remove();
        // Add the new image
        $('.card4 .img').append(c4src);
    };

    callPageData(maasObjects);




    // CLICK Events================================================


    // When clicking 1988 dot
    $('.1988').click(function(){
        // 2017 object reference numbers
        var maasObjects = ['9731', '352206', '341505', '95470'];

        // add and remove clicked styles
        $('.1988').addClass( "current" );
        $('.2000, .2006, .2017').removeClass( "current" );

        // call all box items
        callPageData(maasObjects);

        // Change year to clicked year.
        $('.year').html("1988");
    });

    // When clicking 2000 dot
    $('.2000').click(function(){
        // 2017 object reference numbers
        var maasObjects = ['319075', '502722', '342920', '398250'];

        // add and remove clicked styles
        $('.1988, .2006, .2017').removeClass( "current" );
        $('.2000').addClass( "current" );

        // call all box items
        callPageData(maasObjects);

        // Change year to clicked year.
        $('.year').html('2000');
    });

    // When clicking 2006 dot
    $('.2006').click(function(){
        // 2017 object reference numbers
        var maasObjects = ['428736', '460406', '433572', '366937'];

        // add and remove clicked styles
        $('.1988, .2000, .2017').removeClass( "current" );
        $('.2006').addClass( "current" );

        // call all box items
        callPageData(maasObjects);
        
        // Change year to clicked year.
        $('.year').html('2006');
    });

    // When clicking 2017 dot
    $('.2017').click(function(){
        // 2017 object reference numbers
        var maasObjects = ['548603', '564915', '559880', '561523'];

        // add and remove clicked styles
        $('.1988, .2000, .2006').removeClass( "current" );
        $('.2017').addClass( "current" );

        // call all box items
        callPageData(maasObjects);

        // Change year to clicked year.
        $('.year').html('2017');
    });

// End of all jQuery calls.==============================================
});







    // Location API============================================
    // Location variable
    var getLocation = '';

    // Check to see if browser supports geolocation.
    if(navigator.geolocation){

        // log geolocation info.
        console.log(navigator.geolocation)

        // having successfully retrieved the locatation data, gather the lattitude and longitude coordinates.
        function success(pos){
            // 
            var coordinates = pos.coords;
            console.log(pos);

            console.log('Your current position is:');
            console.log('Latitude: ' + coordinates.latitude);
            console.log('Longitude: ' + coordinates.longitude);
            console.log('Approximately ' + coordinates.accuracy + ' meters.');

            //Call Opencage API to find location name using the latitude and longitude
            nameCurrentLocation(coordinates.latitude, coordinates.longitude);
            console.log('Baulkham Hills is just '+ Math.floor(distance(coordinates.longitude, coordinates.latitude, -33.75881, 150.99292))+" Kms");
        };

        //This will help with identifying any errors that occur.
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };

        //Call Navigator for the currnet location.
        navigator.geolocation.getCurrentPosition(success, error);

    } else {
        // If the browser doesn't support geolocation, tell me.
        ShowError();
    };






    // OPENCAGE API CALL INFO=======================================================

    // This function converts the navigator.geolocations lattitude and longitude data to return a place name fof the current identified location. 
    function nameCurrentLocation(lat, long) {

        // my OpenCage Geocoder API key
        var OCKey = 'f327e990b3284ef79db7edbe63d8cf38';
    

        //opencage url from here: https://opencagedata.com/api
        var geocodeUrl = 'http://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + long + '&key=' + OCKey;

        // go get the json using the query above
        $.getJSON(geocodeUrl, function (locationData) {
            console.log(locationData);
            // get the location string - only suburb
            var locationString = locationData.results[0].components.suburb;

            $('.location').html(locationString);
        });
    }



    // DISTANCE CALCULATOR FUNCTION

    function distance(currentLon, currentLat, setLon, setLat) {
        // Radius of the earth in km
        var ERadius = 6370;
        // Convert increments to radians
        var LatDiff = (setLat-currentLat).toRad();  
        var LonDiff = (setLon-currentLon).toRad();
        var a = Math.sin(LatDiff/2)
            * Math.sin(LatDiff/2)
            + Math.cos(currentLat.toRad())
            * Math.cos(setLat.toRad())
            * Math.sin(LonDiff/2)
            * Math.sin(LonDiff/2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var dist = ERadius * c; // Distance in km
        return dist;
      }
      
      /** Converts numeric degrees to radians */
      if (typeof(Number.prototype.toRad) === "undefined") {
        Number.prototype.toRad = function() {
          return this * Math.PI / 180;
        }
      }
      

console.log("bam");

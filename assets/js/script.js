$ ( document ).ready (function(){


    // call MAAS API=========================================
    // API Object numbers.
    var maasObjects = ['9731', '352206', '341505', '95470'];
    var maasURL = 'https://api.maas.museum/v2/objects/';
    var cards = ['.card1', '.card2', '.card3', '.card4'];

    // Initial loaging info
    var callPageData = function(maasObjects){
        // call info for box 1
        var c1url = maasURL+maasObjects[0]
        $.getJSON(c1url, function(callData){
            $('.card1 h3, .card1 p').remove();
            $('.card1').append('<h3>' + callData.title + '</h3>');
            $('.card1').append('<p>' + callData.description + '</p>');
        });

        // call info for box 2
        var c2url = maasURL+maasObjects[1]
        $.getJSON(c2url, function(callData){
            $('.card2 h3, .card2 p').remove();
            $('.card2').append('<h3>' + callData.title + '</h3>');
            $('.card2').append('<p>' + callData.description + '</p>');
        });

        // call info for box 3
        var c3url = maasURL+maasObjects[2]
        $.getJSON(c3url, function(callData){
            $('.card3 h3, .card3 p').remove();
            $('.card3').append('<h3>' + callData.title + '</h3>');
            $('.card3').append('<p>' + callData.description + '</p>');
        });

        // call info for box 4
        var c4url = maasURL+maasObjects[3]
        $.getJSON(c4url, function(callData){
            $('.card4 h3, .card4 p').remove();
            $('.card4').append('<h3>' + callData.title + '</h3>');
            $('.card4').append('<p>' + callData.description + '</p>');
        });
    };

    callPageData(maasObjects);




    // CLICK Events================================================


    // When clicking 1988 dot
    $('.1988').click(function(){
        // 2017 object reference numbers
        var maasObjects = ['9731', '352206', '341505', '95470'];

        // add and remove clicked styles
        $('.1988').addClass( "current" );
        $('.2000').removeClass( "current" );
        $('.2006').removeClass( "current" );
        $('.2017').removeClass( "current" );

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
        $('.1988').removeClass( "current" );
        $('.2000').addClass( "current" );
        $('.2006').removeClass( "current" );
        $('.2017').removeClass( "current" );

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
        $('.1988').removeClass( "current" );
        $('.2000').removeClass( "current" );
        $('.2006').addClass( "current" );
        $('.2017').removeClass( "current" );

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
        $('.1988').removeClass( "current" );
        $('.2000').removeClass( "current" );
        $('.2006').removeClass( "current" );
        $('.2017').addClass( "current" );

        // call all box items
        callPageData(maasObjects);

        // Change year to clicked year.
        $('.year').html('2017');
    });

// End of all calls.==============================================
});







    // Location API============================================
    // Location variable
    var getLocation = '';

    if(navigator.geolocation){

        // log geolocation info.
        console.log(navigator.geolocation)

        // having successfully retrieved the locatation data, gather the lattitude and longitude coordinates.
        function success(pos){
            // 
            var coordinates = pos.coords;
            console.log(pos);

            console.log('Your current position is:');
            console.log('Latitude : ' + coordinates.latitude);
            console.log('Longitude: ' + coordinates.longitude);
            // console.log('More or less ' + coordinates.accuracy + ' meters.');

            //go get the location name, using the latitude and longitude
            getLocationName(coordinates.latitude, coordinates.longitude);
        };

        //if there is an error returning the geolocation then you should identify it and resolve it
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };

        //this is the line that actually prompts the user for their location
        navigator.geolocation.getCurrentPosition(success, error);

    } else {
        //if the browser doesn't support geolocation then you need to do some testing
        ShowError();
    };


    // Function to load the location name, based off the lat / long 
    function getLocationName(lat, long) {
        // my OpenCage Geocoder API key
        var OCKey = 'f327e990b3284ef79db7edbe63d8cf38';
    

        //opencage url from here: https://opencagedata.com/api
        var geocodeUrl = 'http://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + long + '&key=' + OCKey;

        // go get the json using the query above
        $.getJSON(geocodeUrl, function (locationData) {
            console.log(locationData);
            // get the location string - only suburb
            var locationString = locationData.results[0].components.suburb;

            $('.location').html(locationData.results[0].components.suburb);
        });
    }



    // distance calculator copy "for rewriting"

    function distance(lon1, lat1, lon2, lat2) {
        var R = 6371; // Radius of the earth in km
        var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
        var dLon = (lon2-lon1).toRad(); 
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
                Math.sin(dLon/2) * Math.sin(dLon/2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d;
      }
      
      /** Converts numeric degrees to radians */
      if (typeof(Number.prototype.toRad) === "undefined") {
        Number.prototype.toRad = function() {
          return this * Math.PI / 180;
        }
      }
      
      window.navigator.geolocation.getCurrentPosition(function(pos) {
        console.log(pos); 
        console.log(
          distance(pos.coords.longitude, pos.coords.latitude, 42.37, 71.03)
        ); 

      });





console.log("bam");

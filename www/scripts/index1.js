var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.removeEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        // app.receivedEvent('deviceready');
        //alert(window.location.href);
        console.log('Ingreso a onDeviceReady');
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);

        
    },

    onSuccess: function (position) {
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        //*******************************
        latitude = 27.985856;
        longitude = -81.959907
        //*******************************
        //alert('Longitude: ' + longitude + ' Latitude: ' + latitude);
        //*******************************
        console.log('longitude: ' + longitude);
        console.log('latitude: ' + latitude);

        //var mapjs = document.createElement("script");
        //mapjs.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBtTcw1C9SfDbgy2aKfOt_5N8m2Ltpqdu8";

        //var s = document.getElementsByTagName("script")[0]; 
        //s.parentNode.insertBefore(mapjs, s);

        try {
            //alert(google);
            //alert(google.maps);
            //alert(google.maps.LatLng);
            var latLong = new google.maps.LatLng(latitude, longitude);
            alert('latLong: ' + latLong);
            //var latLong = new plugin.google.maps.LatLng(latitude, longitude);
        } catch (ex) {
            alert(ex.message);
        }

        
        //*******************************
        alert('Visualizando Mapa.');
        //var mapOptions = {
        //    center: latLong,
        //    zoom: 13,
        //    mapTypeId: google.maps.MapTypeId.ROADMAP
        //};
        //console.log('paso 1');
        //pintamos el mapa
        var mapOptions = {
            zoom: 14,
            center: latLong,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            backgroundColor: '#ffffff',
            noClear: true,
            disableDefaultUI: false,
            keyboardShortcuts: true,
            disableDoubleClickZoom: false,
            draggable: true,
            scrollwheel: true,
            draggableCursor: 'pointer',
            draggingCursor: 'crosshair',
            mapTypeControl: true,
            //mapTypeControlOptions: {
            //    style: google.maps.MapTypeControlStyle.HORIZONTAL_MENU,
            //    position: google.maps.ControlPosition.TOP_LEFT,
            //    mapTypeIds: [
            //        google.maps.MapTypeId.ROADMAP
            //    ]
            //},
            navigationControl: true,
            streetViewControl: true,
            navigationControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
                style: google.maps.NavigationControlStyle.ANDROID
            },
            scaleControl: true,
            scaleControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT,
                style: google.maps.ScaleControlStyle.DEFAULT
            }
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        //var marker = new google.maps.Marker({
        //    position: latLong,
        //    map: map,
        //    title: 'my location'
        //});

        var marker = new google.maps.Marker({
            position: latLong,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'Insight Risk Technologies, LLC',
            icon: 'https://www.chancesrmis.com/um-usa/img/Logos/chancesr.jpg',
            cursor: 'pointer',
            draggable: true
        });

    },

    onError: function (error) {
        alert("the code is " + error.code + ". \n" + "message: " + error.message);
    },
};

app.initialize();
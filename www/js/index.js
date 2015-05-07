/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
       navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },

    onSuccess: function(position){
        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(27.985856, -81.959907);

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

        var marker = new google.maps.Marker({
            position: latLong,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'Insight Risk Technologies, LLC',
            icon: 'https://www.chancesrmis.com/um-usa/img/Logos/chancesr.jpg',
            cursor: 'pointer',
            draggable: true
        });

        alert(document.getElementById('map').innerHTML);
    },
    
    onError: function(error){
        alert("the code is " + error.code + ". \n" + "message: " + error.message);
    },
};

app.initialize();
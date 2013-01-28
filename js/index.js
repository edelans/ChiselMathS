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
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


$(document).ready(function() {
                  
                  $('.pincher').each(function() {
                                     $(this).on("pinchOut", function(){
                                                $(this).next('.pinched').addClass('pinched-active');})
                                     $(this).on("doubleTap", function(){
                                                $(this).next('.pinched').toggleClass('pinched-active');})
                                     $(this).on("pinchIn", function(){
                                                $(this).next('.pinched').removeClass('pinched-active');})
                                     });
                  $('.swipe').each(function() {
                                   var slider = this;
                                   var count = $(this).children('ul').children().length;
                                   $(this).before('<div class="triangle-up"></div>');
                                   $(this).parent('.pinched').after('<div class="slider-nav"></div>');
                                   var slider_nav = $(this).parent().next('.slider-nav');
                                   
                                   for (var i = 0; i < count; i++) {
                                   var bullet = $('<a class="bullet" data-target="' + i + '">•</a>');
                                   slider_nav.append(bullet); }
                                   
                                   slider_nav.find('.bullet[data-target=0]').addClass('bullet-active');
                                   $(slider).append(slider_nav);
                                   
                                   window.mySwipe = new Swipe( slider, {
                                                              callback: function (event, index, elem) {
                                                              slider_nav.find('.bullet').removeClass('bullet-active');
                                                              slider_nav.find('.bullet[data-target=' + index + ']').addClass('bullet-active');}
                                                              });
                                   });
                  });

$('iframe.graphtk').each(function(){
                         
                         $(this).next('i').on("tap", function(){
                                              $(this).addClass('graphtk-large');})};





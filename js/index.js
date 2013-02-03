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
                  // Pinch-to-reveal
                  $('.pincher').each(function() {
                                     $(this).append('<i class="icon-pincher"></i>');
                                     $(this).on("pinchOut", function(){
                                                $(this).next('.pinched').addClass('pinched-active');})
                                     $(this).on("doubleTap", function(){
                                                $(this).next('.pinched').toggleClass('pinched-active');})
                                     $(this).on("pinchIn", function(){
                                                $(this).next('.pinched').removeClass('pinched-active');})
                                     $(this).children('i').on("tap", function(){
                                                               $(this).next('.pinched').addClass('pinched-active');})

                                     });
                  // Slider
                  
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
                  
                  
                  // Resize and refresh buttons, Boutons de rafraîchissement et de redimmension
                  $('iframe.graphtk').each(function(){
                                           $(this).after('<div class="graph-icons"><i class="icon-resize-full icon-large"></i><i class="icon-refresh icon-large"></i></div>');
                                           $(this).next('div').children('i.icon-resize-full, i.icon-resize-small').on("tap", function(){
                                                            $(this).parent().prev('iframe.graphtk').toggleClass('graphtk-large');
                                                            $(this).toggleClass('icon-resize-full');
                                                            $(this).toggleClass('icon-resize-small');})
                                           $(this).next('div').children('i.icon-refresh').on("tap", function(){
                                                                                             $(this).parent().prev('iframe.graphtk');})
                                           }); 

                  // TOC generator and headlines numerator, Générateur de sommaire et numérotation des titres
                  i = 1;
                  if($('#toc').length){
                  $('h2').each(function(){
                               j=1;
                               var id = 'h2-' + i;
                               $(this).prepend(i + '  ');
                               $(this).attr( "id", id );
                               $('#toc').append('<a href=#' + id + '>' + $(this).text() + '</a><br>');
                               $(this).nextUntil('h2' , 'h3, div h3').each(function(){
                                                           $(this).prepend(i + '.' + j + '  ');
                                                        var id2 = 'h3-' + i + '-' + j;
                                                           $(this).attr( "id", id2);
                                                           $('#toc').append('<a class="h3-links" href=#' + id2 + '>' + $(this).text() + '</a><br class="h3-links">');
                                                           j++;});
                               i++;                               
                               });};
                  
                  // Smooth Scroll, Défilement progressif
                  $("#toc a").click(function(event){
                                      event.preventDefault();
                                    $('html,body').animate({scrollTop:$(this.hash).offset().top-40}, 500);
                                    });
                  
                  //Home chapters handler
                  
                  $('.current-chapter').each(function(){
                                            var folder = $(this).attr('ref');
                                             $(this).append('<a href="content/' + folder + '/cours.html" ><div><i class="icon-lightbulb icon-2x"></i>  Cours</div></a>');
                                             $(this).append('<a href="content/' + folder + '/exos.html" ><div><i class="icon-pencil icon-2x"></i>  Exos</div></a>');
                                             $(this).append('<a href="content/' + folder + '/redac.html" ><div><i class="icon-cogs icon-2x"></i>  Redac</div></a>');
                                             $(this).append('<a href="content/' + folder + '/fiche.html" ><div><i class="icon-dashboard icon-2x"></i>  Fiche</div></a>');                                             
                                             });
                  
                  $('.prev-chapters').nextAll('h3').each(function(){
                                                        var folder = $(this).attr('ref');
                                                         $(this).wrap('<div class="column_4" />');
                                                        $(this).after('<div class="prev-chapter-div"></div>');
                                                        var div = $(this).next('div');
                                                        div.append('<a href="content/' + folder + '/cours.html" ><i class="icon-lightbulb icon-3x"></i></a>');
                                                        div.append('<a href="content/' + folder + '/exos.html"  ><i class="icon-pencil icon-3x"></i></a>');
                                                        div.append('<a href="content/' + folder + '/redac.html" ><i class="icon-cogs icon-3x"></i></a>');
                                                        div.append('<a href="content/' + folder + '/fiche.html" ><i class="icon-dashboard icon-3x"></i></a>');
                                                        });
                //fiche
                  var k=0;
                  $('#navbar a i.icon-dashboard').parent('a').on("tap", function(){
                                                                 k++;
                                                                 if(k%2==1){
                                                                 $('#quick-look').load('fiche.html #fiche-div',  function ()
                                                                                       {MathJax.Hub.Queue(["Typeset",MathJax.Hub,"quick-look"])});
                                                                 $('#quick-look').slidedown("slow");}
                                                                 else{$('#quick-look').empty();}
                                                                 });
                  
                  var l=0;
                  $('.number').each(function(){
                                    $(this).on("tap", function(){
                                               l++;
                                               if(l%2==1){
                                               var number = $(this).text();
                                               var id =  number + '-exo-frame';
                                               $(this).parent('.row').after('<div class="exo-frame" id="' + id + '"></div>');
                                               var div = $(this).parent('.row').next('.exo-frame');
                                               div.load('exos/' + number +'.html',  function ()
                                                                     {MathJax.Hub.Queue(["Typeset",MathJax.Hub, id])});
                                               }
                                               if(l%2!=1){
                                               var div = $(this).parent('.row').next('.exo-frame');
                                               div.remove();}
                                               });
                                             });
                  
                  var m =0
                  $('.graph-side').each(function(){
                                        if( $(this).parent('.right-container').prev('.left-container').length == 0){
                                        $(this).parent('.right-container').before('<div class="left-container"></div>');}
                                        
                                        $(this).appendTo( $(this).parent('.right-container').prev('.left-container') );
                                        
                                        
                                        });

                  
                  
                  
                  });

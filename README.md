MathBookApp
===========

a PhoneGap based framework to create math class book apps

Needs some cleaning up...

The framework uses : PhoneGap, jQuery, Graph.tk, Quo.js, SwipeJS, Font-Awesome, MathJax, JSXGraph, Simple-Grid, LESS (for now)

Beginning of the API : 

For the pinch-to-reveal function : 
<p class="pincher"></p>
            <div class="pinched">
                <div class='swipe'>
                    <ul>
                        <li style='display:block'><div> </div></li>
                        <li style='display:none'><div> </div></li>
                        <li style='display:none'><div> </div></li>
                        <li style='display:none'><div> </div></li>
                        <li style='display:none'><div> </div></li>
                    </ul>
                </div>
            </div>

For the graph.tk iframe, insert your function after the #, just like in the graph.tk website :

            <iframe class="graphtk" src="graph.html#e^x"> </iframe>
            
For MathJax, use the $ just like in LaTeX. 

For the headlines, just use the h2, h3 and h4 tags, which will appear just like \section, \subsection and \subsubsection in LaTeX.
Putting a <div id="toc"></div> after the title will output a table of content.


TODO :

- Adapt Khan-Exercices to pure JS
- CLEAN UP
- Try on Android
- Customize the CSS for the iPad

TODO pour les français : 

- Nettoyer le tableu de variations, et le rendre facile à coder.
- Ajouter le moteur d'Algobox, pour faire tourner les algorithmes en JS

A few demos : 
http://db.tt/mpEfJMaw

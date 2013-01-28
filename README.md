MathBookApp
===========

a PhoneGap based framework to create math class book apps

Needs some cleaning up...

The framework uses : PhoneGap, jQuery, Graph.tk, Quo.js, SwipeJS, Font-Awesome, MathJax and JSXGraph (for now)

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

For the graph.tk iframe, insert your function after the # :

            <iframe class="graphtk" src="graph.html#e^x"> </iframe>
            
For MathJax, use the $ just like in LaTeX. 

TODO :

- Adapt Khan-Exercices to pure JS
- CLEAN UP
- Try on Android
- Customize the CSS for the iPad

TODO pour les français : 

- Nettoyer le tableu de variations, et le rendre facile à coder.
- Ajouter le moteur d'Algobox, pour faire tourner les algorithmes en JS

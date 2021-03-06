ChiselMathS
===========
http://jeremypatrickdahan.github.com/ChiselMathS/

a PhoneGap based framework to create math class book apps

Needs some cleaning up...

The framework uses : [PhoneGap](http://phonegap.com/), [jQuery](http://jquery.com/), [Graph.tk](http://graph.tk), [Quo.js](http://quojs.tapquo.com/), [SwipeJS](http://swipejs.com), [Font-Awesome](http://fortawesome.github.com/Font-Awesome/), [MathJax](http://mathjax.org), [JSXGraph](http://jsxgraph.uni-bayreuth.de), [tuktuk](http://tuktuk.tapquo.com), [LESS](http://lescss.org), [Javascript-Cas](https://github.com/aantthony/javascript-cas), [HandleBarsJS](http://handlebarsjs.com/)  (for now)

# Beginning of the API : 

For the pinch-to-reveal function : 
<p class="pincher"></p>
            <div class="pincher"></div>
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

Putting an "exo" class to the div.pincher will make it red, and will add a little pencil icon.
For the graph.tk iframe, insert your function after the #, just like in the graph.tk website :

            <iframe class="graphtk" src="../../graph.html#e^x"> </iframe>
            
For MathJax, use the $ just like in LaTeX. 

For the headlines, just use the h2, h3 and h4 tags, which will appear just like \section, \subsection and \subsubsection in LaTeX.
Putting a

                        <div id="toc"></div>
            
after the title will output a table of content.


TODO :

- Adapt Khan-Exercices to pure JS
- CLEAN UP
- Try on Android
- Customize the CSS for the iPad

A few demos 
http://db.tt/mpEfJMaw

## En français

Cette structure permet la construction rapide d'un cours de math/physique avec exercices, sur toutes les plateformes dotées du support du HTML5. Elle emprunte l'esthétique TeX en y ajoutant des modules comme des graphiques interactifs graph.tk ou JSXGraph (compatibilité Geogebra).
Quelques fonctions sont opérationnelles : 


La fonction pinch-to-reveal qui permet de révéler un élément en écartant des doigts un autre. Il suffit de placer une classe ’pincher’ de cette façon : 
<p class="pincher"></p>
            <div class="pincher"></div>
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

On peut rajouter une classe ’exo’ au ’pincher’ pour signaler un petit exercice de compréhension.

Pour les titres, on peut utiliser les balises h2,h3 et h4 qui sont numérotées et indexées si on laisse une balise

                        <div id="toc"></div>
            
après le titre h1. 

Pour rajouter un graphique graph.tk, on rajoute un simple iframe, avec les fonctions après le #, séparées par un & :

                     <iframe class="graphtk" src="../../graph.html#e^x&x^2"> </iframe>

Pour les maths, grâce à MathJax, on utilise le $, comme dans TeX.

TODO : 
- Il faut nettoyer et simplifier le code.
- Nettoyer le tableu de variations, et le rendre facile à coder.
- Ajouter le moteur d'Algobox, pour faire tourner les algorithmes en JS


Quelques démos :
http://db.tt/mpEfJMaw

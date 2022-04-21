# Roman Numeral Converter

Convert a given number into a roman numeral.

## Some words about this project

Ave lector !

Thinking about a way to convert decimal numbers into Roman was quite interesting and in order to achieve this goal I observed the patterns that were involved in order to create a Roman number and I managed to isolate two patterns :

1) The first one is about thousands. It is pretty simple : 1 thousand = M, 2 thousand = MM and so on. Generate as many M as the number of thousands was the first step of the algorithm.

2) The second pattern dictate the way to form units, tens and hundreds. Here are tables with some colors to make the pattern more evident :

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|:------------:|:-----:|:----------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| I <br /> &#x1F535; |  II <br /> &#x1F535; &#x1F535; | III <br /> &#x1F535; &#x1F535; &#x1F535; | IV <br /> &#x1F535; &#x1F534; |V <br /> &#x1F534; |VI <br /> &#x1F534; &#x1F535; |VII <br /> &#x1F534; &#x1F535; &#x1F535; |VIII <br /> &#x1F534; &#x1F535; &#x1F535; &#x1F535; |IX <br /> &#x1F535; &#x1F536; |

| 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 |
|:------------:|:-----:|:----------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| X <br /> &#x1F535; |  XX <br /> &#x1F535; &#x1F535; | XXX <br /> &#x1F535; &#x1F535; &#x1F535; | XL <br /> &#x1F535; &#x1F534; |L <br /> &#x1F534; |LX <br /> &#x1F534; &#x1F535; |LXX <br /> &#x1F534; &#x1F535; &#x1F535; |LXXX <br /> &#x1F534; &#x1F535; &#x1F535; &#x1F535; |XC <br /> &#x1F535; &#x1F536; |

| 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|:------------:|:-----:|:----------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| C <br /> &#x1F535; |  CC <br /> &#x1F535; &#x1F535; | CCC <br /> &#x1F535; &#x1F535; &#x1F535; | CD <br /> &#x1F535; &#x1F534; |D <br /> &#x1F534; |DC <br /> &#x1F534; &#x1F535; |DCC <br /> &#x1F534; &#x1F535; &#x1F535; |DCCC <br /> &#x1F534; &#x1F535; &#x1F535; &#x1F535; |CM <br /> &#x1F535; &#x1F536; |


The function `placeNumbers` is the one that is dealing with this pattern, I have added some comments in my script file to explain how it works.

That's all for the algorithm. If you want, you can join Asterix and Obelix to see the algorithm in action : https://leoncik.github.io/FreeCodeCamp-Projects/2-JavaScript-algorithms/2.Roman-Numeral-Converter/index.html

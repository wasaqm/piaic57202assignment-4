var colors = ["red", "yellow","blue"];
alert(colors)
var addcolorb = prompt ("Add color in the begining")
var colorsnewb = (colors.unshift(addcolorb))
var addcolore = prompt ("Add color in the end")
var colorsnewe = (colors.push(addcolore))
console.log(colors)

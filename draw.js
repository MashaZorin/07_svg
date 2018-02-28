var clear = document.getElementById('clear');

var num_circles = 0;

var pre_x;
var pre_y;
var next_x;
var next_y;

var radius = 10;


var create_circle_and_line = function(){
    var circle = document.createElementNS('namespace', 'circle');
    circle.setAttribute('cx', next_x);
    circle.setAttribute('cy', next_y);
    circle.setAttribute('r', radius);
    num_circles ++;

    if (num_circles > 1) {
	var line = document.createElementNS('namespace', 'line');
	line.setAttribute('x1', pre_x);
	line.setAttribute('y1', pre_y);
	line.setAttribute('x2', next_x);
	line.setAttribute('y2', next_y);
    }
}

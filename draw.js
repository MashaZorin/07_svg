var svg = document.getElementById('svg');
var clear = document.getElementById('clear');

var num_circles = 0;

var pre_x;
var pre_y;
var next_x;
var next_y;

var radius = '10';
var svg_w = '500';
var svg_h = '500';

var create_circle_and_line = function(e){
    next_x = e.offsetX;
    next_y = e.offsetY;
    //console.log(next_x, next_y);
    
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('fill', 'black');
    circle.setAttribute('cx', next_x);
    circle.setAttribute('cy', next_y);
    circle.setAttribute('r', radius);
    svg.appendChild(circle);
    //console.log(circle);
    num_circles ++;

    if (num_circles > 1) {
	var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	line.setAttribute('x1', pre_x);
	line.setAttribute('y1', pre_y);
	line.setAttribute('x2', next_x);
	line.setAttribute('y2', next_y);
	line.setAttribute('stroke', 'black');
	svg.appendChild(line);
    }
    
    pre_x = next_x;
    pre_y = next_y;
}

var clear_scr = function(e){
    var clear_rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    clear_rect.setAttribute('x', '0');
    clear_rect.setAttribute('y', '0');
    clear_rect.setAttribute('width', svg_w);
    clear_rect.setAttribute('height', svg_h);
    clear_rect.setAttribute('stroke', 'black');
    clear_rect.setAttribute('fill', 'white');
    clear_rect.setAttribute('stroke-width', '1');
    svg.appendChild(clear_rect);
    num_circles = 0;
}

//console.log('made it in');
svg.addEventListener('click', create_circle_and_line);
clear.addEventListener('click', clear_scr);

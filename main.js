canvas =
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


var Color="#color_input"
var Width="#width_input"
var Radius="#radius_input"


var mouse_event="";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    Color=document.getElementById("color_input").value;
    Width=document.getElementById("width_input").value;
    Radius=document.getElementById("radius_input").value;
    mouseEvent="mousedown";
}



canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}



canvas.addEventListener("mouseleave",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseleave";
}



canvas.addEventListener("mousemove",my_mousemoveb>);
function my_mouseup(e)
{
    mouseEvent="mouseleave";
}


   position_of_mouse_x=e.clientX-canvas.offsetLeft;
   position_of_mouse_y=e.clientY-canvas.offsetTop;


   if(mouseEvent=="mousedown")
   {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last position of x and y coordinates=");
    console.log("x="+last_position_of_x+"y="+Last_position_of_y);
    ctx.moveTo(last_position_of_x,Last_position_of_y);

    console.log("current position of x and y coordinates=");
    console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();

   }




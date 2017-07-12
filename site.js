var points = 0;
var machines = 0;
var reserved_machines = 0;
var click_size = 1;
var speed = 100;
var gameSpeed;

function setTime() {
    gameSpeed = (speed / 100) * 1000;
    pointSpeed = setInterval(addPoints, gameSpeed);
}


function update() {
    gamespeed = (speed / 100);
    points += machines * .2;
    reserved_machines += 5;
    $("#points").html("Points: " + (Math.round(points * 100)/100));
    $("#size").html("Click size: " + (Math.round(click_size * 100)/100));
    $("#machines").html("Machines: " + (Math.round(machines * 100)/100));
    $("#speed").html("Speed: " + (Math.round(speed * 100)/100) + "%");
    $("#collecting").html("Reserved machines: " + reserved_machines);
}



$("#click_point").click(function() {
    points += click_size;
});

$("#click_machine").click(function() {
    machines += 1;
});

$("#click_size").click(function() {
    click_size += .05;
});

$("#click_speed").click(function() {
    speed += 5;
});

updateSpeed = setInterval(update, 1000);

'use strict'

//get dom element with css selector
//view
var start_view = document.querySelector("body .block div.start");
var test_view = document.querySelector("body .block div.test-box");
var result_view = document.querySelector("body .block div.result");

//aciton
var start_btn = document.querySelector("body .block div.start button");
var start_timer = document.querySelector("body .block div.test-box div.timer");
var click_time = document.querySelector("body .block div.test-box span#timer");
var click_count = document.querySelector("body .block div.test-box span#clicker");
var total_click = document.querySelector("body .block div.result h1#total");
var speed = document.querySelector("body .block div.result #speed");
var test_space = document.querySelector("body .block div.test-box .box");
var reload_btn = document.querySelector("body .block div.result button");

//Enable and disble function for div element
function enable(element){
    element.classList.remove("no-active");
}
function disable(element){
    element.classList.add("no-active");
}

reload_btn.onclick = ()=>{
    disable(result_view);
    start_btn.click()
}

start_btn.addEventListener("click", ()=>{
    disable(start_view);
    enable(test_view);
    enable(start_timer);
    var timer = 3;
    var timer_iteration = setInterval(()=>{
        start_timer.innerText = timer;
        if (timer==0) {
            clearInterval(timer_iteration);
            disable(start_timer);
            StartTest();
        } else {
            timer -= 1
        }
    },1000)
})

function StartTest(){
    var running = 1;
    var Click = 0;
    test_space.addEventListener("click", ()=>{
        if(running){
            Click += 1;
            click_count.innerText = Click;
        }
    })

    var time = 10;
    var time_count = setInterval(()=>{
        click_time.innerText = Math.trunc(time*10)/10;
        if (time<=0) {
            clearInterval(time_count);
            running = 0;
            total_click.innerText = Click;
            speed.innerHTML = Math.ceil(Click/10);
            enable(result_view);
        } else {
            time -= 0.1
        }
    },100)
}

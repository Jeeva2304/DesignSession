
function image(img){
    document.querySelector(".image").src = img;
}
function color(color){
    let old_color = document.querySelector(".circle");
    old_color.style.backgroundColor = color;
}
function bg_color(new_bg_color){
    let old_bg_color = document.querySelector(".container");
    old_bg_color.style.backgroundColor = new_bg_color
}
function newHeading(new_heading){
    document.querySelector("#step").textContent = new_heading;
}
function newContent(content){
    document.querySelector("#step_content").textContent = content;
}
function link_color(new_color){
    let old_link1_color = document.querySelector('.link1');
    let old_link2_color = document.querySelector('.link2');
    let old_link3_color = document.querySelector('.link3');
    let old_link4_color = document.querySelector('.link4');
    old_link1_color.style.color = new_color;
    old_link2_color.style.color = new_color;
    old_link3_color.style.color = new_color;
    old_link4_color.style.color = new_color;
}


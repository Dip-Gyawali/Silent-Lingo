let main = document.querySelector('.main');
let cursor = document.querySelector('.cursor');
let navBtn=document.querySelector('.nav-btn');
let contentBtn=document.querySelector('.btn-content');
let textArea=document.querySelector('.text-area');
let h=document.querySelector('.h');
let a=document.querySelector('.a');
let r=document.querySelector('.r');
let k=document.querySelector('.k');
let load=document.querySelector('.load-screen');
let video=document.querySelector('.yt-area');
let cross=document.querySelector('.cross');

gsap.from('.h',{
    y:-100,
    opacity:0,
    duration:1,
    delay:1
})

gsap.from('.a',{
    y:-100,
    opacity:0,
    duration:1,
    delay:1.5
})

gsap.from('.r',{
    y:-100,
    opacity:0,
    duration:1,
    delay:2
})

gsap.from('.k',{
    y:-100,
    opacity:0,
    duration:1,
    delay:2.5
})

gsap.to(".load-screen",{
    y:-1000,
    duration:4,
    delay:3,
    ease: "slow(0.7,0.7,false)",
})

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out(1.7)"
    })
})

navBtn.addEventListener("mouseenter",function(){
    cursor.innerHTML="Talk"
    gsap.to(cursor,{
        height:50,
        width:50,
        textAlign:"center"
    })
})
navBtn.addEventListener('mouseleave',function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        height:20,
        width:20
    })
})

contentBtn.addEventListener("mouseenter",function(){
    cursor.innerHTML="Demo"
    gsap.to(cursor,{
        height:50,
        width:50,
        textAlign:"center"
    })
})
contentBtn.addEventListener('mouseleave',function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        height:20,
        width:20
    })
})

textArea.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        backgroundColor:"#ffffff9b",
        scale:4
    })
})

textArea.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        backgroundColor:"#ff04ffc8",
        scale:1
    })
})


contentBtn.onclick=viewVideo;
cross.onclick=closeVideo;

function viewVideo(){
      video.style.display="block";
      cursor.style.display="none";
      contentBtn.style.display="none";
}

function closeVideo(){
    video.style.display="none";
    cursor.style.display="flex";
    contentBtn.style.display="block";
}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 40,
                y: dets.y - elem.getBoundingClientRect().y - 125
            })
            console.log(dets.x)
            console.log(elem.getBoundingClientRect())
        })
    });
}

navAnimation()

page2Animation()


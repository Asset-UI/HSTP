console.log("ssssssssssssssssss");
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:false,
    margin:10,
    autoWidth:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.owl2').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    nav:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('')
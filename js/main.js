/**
 * Created by Leo on 28-1-14.
 */

$.vegas('slideshow', {
    delay: 10000,
    backgrounds:[
        { src: 'images/bg1.jpg', fade: 5000 },
        { src: 'images/bg2.jpg', fade: 5000 },
        { src: 'images/bg5.jpg', fade: 5000 },
        { src: 'images/bg4.jpg', fade: 5000 },
        { src: 'images/bg3.jpg', fade: 5000 }
    ],
    preload: true
})('overlay', {
    src: 'overlays/06.png'
});

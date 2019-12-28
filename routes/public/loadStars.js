function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}


setTimeout(() => {
    addScript('https://westbuy.s3.amazonaws.com/public/bundles/stars-bundle.js');
}, 3000);

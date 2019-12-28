function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}

setTimeout(() => {
    addScript('https://pi-stars.us-east-2.elasticbeanstalk.com/star-bundle.js');
}, 3000);

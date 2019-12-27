function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}

setTimeout(() => {
    console.log('Loading stars script');
    addScript('https://pi-stars.us-east-2.elasticbeanstalk.com/star-bundle.js');
}, 3000);

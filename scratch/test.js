function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}

setTimeout(() => {
    console.log('running');
    addScript('http://pi-stars.us-east-2.elasticbeanstalk.com/star-bundle.js');
}, 2000);

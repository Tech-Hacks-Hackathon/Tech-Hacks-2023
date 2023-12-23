let scene, camera, renderer, stargeo, stars;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 180;
    camera.rotation.z = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    stargeo = new THREE.BufferGeometry();
    stargeo.vertices = [];

    const starsData = [];

    for (let i = 0; i < 10000; i++) {
        const star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        star.velocity = 0.03;
        star.acceleration = 0.02;
        stargeo.vertices.push(star);
        starsData.push(star.x, star.y, star.z);
    }

    stargeo.setAttribute('position', new THREE.Float32BufferAttribute(starsData, 3));

    const sprite = new THREE.TextureLoader().load("dot.png");
    const starmaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 1,
        map: sprite,
    });

    stars = new THREE.Points(stargeo, starmaterial);
    scene.add(stars);

    animate();
}

function onwindowresize(){
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectMatrix();
    renderer.setSize(window.innerWidth,window,innerHeight);
}

function animate() {
    // Update camera position to create an inward movement effect
    camera.position.z -= 0.6;

    stargeo.vertices.forEach(p => {
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if (p.y < -300) {
            p.y = 300;
            p.velocity = 0;
        }
    });

    stargeo.attributes.position.needsUpdate = true;
    stars.rotation.y += 0.001;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();

function removeh1(){
    const h1=document.querySelector(".h1");
    var keyframes=[
        {transform:"translateY(0px)"},
        {transform:"translateY(-900px)"}
    ]
    var options={
        duration:1000,
        easing:"ease-in-out"
    }
    h1.animate(keyframes,options);

}
setTimeout(removeh1,1000).onfinish=()=>h1.style.display="none";
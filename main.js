/* Add temperature conversion function */
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(output.toFixed(2));
};

/* Add light mode */
const modeToggle = document.querySelector('.mode-tog');
const lightMode = document.querySelector('.light-mode');

modeToggle.addEventListener('click', () => {
    lightMode.classList.toggle('active');
    modeToggle.classList.toggle('active');
})

/* Add earth design */
window.addEventListener("load", init);

let scene, camera, renderer, earth

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 500);

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: document.querySelector("#myCanvas"),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(100, 64, 64);
    const material = new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load("./earthmap1k.jpg"),
        side: THREE.DoubleSide,
    });
    earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    const pointLight = new THREE.PointLight(0xffffff, 1.8);
    pointLight.position.set(150, 150, 200);
    scene.add(pointLight);

    function animate() {
        earth.rotation.x += 0.001;
        earth.rotation.y += 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize);

    animate();
}
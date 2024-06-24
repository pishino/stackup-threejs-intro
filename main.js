import * as THREE from 'three';

//Create the Scene
const scene = new THREE.Scene();

//Create Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//Create Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('app').appendChild(renderer.domElement);

//Create Geometry (a cube)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//Create a Light Point
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

//Crerate Ambient Light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Animation function
function animate() {
    requestAnimationFrame(animate);
  
    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    // Render the scene with the camera
    renderer.render(scene, camera);
  }
  
  // Start the animation
  animate();


window.addEventListener('load' , () => {

  const width = window.innerWidth;
  const height = window.innerHeight;
  const canvas = document.querySelector('#canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  var ball = {
    rotationY:0,
    rotationX:0,
    rotationZ:0,
  }

  var gui = new dat.GUI()
  gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001)
  gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.001)
  gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.001)

  const renderer = new THREE.WebGLRenderer({canvas:canvas});



  renderer.setClearColor(0x000000);

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(45, width / height , 0.1 , 5000);

  camera.position.set(0, 0 , 1000);

  const light = new THREE.AmbientLight(0xffffff)

  scene.add(light)

  const geometry = new THREE.SphereGeometry(200 , 12 , 12);
  const material = new THREE.MeshBasicMaterial({color:0xffffff,  wireframe:true});
  


  const mesh = new THREE.Mesh(geometry , material)

  scene.add(mesh)


  function loop(){
    mesh.rotation.y += ball.rotationY;
    mesh.rotation.x += ball.rotationX;
    mesh.rotation.z += ball.rotationZ;

    renderer.render(scene, camera)
    requestAnimationFrame(() => loop())
  }

  loop()
});
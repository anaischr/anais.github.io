import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js"

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { PLYLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/PLYLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);

let objects;

let controls;

let objToRender = 'chaise';

const loader = new PLYLoader();

loader.load(
    'ply/chaise.ply',
    function (geometry) {
        geometry.computeVertexNormals()
        //const mesh = new THREE.Mesh(geometry, material)
        objects = new THREE.Mesh(geometry,mat)
        mesh.rotateX(-Math.PI / 2)
        scene.add(mesh)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
    
)
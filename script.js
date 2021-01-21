import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';
import {MundoAR} from './MundoAR.js';
import {ContextoAR} from './ContextoAR.js';
import {cargarModelo} from './CargarModelo.js';
//import { Reflector } from 'https://unpkg.com/three@0.122.0/examples/jsm/objects/Reflector.js';

var mundo;
var modelos = [];
var botones = [];
var animarModelo = false;
var verModelo = false;

var contextoAR;

function iniciar(){
    mundo = new MundoAR();
    contextoAR = new ContextoAR(mundo);
    //mundo.iluminar();
    mundo.iluminarConFoto('./hdr/fondo.png',false);

    var marcador = contextoAR.crearMarcador('marcador/botella.patt');
    var marcador1 = contextoAR.crearMarcador('marcador/gat.patt');

    //mundo.escena.add(modelos);

    botones[0]= document.getElementById('btn1');
    botones[0].onclick = function(){animarModelo = !animarModelo}

    botones[1]= document.getElementById('btn2');


    botones[2]= document.getElementById('btn3');


    modelos[0] = new THREE.Object3D();
    cargarModelo('./modelo/modo.glb',marcador,modelos[0]);
    modelos[0].scale.x=0.25
    modelos[0].scale.y=0.25
    modelos[0].scale.z=0.25
    modelos[0].position.y+=0.25
    modelos[0].position.x+=0.25

    modelos[1] = new THREE.Object3D();
    cargarModelo('./modelo/Amongus.glb',marcador1,modelos[1]);
    modelos[1].scale.x=0.25
    modelos[1].scale.y=0.25
    modelos[1].scale.z=0.25
    modelos[1].position.y+=0.25
    modelos[1].position.x-=0.25

}

function animar(){
    requestAnimationFrame(animar);
    if(animarModelo){
      modelos[0].rotation.y += 0.1;
      modelos[1].rotation.y += 0.1;
    }

    contextoAR.actualizar();
    mundo.dibujar();
}



function cambiarModelo(){


}

function crearModelo(){



}

iniciar();
animar();

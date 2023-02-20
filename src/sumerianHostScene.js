import { HostObject } from '@amazon-sumerian-hosts/babylon';
import { Scene } from '@babylonjs/core/scene';
import BabylonUtils from './babylon-utils';
import { cognitoIdentityPoolId } from './cognito-idp-credentials.js';
import hostConfig from './config/sumerianHostSceneConfig.json';

let host;
let scene;
let speech = hostConfig['sumerianHostScript'];
let newSpeech = speech;

async function createScene(engine) {
  // Create an empty scene. Note: Sumerian Hosts work with both
  // right-hand or left-hand coordinate system for babylon scene
  scene = new Scene();

  const { shadowGenerator } = BabylonUtils.setupSceneEnvironment(scene);
  document.getElementById('speechText').innerText = hostConfig['sumerianHostScript'];
  initUi();

  // ===== Configure the AWS SDK =====

  AWS.config.region = cognitoIdentityPoolId.split(':')[0];
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: cognitoIdentityPoolId,
  });

  // ===== Instantiate the Sumerian Host =====

  // Edit the characterId if you would like to use one of
  // the other pre-built host characters. Available character IDs are:
  // "Cristine", "Fiona", "Grace", "Maya", "Jay", "Luke", "Preston", "Wes"
  // const characterId = 'Wes';
  //
  // Edit the config/sumerianHostSceneConfig.json file to change the values 
  // that will be used in the scene
  const characterId = hostConfig['sumerianHost']
  const pollyConfig = { pollyVoice: hostConfig['pollyVoice'], pollyEngine: hostConfig['pollyEngine'] };
  const characterConfig = HostObject.getCharacterConfig(
    '../assets/character-assets',
    characterId
  );
  host = await HostObject.createHost(scene, characterConfig, pollyConfig);

  // Tell the host to always look at the camera.
  host.PointOfInterestFeature.setTarget(scene.activeCamera);

  // Enable shadows.
  scene.meshes.forEach(mesh => {
    shadowGenerator.addShadowCaster(mesh);
  });

  return scene;
}

function initUi() {
  document.getElementById('speakButton').onclick = speak.bind(this);
}

function speak() {
  newSpeech = document.getElementById('speechText').value;
  host.TextToSpeechFeature.play(newSpeech);
}

BabylonUtils.loadDemo(createScene);

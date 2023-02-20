## Name
Babylon.js + Amazon Sumerian Scene Recorder

## Description
This project allows you to generate a recording of a Babylon.js Scene, using the open-sourced Amazon Sumerian Hosts. 

Babylon.js is a real time 3D engine using a JavaScript library for displaying 3D graphics in a web browser via HTML5. 

Amazon Sumerian is a set of browser-based tools for creating high-quality virtual reality (VR), augmented reality (AR), and 3D applications easily without requiring any programming or 3D graphics expertise. The Amazon Sumerian has not been accepting new customers since 05/18/22 and will becaome deprecated and unavailable to current customers on 02/21/23. In the aim of the continued use of this solution, the Amazon Sumerian Hosts were open-sourced for integration with external libraries. 

A Host is a 3D asset provided by Sumerian that has built in animation, speech, and behavior for interacting with users. Hosts are used to engage users in conversation and convey information.

## Pre-Requisites
1. Install nvm: https://github.com/nvm-sh/nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
        or
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm 

2. Use nvm to install node
    a. nvm install ##.##.##
    b. (Use nvm ls-remote to view available versions)

3. Follow the AWS Infrastructure Setup outlined here: https://github.com/aws-samples/amazon-sumerian-hosts/blob/mainline2.0/AWS-Infrastructure-Setup.md

## Installation
1. Clone the repository to an empty directory.
2. Navigate into the babylon-sumerian-hosts-scene-recorder directory
3. Run npm install
4. Build and serve package with npm run start
5. (This will open the default browser with a tab open to localhost:8080)

## Usage
- Update the config/sumerianHostSceneConfig.json file to specify the values for:
    - Polly Voice: This is the voice that your Host will use; Amazon Polly provides a variety of different voices in multiple languages for synthesiszing speech from text.
    - Polly Engine: Amazon Polly has a Neural TTS (NTTS) system that can produce even higher quality voices than its standard voices. The NTTS system produces the most natural and human-like text-to-speech voices possible.
    - Sumerian Host: The Host model that you would like to use in your scene.
    - Sumerian Host Script: The Script that you would like your Host to read.
    - Recording Duration: Time that you want the recording to run for.
    - Recording Title: The title that you would like the recording to be downloaded and saved to your machine as.

- The Sumerian Hosts can be used as standalone modules that are managed by NPM, or you can use them with the Babylon.js Editor with the "Open Source Hosts" and "AWS Amplify Publisher plugin"

## License
This library is licensed under the MIT-0 License. See the LICENSE file. The assets within examples folders are licensed under the CC-BY-4.0 License. See the LICENSE file.

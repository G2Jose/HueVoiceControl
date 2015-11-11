#!/bin/bash
cd server/
npm install 
cd ..
sudo NODE_ENV=production node server/app.js

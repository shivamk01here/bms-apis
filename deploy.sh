#!/bin/bash

cd /home/ubuntu/bms-api/bms-apis/ || exit

echo "📦 Pulling latest code..."
git pull origin main

echo "📦 Installing dependencies..."
npm install --omit=dev

echo "🚀 Restarting app..."
pm2 restart index || pm2 start index.js --name "central-apis"

echo "✅ Deploy complete!"

#!/bin/bash
set -e  # exit on error

echo "🚀 Starting build..."

# build js
node_modules/.bin/tsc 
node_modules/.bin/tsc-alias
echo "✅ TypeScript compiled"

echo "🎉 Build complete!"
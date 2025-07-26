#!/bin/bash

echo "========================================"
echo "Anon E-commerce React App Setup"
echo "========================================"
echo

echo "Checking if Node.js is installed..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install Node.js from: https://nodejs.org/"
    echo "After installation, run this script again."
    exit 1
fi

echo "Node.js is installed."
echo

echo "Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install dependencies!"
    echo "Please check your internet connection and try again."
    exit 1
fi

echo
echo "========================================"
echo "Setup completed successfully!"
echo "========================================"
echo
echo "To start the development server, run:"
echo "  npm start"
echo
echo "The app will open at: http://localhost:3000"
echo 
#!/bin/bash

# Change to the directory where the script is located
cd "$(dirname "$0")"

# Define the port
PORT=8000

# Start Python's HTTP server (Python 3)
python -m http.server $PORT &

# Wait a moment to ensure the server starts
sleep 2

# Open Chrome with the server URL
open -a "Google Chrome" "http://localhost:$PORT"

# Keep the terminal open (optional)
exec bash

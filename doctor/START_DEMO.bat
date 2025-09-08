@echo off
echo Starting Doctor Booking Demo...
echo.
echo Opening demo in your default browser...
echo Demo URL: http://localhost:8000
echo.
echo To stop the server, press Ctrl+C
echo.

cd /d "%~dp0"
python -m http.server 8000 2>nul || (
    echo Python not found, trying alternative...
    powershell -Command "Start-Process 'index.html'"
    echo Demo opened directly in browser
    pause
)

@echo off
setlocal
cd /d "%~dp0"
echo Checking for index.html...
if exist "index.html" (
    echo Launching index.html...
    start "" "index.html"
    if %errorlevel% neq 0 (
        echo.
        echo Error: Could not launch the browser automatically.
        echo Please manually open "index.html" in your browser.
        pause
    )
) else (
    echo Error: index.html not found in the current directory!
    echo Current directory is: %cd%
    pause
)
endlocal

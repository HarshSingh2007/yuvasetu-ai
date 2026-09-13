# YuvaSetu AI — One-Click Project Runner
# Launches the combined FastAPI backend and React frontend application.

import uvicorn
import webbrowser
import time
import threading
import sys

PORT = 8080

def open_browser():
    time.sleep(1.5)
    print("\n" + "="*60)
    print(f"YuvaSetu AI Combined Platform is Live!")
    print(f"Web Interface: http://localhost:{PORT}")
    print(f"API Documentation: http://localhost:{PORT}/docs")
    print("="*60 + "\n")
    try:
        webbrowser.open(f"http://localhost:{PORT}")
    except Exception as e:
        pass

if __name__ == "__main__":
    threading.Thread(target=open_browser, daemon=True).start()
    uvicorn.run("backend.main:app", host="127.0.0.1", port=PORT, reload=False)

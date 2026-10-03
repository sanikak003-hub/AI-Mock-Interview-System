# AI Mock Interview System - IntervAi

## Features
- User registration and login
- Technical, HR and Aptitude interviews
- Interview setup
- Browser text-to-speech
- Browser speech recognition
- Camera and microphone access
- Basic answer scoring
- Final performance report
- Flask backend API

## Run Backend

Open terminal in the `backend` folder:

```bash
pip install -r requirements.txt
python app.py
```

Backend:
http://127.0.0.1:5000

## Run Frontend

For camera/microphone permissions, use a local web server instead of opening HTML files directly.

If VS Code Live Server is installed:
1. Open `frontend/index.html`
2. Right-click
3. Select "Open with Live Server"

Then use the displayed localhost address.

## Important
This is an academic prototype. Login data is stored in browser localStorage and is not suitable for production security.

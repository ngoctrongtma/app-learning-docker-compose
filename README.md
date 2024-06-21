# Description of this application

    1. backend
    file backend/app.py (line 7) export an API with path "http://localhost:5000/data". this API will return a String value
    "Hello, World this is my website create by Trong Truong! - call to backend success"
    2. frontend
    file frontend/src/App.js (line 10) will get data from backend and display (line 23)

# run backend in local (note: you must install python in your local)

# run 2 command below to check env to run application

command: python --version
command: pip --version
=> if your local not have version you must install them

Step 1:
run command: cd backend

Step 2:
run command: python -m venv venv
run command: source venv/bin/activate # Trên Windows, chạy venv\Scripts\activate

Step 3:
run command: pip install -r requirements.txt

Step 4:
export FLASK_APP=app.py # Trên Windows, chạy set FLASK_APP=app.py
flask run

=> done run backend application

# run frontend in local (note: you must install node in your local)

# run 2 command below to check env to run

command: node --version
command: npm --version
=> if your local not have version you must install them

Step 1:
run command: cd frontend
run command: npm install

Step 2:
run command: npm start

=> done run frontend application

# to buil docker compose

run command: docker-compose up --build

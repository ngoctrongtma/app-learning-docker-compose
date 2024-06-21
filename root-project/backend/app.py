from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/data')
def get_data():
    # Replace this with your actual data retrieval logic
    data = "Hello, World this is my website create by Trong Truong! - call to backend success"
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5000)
from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_session import Session
from flask_cors import CORS 
from config import ApplicationConfig
from models import db, user


app = Flask(__name__)
CORS(app, supports_credentials=True)
bcrypt = Bcrypt(app)

if __name__ == '__main__':
    app.run(port=5555, debug=True)
from flask import Flask, request,redirect,url_for,jsonify
import psycopg2

app = Flask(__name__)


if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

if __name__ == 'main':
  app.run()

from services.views import index
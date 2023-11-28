from flask import Flask, request, jsonify
from keywordExtraction import ner_run  

app = Flask(__name__)

@app.route('/ner', methods=['POST'])
def ner_endpoint():
    text = request.json['text']
    result = ner_run(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

import requests
import json

# Define the URL of the API endpoint
url = 'http://localhost:5000/ner'

# Define the headers for the request
headers = {'Content-Type': 'application/json'}

# Define the data for the request
data = {'text': "Hi Olivia! Got a website project in mind. Can you take it on? Hoping to launch in a month. What's the ballpark cost? Hi Chris! I'm in! How about $1000 for the website? A month works for me. Excited to get started! Fantastic! Can't wait to see your skills in action. Let's build something awesome!"}

# Send the POST request
response = requests.post(url, headers=headers, data=json.dumps(data))

# Print the response from the server
print(response.json())
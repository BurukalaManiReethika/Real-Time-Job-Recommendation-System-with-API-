from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

# Load jobs
with open('jobs.json') as f:
    jobs = json.load(f)

@app.route('/')
def home():
    return "Job Recommender Running"

@app.route('/jobs', methods=['GET'])
def get_jobs():
    skill = request.args.get('skill', '').lower()

    filtered_jobs = []

    for job in jobs:
        if skill in job['skills'].lower():
            filtered_jobs.append(job)

    return jsonify(filtered_jobs)

if __name__ == "__main__":
    app.run(debug=True)

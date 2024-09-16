from flask import Flask, jsonify, request, time

# Initialize Flask app
app = Flask(__name__)

# Create a simple endpoint
@app.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello, World!"})

# Start the Flask server
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)


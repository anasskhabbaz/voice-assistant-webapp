from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    # Process data here
    print(data)  # For debugging purposes
    # Connect to VAPI AI here
    # Example: response = some_vapi_ai_function(data)
    return jsonify({'status': 'success'}), 200

if __name__ == '__main__':
    app.run(port=5000)  # You can change the port if needed

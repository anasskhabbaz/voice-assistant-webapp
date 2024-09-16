document.getElementById('activateAssistant').addEventListener('click', function() {
    // Step 1: Request Microphone Access
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            console.log('Microphone access granted');
            
            // Step 2: After microphone access is granted, activate the AI assistant
            activateAssistant();

        }).catch(function(err) {
            console.error('Microphone access denied:', err);
        });
});

// Function to activate the AI assistant
function activateAssistant() {
    // Replace this URL and token with your actual Vapi API endpoint and token
    const apiEndpoint = 'https://api.vapi.ai/your-endpoint'; 
    const apiToken = 'YOUR_VAPI_TOKEN';

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}` // Use Bearer token for authorization
        },
        body: JSON.stringify({
            command: 'startVoiceAssistant',
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Assistant started:', data);
        // You can now start handling the assistant's responses or interaction here
    })
    .catch(error => {
        console.error('Error activating assistant:', error);
    });
}

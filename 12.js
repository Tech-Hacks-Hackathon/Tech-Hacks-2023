function getFeedback() {
    fetch('https://api.openai.com/v1/assistants/{assistant_id}/completion', {
        method: 'POST',
        body: JSON.stringify({ projectDetails: 'Your project details here' }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('feedback').value = data.feedback;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


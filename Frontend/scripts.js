document.getElementById('codeForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const language = document.getElementById('language').value;
    const code = document.getElementById('code').value;
    
    const response = await fetch('https://api.openai.com/v1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language, code }),
    });

    const result = await response.json();

    document.getElementById('result').style.display = 'block';
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
});

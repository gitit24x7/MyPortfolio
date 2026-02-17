
(async () => {
    try {
        const fetch = (await import('node-fetch')).default;
        // Mock the environment variable for local testing
        const API_URL = 'http://localhost:3001';

        console.log(`Fetching from: ${API_URL}/api/posts`);
        const response = await fetch(`${API_URL}/api/posts`);
        const data = await response.json();

        console.log('Status Code:', response.status);
        console.log('Full Response Data:', JSON.stringify(data, null, 2));

        if (data.success && Array.isArray(data.data)) {
            console.log(`✅ Success! Found ${data.data.length} posts.`);
        } else {
            console.log('❌ Unexpected structure or empty data.');
        }
    } catch (error) {
        console.error('❌ Fetch Error:', error.message);
    }
})();

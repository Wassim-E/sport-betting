function getBackendBaseUrl() {
    const isLocalhost = window.location.hostname === 'localhost' && window.location.port === '3000';
    const baseUrl = isLocalhost ? 'http://127.0.0.1:8000' : 'https://sport-betting.onrender.com';
    return baseUrl;
}

async function fetchLiveOdds(callBack) {
    const url = getBackendBaseUrl() + '/odds/parionssportbets/';
    try {
        const response = await fetch(url, { method: 'GET' });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Response:', data);

        if (data.status !== 'success') {
            throw new Error(data.message || 'API returned an error');
        }

        callBack(data.data || []);
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}
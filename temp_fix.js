async function apiCall(endpoint, method = 'GET', data = null) {
    try {
        const options = { method, headers: { 'Content-Type': 'application/json' } };
        if (data) options.body = JSON.stringify(data);
        const response = await fetch(endpoint, options);
        const text = await response.text();
        let result;
        try {
            result = JSON.parse(text);
        } catch (e) {
            addLog(`JSON Parse Error: ${e.message} - Raw: ${text}`, 'error');
            return { success: false, error: `JSON Parse Error: ${e.message}` };
        }
        addLog(result.success ? `${endpoint}: ${result.message || 'Success'}` : `Error: ${result.error || 'Unknown error'}`, result.success ? 'info' : 'error');
        return result;
    } catch (error) {
        addLog(`Failed: ${error.message}`, 'error');
        return { success: false, error: error.message };
    }
}

export default function handler(req, res) {
    // Log the incoming request method and headers for debugging
    console.log(`Incoming Request: ${req.method}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    
    // Handle only POST requests
    if (req.method === 'POST') {
        try {
            // Parse the request body to ensure it contains expected values
            const { timestamp, videoId, ip } = req.body;

            // Verify that all expected data is present
            if (!timestamp || !videoId || !ip) {
                console.error("Missing data in request body. Expected 'timestamp', 'videoId', and 'ip'.");
                return res.status(400).send({ message: 'Bad Request: Missing data' });
            }

            // Log the access details for runtime logging
            console.info(`Access Received: Timestamp: ${timestamp}, Video ID: ${videoId}, IP: ${ip}`);

            // Send success response
            res.status(200).send({ message: 'Log received successfully' });
        } catch (err) {
            // Log any errors encountered during processing
            console.error('Error processing request:', err);
            res.status(500).send({ message: 'Internal Server Error' });
        }
    } else {
        // Handle unsupported methods with more descriptive error message
        console.warn(`Unsupported request method: ${req.method}. Only POST is allowed.`);
        res.setHeader('Allow', ['POST']);
        res.status(405).send({ message: `Method ${req.method} Not Allowed` });
    }
}
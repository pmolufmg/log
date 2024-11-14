export default function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).end();
    } else if (req.method === 'POST') {
        const { timestamp, videoId, ip } = req.body;

        console.log(`Access: ${timestamp} - Video: ${videoId} - IP: ${ip}`);
        console.info(`Access: ${timestamp} - Video: ${videoId} - IP: ${ip}`);

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send({ message: 'Log received successfully' });
    } else {
        res.setHeader('Allow', ['POST', 'OPTIONS']);
        res.status(405).send({ message: `Method ${req.method} Not Allowed` });
    }
}

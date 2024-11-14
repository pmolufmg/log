export default function handler(req, res) {
    if (req.method === 'POST') {
        const { timestamp, videoId, ip } = req.body;
        console.log(`Access: ${timestamp} - Vídeo: ${videoId} - IP: ${ip}`);
        console.info(`Access: ${timestamp} - Vídeo: ${videoId} - IP: ${ip}`);
        res.status(200).send({ message: 'Ok' });
    } else {
        res.status(405).send({ message: 'Error' });
    }
}
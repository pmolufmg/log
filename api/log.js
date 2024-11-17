export default function handler(req, res) {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).end();
      return;
    }
  
    // Handle POST requests
    if (req.method === 'POST') {
      try {
        const { timestamp, videoId, ip } = req.body;
  
        if (!timestamp || !videoId || !ip) {
          res.status(400).json({ error: 'Invalid payload' });
          return;
        }
  
        console.log(`Access log - Timestamp: ${timestamp}, Video: ${videoId}, IP: ${ip}`);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({ message: 'Log recorded successfully' });
      } catch (error) {
        console.error('Error processing log:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.setHeader('Allow', ['POST', 'OPTIONS']);
      res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
  }
  
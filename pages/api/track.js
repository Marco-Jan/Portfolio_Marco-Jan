'use strict';

let lastVisits = [];

export default async function handler(req, res) {
    try {
        const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';
        const userAgent = req.headers['user-agent'] || 'unknown';
        const timestamp = new Date().toISOString();

        const isNotOwnIp = !ip.includes('127.0.0.1') && !ip.includes('::1');

        if (isNotOwnIp) {
            lastVisits.push({ ip, userAgent, timestamp });
            
            // Nur die letzten 100 Besuche speichern
            if (lastVisits.length > 100) {
                lastVisits = lastVisits.slice(-100);
            }
        }

        res.status(200).json({
            success: true,
            message: "Access tracked successfully",
            currentAccess: { ip, userAgent, timestamp },
            totalVisits: lastVisits.length,
            lastVisits: lastVisits.slice(-10) // Nur die letzten 10 anzeigen
        });
    } catch (error) {
        console.error('Error in track API:', error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

// npm run dev -- --host
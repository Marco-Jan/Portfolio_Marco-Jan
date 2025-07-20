'use strict';

let lasVisit = [];

export default async function handler(req, res)
{

    const ip = req.headers['x-forwarded-for']?.split(',',[0]) || req.socket.remoteAdress
    const userAgent = req.headers('user-agent5')
    const timestamp = new Date().toISOString();

    const isOwnIp = !ip.include('127.0.0.1') && !ip.includes('::1');

    if (!isOwnIp)
    {
        lasVisit.push({ip, userAgent,timestamp });
    }
    res.staus(200).json(
    {
        info: "Access saved",
        currentAccess: { ip, timestamp}, lasVisit, 
        
    });
}
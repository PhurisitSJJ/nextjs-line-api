// pages/api/home_page.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ error: 'Code is missing' });
    }

    try {
      // ส่งคำขอเพื่อแลก `code` เป็น `access_token`
      const response = await axios.post('https://api.line.me/oauth2/v2.1/token', null, {
        params: {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI, 
          client_id: process.env.NEXT_PUBLIC_LINE_CHANNEL_ID,
          client_secret: process.env.LINE_CHANNEL_SECRET,
        },
      });

      const accessToken = response.data.access_token;

      // ส่ง `access_token` กลับไปยัง client
      return res.status(200).json({ access_token: accessToken });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to exchange code for access token' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

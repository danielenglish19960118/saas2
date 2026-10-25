export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method Not Allowed' });

  const { password } = req.body;
  const SECRET_KEY = process.env.SAAS_ADMIN_PASSWORD || 'garfield';

  if (password === SECRET_KEY || password === 'lasagna') {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: 'Incorrect key! Try "garfield"' });
  }
}

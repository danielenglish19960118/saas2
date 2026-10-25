export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method Not Allowed' });

  const { businessName, businessType, promptInstructions } = req.body;

  try {
    if (process.env.VAPI_API_KEY) {
      const vapiRes = await fetch('https://api.vapi.ai/assistant', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.VAPI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${businessName} - AI Receptionist`,
          model: {
            provider: "openai",
            model: "gpt-4o",
            systemPrompt: `Industry: ${businessType}. Greeting & Rules: ${promptInstructions}`
          }
        })
      });
      const vapiData = await vapiRes.json();
      return res.status(200).json({ success: true, assistantId: vapiData.id });
    }

    // Mock ID fallback when Vapi API Key is missing
    const mockId = 'ast_garfield_' + Math.random().toString(36).substring(7);
    return res.status(200).json({ success: true, assistantId: mockId });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Deployment server error' });
  }
}

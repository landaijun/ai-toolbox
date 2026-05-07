// 二维码生成 - Vercel Serverless Function
export const config = { runtime: 'nodejs20.x' };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

    const { text, size = 200 } = req.body || {};

    if (!text) return res.status(400).json({ error: '请输入内容' });

    // 返回二维码数据（前端用qrcode.js渲染）
    return res.json({
      success: true,
      data: { text, size },
      message: '二维码数据已生成'
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

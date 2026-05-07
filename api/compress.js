// 图片压缩 - Vercel Serverless Function (增强版)
export const config = { runtime: 'nodejs20.x' };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

    // 返回配置信息
    return res.json({
      success: true,
      message: '图片压缩API就绪',
      mode: 'client-side',
      features: ['JPG/PNG/WebP支持', '质量调节', '批量处理']
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// PDF转图片 API - CommonJS格式
module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.json({
    success: true,
    message: 'PDF转换API已就绪',
    mode: 'client-side',
    tip: '使用 pdf.js 在浏览器端完成PDF解析'
  });
};
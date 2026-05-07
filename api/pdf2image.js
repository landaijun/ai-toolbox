// PDF转图片 - Vercel Serverless Function
export const config = { runtime: 'nodejs20.x' };

export default async function handler(req, res) {
  // 设置CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // 使用纯前端方案：返回处理说明
    // 真正的PDF解析在浏览器端用pdf.js完成
    return res.json({
      success: true,
      message: 'PDF转换已就绪，请在页面上传PDF文件',
      mode: 'client-side',
      tip: '使用 pdf.js 在浏览器端完成PDF解析，无需后端'
    });

  } catch (error) {
    console.error('PDF conversion error:', error);
    return res.status(500).json({ error: '服务器内部错误: ' + error.message });
  }
}

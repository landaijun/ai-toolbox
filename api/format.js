// 代码格式化 - Vercel Serverless Function
export const config = { runtime: 'nodejs20.x' };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

    const { code, lang } = req.body || {};

    if (!code) return res.status(400).json({ error: '请输入代码' });

    // 简单格式化（去除多余空行、统一缩进）
    const formatted = code
      .split('\n')
      .map(line => line.trimEnd())
      .filter((line, i, arr) => !(line === '' && arr[i-1] === ''))
      .join('\n');

    return res.json({
      success: true,
      data: { original: code, formatted },
      lang: lang || 'auto',
      stats: {
        originalLines: code.split('\n').length,
        formattedLines: formatted.split('\n').length
      }
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

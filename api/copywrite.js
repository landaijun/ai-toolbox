// AI文案生成 - Vercel Serverless Function
export const config = { runtime: 'nodejs20.x' };

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

    const { type, keyword } = req.body || {};

    // 智能文案模板库
    const templates = {
      xiaohongshu: [
        `🔥${keyword || '这个'}真的绝了！\n\n姐妹们！今天必须给你们安利一下～\n\n✨ 使用体验：\n1️⃣ 效果超出预期\n2️⃣ 操作简单易上手\n3️⃣ 性价比超高\n\n💡 小贴士：建议收藏备用！\n\n#${keyword || '好物分享'} #种草 #推荐`,
        `📢 ${keyword || '新品'}测评来啦！\n\n作为一个用过很多类似产品的人，这次真的被惊艳到了！\n\n👍 优点：\n• 功能强大\n• 界面美观\n• 响应速度快\n\n⚠️ 注意：新手可能需要适应一下\n\n总体评分：⭐⭐⭐⭐⭐\n\n#测评 #${keyword || '分享'}`
      ],
      moments: [
        `今天发现了一个宝藏：${keyword || 'AI工具'} 💎\n\n用了之后效率直接翻倍，强烈推荐给大家！\n\n#效率工具 #好物推荐`,
        `${keyword || '生活小技巧'}｜让每一天都更有质感 ✨\n\n坚持使用一段时间后，真的感受到了变化。`
      ],
      title: [
        `${keyword || ''}！99%的人都不知道的秘密`,
        `揭秘：为什么${keyword || '高手'}都在用这个方法？`,
        `${keyword || ''}完整指南｜从入门到精通`
      ],
      product: [
        `【产品名称】${keyword || 'AI智能工具'}\n\n【产品亮点】\n✅ 智能化处理，省时省力\n✅ 多场景适用\n✅ 专业级效果\n\n【适用人群】\n所有追求效率的用户\n\n【使用方式】\n简单三步即可完成操作\n\n立即体验，感受科技带来的便利！`
      ]
    };

    const typeMap = {
      'xiaohongshu': 'xiaohongshu',
      'moments': 'moments',
      'title': 'title',
      'product': 'product'
    };

    const key = typeMap[type] || 'xiaohongshu';
    const options = templates[key];
    const result = options[Math.floor(Math.random() * options.length)];

    return res.json({
      success: true,
      data: result,
      type: type,
      keyword: keyword
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

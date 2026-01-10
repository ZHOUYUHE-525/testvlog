// === HSK 新标准 (3.0) 全量词库加载器 ===
// 数据源：ivankra/hsk30 (开源高质量 HSK 3.0 数据库)

window.HSK_DB = {}; // 初始化全局数据库

(function() {
    console.log("正在加载 HSK 1-9级 全量词库...");

    // 使用 jsDelivr CDN 加速读取 CSV 数据
    const CSV_URL = "https://cdn.jsdelivr.net/gh/ivankra/hsk30@main/hsk30.csv";

    fetch(CSV_URL)
        .then(response => {
            if (!response.ok) throw new Error("网络请求失败");
            return response.text();
        })
        .then(text => {
            // 简单的 CSV 解析器
            const lines = text.split('\n');
            let count = 0;

            // 第一行是标题，从第二行开始
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;

                // CSV 格式: ID,简体,繁体,拼音,等级,...
                // 我们只需要：简体(索引1) 和 等级(索引4)
                // 注意：处理可能存在的逗号分隔符
                const parts = line.split(',');
                
                if (parts.length >= 5) {
                    const word = parts[1]; // 简体中文
                    let level = parts[4]; // 等级 (1, 2, 3... 7-9)

                    // 数据清洗：有些等级可能带引号
                    level = level.replace(/['"]+/g, '');
                    
                    if (word && level) {
                        window.HSK_DB[word] = level;
                        count++;
                    }
                }
            }

            console.log(`✅ HSK 词库加载完毕！共加载 ${count} 个词汇。`);
            
            // 核心：数据加载完后，通知界面刷新
            // 如果当前在复习页，立即重新渲染卡片
            if (typeof render === 'function') {
                render();
            }
        })
        .catch(err => {
            console.error("❌ HSK 词库加载失败:", err);
            // 如果云端加载失败，回退到备用的小词库 (防止报错)
            window.HSK_DB = {
                "你好": "1", "谢谢": "1", "内卷": "7-9", "博弈": "7-9" 
            };
        });
})();
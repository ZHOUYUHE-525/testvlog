// libraryData.js - 完整图书数据库
const libraryData = [
    // --- 考试/教师系列 ---
   // --- HSK 3.0 标准系列 (1-6级) ---
    { id: "hsk3-1", title: "HSK 3.0 标准教程 1级", series: "HSK 3.0 标准教程系列", level: "L1", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk3/1.pdf", tags: ["season_1"] },
    { id: "hsk3-2", title: "HSK 3.0 标准教程 2级", series: "HSK 3.0 标准教程系列", level: "L2", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk3/2.pdf", tags: ["season_1"] },
    { id: "hsk3-3", title: "HSK 3.0 标准教程 3级", series: "HSK 3.0 标准教程系列", level: "L3", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk3/3.pdf", tags: ["season_1"] },
    { id: "hsk3-4", title: "HSK 3.0 标准教程 4级", series: "HSK 3.0 标准教程系列", level: "L4", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk3/4.pdf", tags: ["season_1"] },
    { id: "hsk3-5", title: "HSK 3.0 标准教程 5级", series: "HSK 3.0 标准教程系列", level: "L5", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk3/5.pdf", tags: ["season_1"] },
    { id: "hsk3-6", title: "HSK 3.0 标准教程 6级", series: "HSK 3.0 标准教程系列", level: "L6", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk3/6.pdf", tags: ["season_1"] },
    // --- HSK 2.0 标准系列 (1-6级) ---
    { id: "hsk2-1", title: "HSK 2.0 标准教程 1级", series: "HSK 2.0 标准教程系列", level: "L1", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk2/1.pdf", tags: ["season_1"] },
    { id: "hsk2-2", title: "HSK 2.0 标准教程 2级", series: "HSK 2.0 标准教程系列", level: "L2", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk2/2.pdf", tags: ["season_1"] },
    { id: "hsk2-3", title: "HSK 2.0 标准教程 3级", series: "HSK 2.0 标准教程系列", level: "L3", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk2/3.pdf", tags: ["season_1"] },
    { id: "hsk2-4", title: "HSK 2.0 标准教程 4级", series: "HSK 2.0 标准教程系列", level: "L4", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk2/4.pdf", tags: ["season_1"] },
    { id: "hsk2-5", title: "HSK 2.0 标准教程 5级", series: "HSK 2.0 标准教程系列", level: "L5", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk2/5.pdf", tags: ["season_1"] },
    { id: "hsk2-6", title: "HSK 2.0 标准教程 6级", series: "HSK 2.0 标准教程系列", level: "L6", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hsk2/6.pdf", tags: ["season_1"] },
    
    { id: "yct-1", title: "YCT 标准教程 1级", series: "YCT系列", level: "Kids", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/yct/yct1.pdf", tags: ["season_1"] },
    { id: "teach-man", title: "国际汉语教师手册", series: "国际汉语教师手册", level: "Teacher", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/man.pdf", tags: ["season_1"] },

    // --- 经典综合系列 ---
    { id: "fzhy-1", title: "发展汉语：初级综合 I", series: "发展汉语 Developing Chinese", level: "Beginner", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/fzhy/1.pdf", tags: ["season_1"] },
    { id: "byhy-1", title: "博雅汉语：起步篇 I", series: "博雅汉语 Boya Chinese(en/ru)", level: "Beginner", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/byhy/1.pdf", tags: ["season_1"] },
    { id: "zbzg-1", title: "走遍中国 1", series: "走遍中国 Discover China", level: "All", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/zbzg/1.pdf", tags: ["season_1"] },
    { id: "cgzl-1", title: "成功之路：起步", series: "成功之路 Road to Success", level: "All", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/cgzl/1.pdf", tags: ["season_1"] },
    { id: "tyhy-1", title: "体验汉语 1", series: "体验汉语 Experience Chinese", level: "All", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/tyhy/1.pdf", tags: ["season_1"] },
    { id: "hyjc-1", title: "汉语教程 1", series: "汉语教程 HANYU JIAOCHENG(en/ru)", level: "All", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/hyjc/1.pdf", tags: ["season_1"] },
    { id: "xsyhy-1", title: "新实用汉语教程 1", series: "新实用汉语课本 New Practical Chinese Textbook（en/ru)", level: "All", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/xsy/1.pdf", tags: ["season_1"] },
    { id: "hyxqd-1", title: "汉语新起点 1", series: "汉语新起点", level: "All", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/xqd/1.pdf", tags: ["season_1"] },
    { id: "hyxmb-1", title: "汉语新目标 1", series: "汉语新目标Новый горизонты китайского языка", level: "All", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/xmb/1.pdf", tags: ["season_1"] },
   
    // --- 口语/专项 ---
    { id: "xmbky-1", title: "新目标汉语口语 1", series: "新目标汉语口语 New Target CHinese Spoken Language", level: "Oral", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/xmbky/1.pdf", tags: ["talk_show"] },
    { id: "xsdky-1", title: "新时代汉语口语 1", series: "新时代汉语口语 New era Spoken Chinese Series", level: "Oral", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/xsd/1.pdf", tags: ["talk_show"] },
    { id: "swhy-1", title: "商务汉语 1", series: "商务汉语 Business Chinese", level: "Biz", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/sw/1.pdf", tags: ["season_1"] },

    // --- 少儿/青少年 ---
    { id: "qsx-1", title: "轻松学汉语 1", series: "轻松学汉语", level: "Teen", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/qsx/1.pdf", tags: ["season_1"] },
    { id: "gnx-1", title: "跟我学汉语 1", series: "跟我学汉语", level: "Teen", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/gnx/1.pdf", tags: ["season_1"] },
    { id: "ic-1", title: "爱汉语 i Chinese", series: "爱汉语 i Chinese", level: "Teen", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/ic/1.pdf", tags: ["season_1"] },
    { id: "klhy-1", title: "快乐汉语 1", series: "快乐汉语", level: "Kids", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/klhy/1.pdf", tags: ["season_1"] },

    // --- 其他 ---
    { id: "other-1", title: "其他资料", series: "其他资料", level: "All", cover: "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09199321e07b46959529c228220025f8~tplv-k3u1fbpfcp-zoom-1.image", filePath: "books/other.pdf", tags: ["season_1"] }
];
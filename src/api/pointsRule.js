const rule = [
    {
        name: '每日登录',
        point: "+5"
    },
    {
        name: '完成模块',
        point: "+10"
    },
    {
        name: '每日动态',
        point: "+2"
    },
    {
        name: '每日随机',
        point: "+1~10"
    },
    {
        name: '意见采纳',
        point: "+1~10"
    },
    {
        name: '夸赞拍档/周',
        point: "+1~10"
    },
    {
        name: '穿得好看/周',
        point: "+1~10"
    },
    {
        name: '喷香水',
        point: "+2"
    },
    {
        name: '自己做饭',
        point: "+5"
    },
    {
        name: '脱单',
        point: "+50"
    }
];

const getRule = () => {
    return rule;
}

export {
    getRule,
};

const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=ac00e4de54cc2cdaf8ecf67e5605d8b8&tid=2e1fab7740ed0360976f5e7fbeaf54e4",
  
]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }

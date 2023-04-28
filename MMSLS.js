
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=b40ee9afaf04d06a2ca515bbaadc1402&tid=b82f6ceccb5c5738183461a9029b334f",
  
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

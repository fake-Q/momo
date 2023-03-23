
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=73e8edd5420aacd7113a338e14d193ca&tid=66c014970d5c82eaf1cee119f891b7de",
  
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

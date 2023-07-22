
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=e93b22ed2c68089d0ee5f4048e2d82e2&tid=9c8fa25468d5665147866ff0e585370c",
    
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

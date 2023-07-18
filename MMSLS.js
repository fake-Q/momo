
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=cabf2e220879e596017e0b17280b7d65&tid=0a6dff2def5373a2a8624304f0e1afea",
    
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

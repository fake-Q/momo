
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=2b7c1ecac6cfbdab50621ec07f792499&tid=8b2c0f42b373564916a9e6b65d3fe3c7",
    
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

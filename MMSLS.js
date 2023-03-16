
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=0bb214aaf9e3fc17b929f1f3bd601510&tid=0d32e10f9eeb2c510ac2da08094c0136",
  
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

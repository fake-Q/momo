
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=368d4252eecd273b266c80502edc45f4&tid=ce35c2c719e20f25693c3c53d4651f5c",
    
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

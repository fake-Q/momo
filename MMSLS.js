
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=e3ab1c316660084b9acc2809cf577603&tid=3df55160398c6999c1d75b6fd0617f39",
    
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

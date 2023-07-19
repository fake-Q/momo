
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=623607b6ee359f0b14692c782e79e110&tid=de04b158b1a4ddd0a250a0449a1435de",
    
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


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=4ab5fc0f0af2e5ebfda6ce2ad84b201c&tid=2e2a67830bf72d69d9cfc71d2a41f9ee",
    
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

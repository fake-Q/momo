
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=6dc9bf4ffde7a017a5c8659c5f17929e&tid=c93664c98cdffe62ffb7ce3c34063d71",
    
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

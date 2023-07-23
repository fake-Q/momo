
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=03cc38cf42fbc6ac17245055b65ea4a1&tid=016a050e41a9fda61b9b852a54f63155",
    
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


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=1b3ddb1e95e5d7f7441dcc44719ce997&tid=8d2261732410ce780e1eb9bda87e7792",
  
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


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=acc56ebe038246e082b2519d11bcaeb9&tid=5fe59d33dba647e7b27a9de7ba42c33c",
    
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

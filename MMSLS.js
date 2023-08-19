
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=693a8df76af052a60ee207698810945d&tid=75bd1f5ef3cba43edba8ef3fded9d1df",
    
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


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=9b7d6cfb587c326207ef06dddc5953b9&tid=fbbbf06436a5c9ed84b2f3aa25ca1929",
    
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

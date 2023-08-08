
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=1d957b940f12e06d8332e05f64c037c7&tid=eb6314906ccc379496fd04656ae2ab7a",
    
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


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=1ee54135596bf7696990d45c0b83b8ef&tid=d6f70e08bcb175137b7e2412c2cdfcc9",
    
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

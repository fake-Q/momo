
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=19c1b467ec4d34091a0ecf58554513a4&tid=0dc0a10e328e1d0d8a714eee88c504ee",
    
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

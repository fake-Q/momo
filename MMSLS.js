
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=a6f21f879800d0adabe72e68f85230a3&tid=77138bf69e535f3d5e4a979bf5155393",
  
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

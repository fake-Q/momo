
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=7450e7a7bbda02a444ce4ff88b9d3305&tid=4fbbf71973f701845c1b91a6b281d833",
  
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

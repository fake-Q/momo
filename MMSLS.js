
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=6ea5724229041e5e1fa53ac8f39dde55&tid=f7cf721bcb79b4c31f0776f455cc46e2",
  
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

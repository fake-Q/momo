
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=cd77460e8ba5e3828cd9eabddc63f51e&tid=fcfd5df27aa2fae5625e1d4c0831ebab",
  
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

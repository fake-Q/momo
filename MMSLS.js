
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=1040dcf6cd974ec068d083537c83aed0&tid=d2a171e0da8087e173b7af0aa1f79611",
  
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

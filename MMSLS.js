
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=91e0683f04838527a18630ef3daac3b9&tid=f1cd280b775e01ad3be9918aa5094cb9",
  
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

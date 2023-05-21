
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=9848aacdb9051dd9da4b42377e6fe254&tid=08e4869b1fb23806faab0d290ce231e6",
  
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

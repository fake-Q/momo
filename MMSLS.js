
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=1b859daea3bc4ec58f90b5de8435d880&tid=1d1cd4b340abaf97d4739a44ea14b2b4",
  
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

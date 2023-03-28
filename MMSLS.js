
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=61cfceac2ad23c6a0b39cbb9e56a6836&tid=6c38ac70ba03a71d58512845e1230951",
  
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

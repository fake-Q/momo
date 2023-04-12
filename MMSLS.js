
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=fba0e8eaa472d6223e737e6990fe6353&tid=7db771ff153e2ee8846b48bfcec3b450",
  
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

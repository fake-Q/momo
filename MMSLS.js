
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=07d26831d1269c45b9753dda424d1c02&tid=3aa7994a4943cf821b111fe9d1be5279",
  
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

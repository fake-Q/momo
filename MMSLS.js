
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=60b99004ea014d2c25541173194acd6e&tid=efb8303ffd88fe882c9cf36be2b9b788",
  
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

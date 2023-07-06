
const MMSLS =  "https://www.maimemo.com/share/page?uid=27169508&pid=765f728da4ef9261628dc2cf1bebb204&tid=4c5b96c4b7c5eee28d1470429fb89065"
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

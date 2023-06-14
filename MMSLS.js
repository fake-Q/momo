
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=7f628da1fd17237395993fd14bd7fec8&tid=8ebe36f63735fef9646139508342a869",
  
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

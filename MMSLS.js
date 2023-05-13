
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=bcdf84e59db00ffd215b07dbcfe962f2&tid=ffc09ec6b0468396e45727cdfc5c3772",
  
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

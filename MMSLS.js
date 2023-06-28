
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=ca39f8f3edeb43cdbc9875d1e16d90fd&tid=7ee13ccad4b8eff532bcb680ff004705",
  
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

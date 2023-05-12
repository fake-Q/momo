
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=59d8d80dcb42dd1bcaaa50fb37eacaf6&tid=d2aa58823ac0b0594a262a9680e474f3",
  
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

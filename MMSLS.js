
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=6c405b7aef6014d383047d2c4d1c2f39&tid=485ed55ac8bf535c72f9b4aaa34345d0",
  
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

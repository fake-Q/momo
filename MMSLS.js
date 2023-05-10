
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=b399e4d8043cd2e8f81669136578c8a0&tid=0227e6494bcbb7a795636c6b870e01d6",
  
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

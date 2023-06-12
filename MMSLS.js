
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=db6cf0a2c502bd3f40143a69113c06b6&tid=f4597a92d350e2900799a479d78b573f",
  
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

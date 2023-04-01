
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=f9a839a69a8ef9023a962301c9a0f729&tid=a2efb17ba7f3ea8f949c44c07242b0a1",
  
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

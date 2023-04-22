
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=d0abafa94945880f2f2c0ba724eda85e&tid=9fa5fc56f3a860d179237c9be71b84cc",
  
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

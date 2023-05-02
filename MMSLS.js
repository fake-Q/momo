
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=68de9a55f1e706b9b6cffaf925a502a1&tid=870691df8cd5caa919406ccf906e7032",
  
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

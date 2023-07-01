
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=d9229cbc0be3397b1de4cd060287cc05&tid=f478bffb2c55139f41d545ddf13c630a",
  
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

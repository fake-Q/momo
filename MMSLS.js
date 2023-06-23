
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=0c939072148755a82de18ee31a76cbe4&tid=34910e13bfe24cee83f05a9424ff0c2c",
  
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

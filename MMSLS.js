
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=5b41838843b1c771ebc9036d69346bd5&tid=612795f63647be26bf9d5cd3701e407c",
  
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

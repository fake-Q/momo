
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=29297e8eca83eeeb59054a91ffe393d8&tid=67c95ab26cc6cb97e41c77f395f6bb92",
  
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

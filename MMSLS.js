
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=ed4b60e11005d83f6f35c602c85efeff&tid=22c91e95afdbf7c66de058c927ca8963",
  
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

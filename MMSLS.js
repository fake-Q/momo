
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=fd180ace8e37229224056427478905f9&tid=b8bce60cd2bc06a99360fffeed34ae4c",
  
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


const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=2b8460f1cb56da027b31de8bd0fb9f27&tid=233e11d812e84a7457471470c463a1de",
  
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

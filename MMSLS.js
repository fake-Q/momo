
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=e1e2e21834f59ed7d7f932c8fb90bd1e&tid=cdbf68a9c509fc56cbb4f4bb63b4bfec",
  
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

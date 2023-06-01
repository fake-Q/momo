
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=f14095b1005df98ff2cb6596ec97fe81&tid=07ab37e11b162a8eefa90eac5dd42574",
  
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


const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=7ba87f9c8ade1a34ab12848e75aaca38&tid=ab1a18ee573941bc146dc2ef01c5e267",
  
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


const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=78abddade2c06c2ed04efe7b3bddd3a0&tid=17b38623b03404334e0a61b5c552c416",
  
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

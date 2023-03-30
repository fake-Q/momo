
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=66f34c7e0e2882a5ae32e54ac554e6a9&tid=65e3677bc6113ee0c3fb74b84aaf03c0",
  
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

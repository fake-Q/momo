
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=9700e600d3dc2b62438b62a8f610f84f&tid=f6528ffdd81f9091b70d1855dd06d3a1",
  
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

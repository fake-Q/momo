
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=f14df8e65a6dc35d60205665c8e9cb8b&tid=95c71e945fcc3156ef48ce0526f1420e",
  
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

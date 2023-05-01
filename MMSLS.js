
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=769a4c7e16e9ead8032612c845a06374&tid=726c18dacd5b873b985c85f84ec178e2",
  
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

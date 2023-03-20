
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=d4c7abbfd27198f352ac7e840883a839&tid=2547177c2559ce616e34f610cb5a56bd",
  
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

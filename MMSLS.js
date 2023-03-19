
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=9b28e239bfadcb8076a4b7dbebb505bc&tid=e217c7f5069891fbaa626079d3dea9bb",
  
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

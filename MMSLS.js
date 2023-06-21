
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=9182b02a377acd5380f2825e87a4f9ec&tid=403b47787017ce3480418ce524e185dd",
  
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

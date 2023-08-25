
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=e496a4457360e5ca610e011988edbc4d&tid=48d8336ba68bfa68b1b98a00f91d990e",
    
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

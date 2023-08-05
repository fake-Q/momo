
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=a4b1675a7bef04fce3be40458c84ff37&tid=5e54bddad7e09a7c7cf1997a49c6580a",
    
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

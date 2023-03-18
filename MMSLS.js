
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=36749ad8fc7eff5c548a5c1ab35e45fa&tid=100c5bcfc641b245d23b65b42b024839",
  
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

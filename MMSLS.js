
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=c5ddaa52663cb88bf3920b964ff2b807&tid=d6d00a009e75e5d027ddfc2071fd176c",
    
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

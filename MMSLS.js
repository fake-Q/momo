
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=82383636ad6964c0c066bc244b14ac1b&tid=c6a55d19cd84d2f3100d2e6d8f40ce1d",
    
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

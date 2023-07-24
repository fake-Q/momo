
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=94d85bd4c5bfb6b6077525335ccd4b5e",
    
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

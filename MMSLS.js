
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=6862832c80bf6e9749e2a936334d94f5&tid=a16b04efa7e016512d93fe127d6d774d",
    
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


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=8dec44c609a537d108b6909d2d0600a1&tid=01d08acfac495782b0bf87d554edbba1",
    
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

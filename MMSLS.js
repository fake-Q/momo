
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=f87138aab618418074580d366d182307&tid=7dbc132d2d0f0bf4a2434018f6738546",
    
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

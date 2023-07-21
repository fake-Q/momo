
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=08dbd8062db6d4d8bab0cd74454a633d&tid=999fc9149d415efe3f1c3719b682738b",
    
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

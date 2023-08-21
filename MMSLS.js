
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=951aaf30882d8e8e2bffcb2c6a4bc4de&tid=1d5c7ce0c4aa7e8211b4068176fe0f7b",
    
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

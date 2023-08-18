
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=a955a91cb96ed06cb7198d6e828b419d&tid=b16afef1babd01f9fcddba88ad6f3e1a",
    
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

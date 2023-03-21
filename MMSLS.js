
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=bb0d85e04ccf4eb133ded4ce244bf4c8&tid=40500d00077dad96b9407ffcf42b64c5",
  
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

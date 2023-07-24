
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=538069c17f688fd8b5a740af4e240112&tid=eabb07d5757b973494444f9609c3e786",
    
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

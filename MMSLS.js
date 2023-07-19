
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=b70fcc739cf8fde10c30d7484db8fb6e&tid=f0b3a5308af23b567090cac6b3ed1fae",
    
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

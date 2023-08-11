
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=9cb33b2ec5de1c55928976a3f2ef1307&tid=6cc4043081a95c102c69182c0fd5762b",
    
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

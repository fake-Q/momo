
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=be8766371b4034e76c957eb1b6f0144a&tid=465245b35c19262e49e922fc97b0d503",
  
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

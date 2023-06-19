
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=0366a0cdda3799b7fba9e5c27d23b07f&tid=51c7785c0c9033904ddad4dc249f85da",
  
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

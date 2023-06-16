
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=c4c7a04e351ccc53458b4fa5055e5dc4&tid=0172812f63e0784e36d2ad5b51502934",
  
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

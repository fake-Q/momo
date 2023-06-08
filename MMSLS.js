
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=6bf08e7b60a490c33d70b4e19b6a05b2&tid=c744b08d44269af9492cbaf57bfe81df",
  
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

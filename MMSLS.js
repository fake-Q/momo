
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=ec1b028d28a3c840a9278ab0235333de&tid=63e92c473c1609dd2b50cb64b70a947a",
  
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

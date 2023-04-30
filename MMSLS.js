
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=598edef30d80c98617e96fe2d4d57934&tid=dca771654a59089dae3bff434006ef0c",
  
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

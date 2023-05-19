
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=113fbd0409b03516a4f630ff44d7a2d6&tid=a265d48f43d78ed5382a631f040667bb",
  
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

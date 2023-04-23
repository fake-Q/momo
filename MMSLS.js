
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=1dbff25139db5223ca2059e12ebdbbff&tid=66361c68742e094d2937516146b54d03",
  
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

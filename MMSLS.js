
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=dc003fe37be3f75466799a7f4e6a3184&tid=723d47a554eb8cff6c87d27a262bbdcf",
  
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

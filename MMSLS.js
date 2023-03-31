
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=538abd66d4bd9771f982890e9cae94de&tid=343d2bb9c5587ef7ebae398e97d5fbcb",
  
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

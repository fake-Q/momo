
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=0223baccb5b9b7099a7e0b62d4f9b739&tid=3622be6a62a9855527a8da480192d052",
  
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

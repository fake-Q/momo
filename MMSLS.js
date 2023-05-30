
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=b8fe1779828e0d94cd5a6f86f6016c3e&tid=eb89a889ff7f9d4b712f1e4e2632a884",
  
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

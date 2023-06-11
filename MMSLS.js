
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=f390f1c89daae3d30e0572a49a4cd5bf&tid=d392b2b9d460b92b94e39961ab7008e7",
  
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

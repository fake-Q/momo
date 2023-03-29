
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=67e50eb86760901ea192fb52cb1f2ae3&tid=8e3bbb2d0733771e993979226736c9de",
  
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

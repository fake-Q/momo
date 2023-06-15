
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=72804fab3d9947bd1007382b47493b8c&tid=5373447c5b40f2d88f3a00e118ef9d51",
  
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

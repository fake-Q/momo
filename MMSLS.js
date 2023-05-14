
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=e5792a463f64a019560ee7cae14cd5f2&tid=e6e8c0d6564fb4b827814281c19fe095",
  
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

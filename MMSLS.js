
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=c4fc59fb313eb4750a8758d872d14891&tid=ca5796c457c8044af9a6676da097a817",
  
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

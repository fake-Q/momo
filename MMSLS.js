
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=22ecdd99ee585b1558a35ef1f1be1222&tid=6cdd81d7e88117f6de1c33df05537a0d",
  
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

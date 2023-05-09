
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=c8b114187c415edf1f7a8d5441fc10b4&tid=ffc87940c57a6f38b4e798b4d824ee27",
  
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

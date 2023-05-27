
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=6b06af70aeadde33138360a4fd8fd415&tid=f8a19c061582773c280c216114bae542",
  
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


const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=bcc9a127e90801f2bf6bbe29b329ac78&tid=e23e3e628af87fe025efeeaaf179200d",
  
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

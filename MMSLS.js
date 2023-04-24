
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=49e514909f708662341825fa1173c51d&tid=ffa2e9e0dce337b64df947149b418192",
  
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

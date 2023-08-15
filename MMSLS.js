
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=f251cd40cf2fcc9622eb60e2446973d7&tid=bc69219fe7fc3117a3b7a963b5a46479",
    
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

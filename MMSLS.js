
const MMSLS =  [
  "https://www.maimemo.com/share/page?uid=27169508&pid=9b6f3dbcc9475c181a229dea9b40423d&tid=9b2e719f08365a78b7c890b1b62278e5",
  ]/**
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

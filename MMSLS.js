
const MMSLS =  [
  "https://www.maimemo.com/share/page?uid=27169508&pid=a786f00b8132fef58d27bedeb6e5fada&tid=2be70c5ce2dbf508e80658b1f6d902d2",]/**
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


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=27169508&pid=a23a5d11d1ef1192c62e0f26a34d6334&tid=abcdb8d1d4ecd73eb340aad8d9d0e933",
    
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

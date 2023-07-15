
const MMSLS =  [
  "https://www.maimemo.com/share/page?uid=27169508&pid=d93c73d51c1ca60dae26589648d18bc4&tid=41be263dc9f79a4e0ab93d647c1b0020",
]
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

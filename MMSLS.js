
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=d5a348288443b7524fefb222e0badd3e&tid=1260eec2f1dbf3d7fadf712312b7bb45",
  
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

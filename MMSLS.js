
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=27169508&pid=6b8c2ef523e5565c730894642ffad5a4&tid=8666d5e82dc60c112d0aee907857c862",
  
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

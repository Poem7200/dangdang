export class LmgUtil {
  static imgList: Record<string, string> = {}
  static loadAllLmg() {
    // 获取图片生成一个Record类型
    const imgMap = import.meta.glob('../assets/**/*.png')

    let absolutePath: string = "" // 绝对路径

    for (let relativePath in imgMap) {
      console.log(imgMap[relativePath].default)
      // 获取图片名
    }
  }
}
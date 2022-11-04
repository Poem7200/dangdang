export class LmgUtil {
  // 保存图片名称和绝对路径的映射关系
  static imgList: Record<string, string> = {}
  static loadAllLmg() {
    // 获取图片生成一个Record类型
    const imgMap: Record<string, any> = import.meta.glob('../assets/**/*.png')

    // console.log(imgMap)

    let picName: string = ''

    for (let relativePath in imgMap) {
      // 获取图片名
      picName = relativePath.substring(relativePath.lastIndexOf("/") + 1)
      console.log(picName)
      // TODO: 绝对路径获取方式？
      this.imgList[picName] = relativePath
    }
  }
}
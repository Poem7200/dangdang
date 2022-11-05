import goodStorage from 'good-storage'

export class LmgUtil {
  // 保存图片名称和绝对路径的映射关系
  static imgList: Record<string, string> = {}

  static storageImgList() {
    this.imgList = goodStorage.get('imgList') || {}
    if (this.isEmpty()) {
      this.loadAllLmg()
      goodStorage.set('imgList', this.imgList)
    }
  }
  
  static isEmpty() {
    return !Object.getOwnPropertyNames(this.imgList).length
  }
  
  static getImg(imgName: string) {
    console.log('this is ', this)
    return this.imgList[imgName]
  }
  
  static loadAllLmg() {
    // 获取图片生成一个Record类型
    const imgMap: Record<string, any> = import.meta.glob('../assets/**/*.png')

    // console.log(imgMap)

    let picName: string = ''
    let absolutePath: string = ''

    for (let relativePath in imgMap) {
      // 获取绝对路径（这里default属性不生效，直接替换）
      absolutePath = relativePath.replace('..', '/src')
      // 获取图片名
      picName = relativePath.substring(relativePath.lastIndexOf("/") + 1).split('.')[0]
      
      this.imgList[picName] = absolutePath
    }
  }
}

export default LmgUtil.getImg

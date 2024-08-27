// 获取 url 参数
 export default function getURL(name) {
    const matches = new RegExp(
      '[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)'
    ).exec(location.href)
    // 确保matches不为null，然后再进行解码和替换操作
    if (matches) {
      return decodeURIComponent(matches[1].replace(/\+/g, ' '))
    }
    return null 
  }


/**
 * 判断是否在服务端中
 * @return {Boolean}
 */
export let isServer = () => {
  return typeof window === 'undefined'
}

/**
 * 判断是否在微信中
 * @return {Boolean}
 */
export let isInWechat = () => {
  return !isServer() && !!navigator.userAgent.match(/micromessenger/i)
}

/**
 * 判断是否在iOS中
 * @return {Boolean}
 */
export let isInIOS = userAgent => {
  const regx = /iphone|ipad|ipod/i
  return (
    (isServer() && userAgent && !!userAgent.match(regx)) ||
    (!isServer() && !!navigator.userAgent.match(regx))
  )
}

/**
 * 判断是否在Android中
 * @return {Boolean}
 */
export let isInAndroid = () => {
  return (
    !isServer() &&
    (!!navigator.userAgent.match(/android/i) ||
      navigator.userAgent.indexOf('android') > 0)
  )
}

/**
 * 浏览器的屏幕的可用宽度
 * @return {Boolean}
 */
export let winWidth = () => {
  return !isServer() && window.screen.availWidth
}

/**
 * 浏览器的屏幕的可用高度
 * @return {Boolean}
 */
export let winHeight = () => {
  return !isServer() && window.screen.availHeight
}

export function addHttp(url = '') {
  url = (!!url && url.trim()) || ''
  if (!/^((http|https|ftp):)/.test(url)) {
    if (!/^\/\//.test(url)) {
      url = 'https://' + url
    } else {
      url = 'https:' + url
    }
  } else if (/^(http:)/.test(url)) {
    url = url.replace('http:', 'https:')
  }
  return url
}

let _base64 = {
  key: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  btoa(input, opts) {
    opts = opts || {}
    var key = opts.key || _base64.key
    var output = ''
    var i = 0
    var fn = opts.charCodeArray
      ? function(i) {
          return input[i]
        }
      : function(i) {
          return input.charCodeAt(i)
        }
    while (i < input.length) {
      var chr1 = fn(i++)
      var chr2 = fn(i++)
      var chr3 = fn(i++)
      output +=
        key[chr1 >> 2] +
        key[((chr1 & 3) << 4) | (chr2 >> 4)] +
        key[isNaN(chr2) ? 64 : ((chr2 & 15) << 2) | (chr3 >> 6)] +
        key[isNaN(chr3) ? 64 : chr3 & 63]
    }
    return output
  },
  atob(input, opts) {
    opts = opts || {}
    var key = opts.key || _base64.key
    var h = {}
    for (var i = 0; i < key.length; i++) {
      h[key[i]] = i
    }
    var arr = []
    var i = 0
    while (i < input.length) {
      var enc1 = h[input[i++]]
      var enc2 = h[input[i++]]
      var enc3 = h[input[i++]]
      var enc4 = h[input[i++]]
      arr.push((enc1 << 2) | (enc2 >> 4))
      enc3 != 64 && arr.push(((enc2 & 15) << 4) | (enc3 >> 2))
      enc4 != 64 && arr.push(((enc3 & 3) << 6) | enc4)
    }
    var output = opts.charCodeArray ? arr : _base64.cc2str(arr)
    return output
  },
  cc2str(input) {
    var output = ''
    for (var i = 0; i < input.length; i++) {
      output += String.fromCharCode(input[i])
    }
    return output
  },
  encode(str) {
    return _base64.btoa(unescape(encodeURIComponent(str)))
  },
  decode(str) {
    if (typeof str === 'string') {
      str = str.replace(new RegExp(' ', 'g'), '+')
    }
    return decodeURIComponent(escape(_base64.atob(str)))
  }
}

export function base64Encode(str) {
  return _base64.encode(str)
}

export function base64Decode(base64str) {
  return _base64.decode(base64str)
}

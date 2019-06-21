export let queryToString = function(query = {}) {
  let result = []
  for (var name in query) {
    result.push(name + '=' + query[name])
  }
  return result.join('&')
}

export let stringToQuery = function(str = '') {
  if (str.indexOf('?') == 0) {
    str = str.substr(1)
  }
  let result = {},
    parts = str.split('&')

  for (let i = 0; i < parts.length; i++) {
    let part = parts[i]
    if (part) {
      let pairs = part.split('=')
      result[pairs[0]] = pairs[1]
    }
  }

  return result
}

/**
 * 将QueryString中的简短时间转换成时间
 * @param {String} text QueryString中的时间,格式为yyyyMMddhhmm
 * @return {String}
 */
export let queryToDate = function(str) {
  let year = parseInt(str.substring(0, 4)),
    month = parseInt(str.substring(4, 6)),
    day = parseInt(str.substring(6, 8)),
    hour = parseInt(str.substring(8, 10) || '10'),
    minute = parseInt(str.substring(10, 12) || '00')

  return new Date(year, month - 1, day, hour, minute, 0, 0)
}

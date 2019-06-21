export default class Helper {
  //当前是哪个环境
  static envtype = 'prd'

  //跳转到CRN应用带的参数
  static urlQuery = ''

  //是否跳转新版CRN填写页[后面移除]
  static ish5preorder = true

  //package version
  static pkgVer = '2017082301'

  static wakeUpData = {}

  //下面是ABtest
  static ABTesting_180110_var_isdap = 'A'

  static isIdCard(idCard) {
    var num = idCard.toLowerCase().match(/\w/g)
    if (idCard.match(/^\d{17}[\dx]$/i)) {
      var sum = 0,
        times = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      for (var i = 0; i < 17; i++) {
        sum += parseInt(num[i], 10) * times[i]
      }
      if ('10x98765432'.charAt(sum % 11) != num[17]) {
        return false
      }
      return !!idCard.replace(/^\d{6}(\d{4})(\d{2})(\d{2}).+$/, '$1-$2-$3')
    }
    if (idCard.match(/^\d{15}$/)) {
      return !!idCard.replace(/^\d{6}(\d{2})(\d{2})(\d{2}).+$/, '19$1-$2-$3')
    }
    return false
  }

  static isMobile(text) {
    var reg = /^(1[3-9][0-9])\d{8}$/
    return reg.test(text)
  }

  static isEmail(email) {
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return reg.test(email)
  }

  static isFlightNumber(number) {
    var reg = /^[a-zA-Z0-9]{4,8}$/
    var reg2 = /[a-zA-Z]{1,}/
    var reg3 = /[0-9]{1,}/
    return reg.test(number) && reg2.test(number) && reg3.test(number)
  }
}

export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function deepCopy(target) {
  try {
    return JSON.parse(JSON.stringify(target))
  } catch (e) {}
  return false
}

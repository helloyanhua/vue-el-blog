/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  if (time === "" || time === null || time === undefined) {
    return "";
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    return value.toString().padStart(2, "0");
  });
  return time_str;
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (("" + time).length === 10) {
    time = parseInt(time) * 1000;
  } else {
    time = +time;
  }
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return "刚刚";
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + "分钟前";
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + "小时前";
  } else if (diff < 3600 * 24 * 2) {
    return "1天前";
  }
  if (option) {
    return parseTime(time, option);
  } else {
    return (
      d.getMonth() +
      1 +
      "月" +
      d.getDate() +
      "日" +
      d.getHours() +
      "时" +
      d.getMinutes() +
      "分"
    );
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, " ") +
      '"}'
  );
}

export function toDecimal2(x) {
  if (!x) {
    return "0.00";
  }
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  f = Math.round(x * 100) / 100;
  var s = f.toString();
  var rs = s.indexOf(".");
  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length <= rs + 2) {
    s += "0";
  }
  return s;
}

export function getTimeAgo(period) {
  var yearLevelValue = 365 * 24 * 60 * 60 * 1000;
  var monthLevelValue = 30 * 24 * 60 * 60 * 1000;
  var dayLevelValue = 24 * 60 * 60 * 1000;
  var hourLevelValue = 60 * 60 * 1000;
  var minuteLevelValue = 60 * 1000;
  var secondLevelValue = 1000;

  function getDifference(period) {
    var year = parseInt(getYear(period));
    var month = parseInt(getMonth(period - year * yearLevelValue));
    var day = parseInt(
      getDay(period - year * yearLevelValue - month * monthLevelValue)
    );
    var hour = parseInt(
      getHour(
        period -
          year * yearLevelValue -
          month * monthLevelValue -
          day * dayLevelValue
      )
    );
    var minute = parseInt(
      getMinute(
        period -
          year * yearLevelValue -
          month * monthLevelValue -
          day * dayLevelValue -
          hour * hourLevelValue
      )
    );
    var second = parseInt(
      getSecond(
        period -
          year * yearLevelValue -
          month * monthLevelValue -
          day * dayLevelValue -
          hour * hourLevelValue -
          minute * minuteLevelValue
      )
    );
    var result = "";
    if (year !== 0) result = result + year + "年";
    if (month !== 0) result = result + month + "月";
    if (day !== 0) result = result + day + "天";
    if (hour !== 0) result = result + hour + "时";
    if (minute !== 0) result = result + minute + "分";
    if (second !== 0) result = result + second + "秒";

    function getYear(period) {
      return Math.floor(parseInt(period) / yearLevelValue);
    }

    function getMonth(period) {
      return Math.floor(parseInt(period) / monthLevelValue);
    }

    function getDay(period) {
      return Math.floor(parseInt(period) / dayLevelValue);
    }

    function getHour(period) {
      return Math.floor(parseInt(period) / hourLevelValue);
    }

    function getMinute(period) {
      return Math.floor(parseInt(period) / minuteLevelValue);
    }

    function getSecond(period) {
      return Math.floor(parseInt(period) / secondLevelValue);
    }

    return result;
  }

  return getDifference(period);
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function(...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

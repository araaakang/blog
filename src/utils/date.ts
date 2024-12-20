export function formatDateToChinese(dateString, format = 'ymd') {
    const options = {
      ymd: { year: 'numeric', month: 'long', day: 'numeric' },
      ym: { year: 'numeric', month: 'long' },
    };
  
    const formatter = new Intl.DateTimeFormat('zh-TW', options[format] || options.ymd);
    return formatter.format(new Date(dateString));
}
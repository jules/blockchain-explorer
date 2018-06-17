let timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    if (hour == 0) {
        hour = '00'
    } else if (hour < 10) {
        hour = '0' + hour;
    }
    if (min == 0) {
        min = '00'
    } else if (min < 10) {
        min = '0' + min;
    }
    if (sec == 0) {
        sec = '00'
    } else if (sec < 10) {
        sec = '0' + sec;
    }
    var time = hour + ':' + min + ':' + sec ;
    return time;
  }

  export default timeConverter;
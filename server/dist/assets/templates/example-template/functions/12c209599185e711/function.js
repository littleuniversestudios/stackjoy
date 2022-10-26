() => {
    var d = new Date();
    var datestring = 
       d.getFullYear() 
    + ("0"+(d.getMonth()+1)).slice(-2)
    + ("0" + d.getDate()).slice(-2) 
    + ("0" + d.getUTCHours()).slice(-2) 
    + ("0" + d.getUTCMinutes()).slice(-2)
    + ("0" + d.getUTCSeconds()).slice(-2);

    
  return `current_timestamp_${datestring}`;
}
// used in a couple tests, spin-locks for the specified number of seconds

const wait =  function(seconds) {
    var waitTill = new Date(new Date().getTime() + seconds * 1000)
    while(waitTill > new Date()){}
}

module.exports = wait



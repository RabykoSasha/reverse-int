module.exports = function reverse(n) {
    let revStr = n.toString().split('').reverse().join('')
    let number = parseInt(revStr)
    return number
}
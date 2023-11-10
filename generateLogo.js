function generateLogo(data) {
    return 
    `<sgv>
    <${data.shape} fill="${data.shapeColor}></${data.shape}>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="<${data.textColor}>"
    </sgv>`
}

module.exports = generateLogo;
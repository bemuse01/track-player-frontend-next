const getBrightness = (hex) => {
    hex = hex.replace(/^#/, '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return (r * 0.299 + g * 0.587 + b * 0.114)
}
const alphaToHex = (alpha) => {
    return Math.round(alpha * 255).toString(16)
}

export {getBrightness, alphaToHex}
const clamp = (x, min, max) => {
    return x <= min ? min : x >= max ? max : x
}

const normalize = (x, a, b, min, max) => {
    return (b - a) * (x - min) / (max - min) + a 
}

export {clamp, normalize}
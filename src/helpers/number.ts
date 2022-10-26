export function generateRandomInt(min: number, max: number) {
    return (Math.random() * (max - min + 1)) << 0;
}
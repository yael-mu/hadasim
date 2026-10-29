const temps = [];

export function addTemperature(temp) {
    temps.push(temp);
    let sum=0;
    temps.forEach(t => sum += t);
    const avg = sum / temps.length;
    console.log(`Average temperature: ${avg}`);
}

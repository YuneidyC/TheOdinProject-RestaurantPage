export function createLine(parent) {
    const line = document.createElement('div');
    parent.appendChild(line);

    line.classList.add('line');
}
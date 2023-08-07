
let image = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[3, 6, 87, 8765, 3, 4, 458]]

const Kernel = [[(1 / 9), (1 / 9), (1 / 9)],
[(1 / 9), (1 / 9), (1 / 9)],
[(1 / 9), (1 / 9), (1 / 9)]]

let Bimage = Blur(image, Kernel);

function Blur(image, Kernel) {
    let temp = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [3, 6, 87, 8765, 3, 4, 458]]

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            temp[i][j] = (
                (temp[i - 1][j - 1] * Kernel[0][0]) +
                (temp[i - 1][j]     * Kernel[0][1]) +
                (temp[i - 1][j + 1] * Kernel[0][2]) +
                (temp[i][j - 1]     * Kernel[1][0]) +
                (temp[i][j]         * Kernel[1][1]) +
                (temp[i][j + 1]     * Kernel[1][2]) +
                (temp[i + 1][j - 1] * Kernel[2][0]) +
                (temp[i + 1][j]     * Kernel[2][1]) +
                (temp[i + 1][j + 1] * Kernel[2][2]))
        }
    }

    return (temp)
}



renderImage("dd", Bimage);

renderImage("ff", image);

function renderImage(id, image) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let element = document.createElement('div');
            element.style.backgroundColor = "rgb(" + (image[i][j] * 255) + "," + (image[i][j] * 255) + "," + (image[i][j] * 255);
            document.getElementById(id).appendChild(element);
        }
    }
}
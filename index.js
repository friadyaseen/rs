

draw(3);

function draw(k) {
    //Black & white image
    const image = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [33]
    ];

    //Render normal image
    renderImage("ff", image);

    //Blur Kernel
    if (k === 3) {
        //3x3 Gaussian blur kernel
        const Kernel = [
            [1, 2, 1],
            [2, 4, 2],
            [1, 2, 1]
        ];
        const M = (1 / 16);

        //Multiply M with Kernel
        MultiplyKernel(Kernel, M);

        //Blur the image
        let Bimage = Blur(image, Kernel);

        //Render Blured image
        renderImage("dd", Bimage);
    } else if (k === 5) {
        //5x5 Gaussian blur kernel
        const Kernel = [
            [1, 4, 7, 4, 7],
            [4, 16, 26, 16, 4],
            [7, 26, 41, 26, 7],
            [4, 16, 26, 16, 4],
            [1, 4, 7, 4, 7]
        ];
        let M = (1 / 273);

        //Multiply M with Kernel
        MultiplyKernel(Kernel, M);

        //Blur the image
        let Bimage = Blur(image, Kernel);

        //Render Blured image
        renderImage("dd", Bimage);
    } else if (k === 7) {
        //7x7 5x5 Gaussian blur kernel
        const Kernel = [
            [0, 0, 1, 2, 1, 0, 0],
            [0, 3, 13, 22, 13, 3, 0],
            [1, 13, 59, 97, 59, 13, 1],
            [2, 22, 97, 159, 97, 22, 2],
            [0, 0, 1, 2, 1, 0, 0],
            [0, 3, 13, 22, 13, 3, 0],
            [1, 13, 59, 97, 59, 13, 1]
        ];
        let M = (1 / 1003)

        //Multiply M with Kernel
        MultiplyKernel(Kernel, M);

        //Blur the image
        let Bimage = Blur(image, Kernel);

        //Render Blured image
        renderImage("dd", Bimage);
    } else {
        console.log("ERROR")
        return 0
    }
}

function MultiplyKernel(kernel, M) {
    for (let i = 0; i < kernel.length; i++) {
        for (let j = 0; j < kernel[i].length; j++) {
            kernel[i][j] = kernel[i][j] * M;
        }
    }
}

function Blur(image, Kernel) {
    //Copy image without refrence
    let temp = image.map(function (arr) {
        return arr.slice();
    });

    let kend = ((Kernel.length - 1) / 2);

    //For each pixel of image
    for (let y = kend; y < image.length - (kend + 1); y++) {
        for (let x = kend; x < image[y].length - (kend); x++) {
            //Change image pixel
            temp[y][x] = applyKernel(temp, Kernel, y, x);
        }
    }

    return (temp)
}

function applyKernel(image, kernel, y, x) {
    let temp = 0.0;
    const kstart = (((kernel.length - 1) / 2) * -1);
    const kend = ((kernel.length - 1) / 2);

    for (let i = kstart; i <= kend; i++) {
        for (let j = kstart; j <= kend; j++) {
            //Apply the kernel
            temp += image[y + i][x + j] * kernel[i + kend][i + kend];
        }
    }
    return temp;
}

function renderImage(id, image) {
    document.getElementById(id).style.gridTemplateColumns = "repeat(" + (image.length - 1) + ", 1fr)"
    document.getElementById(id).style.gridTemplateRows = "repeat(" + image[0].length + ", 1fr)"

    //Adding div as a pixle
    for (let i = 0; i < image.length - 1; i++) {
        for (let j = 0; j < image.length - 1; j++) {
            let element = document.createElement('div');

            let color = "rgb(" + (image[i][j] * 255) + "," + (image[i][j] * 255) + "," + (image[i][j] * 255);
            element.style.backgroundColor = color;

            element.setAttribute("id", i + "," + j)
            document.getElementById(id).appendChild(element);
        }
    }
}



//How the 3x3 Kernel works in the for loop
/* (
                (temp[i - 1][j - 1] * Kernel[0][0]) +
                (temp[i - 1][j]     * Kernel[0][1]) +
                (temp[i - 1][j + 1] * Kernel[0][2]) +
                (temp[i][j - 1]     * Kernel[1][0]) +
                (temp[i][j]         * Kernel[1][1]) +
                (temp[i][j + 1]     * Kernel[1][2]) +
                (temp[i + 1][j - 1] * Kernel[2][0]) +
                (temp[i + 1][j]     * Kernel[2][1]) +
                (temp[i + 1][j + 1] * Kernel[2][2])) */
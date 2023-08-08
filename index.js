

draw(3);

function draw(k) {
    //Black & white image
    const image = [
        [[234, 103, 234], [123, 3, 4], [87, 211, 129], [45, 177, 65], [152, 240, 56], [19, 82, 205], [66, 156, 98], [220, 47, 180], [73, 189, 221], [112, 34, 139], [9, 246, 175], [200, 88, 31], [143, 12, 247], [2, 118, 50]],
        [[185, 72, 201], [33, 156, 88], [109, 240, 17], [68, 102, 219], [90, 15, 77], [205, 43, 132], [7, 184, 95], [240, 126, 55], [39, 198, 63], [148, 19, 211], [66, 88, 179], [122, 250, 41], [93, 177, 128], [11, 239, 206]],
        [[201, 143, 55], [88, 29, 176], [112, 245, 98], [4, 200, 33], [167, 73, 218], [59, 92, 14], [135, 6, 181], [76, 213, 122], [18, 107, 240], [234, 39, 88], [50, 165, 11], [192, 8, 97], [99, 208, 142], [25, 63, 199]],
        [[72, 201, 185], [156, 33, 88], [240, 112, 17], [102, 219, 68], [15, 77, 90], [43, 132, 205], [184, 7, 95], [126, 240, 55], [198, 39, 63], [19, 211, 148], [88, 66, 179], [250, 122, 41], [177, 93, 128], [239, 11, 206]],
        [[143, 201, 55], [29, 88, 176], [245, 112, 98], [200, 33, 4], [73, 167, 218], [92, 14, 59], [6, 181, 135], [213, 76, 122], [107, 18, 240], [39, 234, 88], [165, 50, 11], [8, 192, 97], [208, 142, 99], [63, 25, 199]],
        [[192, 75, 104], [17, 33, 98], [155, 208, 4], [100, 203, 67], [23, 92, 11], [210, 135, 6], [176, 28, 66], [156, 32, 240], [88, 203, 117], [89, 101, 248], [50, 165, 220], [18, 192, 89], [142, 75, 99], [63, 245, 199]],
        [[47, 156, 89], [210, 33, 198], [135, 208, 77], [92, 203, 44], [75, 92, 18], [5, 135, 250], [88, 28, 66], [32, 156, 240], [203, 33, 117], [12, 101, 220], [165, 60, 17], [180, 192, 109], [142, 71, 99], [63, 215, 199]],
        [[156, 47, 89],  [39, 71, 6], [208, 135, 77], [203, 92, 44], [92, 18, 75], [135, 5, 250], [28, 88, 66], [156, 32, 240], [33, 203, 117], [101, 12, 220], [60, 165, 17], [192, 180, 109], [71, 142, 99], [215, 63, 199]],
        [[74, 185, 141], [39, 71, 6], [39, 71, 6], [14, 113, 88], [189, 45, 76], [98, 167, 201], [28, 5, 210], [156, 32, 240], [63, 109, 181], [200, 87, 255], [39, 74, 6], [100, 92, 146], [217, 79, 112], [48, 240, 18]],
        [[91, 142, 64],  [39, 71, 6], [39, 71, 6], [14, 156, 88], [189, 45, 112], [98, 167, 201], [28, 5, 210], [143, 59, 240], [63, 109, 181], [210, 87, 25], [39, 71, 6], [100, 192, 146], [217, 79, 112], [48, 180, 18]],
        [[205, 129, 73], [39, 71, 6], [178, 144, 245], [39, 156, 88], [189, 201, 112], [98, 167, 53], [28, 5, 210], [143, 59, 240], [63, 109, 18], [210, 87, 25], [39, 71, 6], [100, 192, 146], [217, 79, 112], [48, 180, 212]],
        [[168, 115, 201],[39, 71, 6], [215, 144, 245], [39, 156, 88], [189, 201, 112], [98, 167, 53], [28, 5, 210], [143, 59, 240], [63, 109, 18], [210, 87, 25], [39, 71, 6], [100, 192, 146], [217, 79, 112], [48, 180, 212]],
        [[206, 87, 145], [94, 33, 198], [215, 144, 245], [39, 156, 88], [189, 201, 112], [98, 167, 53], [28, 5, 210], [143, 59, 240], [63, 109, 18], [210, 87, 25], [39, 71, 6], [100, 192, 146], [217, 79, 112], [48, 180, 212]],
        [[135, 207, 42], [94, 8, 198], [215, 144, 245], [39, 156, 88], [189, 201, 112], [98, 167, 53], [28, 5, 210], [143, 59, 240], [63, 109, 18], [210, 87, 25], [39, 71, 6], [100, 192, 146], [217, 79, 112], [48, 180, 212]],
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
    let temp = JSON.parse(JSON.stringify(image))
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
    let temp = [0.0,0.0,0.0];
    const kstart = (((kernel.length - 1) / 2) * -1);
    const kend = ((kernel.length - 1) / 2);

    for (let i = kstart; i <= kend; i++) {
        for (let j = kstart; j <= kend; j++) {
            //Apply the kernel
            for (let q = 0; q < 3; q++) {
                temp[i] += image[y + i][x + j][i] * kernel[i + kend][i + kend];
            }
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

            let color = "rgb(" + (image[i][j][0]) + "," + (image[i][j][1]) + "," + (image[i][j][2]);
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
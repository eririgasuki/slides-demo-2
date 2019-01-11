let n = 1
let allImgs = $('.images > img')

initializing.call()
seamlessSlides.call()


function initializing() {
    goCenter(getImg(1))
}

function seamlessSlides() {
    setInterval(() => {
        goLeft(getImg(n))
            .one('transitionend', (e) => {
                goRight($(e.currentTarget))
            })
        goCenter(getImg(n + 1))
        n += 1
    }, 1500);
}

function getImg(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}

function x(n) {
    if (n > allImgs.length) {
        n = n % allImgs.length
        if (n === 0) {
            n = allImgs.length
        }
    }
    return n
}

function goLeft($node) {
    return $node.removeClass('center').addClass('left')
}

function goCenter($node) {
    return $node.removeClass('right').addClass('center')
}

function goRight($node) {
    return $node.removeClass('left').addClass('right')
}




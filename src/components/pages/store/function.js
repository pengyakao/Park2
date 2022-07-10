export function myJS() {
    this.preDataHandle()
    const HotcardContainers = document.querySelectorAll('.hotcard-container')
    const nxtBtn = document.querySelectorAll('.nxt-btn')
    const preBtn = document.querySelectorAll('.pre-btn')

    HotcardContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect()
        let containerWidth = containerDimensions.width

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth
        })
    })
}

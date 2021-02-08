
class Accordeon {
    constructor(list) {
        this.list = list;
        this.init();
        this.createEventListener()
        this.removeEventListener()
    }

    init() {
        const parentDiv = document.querySelector('#list');
        const elems = parentDiv.children;

        for (let elem of elems) {
            elem.classList.add('accordion-item', 'closed');
        }

        const accordionHeadings = this.list.querySelectorAll('.title');
        for (let accordionHeading of accordionHeadings) {
            accordionHeading.classList.add('accordion-item-heading');
        }
        
        const accordionContents = this.list.querySelectorAll('.body');
        for (let accordionContent of accordionContents) {
            accordionContent.classList.add('accordion-item-content');
        }

    }
    createEventListener() {
        const accordionItem = document.getElementsByClassName("accordion-item");
        const accordionHeading = document.getElementsByClassName("accordion-item-heading");

        for (let i = 0; i < accordionHeading.length; i++) {
            accordionHeading[i].addEventListener("click", openItem);
        }

        function openItem() {
            const itemClassName = this.parentNode.className;

            for (let i = 0; i < accordionItem.length; i++) {
                accordionItem[i].className = 'accordion-item closed';
            }

            if (itemClassName == 'accordion-item closed') {
                this.parentNode.className = 'accordion-item open';
            }
        }

    }

    removeEventListener() {

        window.onunload = function () {
            for (i = 0; i < accordionHeading.length; i++) {
                accordionHeading[i].removeEventListener("click", openItem);
            }
            return;
        }
    }
}

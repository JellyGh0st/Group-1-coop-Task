export default class Modal{
    constructor(props){
        this.props = props;
        return this.render();
    }

    rebder(){
        this.newModal = document.createElement('div');
        this.newModal.classList.add('modal');

        this.newModalContent = document.createElement('div');
        this.newModalContent.classList.add('modalContent');

        this.newCloseButton = document.createElement('button');
        this.closeModal();
        this.newCloseButton.classList.add('closeModal');
        this.newCloseButtonText = document.createTextNode('x');
        this.newCloseButton.appendChild(this.newCloseButtonText);

        this.newModalContent.append(this.newCloseButton);

        this.newModal.appendChild(this.newModalContent);
    }

    closeModal(){
        this.newCloseButton.addEventListener('click', () => {
            this.newModal.remove();
        });
        this.newModal.addEventListener('click', e => {
            if(e.target === this.newModal){
                this.newModal.remove();
            }
        })
    }
}
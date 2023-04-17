export default class Modal{
    constructor(props){
        this.props = props;
        return this.render();
    }

    render(){
        this.newModal = document.createElement('div');
        this.newModal.classList.add('modal');

        this.newModalContent = document.createElement('div');
        this.newModalContent.classList.add('modalContent');

        
        this.newCloseButton = document.createElement('button');
        this.closeModal();
        this.newCloseButton.classList.add('closeModal');
        this.newCloseButtonText = document.createTextNode('x');
        this.newCloseButton.appendChild(this.newCloseButtonText);

        this.newInfo = document.createElement('div');
        
        this.newAuthor = document.createElement('h1');
        this.newAuthorText = document.createTextNode(`Author: ${this.props.author}`);
        this.newAuthor.appendChild(this.newAuthorText);

        this.newTitle = document.createElement('h2');
        this.newTitleText = document.createTextNode(`Title: ${this.props.title}`);
        this.newTitle.appendChild(this.newTitleText);

        this.newAbout = document.createElement('p');
        this.newAboutText = document.createTextNode(`About: ${this.props.about}`);
        this.newAbout.appendChild(this.newAboutText);

        this.newInfo.append(this.newAuthor, this.newTitle, this.newAbout);

        this.newPic = document.createElement('img');
        this.newPic.setAttribute('src', this.props.source);

        this.newModalContent.append(this.newCloseButton, this.newInfo, this.newPic);

        this.newModal.appendChild(this.newModalContent);

        return this.newModal;
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
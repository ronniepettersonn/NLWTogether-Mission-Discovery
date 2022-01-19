export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener('click', close)

    function open() {
        // Aqui vai o codigo para abrir o MODAL - adicionando a class ACTIVE
        modalWrapper.classList.add('active')
    }
    function close() {
        // Aqui vai o código para fechar o MODAL - tirando a class ACTIVE
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close
    }
}
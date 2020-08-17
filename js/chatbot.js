$(function(){
    
    var CLASS_CIRCLE = '.circle';
    var CLASS_ICON = '.icon-elements';
    var CLASS_MODAL = '.modal-wrapper';
    var CLASS_ICON_ACTIVE = 'js-icon-active';
    var CLASS_MODAL_ACTIVE = 'js-modal-active';

    var elementCircle = document.querySelector(CLASS_CIRCLE);
    var elementIcon = document.querySelector(CLASS_ICON);
    var elementModal = document.querySelector(CLASS_MODAL);
    var elementInput = document.querySelector('#myInput');

    var triggerAnimation = () => {
        var isActive = elementIcon.classList.contains(CLASS_ICON_ACTIVE);
            console.log(isActive);
                isActive ? (
        elementIcon.classList.remove(CLASS_ICON_ACTIVE),
        elementModal.classList.remove(CLASS_MODAL_ACTIVE)
        ) : (
        elementIcon.classList.add(CLASS_ICON_ACTIVE),
        elementModal.classList.add(CLASS_MODAL_ACTIVE)
        );
    }

    elementCircle.addEventListener('click', () => triggerAnimation());

});
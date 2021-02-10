var DragManager = new function() {

    /**
     * composite object for storing transfer information
     * {
     *   elem -the element on which the mouse was pressed
     *   downX/downY - coordinates at which mousedown was
     *   shiftX/shiftY - relative offset of the cursor from the corner of the element
     * }
     */
    var dragObject = {};

    var self = this;

    function onMouseDown(e) {
        if (e.which != 1) return; // if right click then it does not start transfer

        var elem = e.target.closest('.draggable');
        // not found, click outside the draggable object
        if (!elem) return;
        // remember the portable object
        dragObject.elem = elem;

      // remember the coordinates from which the transfer of the object began
        dragObject.downX = e.pageX;
        dragObject.downY = e.pageY;

        return false;
    }

    function onMouseMove(e) {
      if (!dragObject.elem) return; // element is not clamped

      if (!dragObject.avatar) { // the element is pressed, but has not yet started to move
            var moveX = e.pageX - dragObject.downX;
            var moveY = e.pageY - dragObject.downY;

            // if the mouse has not moved far enough when pressed
            if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
            return;
            }

            // starting transfer
            dragObject.avatar = createAvatar(e); // create an avatar
            if (!dragObject.avatar) { // cancellation of transfer, you cannot "grab" this part of the element
            dragObject = {};
            return;
            }

            // avatar created successfully
            // create auxiliary properties shiftX / shiftY
            var coords = getCoords(dragObject.avatar);
            dragObject.shiftX = dragObject.downX - coords.left;
            dragObject.shiftY = dragObject.downY - coords.top;

            startDrag(e); // show start of transfer
        }

        // display moving object on every mouse movement
        dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
        dragObject.avatar.style.top = e.pageY - dragObject.shiftY + 'px';

        let i;
        if((e.pageX <= 240 && e.pageX >= 50) && e.pageY <= 460){
            i = 1;
            basket.classList.add('openBasket');
        }
        else{
            i = 0;
            basket.classList.remove('openBasket');;
        }

        console.log(i);

        return false;
    }

    function onMouseUp(e) {
        if (dragObject.avatar) { // if the transfer is in progress
            finishDrag(e);
        }

        // transfer either did not start, or completed
        // in any case clear the "transfer state" of the dragObject
        dragObject = {};
    }

    function finishDrag(e) {
        var dropElem = findDroppable(e);

        if (!dropElem) {
            self.onDragCancel(dragObject);
        } else {
            self.onDragEnd(dragObject, dropElem);
        }
    }

    function createAvatar(e) {

        // remember the old properties to return to them when canceling the transfer
        var avatar = dragObject.elem;
        var old = {
            parent: avatar.parentNode,
            nextSibling: avatar.nextSibling,
            position: avatar.position || '',
            left: avatar.left || '',
            top: avatar.top || '',
            zIndex: avatar.zIndex || ''
        };

        // function to cancel the transfer
        avatar.rollback = function() {
            old.parent.insertBefore(avatar, old.nextSibling);
            avatar.style.position = old.position;
            avatar.style.left = old.left;
            avatar.style.top = old.top;
            avatar.style.zIndex = old.zIndex
        };

        return avatar;
    }

    function startDrag(e) {
        var avatar = dragObject.avatar;

        // initiate start transfer
        document.body.appendChild(avatar);
        avatar.style.zIndex = 9999;
        avatar.style.position = 'absolute';
    }

    function findDroppable(event) {
        // hide the wrapped element
        dragObject.avatar.hidden = true;

        // get the most nested element under the mouse cursor
        var elem = document.elementFromPoint(event.clientX, event.clientY);

        // show the wrapped element back
        dragObject.avatar.hidden = false;

        if (elem == null) {
            // this is possible if the mouse cursor "flew" outside the window border
            return null;
        }
        return elem.closest('.droppable');
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    this.onDragEnd = function(dragObject, dropElem) {};
    this.onDragCancel = function(dragObject) {};

};

function getCoords(elem) { // except IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
    
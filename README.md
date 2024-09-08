# Drag & Drop

- dragstart Event :
This event is triggered when the user starts dragging an element. It defines what data should be transferred when dragging begins.

   How it works:
The element must have the draggable="true" attribute.

 - dragover Event
This event occurs when a draggable element is being dragged over a valid drop target. By default, the browser prevents dropping. You need to override this behavior to allow dropping.

   How it works:
Use e.preventDefault() to enable dropping on the target element.

 - drop Event
This event is triggered when a draggable element is dropped into a valid drop target. Here, you can retrieve the data stored during the dragstart event and take action, such as moving the element to the drop zone.

# How These Events Work Together
 - dragstart: Initiates the drag and stores data about the dragged item.
 - dragover: Allows the drop by overriding the default behavior.
 - drop: Handles the action of dropping, retrieves the dragged item’s data, and moves it to the target.
 
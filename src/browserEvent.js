export default function($el) {
    let event = {
        element: $el,
        eventHandler: {
            events: {},
            bindEvent (event, callback, targetElement) {
                //bind event listener to DOM element
                //在冒泡阶段触发
                targetElement.addEventListener(event, callback, false);

                if (this.events[event]) {
                    var counter = this.events[event].length;
                    this.events[event].push({
                        eventId: counter,
                        event: callback,
                        target: targetElement
                    })
                } else {
                    this.events[event] = [];
                    this.events[event].push({
                        eventId: 0,
                        event: callback,
                        target: targetElement
                    })
                }

            },
            findEvent (event) {
                if (this.events[event]) {
                    return this.events[event][0];
                } else {
                    return false;
                }
            },
            /*
             * return all listen events
             */
            all (event) {
                if (this.events[event]) {
                    return this.events[event];
                } else {
                    return false;
                }
            },
            unbindEvent (event, targetElement) {
                var foundEvent = this.findEvent(event);
                if (foundEvent) {
                    targetElement.removeEventListener(event, foundEvent.event, false);

                    //update events array
                    this.events = this.events[event].filter(function(e) {
                        return e.counter !== event.counter;
                    }, event);
                }
            },
            remove (event, targetElement) {
                var self = this;
                var events = this.all(event);
                if (events) {
                    events.forEach(function(e) {
                        self.unbindEvent(e, targetElement)
                    })
                    self.events[event] = [];
                }
            },
            /*
             * 检查该事件类型是否被绑定
             */
            isBinding (event) {
                if (this.findEvent(event)) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        on (event, callback) {
            this.eventHandler.bindEvent(event, callback, this.element);
        },
        /*
         * bind once
         */
        once (event, callback) {
            this.eventHandler.remove(event);
            this.on(event, callback);
        },
        off (event) {
            this.eventHandler.unbindEvent(event, this.element);
        },
        clear (event) {
            this.eventHandler.remove(event, this.element);
        },
        //浏览器事件，默认冒泡
        trigger (type, bool=true) {
            var el = this.element;
            var event = document.createEvent('HTMLEvents');
            event.initEvent(type, bool, true);
            el.dispatchEvent(event);
        }
    }
    return event
}

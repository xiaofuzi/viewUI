let MutationObserver = window.MutationObserver
  || window.WebKitMutationObserver
  || window.MozMutationObserver;

export function observerInnerHtml (el, cb) {
    if (!el || !cb) throw Error('observerInnerHtml method need two argument!');
    let observer = new MutationObserver(cb);

    let  options = {
        characterData: true
    };

    observer.observer(el, options);

    return observer;
} 
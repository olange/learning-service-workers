
export function appendMsgTo( outputElem, childElemName, msg) {
  // By using a fragment, browser will only render/reflow once
  const fragment = document.createDocumentFragment();
  const newChildElem = document.createElement( childElemName);

  newChildElem.appendChild(
    document.createTextNode( String( msg)));

  fragment.appendChild( newChildElem);
  outputElem.appendChild( fragment);
}

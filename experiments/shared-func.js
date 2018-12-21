
export function appendMsgTo( outputElem, childElemName, msg) {
  // By using a fragment, browser will only render/reflow once
  const fragment = document.createDocumentFragment();
  const newChildElem = document.createElement( childElemName);

  // Poor man's templating (combined with a template literal to
  // inject values, innerHTML gives us a way to generate DOM content)
  newChildElem.innerHTML = String( msg);
  // To avoid HTML injection, you would rather use:
  // newChildElem.appendChild( document.createTextNode( String( msg)));

  fragment.appendChild( newChildElem);
  outputElem.appendChild( fragment);
}

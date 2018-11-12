# Learning Service Workers

Learning using Service Workers, Web Workers and App Cache – articles, useful resources, courseware, personal notes

[![Join the chat at https://gitter.im/learning-service-workers/Lobby](https://badges.gitter.im/learning-service-workers/Lobby.svg)](https://gitter.im/learning-service-workers/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Articles

### Service Workers

* [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/) Web Fundamentals, Matt Gaunt, 21.09.2018

### Web Workers

* [The Basics of Web Workers](https://www.html5rocks.com/en/tutorials/workers/basics/) HTML5Rocks, Eric Bidelman, 26.07.2010 _describes_ [Dedicated Workers](https://html.spec.whatwg.org/multipage/workers.html#dedicated-workers-and-the-worker-interface) _from the_ [Web Workers specification](https://html.spec.whatwg.org/multipage/workers.html)_, that are refered to as_ Web Workers

### Application Cache

* [A Beginner's Guide to Using the Application Cache](https://www.html5rocks.com/en/tutorials/appcache/beginner/) HTML5Rocks, Eric Bidelman, 18.06.2010 (published) / 29.10.2013 (updated)

## Supporting and related technologies

### Fetching data

* [MDN › WindowOrWorkerGlobalScope › fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) _Returns a promise, that resolves to the resource contents; or rejects with a `TypeError`, when a network error is encountered (although this usually means a permissions issue or similar); an accurate check for a successful `fetch()` would include checking that the promise resolved, then checking that the `Response.ok` property has a value of `true`; note: an HTTP status of 404 does not constitute a network error._

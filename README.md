# Learning Service Workers

Learning using Service Workers, Web Workers and App Cache – articles, useful resources, courseware, personal notes

[![Join the chat at https://gitter.im/learning-service-workers/Lobby](https://badges.gitter.im/learning-service-workers/Lobby.svg)](https://gitter.im/learning-service-workers/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

« _A_ Web Worker _is an object created using a constructor [Worker()](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Worker), that runs a JavaScript file containing the code that will run in the worker thread. There are different kind of Workers_ (excerpts from [Web Workers Concepts and Usage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API#Web_Workers_concepts_and_usage)):

* Dedicated workers _are utilized by a single script; whereas_
* Shared workers _are workers that can be utilized by multiple scripts running in different windows, IFrames…, as long as they are in the same domain as the worker:_
* Service Workers _are specialized Workers, that essentially act as proxy servers that sit between web applications, the browser, and the network (when available). They are intended, among other things, to enable the creation of effective offline experiences, intercept network requests and take appropriate action based on whether the network is available, and update assets residing on the server. They will also allow access to push notifications and background sync APIs._ »

## Articles: first principles

### Service Workers

* [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/) Web Fundamentals, Matt Gaunt, 21.09.2018
* [Service Workers explained](https://github.com/w3c/ServiceWorker/blob/master/explainer.md) [Alex Russel](https://github.com/slightlyoff), initial publ. 22.04.2013 / ongoing updates until 11.2017
* [W3C › Service Workers Specification](https://github.com/w3c/ServiceWorker) by Alex Russel, Jake Archibald, Jungkee Song and many others

### Web Workers

* [MDN › Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) _describes_ Dedicated- _and_ Shared workers. _A Dedicated Worker is only accessible from the script that first spawned it, whereas Shared Workers can be accessed from multiple scripts._
* [The Basics of Web Workers](https://www.html5rocks.com/en/tutorials/workers/basics/) HTML5Rocks, Eric Bidelman, 26.07.2010 _describes_ [Dedicated Workers](https://html.spec.whatwg.org/multipage/workers.html#dedicated-workers-and-the-worker-interface) _from the_ [Web Workers specification](https://html.spec.whatwg.org/multipage/workers.html)_, that are refered to as_ Web Workers; see [#2](../../issues/2) for reading notes

### Application Cache

* [A Beginner's Guide to Using the Application Cache](https://www.html5rocks.com/en/tutorials/appcache/beginner/) HTML5Rocks, Eric Bidelman, 18.06.2010 (published) / 29.10.2013 (updated)

## Videos

### Web Workers

* [Building Faster, More Resilient Apps with Service Worker: A Caching Strategy Deep Dive](https://developer.chrome.com/devsummit/schedule/caching-strategies) Chrome Dev Summit, Ewa Gasperowicz & Phil Walton, 12.11.2018 « […] _Not all service worker implementations are created equal, and they can offer vastly different performance benefits. Every prefetch and cache decision comes with speed vs. freshness and bandwidth vs. storage trade offs. Discover how to evaluate and build different service worker flows for your app, giving the best experience for your users._ »

## Supporting and related technologies

### Fetching data

* [Google Web Fundamentals › Updates › Introducing Background Fetch](https://developers.google.com/web/updates/2018/12/background-fetch) _Perform long-running fetches in the background. ➡️ Hear about the result in your service worker. ➡️ User can see progress and pause/cancel._
* [MDN › WindowOrWorkerGlobalScope › fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) _Returns a promise, that resolves to the resource contents; or rejects with a `TypeError`, when a network error is encountered (although this usually means a permissions issue or similar); an accurate check for a successful `fetch()` would include checking that the promise resolved, then checking that the `Response.ok` property has a value of `true`; note: an HTTP status of 404 does not constitute a network error._
* [Fetch Living Standard](https://fetch.spec.whatwg.org/) _Provides a unified architecture for the numerous APIs that provide the ability to fetch a resource (e.g. HTML’s `<img>` and `<script>` elements, CSS' `cursor` and `list-style-image`, the `navigator.sendBeacon()` and `self.importScripts()` JavaScript APIs), so they are all consistent when it comes to various aspects of fetching, such as redirects and the CORS protocol; also defines the `fetch()` JavaScript API, which exposes most of the networking functionality at a fairly low level of abstraction._

### Service Worker Toolchain

* [Google Developer › Workbox](https://developers.google.com/web/tools/workbox/) _A library for adding offline support to web apps; bakes in a set of best practices and removes the boilerplate every developer writes when working with service workers_

## Additional resources

* [Learning Streams and Observables](https://github.com/olange/learning-streams) _Learning using Streams, Observables and Transforms with JavaScript – articles, useful resources, personal notes_
* [Awesome Service Workers](https://github.com/TalAter/awesome-service-workers) _A curated collection of service worker resources, by the author of the O'Reilly book « Building Progressive Web Apps - O'Reilly »_

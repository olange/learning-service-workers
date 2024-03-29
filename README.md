# Learning Fetch, Web- and Service Workers

Learning using Service Workers, Web Workers and Cache – articles, useful resources, courseware, personal notes.

« _A_ [**Web Worker**](https://www.html5rocks.com/en/tutorials/workers/basics/) _runs the code of a Javascript file in an_ isolated **worker thread**. _There are different kind of Workers; in a webapp, the most common are:_

* [Dedicated workers](https://developer.mozilla.org/en-US/docs/Web/API/Worker) _are utilized by a single script; whereas_
* [Shared workers](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) _are workers that can be utilized by multiple scripts running in different windows, IFrames — as long as they are in the same domain as the worker; as of 12.2018, they have little support in mobile browsers though;_
* [Service workers](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) _are event-driven workers, registered against an origin and a path. They act as a programmable network proxy, that sits between web applications, the browser, and the network — when available —, allowing you to control how network requests from your page are handled. They enable the creation of effective offline experiences, among other things; they also allow access to push notifications, background sync and geofencing APIs._ »

| Use cases |   |
|:----------|---|
| Prefetching and/or caching data for later use | Analyzing video or audio data |
| Code syntax highlighting or other real-time text formatting | Spell checker |
| Background I/O or polling of webservices | Updating many rows of a local web database |
| Processing large arrays or humungous JSON responses | Image filtering in <canvas> |

## Learning

* [The Basics of Web Workers](learning/basics-of-web-workers.md) Reading notes of various articles, synthesis of a 4-days [code retreat](https://github.com/olange/code-retreat/blob/master/2018/201812-cmj.md) in december 2018.

## Experiments

* [01. Web Worker instantiation](experiments/01-instantiation/) Classic-, Module- or Embedded script.
* [02. Async Generators](experiments/02-generators/) Single worker, delegation to multiple subworkers, async generator functions to play with.
* [03. Transferable objects](experiments/03-transferable/) Apply image filtering to a source image, delegating the heavy-lifting, passing the large amount of image data in/out the worker as a <code>Transferable</code> object.

## Articles: fundamentals

### Web Workers

See document [The Basics of Web Workers](learning/basics-of-web-workers.md) [#2](../../issues/2) above for reading notes.

* [H5R › The Basics of Web Workers](https://www.html5rocks.com/en/tutorials/workers/basics/) Eric Bidelman, 26.07.2010 _describes_ [Dedicated Workers](https://html.spec.whatwg.org/multipage/workers.html#dedicated-workers-and-the-worker-interface) _from the_ [Web Workers specification](https://html.spec.whatwg.org/multipage/workers.html)_, that are refered to as_ Web Workers
* [WWG › HTML Living Standard › Web Workers](https://html.spec.whatwg.org/multipage/workers.html) _Specification which defines the API for running scripts in the background, independently of any user interface scripts._
* [MDN › Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) _describes Dedicated-, Shared- and Service workers, as well as Chrome- and Audio Workers_
* [GWF › Updates › Workers ♥ ArrayBuffer](https://developers.google.com/web/updates/2011/09/Workers-ArrayBuffer) Eric Bidelman, 08.2011
  _Typed arrays I/O and [Structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm); no more base64 encoding the data!_
* [GWF › Updates › Transferable Objects: Lightning Fast!](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast) Eric Bidelman, 12.2011 _[Demonstrates](http://html5-demos.appspot.com/static/workers/transferables/index.html) the huge performance improvement for message passing, that can be achieved with [Transferable Objects](https://developer.mozilla.org/en-US/docs/Web/API/Transferable)._

### Service Workers

* [GWF › Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/) Web Fundamentals, Matt Gaunt, 21.09.2018
* [W3C › Service Workers explained](https://github.com/w3c/ServiceWorker/blob/master/explainer.md) by [Alex Russel](https://github.com/slightlyoff), initial publ. 22.04.2013 / ongoing updates until 11.2017
* [W3C › Service Workers Specification](https://github.com/w3c/ServiceWorker) by Alex Russel, Jake Archibald, Jungkee Song and many others
* [The Year of the Streams](https://jakearchibald.com/2016/streams-ftw/) Jake Archibald, 25.01.2016

### Application Cache

* [H5R › A Beginner's Guide to Using the Application Cache](https://www.html5rocks.com/en/tutorials/appcache/beginner/) HTML5Rocks, Eric Bidelman, 18.06.2010 (published) / 29.10.2013 (updated)

## Videos & Teaching games

### Web Workers

* [CDS › Building Faster, More Resilient Apps with Service Worker: A Caching Strategy Deep Dive](https://developer.chrome.com/devsummit/schedule/caching-strategies) Chrome Dev Summit, Ewa Gasperowicz & Phil Walton, 12.11.2018 « […] _Not all service worker implementations are created equal, and they can offer vastly different performance benefits. Every prefetch and cache decision comes with speed vs. freshness and bandwidth vs. storage trade offs. Discover how to evaluate and build different service worker flows for your app, giving the best experience for your users._ »

### Service workers

* [Mastery Games › Service Workies](https://mastery.games/serviceworkies/) A collaborative project by Dave Geddes & Google Developers « _Learn Service Workers inside and out with the new PWA Mastery Game_ » (Displayed at $229 — currently free, as of 12.2018)
* [web.dev › Service worker mindset](https://web.dev/service-worker-mindset/) Dave Geddes, 04.06.2019 « _A handful of depictive metaphors [referred to in the ‹Service Workies› game]; the post « explores these mental models and wrap our brains around the paradoxical traits that make service workers both tricky and awesome._ »

## Supporting and related technologies

### Transferable Objects

* [MDN › Web APIs › Transferable Objects](https://developer.mozilla.org/en-US/docs/Web/API/Transferable) _A marker interface, that represents an object that can be transfered between different execution contexts, like the main thread and Web workers. The [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [MessagePort](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort) and [ImageBitmap](https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmap) types implement this marker interface._
* See also above the articles [GWF › Updates › Workers ♥ ArrayBuffer](https://developers.google.com/web/updates/2011/09/Workers-ArrayBuffer) (Eric Bidelman, 08.2011) and [GWF › Updates › Transferable Objects: Lightning Fast!](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast) (Eric Bidelman, 12.2011).

### Fetching data

* [GWF › Updates › Introducing Background Fetch](https://developers.google.com/web/updates/2018/12/background-fetch) _Perform long-running fetches in the background. ➡️ Hear about the result in your service worker. ➡️ User can see progress and pause/cancel._
* [MDN › WindowOrWorkerGlobalScope › fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) _Returns a promise, that resolves to the resource contents; or rejects with a `TypeError`, when a network error is encountered (although this usually means a permissions issue or similar); an accurate check for a successful `fetch()` would include checking that the promise resolved, then checking that the `Response.ok` property has a value of `true`; note: an HTTP status of 404 does not constitute a network error._
* [WWG › Fetch Living Standard](https://fetch.spec.whatwg.org/) _Provides a unified architecture for the numerous APIs that provide the ability to fetch a resource (e.g. HTML’s `<img>` and `<script>` elements, CSS' `cursor` and `list-style-image`, the `navigator.sendBeacon()` and `self.importScripts()` JavaScript APIs), so they are all consistent when it comes to various aspects of fetching, such as redirects and the CORS protocol; also defines the `fetch()` JavaScript API, which exposes most of the networking functionality at a fairly low level of abstraction._

### Service Worker Toolchain

* [Google Developer › Workbox](https://developers.google.com/web/tools/workbox/) _A library for adding offline support to web apps; bakes in a set of best practices and removes the boilerplate every developer writes when working with service workers_

## Additional resources

* [Learning Streams and Observables](https://github.com/olange/learning-streams) _Learning using Streams, Observables and Transforms with JavaScript – articles, useful resources, personal notes_
* [Awesome Service Workers](https://github.com/TalAter/awesome-service-workers) _A curated collection of service worker resources, by the author of the O'Reilly book « Building Progressive Web Apps - O'Reilly »_

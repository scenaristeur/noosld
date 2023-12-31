// todo : gerer indexeddb et webrtc https://github.com/scenaristeur/noosphere/blob/0e890161522df7994eaa7da843400f5f75155fa0/src/services/collabManager.js#L69

import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";
import { IndexeddbPersistence } from "y-indexeddb";
import { WebsocketProvider } from "y-websocket";
import { Awareness } from "y-protocols/awareness";

// import { MatrixProvider } from "matrix-crdt";
// import sdk from "matrix-js-sdk";

// (optional, define types for TypeScript)
//type Todo = { completed: boolean, title: string };

// Create your SyncedStore store
export const y_store = syncedStore({ todos: [], fragment: "xml" });

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsDoc(y_store);
export const awareness = new Awareness(doc);
export const webrtcProvider = new WebrtcProvider("noosld", doc, {
  awareness,
  signaling: [
  //   //"wss://y-webrtc-signaling-eu.herokuapp.com",
  //   "wss://y-webrtc-signaling-us.herokuapp.com",
  //   "wss://signaling.yjs.dev",
    "wss://noosld-webrtc.glitch.me"
  ],
});
export const indexDBprovider = new IndexeddbPersistence("noosld", doc);
export const websocketProvider = new WebsocketProvider(
  "wss://yjs-leveldb.glitch.me/noosphere",
  "noosld",
  doc
);

webrtcProvider.on('status', event => {
  console.log("** webrtcProvider in y_store",event.status) // logs "connected" or "disconnected"
})

websocketProvider.on('status', event => {
  console.log("## websocketProvider in y_store",event.status) // logs "connected" or "disconnected"
})
export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();

// All of our network providers implement the awareness crdt
// export const awareness = websocketProvider.awareness

// You can observe when a user updates their awareness information
awareness.on("change", (changes) => {
  console.log(changes);
  // Whenever somebody updates their awareness information,
  // we log all awareness information from all users.
  console.log("Awareness", Array.from(awareness.getStates().values()));
});

// You can think of your own awareness information as a key-value store.
// We update our "user" field to propagate relevant user information.
awareness.setLocalStateField("user", {
  // Define a print name that should be displayed
  name: "Emmanuelle Charpentier",
  // Define a color that should be associated to the user:
  color: "#ffb61e", // should be a hex color
});

// // See https://matrix.org/docs/guides/usage-of-the-matrix-js-sdk
// // for login methods
// const matrixClient = sdk.createClient({
//     baseUrl: "https://matrix.org",
//     accessToken: "....MDAxM2lkZW50aWZpZXIga2V5CjAwMTBjaWQgZ2Vu....",
//     userId: "@USERID:matrix.org",
//   });

//   // Extra configuration needed for certain matrix-js-sdk
//   // calls to work without calling sync start functions
//   matrixClient.canSupportVoip = false;
//   matrixClient.clientOpts = {
//     lazyLoadMembers: true,
//   };

//   // Create a new Y.Doc and connect the MatrixProvider
//   const ydoc = new Y.Doc();
//   const provider = new MatrixProvider(ydoc, matrixClient, {
//     type: "alias",
//     alias: "#matrix-room-alias:matrix.org",
//   });
//   provider.initialize();

//   // array of numbers which produce a sum
//   const yarray = ydoc.getArray("count");

//   // observe changes of the sum
//   yarray.observe((event) => {
//     // print updates when the data changes
//     console.log("new sum: " + yarray.toArray().reduce((a, b) => a + b));
//   });

//   // add 1 to the sum
//   yarray.push([1]); // => "new sum: 1"

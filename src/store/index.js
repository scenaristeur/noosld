import { syncedStore, getYjsDoc } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";
import { IndexeddbPersistence } from "y-indexeddb";
import { WebsocketProvider } from "y-websocket";
// import { MatrixProvider } from "matrix-crdt";
// import sdk from "matrix-js-sdk";

// (optional, define types for TypeScript)
//type Todo = { completed: boolean, title: string };

// Create your SyncedStore store
export const store = syncedStore({ todos : [] , fragment: "xml"});

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsDoc(store);
export const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc);
export const indexDBprovider = new IndexeddbPersistence("my-document-id", doc);
export const websocketProvider = new WebsocketProvider("wss://yjs-leveldb.glitch.me/noosphere", "my-roomname", doc);
export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();


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
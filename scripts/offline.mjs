// Used only by the isolated-build test. Make accidental upstream requests fail visibly.
import http from "node:http";
import https from "node:https";
const deny = () => {
  throw new Error(
    "Network content access prohibited during self-contained build",
  );
};
globalThis.fetch = async () => deny();
http.request = deny;
http.get = deny;
https.request = deny;
https.get = deny;

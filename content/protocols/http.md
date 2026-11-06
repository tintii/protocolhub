---
id: protocol-http
slug: http
name: HTTP
expandedName: HyperText Transfer Protocol
origin: historical
provenance:
  source: protocols/protocol_HTTP.htm
  sha256: 7ee07395bb6d1690ba731b8e0fd41a67ec8bc14d02b70c90abe9950acd2c83a6
  provider: 'Colasoft Co., Ltd.'
aliases:
  - HyperText Transfer Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: HyperText Transfer Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: File transfer protocol
  - label: Latest Version
    html: HTTP 1.1
  - label: Ports
    html: |-
      HTTP: 80, 8008, 8080 (TCP) server
      <br />S-HTTP: 80 (TCP) server
      <br />HTTPS: 443 (TCP) server over SSL/TLS
  - label: Related protocols
    html: 'WebDAV,<br />Web Distributed Authoring and Versioning'
  - label: URI
    html: 'http, https'
  - label: MIME subtype
    html: 'application/http, message/http, message/s-http'
  - label: Working groups
    html: |-
      HTTP, HyperText Transfer Protocol
      <br />WTS, Web Transaction Security
      <br />Webdav, WWW Distributed Authoring and Versioning
originalUpdate: '2005-11-15 15:57:32'
rfcs:
  - 1945
  - 2068
  - 2069
  - 2109
  - 2145
  - 2169
  - 2227
  - 2291
  - 2295
  - 2296
  - 2310
  - 2518
  - 2560
  - 2585
  - 2616
  - 2617
  - 2660
  - 2774
  - 2817
  - 2818
  - 2936
  - 2964
  - 2965
  - 3143
  - 3205
  - 3229
  - 3230
  - 3675
  - 3875
related: []
glossary: []
sections:
  - id: description
    title: Description
  - id: examples
    title: Examples
  - id: relations
    title: Protocol relations
  - id: glossary
    title: Local glossary
  - id: references
    title: References
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			The HyperText Transfer Protocol (HTTP) is an application-level protocol with the lightness and speed necessary for distributed, collaborative, hypermedia information systems. Messages are passed in a format similar to that used by Internet Mail and the Multipurpose Internet Mail Extensions (MIME). Although designed to be extensible to almost any document format, HTTP is the de facto standard for transferring files (text, graphic images, sound, video, and other multimedia files) on the World Wide Web.
<br />
<br />HTTP concepts include (as the Hypertext part of the name implies) the idea that files can contain references to other files whose selection will elicit additional transfer requests. Any Web server machine contains, in addition to the Web page files it can serve, an HTTP daemon, a program that is designed to wait for HTTP requests and handle them when they arrive. Your Web browser is an HTTP client, sending requests to server machines. When the browser user enters file requests by either "opening" a Web file (typing in a Uniform Resource Locator or URL) or clicking on a hypertext link, the browser builds an HTTP request and sends it to the Internet Protocol address (IP address) indicated by the URL. The HTTP daemon in the destination server machine receives the request and sends back the requested file or files associated with the request. (A Web page often consists of more than one file.)
<br />
<br />HTTP operates over TCP connections, usually to port 80, though this can be overridden and another port used. After a successful connection, the client transmits a request message to the server, which sends a reply message back. HTTP messages are human-readable, and an HTTP server can be manually operated with a command such as telnet server 80.
<br />
<br />Secure HTTP (S-HTTP) is a superset of HTTP, which allows messages to be encapsulated in various ways. Encapsulations can include encryption, signing, or MAC based authentication. This encapsulation can be recursive, and a message can have several security transformations applied to it. S-HTTP also includes header definitions to provide key transfer, certificate transfer, and similar administrative functions. S-HTTP appears to be extremely flexible in what it will allow the programmer to do. S- HTTP also offers the potential for substantial user involvement in, and oversight of, the authentication &amp; encryption activities
<br />
<br />HTTPS is HTTP encapsulated in an SSL/TLS stream.
<br /><hr />
<br /><b>HTTP Message</b>
<br />
<br /><ul><li><b>Methods</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>OPTIONS</td><td>Represents a request for information about the communication options available on the request/response chain identified by the Request-URI..(<a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>)</td></tr><tr><td>GET</td><td>Retrieve whatever information (in the form of an entity) is identified by the Request-URI. (<a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>)</td></tr><tr><td>HEAD</td><td>Identical to GET except that the server MUST NOT return a message-body in the response. (<a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>)</td></tr><tr><td>POST</td><td>Used to request that the destination server accept the entity enclosed in the request as a new subordinate of the resource identified by the Request-URI in the Request-Line. (<a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>)</td></tr><tr><td>PUT</td><td>Requests that the enclosed entity be stored under the supplied Request-URI (<a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>)</td></tr><tr><td>DELETE</td><td>Requests that the origin server delete the resource identified by the Request-URI. (<a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>)</td></tr><tr><td>TRACE</td><td>Used to invoke a remote, application-layer loop- back of the request message. (<a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>)</td></tr><tr><td>LINK</td><td>Establishes one or more Link relationships between the existing resource identified by the Request-URI and other existing resources. (<a href="https://www.rfc-editor.org/rfc/rfc1945.html">RFC 1945</a>)</td></tr><tr><td>UNLINK</td><td>Removes one or more Link relationships from the existing resource identified by the Request-URI. (<a href="https://www.rfc-editor.org/rfc/rfc1945.html">RFC 1945</a>)</td></tr></tbody></table></div></div><br /></li>
<li><b>HTTP Status Codes</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>1xx</td><td>Informational</td></tr><tr><td>100</td><td>Continue.</td></tr><tr><td>101</td><td>Switching protocols.</td></tr><tr><td>2xx</td><td>Success</td></tr><tr><td>200</td><td>OK; the request was fulfilled.</td></tr><tr><td>201</td><td>OK; following a POST command.</td></tr><tr><td>202</td><td>OK; accepted for processing, but processing is not completed.</td></tr><tr><td>203</td><td>OK; partial information--the returned information is only partial.</td></tr><tr><td>204</td><td>OK; no response--request received but no information exists to send back.</td></tr><tr><td>205</td><td>Reset content.</td></tr><tr><td>206</td><td>Partial content.</td></tr><tr><td>226</td><td>IM used.</td></tr><tr><td>3xx</td><td>Redirection</td></tr><tr><td>301</td><td>Moved--the data requested has a new location and the change is permanent.</td></tr><tr><td>302</td><td>Found--the data requested has a different URL temporarily.</td></tr><tr><td>303</td><td>Method--under discussion, a suggestion for the client to try another location.</td></tr><tr><td>304</td><td>Not Modified--the document has not been modified as expected.</td></tr><tr><td>305</td><td>Use proxy.</td></tr><tr><td>4xx</td><td>Error seems to be in the client</td></tr><tr><td>400</td><td>Bad request--syntax problem in the request or it could not be satisfied.</td></tr><tr><td>401</td><td>Unauthorized--the client is not authorized to access data.</td></tr><tr><td>402</td><td>Payment required--indicates a charging scheme is in effect.</td></tr><tr><td>403</td><td>Forbidden--access not required even with authorization.</td></tr><tr><td>404</td><td>Not found--server could not find the given resource.</td></tr><tr><td>405</td><td>Method not allowed.</td></tr><tr><td>406</td><td>Not acceptable.</td></tr><tr><td>407</td><td>Proxy authentication required.</td></tr><tr><td>408</td><td>Request timeout.</td></tr><tr><td>409</td><td>Conflict.</td></tr><tr><td>410</td><td>Gone.</td></tr><tr><td>411</td><td>Length required.</td></tr><tr><td>412</td><td>Precondition failed.</td></tr><tr><td>413</td><td>Request entity too large.</td></tr><tr><td>414</td><td>Request URI too large.</td></tr><tr><td>415</td><td>Unsupported media type.</td></tr><tr><td>426</td><td>Upgrade Required.</td></tr><tr><td>5xx</td><td>Error seems to be in the server</td></tr><tr><td>500</td><td>Internal Error--the server could not fulfill the request because of an unexpected condition.</td></tr><tr><td>501</td><td>Not implemented--the sever does not support the facility requested.</td></tr><tr><td>502</td><td>Server overloaded--high load (or servicing) in progress.</td></tr><tr><td>503</td><td>Service unavailable.</td></tr><tr><td>504</td><td>Gateway timeout.</td></tr><tr><td>505</td><td>HTTP version not supported.</td></tr></tbody></table></div></div><br /></li>
		    </ul>
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0">The simplest HTTP message is "GET URL", to which the server replies by sending the 
named document. 

Here a sample HTTP/1.1 exchange:

      GET <i>URL</i> HTTP/1.1  
      Host: <i>Hostname</i>
                 
          &lt; HTTP/1.1 200 OK
          &lt; Date: Fri, 07 Jun 2002 10:21:59 GMT
          &lt; Server: Microsoft-IIS/5.0
          &lt; Accept-Ranges: bytes
          &lt; Connection: Keep-Alive
          &lt; Last-modified: Wed, 05 Jun 2002 22:49:15 GMT
          &lt; Content-type: text/html
          &lt; Content-length: 1579
                    
      
      ...


      Or if the document doesn¡¯t exist:

          &lt; HTTP/1.1 404 Not Found
          &lt; Connection: Close
          &lt; Content-Type: text/plain


          &lt; 404 Not Found

          &lt; The requested file (or whatever you requested) couldn't be found!

In addition to GET requests, clients can also send HEAD and POST requests, of which 
POSTs are the most important. POSTs are used for HTML forms and other operations 
that require the client to transmit a block of data to the server. After sending the 
header and the blank line, the client transmits the data. The header must have 
included a Content-Length: field, which permits the server to determine when all the 
data has been received.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>HTTP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Daemon</b><br />Daemon is a process that runs in the background and performs a specified operation at predefined times or in response to certain events. The term daemon is a UNIX term, though many other operating systems provide support for daemons, though they're sometimes called other names. Windows, for example, refers to daemons as System Agents and services. Typical daemon processes include print spoolers, e-mail handlers, and other programs that perform administrative tasks for the operating system. The term comes from Greek mythology, where daemons were guardian spirits.<br /><br /><b>Encryption</b><br />The translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text; encrypted data is referred to as cipher text. 
<br />
<br />There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>Header</b><br />In many disciplines of computer science, a header is a unit of information that precedes a data object. In a network transmission, a header is part of the data packet and contains transparent information about the file or the transmission. In file management, a header is a region at the beginning of each file where bookkeeping information is kept. The file header may contain the date the file was created, the date it was last updated, and the file's size. The header can be accessed only by the operating system or by specialized programs.
<br />
<br />In word processing, one or more lines of text that appears at the top of each page of a document. Once you specify the text that should appear in the header, the word processor automatically inserts it.<br /><br /><b>Hypertext</b><br />A special type of database system, invented by Ted Nelson in the 1960s, in which objects (text, pictures, music, programs, and so on) can be creatively linked to each other. When you select an object, you can see all the other objects that are linked to it. You can move from one object to another even though they might have very different forms. For example, while reading a document about Mozart, you might click on the phrase Violin Concerto in A Major, which could display the written score or perhaps even invoke a recording of the concerto. Clicking on the name Mozart might cause various illustrations of Mozart to appear on the screen. The icons that you select to view associated objects are called Hypertext links or buttons. 
<br />
<br />Hypertext systems are particularly useful for organizing and browsing through large databases that consist of disparate types of information. There are several Hypertext systems available for Apple Macintosh computers and PCs that enable you to develop your own databases. Such systems are often called authoring systems . HyperCard software from Apple Computer is the most famous.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>MAC</b><br />MAC (Medium Access Control) is a hardware address that uniquely identifies each node of a network. In IEEE 802 networks, the Data Link Control (DLC) layer of the OSI Reference Model is divided into two sublayers: the Logical Link Control (LLC) layer and the Media Access Control (MAC) layer. The MAC layer interfaces directly with the network medium. Consequently, each different type of network medium requires a different MAC layer. 
<br />
<br />On networks that do not conform to the IEEE 802 standards but do conform to the OSI Reference Model, the node address is called the Data Link Control (DLC) address.<br /><br /><b>MIME</b><br />MIME (Multipurpose Internet Mail Extensions) is a specification for formatting non-ASCII messages so that they can be sent over the Internet. Many e-mail clients now support MIME, which enables them to send and receive graphics, audio, and video files via the Internet mail system. In addition, MIME supports messages in character sets other than ASCII. 
<br />
<br />There are many predefined MIME types, such as GIF graphics files and PostScript files. It is also possible to define your own MIME types. 
<br />
<br />In addition to e-mail applications, Web browsers also support various MIME types. This enables the browser to display or output files that are not in HTML format.<br /><br /><b>Method</b><br />In object-oriented programming, a procedure that is executed when an object receives a message. A method is really the same as a procedure, function , or routine in procedural programming languages. The only difference is that in object-oriented programming, a method is always associated with a class.<br /><br /><b>Proxy</b><br />An intermediary program which acts as both a server and a client for the purpose of making requests on behalf of other clients. Requests are serviced internally or by passing them, with possible translation, on to other servers. A proxy must interpret and, if necessary, rewrite a request message before forwarding it. Proxies are often used as client-side portals through network firewalls and as helper applications for handling requests via protocols not implemented by the user agent.<br /><br /><b>S-HTTP</b><br />An extension to the HTTP protocol to support sending data securely over the World Wide Web. Not all Web browsers and servers support S-HTTP. Another technology for transmitting secure communications over the World Wide Web -- Secure Sockets Layer (SSL) -- is more prevalent. However, SSL and S-HTTP have very different designs and goals so it is possible to use the two protocols together. Whereas SSL is designed to establish a secure connection between two computers, S-HTTP is designed to send individual messages securely. Both protocols have been submitted to the Internet Engineering Task Force (IETF) for approval as a standard.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>URL</b><br />URL (Uniform Resource Locator) is the global address of documents and other resources on the World Wide Web. The first part of the address indicates what protocol to use, and the second part specifies the IP address or the domain name where the resource is located. 
<br />
<br />For example, the two URLs below point to two different files at the domain pcwebopedia.com. The first specifies an executable file that should be fetched using the FTP protocol; the second specifies a Web page that should be fetched using the HTTP protocol: 
<br />
<br />ftp://www.webpage.com/example.exe 
<br />http://www.webpage.com/index.html <br /><br /><b>WWW</b><br />WWW(World Wide Web) is a system of Internet servers that support specially formatted documents. The documents are formatted in a markup language called HTML (HyperText Markup Language) that supports links to other documents, as well as graphics, audio, and video files. There are several applications called Web browsers that make it easy to access the World Wide Web; Two of the most popular being Netscape Navigator and Microsoft's Internet Explorer.<br /><br /><b>Web browser</b><br />Also named browser. <br /><br /><b>Web page</b><br />Web page is a document on the World Wide Web. Every Web page is identified by a unique URL (Uniform Resource Locator). <br /><br /><b>WebDAV</b><br />WebDAV (Web-based Distributed Authoring and Versioning) is a set of extensions to the HTTP protocol which allows users to collaboratively edit and manage files on remote web servers. WebDAV features XML properties on metadata, locking - which prevents authors from overwriting each other's changes - namespace manipulation and remote file management. 
<br />
<br />WebDav is sometimes referred to as DAV.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/http-status-codes">HTTP status codes</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1945.html">RFC 1945</a>] Hypertext Transfer Protocol -- HTTP/1.0.
[<a href="https://www.rfc-editor.org/rfc/rfc2145.html">RFC 2145</a>] Use and interpretation of HTTP version numbers.
[<a href="https://www.rfc-editor.org/rfc/rfc2169.html">RFC 2169</a>] A Trivial Convention for using HTTP in URN Resolution.
[<a href="https://www.rfc-editor.org/rfc/rfc2227.html">RFC 2227</a>] Simple Hit-Metering and Usage-Limiting for HTTP.
[<a href="https://www.rfc-editor.org/rfc/rfc2291.html">RFC 2291</a>] Requirements for a Distributed Authoring and Versioning Protocol for the World Wide Web.
[<a href="https://www.rfc-editor.org/rfc/rfc2295.html">RFC 2295</a>] Transparent Content Negotiation in HTTP.
[<a href="https://www.rfc-editor.org/rfc/rfc2296.html">RFC 2296</a>] HTTP Remote Variant Selection Algorithm -- RVSA/1.0.
[<a href="https://www.rfc-editor.org/rfc/rfc2310.html">RFC 2310</a>] The Safe Response Header Field.
[<a href="https://www.rfc-editor.org/rfc/rfc2518.html">RFC 2518</a>] HTTP Extensions for Distributed Authoring -- WEBDAV.
[<a href="https://www.rfc-editor.org/rfc/rfc2560.html">RFC 2560</a>] X.509 Internet Public Key Infrastructure Online Certificate Status Protocol - OCSP.
[<a href="https://www.rfc-editor.org/rfc/rfc2585.html">RFC 2585</a>] Internet X.509 Public Key Infrastructure Operational Protocols: FTP and HTTP.
[<a href="https://www.rfc-editor.org/rfc/rfc2616.html">RFC 2616</a>] Hypertext Transfer Protocol -- HTTP/1.1.
                Defines MIME media subtypes application/http and message/http. 
                Defines URI scheme http:. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2617.html">RFC 2617</a>] HTTP Authentication: Basic and Digest Access Authentication.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2069.html">RFC 2069</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2660.html">RFC 2660</a>] The Secure HyperText Transfer Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc2774.html">RFC 2774</a>] An HTTP Extension Framework.
[<a href="https://www.rfc-editor.org/rfc/rfc2817.html">RFC 2817</a>] Upgrading to TLS Within HTTP/1.1.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2616.html">RFC 2616</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2818.html">RFC 2818</a>] HTTP Over TLS.
                Defines URI scheme https:. 
[<a href="https://www.rfc-editor.org/rfc/rfc2936.html">RFC 2936</a>] HTTP MIME Type Handler Detection.
[<a href="https://www.rfc-editor.org/rfc/rfc2964.html">RFC 2964</a>] Use of HTTP State Management.
[<a href="https://www.rfc-editor.org/rfc/rfc2965.html">RFC 2965</a>] HTTP State Management Mechanism.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2109.html">RFC 2109</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3143.html">RFC 3143</a>] Known HTTP Proxy/Caching Problems.
[<a href="https://www.rfc-editor.org/rfc/rfc3205.html">RFC 3205</a>] On the use of HTTP as a Substrate.
[<a href="https://www.rfc-editor.org/rfc/rfc3229.html">RFC 3229</a>] Delta encoding in HTTP.
[<a href="https://www.rfc-editor.org/rfc/rfc3230.html">RFC 3230</a>] Instance Digests in HTTP.
[<a href="https://www.rfc-editor.org/rfc/rfc3675.html">RFC 3675</a>] .sex Considered Dangerous.
[<a href="https://www.rfc-editor.org/rfc/rfc3875.html">RFC 3875</a>] The Common Gateway Interface (CGI) Version 1.1.<hr /><b>Obsolete RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2068.html">RFC 2068</a>] Hypertext Transfer Protocol -- HTTP/1.1.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2616.html">RFC 2616</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2069.html">RFC 2069</a>] An Extension to HTTP : Digest Access Authentication.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2617.html">RFC 2617</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2109.html">RFC 2109</a>] HTTP State Management Mechanism.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2965.html">RFC 2965</a>.
                		  </div>
		  
</section>


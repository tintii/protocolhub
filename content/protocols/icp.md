---
id: protocol-icp
slug: icp
name: ICP
expandedName: Internet Cache Protocol
origin: historical
provenance:
  source: protocols/protocol_ICP.htm
  sha256: fa95b712577bac77bfa038efb666fefd8cc560a27ff30a94803c7c95b4a1e446
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Internet Cache Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Internet Cache Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 3130 (UDP)
originalUpdate: '2006-09-01 11:06:53'
rfcs:
  - 2186
  - 2187
  - 3143
related: []
glossary: []
sections:
  - id: description
    title: Description
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

			The Internet Cache Protocol (ICP) is a protocol used for coordinating web caches. Its purpose is to find out the most appropriate location to retrieve a requested object from in the situation where multiple caches are in use at a single site. The goal is to use the caches as efficiently as possible, and to minimize the number of remote requests to the originating server.
<br />
<br />Parents usually sit closer to the internet connection than the child. If a child cache cannot find an object, the query will be sent to the parent cache, which will fetch, cache, and pass on the request. While a parent server will resolve cache misses, a sibling will not. Siblings are caches of equal hierarchical status, whose purpose is to distribute the load amongst the siblings.
<br />
<br />When a request comes into one cache in a cluster of siblings, ICP is used to query adjacent caches for the object being requested. If the adjacent cache has the object, it will be transferred from the adjacent cache, instead of being queried from the original server. This is often called a "near miss" - the object was not found in the cache (a "miss") but it was loaded from a nearby cache, instead of from a remote server.
<br />
<br /><b>ICP message Format</b>
<br />The ICP message format consists of a 20 byte header followed by a variable sized payload. All fields are represented in network byte order.
<br />
<br />NOTE: All fields must be represented in network byte order. ICP messages must not exceed 16,384 bytes in length.
<br />
<br />
<br /><ul><li><b>Opcode</b><br /></li>
<li>The following table shows currently defined ICP opcodes
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><b>Value</b></td><td><b>Name</b></td></tr><tr><td>0</td><td>ICP_OP_INVALID</td></tr><tr><td>1</td><td>ICP_OP_QUERY.</td></tr><tr><td>2</td><td>ICP_OP_HIT.</td></tr><tr><td>3</td><td>ICP_OP_MISS.</td></tr><tr><td>4</td><td>ICP_OP_ERR.</td></tr><tr><td>5 - 9</td><td>UNUSED</td></tr><tr><td>10</td><td>ICP_OP_SECHO.</td></tr><tr><td>11</td><td>ICP_OP_DECHO.</td></tr><tr><td>12 - 20</td><td>UNUSED</td></tr><tr><td>21</td><td>ICP_OP_MISS_NOFETCH.</td></tr><tr><td>22</td><td>ICP_OP_DENIED.</td></tr><tr><td>23</td><td>ICP_OP_HIT_OBJ.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Version</b><br /></li>
<li>The ICP protocol version number.
<br /><br /></li>
<li><b>Message Length</b><br /></li>
<li>The total length of the ICP message in bytes.
<br /><br /></li>
<li><b>Request Number</b><br /></li>
<li>An opaque identifier. When responding to a query, this value must be copied into the reply message.
<br /><br /></li>
<li><b>Options</b><br /></li>
<li>Option flags that allows extension of this version of the protocol in certain, limited ways.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><b>Value</b></td><td><b>Flag</b></td><td><b>Description</b></td></tr><tr><td>0x40000000</td><td>ICP_FLAG_SRC_RTT</td><td>This flag is set in an ICP_OP_QUERY message indicating that the requester would like the ICP reply to include the responder's measured RTT to the origin server.</td></tr><tr><td>0x80000000</td><td>ICP_FLAG_HIT_OBJ</td><td>This flag is set in an ICP_OP_QUERY message indicating that it is okay to respond with an ICP_OP_HIT_OBJ message if the object data will fit in the reply.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Option Data</b><br /></li>
<li>A four-octet field to support optional features. The following ICP features make use of this field:      The ICP_FLAG_SRC_RTT option uses the low 16-bits of Option Data to return RTT measurements. The ICP_FLAG_SRC_RTT option is further described below.
<br /><br /></li>
<li><b>Sender Host Address</b><br /></li>
<li>The IPv4 address of the host sending the ICP message. This field should probably not be trusted over what is provided by getpeer- name(), accept(), and recvfrom(). There is some ambiguity over the original purpose of this field. In practice it is not used.
<br /><br /></li>
<li><b>Payload</b><br /></li>
<li>The contents of the Payload field vary depending on the Opcode, but most often it contains a null-terminated URL string.</li></ul>
<br /><hr />
<br /><b>ICP Opcodes</b>
<br /><ul><li><b>ICP_OP_INVALID</b><br /></li>
<li>A place holder to detect zero-filled or malformed messages. A cache must never intentionally send an ICP_OP_INVALID message. ICP_OP_ERR should be used instead.
<br /><br /></li>
<li><b>ICP_OP_QUERY</b><br /></li>
<li>A query message. NOTE this opcode has a different payload format than most of the others.  First is the requester's IPv4 address, followed by a URL. The Requester Host Address is not that of the cache generating the ICP message, but rather the address of the caches's client that originated the request. The Requester Host Address is often zero filled. An ICP message with an all-zero Requester Host Address address should be taken as one where the requester address is not specified; it does not indicate a valid IPv4 address.
<br /><br /></li>
<li><b>ICP_OP_SECHO</b><br /></li>
<li>Similar to ICP_OP_QUERY, but for use in simulating a query to an origin server. When ICP is used to select the closest neighbor, the origin server can be included in the algorithm by bouncing an ICP_OP_SECHO message off it's echo port. The payload is simply the null-terminated URL.
<br /><br /></li>
<li>NOTE: the echo server will not interpret the data (i.e. we could send it anything). This opcode is used to tell the difference between a legitimate query or response, random garbage, and an echo response.
<br /><br /></li>
<li><b>ICP_OP_DECHO</b><br /></li>
<li>Similar to ICP_OP_QUERY, but for use in simulating a query to a cache which does not use ICP. When ICP is used to choose the closest neighbor, a non-ICP cache can be included in the algorithm by bouncing an ICP_OP_DECHO message off it's echo port. The payload is simply the null-terminated URL.
<br /><br /></li>
<li>NOTE: one problem with this approach is that while a system's echo port may be functioning perfectly, the cache software may not be running at all.</li></ul>
<br />
<br />One of the following six ICP opcodes are sent in response to an ICP_OP_QUERY message.  Unless otherwise noted, the payload must be the null-terminated URL string. Both the URL string and the Request Number field must be exactly the same as from the ICP_OP_QUERY message.
<br />
<br /><ul><li><b>ICP_OP_HIT</b><br /></li>
<li>An ICP_OP_HIT response indicates that the requested URL exists in this cache and that the requester is allowed to retrieve it.
<br /><br /></li>
<li><b>ICP_OP_MISS</b><br /></li>
<li>An ICP_OP_MISS response indicates that the requested URL does not exist in this cache.  The querying cache may still choose to fetch the URL from the replying cache.
<br /><br /></li>
<li><b>ICP_OP_ERR</b><br /></li>
<li>An ICP_OP_ERR response indicates some kind of error in parsing or handling the query message (e.g. invalid URL).
<br /><br /></li>
<li><b>ICP_OP_MISS_NOFETCH</b><br /></li>
<li>An ICP_OP_MISS_NOFETCH response indicates that this cache is up, but is in a state where it does not want to handle cache misses. An example of such a state is during a startup phase where a cache might be rebuilding its object store. A cache in such a mode may wish to return ICP_OP_HIT for cache hits, but not ICP_OP_MISS for misses. ICP_OP_MISS_NOFETCH essentially means "I am up and running, but please don't fetch this URL from me now."
<br /><br /></li>
<li><b>ICP_OP_DENIED</b><br /></li>
<li>An ICP_OP_DENIED response indicates that the querying site is not allowed to retrieve the named object from this cache. Caches and proxies may implement complex access controls. This reply must be interpreted to mean "you are not allowed to request this particular URL from me at this particular time."
<br /><br /></li>
<li><b>ICP_OP_HIT_OBJ</b><br /></li>
<li>Just like an ICP_OP_HIT response, but the actual object data has been included in this reply message. Many requested objects are small enough that it is possible to include them in the query response and avoid the need to make a subsequent HTTP request for the object.
<br /><br /></li>
<li><b>UNRECOGNIZED OPCODES</b><br /></li>
<li>ICP messages with unrecognized or unused opcodes should be ignored, i.e. no reply generated.  The application may choose to note the anomalous behavior in a log file.</li></ul>
<br />
<br /><b>ICP Option Flags</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><b>Value</b></td><td><b>Flag</b></td><td><b>Description</b></td></tr><tr><td>0x80000000</td><td>ICP_FLAG_HIT_OBJ</td><td>This flag is set in an ICP_OP_QUERY message indicating that it is okay to respond with an ICP_OP_HIT_OBJ message if the object data will fit in the reply.</td></tr><tr><td>0x40000000</td><td>ICP_FLAG_SRC_RTT</td><td>This flag is set in an ICP_OP_QUERY message indicating that the requester would like the ICP reply to include the responder"s measured RTT to the origin server.</td></tr></tbody></table></div></div>
<br />
<br />		    
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">VINES<img src="/supporting/images/tline_l_top.gif" alt="" /><br />UDP<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>ICP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Cache</b><br />Cache is a special high-speed storage mechanism. It can be either a reserved section of main memory or an independent high-speed storage device. Two types of caching are commonly used in personal computers: memory caching and disk caching<br /><br /><b>ICP</b><br />ICP (Internet Cache Protocol) is a protocol used for coordinating web caches. Its purpose is to find out the most appropriate location to retrieve a requested object from in the situation where multiple caches are in use at a single site.<br /><br /><b>Payload</b><br />Payload or mission bit stream is the data, such as a data field, block, or stream, being processed or transported ¡ª the part that represents user information and user overhead information. It may include user-requested additional information, such as network management and accounting information. Note that the payload does not include system overhead information for the processing or transportation system.<br /><br /><b>Remote</b><br />In networks, remote refers to files, devices, and other resources that are not connected directly to your workstation. Resources at your workstation are considered local.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2186.html">RFC 2186</a>] Internet Cache Protocol (ICP), version 2.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2187.html">RFC 2187</a>] Application of Internet Cache Protocol (ICP), version 2.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3143.html">RFC 3143</a>] Known HTTP Proxy/Caching Problems.
                		  </div>
		  
</section>


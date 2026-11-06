---
id: protocol-socks
slug: socks
name: SOCKS
expandedName: Protocol for sessions traversal across firewall securely
origin: historical
provenance:
  source: protocols/protocol_SOCKS.htm
  sha256: c6f22772073da6b7e617eafa5378f40eb9758d21d0714ad528799e020a54d748
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Protocol for sessions traversal across firewall securely
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Protocol for sessions traversal across firewall securely
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application protocol
  - label: Latest Version
    html: SOCKSv5
  - label: Ports
    html: 1080£¨TCP£©
  - label: Related protocols
    html: 'WAIS,<br />IETF'
  - label: Working groups
    html: 'Aft, Authenticated Firewall Traversal'
originalUpdate: '2005-11-07 17:31:49'
rfcs:
  - 1928
  - 1929
  - 1961
  - 3089
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

			SOCKS is a networking proxy protocol that enables hosts on one side of a SOCKS server to gain full access to hosts on the other side of the SOCKS server without requiring direct IP-reachability.
<br />
<br />This protocol provides a framework for client-server applications in both the TCP and UDP domains to conveniently and securely use the services of a network firewall. The protocol is conceptually a "shim-layer" between the application layer and the transport layer, and as such does not provide network layer gateway services, such as forwarding of ICMP messages.
<br />
<br />SOCKS includes two components, the SOCKS server and the SOCKS client. The SOCKS server is implemented at the application layer, while the SOCKS client is implemented between the application and transport layers. The basic purpose of the protocol is to enable hosts on one side of a SOCKS server to gain access to hosts on the other side of a SOCKS Server, without requiring direct IP-reachability.
<br />
<br />SOCKS Version 4 provides unsecured firewall traversal for TCP-based client-server applications, including TELNET, FTP, and protocols such as HTTP, WAIS and GOPHER. This version of SOCKS extends the SOCKS Version 4 model to include UDP, and extends the framework to include provisions for generalized strong authentication schemes. It also adapts the addressing scheme to encompass domain-name and V6 IP addresses.
<br />The implementation of the SOCKS protocol typically involves the recompilation or relinking of TCP-based client applications to use the appropriate encapsulation routines in the SOCKS library. The difference between SOCKSv4 and SOCKSv5 is SOCKSv4 does not support authentication nor UDP proxy. SOCKSv5 supports a variety of authentication methods and UDP proxy.
<br /><hr />
<br /><b>Packet Format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p><b>Method</b></p></td><td><p><b>Description</b></p></td></tr><tr><td><p>0</p></td><td><p>No Authentication Required.</p></td></tr><tr><td><p>1</p></td><td><p>GSSAPI.</p></td></tr><tr><td><p>2</p></td><td><p>Username/Password.</p></td></tr><tr><td><p>3</p></td><td><p>Challenge-Handshake Authentication Protocol.</p></td></tr><tr><td><p>4</p></td><td><p> </p></td></tr><tr><td><p>5</p></td><td><p>Challenge-Response Authentication Method.</p></td></tr><tr><td><p>6</p></td><td><p>Secure Sockets Layer.</p></td></tr><tr><td><p>7</p></td><td><p>NDS Authentication.</p></td></tr><tr><td><p>8</p></td><td><p>Multi-Authentication Framework.</p></td></tr><tr><td><p>9<br />-<br />127</p></td><td><p> </p></td></tr><tr><td><p>128<br />-<br />254</p></td><td><p>Private Methods.</p></td></tr><tr><td><p>255</p></td><td><p>No Acceptable Methods.</p></td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>Existing Practice</b> 
<br /><li><b>SOCKSv4</b></li>
<br />There currently exists a protocol, SOCKS Version 4, that provides for unsecured firewall traversal for TCP-based client-server applications, including TELNET, FTP and the popular information- discovery protocols such as HTTP, WAIS and GOPHER. 
<br />This new protocol extends the SOCKS Version 4 model to include UDP, and extends the framework to include provisions for generalized strong authentication schemes, and extends the addressing scheme to encompass domain-name and V6 IP addresses. 
<br />
<br /><li><b>SOCKSv5</b></li>
<br />SOCKSv5 is an IETF (Internet Engineering Task Force) approved standard generic, proxy protocol for TCP/IP-based networking applications. The SOCKS protocol provides a flexible framework for developing secure communications by easily integrating other security technologies.
<br />
<br />SOCKSv5 is an IETF (Internet Engineering Task Force) approved standard generic, proxy protocol for TCP/IP-based networking applications. The SOCKS protocol provides a flexible framework for developing secure communications by easily integrating other security technologies.
<br />
<br /><b>SOCKSv5 Protocol</b>
<br />The SOCKSv5 protocol, also known as authenticated firewall traversal (AFT), is an open Internet standard for performing network proxies at the transport layer. It resolves several issues that SOCKS version 4 protocol did not fully address or omitted:
<br /><ul><li>Strong authentication.<br /></li>
<li>Authentication method negotiation.<br /></li>
<li>Address resolution proxy.<br /></li>
<li>Proxy for UDP-based applications.</li></ul>
<br />There are two additional SOCKSv5-related standards to support authentication methods:
<br /><ul><li>Username/Password authentication for SOCKSv5.<br /></li>
<li>GSS-API (Generic Security Service Application Programming Interface) authentication for SOCKSv5.</li></ul>
<br /><hr />
<br /><b>Protocol Structure - Socks version 5</b>
<br /><li><b>Version identifier/method selection message</b></li>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>1 byte </p></td><td><p>1 byte </p></td><td><p>1-225 bytes </p></td></tr><tr><td><p>Version </p></td><td><p>NMethods </p></td><td><p>Methods </p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Methods</b><br /></li>
<li>Possible values for methods are
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>00</p></td><td><p>No authentication required</p></td></tr><tr><td><p>01</p></td><td><p>GSSAPI</p></td></tr><tr><td><p>02</p></td><td><p>Username/Password</p></td></tr><tr><td><p>3</p></td><td><p>IANA assigned</p></td></tr><tr><td><p>4 to FE</p></td><td><p>Reserved for private methods</p></td></tr><tr><td><p>FF</p></td><td><p>No acceptable methods</p></td></tr></tbody></table></div></div></li></ul>
<br /><li><b>The Socks request message</b></li>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>1 byte</p></td><td><p>1 byte</p></td><td><p>Value of 0</p></td><td><p>1 byte</p></td><td><p>Variable</p></td><td><p>2 bytes</p></td></tr><tr><td><p>Version</p></td><td><p>CMD</p></td><td><p>Rsv</p></td><td><p>ATYP</p></td><td><p>DST addr</p></td><td><p>DST Port</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>CMD</b><br /></li>
<li>Possible values for the cmnd field are:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>01</p></td><td><p>CONNECT1</p></td></tr><tr><td><p>02</p></td><td><p>BIND</p></td></tr><tr><td><p>03</p></td><td><p>UDP ASSOCIATE</p></td></tr></tbody></table></div></div><br /></li>
<li><b>ATYP</b><br /></li>
<li>Address type of the following address:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>01</p></td><td>IP V4 address</td></tr><tr><td><p>03</p></td><td>DOMAINNAME</td></tr><tr><td>p class="MsoNormal" align="center"&gt;04</td><td>IP V6 address: X'04'</td></tr></tbody></table></div></div></li></ul>
<br /><li><b>SOCKs reply message</b></li>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p>1 byte</p></td><td><p>1 byte </p></td><td><p>Value of 0 </p></td><td><p>1 byte </p></td><td><p>Variable </p></td><td><p>2 bytes </p></td></tr><tr><td><p>Version </p></td><td><p>REP </p></td><td><p>RSV </p></td><td><p>ATYP </p></td><td><p>BND addr </p></td><td><p>BND Port </p></td></tr></tbody></table></div></div>
<br /><ul><li><b>REP</b><br /></li>
<li>The reply field.
<br /></li><li>Possible values for the reply field are:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 8" tabindex="0"><table><caption>Description: preserved table 8</caption><tbody><tr><td><p>00</p></td><td><p>Succeeded</p></td></tr><tr><td><p>01</p></td><td><p>General SOCKS server failure</p></td></tr><tr><td><p>02</p></td><td><p>Connection not allowed by ruleset</p></td></tr><tr><td><p>03</p></td><td><p>Network unreachable</p></td></tr><tr><td><p>04</p></td><td><p>Host unreachable</p></td></tr><tr><td><p>05</p></td><td><p>Connection refused</p></td></tr><tr><td><p>06</p></td><td><p>TTL expired</p></td></tr><tr><td><p>07</p></td><td><p>Command not supported</p></td></tr><tr><td><p>08</p></td><td><p>Address type not supported</p></td></tr><tr><td><p>09 to FF</p></td><td><p>Unassigned</p></td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>Protocol Structure for UDP-based Clients</b>
<br />Each UDP datagram carries a UDP request header with it:
<br />UDP request header
<br /><div><div class="table-scroll" role="region" aria-label="Description table 9" tabindex="0"><table><caption>Description: preserved table 9</caption><tbody><tr><td><p>2byte </p></td><td><p>1 byte </p></td><td><p>1 byte </p></td><td><p>Variable </p></td><td><p>2 </p></td><td><p>Variable </p></td></tr><tr><td><p>RSV </p></td><td><p>FRAG </p></td><td><p>ATYP </p></td><td><p>DST Addr </p></td><td><p>DST Port </p></td><td><p>Data </p></td></tr></tbody></table></div></div>
<br /><ul><li><b>RSV:</b>
<br />This field is reserved. Its value is 0000.<br /><br /></li>

<li><b>FRAG:</b>
<br />This field contains the current fragment number, and indicates whether the datagram is one of a number of fragments.<br /><br /></li>

<li><b>ATYP:</b>
<br />Address type of the following address.<br /><br /></li>

<li><b>DST addr:</b>
<br />Desired destination address.<br /><br /></li>

<li><b>DST Port:</b>
<br />Desired destination port.<br /><br /></li>

<li><b>Data:</b>
<br />User data.</li></ul>
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Procedure for TCP-based clients</b>
 
When a TCP-based client wishes to establish a connection to an object that is 
reachable only via a firewall (such determination is left up to the implementation), 
it must open a TCP connection to the appropriate SOCKS port on the SOCKS 
server system. The SOCKS service is conventionally located on TCP port 1080. If 
the connection request succeeds, the client enters a negotiation for the 
authentication method to be used, authenticates with the chosen method, then 
sends a relay request. The SOCKS server evaluates the request, and either 
establishes the appropriate connection or denies it. 

Unless otherwise noted, the decimal numbers appearing in packet- format diagrams 
represent the length of the corresponding field, in octets. Where a given octet must 
take on a specific value, the syntax X'hh' is used to denote the value of the single 
octet in that field. When the word 'Variable' is used, it indicates that the 
corresponding field has a variable length defined either by an associated (one or 
two octet) length field, or by a data type field. 

The client connects to the server, and sends a version identifier/method selection 
message:

          +----+----------+----------+
          |VER | NMETHODS | METHODS  |
          +----+----------+----------+
          | 1  |    1     | 1 to 255 |
          +----+----------+----------+

The VER field is set to X'05' for this version of the protocol. The NMETHODS field 
contains the number of method identifier octets that appear in the METHODS field. 
The server selects from one of the methods given in METHODS, and sends a METHOD 
selection message: 

          +----+--------+
          |VER | METHOD |
          +----+--------+
          | 1  |   1    |
          +----+--------+

If the selected METHOD is X'FF', none of the methods listed by the client are 
acceptable, and the client MUST close the connection. 
The values currently defined for METHOD are:

          X'00' NO AUTHENTICATION REQUIRED
          X'01' GSSAPI
          X'02' USERNAME/PASSWORD
          X'03' to X'7F' IANA ASSIGNED
          X'80' to X'FE' RESERVED FOR PRIVATE METHODS
          X'FF' NO ACCEPTABLE METHODS

The client and server then enter a method-specific sub-negotiation. Descriptions of 
the method-dependent sub-negotiations appear in separate memos. 
Developers of new METHOD support for this protocol should contact IANA for a 
METHOD number. The ASSIGNED NUMBERS document should be referred to for a 
current list of METHOD numbers and their corresponding protocols. 
Compliant implementations MUST support GSSAPI and SHOULD support 
USERNAME/PASSWORD authentication methods.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Requests</b>

Once the method-dependent subnegotiation has completed, the client sends the request 
details. If the negotiated method includes encapsulation for purposes of integrity 
checking and/or confidentiality, these requests MUST be encapsulated in the method-
dependent encapsulation. The SOCKS request is formed as follows:

          +----+-----+-------+------+----------+----------+
          |VER | CMD |  RSV  | ATYP | DST.ADDR | DST.PORT |
          +----+-----+-------+------+----------+----------+
          | 1  |  1  | X'00' |  1   | Variable |    2     |
          +----+-----+-------+------+----------+----------+

    Where:

          VER    protocol version: X'05'
          CMD
             CONNECT X'01'
             BIND X'02'
             UDP ASSOCIATE X'03'
          RSV    RESERVED
          ATYP   address type of following address
             IP V4 address: X'01'
             DOMAINNAME: X'03'
             IP V6 address: X'04'
          DST.ADDR       desired destination address
          DST.PORT desired destination port in network octet
          order

The SOCKS server will typically evaluate the request based on source and destination 
addresses, and return one or more reply messages, as appropriate for the request type. </pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Replies</b>

The SOCKS request information is sent by the client as soon as it has established a 
connection to the SOCKS server, and completed the authentication negotiations. 
The server evaluates the request, and returns a reply formed as follows:

          +----+-----+-------+------+----------+----------+
          |VER | REP |  RSV  | ATYP | BND.ADDR | BND.PORT |
          +----+-----+-------+------+----------+----------+
          | 1  |  1  | X'00' |  1   | Variable |    2     |
          +----+-----+-------+------+----------+----------+

    Where:

          VER    protocol version: X'05'
          REP    Reply field:
             X'00' succeeded
             X'01' general SOCKS server failure
             X'02' connection not allowed by ruleset
             X'03' Network unreachable
             X'04' Host unreachable
             X'05' Connection refused
             X'06' TTL expired
             X'07' Command not supported
             X'08' Address type not supported
             X'09' to X'FF' unassigned
          RSV    RESERVED
          ATYP   address type of following address
             IP V4 address: X'01'
             DOMAINNAME: X'03'
             IP V6 address: X'04'
          BND.ADDR       server bound address
          BND.PORT       server bound port in network octet order

Fields marked RESERVED (RSV) must be set to X'00'. 
If the chosen method includes encapsulation for purposes of authentication, 
integrity and/or confidentiality, the replies are encapsulated in the method-
dependent encapsulation.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: Procedure for UDP-based clients</b>

A UDP-based client MUST send its datagrams to the UDP relay server at the UDP port 
indicated by BND.PORT in the reply to the UDP ASSOCIATE request. If the selected 
authentication method provides encapsulation for the purposes of authenticity, 
integrity, and/or confidentiality, the datagram MUST be encapsulated using the 
appropriate encapsulation. Each UDP datagram carries a UDP request header with it: 

          +----+------+------+----------+----------+----------+
          |RSV | FRAG | ATYP | DST.ADDR | DST.PORT |   DATA   |
          +----+------+------+----------+----------+----------+
          | 2  |  1   |  1   | Variable |    2     | Variable |
          +----+------+------+----------+----------+----------+

    The fields in the UDP request header are:

          RSV  Reserved X'0000'
          FRAG    Current fragment number
          ATYP    address type of following addresses:
             IP V4 address: X'01'
             DOMAINNAME: X'03'
             IP V6 address: X'04'
          DST.ADDR       desired destination address
          DST.PORT       desired destination port
          DATA     user data

When a UDP relay server decides to relay a UDP datagram, it does so silently, without 
any notification to the requesting client. Similarly, it will drop datagrams it cannot 
or will not relay. When a UDP relay server receives a reply datagram from a remote 
host, it MUST encapsulate that datagram using the above UDP request header, and 
any authentication-method-dependent encapsulation.

Implementation of fragmentation is optional; an implementation that does not support 
fragmentation MUST drop any datagram whose FRAG field is other than X'00'. The 
programming interface for a SOCKS-aware UDP MUST report an available buffer space 
for UDP datagrams that is smaller than the actual space provided by the operating 
system:

         if ATYP is X'01' - 10+method_dependent octets smaller
         if ATYP is X'03' - 262+method_dependent octets smaller
         if ATYP is X'04' - 20+method_dependent octets smaller</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		</blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>GSS-API</b><br />The GSS-API (Generic Security Service Application Program Interface) is a generic API for doing client-server authentication.
<br />
<br />A typical GSS-API caller is itself a communications protocol, calling on GSS-API in order to protect its communications with authentication, integrity, and/or confidentiality security services. A GSS-API caller accepts tokens provided to it by its local GSS-API implementation and transfers the tokens to a peer on a remote system; that peer passes the received tokens to its local GSS-API implementation for processing. The security services available through GSS-API in this fashion are implementable (and have been implemented) over a range of underlying mechanisms based on secret-key and public-key cryptographic technologies.
<br />
<br />The GSS-API separates the operations of initializing a security context between peers, achieving peer entity authentication (GSS_Init_sec_context() and GSS_Accept_sec_context() calls), from the operations of providing per-message data origin authentication and data integrity protection (GSS_GetMIC() and GSS_VerifyMIC() calls) for messages subsequently transferred in conjunction with that context.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>WAIS</b><br />WAIS (Wide Area Information Server) is an Internet system in which specialized subject databases are created at multiple server locations, kept track of by a directory of servers at one location, and made accessible for searching by users with WAIS client programs. The user of WAIS is provided with or obtains a list of distributed databases. The user enters a search argument for a selected database and the client then accesses all the servers on which the database is distributed. The results provide a description of each text that meets the search requirements. The user can then retrieve the full text.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1928.html">RFC 1928</a>] SOCKS Protocol Version 5.
[<a href="https://www.rfc-editor.org/rfc/rfc1929.html">RFC 1929</a>] Username/Password Authentication for SOCKS V5.
[<a href="https://www.rfc-editor.org/rfc/rfc1961.html">RFC 1961</a>] GSS-API Authentication Method for SOCKS Version 5.
[<a href="https://www.rfc-editor.org/rfc/rfc3089.html">RFC 3089</a>] A SOCKS-based IPv6/IPv4 Gateway Mechanism
                		  </div>
		  
</section>


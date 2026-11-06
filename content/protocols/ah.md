---
id: protocol-ah
slug: ah
name: AH
expandedName: Authentication Header
origin: historical
provenance:
  source: protocols/protocol_AH.htm
  sha256: 64c339ed5250fdb6c8f4e0967593d72d0b9a96f1dc6700bff5584879f35405df
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Authentication Header
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Authentication Header
  - label: Protocol suite
    html: ' TCP/IP'
  - label: Layer
    html: Network Layer
  - label: Working groups
    html: 'Ipsec, IP Security Protocol'
originalUpdate: '2006-01-12 17:34:38'
rfcs:
  - 1825
  - 1826
  - 1828
  - 1852
  - 2085
  - 2401
  - 2402
  - 2403
  - 2404
  - 2411
  - 2841
  - 2857
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

			The IP Authentication Header (AH) is used to provide connection less integrity and data origin authentication for IP datagrams (here after referred to as just "authentication"), and to provide protection against replays. This latter, optional service may be selected, by the receiver, when a Security Association is established. (Although the default calls for the sender to increment the Sequence Number used for anti-replay, the service is effective only if the receiver checks the Sequence Number.) AH provides authentication for as much of the IP header as possible, as well as for upper level protocol data. However, some IP header fields may change in transit and the value of these fields, when the packet arrives at the receiver, may not be predictable by the sender. The values of such fields cannot be protected by AH. Thus the protection provided to the IP header by AH is somewhat piecemeal.
<br />
<br />AH may be applied alone, in combination with the IP Encapsulating Security Payload (ESP), or in a nested fashion through the use of tunnel mode (see "Security Architecture for the Internet Protocol", hereafter referred to as the Security Architecture document). Security services can be provided between a pair of communicating hosts, between a pair of communicating security gateways, or between a security gateway and a host. ESP may be used to provide the same security services, and it also provides a confidentiality (encryption) service. The primary difference between the authentication provided by ESP and AH is the extent of the coverage. Specifically, ESP does not protect any IP header fields unless those fields are encapsulated by ESP (tunnel mode). For more details on how to use AH and ESP in various network environments, seethe Security Architecture document.
<br />
<br />It is assumed that the reader is familiar with the terms and concepts described in the Security Architecture document. In particular, the reader should be familiar with the definitions of security services offered by AH and ESP, the concept of Security Associations, the ways in which AH can be used in conjunction with ESP, and the different key management options available for AH and ESP.
<br />
<br />AH offers an anti-replay (partial sequence integrity) service at the discretion of the receiver, to help counter denial of service attacks. AH is an appropriate protocol to employ when confidentiality is not required (or is not permitted, e.g , due to government restrictions on use of encryption). AH also provides authentication for selected portions of the IP header, which may be necessary in some contexts. For example, if the integrity of an IPv4 option or IPv6 extension header must be protected en route between sender and receiver, AH can provide this service (except for the non-predictable but mutable parts of the IP header.)
<br />
<br />When used with IPv6, the Authentication Header normally appears after the IPv6 Hop-by-Hop Header and before the IPv6 Destination Options. When used with IPv4, the Authentication Header normally follows the main IPv4 header.
<br /><hr />
<br /><b>Header Format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>1 byte</p></td><td><p>1 byte</p></td><td><p>2 bytes</p></td></tr><tr><td><p>Next header</p></td><td><p>Payload Length</p></td><td><p>Reserved</p></td></tr><tr><td colspan="3"><p>Security parameters index</p></td></tr><tr><td colspan="3"><p>Security number</p></td></tr><tr><td colspan="3"><p>Authentication data(variable number of 32-bit words)</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Next header</b><br /></li>
<li>8 bits. The Next Header is an field that identifies the type of the next payload after the Authentication Header.
<br /><br /></li>
<li><b>Payload Length</b><br /></li>
<li>8 bits. Size of the Authentication Data payload in 32 bit words - 2. May be cleared to zero.
<br /><br /></li>
<li><b>SPI, Security Parameters Index</b><br /></li>
<li>32 bits. Contains a pseudo random value used to identify the security association for this datagram. If cleared to zero, a security association does not exist. Values in the range 1 to 255 are reserved.
<br /><br /></li>
<li><b>Sequence number</b><br /></li>
<li>32 bits. The sequence number contains a monotonically increasing counter value (sequence number).
<br /><br /></li>
<li><b>Authentication Data</b><br /></li>
<li>Variable length. This field must contain a multiple of 32 bit words.</li></ul>
<br /><hr />
<br /><b>Authentication Header Processing</b>
<br /><li><b>Authentication Header Location</b></li>
<br />AH may be employed in two ways: transport mode or tunnel mode. The former mode is applicable only to host implementations and provides protection for upper layer protocols, in addition to selected IP header fields.
<br />
<br /><ul><li><b>IPv4</b><br /></li>
<li>In transport mode, AH is inserted after the IP header and before an upper layer protocol, e.g., TCP, UDP, ICMP, etc. or before any other IPsec headers that have already been inserted. In the context of IPv4, this calls for placing AH after the IP header (and any options that it contains), but before the upper layer protocol.
<br /><br /></li>
<li>Before Applying AH
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>orig IP hdr(any options)</p></td><td><p>TCP</p></td><td><p>Data</p></td></tr></tbody></table></div></div><br /></li>
<li>After Applying AH
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>orig IP hdr(any options)</p></td><td><p>AH</p></td><td><p>TCP</p></td><td><p>Data</p></td></tr><tr><td colspan="4"><p>authenticated</p></td></tr></tbody></table></div></div></li></ul>
<br />
<br /><ul><li><b>IPv6</b><br /></li>
<li>In the IPv6 context, AH is viewed as an end-to-end payload, and thus should appear after hop-by-hop, routing, and fragmentation extension headers. The destination options extension header(s) could appear either before or after the AH header depending on the semantics desired. The following diagram illustrates AH transport mode positioning for a typical IPv6 packet.
<br /><br /></li>
<li>Before Applying AH
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>orig IP hdr</p></td><td><p>ext hdrs if present</p></td><td><p>TCP</p></td><td><p>Data</p></td></tr></tbody></table></div></div><br /></li>
<li>After Applying AH
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>orig IP hdr</p></td><td><p>hop-by-hop, dest*, routing, fragment.</p></td><td><p>AH</p></td><td><p>dest opt*</p></td><td>TCP</td><td>Data</td></tr><tr><td colspan="6"><p>authenticated except for mutable fields</p></td></tr></tbody></table></div></div><br /><br /></li>

<li>In tunnel mode, AH protects the entire inner IP packet, including the entire inner IP header. The position of AH in tunnel mode, relative to the outer IP header, is the same as for AH in transport mode.  The following diagram illustrates AH tunnel mode positioning for typical IPv4 and IPv6 packets.
<br /></li><li><b>IPv4</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>orig IP hdr(any options)</p></td><td><p>AH</p></td><td><p>orig IP hdr* (any options)</p></td><td><p>TCP</p></td><td><p>Data</p></td></tr><tr><td colspan="5"><p>authenticated except for mutable fields in the new IP hdr</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>IPv6</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p>new IP hdr*</p></td><td><p>ext hdrs* if present</p></td><td><p>AH</p></td><td><p>orig IP hdr*</p></td><td><p>ext hdrs* if present</p></td><td><p>TCP</p></td><td><p>Data</p></td></tr><tr><td colspan="7"><p>authenticated except for mutable fields in new IP hdr</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li>= construction of outer IP hdr/extensions and modification of inner IP hdr/extensions is discussed below.</li></ul><br /><br /></li>

<li><b>Authentication Algorithms</b><br /></li>
<li>The authentication algorithm employed for the ICV computation is specified by the SA. For point-to-point communication, suitable authentication algorithms include keyed Message Authentication Codes (MACs) based on symmetric encryption algorithms (e.g., DES) or on one-way hash functions (e.g., MD5 or SHA-1). For multicast communication, one-way hash algorithms combined with asymmetric signature algorithms are appropriate, though performance and space considerations currently preclude use of such algorithms.
<br /><br /></li>
<li><b>Outbound Packet Processing</b><br /></li>
<li>In transport mode, the sender inserts the AH header after the IP header and before an upper layer protocol header, as described above. In tunnel mode, the outer and inner IP header/extensions can be inter-related in a variety of ways. The construction of the outer IP header/extensions during the encapsulation process is described in the Security Architecture document.
<br /><br /></li>
<li><b>Inbound Packet Processing</b><br /></li>
<li>If there is more than one IPsec header/extension present, the processing for each one ignores (does not zero, does not use) any IPsec headers applied subsequent to the header being processed.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>AH</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Algorithm</b><br />Algorithm is a formula or set of steps for solving a particular problem. To be an algorithm, a set of rules must be unambiguous and have a clear stopping point. Algorithms can be expressed in any language, from natural languages like English or French to programming languages like FORTRAN.
<br />
<br />We use algorithms every day. For example, a recipe for baking a cake is an algorithm. Most programs, with the exception of some artificial intelligence applications, consist of algorithms. Inventing elegant algorithms -- algorithms that are simple and require the fewest steps possible -- is one of the principal challenges in programming.<br /><br /><b>Anti-replay</b><br />The anti-replay protocol is part of the Internet Engineering Task Force (IETF) Internet Protocol Security (IPsec) standard. Anti-replay ensures IP packet-level security by making it impossible for a hacker to intercept message packets and insert changed packets into the data stream between a source computer and a destination computer. By detecting packets that match the sequence numbers of those that have already arrived, the anti-replay mechanism helps to ensure that invalid packets are discarded. Both of the main protocols in the IPSec standard, the Encapsulating Security Payload (ESP) and the Authentication Header (AH), use anti-replay protection.<br /><br /><b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Encapsulation</b><br />In programming, the process of combining elements to create a new entity. For example, a procedure is a type of encapsulation because it combines a series of computer instructions. Likewise, a complex data type, such as a record or class, relies on encapsulation. Object-oriented programming languages rely heavily on encapsulation to create high-level objects. Encapsulation is closely related to abstraction and information hiding.<br /><br /><b>Encryption</b><br />The translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text; encrypted data is referred to as cipher text. 
<br />
<br />There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.<br /><br /><b>Header</b><br />In many disciplines of computer science, a header is a unit of information that precedes a data object. In a network transmission, a header is part of the data packet and contains transparent information about the file or the transmission. In file management, a header is a region at the beginning of each file where bookkeeping information is kept. The file header may contain the date the file was created, the date it was last updated, and the file's size. The header can be accessed only by the operating system or by specialized programs.
<br />
<br />In word processing, one or more lines of text that appears at the top of each page of a document. Once you specify the text that should appear in the header, the word processor automatically inserts it.<br /><br /><b>IPv6</b><br />IPv6 is designed as an evolutionary upgrade to the Internet Protocol and will, in fact, coexist with the older IPv4 for some time. IPv6 is designed to allow the Internet to grow steadily, both in terms of the number of hosts connected and the total amount of data traffic transmitted.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1828.html">RFC 1828</a>] IP Authentication using Keyed MD5.
[<a href="https://www.rfc-editor.org/rfc/rfc2085.html">RFC 2085</a>] HMAC-MD5 IP Authentication with Replay Prevention.
[<a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>] Security Architecture for the Internet Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1825.html">RFC 1825</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2402.html">RFC 2402</a>] IP Authentication Header.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1826.html">RFC 1826</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2403.html">RFC 2403</a>] The Use of HMAC-MD5-96 within ESP and AH.
[<a href="https://www.rfc-editor.org/rfc/rfc2404.html">RFC 2404</a>] The Use of HMAC-SHA-1-96 within ESP and AH.
[<a href="https://www.rfc-editor.org/rfc/rfc2411.html">RFC 2411</a>] IP Security Document Roadmap.
[<a href="https://www.rfc-editor.org/rfc/rfc2841.html">RFC 2841</a>] IP Authentication using Keyed SHA1 with Interleaved Padding (IP-MAC).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1852.html">RFC 1852</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2857.html">RFC 2857</a>] The Use of HMAC-RIPEMD-160-96 within ESP and AH.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1825.html">RFC 1825</a>] Security Architecture for the Internet Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1826.html">RFC 1826</a>] IP Authentication Header.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2402.html">RFC 2402</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1852.html">RFC 1852</a>] IP Authentication using Keyed SHA.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2841.html">RFC 2841</a>.
                		  </div>
		  
</section>


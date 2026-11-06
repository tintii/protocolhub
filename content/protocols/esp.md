---
id: protocol-esp
slug: esp
name: ESP
expandedName: Encapsulated Security Payload
origin: historical
provenance:
  source: protocols/protocol_ESP.htm
  sha256: 210d3a419503c67098bbe09bc4f442f364495da5813c08a3c495d5af85a49f1a
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Encapsulated Security Payload
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Encapsulated Security Payload
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Related protocols
    html: >-
      IPsec,<br />AH,<br />DES,<br />AES,<br />IKE,<br />DOI,<br />HMAC,<br />HMAC-MD5,<br />HMAC-SHA,<br />PKI,<br
      />IP,<br />IPv6,<br />ICMP,<br />IGMP
  - label: Working groups
    html: 'Ipsec, IP Security Protocol'
originalUpdate: '2006-01-12 17:38:07'
rfcs:
  - 1825
  - 1827
  - 1829
  - 1851
  - 2401
  - 2403
  - 2404
  - 2405
  - 2406
  - 2410
  - 2411
  - 2451
  - 2857
  - 3095
  - 3686
related:
  - protocol-ah
  - protocol-ip
  - protocol-ipv6
  - protocol-icmp
  - protocol-igmp
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

			The Encapsulating Security Payload (ESP) header is designed to provide a mix of security services in IPv4 and IPv6. ESP may be applied alone, in combination with the IP Authentication Header (AH), or in a nested fashion, e.g., through the use of tunnel mode. Security services can be provided between a pair of communicating hosts, between a pair of communicating security gateways, or between a security gateway and a host. For more details on how to use ESP and AH in various network environments, see the Security Architecture document.
<br />
<br />The ESP header is inserted after the IP header and before the upper layer protocol header (transport mode) or before an encapsulated IP header (tunnel mode). These modes are described in more detail below.
<br />
<br />ESP is used to provide confidentiality, data origin authentication, connectionless integrity, an anti-replay service (a form of partial sequence integrity), and limited traffic flow confidentiality. The set of services provided depends on options selected at the time of Security Association establishment and on the placement of the implementation. 
<br />
<br />Confidentiality may be selected independent of all other services. However, use of confidentiality without integrity/authentication (either in ESP or separately in AH) may subject traffic to certain forms of active attacks that could undermine the confidentiality service. 
<br />
<br />Data origin authentication and connectionless integrity are joint services (hereafter referred to jointly as "authentication) and are offered as an option in conjunction with (optional) confidentiality. The anti- replay service may be selected only if data origin authentication is selected, and its election is solely at the discretion of the receiver. Traffic flow confidentiality requires selection of tunnel mode, and is most effective if implemented at a security gateway, where traffic aggregation may be able to mask true source-destination patterns. Note that although both confidentiality and authentication are optional, at least one of them MUST be selected.
<br /><hr />
<br /><b>Header format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>16</p></td><td><p>24</p></td><td><p>32</p></td></tr><tr><td colspan="3"><p>Security Parameters Index</p></td></tr><tr><td colspan="3"><p>Sequence number</p></td></tr><tr><td colspan="3"><p>Payload data</p></td></tr><tr><td><p>Padding</p></td><td><p>Pad length</p></td><td><p>Next header</p></td></tr><tr><td colspan="3"><p>Authentication data</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>SPI, Security Parameters Index</b><br /></li>
<li>32 bits. An arbitrary value that, in combination with the destination IP address and security protocol (ESP), uniquely identifies the SA for this datagram. The set of SPI values in the range 1 through 255 are reserved for future use. A reserved SPI value will not normally be assigned by IANA unless the use of the assigned SPI value is specified in an </li><li><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a></li><li>. It is ordinarily selected by the destination system upon establishment of an SA. This field is mandatory. The value of zero is reserved for local, implementation- specific use and MUST NOT be sent on the wire. For example, a key management implementation MAY use the zero SPI value to mean "No Security Association Exists" during the period when the IPsec implementation has requested that its key management entity establish a new SA, but the SA has not yet been established.
<br /><br /></li>
<li><b>Sequence number</b><br /></li>
<li>32 bits, unsigned. This field contains a monotonically increasing counter value. It is mandatory and is always present even if the receiver does not elect to enable the anti-replay service for a specific SA. Processing of this field is at the discretion of the receiver. The sender MUST always transmit this field, but the receiver need not act upon it. The sender's counter and the receiver's counter are initialized to 0 when an SA is established. The first packet sent using a given SA will have a Sequence number of 1. If anti-replay is enabled (the default), the transmitted Sequence number must never be allowed to cycle. Thus, the sender's counter and the receiver's counter MUST be reset (by establishing a new SA and thus a new key) prior to the transmission of the 2^32nd packet on an SA.
<br /><br /></li>
<li><b>Payload data</b><br /></li>
<li>Variable length. Contains the data described by the Next header field. This field is mandatory and is an integral number of bytes in length. If the algorithm used to encrypt the payload requires cryptographic synchronization data, e.g., an Initialization Vector (IV), then this data MAY be carried explicitly in the Payload data field. Any encryption algorithm that requires such explicit, per-packet synchronization data MUST indicate the length, any structure for such data, and the location of this data as part of an </li><li><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a></li><li>specifying how the algorithm is used with ESP. If such synchronization data is implicit, the algorithm for deriving the data MUST be part of the </li><li><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a></li><li>.
<br /><br /></li>
<li><b>Padding</b><br /></li>
<li>Variable length, 0 to 255 bytes. Padding may be required, irrespective of encryption algorithm requirements, to ensure that the resulting ciphertext terminates on a 4 byte boundary. Specifically, the Pad length and Next header fields must be right aligned within a 4 byte word to ensure that the Authentication data field, if present, is aligned on a 4 byte boundary.
<br /><br /></li>
<li><b>Pad length</b><br /></li>
<li>8 bits. The Pad Length field indicates the number of pad bytes immediately preceding it.
<br /><br /></li>
<li><b>Next header</b><br /></li>
<li>8 bits. An IPv4/IPv6 protocol number describing the format of the Payload data field.
<br /><br /></li>
<li><b>Authentication data</b><br /></li>
<li>Variable length. Contains an ICV computed over the ESP packet minus the Authentication data. The length of the field is specified by the authentication function selected. This field is optional, and is included only if the authentication service has been selected for the SA in question. The authentication algorithm specification MUST specify the length of the ICV and the comparison rules and processing steps for validation.</li></ul>
<br /><hr />
<br /><b>ESP Header Location</b>
<br />Like AH, ESP may be employed in two ways: transport mode or tunnel mode. The former mode is applicable only to host implementations and provides protection for upper layer protocols, but not the IP header.
<br />
<br />In transport mode, ESP is inserted after the IP header and before an upper layer protocol, e.g., TCP, UDP, ICMP, etc. or before any other IPsec headers that have already been inserted. In the context of IPv4, this translates to placing ESP after the IP header (and any options that it contains), but before the upper layer protocol.
<br /><ul><li><b>IPv4</b><br /></li>
<li><ul><li>Before Applying ESP
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>orig IP hdr(any options)</td><td>TCP</td><td>Data</td></tr></tbody></table></div></div><br /></li>
<li>After Applying ESP
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">            -------------------------------------------------
            |orig IP hdr  | ESP |     |      |   ESP   | ESP|
            |(any options)| Hdr | TCP | Data | Trailer |Auth|
            -------------------------------------------------
                                |&lt;----- encrypted ----&gt;|
                          |&lt;------ authenticated -----&gt;|</pre></li></ul><br /><br /></li>

<li><b>IPv6</b><br /></li>
<li><ul><li>Before Applying ESP
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>orig IP hdr</td><td>ext hdrs if present</td><td>TCP</td><td>Data</td></tr></tbody></table></div></div><br /><br /></li>

<li>After Applying ESP
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">            ---------------------------------------------------------
            | orig |hop-by-hop,dest*,|   |dest|   |    | ESP   | ESP|
            |IP hdr|routing,fragment.|ESP|opt*|TCP|Data|Trailer|Auth|
            ---------------------------------------------------------
                                         |&lt;---- encrypted ----&gt;|
                                     |&lt;---- authenticated ----&gt;|</pre></li></ul></li></ul>
<br /><hr />
<br /><b>Algorithms</b>
<br />The mandatory-to-implement algorithms are described in Section 5, "Conformance Requirements". Other algorithms MAY be supported. Note that although both confidentiality and authentication are optional, at least one of these services MUST be selected hence both algorithms MUST NOT be simultaneously NULL.
<br />
<br /><b>Outbound Packet Processing</b>
<br />In transport mode, the sender encapsulates the upper layer protocol information in the ESP header/trailer, and retains the specified IP header (and any IP extension headers in the IPv6 context). In tunnel mode, the outer and inner IP header/extensions can be inter-related in a variety of ways. The construction of the outer IP header/extensions during the encapsulation process is described in the Security Architecture document. If there is more than one IPsec header/extension required by security policy, the order of the application of the security headers MUST be defined by security policy.
<br />
<br /><b>Inbound Packet Processing</b>
<br /><ul><li><b>Reassembly</b><br /></li>
<li>If required, reassembly is performed prior to ESP processing. If a packet offered to ESP for processing appears to be an IP fragment, i.e., the OFFSET field is non-zero or the MORE FRAGMENTS flag is set, the receiver MUST discard the packet; this is an auditable event. The audit log entry for this event SHOULD include the SPI value, date/time received, Source Address, Destination Address, Sequence Number, and (in IPv6) the Flow ID.
<br /><br /></li>
<li><b>Security Association Lookup</b><br /></li>
<li>Upon receipt of a (reassembled) packet containing an ESP Header, the receiver determines the appropriate (unidirectional) SA, based on the destination IP address, security protocol (ESP), and the SPI. (This process is described in more detail in the Security Architecture document.)  The SA indicates whether the Sequence Number field will be checked, whether the Authentication Data field should be present, and it will specify the algorithms and keys to be employed for decryption and ICV computations (if applicable).
<br /><br /></li>
<li><b>Sequence Number Verification</b><br /></li>
<li>All ESP implementations MUST support the anti-replay service, though its use may be enabled or disabled by the receiver on a per-SA basis. This service MUST NOT be enabled unless the authentication service also is enabled for the SA, since otherwise the Sequence Number field has not been integrity protected. (Note that there are no provisions for managing transmitted Sequence Number values among multiple senders directing traffic to a single SA (irrespective of whether the destination address is unicast, broadcast, or multicast). Thus the anti-replay service SHOULD NOT be used in a multi-sender environment that employs a single SA.)
<br /><br /></li>
<li><b>Integrity Check Value Verification</b><br /></li>
<li>If authentication has been selected, the receiver computes the ICV over the ESP packet minus the Authentication Data using the specified authentication algorithm and verifies that it is the same as the ICV included in the Authentication Data field of the packet. Details of the computation are provided below.
<br /><br /></li>
<li>If the computed and received ICV's match, then the datagram is valid, and it is accepted. If the test fails, then the receiver MUST discard the received IP datagram as invalid; this is an auditable event. The log data SHOULD include the SPI value, date/time received, Source Address, Destination Address, the Sequence Number, and (in IPv6) the cleartext Flow ID.</li></ul>
<br />
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>ESP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>AH</b><br />The IP Authentication Header (AH) seeks to provide security by adding authentication information to an IP datagram. This authentication information is calculated using all of the fields in the IP datagram (including not only the IP Header but also other headers and the user data) which do not change in transit. Fields or options which need to change in transit (e.g., hop count, time to live, ident, fragment offset, or routing pointer, such as audio and video. Sources of data can include both live data feeds and stored clips.<br /><br /><b>Inbound</b><br />Any call received by a call centre/customer contact centre.<br /><br /><b>Outbound</b><br />Any outgoing call from the call centre/customer contact centre to a customer.<br /><br /><b>SA</b><br />SA (Security Association) is a group of security settings related to a specific VPN tunnel. A Security Association groups together all the necessary settings needed to create a VPN tunnel. Different SAs may be created to connect branch offices, allow secure remote management, and pass unsupported traffic. All SAs require a specified encryption method, IPSec gateway address and destination network address. IKE includes a shared secret.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1829.html">RFC 1829</a>] The ESP DES-CBC Transform.
[<a href="https://www.rfc-editor.org/rfc/rfc1851.html">RFC 1851</a>] The ESP Triple DES Transform.
[<a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>] Security Architecture for the Internet Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1825.html">RFC 1825</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2403.html">RFC 2403</a>] The Use of HMAC-MD5-96 within ESP and AH.
[<a href="https://www.rfc-editor.org/rfc/rfc2404.html">RFC 2404</a>] The Use of HMAC-SHA-1-96 within ESP and AH.
[<a href="https://www.rfc-editor.org/rfc/rfc2405.html">RFC 2405</a>] The ESP DES-CBC Cipher Algorithm With Explicit IV.
[<a href="https://www.rfc-editor.org/rfc/rfc2406.html">RFC 2406</a>] IP Encapsulating Security Payload (ESP).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1827.html">RFC 1827</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2410.html">RFC 2410</a>] The NULL Encryption Algorithm and Its Use With IPsec.
[<a href="https://www.rfc-editor.org/rfc/rfc2411.html">RFC 2411</a>] IP Security Document Roadmap.
[<a href="https://www.rfc-editor.org/rfc/rfc2451.html">RFC 2451</a>] The ESP CBC-Mode Cipher Algorithms.
[<a href="https://www.rfc-editor.org/rfc/rfc2857.html">RFC 2857</a>] The Use of HMAC-RIPEMD-160-96 within ESP and AH.
[<a href="https://www.rfc-editor.org/rfc/rfc3095.html">RFC 3095</a>] RObust Header Compression (ROHC): Framework and four profiles: RTP, UDP, ESP, and uncompressed.
[<a href="https://www.rfc-editor.org/rfc/rfc3686.html">RFC 3686</a>] Using Advanced Encryption Standard (AES) Counter Mode With IPsec Encapsulating Security Payload (ESP).<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1825.html">RFC 1825</a>] Security Architecture for the Internet Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1827.html">RFC 1827</a>] IP Encapsulating Security Payload (ESP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2406.html">RFC 2406</a>.
                		  </div>
		  
</section>


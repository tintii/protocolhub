---
id: protocol-gre
slug: gre
name: GRE
expandedName: Generic Routing Encapsulation
origin: historical
provenance:
  source: protocols/protocol_GRE.htm
  sha256: 76be893ec73a079ea326bf6b3d84f71bfe97eb8e8566efcf3cc8c787615bb5b1
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Generic Routing Encapsulation
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Generic Routing Encapsulation
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: encapsulation protocol
  - label: Ports
    html: '47'
  - label: Related protocols
    html: IPv4
originalUpdate: '2006-01-13 09:41:13'
rfcs:
  - 1701
  - 1702
  - 2637
  - 2784
  - 2890
  - 3095
  - 3147
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

			The Generic Routing Encapsulation (GRE) protocol provides a mechanism for encapsulating arbitrary packets within an arbitrary transport protocol. In the most general case, a system has a packet that needs to be encapsulated and routed (the payload packet). The payload is first encapsulated in a GRE packet, which possibly also includes a route. The resulting GRE packet is then encapsulated in some other protocol and forwarded (the delivery protocol).
<br />
<br />In the most general case, a system has a packet that needs to be encapsulated and delivered to some destination. We will call this the payload packet. The payload is first encapsulated in a GRE packet. The resulting GRE packet can then be encapsulated in some other protocol and then forwarded.
<br /><hr />
<br /><b>Overall packet</b>
<br />The entire encapsulated packet:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>Delivery Header</p></td></tr><tr><td><p>GRE Header</p></td></tr><tr><td><p>Payload packet</p></td></tr></tbody></table></div></div>
<br />
<br /><b>GRE header (version 0)</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>0</p></td><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>7</p></td><td><p>12</p></td><td><p>15</p></td><td><p>31</p></td></tr><tr><td><p>C</p></td><td><p>R</p></td><td><p>K</p></td><td><p>S</p></td><td><p>s</p></td><td><p>Recur</p></td><td><p>Flags</p></td><td><p>Version</p></td><td><p>Protocol Type</p></td></tr><tr><td colspan="8"><p>Checksum (optional)</p></td><td><p>Offset (optional)</p></td></tr><tr><td colspan="9"><p>Key (optional)</p></td></tr><tr><td colspan="9"><p>Sequence Number (Optional)</p></td></tr><tr><td colspan="9"><p>Routing (Optional)</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b></b></li><li><b>C, Checksum Present</b>
<br />The Checksum field is present and contains valid information if set. If either the Checksum Present bit or the Routing Present bit are set, the Checksum and Offset fields are both present.<br /><br /></li>

<li><b>R, Routing Present</b>
<br />If set then the Offset field is present and contains valid information. If either the Checksum Present bit or the Routing Present bit are set, the Checksum and Offset fields are both present.<br /><br /></li>

<li><b>K, Key Present</b>
<br />If the Key Present bit is set to 1, then it indicates that the Key field is present in the GRE header. Otherwise, the Key field is not present in the GRE header.<br /><br /></li>

<li><b>S, Sequence Number present</b>
<br />If the Sequence Number Present bit is set to 1, then it indicates that the Sequence Number field is present. Otherwise, the Sequence Number field is not present in the GRE header.<br /><br /></li>

<li><b>s, Strict Source Route</b>
<br />The meaning of this bit is defined in other documents. It is recommended that this bit only be set if all of the the Routing Information consists of Strict Source Routes.<br /><br /></li>

<li><b>Recur, Recursion Control</b>
<br />Recursion control contains a three bit unsigned integer which contains the number of additional encapsulations which are permissible. 0 is the default.<br /><br /></li>

<li><b>Flags</b>
<br />These bits are reserved and must be transmitted as 0.<br /><br /></li>

<li><b>Version</b>
<br />GRE protocol version. Must be cleared to 0.<br /><br /></li>

<li><b>Protocol</b>
<br />Contains the protocol type of the payload packet. In general, the value will be the Ethernet protocol type field for the packet. Additional values may be defined in other documents.<br /><br /></li>

<li><b>Checksum</b>
<br />Optional. Contains the IP (one's complement) checksum of the GRE header and the payload packet.<br /><br /></li>

<li><b>Offset</b>
<br />Optional. Indicates the byte offset from the start of the Routing field to the first byte of the active Source Route Entry to be examined.<br /><br /></li>

<li><b>Key</b>
<br />Optional. Contains a number which was inserted by the encapsulator. It may be used by the receiver to authenticate the source of the packet.<br /><br /></li>

<li><b>Sequence Number</b> 
<br />Optional. Contains a number which is inserted by the encapsulator. It may be used by the receiver to establish the order in which packets have been transmitted from the encapsulator to the receiver.<br /><br /></li>

<li><b>Routing</b>
<br />The Routing field is present only if the Routing Present bit is set to 1. It is a list of Source Route Entries (SREs). Each SRE has the form:<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>15</p></td><td><p>23</p></td><td><p>31</p></td></tr><tr><td><p>Address Family</p></td><td><p>SRE Offset</p></td><td><p>SRE Length</p></td></tr><tr><td colspan="3"><p>Routing Information</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b></b></li><li><b>Address Family</b>
<br />Indicates the syntax and semantics of the Routing Information field. The values for this field and the corresponding syntax and semantics for Routing Information are defined in other documents.<br /><br /></li>

<li><b></b></li><li><b>SRE Offset</b>
<br />Indicates the byte offset from the start of the Routing Information field to the first byte of the active entry to be examined.<br /><br /></li>

<li><b></b></li><li><b>SRE Length</b>
<br />The number of bytes in the SRE. If set to 0, this indicates this is the last SRE in Routing.<br /><br /></li>

<li><b></b></li><li><b>Routing Information</b>
<br />Contains data which may be used in routing this packet.</li></ul></li></ul>
<br /><hr />
<br /><b>GRE header (version 1)</b>
<br />The GRE header used in PPTP is enhanced slightly from that specified in the current GRE protocol specification. The main difference involves the definition of a new Acknowledgment Number field, used to determine if a particular GRE packet or set of packets has arrived at the remote end of the tunnel. This Acknowledgment capability is not used in conjunction with any retransmission of user data packets. It is used instead to determine the rate at which user data packets are to be transmitted over the tunnel for a given user session.
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>0</p></td><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>7</p></td><td><p>8</p></td><td><p>12</p></td><td><p>15</p></td><td><p>31</p></td></tr><tr><td><p>C</p></td><td><p>R</p></td><td><p>K</p></td><td><p>S</p></td><td><p>s</p></td><td><p>Recur</p></td><td><p>A</p></td><td><p>Flags</p></td><td><p>Version</p></td><td><p>Protocol</p></td></tr><tr><td colspan="9"><p>Payload Length</p></td><td><p>Call ID</p></td></tr><tr><td colspan="10"><p>Sequence Number</p></td></tr><tr><td colspan="10"><p>Acknowledgment Number</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>C, Checksum Present</b>
<br />Cleared to 0.<br /><br /></li>

<li><b>R, Routing Present</b>
<br />Cleared to 0.<br /><br /></li>

<li><b>K, Key Present</b>
<br />Set to 1.<br /><br /></li>

<li><b>S, Sequence Number present</b>
<br />Set if a payload packet is present. Cleared if a payload packet is not present (GRE packet is an Acknowledgment only).<br /><br /></li>

<li><b>s, Strict Source Route</b>
<br />Cleared to 0.<br /><br /></li>

<li><b>Recur, Recursion Control</b>
<br />Set to 0.<br /><br /></li>

<li><b>A, Acknowledgment sequence number present</b>
<br />Set to one if the packet contains an Acknowledgment Number to be used for acknowledging previously transmitted data.<br /><br /></li>

<li><b>Flags</b>
<br />Must be set to 0.<br /><br /></li>

<li><b>Version</b>
<br />Must be set to 1.<br /><br /></li>

<li><b>Protocol</b> 
<br />Always 0x880B. Contains the protocol type of the payload packet.<br /><br /></li>

<li><b>Payload Length</b>
<br />Size of the payload not including the GRE header.<br /><br /></li>

<li><b>Call ID</b>
<br />Contains the Peer's Call ID for the session to which this packet belongs.<br /><br /></li>

<li><b>Sequence Number</b>
<br />Optional. Contains the sequence number of the payload. This field is present only if the S bit is set.<br /><br /></li>

<li><b>Acknowledgment Number</b>
<br />Contains the sequence number of the highest numbered GRE packet received by the sending peer for this user session. This field is present only if the A bit is set.</li></ul>
<br /><hr />
<br /><b>GRE over IPv4 networks</b>
<br />When IPv4 is being carried as the GRE payload, the Protocol Type field must be set to 0x800.
<br />
<br />When a tunnel endpoint encapsulates a GRE packet which has an IPv4 packet as the payload, the destination address in the IPv4 payload packet header MUST be used to forward the packet and the TTL of the payload packet must be decremented. Care should be taken when forwarding such a packet, since if the destination address of the payload packet is the encapsulator of the packet (i.e., the other end of the tunnel), looping can occur. In this case, the packet must be discarded.
<br />
<br />The IPv4 protocol 47 is used when GRE packets are encapsulated in IPv4. 
<br />
<br />Security in a network using GRE should be relatively similar to security in a normal IPv4 network, as routing using GRE follows the same routing that IPv4 uses natively. Route filtering will remain unchanged. However packet filtering requires either that a firewall look inside the GRE packet or that the filtering is done on the GRE tunnel endpoints. In those environments in which this is considered to be a security issue it may be desirable to terminate the tunnel at the firewall.
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
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>GRE</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/hline.gif" alt="" />PPP<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Encapsulation</b><br />In programming, the process of combining elements to create a new entity. For example, a procedure is a type of encapsulation because it combines a series of computer instructions. Likewise, a complex data type, such as a record or class, relies on encapsulation. Object-oriented programming languages rely heavily on encapsulation to create high-level objects. Encapsulation is closely related to abstraction and information hiding.<br /><br /><b>GRE</b><br />Generic Routing Encapsulation (GRE) is an internet based term applied to the encapsulation of IP datagrams tunneled through the internet. The encapsulation includes security, typically in the form of IPSec, and is most commonly found in VPN (Virtual Private Network) implementation.<br /><br /><b>IPv4</b><br />IPv4 is version 4 of the Internet Protocol (IP). It was the first version of the Internet Protocol to be widely deployed, and forms the basis for most of the current Internet. IPv4 uses 32-bit addresses, limiting it to 4,294,967,296 unique addresses, many of which are reserved for special purposes such as local networks or multicast addresses, reducing the number of addresses that can be allocated as public Internet addresses.<br /><br /><b>PPTP</b><br />Point-to-Point Tunneling Protocol (PPTP) is a new technology for creating Virtual Private Networks (VPNs) , developed jointly by Microsoft Corporation, U.S. Robotics, and several remote access vendor companies, known collectively as the PPTP Forum. A VPN is a private network of computers that uses the public Internet to connect some nodes. Because the Internet is essentially an open network, the Point-to-Point Tunneling Protocol (PPTP) is used to ensure that messages transmitted from one VPN node to another are secure. With PPTP, users can dial in to their corporate network via the Internet.<br /><br /><b>Payload packet</b><br />In the most general case, a system has a packet that needs to be encapsulated and delivered to some destination. We will call this the payload packet. The payload is first encapsulated in a GRE packet.<br /><br /><b>TTL</b><br />TTL (Time to Live) is a field in the Internet Protocol (IP) that specifies how many more hops a packet can travel before being discarded or returned.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1701.html">RFC 1701</a>] Generic Routing Encapsulation (GRE).
[<a href="https://www.rfc-editor.org/rfc/rfc1702.html">RFC 1702</a>] Generic Routing Encapsulation over IPv4 networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2637.html">RFC 2637</a>] Point-to-Point Tunneling Protocol (PPTP).
[<a href="https://www.rfc-editor.org/rfc/rfc2784.html">RFC 2784</a>] Generic Routing Encapsulation (GRE).
[<a href="https://www.rfc-editor.org/rfc/rfc2890.html">RFC 2890</a>] Key and Sequence Number Extensions to GRE.
[<a href="https://www.rfc-editor.org/rfc/rfc3095.html">RFC 3095</a>] RObust Header Compression (ROHC): Framework and four profiles: RTP, UDP, ESP, and uncompressed.
[<a href="https://www.rfc-editor.org/rfc/rfc3147.html">RFC 3147</a>] Generic Routing Encapsulation over CLNS Networks.
                		  </div>
		  
</section>


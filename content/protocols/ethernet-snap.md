---
id: protocol-ethernet-snap
slug: ethernet-snap
name: Ethernet SNAP
expandedName: Ethernet SubNetwork Access Protocol
origin: historical
provenance:
  source: protocols/protocol_Ethernet SNAP.htm
  sha256: 7f72b24823faff5af84f52bb31d4c947d63c4e510a2b380ce416e7369dac3c12
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Ethernet SubNetwork Access Protocol
layers:
  - Data Link Layer
suites: []
summary:
  - label: Protocol
    html: Ethernet SubNetwork Access Protocol
  - label: Layer
    html: Data Link Layer
  - label: Related protocols
    html: 'IEEE 802.2,<br />802.3,<br />802.4,<br />802.5,<br />IP,<br />ARP'
originalUpdate: '2005-11-07 17:51:54'
rfcs: []
related:
  - protocol-ieee-802-2
  - protocol-ip
  - protocol-arp
glossary: []
sections:
  - id: description
    title: Description
  - id: relations
    title: Protocol relations
  - id: glossary
    title: Local glossary
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			The SubNetwork Access Protocol (SNAP) is a standard for the transmission of IP datagrams over IEEE 802 networks. In other words, IP datagrams could be sent on IEEE 802 networks encapsulated within the 802.2 LLC and SNAP data link layers and the 802.3, 802.4 or 802.5 physical network layers.
<br />
<br />SNAP is included in an extension of the Logic Link Control (LLC IEEE 802.2) header and is used for encapsulating IP datagrams and ARP requests and replies on IEEE 802 networks. The SNAP header follows the LLC header and contains an organization code indicating that the following 16 bits specify the EtherType code. Normally, all communication is performed using 802.2 type 1 communication. Consenting systems on the same IEEE 802 network may use 802.2 type 2 communication after verifying that it is supported by both nodes. This is accomplished using the 802.2 XID mechanism. However, type 1 communication is the recommended method at this time and must be supported by all implementations.
<br />
<br />The mapping of 32-bit Internet addresses to 16 or 48 bit IEEE 802 addresses is done via the dynamic discovery procedure of the Address Resolution Protocol (ARP). The IEEE 802 networks may have 16-bit or 48-bit physical addresses. SNAP allows the use of either size of address within a given IEEE 802 network.
<br />
<br />With SNAP, the transmission of IP datagrams does not depend on the transmission rate of the under layer LAN technologies (various types of Ethernet, or Token Ring ), which may have different very different transmission rate from 1 to 20 Mbit/s.
<br />
<br />Logic Link Control Layer (LLC) Header
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>6 bytes</td><td>6 bytes</td><td>2 bytes</td><td>1 byte</td><td>1 byte</td><td>1 byte</td><td>5 bytes</td><td>Variable 38-1492 bytes</td><td>4 bytes</td></tr><tr><td>Destination Address</td><td>Source Address</td><td>Length</td><td>DSAP</td><td>SSAP</td><td>Control</td><td>SNAP</td><td>data</td><td>FCS</td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Details of the LLC header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>24</p></td><td><p>40bits</p></td></tr><tr><td><p>Organization code</p></td><td><p>EtherType</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Destination Address</b> 
<br />The destination address can be a broadcast address 0xFFFFFFFFFFFF, a specific 48-bit unicast address based on the destination node's MAC address, or a multicast address. You can discover this MAC address from the source address field of a message during protocol synchronization.<br /><br /></li>

<li><b>Source Address</b> 
<br />The source address is the sender's 48-bit MAC address.<br /><br /></li>

<li><b>Length</b> 
<br />This is the length of the frame excluding the preamble, FCS, addresses, and length field.<br /><br /></li>

<li><b>DSAP</b> 
<br />A value of 0xAA indicates Subnetwork Access Protocol (SNAP).<br /><br /></li>

<li><b>SSAP</b> 
<br />A value of 0xAA indicates SNAP.<br /><br /></li>

<li><b>Control</b> 
<br />The Control field specifies the type of LLC frame.<br /><br /></li>

<li><b>Data</b> 
<br />The Data field contains encapsulated data (such as an IP packet). The valid length ranges for Ethernet II are between 46 and 1500 bytes.<br /><br /></li>

<li><b>FCS</b>
<br />The FCS field contains a 32-bit cyclic redundancy check (CRC) value, which checks for damaged frames.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>Ethernet SNAP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />ARP<br /><img src="/supporting/images/tline_r.gif" alt="" />IP<br /><img src="/supporting/images/tline_r.gif" alt="" />IPX<br /><img src="/supporting/images/tline_r.gif" alt="" />MPLS<br /><img src="/supporting/images/tline_r.gif" alt="" />802.1x<br /><img src="/supporting/images/tline_r.gif" alt="" />RARP<br /><img src="/supporting/images/tline_r.gif" alt="" />VLAN<br /><img src="/supporting/images/tline_r.gif" alt="" />AARP<br /><img src="/supporting/images/tline_r.gif" alt="" />DECnet<br /><img src="/supporting/images/tline_r.gif" alt="" />VINES-Echo<br /><img src="/supporting/images/tline_r.gif" alt="" />XNS<br /><img src="/supporting/images/tline_r.gif" alt="" />IPv6<br /><img src="/supporting/images/tline_r.gif" alt="" />Other<br /><img src="/supporting/images/tline_r.gif" alt="" />AppleTalk<br /><img src="/supporting/images/tline_r.gif" alt="" />VINES-IP<br /><img src="/supporting/images/tline_r.gif" alt="" />CDP<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />CGMP<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Ethernet</b><br />A local-area network (LAN) architecture developed by Xerox Corporation in cooperation with DEC and Intel in 1976. Ethernet uses a bus or star topology and supports data transfer rates of 10 Mbps. The Ethernet specification served as the basis for the IEEE 802.3 standard, which specifies the physical and lower software layers. Ethernet uses the CSMA/CD access method to handle simultaneous demands. It is one of the most widely implemented LAN standards. 
<br />
<br />A newer version of Ethernet, called 100Base-T (or Fast Ethernet), supports data transfer rates of 100 Mbps. And the newest version, Gigabit Ethernet supports data rates of 1 gigabit (1,000 megabits) per second.<br /><br /><b>IEEE</b><br />IEEE (Institute of Electrical and Electronics Engineers) is best known for developing standards for the computer and electronics industry, which founded in 1884 as the AIEE, the IEEE was formed in 1963 when AIEE merged with IRE. IEEE is an organization composed of engineers, scientists, and students. The IEEE is best known for developing standards for the computer and electronics industry. In particular, the IEEE 802 standards for local-area networks are widely followed.<br /><br /><b>IEEE 802.2</b><br />General standard for the data link layer in the OSI Reference Model. The IEEE divides this layer into two sublayers -- the logical link control (LLC) layer and the media access control (MAC) layer.<br /><br /><b>IEEE 802.3</b><br />IEEE 802.3 is an IEEE LAN specification for a Carrier Sense Multiple Access with Collision Detection (CSMA-CD) network, a type of network related to Ethernet. In general, 802.3 specifies the physical media and the working characteristics of LANs. An 802.3 frame uses source and destination media access control (MAC) addresses to identify its originator and receiver (or receivers). Compare 802.2; Ethernet II.<br /><br /><b>IEEE 802.4</b><br />IEEE LAN protocol that specifies an implementation of the physical layer and the MAC sublayer of the data link layer. IEEE 802.4 uses token-passing access over a bus topology and is based on the token bus LAN architecture.<br /><br /><b>IEEE 802.5</b><br />IEEE LAN protocol that specifies an implementation of the physical layer and MAC sublayer of the data link layer. IEEE 802.5 uses token passing access at 4 or 16 Mbps over STP cabling and is similar to IBM Token Ring.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>LLC</b><br />Logical Link Control (LLC) is the upper portion of the data link layer of a local area network, as defined in IEEE 802.2. The LLC sublayer presents a uniform interface to the user of the data link service, usually the network layer. Beneath the LLC sublayer is the Media Access Control (MAC) sublayer.<br /><br /><b>RFC</b><br /><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>(Requests for Comments) document series is a set of technical and organizational notes about the Internet (originally the ARPANET), beginning in 1969(when the Internet was the ARPANET). An Internet Document can be submitted to the IETF by anyone, but the IETF decides if the document becomes an RFC. Eventually, if it gains enough interest, it may evolve into an Internet standard. 
<br />
<br />Each <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>is designated by an <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>number. Once published, an <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>never changes. Modifications to an original <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>are assigned a new <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>number.<br /><br /><b>Token Ring</b><br />Token Ring is a local area network (LAN) access method developed by IBM. Conforming to the IEEE 802.5 standard, Token Ring uses a token ring access method and connects up to 255 nodes in a star topology at 4, 16 or 100 Mbps. All stations connect to a central wiring hub called the "Multistation Access Unit" (MAU) using twisted wire cable.<br /><br />			</div>
		  
</section>


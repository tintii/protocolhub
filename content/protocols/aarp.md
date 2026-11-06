---
id: protocol-aarp
slug: aarp
name: AARP
expandedName: AppleTalk Address Resolution Protocol
origin: historical
provenance:
  source: protocols/protocol_AARP.htm
  sha256: cf031ac679bad95bdfa849179aad0de31bc9cc8da790cba887b26559bb50cbe0
  provider: 'Colasoft Co., Ltd.'
aliases:
  - AppleTalk Address Resolution Protocol
layers:
  - Network Layer
suites:
  - AppleTalk
summary:
  - label: Protocol
    html: AppleTalk Address Resolution Protocol
  - label: Protocol suite
    html: AppleTalk
  - label: Layer
    html: Network Layer
  - label: EtherType
    html: '0x80F3'
originalUpdate: '2006-09-05 14:33:59'
rfcs: []
related: []
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

			AARP resolves AppleTalk addresses to physical layer, usually MAC, addresses. It is functionally equivalent to ARP. AppleTalk is a protocol suite which features an open peer-to-peer architecture that runs over a variety of transmission media. This protocol suite interoperates with the IP protocol suite through various encapsulation methods. As large AppleTalk networks are built that coexist with large IP networks, a method to manage the AppleTalk networks with SNMP becomes necessary. This MIB defines managed objects to be used for managing AppleTalk networks.
<br />
<br />The AppleTalk Address Resolution Protocol (AARP) is used to map between AppleTalk node addresses, used by the Datagram Delivery Protocol, and the addresses of the underlying data link layer. The AARP table allows for management of the Address Mapping Table on the managed device.
<br />
<br />AARP is a fairly simple system. When powered on, an AppleTalk machine broadcasts an AARP probe packet asking for a network address, intending to hear back from controllers such as routers. If no address is provided, one is picked at random from the "base subnet", 0. It then broadcasts another packet saying "I am selecting this address", and then waits to see if anyone else on the network complains. If another machine has that address, it will pick another address, and keep trying until it finds a free one. On a network with many machines it may take several tries before a free address is found, so for performance purposes the successful address is "written down" in NVRAM and used as the default address in the future. This means that in most real-world setups where machines are added a few at a time, only one or two tries are needed before the address effectively become constant
<br />
<br /><b>AARP packet structure</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>8 </td><td>16 bits</td></tr><tr><td colspan="2">Data-link header</td></tr><tr><td colspan="2">Hardware type</td></tr><tr><td colspan="2">Protocol type</td></tr><tr><td>Hardware address length</td><td>Protocol address length</td></tr><tr><td colspan="2">Function</td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Hardware type</b><br /></li>
<li>Identifier for the data-link type.
<br /><br /></li>
<li><b>Protocol type</b><br /></li>
<li>Identifier for the protocol family.
<br /><br /></li>
<li><b>Hardware address length</b><br /></li>
<li>Length in bytes of the hardware address field.
<br /><br /></li>
<li><b>Protocol address length</b><br /></li>
<li>Length in bytes of the protocol address field.
<br /><br /></li>
<li><b>Function</b><br /></li>
<li>Indicates the packet function (1=AARP request, 2=AARP response and 3-AARP probe).
<br /></li><li>Following the header are the hardware and protocol addresses according to the values of the function field.</li></ul>
<br /><hr />
<br />AARP uses a request-response process to learn the hardware address of other network nodes. Because AARP is a media-dependent protocol, the method used to request a hardware address from a node varies depending on the data link layer implementation. Typically, a broadcast message is sent to all AppleTalk nodes on the network.
<br />
<br /><ul><li><b>Address Mapping Table</b><br /></li>
<li>Each AppleTalk node contains an Address Mapping Table (AMT), where hardware addresses are associated with network addresses. Each time AARP resolves a network and hardware address combination, the mapping is recorded in the AMT.
<br /><br /></li>
<li>Over time, the potential for an AMT entry to become invalid increases. For this reason, each AMT entry typically has a timer associated with it. When AARP receives a packet that verifies or changes the entry, the timer is reset.
<br /><br /></li>
<li>If the timer expires, the entry is deleted from the AMT. The next time an AppleTalk protocol wants to communicate with that node, another AARP request must be transmitted to discover the hardware address.
<br /><br /></li>
<li><b>Address Gleaning</b><br /></li>
<li>In certain implementations, incoming DDP packets are examined to learn the hardware and network addresses of the source node. DDP then can place this information in the AMT. This is one way in which a device, such as a router, workstation, or server, can discover devices within an AppleTalk network.
<br /><br /></li>
<li>This process of obtaining address mappings from incoming packets is known as address gleaning. Address gleaning is not widely used, but in some situations it can reduce the number of AARP requests that must be transmitted.
<br /><br /></li>
<li><b>AARP Operation</b><br /></li>
<li>The AppleTalk Address Resolution Protocol (AARP) maps hardware addresses to network addresses. When an AppleTalk protocol has data to send, it passes the network address of the destination node to AARP. It is the job of AARP to supply the hardware address associated with that network address. 
<br /><br /></li>
<li>AARP checks the AMT to see whether the network address is already mapped to a hardware address. If the addresses are already mapped, the hardware address is passed to the inquiring AppleTalk protocol, which uses it to communicate with the destination. If the addresses are not mapped, AARP transmits a broadcast requesting that the node using the network address in question supply its hardware address.
<br /><br /></li>
<li>When the request reaches the node using the network address, that node replies with its hardware address. If no node exists with the specified network address, no response is sent. After a specified number of retries, AARP assumes that the protocol address is not in use and returns an error to the inquiring AppleTalk protocol. If a response is received, the hardware address is associated to the network address in the AMT. The hardware address then is passed to the inquiring AppleTalk protocol, which uses it to communicate with the destination node.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>AARP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Request<br /><img src="/supporting/images/tline_r.gif" alt="" />Response<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Probe<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>AARP</b><br />AARP is a protocol for mapping a device¡¯s physical hardware address to a temporary Appletalk network-assigned address in Macintosh computer LANs.<br /><br /><b>ARP</b><br />Address Resolution Protocol (ARP) is a network layer protocol used to convert an IP address into a physical address (called a DLC address), such as an Ethernet address. A host wishing to obtain a physical address broadcasts an ARP request onto the TCP/IP network. The host on the network that has the IP address in the request then replies with its physical hardware address.<br /><br /><b>AppleTalk</b><br />An inexpensive local-area network (LAN) architecture built into all Apple Macintosh computers and laser printers. AppleTalk supports Apple's LocalTalk cabling scheme, as well as Ethernet and IBM Token Ring. It can connect Macintosh computers and printers, and even PCs if they are equipped with special AppleTalk hardware and software.<br /><br /><b>Broadcast</b><br />Broadcast is the term used to describe communication where a piece of information is sent from one point to all other points. Broadcasting is a useful feature in e-mail systems. It is also supported by some fax systems. 
<br />
<br />In networking, a distinction is made between broadcasting and multicasting. Broadcasting sends a message to everyone on the network whereas multicasting sends a message to a select list of recipients.<br /><br /><b>DDP</b><br />DDP (Datagram Delivery Protocol) is a member of the AppleTalk networking protocol suite. Its main responsibility is for socket-to-socket delivery of datagrams over an AppleTalk network.<br /><br /><b>Encapsulation</b><br />In programming, the process of combining elements to create a new entity. For example, a procedure is a type of encapsulation because it combines a series of computer instructions. Likewise, a complex data type, such as a record or class, relies on encapsulation. Object-oriented programming languages rely heavily on encapsulation to create high-level objects. Encapsulation is closely related to abstraction and information hiding.<br /><br /><b>Peer-to-peer</b><br />Peer-to-peer(peer-to-peer architecture), or abbreviated P2P, a type of network in which each workstation has equivalent capabilities and responsibilities. This differs from client/server architectures, in which some computers are dedicated to serving the others. Peer-to-peer networks are generally simpler, but they usually do not offer the same performance under heavy loads.<br /><br /><b>SNMP</b><br />SNMP (Simple Network Management Protocol) is a set of protocols for managing complex networks. The first versions of SNMP were developed in the early 80s. SNMP works by sending messages, called protocol data units (PDUs), to different parts of a network. SNMP-compliant devices, called agents, store data about themselves in Management Information Bases (MIBs) and return this data to the SNMP requesters.<br /><br />			</div>
		  
</section>


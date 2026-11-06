---
id: protocol-bootp
slug: bootp
name: BOOTP
expandedName: Bootstrap Protocol
origin: historical
provenance:
  source: protocols/protocol_BOOTP.htm
  sha256: cbd3e187885f3535f59837e4f09504a971839f996cebf03b6698e8b089a2f6a5
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Bootstrap Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Bootstrap Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer configuration protocol.
  - label: Ports
    html: |-
      67 (UDP) server
      <br />68 (UDP) host
  - label: Related protocols
    html: 'DHCP,IP,<br />IPv6,<br />TCP,<br />UDP,<br />RARP'
  - label: Working groups
    html: 'DHCP, Dynamic Host Configuration Protocol'
originalUpdate: '2005-11-10 16:19:53'
rfcs:
  - 951
  - 1048
  - 1084
  - 1395
  - 1497
  - 1532
  - 1533
  - 1534
  - 1542
  - 1812
  - 2132
  - 2242
related:
  - protocol-dhcp
  - protocol-ip
  - protocol-ipv6
  - protocol-tcp
  - protocol-udp
  - protocol-rarp
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

			The Bootstrap Protocol (BOOTP) is an UDP/IP-based protocol which allows a booting host to configure itself dynamically and without user supervision. BOOTP provides a means to notify a host of its assigned IP address, the IP address of a boot server host, and the name of a file to be loaded into memory and executed.
<br />
<br />This protocol is designed to allow a (possibly diskless) client machine to determine its own Internet address, the address of a boot server, and the name of an appropriate boot file to be loaded and executed. BOOTP does not provide the actual transfer of the boot file, which is typically done with a simple file transfer protocol such as TFTP.
<br />
<br />The bootstrap operation can be thought of as consisting of TWO PHASES. Here describes the first phase, which could be labeled 'address determination and bootfile selection'. After this address and filename information is obtained, control passes to the second phase of the bootstrap where a file transfer occurs. The file transfer will typically use the TFTP protocol, since it is intended that both phases reside in PROM on the client. However BOOTP could also work with other protocols such as SFTP or FTP
<br />
<br />We suggest that the client's PROM software provide a way to do a complete bootstrap without 'user' interaction. This is the type of boot that would occur during an unattended power-up. A mechanism should be provided for the user to manually supply the necessary address and filename information to bypass the BOOTP protocol and enter the file transfer phase directly. If non-volatile storage is available, we suggest keeping default settings there and bypassing the BOOTP protocol unless these settings cause the file transfer phase to fail. If the cached information fails, the bootstrap should fall back to phase 1 and use BOOTP.
<br /><hr />
<br /><b>Outline of the protocol</b>
<br /><ul><li>A single packet exchange is performed.<br /></li> 
<li>Timeouts are used to retransmit until a reply is received. The same packet field layout is used in both directions. Fixed length fields of maximum reasonable length are used to simplify structure definition and parsing.
<br /><br /></li>
<li>An 'opcode' field exists with two values. <br /></li>
<li>The client broadcasts a 'bootrequest' packet. The server then answers with a 'bootreply' packet. The bootrequest contains the client's hardware address and its IP address, if known.
<br /><br /></li>
<li>The request can optionally contain the name of the server the client wishes to respond.<br /></li>
<li>This is so the client can force the boot to occur from a specific host The client does not have to deal with name / domain services; instead this function is pushed off to the BOOTP server.
<br /><br /></li>
<li>The request can optionally contain the 'generic' filename to be booted.<br /></li>
<li>For example 'unix' or 'ethertip'. When the server sends the bootreply, it replaces this field with the fully qualified path name of the appropriate boot file. In determining this name, the server may consult his own database correlating the client's address and filename request, with a particular boot file customized for that client. If the bootrequest filename is a null string, then the server returns a filename field indicating the 'default' file to be loaded for that client.
<br /><br /></li>
<li>In the case of clients who do not know their IP addresses, the server must also have a database relating hardware address to IP address.<br /><br /></li>

<li>Certain network topologies (such as Stanford's) may be such that a given physical cable does not have a TFTP server directly attached to it (e.g. all the gateways and hosts on a certain cable may be diskless). With the cooperation of neighboring gateways, BOOTP can allow clients to boot off of servers several hops away, through these gateways.</li></ul>
<br /><hr />
<br /><b>Header format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32</p></td></tr><tr><td><p>Opcode</p></td><td><p>Hardware type</p></td><td><p>Hardware address length</p></td><td><p>Hop count</p></td></tr><tr><td colspan="4"><p>Transaction ID</p></td></tr><tr><td colspan="2"><p>Number of seconds</p></td><td colspan="2"><p>Flags</p></td></tr><tr><td colspan="4"><p>Client IP address</p></td></tr><tr><td colspan="4"><p>Your IP address</p></td></tr><tr><td colspan="4"><p>Server IP address</p></td></tr><tr><td colspan="4"><p>Gateway IP address</p></td></tr><tr><td colspan="4"><p>Client hardware address</p></td></tr><tr><td colspan="4"><p>Server host name</p></td></tr><tr><td colspan="4"><p>Boot filename</p></td></tr><tr><td colspan="4"><p>Vendor specific info</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Opcode</b><br /></li>
<li>8 bits. DHCP message operation code: either BOOTREQUEST or BOOTREPLY.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Value</p></td><td><p>Description</p></td></tr><tr><td><p>1</p></td><td><p>BOOTREQUEST, Boot request.</p></td></tr><tr><td><p>2</p></td><td><p>BOOTREPLY, Boot reply.</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Hardware type</b><br /></li>
<li>8 bits.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>Value</p></td><td><p>Description</p></td></tr><tr><td><p>1</p></td><td><p>Ethernet.</p></td></tr><tr><td><p>2</p></td><td><p>Experimental Ethernet.</p></td></tr><tr><td><p>3</p></td><td><p>Amateur Radio AX.25.</p></td></tr><tr><td><p>4</p></td><td><p>Proteon ProNET Token Ring.</p></td></tr><tr><td><p>5</p></td><td><p>Chaos.</p></td></tr><tr><td><p>6</p></td><td><p>IEEE 802.</p></td></tr><tr><td><p>7</p></td><td><p>ARCNET.</p></td></tr><tr><td><p>8</p></td><td><p>Hyperchannel.</p></td></tr><tr><td><p>9</p></td><td><p>Lanstar.</p></td></tr><tr><td><p>10</p></td><td><p>Autonet Short Address.</p></td></tr><tr><td><p>11</p></td><td><p>LocalTalk.</p></td></tr><tr><td><p>12</p></td><td><p>LocalNet (IBM PCNet or SYTEK LocalNET).</p></td></tr><tr><td><p>13</p></td><td><p>Ultra link.</p></td></tr><tr><td><p>14</p></td><td><p>SMDS.</p></td></tr><tr><td><p>15</p></td><td><p>Frame Relay.</p></td></tr><tr><td><p>16</p></td><td><p>ATM, Asynchronous Transmission Mode.</p></td></tr><tr><td><p>17</p></td><td><p>HDLC.</p></td></tr><tr><td><p>18</p></td><td><p>Fibre Channel.</p></td></tr><tr><td><p>19</p></td><td><p>ATM, Asynchronous Transmission Mode.</p></td></tr><tr><td><p>20</p></td><td><p>Serial Line.</p></td></tr><tr><td><p>21</p></td><td><p>ATM, Asynchronous Transmission Mode.</p></td></tr><tr><td><p>22</p></td><td><p>MIL-STD-188-220.</p></td></tr><tr><td><p>23</p></td><td><p>Metricom.</p></td></tr><tr><td><p>24</p></td><td><p>IEEE 1394.1995.</p></td></tr><tr><td><p>25</p></td><td><p>MAPOS.</p></td></tr><tr><td><p>26</p></td><td><p>Twinaxial.</p></td></tr><tr><td><p>27</p></td><td><p>EUI-64.</p></td></tr><tr><td><p>28</p></td><td><p>HIPARP.</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Hop count</b><br /></li>
<li>8 bits. client sets to zero, optionally used by gateways in cross-gateway booting.
<br /><br /></li>
<li><b>Transaction ID</b><br /></li>
<li>32 bits. Transaction ID is a random number, used to match this boot request with the responses it generates.
<br /><br /></li>
<li><b>Number of seconds</b><br /></li>
<li>16 bits. The elapsed time, in seconds since the client sent its first BOOTREQUEST message.
<br /><br /></li>
<li><b>Flags</b><br /></li>
<li>16 bits.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>1</p></td><td><p>15</p></td></tr><tr><td><p>Broadcast</p></td><td><p>0</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Client IP address</b><br /></li>
<li>32 bits. It isfilled in by client in bootrequest if known.
<br /><br /></li>
<li><b>Your IP address</b><br /></li>
<li>32 bits. It is filled by server if client doesn't know its own address (ciaddr was 0).
<br /><br /></li>
<li><b>Server IP address</b><br /></li>
<li>32 bits. Server IP address returned in bootreply by server.
<br /><br /></li>
<li><b>Gateway IP address</b><br /></li>
<li>32 bits. Gateway IP address used in optional cross-gateway booting.
<br /><br /></li>
<li><b>Client hardware address</b><br /></li>
<li>16 bytes. Client hardware address filled in by client.
<br /><br /></li>
<li><b>Server host name</b><br /></li>
<li>64 bytes. Null terminated string.
<br /><br /></li>
<li><b>Boot filename</b><br /></li>
<li>128 bytes. Null terminated string; 'generic' name or null in bootrequest, fully qualified directory-path name in bootreply.
<br /><br /></li>
<li><b>Vendor specific info</b><br /></li>
<li>64 bytes. It  could be hardware type/serial on request, or 'capability' / remote file system handle on reply. This info may be set aside for use by a third phase bootstrap or kernel.</li></ul>
<br /><hr />
<br /><b>Chicken / Egg Issues</b>
<br />How can the server send an IP datagram to the client, if the client doesnt know its own IP address (yet)?  Whenever a bootreply is being sent, the transmitting machine performs the following operations:
<br /><ul><li>If the client knows its own IP address ('ciaddr' field is nonzero), then the IP can be sent 'as normal', since the client will respond to ARPs.<br /><br /></li>

<li>If the client does not yet know its IP address (ciaddr zero), then the client cannot respond to ARPs sent by the transmitter of the bootreply.</li></ul>
<br />
<br /><b>Client Use of ARP</b>
<br />The client PROM must contain a simple implementation of ARP, e.g. the address cache could be just one entry in size. This will allow a second-phase-only boot (TFTP) to be performed when the client knows the IP addresses and bootfile name.
<br />
<br />Any time the client is expecting to receive a TFTP or BOOTP reply, it should be prepared to answer an ARP request for its own IP to hardware address mapping (if known).
<br />
<br /><b>Booting Through Gateways</b>
<br />Gateways listening to broadcast BOOTREQUESTs may decide to forward or rebroadcast these requests 'when appropriate'. For example, thegateway could have, as part of his configuration tables, a list of other networks or hosts to receive a copy of any broadcast BOOTREQUESTs. Even though a 'hops' field exists, it is a poor idea to simply globally rebroadcast the requests, since broadcast loops will almost certainly occur.
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>BOOTP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/hline.gif" alt="" />DHCP<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ARP</b><br />Address Resolution Protocol (ARP) is a network layer protocol used to convert an IP address into a physical address (called a DLC address), such as an Ethernet address. A host wishing to obtain a physical address broadcasts an ARP request onto the TCP/IP network. The host on the network that has the IP address in the request then replies with its physical hardware address.<br /><br /><b>DHCP</b><br />Dynamic Host Configuration Protocol (DHCP) is a protocol for assigning dynamic IP addresses to devices on a network. With dynamic addressing, a device can have a different IP address every time it connects to the network. In some systems, the device's IP address can even change while it is still connected. DHCP also supports a mix of static and dynamic IP addresses. 
<br />
<br />Dynamic addressing simplifies network administration because the software keeps track of IP addresses rather than requiring an administrator to manage the task. This means that a new computer can be added to a network without the hassle of manually assigning it a unique IP address. Many ISPs use dynamic IP addressing for dial-up users.<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>TFTP</b><br />TFTP(Trivial File Transfer Protocol) is a simple form of the File Transfer Protocol (FTP). TFTP uses the User Datagram Protocol (UDP)and provides no security features. It is often used by servers to boot diskless workstations, X-terminals, and routers. <br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc951.html">RFC 951</a>] BOOTSTRAP PROTOCOL (BOOTP).
[<a href="https://www.rfc-editor.org/rfc/rfc1534.html">RFC 1534</a>] Interoperation Between DHCP and BOOTP.
[<a href="https://www.rfc-editor.org/rfc/rfc1542.html">RFC 1542</a>] Clarifications and Extensions for the Bootstrap Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1532.html">RFC 1532</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc951.html">RFC 951</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc2132.html">RFC 2132</a>] DHCP Options and BOOTP Vendor Extensions.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1533.html">RFC 1533</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2242.html">RFC 2242</a>] NetWare/IP Domain Name and Information.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1048.html">RFC 1048</a>] BOOTP Vendor Information Extensions.
[<a href="https://www.rfc-editor.org/rfc/rfc1084.html">RFC 1084</a>] BOOTP Vendor Information Extensions.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1048.html">RFC 1048</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1395.html">RFC 1395</a>] BOOTP Vendor Information Extensions.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1048.html">RFC 1048</a>, <a href="https://www.rfc-editor.org/rfc/rfc1084.html">RFC 1084</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc951.html">RFC 951</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1497.html">RFC 1497</a>] BOOTP Vendor Information Extensions.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1048.html">RFC 1048</a>, <a href="https://www.rfc-editor.org/rfc/rfc1084.html">RFC 1084</a>, <a href="https://www.rfc-editor.org/rfc/rfc1395.html">RFC 1395</a>. 
                
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc951.html">RFC 951</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1532.html">RFC 1532</a>] Clarifications and Extensions for the Bootstrap Protocol.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc951.html">RFC 951</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1533.html">RFC 1533</a>] DHCP Options and BOOTP Vendor Extensions.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1048.html">RFC 1048</a>, <a href="https://www.rfc-editor.org/rfc/rfc1084.html">RFC 1084</a>, <a href="https://www.rfc-editor.org/rfc/rfc1395.html">RFC 1395</a>, <a href="https://www.rfc-editor.org/rfc/rfc1497.html">RFC 1497</a>.
                		  </div>
		  
</section>


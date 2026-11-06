---
id: protocol-dhcp
slug: dhcp
name: DHCP
expandedName: Dynamic Host Configuration Protocol
origin: historical
provenance:
  source: protocols/protocol_DHCP.htm
  sha256: 4bc8edaf94a25de9db9efaa3badc3d223b1201595ce2adc242bafee76e81bc8a
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Dynamic Host Configuration Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Dynamic Host Configuration Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer configuration protocol
  - label: Ports
    html: |-
      67 (UDP) server
      <br />68 (UDP) host
  - label: Related protocols
    html: 'BOOTP,<br />Bootstrap Protocol'
  - label: Working groups
    html: |-
      Dhc, Dynamic Host Configuration.
      <br />Ip1394, IP Over IEEE 1394
originalUpdate: '2005-11-10 16:03:48'
rfcs:
  - 951
  - 1048
  - 1084
  - 1395
  - 1497
  - 1531
  - 1533
  - 1534
  - 1541
  - 2131
  - 2132
  - 2241
  - 2242
  - 2485
  - 2489
  - 2563
  - 2610
  - 2855
  - 2937
  - 2939
  - 3004
  - 3011
  - 3046
  - 3118
  - 3203
  - 3256
  - 3361
  - 3396
  - 3397
  - 3442
  - 3456
  - 3495
  - 3527
  - 3594
  - 3634
  - 3679
  - 3825
  - 3925
  - 3942
  - 3993
  - 4014
  - 4030
  - 4039
related:
  - protocol-bootp
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

			The Dynamic Host Configuration Protocol (DHCP) provides configuration parameters to Internet hosts.
<br />
<br />DHCP consists of two components: 
<br /><ul><li>A protocol that delivers host-specific configuration parameters from a DHCP server to a host.<br /></li> 
<li>A mechanism for the allocation of network addresses to hosts.</li></ul>
<br />
<br />From the client's point of view, DHCP is an extension of the BOOTP mechanism. This behavior allows existing BOOTP clients to interoperate with DHCP servers without requiring any change to the clients' initialization software. There are some new, optional transactions that optimize the interaction between DHCP clients and servers that are described in sections 3 and 4.
<br />
<br />There are two primary differences between DHCP and BOOTP. First, DHCP defines mechanisms through which clients can be assigned a network address for a finite lease, allowing for serial reassignment of network addresses to different clients. Second, DHCP provides the mechanism for a client to acquire all of the IP configuration parameters that it needs in order to operate.
<br />
<br />IP requires the setting of many parameters within the protocol implementation software. Because IP can be used on many dissimilar kinds of network hardware, values for those parameters cannot be guessed at or assumed to have correct defaults. The use of a distributed address allocation scheme based on a polling/defense mechanism, for discovery of network addresses already in use, cannot guarantee unique network addresses because hosts may not always be able to defend their network addresses. 
<br />DHCP supports three mechanisms for IP address allocation: 
<br /><ul><li>Automatic allocation<br /></li>
<li>DHCP assigns a permanent IP address to the host. 
<br /><br /></li>
<li><b>Dynamic allocation</b><br /></li> 
<li>DHCP assigns an IP address for a limited period of time. Such a network address is called a lease. This is the only mechanism that allows automatic reuse of addresses that are no longer needed by the host to which it was assigned.
<br /><br /></li>
<li><b>Manual allocation</b><br /></li> 
<li>The host's address is assigned by a network administrator. 
<br /><br /></li>
<li>The first service provided by DHCP is to provide persistent storage of network parameters for network clients. The model of DHCP persistent storage is that the DHCP service stores a key-value entry for each client, where the key is some unique identifier (for example, an IP subnet number and a unique identifier within the subnet) and the value contains the configuration parameters for the client.
<br /><br /></li>
<li>The second service provided by DHCP is the allocation of temporary or permanent network (IP) addresses to clients. The basic mechanism for the dynamic allocation of network addresses is simple: a client requests the use of an address for some period of time. The allocation mechanism (the collection of DHCP servers) guarantees not to reallocate that address within the requested time and attempts to return the same network address each time the client requests an address.</li></ul>
<br /><hr />
<br /><b>Header format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32 bits</p></td></tr><tr><td><p>Opcode</p></td><td><p>Hardware type</p></td><td><p>Hardware address length</p></td><td><p>Hop count</p></td></tr><tr><td colspan="4"><p>Transaction ID</p></td></tr><tr><td colspan="2"><p>Number of seconds</p></td><td colspan="2"><p>Flags</p></td></tr><tr><td colspan="4"><p>Client IP address</p></td></tr><tr><td colspan="4"><p>Your IP address</p></td></tr><tr><td colspan="4"><p>Server IP address</p></td></tr><tr><td colspan="4"><p>Gateway IP address</p></td></tr><tr><td colspan="4"><p>Client hardware address</p></td></tr><tr><td colspan="4"><p>Server host name</p></td></tr><tr><td colspan="4"><p>Boot filename</p></td></tr><tr><td colspan="4"><p>Options</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Opcode</b></li><li> 8 bits.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Value</p></td><td><p>Description</p></td></tr><tr><td><p>1</p></td><td><p>BOOTREQUEST, Boot request.</p></td></tr><tr><td><p>2</p></td><td><p>BOOTREPLY, Boot reply</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Hardware type</b></li><li> 8 bits.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>Value</p></td><td><p>Description</p></td></tr><tr><td><p>1</p></td><td><p>Ethernet.</p></td></tr><tr><td><p>2</p></td><td><p>Experimental Ethernet.</p></td></tr><tr><td><p>3</p></td><td><p>Amateur Radio AX.25.</p></td></tr><tr><td><p>4</p></td><td><p>Proteon ProNET Token Ring.</p></td></tr><tr><td><p>5</p></td><td><p>Chaos.</p></td></tr><tr><td><p>6</p></td><td><p>IEEE 802.</p></td></tr><tr><td><p>7</p></td><td><p>ARCNET.</p></td></tr><tr><td><p>8</p></td><td><p>Hyperchannel.</p></td></tr><tr><td><p>9</p></td><td><p>Lanstar.</p></td></tr><tr><td><p>10</p></td><td><p>Autonet Short Address.</p></td></tr><tr><td><p>11</p></td><td><p>LocalTalk.</p></td></tr><tr><td><p>12</p></td><td><p>LocalNet (IBM PCNet or SYTEK LocalNET).</p></td></tr><tr><td><p>13</p></td><td><p>Ultra link.</p></td></tr><tr><td><p>14</p></td><td><p>SMDS.</p></td></tr><tr><td><p>15</p></td><td><p>Frame Relay.</p></td></tr><tr><td><p>16</p></td><td><p>ATM, Asynchronous Transmission Mode.</p></td></tr><tr><td><p>17</p></td><td><p>HDLC.</p></td></tr><tr><td><p>18</p></td><td><p>Fibre Channel.</p></td></tr><tr><td><p>19</p></td><td><p>ATM, Asynchronous Transmission Mode.</p></td></tr><tr><td><p>20</p></td><td><p>Serial Line.</p></td></tr><tr><td><p>21</p></td><td><p>ATM, Asynchronous Transmission Mode.</p></td></tr><tr><td><p>22</p></td><td><p>MIL-STD-188-220.</p></td></tr><tr><td><p>23</p></td><td><p>Metricom.</p></td></tr><tr><td><p>24</p></td><td><p>IEEE 1394.1995.</p></td></tr><tr><td><p>25</p></td><td><p>MAPOS.</p></td></tr><tr><td><p>26</p></td><td><p>Twinaxial.</p></td></tr><tr><td><p>27</p></td><td><p>EUI-64.</p></td></tr><tr><td><p>28</p></td><td><p>HIPARP.</p></td></tr><tr><td><p>29</p></td><td><p>IP and ARP over ISO 7816-3.</p></td></tr><tr><td><p>30</p></td><td><p>ARPSec.</p></td></tr><tr><td><p>31</p></td><td><p>IPsec tunnel.</p></td></tr><tr><td><p>32</p></td><td><p>Infiniband.</p></td></tr><tr><td><p>33</p></td><td><p>CAI, TIA-102 Project 25 Common Air Interface.</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Hardware address length</b><br /></li>
<li>8 bits.
<br /><br /></li>
<li><b>Hop count</b><br /></li>
<li>8 bits. This field is used by relay agents. Client sets to zero, optionally used by relay agents when booting via a relay agent.
<br /><br /></li>
<li><b>Transaction ID</b><br /></li>
<li>32 bits. A random number chosen by the client, used by the client and server to associate messages and responses between a client and a server.
<br /><br /></li>
<li><b>Number of seconds</b><br /></li>
<li>16 bits. The elapsed time in seconds since the client began an address acquisition or renewal process.
<br /><br /></li>
<li><b>Flags</b></li><li> 16 bits
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>1</p></td><td><p>16</p></td></tr><tr><td><p>B</p></td><td><p>0</p></td></tr></tbody></table></div></div><br /></li>
<li>B, Broadcast. 1 bit.
<br /><br /></li>
<li><b>Client IP address</b><br /></li>
<li>32 bits. Only filled in if client is in BOUND, RENEW or REBINDING state and can respond to ARP requests.
<br /><br /></li>
<li><b>Your IP address</b><br /></li>
<li>32 bits. Client IP address
<br /><br /></li>
<li><b>Server IP address</b><br /></li>
<li>32 bits. IP address of next server to use in bootstrap; returned in DHCPOFFER, DHCPACK by server.
<br /><br /></li>
<li><b>Gateway IP address</b><br /></li>
<li>32 bits. Relay agent IP address, used in booting via a relay agent.
<br /><br /></li>
<li><b>Client hardware address</b><br /></li>
<li>16 bytes. 
<br /><br /></li>
<li><b>Server host name</b><br /></li>
<li>64 bytes.
<br /><br /></li>
<li><b>Boot filename</b><br /></li>
<li>128 bytes. Null terminated string; "generic" name or null in DHCPDISCOVER, fully qualified directory-path name in DHCPOFFER.
<br /><br /></li>
<li><b>BOOTP/DHCP options</b><br /></li>
<li>Variable length. The first four bytes contain the (decimal) values 99, 130, 83 and 99. This is the same magic cookie as has been defined for BOOTP. The remainder of the field consists of a list of tagged parameters that are called options. All of the vendor extensions used by BOOTP are also DHCP options.</li></ul>
<br /><hr />
<br /><b>Client-Server Protocol</b>
<br />DHCP uses the BOOTP message format. The 'Opcode' field of each DHCP message sent from a client to a server contains BOOTREQUEST. BOOTREPLY is used in the 'op' field of each DHCP message sent from a server to a client.
<br /><ul><li><b>Allocating a network address</b><br /></li>
<li>The following summary of the protocol exchanges between clients and servers refers to the DHCP messages described in the following illustrate.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>Message</p></td><td><p>Use</p></td></tr><tr><td><p>DHCPDISCOVER</p></td><td>Client broadcast to locate available servers.</td></tr><tr><td><p>DHCPOFFER</p></td><td>Server to client in response to DHCPDISCOVER with offer of configuration parameters.</td></tr><tr><td><p>DHCPREQUEST</p></td><td>Client message to servers either (a) requesting offered parameters from one server and implicitly declining offers from all others, (b) confirming correctness of previously allocated address after, e.g., system reboot, or (c) extending the lease on a particular network address.</td></tr><tr><td><p>DHCPACK</p></td><td>Server to client with configuration parameters, including committed network address.</td></tr><tr><td><p>DHCPNAK</p></td><td>Server to client indicating client"s notion of network address is incorrect (e.g., client has moved to new subnet) or client"s lease as expired.</td></tr><tr><td><p>DHCPDECLINE</p></td><td>Client to server indicating network address is already in use.</td></tr><tr><td><p>DHCPRELEASE</p></td><td>Client to server relinquishing network address and canceling remaining lease.</td></tr><tr><td><p>DHCPINFORM</p></td><td>Client to server, asking only for local configuration parameters; client already has externally configured network address.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Reusing a previously allocated network address</b><br /></li>
<li>If a client remembers and wishes to reuse a previously allocated network address, a client may choose to omit some of the steps described in the previous section. 
<br /><br /></li>
<li><b>Interpretation and representation of time values</b><br /></li>
<li>A client acquires a lease for a network address for a fixed period of time (which may be infinite). Throughout the protocol, times are to be represented in units of seconds. The time value of 0xffffffff is reserved to represent "infinity".
<br /><br /></li>
<li><b>Obtaining parameters with externally configured network address</b><br /></li>
<li>If a client has obtained a network address through some other means (e.g., manual configuration), it may use a DHCPINFORM request message to obtain other local configuration parameters. Servers receiving a DHCPINFORM message construct a DHCPACK message with any local configuration parameters appropriate for the client without: allocating a new address, checking for an existing binding, filling in 'yiaddr' or including lease time parameters. The servers SHOULD unicast the DHCPACK reply to the address given in the 'ciaddr' field of the DHCPINFORM message.</li></ul>
<br /><hr />
<br /><b>Specification of the DHCP client-server protocol</b>
<br />Assume that a DHCP server has a block of network addresses from which it can satisfy requests for new addresses. Each server also maintains a database of allocated addresses and leases in local permanent storage.
<br /><ul><li><b>Constructing and sending DHCP messages</b><br /></li>
<li>DHCP clients and servers both construct DHCP messages by filling in fields in the fixed format section of the message and appending tagged data items in the variable length option area.
<br /><br /></li>
<li>DHCP uses UDP as its transport protocol.  DHCP messages from a client to a server are sent to the 'DHCP server' port (67), and DHCP messages from a server to a client are sent to the 'DHCP client' port (68). A server with multiple network address (e.g., a multi-homed host) MAY use any of its network addresses in outgoing DHCP messages.
<br /><br /></li>
<li><b>DHCP server administrative controls</b><br /></li>
<li>DHCP servers are not required to respond to every DHCPDISCOVER and DHCPREQUEST message they receive. For example, a network administrator, to retain stringent control over the clients attached to the network, may choose to configure DHCP servers to respond only to clients that have been previously registered through some external mechanism. The DHCP specification describes only the interactions between clients and servers when the clients and servers choose to interact; it is beyond the scope of the DHCP specification to describe all of the administrative controls that system administrators might want to use. Specific DHCP server implementations may incorporate any controls or policies desired by a network administrator.
<br /><br /></li>
<li><b>DHCP server behavior</b><br /></li>
<li>A DHCP server processes incoming DHCP messages from a client based on the current state of the binding for that client. A DHCP server can receive the following messages from a client:
<br /></li><li><ul><li>DHCPDISCOVER
<br /><br /></li>
<li>DHCPREQUEST
<br /><br /></li>
<li>DHCPDECLINE
<br /><br /></li>
<li>DHCPRELEASE
<br /><br /></li>
<li>DHCPINFORM</li></ul></li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">BOOTP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>DHCP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Automatic allocation</b><br />A host is allocated a permanent IP address.<br /><br /><b>BOOTP</b><br />Bootstrap Protocol (BOOTP) is an Internet protocol that enables a diskless workstation to discover its own IP address, the IP address of a BOOTP server on the network, and a file to be loaded into memory to boot the machine. This enables the workstation to boot without requiring a hard or floppy disk drive.<br /><br /><b>Binding</b><br />A collection of configuration parameters, including at least an IP address, associated with a DHCP client. Bindings are managed by DHCP servers.<br /><br /><b>Dynamic allocation</b><br />A host is allocated an IP address for a limited time period or until the host explicitly relinquishes the address.<br /><br /><b>Manual allocation</b><br />A host is assigned an IP address and DHCP is used to convey the assigned address to the host.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1534.html">RFC 1534</a>] Interoperation Between DHCP and BOOTP.
[<a href="https://www.rfc-editor.org/rfc/rfc2131.html">RFC 2131</a>] Dynamic Host Configuration Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1531.html">RFC 1531</a>, <a href="https://www.rfc-editor.org/rfc/rfc1541.html">RFC 1541</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2132.html">RFC 2132</a>] DHCP Options and BOOTP Vendor Extensions.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3942.html">RFC 3942</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1533.html">RFC 1533</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2241.html">RFC 2241</a>] DHCP Options for Novell Directory Services.
                Defines BOOTP/DHCP options 85 (NDS Servers), 86 (NDS Tree Name) and 87 (NDS Context). 
[<a href="https://www.rfc-editor.org/rfc/rfc2242.html">RFC 2242</a>] NetWare/IP Domain Name and Information.
                Defines BOOTP/DHCP options 62 (NetWare/IP Domain Name) and 63 (NetWare/IP Information). 
[<a href="https://www.rfc-editor.org/rfc/rfc2485.html">RFC 2485</a>] DHCP Option for The Open Group's User Authentication Protocol.
                Defines the DHCP User Authentication Protocol Option. 
[<a href="https://www.rfc-editor.org/rfc/rfc2563.html">RFC 2563</a>] DHCP Option to Disable Stateless Auto-Configuration in IPv4 Clients.
[<a href="https://www.rfc-editor.org/rfc/rfc2610.html">RFC 2610</a>] DHCP Options for Service Location Protocol.
                Defines BOOTP/DHCP options 78 (SLP Directory Agent) and 79 (SLP Service Scope). 
[<a href="https://www.rfc-editor.org/rfc/rfc2855.html">RFC 2855</a>] DHCP for IEEE 1394.
[<a href="https://www.rfc-editor.org/rfc/rfc2937.html">RFC 2937</a>] The Name Service Search Option for DHCP.
[<a href="https://www.rfc-editor.org/rfc/rfc2939.html">RFC 2939</a>] Procedures and IANA Guidelines for Definition of New DHCP Options and Message Types.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2489.html">RFC 2489</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3004.html">RFC 3004</a>] The User Class Option for DHCP.
[<a href="https://www.rfc-editor.org/rfc/rfc3011.html">RFC 3011</a>] The IPv4 Subnet Selection Option for DHCP.
[<a href="https://www.rfc-editor.org/rfc/rfc3046.html">RFC 3046</a>] DHCP Relay Agent Information Option.
                Defines DHCP option 82 (Relay Agent Information Option). 
[<a href="https://www.rfc-editor.org/rfc/rfc3118.html">RFC 3118</a>] Authentication for DHCP Messages.
[<a href="https://www.rfc-editor.org/rfc/rfc3203.html">RFC 3203</a>] DHCP reconfigure extension.
[<a href="https://www.rfc-editor.org/rfc/rfc3256.html">RFC 3256</a>] The DOCSIS (Data-Over-Cable Service Interface Specifications) Device Class DHCP (Dynamic Host Configuration Protocol) Relay Agent Information Sub-option.
[<a href="https://www.rfc-editor.org/rfc/rfc3361.html">RFC 3361</a>] Dynamic Host Configuration Protocol (DHCP-for-IPv4) Option for Session Initiation Protocol (SIP) Servers.
[<a href="https://www.rfc-editor.org/rfc/rfc3396.html">RFC 3396</a>] Encoding Long Options in the Dynamic Host Configuration Protocol (DHCPv4).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2131.html">RFC 2131</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3397.html">RFC 3397</a>] Dynamic Host Configuration Protocol (DHCP) Domain Search Option.
                Defines DHCP option 119 (Domain Search). 
[<a href="https://www.rfc-editor.org/rfc/rfc3442.html">RFC 3442</a>] The Classless Static Route Option for Dynamic Host Configuration Protocol (DHCP) version 4.
                Defines DHCP option 121 (Classless Static Route). 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2132.html">RFC 2132</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3456.html">RFC 3456</a>] Dynamic Host Configuration Protocol (DHCPv4) Configuration of IPsec Tunnel Mode.
[<a href="https://www.rfc-editor.org/rfc/rfc3495.html">RFC 3495</a>] Dynamic Host Configuration Protocol (DHCP) Option for CableLabs Client Configuration.
                Defines DHCP option 122 (CableLabs Client Configuration). 
[<a href="https://www.rfc-editor.org/rfc/rfc3527.html">RFC 3527</a>] Link Selection sub-option for the Relay Agent Information Option for DHCPv4.
[<a href="https://www.rfc-editor.org/rfc/rfc3594.html">RFC 3594</a>] PacketCable Security Ticket Control Sub-Option for the DHCP CableLabs Client Configuration (CCC) Option.
                Defines DHCP option 122 (CableLabs Client Configuration) suboption 9 (Security Ticket Control). 
[<a href="https://www.rfc-editor.org/rfc/rfc3634.html">RFC 3634</a>] Key Distribution Center (KDC) Server Address Sub-option for the Dynamic Host Configuration Protocol (DHCP) CableLabs Client Configuration (CCC) Option.
                Defines DHCP option 122 (CableLabs Client Configuration) suboption 10 (KDC Server Address). 
[<a href="https://www.rfc-editor.org/rfc/rfc3679.html">RFC 3679</a>] Unused Dynamic Host Configuration Protocol (DHCP) Option Codes.
[<a href="https://www.rfc-editor.org/rfc/rfc3825.html">RFC 3825</a>] Dynamic Host Configuration Protocol Option for Coordinate-based Location Configuration Information.
                Defines DHCP option 123 (GeoConf). 
[<a href="https://www.rfc-editor.org/rfc/rfc3925.html">RFC 3925</a>] Vendor-Identifying Vendor Options for Dynamic Host Configuration Protocol version 4 (DHCPv4).
                Defines DHCP options 124 (V-I Vendor Class) and 125 (V-I Vendor-Specific Information). 
[<a href="https://www.rfc-editor.org/rfc/rfc3942.html">RFC 3942</a>] Reclassifying Dynamic Host Configuration Protocol version 4 (DHCPv4) Options.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2132.html">RFC 2132</a>. 
                Redefines the DHCP option assignment space. 
[<a href="https://www.rfc-editor.org/rfc/rfc3993.html">RFC 3993</a>] Subscriber-ID Suboption for the Dynamic Host Configuration Protocol (DHCP) Relay Agent Option.
                Defines DHCP Agent Suboption Code 6 (Subscriber-ID). 
[<a href="https://www.rfc-editor.org/rfc/rfc4014.html">RFC 4014</a>] Remote Authentication Dial-In User Service (RADIUS) Attributes Suboption for the Dynamic Host Configuration Protocol (DHCP) Relay Agent Information Option.
                Defines DHCP Agent Suboption Code 7 (RADIUS Attributes). 
[<a href="https://www.rfc-editor.org/rfc/rfc4030.html">RFC 4030</a>] The Authentication Suboption for the Dynamic Host Configuration Protocol (DHCP) Relay Agent Option.
[<a href="https://www.rfc-editor.org/rfc/rfc4039.html">RFC 4039</a>] Rapid Commit Option for the Dynamic Host Configuration Protocol version 4 (DHCPv4).
                Defines DHCP option 80 (Rapid Commit).<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1497.html">RFC 1497</a>] BOOTP Vendor Information Extensions.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1533.html">RFC 1533</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1048.html">RFC 1048</a>, <a href="https://www.rfc-editor.org/rfc/rfc1084.html">RFC 1084</a>, <a href="https://www.rfc-editor.org/rfc/rfc1395.html">RFC 1395</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc951.html">RFC 951</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1531.html">RFC 1531</a>] Dynamic Host Configuration Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1541.html">RFC 1541</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1533.html">RFC 1533</a>] DHCP Options and BOOTP Vendor Extensions.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2132.html">RFC 2132</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1048.html">RFC 1048</a>, <a href="https://www.rfc-editor.org/rfc/rfc1084.html">RFC 1084</a>, <a href="https://www.rfc-editor.org/rfc/rfc1395.html">RFC 1395</a>, <a href="https://www.rfc-editor.org/rfc/rfc1497.html">RFC 1497</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1541.html">RFC 1541</a>] Dynamic Host Configuration Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2131.html">RFC 2131</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1531.html">RFC 1531</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2489.html">RFC 2489</a>] Procedure for Defining New DHCP Options.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2939.html">RFC 2939</a>.<hr /><b>Publications:</b>
[ISBN 0130997218] DHCP: A Guide to Dynamic TCP/IP Network Configuration.
[ISBN 1565928385] DHCP for Windows 2000.
[ISBN 1578701376] The DHCP Handbook: Understanding, Deploying, and Managing Automated Configuration Services.
[ISBN 0672323273] The DHCP Handbook (2nd Edition).
                		  </div>
		  
</section>


---
id: protocol-stp
slug: stp
name: STP
expandedName: Spanning Tree Protocol
origin: historical
provenance:
  source: protocols/protocol_STP.htm
  sha256: 92cd9a3fd5b3f34158ac79eb9f003fc13ae5738f9fcf8c3323542ddbf5a54413
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Spanning Tree Protocol
layers:
  - Network Layer
suites:
  - DECnet
summary:
  - label: Protocol
    html: Spanning Tree Protocol
  - label: Protocol suite
    html: DECnet
  - label: Layer
    html: Network Layer
  - label: Related protocols
    html: 'IEEE 802.1D,<br />802.3,<br />802.1Q'
originalUpdate: '2005-12-06 14:36:02'
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

			STP (Spanning Tree Protocol) a link management protocol that is part of the IEEE 802.1 standard for media access control bridges. Using the spanning tree algorithm, STP provides path redundancy while preventing undesirable loops in a network that are created by multiple active paths between stations. Loops occur when there are alternate routes between hosts. To establish path redundancy, STP creates a tree that spans all of the switches in an extended network, forcing redundant paths into a standby, or blocked, state. STP allows only one active path at a time between any two network devices (this prevents the loops) but establishes the redundant links as a backup if the initial link should fail. 
<br />
<br />STP is a bridge/switch protocol that uses the Spanning Tree Algorithm (STA) to avoid or eliminate loops on a layer 2 network. The STA enables a learning bridge or switch to dynamically work around loops in a network's topology. These loops are created by the network itself. If the devices that connect the network segments are all configured to forward, they will continuously forward frames into an endless network loop. Get enough loops going and a frame will not reach its destination.
<br />
<br />Multiple active paths between stations cause loops in the network. If a loop exists in the network topology, the potential exists for duplication of messages. When loops occur, some switches see stations appear on both sides of the switch. This condition confuses the forwarding algorithm and allows duplicate frames to be forwarded.
<br />
<br />To provide path redundancy, Spanning-Tree Protocol defines a tree that spans all switches in an extended network. Spanning-Tree Protocol forces certain redundant data paths into a standby (blocked) state. If one network segment in the Spanning-Tree Protocol becomes unreachable, or if Spanning-Tree Protocol costs change, the spanning-tree algorithm reconfigures the spanning-tree topology and reestablishes the link by activating the standby path.
<br />
<br />Spanning-Tree Protocol operation is transparent to end stations, which are unaware whether they are connected to a single LAN segment or a switched LAN of multiple segments.
<br /><hr />
<br /><b>Protocol Structure</b>
<br />
<br />STP: Spanning Tree Protocol in IEEE 802.1DThe Bridge Protocol Data Units (BPDUs).
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Protocol ID (2)</td><td>Version (1)</td><td>Type (1)</td><td>Flags (1)</td><td>Rood ID (8)</td><td>Root Path (4)</td></tr><tr><td>Sender BID (8)</td><td>Port ID (2)</td><td>M-Age (2)</td><td>Max Age (2)</td><td>Hello (2)</td><td>FD (2 Bytes)</td></tr></tbody></table></div></div>
<br /><ul><li><b>Protocol ID </b>- Always 0. <br /></li>
<li><b>Version</b> - Always 0. <br /></li>
<li><b>Type </b>- Determines which of the two BPDU formats this frame contains (Configuration BPDU or TCN BPDU). <br /></li>
<li><b>Flags</b> - Used to handle changes in the active topology and is covered in the next section on Topology Change Notifications. <br /></li>
<li><b>Root BID</b> - Contains the Bridge ID of the Root Bridge. After convergence, all Configuration BPDUs in the bridged network should contain the same value for this field (for a single VLAN). NetXRay breaks out the two BID subfields: Bridge Priority and bridge MAC address. <br /></li>
<li><b>Root Path Cost</b> - The cumulative cost of all links leading to the Root Bridge. <br /></li>
<li><b>Sender BID</b> - The BID of the bridge that created the current BPDU. This field is the same for all BPDUs sent by a single switch (for a single VLAN), but it differs between switches. <br /></li>
<li><b>Port ID</b> - Contains a unique value for every port. Port 1/1 contains the value 0x8001, whereas Port 1/2 contains 0x8002. <br /></li>
<li><b>Message Age</b> - Records the time since the Root Bridge originally generated the information that the current BPDU is derived from. <br /></li>
<li><b>Max Age</b> - Maximum time that a BPDU is saved. Also influences the bridge table aging timer during the Topology Change Notification process (discussed later). <br /></li>
<li><b>Hello Time </b>- Time between periodic Configuration BPDUs.<br /></li> 
<li><b>Forward Delay</b> - The time spent in the Listening and Learning states. Also influences timers during the Topology Change Notification process (discussed later) </li></ul>
<br /><hr />
<br /><b>Spanning-Tree Protocol Port States</b>
<br />Propagation delays can occur when protocol information is passed through a switched LAN. As a result, topology changes can take place at different times and at different places in a switched network. When a switch port transitions directly from non-participation in the stable topology to the forwarding state, it can create temporary data loops. Ports must wait for new topology information to propagate through the switched LAN before starting to forward frames. They must also allow the frame lifetime to expire for frames that have been forwarded using the old topology.
<br />
<br />The following figure illustrates how a port moves through the five states.
<br />
<br /><img src="/supporting/images/Port_states.gif" alt="Port_states.gif" />
<br />
<br />Each port on a switch using Spanning-Tree Protocol exists in one of the following five states:
<br /><ul><li><b>Blocking State</b>
<br />A port in the blocking state does not participate in frame forwarding. After initialization, a BPDU is sent to each port in the switch. A switch initially assumes it is the root until it exchanges BPDUs with other switches. This exchange establishes which switch in the network is really the root. If only one switch resides in the network, no exchange occurs, the forward delay timer expires, and the ports move to the listening state. A switch always enters the blocking state following switch initialization.
<br />
<br />A port in the blocking state performs as follows:<br /></li>
<li><ul><li>Discards frames received from the attached segment. <br /></li>
<li>Discards frames switched from another port for forwarding. <br /></li>
<li>Does not incorporate station location into its address database. (There is no learning at this point, so there is no address database update.) <br /></li>
<li>Receives BPDUs and directs them to the system module. <br /></li>
<li>Does not transmit BPDUs received from the system module. <br /></li>
<li>Receives and responds to network management messages.</li></ul><br /><br /></li>

<li><b>Listening State</b>
<br />The listening state is the first transitional state a port enters after the blocking state, when Spanning-Tree Protocol determines that the port should participate in frame forwarding. Learning is disabled in the listening state. 
<br />
<br />A port in the listening state performs as follows:<br /></li>
<li><ul><li>Discards frames received from the attached segment. <br /></li>
<li>Discards frames switched from another port for forwarding.<br /></li> 
<li>Does not incorporate station location into its address database. (There is no learning at this point, so there is no address database update.) <br /></li>
<li>Receives BPDUs and directs them to the system module. <br /></li>
<li>Processes BPDUs received from the system module. <br /></li>
<li>Receives and responds to network management messages.</li></ul><br /><br /></li>

<li><b>Learning State</b>
<br />A port in the learning state is preparing to participate in frame forwarding. This is the second transitional state through which a port moves in anticipation of frame forwarding. The port enters the learning state from the listening state through the operation of Spanning-Tree Protocol.
<br />
<br />A port in the learning state performs as follows:
<br /><ul><li>Discards frames received from the attached segment. <br /></li>
<li>Discards frames switched from another port for forwarding. <br /></li>
<li>Incorporates station location into its address database. <br /></li>
<li>Receives BPDUs and directs them to the system module. <br /></li>
<li>Receives, processes, and transmits BPDUs received from the system module. <br /></li>
<li>Receives and responds to network management messages.</li></ul>
<br />
<br /></li><li><b>Forwarding State</b>
<br />A port in the forwarding state forwards frames. The port enters the forwarding state from the learning state through the operation of Spanning-Tree Protocol.
<br />
<br />A port in the forwarding state performs as follows:<br /></li>
<li><ul><li>Forwards frames received from the attached segment. <br /></li>
<li>Forwards frames switched from another port for forwarding. <br /></li>
<li>Incorporates station location information into its address database. <br /></li>
<li>Receives BPDUs and directs them to the system module. <br /></li>
<li>Processes BPDUs received from the system module. <br /></li>
<li>Receives and responds to network management messages.</li></ul><br /><br /></li>

<li><b>Disabled State</b>
<br />A port in the disabled state does not participate in frame forwarding or the operation of Spanning-Tree Protocol. A port in the disabled state is virtually nonoperational.
<br />
<br />A disabled port performs as follows:<br /></li>
<li><ul><li>Discards frames received from the attached segment. <br /></li>
<li>Discards frames switched from another port for forwarding. <br /></li>
<li>Does not incorporate station location into its address database. (There is no learning, so there is no address database update.) <br /></li>
<li>Receives BPDUs, but does not direct them to the system module. <br /></li>
<li>Does not receive BPDUs for transmission from the system module. <br /></li>
<li>Receives and responds to network management messages.</li></ul></li></ul>
<br />
<br />When the spanning-tree algorithm determines that a port should be placed in the forwarding state, the following occurs:
<br /><ul><li>The port is put into the listening state while it waits for protocol information that suggests it should go to the blocking state. <br /></li>
<li>The port waits for the expiration of a protocol timer that moves the port to the learning state. <br /></li>
<li>In the learning state, the port continues to block frame forwarding as it learns station location information for the forwarding database. <br /></li>
<li>The expiration of a protocol timer moves the port to the forwarding state, where both learning and forwarding are enabled.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet 802.2<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>STP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Access</b><br />(v.) 
<br />*To use. For example, programs can access memory , which means they read data from or write data to main memory. A user can access files, directories, computers, or peripheral devices. 
<br />*More specifically, access often means to read data from or write data to a mass storage device. The time it takes to locate a single byte of information on a mass-storage device is called the access time. 
<br />*To visit a Web site. 
<br />
<br />(n.)
<br /> *The act of reading data from or writing data to a storage device. 
<br />*A privilege to use computer information in some manner. For example, a user might be granted read access to a file, meaning that the user can read the file but cannot modify or delete it. Most operating systems have several different types of access privileges that can be granted or denied to specific users or groups of users. 
<br />*When capitalized as Access, short for Microsoft Access.<br /><br /><b>Algorithm</b><br />Algorithm is a formula or set of steps for solving a particular problem. To be an algorithm, a set of rules must be unambiguous and have a clear stopping point. Algorithms can be expressed in any language, from natural languages like English or French to programming languages like FORTRAN.
<br />
<br />We use algorithms every day. For example, a recipe for baking a cake is an algorithm. Most programs, with the exception of some artificial intelligence applications, consist of algorithms. Inventing elegant algorithms -- algorithms that are simple and require the fewest steps possible -- is one of the principal challenges in programming.<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>IEEE 802.1</b><br />IEEE 802.1 is a working group of the IEEE. It is concerned with
<br />*802 LAN/MAN architecture 
<br />*internetworking among 802 LANs, MANs and other wide area networks, 
<br />*802 Link Security, 
<br />*802 overall network management, and 
<br />*protocol layers above the MAC &amp; LLC layers.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>Loop</b><br />Loop is a request that arrives at a proxy, is forwarded, and later arrives back at the same proxy. When it arrives the second time, its Request-URI is identical to the first time, and other header fields that affect proxy operation are unchanged, so that the proxy would make the same processing decision on the request it made the first time. Looped requests are errors, and the procedures for detecting them and handling them are described by the protocol.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Path</b><br />The route taken by the SCTP packets sent by one SCTP endpoint to a specific destination transport address of its peer SCTP endpoint. Sending to different destination transport addresses does not necessarily guarantee getting separate paths.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>STP</b><br />The Spanning Tree Protocol (STP) prevents the formation of logical looping in the network. It is implemented by the 802.1d MAC Bridge Management Protocol, to provide information on bridge topology.<br /><br /><b>Switch</b><br />In networks, switch is a device that filters and forwards packets between LAN segments. Switches operate at the data link layer (layer 2) and sometimes the network layer (layer 3) of the OSI Reference Model and therefore support any packet protocol.<br /><br /><b>Topology</b><br />The shape of a local-area network (LAN) or other communications system. Topologies are either physical or logical. There are four principal topologies used in LANs:
<br />*Bus topology: All devices are connected to a central cable, called the bus or backbone. Bus networks are relatively inexpensive and easy to install for small networks. Ethernet systems use a bus topology. 
<br />
<br />*Ring topology : All devices are connected to one another in the shape of a closed loop, so that each device is connected directly to two other devices, one on either side of it. Ring topologies are relatively expensive and difficult to install, but they offer high bandwidth and can span large distances. 
<br />
<br />*Star topology: All devices are connected to a central hub. Star networks are relatively easy to install and manage, but bottlenecks can occur because all data must pass through the hub. 
<br />
<br />*Tree topology: A tree topology combines characteristics of linear bus and star topologies. It consists of groups of star-configured workstations connected to a linear bus backbone cable. 
<br />
<br />These topologies can also be mixed. For example, a bus-star network consists of a high-bandwidth bus, called the backbone, which connects a collections of slower-bandwidth star segments. <br /><br /><b>Tree structure</b><br />Tree structure is a type of data structure in which each element is attached to one or more elements directly beneath it. The connections between elements are called branches. Trees are often called inverted trees because they are normally drawn with the root at the top.<br /><br />			</div>
		  
</section>


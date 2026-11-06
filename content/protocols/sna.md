---
id: protocol-sna
slug: sna
name: SNA
expandedName: Systems Network Architecture
origin: historical
provenance:
  source: protocols/protocol_SNA.htm
  sha256: b47870d1ac9c62f32fadbb66ed6636cc1d739f8148476786036e430329b2defc
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Systems Network Architecture
layers:
  - Application Layer
suites:
  - IBM protocol suite
summary:
  - label: Protocol
    html: Systems Network Architecture
  - label: Protocol suite
    html: IBM protocol suite
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application protocol
originalUpdate: '2005-11-04 16:53:30'
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

			The Systems Network Architecture (SNA) was introduced by IBM in 1974 in order to provide a framework for joining together the multitude of mutually incompatible IBM products for distributed processing. SNA was one of the first communications architectures to use a layered model, which later became the basis for the OSI model. IBM's SNA ruled the networking landscape, so it often is referred to as traditional or legacy SNA.
<br />
<br />SNA is a suite of protocols mainly used with IBM mainframe and AS/400 computers. SNA model components map closely to the OSI reference model. 
<br /><hr />
<br /><b>SNA Layers</b>
<br />IBM SNA Maps to All Seven Levels of the OSI Model
<br />
<br /><img src="/supporting/images/protocol_sna_a.gif" alt="protocol_sna_a.gif" />
<br />
<br /><ul><li><b>Physical</b>
<br />Traditional SNA physical entities assume one of the following four forms: hosts, communications controllers, establishment controllers, and terminals. Hosts in SNA control all or part of a network and typically provide computation, program execution, database access, directory services, and network management.<br /><br /></li>

<li><b>Data link control (DLC)</b>
<br />Defines several protocols, including the Synchronous Data Link Control (SDLC) protocol for hierarchical communication, and the Token Ring Network communication protocol for LAN communication between peers<br /><br /></li>

<li><b>Path control</b>
<br />Performs many OSI network layer functions, including routing and datagram segmentation and reassembly (SAR)<br /><br /></li>

<li><b>Transmission control</b>
<br />Provides a reliable end-to-end connection service, as well as encrypting and decrypting services<br /><br /></li>

<li><b>Data flow control</b>
<br />Manages request and response processing, determines whose turn it is to communicate, groups messages, and interrupts data flow on request<br /><br /></li>

<li><b>Presentation services</b>
<br />Specifies data-transformation algorithms that translate data from one format to another, coordinate resource sharing, and synchronize transaction operations<br /><br /></li>

<li><b>Transmission control</b>
<br />Provides an interface for applications to use network services</li></ul>
<br /><hr />
<br /><b>Network Addressable Units</b>
<br />SNA defines three essential network addressable units (NAUs): logical units, physical units, and control points. Each node has at least one NAU. The NAU enables a process to use the network by giving it an address. A process can then reach and be reached by other NAUs.
<br />
<br />An NAU can be one of three types:
<br /><ul><li>LU (Logical Unit): function as end-user access ports into an SNA network.<br /></li>
<li>PU (Physical Unit): provide users with access to network resources.<br /></li>
<li>SSCP (System Services Control Point): manage the transmission of information between end users.</li></ul>
<br />
<br />Physical units (PUs) are used to monitor and control attached network links and other network resources associated with a particular node. PUs are implemented on hosts by SNA access methods, such as the virtual telecommunication access method (VTAM). PUs also are implemented within communications controllers by network control programs (NCPs). 
<br />
<br />Control points (CPs) manage SNA nodes and their resources. CPs generally are differentiated from PUs in that CPs determine which actions must be taken, while PUs cause actions to occur. The SSCP (PU Type 5) is usually implemented in IBM mainframe machines which use channels to connect to control devices such as disks, tapes and communication controllers. These are high speed communications links (up to 17 Mbps).
<br /><hr />
<br /><b>SNA Nodes</b>
<br />Traditional SNA nodes belong to one of two categories:
<br /><ul><li>Subarea nodes.<br /></li>
<li>Peripheral nodes.</li></ul>
<br />
<br />SNA subarea nodes provide all network services, including intermediate node routing and address mapping between local and network-wide addresses. No relationship exists between SNA node types and actual physical devices. Two subarea nodes are of particular interest: node type 4 and node type 5.
<br /><ul><li>Type 1 ¨C terminals. <br /></li>
<li>Type 2 - controllers and machines that manage terminals.<br /></li>
<li>Type 4 - front-end processors and machines that take some load off the main CPU. It usually contained within a communications controller. An example of a T4 node is an NCP, which routes data and controls flow between a front-end processor and other network resources.<br /></li>
<li>Type 5 - the main host. An example of a T5 node is the VTAM resident within an IBM mainframe. A VTAM controls the logical flow of data through a network, provides the interface between application subsystems and a network, and protects application subsystems from unauthorized access.</li></ul>
<br /><hr />
<br /><b>SNA Protocol Suite</b>
<br />The SNA protocol suite includes the following protocols:
<br /><ul><li><b>SDLC</b>
<br />SDLC has been widely implemented in SNA networks to interconnect communications and establishment controllers, and to move data via telecommunications links. It is used as the layer 2 of the SNA hierarchical network.<br /><br /></li>

<li><ul><li><b>SDLC frame format</b><br /></li>
<li><div><div class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0"></div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption></table></div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td colspan="3"><p>Link Header </p></td><td colspan="3"><p>Link Trailer</p></td></tr><tr><td><p>Flag </p></td><td><p>Address field </p></td><td><p>Control field </p></td><td><p>Information </p></td><td><p>FCS </p></td><td><p>Flag </p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b></b></li><li><b>Flag</b>
<br />The value of the flag is always (0x7E). In order to ensure that the bit pattern of the frame delimiter flag does not appear in the data field of the frame (and therefore cause frame misalignment), a technique known as Bit Stuffing is used by both the transmitter and the receiver.<br /><br /></li>

<li><b>Address field</b>
<br />The first byte of the frame after the header flag is known as the Address Field. SDLC is used on multipoint lines and it can support as many as 256 terminal control units or secondary stations per line.<br /><br /></li>

<li><b>Control field</b>
<br />The field following the Address Field is called the Control Field and serves to identify the type of the frame. In addition, it includes sequence numbers, control features and error tracking according to the frame type.<br /><br /></li>

<li><b>Modes of operation</b>
<br />In SDLC there is the notion of primary and secondary stations, defined simply as the initiator of a session and its respondent. The primary station sends commands and the secondary station sends responses.<br /><br /></li>

<li><b>FCS</b>
<br />The Frame Check Sequence (FCS) enables a high level of physical error control by allowing the integrity of the transmitted frame data to be checked. The sequence is first calculated by the transmitter using an algorithm based on the values of all the bits in the frame. The receiver then performs the same calculation on the received frame and compares its value to the CRC.<br /><br /></li>

<li><b>Window size</b>
<br />SDLC supports an extended window size (modulo 128) where the number of possible outstanding frames for acknowledgement is raised from 8 to 128. This extension is generally used for satellite transmissions where the acknowledgement delay is significantly greater than the frame transmission times.<br /><br /></li>

<li><b>Frame types</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td colspan="2">The following are the Supervisory Frame Types in SDLC:</td></tr><tr><td>RR</td><td>Information frame acknowledgement and indication to receive more.</td></tr><tr><td>REJ</td><td>Request for retransmission of all frames after a given sequence number.</td></tr><tr><td>RNR </td><td>Indicates a state of temporary occupation of station (e.g., window full).</td></tr><tr><td colspan="2"> </td></tr><tr><td colspan="2">The following are the Unnumbered Frame Types in SDLC:</td></tr><tr><td>DISC</td><td>Request disconnection.</td></tr><tr><td>UA </td><td>Acknowledgement frame.</td></tr><tr><td>DM </td><td>Response to DISC indicating disconnected mode.</td></tr><tr><td>FRMR </td><td>Frame reject</td></tr><tr><td>CFGR </td><td>Configure.</td></tr><tr><td>TEST </td><td>Sent from primary to secondary and back again.</td></tr><tr><td>BCN </td><td>Beacon.</td></tr><tr><td>SNRM </td><td>Initiator for normal response mode. Full master/slave relationship.</td></tr><tr><td>SNRME </td><td>SNRM in extended mode.</td></tr><tr><td>RD </td><td>Request disconnect.</td></tr><tr><td>RIM </td><td>Secondary station request for initialization after disconnection.</td></tr><tr><td>SIM </td><td>Set initialization mode.</td></tr><tr><td>UP </td><td>Unnumbered poll.</td></tr><tr><td>UI </td><td>Unnumbered information. Sends state information/data.</td></tr><tr><td>XID </td><td>Identification exchange command.</td></tr><tr><td colspan="2"> </td></tr><tr><td colspan="2">There is one Information Frame Type in SDLC:</td></tr><tr><td>Info</td><td>Information frame.</td></tr></tbody></table></div></div></li></ul></li></ul><br /></li>
<li><hr /><br /></li>
<li><b>QLLC</b><br /></li>
<li>QLLC is a standard developed for interconnecting SNA LANs over packet switched WANs with X.25. The SDLC header and trailer is stripped off and replaced by similar fields of LAPB before transmission over the network. The standard also defines additional control bytes used to allow the receiving end of the network to reconstruct the original SDLC frame. The SNA information is passed over the network within the X.25 data packet.
<br /><br /></li>
<li>SNA data and QLLC control frames are determined by the value of the Q-bit within the X.25 packet header.
<br /><br /></li>
<li><ul><li><b>QLLC Frame Types</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>QRR </td><td>Receive Ready.</td></tr><tr><td>QDISC </td><td>Disconnect.</td></tr><tr><td>QUA </td><td>Unnumbered Acknowledgement.</td></tr><tr><td>QDM </td><td>Disconnect Mode.</td></tr><tr><td>QFRMR </td><td>Frame Reject.</td></tr><tr><td>QTEST </td><td>Test.</td></tr><tr><td>QRD </td><td>Request Disconnect.</td></tr><tr><td>QXID </td><td>Exchange Identification.</td></tr><tr><td>QSM </td><td>Set Mode.</td></tr></tbody></table></div></div></li></ul><br /></li>
<li><hr /><br /></li>
<li><b>SNA</b><br /></li>
<li>Frames format
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>Transmission <br />Header (TH) </p></td><td><p>Request / Response <br />Header (RH) </p></td><td><p>Request / Response <br />Unit (RU) </p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Transmission Header</b>
<br />The TH field contains the Format Identifier value (FID). This value corresponds to the type of communication session and the environment in which it is used.
<br />
<br />FID2 is the format used between a T4 or T5 node and an adjacent T2.0 or T2.1 node, or between adjacent T2.1 nodes. FID3 is used on links to a PU T1 (such as AS/400 controllers). FID4 is used on links between PU T4s. 
<br />
<br />The TH field also contains a mapping field (MPF) which indicates whether the frame is a complete SNA frame (containing TH, RH and RU) or just a segment. When the SNA frame is too large to be sent as one frame, it is divided into several segments (first, middle, last or whole). The first segment includes a TH (indicating that it is the first), an RH and the beginning of the RU. Other segments (middle and last) contain a TH (identical to the one of the first except for the MPF field) and the remainder of the RU.<br /><br /></li>

<li><b>Request/Response Header</b>
<br />The RH field denotes the SNA category of the frame, the format of the RU, whether requests are chained together, bracket indicators, pacing information and various other SNA frame properties.<br /><br /></li>

<li><b>Request/Response Unit</b>
<br />The RU contains the ¡®user data¡¯ that one LU sends to its session partner or a special SNA frame. A field within the RH distinguishes between cases and several classes of SNA frames. There are three categories of SNA frames: NS (function management data), DFC (data flow control) and SC (session control).</li></ul><br /></li>
<li><hr /><br /></li>
<li><b>SNA TH0 &amp; TH1</b><br /></li>
<li>SNA TH0 and TH1 correspond to the FID header 0 and 1 respectively. 
<br /></li><li>Packet format 
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>4 </p></td><td><p>6 </p></td><td><p>7 </p></td><td><p>8 bits </p></td></tr><tr><td><p>FID </p></td><td><p>MPF </p></td><td><p>EFI </p></td><td><p> </p></td></tr><tr><td colspan="4"><p>DAF (2 bytes) </p></td></tr><tr><td colspan="4"><p>OAF (2 bytes) </p></td></tr><tr><td colspan="4"><p>SNF (2 bytes) </p></td></tr><tr><td colspan="4"><p>DCF (2 bytes) </p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>FID</b>
<br />Format Identification: 0=FID 0, 1=FID 1.<br /></li>
<li><b>MPF</b>
<br />Mapping field:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p>0</p></td><td>Middle segment of a BIU</td></tr><tr><td><p>1</p></td><td>Last segment of a BIU</td></tr><tr><td><p>2</p></td><td>First segment of a BIU</td></tr><tr><td><p>3</p></td><td>Whole BIU</td></tr></tbody></table></div></div><br /></li>
<li><b>EFI</b>
<br />Expedited flow indicator:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 8" tabindex="0"><table><caption>Description: preserved table 8</caption><tbody><tr><td><p>0</p></td><td><p>Normal flow</p></td></tr><tr><td><p>1</p></td><td><p>Expedited flow</p></td></tr></tbody></table></div></div><br /></li>
<li><b>DAF</b>
<br />Destination address field. Network address denoting the BIU¡¯s destination network addressable unit (NAU).<br /><br /></li>

<li><b>OAF</b>
<br />Origin address field. Network address denoting the originating NAU.<br /><br /></li>

<li><b>SNF</b>
<br />Sequence number field. Numerical identifier for the associated BIU.<br /><br /></li>

<li><b>DCF</b>
<br />Data count field. A binary count of the number of bytes in the BIU if the BIU segment is associated with the transmission header.</li></ul><br /></li>
<li><hr /><br /></li>
<li><b>SNA TH5</b><br /></li>
<li>SNATH 5 is the FID 5 header.
<br /></li><li>Packet format
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 9" tabindex="0"><table><caption>Description: preserved table 9</caption><tbody><tr><td><p>4 </p></td><td><p>6 </p></td><td><p>7 </p></td><td><p>8 bits </p></td></tr><tr><td><p>FID5 0101 (4 bits) </p></td><td><p>MPF (2 bits) </p></td><td><p>R </p></td><td><p>EFI </p></td></tr><tr><td colspan="4"><p>Reserved ( 1 byte) </p></td></tr><tr><td colspan="4"><p>SNF (2 bytes)</p></td></tr><tr><td colspan="4"><p>SA (8 bytes)</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>FID 5</b>
<br />The value of this field is 0101.<br /><br /></li>

<li><b>MPF</b> 
<br />Mapping field.<br /><br /></li>

<li><b>R</b>
<br />Reserved bit.<br /><br /></li>

<li><b>EFI</b>
<br />Expedited flow indicator (1 bit).<br /><br /></li>

<li><b>SNF</b>
<br />Sequence number field.<br /><br /></li>

<li><b>SA</b>
<br />Session address.</li></ul><br /></li>
<li><hr /><br /></li>
<li><b>APPN</b><br /></li>
<li>Advanced Peer-to-Peer Networking (APPN) represents IBM's second-generation SNA. In creating APPN, IBM moved SNA from a hierarchical, mainframe-centric environment to a peer-based networking environment. At the heart of APPN is an IBM architecture that supports peer-based communications, directory services, and routing between two or more APPC systems that are not directly attached.
<br /><br /></li>
<li><ul><li><b>Components</b><br /></li>
<li>In addition to the APPN environment, peer-based SNA networking specifies three additional key networking concepts: logical units (LUs), Advanced Program-to-Program Computing (APPC), and node type 2.1. Each plays an important role in the establishment of communication among SNA peers within the context of an SNA-based peer internetwork.
<br /><br /></li>
<li><b>Node Types</b><br /></li>
<li>Under APPN, peer-based communication occurs among several well-defined node types. These nodes can be broken down into three basic types:
<br /></li><li><ul><li>Low-entry network (LEN) node<br /></li>
<li>LEN is a pre-APPN era peer-to-peer node. A LEN node participates in APPN networking by taking advantage of services provided by an adjacent network node (NN).
<br /><br /></li>
<li><b>End node (EN)</b><br /></li>
<li>EN contains a subset of full APPN support. An end node accesses the network through an adjacent NN and uses the routing services of the same adjacent NN.
<br /><br /></li>
<li><b>Network node (NN)</b><br /></li> 
<li>NN contains full APPN functionality. The CP in an NN manages the resources of the NN, as well as the attached ENs and LEN nodes.</li></ul></li></ul><br /><br /></li>

<li><ul><li><b>APPN Supports Several Well-Defined Node Types</b><br /></li>
<li><ul><li><b>IBM APPN Services</b>
<br />Basic APPN services fall into four general categories: configuration, directors, topology, and routing and session services. Each is summarized in the sections that follow.<br /><br /></li>

<li><b></b></li><li><b>IBM APPN Configuration Services</b>
<br />APPN configuration services are responsible for activating connections to the APPN network. Connection activation involves establishing a connection, establishing a session, and selecting an adjacency option.<br /><br /></li>

<li><b></b></li><li><b>IBM APPN Directory Services</b>
<br />APPN directory services are intended to help network devices locate service providers. These services are essential to establishing a session between end users. Directory services in APPN call for each NN to maintain a directory of local resources and a network directory that associate end users with NNs providing service. A distributed directory service then is formed from the collection of individual NN network directories. This section summarizes the nature of APPN databases, node-directory service handling, and the role of a centralized directory service.<br /><br /></li>

<li><b></b></li><li><b>IBM APPN Topology and Routing Services</b>
<br />In an APPN network topology, network nodes are connected by transmission groups (TGs). Each TG consists of a single link, and all NNs maintain a network topology database that contains a complete picture of all NNs and TGs in the network.
<br />
<br />A network's topology database is updated by information received in a topology database update (TDU) message.The network topology database contains information used when calculating routes with a particular class of service (CoS). APPN's routing services function uses information from directory and topology databases to determine a route based on CoS.</li></ul></li></ul><br /><br /></li>

<li><ul><li><b>IBM APPN Session Services</b><br /></li>
<li>Following route establishment, the APPN session-establishment process varies depending on the node type. If the originating end user is attached to an EN, a LOCATE reply containing the location of the destination and route is returned to the originating EN by the NN adjacent to the destination EN. The originating EN then sends a BIND on a session route. If originating, the end user is attached to a LEN node that sends a BIND to its adjacent NN. The adjacent NN converts the LEN BIND to APPN BIND, and sends a BIND on the session path.</li></ul><br /></li>
<li><hr /><br /></li>
<li><b>HPR-APPN</b><br /></li>
<li>HPR network is an extension of the SNA network. HPR (High Performance Routing) is an extension of the base-APPN that provides some key advancements. These new functions include:
<br /><br /></li>
<li>Non-disruptive path switching.
<br /></li><li><ul><li>Better utilization of high-speed communication paths. <br /></li>
<li>An advanced congestion control methodology.</li></ul><br /></li> 
<li>Additional functionality provided by two new components: Rapid Transport Protocol (RTP) and Automatic Network Routing (ANR). These components provide the added functionality exhibited by HPR nodes.
<br /></li><li><hr /><br /></li>
<li><b>NHDR</b><br /></li>
<li>The packet transported along an RTP connection has a specific format. It consists of 3 components. NHDR, THDR and data. The Network Layer Header (NHDR) begins the frame used by RTP (Rapid Transport Protocol) nodes. It provides addressing for the packet as it transverses the HPR network. The components of this header include the transmission priority and the ANR (Automatic Network Routing) labels. NHDR consists of some indicators that identify the packet as a network layer packet.
<br /><br /></li>
<li><ul><li><b>Format of the header</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 10" tabindex="0"><table><caption>Description: preserved table 10</caption><tbody><tr><td><p>Switching mode(3 bits) </p></td></tr><tr><td><p>Transmission priority field(2 bits) </p></td></tr><tr><td><p>Function type (4 bits) </p></td></tr><tr><td><p>Time-sensitive packet indicator <br />(1 bit) </p></td></tr><tr><td><p>Slowdown 1 (1 bit) </p></td></tr><tr><td><p>Slowdown 2 (1 bit) </p></td></tr><tr><td><p>ANR routing field or function routing field</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Switching mode</b><br /></li>
<li>Switching mode may have the following values:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 11" tabindex="0"><table><caption>Description: preserved table 11</caption><tbody><tr><td><p>5</p></td><td><p>Function routing</p></td></tr><tr><td><p>6</p></td><td><p>Automatic network routing</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Transmission priority field (TPF)</b><br /></li>
<li>TPF may have the following values
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 12" tabindex="0"><table><caption>Description: preserved table 12</caption><tbody><tr><td><p>0</p></td><td><p>low (L) </p></td></tr><tr><td><p>1</p></td><td><p>medium (M) </p></td></tr><tr><td><p>2</p></td><td><p>high (H)</p></td></tr><tr><td><p>3</p></td><td><p>network (N)</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Function type (for switching mode 5)</b>
<br />Function type of 1 indicates logical data link control.<br /><br /></li>

<li><b>TSP</b>
<br />Time-sensitive paket indicator <br /><br /></li>

<li><b>Slowdown 1 and 2</b>
<br />This field indicates when ever a minor (slowdown 1) or significant (slowdown 2) congestion condition exists. Possible values are:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 13" tabindex="0"><table><caption>Description: preserved table 13</caption><tbody><tr><td><p>0</p></td><td><p>Does not exist</p></td></tr><tr><td><p>1</p></td><td><p>Exists</p></td></tr></tbody></table></div></div>
<br /></li><li><b>ANR routing field (for SM = 6)</b>
<br />A string of ANR labels 1 or 2 bytes long. The string ends with 0xFF.<br /><br /></li>

<li><b>Function routing field (for SM = 5)</b>
<br />A 2 byte function routing address (FRA) followed by a 0xFF value.</li></ul></li></ul><br /></li>
<li><hr /><br /></li>
<li><b>NLP</b><br /></li>
<li>In High Performance Routing (HPR),the message unit used to carry data over the route, Network Layer Packet is analogous to a datagram.
<br /><br /></li>
<li><ul><li><b>Sending SNA PIUs and NLPs.</b><br /></li>
<li>Before any SNA packets may be communicated, PPP must reach the Network-Layer Protocol phase, and the appropriate SNA ControlProtocol must reach the Opened state.
<br /></li><li>The maximum length of a SNA packet transmitted over a PPP link is the same as the maximum length of the Information field of a PPP encapsulated packet.
<br /><br /></li>
<li><b>Sending HPR Network Layer Packets (NLPs)</b><br /></li>
<li>Exactly one HPR Network Layer Packet (NLP) is encapsulated in the PPP Information field, where the PPP Protocol field indicates type hex 004D (SNA).
<br /></li><li>It is architecturally possible to transport HPR NLPs over LLC over PPP using PPP Protocol field type hex 004B (SNA over LLC 802.2) ifthe optional HPR link-level error recover tower is included in the implementation.</li></ul><br /></li>
<li><hr /><br /></li>
<li><b>THDR</b><br /></li>
<li>THDR is the RTP Transport header. It is used by the RTP endpoints to provide correct processing of the packet. It is used for communication between the endpoints and to identify the RTP connection.
<br /><br /></li>
<li><ul><li>Format of header
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 14" tabindex="0"><table><caption>Description: preserved table 14</caption><tbody><tr><td><p>TCID assignor(7 bytes)</p></td></tr><tr><td><p>Connection setup(1 bit) </p></td></tr><tr><td><p>Start-of-message indicator (1 bit) </p></td></tr><tr><td><p>End-of-message indicator (1 bit) </p></td></tr><tr><td><p>Status requested indicator (1 bit) </p></td></tr><tr><td><p>Respond ASAP indicator (1 bit) </p></td></tr><tr><td><p>Retry indicator (1 bit) </p></td></tr><tr><td><p>Last message indicator (1 bit) </p></td></tr><tr><td><p>Connection qualifier field indicator (2 bits) </p></td></tr><tr><td><p>Optional segments present indicator (1 bit) </p></td></tr><tr><td><p>Data offset (2 bytes)</p></td></tr><tr><td><p>Data length(2 bytes) </p></td></tr><tr><td><p>Byte sequence number(4 bytes) </p></td></tr><tr><td><p>Control vector 05 </p></td></tr><tr><td><p>Optional segments </p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>TCID assignor</b><br /></li>
<li>Transport connection identifier. There are 2 possible values:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 15" tabindex="0"><table><caption>Description: preserved table 15</caption><tbody><tr><td><p>0</p></td><td><p>TCID was assigned by the receiving RTP partner.</p></td></tr><tr><td><p>1</p></td><td><p>TCID was assigned by the sending RTP partner.</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Connection setup</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 16" tabindex="0"><table><caption>Description: preserved table 16</caption><tbody><tr><td><p>0</p></td><td><p>presented</p></td></tr><tr><td><p>1</p></td><td><p>not presented</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Start of message indicator</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 17" tabindex="0"><table><caption>Description: preserved table 17</caption><tbody><tr><td><p>0</p></td><td><p>not start of message</p></td></tr><tr><td><p>1</p></td><td><p>start of message</p></td></tr></tbody></table></div></div><br /></li>
<li><b>End of message indicator</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 18" tabindex="0"><table><caption>Description: preserved table 18</caption><tbody><tr><td><p>0</p></td><td><p>not end of message</p></td></tr><tr><td><p>1</p></td><td><p>end of message</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Status requested indicator</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 19" tabindex="0"><table><caption>Description: preserved table 19</caption><tbody><tr><td><p>0</p></td><td><p>Receiver need not reply with a status segment.</p></td></tr><tr><td><p>1</p></td><td><p>Receiver must reply with a status segment.</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Respond ASAP indicator</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 20" tabindex="0"><table><caption>Description: preserved table 20</caption><tbody><tr><td><p>1</p></td><td><p>Sender will retransmit reply ASAP.</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Retry indicator</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 21" tabindex="0"><table><caption>Description: preserved table 21</caption><tbody><tr><td><p>0</p></td><td><p>Sender will retransmit this packet. </p></td></tr></tbody></table></div></div><br /></li>
<li><b>Connection qualifier field indicator</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 22" tabindex="0"><table><caption>Description: preserved table 22</caption><tbody><tr><td><p>0</p></td><td><p>none presented</p></td></tr><tr><td><p>1</p></td><td><p>originator</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Optional segments present indicator</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 23" tabindex="0"><table><caption>Description: preserved table 23</caption><tbody><tr><td><p>0</p></td><td><p>not presented</p></td></tr><tr><td><p>1</p></td><td><p>presented</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Byte sequence number</b><br /></li>
<li>Sequence number of the first byte of the data field.
<br /><br /></li>
<li><b>Optional segments</b><br /></li>
<li>If present the optional segment can contain one or more of the following segments:
<br /></li><li>The structure of each segment is as follows:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 24" tabindex="0"><table><caption>Description: preserved table 24</caption><tbody><tr><td><p>0x0E</p></td><td><p>Status segment.</p></td></tr><tr><td><p>0x0D</p></td><td><p>Connection Setup segment.</p></td></tr><tr><td><p>0x10</p></td><td><p>Connection Identifier Exchange segment.</p></td></tr><tr><td><p>0x14</p></td><td><p>Switching Information segment.</p></td></tr><tr><td><p>0x22</p></td><td><p>Adaptive Rate-Based segment.</p></td></tr><tr><td><p>0x12</p></td><td><p>Connection Fault segment.</p></td></tr><tr><td><p>0x0F</p></td><td><p>Client Out-of-band Bits segment.</p></td></tr></tbody></table></div></div><br /></li>
<li><b>The structure of each segment is as follows:</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 25" tabindex="0"><table><caption>Description: preserved table 25</caption><tbody><tr><td><p>Byte</p></td><td><p>Content</p></td></tr><tr><td><p>0</p></td><td><p>Segment length/4</p></td></tr><tr><td><p>1</p></td><td><p>Segment type</p></td></tr><tr><td><p>2</p></td><td><p>Segment data</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Each segment may include control vectors.</b><br /></li>
<li>Supported control vectors are:
<br /></li><li>Each segment may include control vectors. Supported control vectors are:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 26" tabindex="0"><table><caption>Description: preserved table 26</caption><tbody><tr><td><p>0x00</p></td><td><p>Node identifier Control Vector.</p></td></tr><tr><td><p>0x03</p></td><td><p>Network ID Control Vector.</p></td></tr><tr><td><p>0x05</p></td><td><p>Network Address Control Vector.</p></td></tr><tr><td><p>0x06</p></td><td><p>Cross-Domain Resource Manager Control Vector.</p></td></tr><tr><td><p>0x09</p></td><td><p>Activation Request/Response Sequence Identifier Control Vector.</p></td></tr><tr><td><p>0x0E</p></td><td><p>Network Name Control Vector.</p></td></tr><tr><td><p>0x10</p></td><td><p>Product Set ID Control Vector.</p></td></tr><tr><td><p>0x13</p></td><td><p>Gateway Support Capability Control Vector.</p></td></tr><tr><td><p>0x15</p></td><td><p>Network-Qualified Address Pair Control Vector.</p></td></tr><tr><td><p>0x18</p></td><td><p>SSCP Name Control Vector.</p></td></tr><tr><td><p>0x22</p></td><td><p>XID Negotiation Error Control Vector.</p></td></tr><tr><td><p>0x26</p></td><td><p>NCE Identifier Control Vector.</p></td></tr><tr><td><p>0x28</p></td><td><p>Topic Identifier Control Vector.</p></td></tr><tr><td><p>0x32</p></td><td><p>Short-Hold Mode Control Vector.</p></td></tr><tr><td><p>0x39</p></td><td><p>NCE Instant Identifier.</p></td></tr><tr><td><p>0x46</p></td><td><p>TG Descriptor Control Vector.</p></td></tr><tr><td><p>0x60</p></td><td><p>Fully qualified PCID Control Vector.</p></td></tr><tr><td><p>0x61</p></td><td><p>HPR Capabilities Control Vector.</p></td></tr><tr><td><p>0x67</p></td><td><p>ANR Path Control Vector.</p></td></tr><tr><td><p>0xFE</p></td><td><p>Control Vector Keys Not Recognized Control Vector.</p></td></tr></tbody></table></div></div></li></ul></li></ul><br /></li>
<li><hr /><br /></li>
<li><b>DLSw</b><br /></li>
<li>Data Link Switching (DLSw) is a forwarding mechanism for the IBM SNA (Systems Network Architecture) and IBM NetBIOS (Network Basic Input Output Services) protocols. Over IP networks, DLSw does not provide full routing, but instead provides switching at the SNA Data Link layer (i.e., layer 2 in the SNA architecture) and encapsulation in TCP/IP for transport over the Internet.
<br /><br /></li>
<li><ul><li>Message structure
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 27" tabindex="0"><table><caption>Description: preserved table 27</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>Octets</p></td></tr><tr><td><p>Version number </p></td><td><p>Header length (=16) </p></td><td><p>0-1</p></td></tr><tr><td colspan="2"><p>Message length </p></td><td><p>2-3</p></td></tr><tr><td colspan="2"><p>Remote data link correlator </p></td><td><p>4-7</p></td></tr><tr><td colspan="2"><p>Remote DLC port ID </p></td><td><p>8-11</p></td></tr><tr><td colspan="2"><p>Reserved field </p></td><td><p>12-13</p></td></tr><tr><td><p>Message type </p></td><td><p>Flow control byte </p></td><td><p>14-15</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Version number</b><br /></li>
<li>Set to 0x31 (ASCII 1) indicating a decimal value of 49. This is used to indicate DLSw version 1.
<br /><br /></li>
<li><b>Header length</b><br /></li>
<li>Set to 0x48 for control messages and 0x10 for information and Independent Flow Control messages.
<br /><br /></li>
<li><b>Message length</b><br /></li>
<li>Specifies the number of bytes within the data field following the header.
<br /><br /></li>
<li><b>Remote data link correlator / remote DLC port ID</b><br /></li>
<li>The contents of the DLC and DLC Port ID have local significance only. The values received from a partner DLSw must not be interpreted by the DLSw that receives them and should be echoed "as is" to a partner DLSw in subsequent messages.
<br /><br /></li>
<li><b>Message type</b><br /></li>
<li>The following message types are available:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 28" tabindex="0"><table><caption>Description: preserved table 28</caption><tbody><tr><td>CANUREACH_ex </td><td>Can U Reach Station-explorer</td></tr><tr><td>CANUREACH_cs </td><td>Can U Reach Station-circuit start</td></tr><tr><td>ICANREACH_ex </td><td>I Can Reach Station-explorer</td></tr><tr><td>ICANREACH_cs </td><td>I Can Reach Station-circuit start</td></tr><tr><td>REACH_ACK </td><td>Reach Acknowledgment</td></tr><tr><td>DGRMFRAME </td><td>Datagram Frame</td></tr><tr><td>XIDFRAME </td><td>XID Frame</td></tr><tr><td>CONTACT </td><td>Contact Remote Station</td></tr><tr><td>CONTACTED </td><td>Remote Station Contacted</td></tr><tr><td>RESTART_DL </td><td>Restart Data Link</td></tr><tr><td>DL_RESTARTED </td><td>Data Link Restarted</td></tr><tr><td>ENTER_BUSY </td><td>Enter Busy</td></tr><tr><td>EXIT_BUSY </td><td>Exit Busy</td></tr><tr><td>INFOFRAME </td><td>Information (I) Frame</td></tr><tr><td>HALT_DL </td><td>Halt Data Link</td></tr><tr><td>DL_HALTED </td><td>Data Link Halted</td></tr><tr><td>NETBIOS_NQ_ex </td><td>NETBIOS Name Query-explorer</td></tr><tr><td>NETBIOS_NQ_cs </td><td>NETBIOS Name Query-circuit setup</td></tr><tr><td>NETBIOS_NR_ex </td><td>NETBIOS Name Recognized-explorer</td></tr><tr><td>NETBIOS_NR_cs </td><td>NETBIOS Name Recog-circuit setup</td></tr><tr><td>DATAFRAME </td><td>Data Frame</td></tr><tr><td>HALT_DL_NOACK </td><td>Halt Data Link with no Ack</td></tr><tr><td>NETBIOS_ANQ </td><td>NETBIOSAdd Name Query</td></tr><tr><td>NETBIOS_ANR </td><td>NETBIOSAdd Name Response</td></tr><tr><td>KEEPALIVE </td><td>Transport Keepalive Message</td></tr><tr><td>CAP_EXCHANGE </td><td>Capabilities Exchange</td></tr><tr><td>IFCM </td><td>Independent Flow Control Message</td></tr><tr><td>TEST_CIRCUIT_REQ </td><td>Test Circuit Request</td></tr><tr><td>TEST_CIRCUIT_RSP </td><td>Test Circuit Response</td></tr></tbody></table></div></div><br /></li>
<li><b>Flow control byte</b><br /></li>
<li>Format of Flow Control is as follows:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 29" tabindex="0"><table><caption>Description: preserved table 29</caption><tbody><tr><td><p>FCI </p></td><td><p>FCA </p></td><td><p>reserved </p></td><td><p>FCO </p></td></tr></tbody></table></div></div></li></ul></li></ul></li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet 802.2<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SNA</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Bracket</b><br />Bracket is one or more chains of request units (RUs) and their responses that are exchanged between the two LU-LU half-sessions and that represent a transaction between them. A bracket must be completed before another bracket can be started.<br /><br /><b>Expedited Flow</b><br />A data flow designated in the transmission header (TH) that is used to carry network control, session control and various data flow control request/response units (RUs). The expedited flow is separate from the normal flow (which carries primary end-user data) and can be used for commands that affect the normal flow.<br /><br /><b>LU</b><br />LU(Logical Unit) is a port through which end users access the SNA network in order to communicate with other end users and the functions provided by system services control points (SSCPs). An LU can support at least two sessions (one with an SSCP and one with another LU) and may be capable of supporting many sessions with other logical units.<br /><br /><b>NAU</b><br />NAU(Network Address-able Unit) is a logical unit, physical unit or system services control point which is the origin or the destination of information transmitted by the path control network. Each NAU has a network address that represents it to the path control network.<br /><br /><b>NS</b><br />NS(Network Services) header is a 3 byte field in an FMD request/response unit (RU) flowing in an SSCP-LU, SSCP-PU or SSCP-SSCP session. The network services header is used primarily to identify the network services category of the RU and the particular request code within a category.<br /><br /><b>Node Type</b><br />Node Type is a designation of node according to the protocols it supports and the network addressable units (NAUs) that it can contain. Five types are defined: 1, 2.0, 2.1, 4 and 5. Node types 1, 2.0 and 2.1 are peripheral nodes and types 4 and 5 are subarea nodes.<br /><br /><b>Normal Flow</b><br />A data flow designated in the transmission header (TH) that is used primarily to carry end-user data. The rate at which requests flow on the normal flow can be regulated by session-level pacing. Normal and expedited flows move in both the primary-to-secondary and secondary-to-primary directions.<br /><br /><b>PU</b><br />PU(Physical Unit ) is one of the three types of network addressable units (NAUs). Each node of an SNA network contains a physical unit (PU) that manages and monitors the resources (such as attached links) of a node, as requested by a system services control point (SSCP) via an SSCP-PU session. An SSCP activates a session with the PU in order to indirectly manage resources of the node such as attached links through the PU.<br /><br /><b>PU Type 2 (T2)</b><br />PU Type 2 (T2) is a network node that can attach to an SNA network as a peripheral node.<br /><br /><b>PU Type 4 (T4)</b><br />PU Type 4 (T4) is a network node containing an NCP and that is a subarea node within an SNA network.<br /><br /><b>PU Type 5 (T5)</b><br />PU Type 5 (T5) is a network node containing VTAM and that is a subarea node within an SNA network.<br /><br /><b>RU Chain</b><br />RU Chain is a set of related request/response units (RUs) that are consecutively transmitted on a particular normal or expedited data flow. The request RU chain is the unit of recovery: if one of the RUs in the chain cannot be processed, the entire chain is discarded. Each RU belongs to only one chain, which has a beginning and an end indicated via control bits for request/response headers within the RU chain. Each RU chain can be designated as first-in-chain (FIC), last-in-chain (LIC), middle-in-chain (MIC) or only-in-chain (OIC). Response units and expedited flow request units are always sent as OIC.<br /><br /><b>SSCP</b><br />SSCP(System Services Control Point) is a focal point within an SNA network for managing the configuration, coordinating network operator/problem determination requests and providing directory support and other session services for network end users. Multiple SSCPs, cooperating as peers, can divide the network into domains of control, with each SSCP having a hierarchical control relationship to the physical and logical units within its domain.<br /><br />			</div>
		  
</section>


---
id: protocol-netbios
slug: netbios
name: NetBIOS
expandedName: Network Basic Input/Output System
origin: historical
provenance:
  source: protocols/protocol_NetBIOS.htm
  sha256: 8722b65bb65d8f583ea65579f237b4d6544b9baa5ec809c171f47db8223785a2
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Network Basic Input/Output System
layers:
  - Presentation Layer
suites:
  - IBM protocol suite
summary:
  - label: Protocol
    html: Network Basic Input/Output System
  - label: Protocol suite
    html: IBM protocol suite
  - label: Layer
    html: Presentation Layer
  - label: Ports
    html: |-
      137 Name Service
      <br />138 Datagram Service
      <br />139 Session Service
  - label: Related protocols
    html: 'Domain Name Service,<br />Internet Group Multicast'
originalUpdate: '2006-01-12 17:44:53'
rfcs:
  - 1001
  - 1002
  - 1088
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

			NetBIOS (Network Basic I/O System) is an application programming interface (API) and was designed to be an extension to the BIOS to provide networking services. Both connection (Session) and connectionless (Datagram) services are provided, and broadcast and multicast are supported. Participants are identified by name.
<br />
<br />The NetBIOS service has become the dominant mechanism for personal computer networking. NetBIOS provides a vendor independent interface for the IBM Personal Computer (PC) and compatible systems. NetBIOS defines a software interface not a protocol. There is no "official" NetBIOS service standard. In practice, however, the IBM PC-Network version is used as a reference.
<br />
<br />NetBIOS applications employ NetBIOS mechanisms to locate resources, establish connections, send and receive data with an application peer, and terminate connections. For purposes of discussion, these mechanisms will collectively be called the NetBIOS Service.
<br />
<br />This service can be implemented in many different ways. One of the first implementations was for personal computers running the PC-DOS and MS-DOS operating systems. It is possible to implement NetBIOS within other operating systems, or as processes which are, themselves, simply application programs as far as the host operating system is concerned.
<br /><hr />
<br /><b>NetBIOS SCOPE</b>
<br />A "NetBIOS Scope" is the population of computers across which a registered NetBIOS name is known. NetBIOS broadcast and multicast datagram operations must reach the entire extent of the NetBIOS scope.An internet may support multiple, non-intersecting NetBIOS Scopes.
<br />
<br />Each NetBIOS scope has a "scope identifier". This identifier is a character string meeting the requirements of the domain name system for domain names.
<br />
<br />Control of scope identifiers implies a requirement for additional NetBIOS interface capabilities. These may be provided through extensions of the user service interface or other means (such as node configuration parameters.) The nature of these extensions is not part of this specification.
<br />
<br /><b>NetBIOS supports the following services</b>
<br /><ul><li><b>Name service</b><br /></li>
<li>NetBIOS resources are referenced by name. Lower-level address information is not available to NetBIOS applications. An application, representing a resource, registers one or more names that it wishes to use. The name space is flat and uses sixteen alphanumeric characters.
<br /><br /></li>
<li><b>Session service</b><br /></li>
<li>A session is a reliable message exchange, conducted between a pair of NetBIOS applications. Sessions are full-duplex, sequenced, and reliable. Data is organized into messages. Each message may range in size from 0 to 131,071 bytes. No expedited or urgent data capabilities are present.
<br /><br /></li>
<li><b>Datagram service</b><br /></li>
<li>The Datagram service is an unreliable, non-sequenced, connectionless service. Datagrams are sent under cover of a name properly registered to the sender.</li></ul>
<br />
<br /><b>NetBIOS End-nodes</b>
<br />End-nodes support NetBIOS service interfaces and contain applications.
<br />Three types of end-nodes are part of this standard:
<br /><ul><li><b>Broadcast nodes</b><br /></li>
<li>Broadcast (or "B") nodes communicate using a mix of UDP datagrams (both broadcast and directed) and TCP connections. B nodes may freely interoperate with one another within a broadcast area. A broadcast area is a single MAC-bridged "B-LAN".
<br /><br /></li>
<li><b>Point-to-point nodes</b><br /></li>
<li>Point-to-point (or "P") nodes communicate using only directed UDP datagrams and TCP sessions. P nodes neither generate nor listen for broadcast UDP packets. P nodes do, however, offer NetBIOS level broadcast and multicast services using capabilities provided by the NBNS and NBDD.
<br /><br /></li>
<li><b>Mixed mode nodes</b><br /></li>
<li>Mixed mode nodes (or "M") nodes are P nodes which have been given certain B node characteristics. M nodes use both broadcast and unicast. Broadcast is used to improve response time using the assumption that most resources reside on the local broadcast medium rather than somewhere in an internet.
<br /><br /></li>
<li>M nodes rely upon NBNS and NBDD servers. However, M nodes may continue limited operation should these servers be temporarily unavailable.</li></ul>
<br />
<br /><b>NetBIOS Support Servers</b>
<br />Two types of support servers are part of this standard:
<br /><ul><li>NetBIOS name server ("NBNS") nodes.<br /></li>
<li>Netbios datagram distribution ("NBDD") nodes.</li></ul>
<br />
<br />NBNS and NBDD nodes are invisible to NetBIOS applications and are part of the underlying NetBIOS mechanism. NetBIOS name and datagram distribution servers are the focus of name and datagram activity for P and M nodes.
<br />
<br />Both the name (NBNS) and datagram distribution (NBDD) servers are permitted to shift part of their operation to the P or M end-node which is requesting a service.
<br />
<br />Neither NBNS nor NBDD nodes interact with B nodes. NetBIOS servers do not listen to broadcast traffic on any broadcast area to which they may be attached. Nor are the NetBIOS support servers even aware of B node activities or names claimed or used by B nodes.
<br />
<br />It may be possible to extend both the NBNS and NBDD so that they participate in B node activities and act as a bridge to P and M nodes. However, such extensions are beyond the scope of this specification.
<br /><hr />
<br /><li><b>Topologies</b></li>
<br />B, P, M, NBNS, and NBDD nodes may be combined in various ways to form useful NetBIOS environments. This section describes some of these combinations.
<br />There are three classes of operation:
<br /><ul><li>Class 0:  B nodes only.
<br /></li><li>Class 1:  P nodes only.
<br /></li><li>Class 2:  P and M nodes together.
<br /><br /></li>
<li><ul><li><b>Local</b><br /></li>
<li>A NetBIOS scope is operating locally when all entities are within the same broadcast area.
<br /></li><li><ul><li><b>B nodes only</b><br /></li>
<li>Local operation with only B nodes is the most basic mode of operation. Name registration and discovery procedures use broadcast mechanisms. The NetBIOS scope is limited by the extent of the broadcast area.
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">   ====+=========+=====BROADCAST AREA=====+==========+=========+====
       |         |                        |          |         |
       |         |                        |          |         |
    +--+--+   +--+--+                  +--+--+    +--+--+   +--+--+
    |  B  |   |  B  |                  |  B  |    |  B  |   |  B  |
    +-----+   +-----+                  +-----+    +-----+   +-----+</pre><br /></li>
<li><b>P nodes only</b><br /></li>
<li>This configuration would typically be used when the network administrator desires to eliminate NetBIOS as a source of broadcast activity.
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">   ====+=========+==========+=B'CAST AREA=+==========+=========+====
       |         |          |             |          |         |
       |         |          |             |          |         |
    +--+--+   +--+--+    +--+--+       +--+--+    +--+--+   +--+--+
    |  P  |   |  P  |    |NBNS |       |  P  |    |NBDD |   |  P  |
    +-----+   +-----+    +-----+       +-----+    +-----+   +-----+</pre><br /></li>
<li><b>Mixed B and P nodes</b><br /></li>
<li>B and P nodes do not interact with one another. Replacement of P nodes with M nodes will allow B's and M's to interact.
<br /></li><li>NOTE: B nodes and M nodes may be intermixed only on a local broadcast area.  B and M nodes should not be intermixed in an internet environment.</li></ul><br /><br /></li>

<li><b>Internet</b><br /></li>
<li><ul><li><b>P nodes only</b><br /></li>
<li>P nodes may be scattered at various locations in an internetwork. They require both an NBNS and an NBDD for NetBIOS name and datagram support, respectively.
<br /><br /></li>
<li>The NetBIOS scope is determined by the NetBIOS scope identifier (domain name) used by the various P (and M) nodes. An internet may contain numerous NetBIOS scopes.
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 3" tabindex="0">                   +-----+
                   |  P  |
                   +--+--+              |    +-----+
                      |                 |----+  P  |
                      |                 |    +-----+
                /-----+-----           |
   +-----+      |           |  +------+ |    +-----+
   |  P  +------+  INTERNET +--+G'WAY |-+----+  P  |
   +-----+      |           |  +------+ |    +-----+
                /-----+-----/           |
              /       |                 |    +-----+
            /         |                 |----+  P  |
     +-----+       +--+--+              |    +-----+
     |NBNS +       |NBDD |
     +-----+       +--+--+</pre><br /></li>
<li><b>Mixed M and P nodes</b><br /></li>
<li>M and P nodes may be mixed. When locating NetBIOS names, M nodes will tend to find names held by other M nodes on the same common broadcast area in preference to names held by P nodes or M nodes elsewhere in the network.
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 4" tabindex="0">                         +-----+
                         |  P  |
                         +--+--+
                            |
                            |
                      /-----+-----
         +-----+      |           |      +-----+
         |  P  +------+  INTERNET +------+NBDD |
         +-----+      |           |      +-----+
                      /-----+-----/
                    /       |
                  /         |
           +-----+       +--+--+
           |NBNS +       |G'WAY|
           +-----+       +--+--+
                            |
                            |
   ====+=========+==========+=B'CAST AREA=+==========+=========+====
       |         |          |             |          |         |
       |         |          |             |          |         |
    +--+--+   +--+--+    +--+--+       +--+--+    +--+--+   +--+--+
    |  M  |   |  P  |    |  M  |       |  P  |    |  M  |   |  P  |
    +-----+   +-----+    +--+--+       +-----+    +-----+   +-----+</pre></li></ul></li></ul></li></ul>
<br /><hr />
<br /><b>General Methods</b>
<br /><ul><li><b>Request/response interaction style</b><br /></li>
<li>Most interactions between entities consist of a request flowing in one direction and a subsequent response flowing in the opposite direction.
<br /><br /></li>
<li>In those situations where interactions occur on unreliable transports (i.e. UDP) or when a request is broadcast, there may not be a strict interlocking or one-to-one relationship between requests and responses.
<br /><br /></li>
<li><ul><li><b>Retransmission of requests</b><br /></li>
<li>UDP is an unreliable delivery mechanism where packets can be lost, received out of transmit sequence, duplicated and delivery can be significantly delayed. Since the NetBIOS protocols make heavy use of UDP, they have compensated for its unreliability with extra mechanisms.
<br /><br /></li>
<li>Each NetBIOS packet contains all the necessary information to process it. None of the protocols use multiple UDP packets to convey a single request or response. If more information is required than will fit in a single UDP packet, for example, when a P-type node wants all the owners of a group name from a NetBIOS server, a TCP connection is used. Consequently, the NetBIOS protocols will not fail because of out of sequence delivery of UDP packets.
<br /><br /></li>
<li><b>Requests without responses</b><br /></li>
<li>Some request types do not have matching responses. These requests are known as "demands". In general a "demand" is an imperative request; the receiving node is expected to obey. However, because demands are unconfirmed, they are used only in situations where, at most, limited damage would occur if the demand packet should be lost. Demand packets are not retransmitted.</li></ul><br /><br /></li>

<li><b>Transactions</b><br /></li>
<li>Interactions between a pair of entities are grouped into "transactions". These transactions comprise one or more request/response pairs.
<br /><br /></li>
<li><b>Transaction ID</b><br /></li>
<li>Since multiple simultaneous transactions may be in progress between a pair of entities a "transaction id" is used.
<br /><br /></li>
<li>The originator of a transaction selects an ID unique to the originator. The transaction id is reflected back and forth in each interaction within the transaction. The transaction partners must match responses and requests by comparison of the transaction ID and the IP address of the transaction partner. If no matching request can be found the response must be discarded.
<br /><br /></li>
<li><b>TCP and UDP foundations</b><br /></li>
<li>This version of the NetBIOS-over-TCP protocols uses UDP for many interactions. In the future this </li><li><a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a></li><li>may be extended to permit such interactions to occur over TCP connections (perhaps to increase efficiency when multiple interactions occur within a short time or when NetBIOS datagram traffic reveals that an application is using NetBIOS datagrams to support connection- oriented service.)</li></ul>
<br /><hr />
<br /><b>NetBIOS Name Service</b>
<br />Before a name may be used, the name must be registered by a node. Once acquired, the name must be defended against inconsistent registration by other nodes. Before building a NetBIOS session or sending a NetBIOS datagram, the one or more holders of the name must be located.
<br />
<br />The NetBIOS name service is the collection of procedures through which nodes acquire, defend, and locate the holders of NetBIOS names.
<br />
<br />The name service procedures are different depending whether the end-node is of type B, P, or M.
<br />
<br />The NetBIOS name services are:
<br /><ul><li><b> Registration (CLAIM)</b><br /></li>
<li>Each NetBIOS node can own more than one name. Names are acquired dynamically through the registration (name claim) procedures.
<br /><br /></li>
<li><b>Name Query (DISCOVERY)</b><br /></li> 
<li>Name Query is the procedure by which the IP address(es) associated with a NetBIOS name are discovered.
<br /><br /></li>
<li><b>Name Release</b></li><li> NetBIOS names may be released explicitly or silently by an end- node. Silent release typically occurs when an end-node fails or is turned-off.
<br /><br /></li>
<li><b>Adapter Status</b><br /></li>
<li>An end-node or the NBNS may ask any other end-node for a collection of information about the NetBIOS status of that node.
<br /><br /></li>
<li><b>End-node NBNS Interaction</b><br /></li>
<li>There are certain characteristics of end-node to NBNS interactions which are in common and are independent of any particular transaction type.
<br /><br /></li>
<li><b>Secured versus non-secured NBNS</b><br /></li>
<li>An NBNS may be implemented in either of two general ways: The NBNS may monitor, and participate in, name activity to ensure consistency. This would be a "secured" style NBNS.
<br /><br /></li>
<li><b>Consistency of the NBNS data base</b><br /></li>
<li>Even in a properly running NetBIOS scope the NBNS and its community of end-nodes may occasionally lose synchronization with respect to the true state of name registrations.
<br /><br /></li>
<li><b>Name Caching</b><br /></li>
<li>An end-node may keep a local cache of NetBIOS name-to-IP address translation entries.</li></ul>
<br />
<br /><b>NetBIOS Session Service</b>
<br />The NetBIOS session service begins after one or more IP addresses have been found for the target name. These addresses may have been acquired using the NetBIOS name query transactions or by other means, such as a local name table or cache.
<br />
<br />NetBIOS session service transactions, packets, and protocols are identical for all end-node types. They involve only directed (point-to-point) communications.
<br />
<br />Session service has three phases:
<br /><ul><li><b>Session establishment</b><br /></li>
<li>It is during this phase that the IP address and TCP port of the called name is determined, and a TCP connection is established with the remote party.
<br /><br /></li>
<li><b>Steady state</b><br /></li>
<li>It is during this phase that NetBIOS data messages are exchanged over the session. Keep-alive packets may also be exchanged if the participating nodes are so configured.
<br /><br /></li>
<li><b>Session close</b><br /></li>
<li>A session is closed whenever either a party (in the session) closes the session or it is determined that one of the parties has gone down.</li></ul>
<br />
<br />The following are variables and should be configurable by the NetBIOS user. The default values of these found in "Defined Constants and Variables" in the Detailed Specification.):
<br /><ul><li><b>SSN_RETRY_COUNT</b><br /></li>
<li>The maximum number TCP connection attempts allowable per a single NetBIOS call request.
<br /><br /></li>
<li><b>SSN_CLOSE_TIMEOUT</b><br /></li>
<li>The time period to wait when closing the NetBIOS session before killing the TCP connection if session sends are outstanding.
<br /><br /></li>
<li>The following are Defined Constants for the NetBIOS Session Service. (See "Defined Constants and Variables" in the Detailed Specification for the value of these constants):
<br /><br /></li>
<li><b>SSN_SRVC_TCP_PORT</b><br /></li>
<li>The globally well-known TCP port allocated for the NetBIOS Session Service. The service accepts TCP connections on this port to establish NetBIOS Sessions. The TCP connection established to this port by the caller is initially used for the exchange of NetBIOS control information. The actual NetBIOS data connection may also pass through this port or, through the retargeting facility, through another port.</li></ul>
<br />
<br /><b>NetBIOS Datagram Service</b>
<br />Every NetBIOS datagram has a named destination and source. To transmit a NetBIOS datagram, the datagram service must perform a name query operation to learn the IP address and the attributes of the destination NetBIOS name. (This information may be cached to avoid the overhead of name query on subsequent NetBIOS datagrams.)
<br />
<br />NetBIOS datagrams are carried within UDP packets. If a NetBIOS datagram is larger than a single UDP packet, it may be fragmented into several UDP packets.
<br />
<br />End-nodes may receive NetBIOS datagrams addressed to names not held by the receiving node. Such datagrams should be discarded. If the name is unique then a DATAGRAM ERROR packet is sent to the source of that NetBIOS datagram.
<br />
<br />The following are GLOBAL variables and should be NetBIOS user configurable:
<br /><ul><li><b>SCOPE_ID</b><br /></li>
<li>The non-leaf section of the domain name preceded by a '.' which represents the domain of the NetBIOS scope for the NetBIOS name. The following protocol description only supports single scope operation.
<br /><br /></li>
<li><b>MAX_DATAGRAM_LENGTH</b><br /></li>
<li>The maximum length of an IP datagram. The minimal maximum length defined in for IP is 576 bytes. This value is used when determining whether to fragment a NetBIOS datagram. Implementations are expected to be capable of receiving unfragmented NetBIOS datagrams up to their maximum size.
<br /><br /></li>
<li><b>BROADCAST_ADDRESS</b><br /></li>
<li>The IP address B-nodes use to send datagrams with group name destinations and broadcast datagrams. The default is the IP broadcast address for a single IP network.</li></ul>
<br />
<br />The following are Defined Constants for the NetBIOS Datagram
<br />Service:
<br /><ul><li><b>DGM_SRVC_UDP_PORT</b><br /></li> 
<li>The globally well-known UDP port allocated where the NetBIOS Datagram Service receives UDP packets. See section 6, "Defined Constants", for its value.</li></ul>
<br /><hr />
<br /><b>NetBIOS Header Format</b>
<br /><li><b>Name Service Packets Header</b></li>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>16</p></td><td><p>21</p></td><td><p>28</p></td><td><p>32</p></td></tr><tr><td><p>NAME_TRN_ID</p></td><td><p>OPCODE</p></td><td><p>NM_FLAGS</p></td><td><p>RCODE</p></td></tr><tr><td><p>QDCOUNT</p></td><td colspan="3"><p>ANCOUNT</p></td></tr><tr><td><p>NSCOUNT</p></td><td colspan="3"><p>ARCOUNT</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>NAME_TRN_ID</b><br /></li>
<li>Transaction ID for Name Service Transaction. Requestor places a unique value for each active transaction. Responder puts NAME_TRN_ID value from request packet in response packet.
<br /><br /></li>
<li><b>OPCODE</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>1</p></td><td><p>5</p></td></tr><tr><td><p>R</p></td><td><p>OPCODE</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>Symbol</p></td><td><p>Bit(s)</p></td><td><p>Description</p></td></tr><tr><td><p>OPCODE</p></td><td><p>1-4</p></td><td><p>Operation specifier:<br />0 = query<br />5 = registration<br />7 = WACK<br />6 = release<br />8 = refresh</p></td></tr><tr><td><p>R</p></td><td><p>0</p></td><td><p>RESPONSE flag:<br />if bit == 0 then request packet<br />if bit == 1 then response packet.</p></td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>NM_FLAGS</b><br /></li>
<li>Flags for operation, see table below.
<br /><br /></li>
<li><b>RCODE</b><br /></li>
<li>Result codes of request. Table of RCODE values for each response packet below.
<br /><br /></li>
<li><b>QDCOUNT</b><br /></li>
<li>Unsigned 16 bit integer specifying the number of entries in the question section of a Name Service packet. Always zero (0) for responses. Must be non-zero for all NetBIOS Name requests.
<br /><br /></li>
<li><b>ANCOUNT</b><br /></li>
<li>Unsigned 16 bit integer specifying the number of resource records in the answer section of a Name Service packet.
<br /><br /></li>
<li><b>NSCOUNT</b><br /></li>
<li>Unsigned 16 bit integer specifying the number of resource records in the authority section of a Name Service packet.
<br /><br /></li>
<li><b>ARCOUNT</b><br /></li>
<li>Unsigned 16 bit integer specifying the number of resource records in the additional records section of a Name Service packet.</li></ul>
<br />
<br /><li><b>Session Service Packets</b></li>
<br />General format of session packets
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32</p></td></tr><tr><td><p>TYPE</p></td><td><p>FLAGS</p></td><td><p>LENGTH</p></td></tr><tr><td colspan="3"><p>TRAILER (Packet Type Dependent)</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>LENGTH</b><br /></li> 
<li>The combined size of the TRAILER field(s). For example, the POSITIVE SESSION RESPONSE packet always has a LENGTH field value of zero (0000) while the RETARGET SESSION RESPONSE always has a LENGTH field value of six (0006).
<br /><br /></li>
<li><b>FLAGS</b><br /></li>
<li>One of the bits of the FLAGS field acts as an additional, high-order bit for the LENGTH field. Thus the cumulative size of the trailer field(s) may range from 0 to 128K bytes.
<br /><br /></li>
<li>Bit definitions of the FLAGS field:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>8</p></td><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td><td><p>7</p></td></tr><tr><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>E</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>E</b><br /></li>
<li>7 Bit(s). Length extension, used as an additional, high-order bit on the LENGTH field.
<br /><br /></li>
<li><b>RESERVED</b><br /></li>
<li>0-6 Bit(s). Reserved, must be zero (0).</li></ul><br /><br /></li>

<li><b>Session Packet Types (in hexadecimal)</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>00</p></td><td><p>SESSION MESSAGE</p></td></tr><tr><td><p>81</p></td><td><p>SESSION REQUEST</p></td></tr><tr><td><p>82</p></td><td><p>POSITIVE SESSION RESPONSE</p></td></tr><tr><td><p>83</p></td><td><p>NEGATIVE SESSION RESPONSE</p></td></tr><tr><td><p>84</p></td><td><p>RETARGET SESSION RESPONSE</p></td></tr><tr><td><p>85</p></td><td><p>SESSION KEEP ALIVE</p></td></tr></tbody></table></div></div></li></ul>
<br />
<br /><li><b>Datagram Service Packets</b></li>
<br />NetBIOS datagram header
<br /><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32</p></td></tr><tr><td><p>MSG_TYPE</p></td><td><p>FLAGS</p></td><td><p>DGM_ID</p></td></tr><tr><td colspan="3"><p>SOURCE_IP</p></td></tr><tr><td colspan="2"><p>SOURCE_PORT</p></td><td><p>DGM_LENGTH</p></td></tr><tr><td colspan="2"><p>PACKET_OFFSET</p></td><td> </td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>MSG_TYPE values (in hexadecimal)</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 8" tabindex="0"><table><caption>Description: preserved table 8</caption><tbody><tr><td><p>10</p></td><td><p>DIRECT_UNIQUE DATAGRAM</p></td></tr><tr><td><p>11</p></td><td><p>DIRECT_GROUP DATAGRAM</p></td></tr><tr><td><p>12</p></td><td><p>BROADCAST DATAGRAM</p></td></tr><tr><td><p>13</p></td><td><p>DATAGRAM ERROR</p></td></tr><tr><td><p>14</p></td><td><p>DATAGRAM QUERY REQUEST</p></td></tr><tr><td><p>15</p></td><td><p>DATAGRAM POSITIVE QUERY RESPONSE</p></td></tr><tr><td><p>16</p></td><td><p>DATAGRAM NEGATIVE QUERY RESPONSE</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Bit definitions of the FLAGS field</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 9" tabindex="0"><table><caption>Description: preserved table 9</caption><tbody><tr><td><p>8</p></td><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td><td><p>7</p></td></tr><tr><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td colspan="2"><p>SNT</p></td><td><p>F</p></td><td><p>M</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>M</b><br /></li>
<li>7 Bit(s) MORE flag, If set then more NetBIOS datagram fragments follow.
<br /><br /></li>
<li><b>F</b><br /></li>
<li>6 Bit(s) FIRST packet flag, If set then this is first  (and possibly only) fragment of NetBIOS datagram
<br /><br /></li>
<li><b>SNT</b><br /></li>
<li>4,5 Bit(s) Source End-Node type:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 10" tabindex="0"><table><caption>Description: preserved table 10</caption><tbody><tr><td><p>00</p></td><td><p>B node</p></td></tr><tr><td><p>01</p></td><td><p>P node</p></td></tr><tr><td><p>10</p></td><td><p>M node</p></td></tr><tr><td><p>11</p></td><td><p>NBDD</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>RESERVED</b><br /></li>
<li>0-3 Bit(s) Reserved, must be zero (0).</li></ul></li></ul>
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: PROCEDURE add_name(newname)</b>

          /*
           * Host initiated processing for a B node
           */
          BEGIN

                      REPEAT

                        /* build name service packet */

                    ONT = B_NODE; /* broadcast node */
                    G = UNIQUE;   /* unique name */
                    TTL = 0;

                    broadcast NAME REGISTRATION REQUEST packet;

                    /*
                     * remote node(s) will send response packet
                     * if applicable
                     */

                    pause(BCAST_REQ_RETRY_TIMEOUT);

               UNTIL response packet is received or
                    retransmit count has been exceeded

               IF no response packet was received THEN
               BEGIN /* no response */
                    /*
                     * build packet
                     */

                    ONT = B_NODE; /* broadcast node */
                    G = UNIQUE;   /* unique name */
                    TTL = 0;

                    /*
                     * Let other nodes known you have the name
                     */

                    broadcast NAME UPDATE REQUEST packet;
                    /* name can be added to local name table */
                    return success;
               END /* no response */
               ELSE
               BEGIN /* got response */

                    /*
                     * Match return transaction id
                     * against tid sent in request
                     */

                   IF NOT response tid = request tid THEN
                   BEGIN
                    ignore response packet;
                   END
                   ELSE
                   CASE packet type OF

                   NEGATIVE NAME REGISTRATION RESPONSE:

                        return failure; /* name cannot be added */

                   POSITIVE NAME REGISTRATION RESPONSE:
                   END-NODE CHALLENGE NAME REGISTRATION RESPONSE:

                        /*
                         * B nodes should normally not get this
                         * response.
                         */

                         ignore packet;

                   END /* case */;
               END /* got response */
          END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: B-NODE ADD_GROUP NAME</b>

          PROCEDURE add_group_name(newname)

          /*
           * Host initiated processing for a B node
           */

          BEGIN
               /*
                * same as for a unique name with the
                * exception that the group bit (G) must
                * be set in the request packets.
                */

               ...
               G = GROUP;
               ...
               ...

               /*
                * broadcast request ...
                */

          END</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: B-NODE FIND_NAME</b>

          PROCEDURE find_name(name)

          /*
           * Host initiated processing for a B node
           */

          BEGIN

               REPEAT
                    /*
                     * build packet
                     */
                    ONT = B;
                    TTL = 0;
                    G = DONT CARE;

                    broadcast NAME QUERY REQUEST packet;

                    /*
                     * a node might send response packet
                     */

                    pause(BCAST_REQ_RETRY_TIMEOUT);
               UNTIL response packet received OR
                    max transmit threshold exceeded

               IF no response packet received THEN
                    return failure;
               ELSE
               IF NOT response tid = request tid THEN
                    ignore packet;
               ELSE
               CASE packet type OF
               POSITIVE NAME QUERY RESPONSE:
                    /*
                     * Start a timer to detect conflict.
                     *
                     * Be prepared to detect conflict if
                     * any more response packets are received.
                     *
                     */

                    save response as authoritative response;
                    start_timer(CONFLICT_TIMER);
                    return success;

               NEGATIVE NAME QUERY RESPONSE:
               REDIRECT NAME QUERY RESPONSE:

                    /*
                     * B Node should normally not get either
                     * response.
                     */

                     ignore response packet;

               END /* case */
          END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: B NODE NAME RELEASE</b>

          PROCEDURE delete_name (name)
          BEGIN

               REPEAT

                    /*
                     * build packet
                     */

                    ...

                    /*
                     * send request
                     */

                    broadcast NAME RELEASE REQUEST packet;

                    /*
                     * no response packet expected
                     */

                    pause(BCAST_REQ_RETRY_TIMEOUT);

               UNTIL retransmit count has been exceeded
          END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5: USER REQUEST PROCESSING</b>

          PROCEDURE listen(listening name, caller name)
          /*
           * User initiated processing for B, P and M nodes
           *
           * This procedure assumes that an incoming session will be
           * retargetted here by a session server.
           */
          BEGIN
               Do TCP listen; /* Returns TCP port used */
               Register listen with Session Service, give names and
                    TCP port;

               Wait for TCP connection to open;   /* Incoming call */

               Read SESSION REQUEST packet from connection

               Process session request (see section on
                    processing initiated by the reception of session
                    service packets);

               Inform Session Service that NetBIOS listen is complete;

               IF session established THEN
                    return success and session information to user;
               ELSE
                    return failure;
          END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 6" tabindex="0"><b>Example 6: RECEIVED PACKET PROCESSING</b>

These are packets received on a TCP connection before a session has been established. 
The listen routines attached to a NetBIOS user process need not implement the RET
ARGET response section. The user process version, separate from a shared Session 
Service, need only accept (POSITIVE SESSION RESPONSE) or reject (NEGATIVE 
SESSION RESPONSE) a session request.

          PROCEDURE session_packet(packet)
          /*
           * processing initiated by receipt of a session service
           * packet for a session in the session establishment phase.
           * Assumes the TCP connection has been accepted.
           */
          BEGIN
               CASE packet type

                  SESSION REQUEST:
                  BEGIN
                    IF called name does not exist on node THEN
                    BEGIN
                         send NEGATIVE SESSION RESPONSE with CALLED
                              NAME NOT PRESENT error code;
                         close TCP connection;
                    END

                    Search for a listen with CALLING NAME for CALLED
                         NAME;
                    IF matching listen is found THEN
                    BEGIN
                         IF port of listener process is port TCP
                            connection is on THEN
                         BEGIN
                              send POSITIVE SESSION RESPONSE;

                              Hand off connection to client process
                                   and/or inform user session is
                                   established;
                         END
                         ELSE
                         BEGIN
                              send RETARGET SESSION RESPONSE with
                                   listener's IP address and
                                   TCP port;
                              close TCP connection;
                         END
                    END
                    ELSE
                    BEGIN
                         /* no matching listen pending */

                         send NEGATIVE SESSION RESPONSE with either
                              NOT LISTENING ON CALLED NAME or NOT
                              LISTENING FOR CALLING NAME error
                              code;
                         close TCP connection;
                    END
                  END /* session request */
               END /* case */
          END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 7" tabindex="0"><b>Example 7: PROTOCOLS FOR THE NBDD</b>

The key to NetBIOS Datagram forwarding service is the packet delivered to the 
destination end node must have the same NetBIOS header as if the source end node sent 
the packet directly to the destination end node. Consequently, the NBDD does not 
reassemble NetBIOS Datagrams. It forwards the UDP packet as is.

          PROCEDURE  datagram_packet(packet)

          /*
           * processing initiated by a incoming datagram service
           * packet on a NBDD node.
           */

          BEGIN
               CASE packet type OF

                  DATAGRAM SERVICE:
                  BEGIN
                       IF packet was sent as a directed
                          NetBIOS datagram THEN
                       BEGIN
                         /*
                          * provide group forwarding service
                          *
                          * Forward datagram to each member of the
                          * group.  Can forward via:
                          *   1) get list of group members and send
                          *   the DATAGRAM SERVICE packet unicast
                          *   to each
                          *   2) use Group Multicast, if available
                          *   3) combination of 1) and 2)
                          */

                         ...

                       END

                       ELSE
                       BEGIN
                         /*
                          * provide broadcast forwarding service
                          *
                          * Forward datagram to every node in the
                          * NetBIOS scope.  Can forward via:
                          *   1) get list of group members and send
                          *   the DATAGRAM SERVICE packet unicast
                          *   to each
                          *   2) use Group Multicast, if available
                          *   3) combination of 1) and 2)
                          */

                         ...

                       END
                  END /* datagram service */

                  DATAGRAM ERROR:

                  BEGIN
                    /*
                     * Should never receive these because Datagrams
                     * forwarded have source end node IP address and
                     * port in NetBIOS header.
                     */

                    send DELETE NAME REQUEST with incorrect name and
                         IP address to NetBIOS Name Server;

                  END /* datagram error */

                  DATAGRAM QUERY REQUEST:
                  BEGIN
                    IF can send packet to DESTINATION_NAME THEN
                    BEGIN
                         /*
                          * NBDD is able to relay Datagrams for
                          * this name
                          */

                         send POSITIVE DATAGRAM QUERY RESPONSE to
                           REQUEST source IP address and UDP port
                           with request's DGM_ID;
                    END
                    ELSE
                    BEGIN
                         /*
                          * NBDD is NOT able to relay Datagrams for
                          * this name
                          */

                         send NEGATIVE DATAGRAM QUERY RESPONSE to
                           REQUEST source IP address and UDP port

                           with request's DGM_ID;
                    END
                  END /* datagram query request */

               END /* case */
          END /* procedure */</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/tline_l_top.gif" alt="" /><br />IPX<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>NetBIOS</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Session Message<br /><img src="/supporting/images/tline_r.gif" alt="" />DU Dgram<br /><img src="/supporting/images/tline_r.gif" alt="" />DG Dgram<br /><img src="/supporting/images/tline_r.gif" alt="" />Bcast Dgram<br /><img src="/supporting/images/tline_r.gif" alt="" />Dgram Err<br /><img src="/supporting/images/tline_r.gif" alt="" />Query Req<br /><img src="/supporting/images/tline_r.gif" alt="" />Pos Query Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Neg Query Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Sess Req<br /><img src="/supporting/images/tline_r.gif" alt="" />Pos Sess Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Neg Sess Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Retarg Sess Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Keep Alive<br /><img src="/supporting/images/tline_r.gif" alt="" />Name Service<br /><img src="/supporting/images/tline_r.gif" alt="" />Datagram Service<br /><img src="/supporting/images/tline_r.gif" alt="" />Session Service<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />SMB<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>API</b><br />API(Application Program Interface), a set of routines, protocols, and tools for building software applications. A good API makes it easier to develop a program by providing all the building blocks. A programmer puts the blocks together. 
<br />
<br />Most operating environments, such as MS-Windows, provide an API so that programmers can write applications consistent with the operating environment. Although APIs are designed for programmers, they are ultimately good for users because they guarantee that all programs using a common API will have similar interfaces. This makes it easier for users to learn new programs.<br /><br /><b>Adapter</b><br />The circuitry required to support a particular device. For example, video adapters enable the computer to support graphics monitors, and network adapters enable a computer to attach to a network. Adapters can be built into the main circuitry of a computer or they can be separate add-ons that come in the form of expansion boards.<br /><br /><b>Broadcast</b><br />Broadcast is the term used to describe communication where a piece of information is sent from one point to all other points. Broadcasting is a useful feature in e-mail systems. It is also supported by some fax systems. 
<br />
<br />In networking, a distinction is made between broadcasting and multicasting. Broadcasting sends a message to everyone on the network whereas multicasting sends a message to a select list of recipients.<br /><br /><b>Data base</b>(without)<br /><br /><br /><b>Datagram</b><br />A datagram is a self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network.
<br /> 	
<br />The term has been generally replaced by the term packet. Datagrams or packets are the message units that the Internet Protocol deals with and that the Internet transports. A datagram or packet needs to be self-contained without reliance on earlier exchanges because there is no connection of fixed duration between the two communicating points as there is, for example, in most voice telephone conversations.<br /><br /><b>MS-DOS</b><br />MS-DOS (Microsoft disk operating system). Originally developed by Microsoft for IBM, MS-DOS was the standard operating system for IBM-compatible personal computers. 
<br />
<br />The initial versions of DOS were very simple and resembled another operating system called CP/M. Subsequent versions have became increasingly sophisticated as they incorporated features of minicomputer operating systems. However, DOS is still a 16-bit operating system and does not support multiple users or multitasking. 
<br />
<br />For some time, it has been widely acknowledged that DOS is insufficient for modern computer applications. Microsoft Windows helped alleviate some problems, but still, it sat on top of DOS and relied on DOS for many services. Even Windows 95 sat on top of DOS. Newer operating systems, such as Windows NT and OS/2 Warp, do not rely on DOS to the same extent, although they can execute DOS-based programs. It is expected that as these operating systems gain market share, DOS will eventually disappear. In the meantime, Caldera, Inc. markets a version of DOS called DR-OpenDOS that extends MS-DOS in significant ways.<br /><br /><b>Method</b><br />In object-oriented programming, a procedure that is executed when an object receives a message. A method is really the same as a procedure, function , or routine in procedural programming languages. The only difference is that in object-oriented programming, a method is always associated with a class.<br /><br /><b>NBDD</b><br />NBDD is Netbios datagram distribution. This server relays broadcast and multicast (group) datagrams to all intended recipients. When a P, M, or H node wishes to send a broadcast or multicast datagram, it will send the datagram to the NBDD. The NBDD will obtain the list of destination IPs from the NBNS and then unicast the datagram to each of those nodes.<br /><br /><b>NBNS</b><br />NBNS (NetBIOS name server) is a server providing NetBIOS name to IP address mapping. The NBNS is part of the NBT mechanism and does not need to participate directly in the NetBIOS LAN.<br /><br /><b>Node</b><br />In networks, node is a processing location. A node can be a computer or some other device, such as a printer. Every node has a unique network address, sometimes called a Data Link Control (DLC) address or Media Access Control (MAC) address. 
<br />
<br />In tree structures, node is a point where two or more lines meet. <br /><br /><b>PC-DOS</b><br />PC-DOS (Personal Computer - Disk Operating System) was the first widely-installed operating system used in personal computers. It was developed for IBM by Bill Gates and his fledgling Microsoft Corporation for installation in IBM's first lines of PCs. Gates marketed an almost identical version of the operating system called MS-DOS (Microsoft - Disk Operating System). Most users of either DOS system have usually referred to their system as just DOS. Like MS-DOS, PC-DOS was (and still is) a non-graphical line-oriented command-driven operating system, with a relatively simple interface but not overly "friendly" user interface. Its prompt to enter a command looks like this:
<br />C:&gt; 
<br />
<br />The first Microsoft Windows operating system was really an application that ran on top of the MS-DOS operating system. Today, Windows operating systems continue to support DOS (or a DOS-like user interface) for special purposes by emulating the operating system. 
<br />
<br />In the 1970s before the personal computer was invented, IBM had a different and unrelated DOS (Disk Operating System) that ran on smaller business computers. It was replaced by IBM's VSE operating system.<br /><br /><b>Point-to-point</b><br />Point-to-point is a network topology most often used on wide area networks (WANs) to connect two hosts. The traditional type of InfoChannel connection, in which a Master sends and receives information to one Player Station at a time. This is typically a two-way connection, using modem, nullmodem, or a network.<br /><br /><b>Service</b><br />The NAS provides a service to the dial-in user, such as PPP or Telnet.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br /><b>Topology</b><br />The shape of a local-area network (LAN) or other communications system. Topologies are either physical or logical. There are four principal topologies used in LANs:
<br />*Bus topology: All devices are connected to a central cable, called the bus or backbone. Bus networks are relatively inexpensive and easy to install for small networks. Ethernet systems use a bus topology. 
<br />
<br />*Ring topology : All devices are connected to one another in the shape of a closed loop, so that each device is connected directly to two other devices, one on either side of it. Ring topologies are relatively expensive and difficult to install, but they offer high bandwidth and can span large distances. 
<br />
<br />*Star topology: All devices are connected to a central hub. Star networks are relatively easy to install and manage, but bottlenecks can occur because all data must pass through the hub. 
<br />
<br />*Tree topology: A tree topology combines characteristics of linear bus and star topologies. It consists of groups of star-configured workstations connected to a linear bus backbone cable. 
<br />
<br />These topologies can also be mixed. For example, a bus-star network consists of a high-bandwidth bus, called the backbone, which connects a collections of slower-bandwidth star segments. <br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1088.html">RFC 1088</a>] Standard for the transmission of IP datagrams over NetBIOS networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1001.html">RFC 1001</a>] Protocol standard for a NetBIOS service on a TCP/UDP transport: Concepts and methods.
[<a href="https://www.rfc-editor.org/rfc/rfc1002.html">RFC 1002</a>] RFC1002 Protocol standard for a NetBIOS service on a TCP/UDP transport: Detailed specifications.
                		  </div>
		  
</section>


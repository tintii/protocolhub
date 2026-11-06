---
id: protocol-netbeui
slug: netbeui
name: NetBEUI
expandedName: NetBIOS Extended User Interface
origin: historical
provenance:
  source: protocols/protocol_NetBEUI.htm
  sha256: abebd77d1f76e1f10b0659a8028630cb054d5092822c6b2a149bc1c252df9c9e
  provider: 'Colasoft Co., Ltd.'
aliases:
  - NetBIOS Extended User Interface
layers:
  - Session Layer
  - Transport Layer
suites:
  - IBM protocol suite
summary:
  - label: Protocol
    html: NetBIOS Extended User Interface
  - label: Protocol suite
    html: IBM protocol suite
  - label: Layer
    html: |-
      Session Layer
      <br />Transport Layer
  - label: Related protocols
    html: 'UDP,<br />TCP,<br />SMP,<br />Ethernet,<br />Token Ring,<br />X.25,<br />PPP,<br />IPX,<br />NetBOIS'
originalUpdate: '2006-01-12 17:42:47'
rfcs:
  - 1001
  - 1002
related:
  - protocol-udp
  - protocol-tcp
  - protocol-ppp
  - protocol-ipx
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

			NetBEUI (NetBIOS Extended User Interface) is a new, extended version of NetBIOS, the program that lets computers communicate within a local area network. NetBEUI (pronounced net-BOO-ee) formalizes the frame format (or arrangement of information in a data transmission) that was not specified as part of NetBIOS. NetBEUI was developed by IBM for its LAN Manager product and has been adopted by Microsoft for its Windows NT, LAN Manager, and Windows for Workgroups products. Hewlett-Packard and DEC use it in comparable products. 
<br />
<br />NetBEUI is the best performance choice for communication within a single LAN. Because, like NetBIOS, it does not support the routing of messages to other networks, its interface must be adapted to other protocols such as Internetwork Packet Exchange or TCP/IP. A recommended method is to install both NetBEUI and TCP/IP in each computer and set the server up to use NetBEUI for communication within the LAN and TCP/IP for communication beyond the LAN. 
<br />
<br />NetBEUI works at the Transport and Network layers for local area network (LAN). NetBEUI provides data transportation but it is not a routable transport protocol. NetBEUI is a good performance choice for communication within a single LAN.
<br /><hr />
<br />NetBEUI stands for NetBIOS Enhanced User Interface and specifies the way that higher level software sends and receives messages over the Netbios Frames Protocol. This protocol is specified in the IBM document the "IBM Local Area Network Technical Reference Manual" and runs over the standard 802.2 data-link protocol layer.
<br />
<br />Since the 802.2 data-link protocol is not routable, neither is NetBEUI. This was a major limitation of LAN Manger and was a primary reason why it was never a major force in the PC networking world.
<br />
<br />When NetBEUI was developed in 1985, it was assumed that LANs would be segmented into workgroups of 20 to 200 computers and that gateways would be used to connect that LAN segment to other LAN segments or a mainframe. 
<br />
<br />NetBEUI is optimized for very high performance when used in departmental LANs or LAN segments. For traffic within a LAN segment, NetBEUI is the fastest of the protocols shipped with Windows NT.
<br /><hr />
<br /><b>Version</b>
<br />The version of NetBEUI shipping with Windows NT is NetBEUI 3.0. NetBEUI 3.0 corrects some limitations in previous versions of NetBEUI, including the following: 
<br />
<br />NetBEUI 3.0, along with the TDI layer, eliminates the previous limitation of 254 sessions to a server on one network adapter card. NetBEUI 3.0 is completely self-tuning. NetBEUI 3.0 provides much better performance over slow links than did previous versions of NetBEUI. 
<br />
<br />Strictly speaking, NetBEUI 3.0 is not truly NetBEUI. Instead, it is a Netbios Frame (NBF) format protocol. NetBEUI uses the Netbios interface as its upper-level interface, but NBF conforms to the Transport Driver Interface (TDI) instead. NBF is completely compatible and interoperable with the NetBEUI shipped with past Microsoft networking products.
<br />
<br />NetBEUI does not have the type of addressing that allows packet forwarding on routed networks, but the Netbios interface is adaptable to other protocols which are, such as IPX and TCP/IP. The specification for implementing the Netbios interface to TCP/IP is defined by <a href="https://www.rfc-editor.org/rfc/rfc1001.html">RFC 1001</a> and 1002.
<br />
<br />Because NetBEUI is very fast for small LAN communications but provides poorer performance for WAN communications, one recommended method for setting up a network is to use both NetBEUI and another protocol, such as TCP/IP, on each computer that may need to access computers across a router or on a WAN. When you install both protocols on each computer and set NetBEUI as the first protocol to be used, Windows NT uses NetBEUI for the communication between Windows NT computers within each LAN segment and TCP/IP for communication across routers and to other parts of your WAN. 
<br />
<br />Here are some of the most common network operating systems that use the Netbios interface.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>Vendor</p></td><td><p>Network Operating System</p></td></tr><tr><td>Microsoft</td><td>MS LAN Manager, Windows for Workgroups, and Windows NT</td></tr><tr><td>Hewlett-Packard</td><td>HP LAN Manager and Resource Sharing</td></tr><tr><td>IBM</td><td>LAN Server</td></tr><tr><td>Digital</td><td>Pathworks</td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>Header format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>2</p></td><td><p>2</p></td><td><p>1</p></td><td><p>1</p></td><td><p>2</p></td><td><p>2</p></td><td><p>2bytes</p></td></tr><tr><td><p>Length</p></td><td><p>Deliminator</p></td><td><p>Command</p></td><td><p>Data1</p></td><td><p>Data2</p></td><td><p>XMIT Cor</p></td><td><p>RSP Cor</p></td></tr><tr><td colspan="7"><p>Destination name (16 bytes)</p></td></tr><tr><td colspan="7"><p>Source name (16 bytes)</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Length</b><br /></li> 
<li>The length of the NETBIOS header. 
<br /><br /></li>
<li><b>Deliminator</b><br /></li> 
<li>A delimiter indicating that subsequent data is destined for the NetBIOS function. 
<br /><br /></li>
<li><b>Command </b><br /></li>
<li>A specific protocol command that indicates the type of function of the frame. 
<br /><br /></li>
<li><b>Data 1</b><br /></li>
<li>One byte of optional data per specific command. 
<br /><br /></li>
<li><b>Data 2</b><br /></li>
<li>Two bytes of optional data per specific command. 
<br /><br /></li>
<li><b>Xmit/response correlator</b><br /></li>
<li>Used to associate received responses with transmitted requests. 
<br /><br /></li>
<li><b>Destination name/num</b><br /></li>
<li>In non-session frames this field contains the 16-character name. 
<br /><br /></li>
<li><b>Source name/num</b><br /></li>
<li>In non-session frames this field contains the 16-character source name. In session frames this field contains a 1 byte source session number.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">Ethernet 802.2<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>NetBEUI</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Add Group Name Query<br /><img src="/supporting/images/tline_r.gif" alt="" />Add Name Query<br /><img src="/supporting/images/tline_r.gif" alt="" />Name In Conflict<br /><img src="/supporting/images/tline_r.gif" alt="" />Status Query<br /><img src="/supporting/images/tline_r.gif" alt="" />Term Trace (Remote)<br /><img src="/supporting/images/tline_r.gif" alt="" />Datagram<br /><img src="/supporting/images/tline_r.gif" alt="" />Datagram Bcast<br /><img src="/supporting/images/tline_r.gif" alt="" />Name Query<br /><img src="/supporting/images/tline_r.gif" alt="" />Add Name Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Name Recognized<br /><img src="/supporting/images/tline_r.gif" alt="" />Status Rsp<br /><img src="/supporting/images/tline_r.gif" alt="" />Term Trace (Local)<br /><img src="/supporting/images/tline_r.gif" alt="" />Data Ack<br /><img src="/supporting/images/tline_r.gif" alt="" />Data 1st Middle<br /><img src="/supporting/images/tline_r.gif" alt="" />Data Only Last<br /><img src="/supporting/images/tline_r.gif" alt="" />Session Confirm<br /><img src="/supporting/images/tline_r.gif" alt="" />Session End<br /><img src="/supporting/images/tline_r.gif" alt="" />Session Initialize<br /><img src="/supporting/images/tline_r.gif" alt="" />No Receive<br /><img src="/supporting/images/tline_r.gif" alt="" />Receive Outstanding<br /><img src="/supporting/images/tline_r.gif" alt="" />Receive Continue<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Session Alive<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>Local</b><br />In networks, local refers to files, devices, and other resources at your workstation. Resources located at other nodes on the networks are remote.<br /><br /><b>NetBIOS</b><br />NetBIOS(Network Basic Input Output System) is an API that augments the DOS BIOS by adding special functions for local-area networks (LANs). Almost all Windows-based LANs for PCs are based on the NetBIOS. Some LAN manufacturers have even extended it, adding additional network capabilities. <br /><br /><b>TCP/IP</b><br />TCP/IP(transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP uses several protocols, the two main ones being TCP and IP. TCP/IP is built into the UNIX operating system and is used by the Internet, making it the de facto standard for transmitting data over networks. Even network operating systems that have their own protocols, such as Netware, also support TCP/IP.<br /><br /><b>WAN</b><br />WAN (Wide Area Network) is a network that spans a large area, typically including routers, gateways, and many different IP address groups.
<br />
<br />In the context of firewalls, the WAN interface is the one directly connected to the Internet. In the context of corporate networks, the WAN generally refers to the network that connects all of the organization's locations onto the corporate network. Historically this was accomplished with expensive private leased lines like frame relay and similar technologies. With the low cost and widespread availability of broadband Internet connections, many organizations are switching to using VPN in lieu of leased lines. VPN provides the same functionality, though is not as reliable as leased lines and has higher latency.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b> 
[<a href="https://www.rfc-editor.org/rfc/rfc1001.html">RFC 1001</a>] PROTOCOL STANDARD FOR A NetBIOS SERVICE ON A TCP/UDP TRANSPORT: CONCEPTS AND METHODS. 
[<a href="https://www.rfc-editor.org/rfc/rfc1002.html">RFC 1002</a>] PROTOCOL STANDARD FOR A NetBIOS SERVICE ON A TCP/UDP TRANSPORT: DETAILED SPECIFICATIONS.
                		  </div>
		  
</section>


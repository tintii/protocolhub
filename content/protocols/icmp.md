---
id: protocol-icmp
slug: icmp
name: ICMP
expandedName: Internet Control Message Protocol
origin: historical
provenance:
  source: protocols/protocol_ICMP.htm
  sha256: 2b2817642c080d2670aa204ddaa8bcc5ffb707c040ffbf557d002a9fd791c396
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Internet Control Message Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Internet Control Message Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Control protocol
  - label: Latest Version
    html: |-
      ICMPv4, Internet Control Message Protocol for IPv4.
      <br />ICMPv6, Internet Control Message Protocol for IPv6.
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.icmp (1.3.6.1.2.1.5)
  - label: Working groups
    html: 'ITrace, ICMP Traceback'
originalUpdate: '2005-11-10 16:00:11'
rfcs:
  - 760
  - 777
  - 778
  - 791
  - 792
  - 816
  - 844
  - 950
  - 985
  - 1009
  - 1038
  - 1060
  - 1063
  - 1066
  - 1108
  - 1122
  - 1123
  - 1127
  - 1156
  - 1158
  - 1191
  - 1195
  - 1213
  - 1247
  - 1248
  - 1256
  - 1349
  - 1393
  - 1435
  - 1475
  - 1716
  - 1788
  - 1812
  - 1825
  - 1933
  - 1940
  - 2002
  - 2003
  - 2011
  - 2401
  - 2474
  - 2521
  - 2765
  - 2780
  - 2893
  - 3220
  - 3344
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

			Internet Control Message Protocol (ICMP) is a required protocol tightly integrated with IP. ICMP messages, delivered in IP packets, are used for out-of-band messages related to network operation or mis-operation. Of course, since ICMP uses IP, ICMP packet delivery is unreliable, so hosts can't count on receiving ICMP packets for any network problem.
<br />
<br />ICMP messages are sent in several situations: for example, when a datagram cannot reach its destination, when the gateway does not have the buffering capacity to forward a datagram, and when the gateway can direct the host to send traffic on a shorter route. The Internet Protocol is not designed to be absolutely reliable. The purpose of these control messages is to provide feedback about problems in the communication environment, not to make IP reliable. There are still no guarantees that a datagram will be delivered or a control message will be returned. Some datagrams may still be undelivered without any report of their loss. The higher level protocols that use IP must implement their own reliability procedures if reliable communication is required. The ICMP messages typically report errors in the processing of datagrams. To avoid the infinite regress of messages about messages etc., no ICMP messages are sent about ICMP messages.
<br />
<br />IP implementations are required to support this protocol. ICMP is considered an integral part of IP, although it is architecturally layered upon IP. ICMP provides error reporting, flow control and first-hop gateway redirection.
<br />
<br />Some of ICMP's functions are to: 
<br />
<br /><ul><li><b>Announce network errors.</b> 
<br />Such as a host or entire portion of the network being unreachable, due to some type of failure. A TCP or UDP packet directed at a port number with no receiver attached is also reported via ICMP.<br /><br /></li>

<li><b>Announce network congestion.</b> 
<br />When a router begins buffering too many packets, due to an inability to transmit them as fast as they are being received, it will generate ICMP Source Quench messages. Directed at the sender, these messages should cause the rate of packet transmission to be slowed. Of course, generating too many Source Quench messages would cause even more network congestion, so they are used sparingly.<br /><br /></li> 

<li><b>Assist Troubleshooting.</b> 
<br />ICMP supports an Echo function, which just sends a packet on a round--trip between two hosts. Ping, a common network management tool, is based on this feature. Ping will transmit a series of packets, measuring average round--trip times and computing loss percentages.<br /><br /></li> 

<li><b>Announce Timeouts.</b> 
<br />If an IP packet's TTL field drops to zero, the router discarding the packet will often generate an ICMP packet announcing this fact. TraceRoute is a tool which maps network routes by sending packets with small TTL values and watching the ICMP timeout announcements.</li></ul>
<br /><hr />
<br /><b>ICMP Header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>Type</p></td><td><p>Code</p></td><td><p>Checksum</p></td></tr><tr><td colspan="2"><p>Identifier</p></td><td><p>Sequence number</p></td></tr><tr><td colspan="3"><p>Address mask</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Type</b><br /></li> 
<li>8 bits. Specifies the format of the ICMP message.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><b>Type</b></td><td><b>Name</b></td><td><b>Code</b></td></tr><tr><td>0</td><td>Echo Reply</td><td>0 - No Code</td></tr><tr><td>1</td><td>Unassigned</td><td>¡¡</td></tr><tr><td>2</td><td>Unassigned</td><td>¡¡</td></tr><tr><td>3</td><td>Destination Unreachable</td><td>1 - Host Unreachable<br />2 - Protocol Unreachable<br />3 - Port Unreachable<br />4 - Fragmentation Needed and Don't Fragment was Set<br />5 - Source Route Failed<br />6 - Destination Network Unknown<br />7 - Destination Host Unknown<br />8 - Source Host Isolated<br />9 - Communication with Destination Network is Administratively Prohibited<br />10 - Communication with Destination Host is Administratively Prohibited<br />11 - Destination Network Unreachable for Type of Service<br />12 - Destination Host Unreachable for Type of Service<br />13 - Communication Administratively Prohibited<br />14 - Host Precedence Violation<br />15 - Precedence cutoff in effect </td></tr><tr><td>4</td><td>Source Quench</td><td>0 - No Code</td></tr><tr><td>5</td><td>Redirect</td><td>0 - Redirect Datagram for the Network (or subnet)<br />1 - Redirect Datagram for the Host<br />2 - Redirect Datagram for the Type of Service and Network<br />3 - Redirect Datagram for the Type of Service and Host</td></tr><tr><td>6</td><td>Alternate Host Address</td><td>0 - Alternate Address for Host</td></tr><tr><td>7</td><td>Unassigned</td><td>¡¡</td></tr><tr><td>8</td><td>Echo</td><td>0 - No Code</td></tr><tr><td>9</td><td>Router Advertisement</td><td>0 - No Code</td></tr><tr><td>10</td><td>Router Selection</td><td>0 - No Code</td></tr><tr><td>11</td><td>Time Exceeded</td><td>0 - Time to Live exceeded in Transit<br />1 - Fragment Reassembly Time Exceeded</td></tr><tr><td>12</td><td>Parameter Problem</td><td>0 - Pointer indicates the error<br />1 - Missing a Required Option<br />2 - Bad Length</td></tr><tr><td>13</td><td>Timestamp</td><td>0 - No Code</td></tr><tr><td>14</td><td>Timestamp Reply</td><td>0 - No Code</td></tr><tr><td>15</td><td>Information Request</td><td>0 - No Code</td></tr><tr><td>16</td><td>Information Reply</td><td>0 - No Code</td></tr><tr><td>17</td><td>Address Mask Request</td><td>0 - No Code</td></tr><tr><td>18</td><td>Address Mask Reply</td><td>0 - No Code</td></tr><tr><td>19</td><td>Reserved (for Security)</td><td>¡¡</td></tr><tr><td>20-29</td><td>Reserved (for Robustness Experiment)</td><td>¡¡</td></tr><tr><td>30</td><td>Traceroute</td><td>¡¡</td></tr><tr><td>31</td><td>Datagram Conversion Error</td><td>¡¡</td></tr><tr><td>32</td><td>Mobile Host Redirect</td><td>¡¡</td></tr><tr><td>33</td><td>IPv6 Where-Are-You</td><td>¡¡</td></tr><tr><td>34</td><td>IPv6 I-Am-Here</td><td>¡¡</td></tr><tr><td>35</td><td>Mobile Registration Request</td><td>¡¡</td></tr><tr><td>36</td><td>Mobile Registration Reply</td><td>¡¡</td></tr><tr><td>37</td><td>Domain Name Request</td><td>¡¡</td></tr><tr><td>38</td><td>Domain Name Reply</td><td>¡¡</td></tr><tr><td>39</td><td>SKIP</td><td>¡¡</td></tr><tr><td>40</td><td>Photuris</td><td>0 - Reserved<br />1 - unknown security parameters index<br />2 - valid security parameters, but authentication failed<br />3 - valid security parameters, but decryption failed</td></tr><tr><td>41-255</td><td>Reserved</td><td>¡¡</td></tr></tbody></table></div></div><br /></li>
<li><b>Identifier </b><br /></li>
<li>16bits. An identifier to aid in matching requests/replies; may be zero.
<br /><br /></li>
<li><b>Sequence number</b><br /></li> 
<li>16bits. Sequence number to aid in matching requests/replies; may be zero.
<br /><br /></li>
<li><b>Address mask</b><br /></li>
<li>A 32-bit mask.
<br /><br /></li>
<li><b>Code</b><br /></li>
<li>8 bits. Further qualifies the ICMP message.
<br /><br /></li>
<li><b>ICMP Header Checksum</b><br /></li>
<li>16 bits. The 16-bit one's complement of the one's complement sum of the ICMP message, starting with the ICMP Type field. When the checksum is computed, the checksum field should first be set to 0. When the data packet is transmitted, the checksum is computed and inserted into this field. When the data packet is received, the checksum is again computed and verified against the checksum field. If the two checksums do not match then an error has occurred.
<br /><br /></li>
<li><b>Data</b><br /></li>
<li>variable length. Contains the data specific to the message type indicated by the Type and Code fields.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Destination Unreachable Message</b>

          0                   1                   2                   3
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Type      |     Code      |          Checksum             |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             unused                            |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      Internet Header + 64 bits of Original Data Datagram      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Time Exceeded Mes</b>

          0                   1                   2                   3
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Type      |     Code      |          Checksum             |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             unused                            |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      Internet Header + 64 bits of Original Data Datagram      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Parameter Problem Message</b>

          0                   1                   2                   3
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Type      |     Code      |          Checksum             |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |    Pointer    |                   unused                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      Internet Header + 64 bits of Original Data Datagram      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: Source Quench Message</b>

          0                   1                   2                   3
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Type      |     Code      |          Checksum             |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             unused                            |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      Internet Header + 64 bits of Original Data Datagram      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5: Redirect Message</b>

          0                   1                   2                   3
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Type      |     Code      |          Checksum             |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                 Gateway Internet Address                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      Internet Header + 64 bits of Original Data Datagram      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 6" tabindex="0"><b>Example 6: Echo or Echo Reply Message</b>

          0                   1                   2                   3
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Type      |     Code      |          Checksum             |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |           Identifier          |        Sequence Number        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Data ...
          +-+-+-+-+-</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 7" tabindex="0"><b>Example 7: Timestamp or Timestamp Reply Message</b>

          0                   1                   2                   3
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Type      |      Code     |          Checksum             |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |           Identifier          |        Sequence Number        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Originate Timestamp                                       |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Receive Timestamp                                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Transmit Timestamp                                        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 8" tabindex="0"><b>Example 8: Information Request or Information Reply Message</b>

          0                   1                   2                   3
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Type      |      Code     |          Checksum             |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |           Identifier          |        Sequence Number        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>ICMP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Echo Req<br /><img src="/supporting/images/tline_r.gif" alt="" />Echo Reply<br /><img src="/supporting/images/tline_r.gif" alt="" />Dest Unreach<br /><img src="/supporting/images/tline_r.gif" alt="" />Time Exceed<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Redirect<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Address Mask Request and Reply</b><br />ICMP can be used by a program to read the Address Mask (the subnet mask) value from another machine. You'll very rarely see this one on a network.<br /><br /><b>Checksum</b><br />Checksum is a simple error-detection scheme in which each transmitted message is accompanied by a numerical value based on the number of set bits in the message. The receiving station then applies the same formula to the message and checks to make sure the accompanying numerical value is the same. If not, the receiver can assume that the message has been garbled. <br /><br /><b>Congestion</b><br />Congestion is a signaling technique used by data transmission systems in order to indicate the status of network congestion. Devices that are communicating data across a network rely on congestion notification to determine when to send or delay the transmission of data packets. 
<br />
<br />Forward congestion notification indicates to upstream data switching devices that data is being transmitted through congested channels and some of the data or packets may be discarded. Backward congestion notification indicates to downstream devices that data is going through congested channels.<br /><br /><b>Destination Unreachable</b><br />This message is generated by a router to inform the source host that the destination address is unreachable. If, according to the information in the gateway's routing tables, the network specified in the internet destination field of a datagram is unreachable, e.g., the distance to the network is infinity, the gateway may send a destination unreachable message to the internet source host of the datagram.
<br />
<br />If, in the destination host, the IP module cannot deliver the datagram  because the indicated protocol module or process port is not active, the destination host may send a destination unreachable message to the source host.
<br />
<br />Another case is when a datagram must be fragmented to be forwarded by a gateway yet the Don't Fragment flag is on.  In this case the gateway must discard the datagram and may return a destination unreachable message.
<br />
<br />Codes 0, 1, 4, and 5 may be received from a gateway.  Codes 2 and 3 may be received from a host.<br /><br /><b>Echo and Echo Reply</b><br />Used to implement the PING command. When an ICMP Echo is received it is responded to with an Echo Reply message. The data received in the echo message must be returned in the echo reply message.
<br />
<br />The identifier and sequence number may be used by the echo sender to aid in matching the replies with the echo requests. For example, the identifier might be used like a port in TCP or UDP to identify a session, and the sequence number might be incremented on each echo request sent.  The echoer returns these same values in the echo reply.
<br />
<br />Code 0 may be received from a gateway or a host<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>Itrace</b><br />Itrace (ICMP Traceback) is often useful to learn the path that packets take through the Internet.  This is especially important for dealing with certain denial-of-service attacks, where the source IP is forged. There areother uses as well, including path characterization and detection of asymmetric routes.  There are existing tools, such as traceroute, but these generally provide the forward path, not the reverse.
<br />
<br />We propose an ICMP Traceback message to help solve this problem. When forwarding packets, routers can, with a low probability,generate a Traceback message that is sent along to the destination. With enough Traceback messages from enough routers along the path, the traffic source and path can be determined.<br /><br /><b>MIB</b><br />MIB (Management Information Base) is database of objects that can be monitored by a network management system. Both SNMP and RMON use standardized MIB formats that allows any SNMP and RMON tools to monitor any device defined by a MIB.<br /><br /><b>Parameter</b><br />Characteristic, means defining the characteristics of something. In general, parameters are used to customize a program. For example, filenames, page lengths, and font specifications could all be considered parameters. 
<br />
<br />In programming, the term parameter is synonymous with argument, a value that is passed to a routine.<br /><br /><b>Parameter Problem</b><br />This message is generated as a response for any error not specifically covered by another ICMP message. 
<br />
<br />If the gateway or host processing a datagram finds a problem with the header parameters such that it cannot complete processing the datagram it must discard the datagram.  One potential source of such a problem is with incorrect arguments in an option.  The gateway or host may also notify the source host via the parameter problem message.  This message is only sent if the error caused the datagram to be discarded.
<br />
<br />The pointer identifies the octet of the original datagram's header where the error was detected (it may be in the middle of an option).  Code 0 may be received from a gateway or a host.<br /><br /><b>Ping</b><br />A utility to determine whether a specific IP address is accessible. It works by sending a packet to the specified address and waiting for a reply. PING is used primarily to troubleshoot Internet connections. There are many freeware and shareware Ping utilities available for personal computers. 
<br />
<br />It is often believed that "Ping" is an abbreviation for Packet Internet Groper, but Ping's author has stated that the names comes from the sound that a sonar makes.<br /><br /><b>Redirect</b><br />In operating system shells, redirection refers to directing input and output to files and devices other than the default I/O devices. By default, input generally comes from the keyboard or mouse, and output goes to the display monitor. With a redirection operator, you can override these defaults so that a command or program takes input from some other device and sends output to a different device. ICMP Redirect is a mechanism for routers to convey routing information to hosts.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>SNMP</b><br />SNMP (Simple Network Management Protocol) is a set of protocols for managing complex networks. The first versions of SNMP were developed in the early 80s. SNMP works by sending messages, called protocol data units (PDUs), to different parts of a network. SNMP-compliant devices, called agents, store data about themselves in Management Information Bases (MIBs) and return this data to the SNMP requesters.<br /><br /><b>Source Quench</b><br />This message is a request to decrease the traffic rate of data messages sent to an internet destination. 
<br />
<br />If a gateway discards a datagram, it may send a source quench message to the internet source host of the datagram.  A destination host may also send a source quench message if datagrams arrive too fast to be processed.  The source quench message is a request to the host to cut back the rate at which it is sending traffic to the internet destination.  The gateway may send a source quench message for every message that it discards.  On receipt of a source quench message, the source host should cut back the rate at which it is sending traffic to the specified destination until it no longer receives source quench messages from the gateway.  The source host can then gradually increase the rate at which it sends traffic to the destination until it again receives source quench messages.
<br />
<br />The gateway or host may send the source quench message when it approaches its capacity limit rather than waiting until the capacity is exceeded. Code 0 may be received from a gateway or a host.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>TTL</b><br />TTL (Time to Live) is a field in the Internet Protocol (IP) that specifies how many more hops a packet can travel before being discarded or returned.<br /><br /><b>Time Exceeded</b><br />This data is used by the host to match the message to the appropriate process. If the gateway processing a datagram finds the time to live field is zero it must discard the datagram.  The gateway may also notify the source host via the time exceeded message.
<br />
<br />If a host reassembling a fragmented datagram cannot complete the reassembly due to missing fragments within its time limit it discards the datagram, and it may send a time exceeded message.
<br />
<br />If fragment zero is not available then no time exceeded need be sent at all.
<br />
<br />Code 0 may be received from a gateway.  Code 1 may be received from a host.<br /><br /><b>Timeout</b><br />An interrupt signal generated by a program or device that has waited a certain length of time for some input but has not received it. Many programs perform time-outs so that the program does not sit idle waiting for input that may never come. For example, automatic bank-teller machines perform a time-out if you do not enter your password quickly enough.<br /><br /><b>Timestamp</b><br />A router has received a frame that has had its Time To Live field decremented to one. The router now decrements the field to zero and discards the frame.<br /><br /><b>TraceRoute</b><br />A utility that traces a packet from your computer to an Internet host, showing how many hops the packet requires to reach the host and how long each hop takes. If you're visiting a Web site and pages are appearing slowly, you can use traceroute to figure out where the longest delays are occurring. 
<br />The original traceroute is a UNIX utility, but nearly all platforms have something similar. Windows includes a traceroute utility called tracert. In Windows, you can run tracert by selecting Start-&gt;Run¡­, and then entering tracert followed by the domain name of the host. 
<br />
<br />For example: tracert www.pcwebopedia.com 
<br />
<br />Traceroute utilities work by sending packets with low time-to-live (TTL) fields. The TTL value specifies how many hops the packet is allowed before it is returned. When a packet can't reach its destination because the TTL value is too low, the last host returns the packet and identifies itself. By sending a series of packets and incrementing the TTL value with each successive packet, traceroute finds out who all the intermediary hosts are.<br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related lnks:</b>
                <a href="https://www.iana.org/assignments/icmp-parameters">ICMP parameters</a><hr /><b>RFCs:</b>
[IEN 212] IP - Local Area Network Addressing Issues.
[<a href="https://www.rfc-editor.org/rfc/rfc760.html">RFC 760</a>] DOD STANDARD INTERNET PROTOCOL.
                Obsoletes: IEN 26, IEN 28, IEN 41, IEN 44, IEN 54, IEN 80, IEN 111, IEN 123. 
[<a href="https://www.rfc-editor.org/rfc/rfc777.html">RFC 777</a>] Internet Control Message Protocol.
                Updates: IEN 109, IEN 128, <a href="https://www.rfc-editor.org/rfc/rfc760.html">RFC 760</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc778.html">RFC 778</a>] DCNET Internet Clock Service.
[<a href="https://www.rfc-editor.org/rfc/rfc792.html">RFC 792</a>] INTERNET CONTROL MESSAGE PROTOCOL.
                Updates: IEN 109, IEN 128, <a href="https://www.rfc-editor.org/rfc/rfc760.html">RFC 760</a>, <a href="https://www.rfc-editor.org/rfc/rfc777.html">RFC 777</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc816.html">RFC 816</a>] FAULT ISOLATION AND RECOVERY.
[<a href="https://www.rfc-editor.org/rfc/rfc844.html">RFC 844</a>] Who Talks ICMP, too? Survey of 18 February 1983.
[<a href="https://www.rfc-editor.org/rfc/rfc950.html">RFC 950</a>] IP Subnet Extension.
[<a href="https://www.rfc-editor.org/rfc/rfc1108.html">RFC 1108</a>] U.S. Department of Defense Security Options for the Internet Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1038.html">RFC 1038</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>] Requirements for Internet Hosts -- Communication Layers.
[<a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>] Requirements for Internet Hosts -- Application and Support.
[<a href="https://www.rfc-editor.org/rfc/rfc1127.html">RFC 1127</a>] A Perspective on the Host Requirements RFCs.
[<a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1191.html">RFC 1191</a>] Path MTU Discovery.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1063.html">RFC 1063</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1213.html">RFC 1213</a>] Management Information Base for Network Management of TCP/IP-based internets: MIB-II.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1158.html">RFC 1158</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1256.html">RFC 1256</a>] ICMP Router Discovery Messages.
[<a href="https://www.rfc-editor.org/rfc/rfc1393.html">RFC 1393</a>] Traceroute Using an IP Option.
[<a href="https://www.rfc-editor.org/rfc/rfc1435.html">RFC 1435</a>] IESG Advice from Experience with Path MTU Discovery.
[<a href="https://www.rfc-editor.org/rfc/rfc1475.html">RFC 1475</a>] TP/IX: The Next Internet.
[<a href="https://www.rfc-editor.org/rfc/rfc1788.html">RFC 1788</a>] ICMP Domain Name Messages.
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1009.html">RFC 1009</a>, <a href="https://www.rfc-editor.org/rfc/rfc1716.html">RFC 1716</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1940.html">RFC 1940</a>] Source Demand Routing: Packet Format and Forwarding Specification (Version 1).
[<a href="https://www.rfc-editor.org/rfc/rfc2003.html">RFC 2003</a>] IP Encapsulation within IP.
[<a href="https://www.rfc-editor.org/rfc/rfc2011.html">RFC 2011</a>] SNMPv2 Management Information Base for the Internet Protocol using SMIv2.
                Updates SNMP MIB iso.org.dod.internet.mgmt.mib-2.icmp (1.3.6.1.2.1.5). 
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.ipMIB (1.3.6.1.2.1.48). 
[<a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>] Security Architecture for the Internet Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1825.html">RFC 1825</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>] Definition of the Differentiated Services Field (DS Field) in the IPv4 and IPv6 Headers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1349.html">RFC 1349</a> 
[<a href="https://www.rfc-editor.org/rfc/rfc2521.html">RFC 2521</a>] ICMP Security Failures Messages.Defines security failure messages. 
[<a href="https://www.rfc-editor.org/rfc/rfc2765.html">RFC 2765</a>] Stateless IP/ICMP Translation Algorithm (SIIT).
[<a href="https://www.rfc-editor.org/rfc/rfc2780.html">RFC 2780</a>] IANA Allocation Guidelines For Values In the Internet Protocol and Related Headers.
[<a href="https://www.rfc-editor.org/rfc/rfc2893.html">RFC 2893</a>] Transition Mechanisms for IPv6 Hosts and Routers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3344.html">RFC 3344</a>] IP Mobility Support for IPv4.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc3220.html">RFC 3220</a>. <hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc985.html">RFC 985</a>] Requirements for Internet Gateways -- Draft.Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1009.html">RFC 1009</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1009.html">RFC 1009</a>] Requirements for Internet Gateways.Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc985.html">RFC 985</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1038.html">RFC 1038</a>] Draft Revised IP Security Option.Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1108.html">RFC 1108</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1063.html">RFC 1063</a>] IP MTU Discovery Options.Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1191.html">RFC 1191</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1349.html">RFC 1349</a>] Type of Service in the Internet Protocol Suite.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc791.html">RFC 791</a>, <a href="https://www.rfc-editor.org/rfc/rfc1060.html">RFC 1060</a>, <a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>, <a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>, <a href="https://www.rfc-editor.org/rfc/rfc1195.html">RFC 1195</a>, <a href="https://www.rfc-editor.org/rfc/rfc1247.html">RFC 1247</a>, <a href="https://www.rfc-editor.org/rfc/rfc1248.html">RFC 1248</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1716.html">RFC 1716</a>] Towards Requirements for IP Routers.Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1825.html">RFC 1825</a>] Security Architecture for the Internet Protocol
[<a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>] Transition Mechanisms for IPv6 Hosts and Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc2002.html">RFC 2002</a>] IP Mobility Support.
[<a href="https://www.rfc-editor.org/rfc/rfc3220.html">RFC 3220</a>] IP Mobility Support for IPv4.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2002.html">RFC 2002</a>. 
                		  </div>
		  
</section>


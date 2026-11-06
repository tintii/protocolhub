---
id: protocol-sctp
slug: sctp
name: SCTP
expandedName: Stream Control Transmission Protocol
origin: historical
provenance:
  source: protocols/protocol_SCTP.htm
  sha256: 0b31717464b984bde51c5ad81186deb2d216731edcf1571316bd931a95846d0c
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Stream Control Transmission Protocol
layers:
  - Transport Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Stream Control Transmission Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Transport Layer
  - label: SNMP MIBs
    html: |-
      iso.org.dod.internet.mgmt.mib-2.sctpMIB (1.3.6.1.2.1.104)
      <br />Working groups: sigtran, Signaling Transport
      <br />tsvwg, Transport Area Working Group
  - label: Ports
    html: '132'
  - label: Related protocols
    html: 'UDP,<br />TCP,<br />IP,<br />SS7/C7,<br />SIGTRAN'
originalUpdate: '2005-11-11 16:26:17'
rfcs:
  - 2960
  - 3257
  - 3286
  - 3309
  - 3436
  - 3554
  - 3708
  - 3758
  - 3873
  - 4138
related:
  - protocol-udp
  - protocol-tcp
  - protocol-ip
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

			SCTP is designed to transport PSTN signaling messages over IP networks, but is capable of broader applications. SCTP is a reliable transport protocol operating on top of a connectionless packet network such as IP. It offers the following services to its users:
<br /><ul><li>Acknowledged error-free non-duplicated transfer of user data. <br /></li>
<li>Data fragmentation to conform to discovered path MTU size. <br /></li>
<li>Sequenced delivery of user messages within multiple streams, with an option for order-of-arrival delivery of individual user messages. <br /></li>
<li>Optional bundling of multiple user messages into a single SCTP packet. <br /></li>
<li>Network-level fault tolerance through supporting of multi-homing at either or both ends of an association. </li></ul>
<br />
<br />The design of SCTP includes appropriate congestion avoidance behavior and resistance to flooding and masquerade attacks.
<br /><hr />
<br /><b>Functional View of SCTP</b>
<br />The SCTP transport service can be decomposed into a number of functions. These are depicted in the following illustration.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">                   SCTP User Application
         -----------------------------------------------------
          _____________                  ____________________
         |             |                | Sequenced delivery |
         | Association |                |   within streams   |
         |             |                |____________________|
         |   startup   |
         |             |         ____________________________
         |     and     |        |    User Data Fragmentation |
         |             |        |____________________________|
         |   takedown  |
         |             |         ____________________________
         |             |        |     Acknowledgement        |
         |             |        |          and               |
         |             |        |    Congestion Avoidance    |
         |             |        |____________________________|
         |             |
         |             |         ____________________________
         |             |        |       Chunk Bundling       |
         |             |        |____________________________|
         |             |
         |             |     ________________________________
         |             |    |      Packet Validation         |
         |             |    |________________________________|
         |             |
         |             |     ________________________________
         |             |    |     Path Management            |
         |_____________|    |________________________________|</pre>
<br />
<br /><ul><li><b>Association Startup and Takedown</b>
<br />An association is initiated by a request from the SCTP user. A cookie mechanism is employed during the initialization to provide protection against security attacks. The cookie mechanism uses a four-way handshake, the last two legs of which are allowed to carry user data for fast setup.
<br />
<br />SCTP provides for graceful close (i.e., shutdown) of an active association on request from the SCTP user. SCTP also allows ungraceful close (i.e., abort), either on request from the user (ABORT primitive) or as a result of an error condition detected within the SCTP layer. 
<br />
<br />SCTP does not support a half-open state (like TCP) wherein one side may continue sending data while the other end is closed. When either endpoint performs a shutdown, the association on each peer will stop accepting new data from its user and only deliver data in queue at the time of the graceful close.<br /><br /></li>

<li><b>Sequenced Delivery within Streams</b>
<br />The term "stream" is used in SCTP to refer to a sequence of user messages that are to be delivered to the upper-layer protocol in order with respect to other messages within the same stream. This is in contrast to its usage in TCP, where it refers to a sequence of bytes (in this document a byte is assumed to be eight bits).
<br />
<br />The SCTP user can specify at association startup time the number of streams to be supported by the association. This number is negotiated with the remote end. User messages are associated with stream numbers (send, receive primitives). Internally, SCTP assigns a stream sequence number to each message passed to it by the SCTP user. On the receiving side, SCTP ensures that messages are delivered to the SCTP user in sequence within a given stream. However, while one stream may be blocked waiting for the next in-sequence user message, delivery from other streams may proceed.
<br />
<br />SCTP provides a mechanism for bypassing the sequenced delivery service. User messages sent using this mechanism are delivered to the SCTP user as soon as they are received.<br /><br /></li>

<li><b>User Data Fragmentation</b>
<br />When needed, SCTP fragments user messages to ensure that the SCTP packet passed to the lower layer conforms to the path MTU. On receipt, fragments are reassembled into complete messages before being passed to the SCTP user.<br /><br /></li>

<li><b>Acknowledgement and Congestion Avoidance</b>
<br />SCTP assigns a Transmission Sequence Number (TSN) to each user data fragment or unfragmented message. The TSN is independent of any stream sequence number assigned at the stream level. The receiving end acknowledges all TSNs received, even if there are gaps in the sequence. In this way, reliable delivery is kept functionally separate from sequenced stream delivery.
<br />
<br />The acknowledgement and congestion avoidance function is responsible for packet retransmission when timely acknowledgement has not been received. Packet retransmission is conditioned by congestion avoidance procedures similar to those used for TCP. <br /><br /></li>

<li><b>Chunk Bundling</b>
<br />The SCTP packet as delivered to the lower layer consists of a common header followed by one or more chunks. Each chunk may contain either user data or SCTP control information. The SCTP user has the option to request bundling of more than one user messages into a single SCTP packet. The chunk bundling function of SCTP is responsible for assembly of the complete SCTP packet and its disassembly at the receiving end.
<br />
<br />During times of congestion an SCTP implementation MAY still perform bundling even if the user has requested that SCTP not bundle. The user's disabling of bundling only affects SCTP implementations that may delay a small period of time before transmission (to attempt to encourage bundling). When the user layer disables bundling, this small delay is prohibited but not bundling that is performed during congestion or retransmission.<br /><br /></li>

<li><b>Packet Validation</b>
<br />A mandatory Verification Tag field and a 32 bit checksum field are included in the SCTP common header. The Verification Tag value is chosen by each end of the association during association startup. Packets received without the expected Verification Tag value are discarded, as a protection against blind masquerade attacks and against stale SCTP packets from a previous association. <br /><br /></li>

<li><b>Path Management</b>
<br />The sending SCTP user is able to manipulate the set of transport addresses used as destinations for SCTP packets. The SCTP path management function chooses the destination transport address for each outgoing SCTP packet based on the SCTP user's instructions and the currently perceived reachability status of the eligible destination set. The path management function monitors reachability through heartbeats when other packet traffic is inadequate to provide this information and advises the SCTP user when reachability of any far-end transport address changes. The path management function is also responsible for reporting the eligible set of local transport addresses to the far end during association startup, and for reporting the transport addresses returned from the far end to the SCTP user.
<br />
<br />At association start-up, a primary path is defined for each SCTP endpoint, and is used for normal sending of SCTP packets.
<br />
<br />On the receiving end, the path management is responsible for verifying the existence of a valid SCTP association to which the inbound SCTP packet belongs before passing it for further processing.
<br />
<br />Note: Path Management and Packet Validation are done at the same time, so although described separately above, in reality they cannot be performed as separate items.</li></ul>
<br /><hr />
<br /><b>SCTP header format</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>16</p></td><td><p>32 bit</p></td></tr><tr><td><p>Source Port Number</p></td><td><p>Destination Port Number</p></td></tr><tr><td colspan="2"><p>Verification Tag</p></td></tr><tr><td colspan="2"><p>Checksum</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Source Port Number</b>
<br />This is the SCTP sender's port number. It can be used by the receiver, in combination with the source IP Address, to identify the association to which this datagram belongs.<br /><br /></li>

<li><b>Destination Port Number</b>
<br />This is the SCTP port number to which this datagram is destined. The receiving host will use this port number to de-multiplex the SCTP datagram to the correct receiving endpoint/application.<br /><br /></li>

<li><b>Verification Tag</b>
<br />The receiver of this 32 bit datagram uses the Verification tag to identify the association. On transmit, the value of this Verification tag must be set to the value of the Initiate tag received from the peer endpoint during the association initialization.
<br />
<br />For datagrams carrying the INIT chunk, the transmitter sets the Verification tag to all 0's. If the receiver receives a datagram with an all-zeros Verification tag field, it checks the Chunk ID immediately following the common header. If the chunk type is not INIT or SHUTDOWN ACK, the receiver drops the datagram. For datagrams carrying the SHUTDOWN-ACK chunk, the transmitter sets the Verification tag to the Initiate tag received from the peer endpoint during the association initialization, if known. Otherwise the Verification tag is set to all 0's.<br /><br /></li>

<li><b>Checksum</b>
<br />Contains the checksum of this SCTP packet. SCTP uses the Adler-32 algorithm for calculating the checksum.</li></ul>
<br />
<br /><b>Chunk Field Descriptions</b>
<br />The figure below illustrates the field format for the chunks to be transmitted in the SCTP packet.  Each chunk is formatted with a Chunk Type field, a chunk-specific Flag field, a Chunk Length field, and a Value field.
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32 bit</p></td></tr><tr><td><p>Chunk Type</p></td><td><p>Chunk Flags</p></td><td><p>Chunk Length</p></td></tr><tr><td colspan="3"><p>Chunk Value (variable)</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Chunk Type</b>
<br />Identifies the type of information contained in the Chunk data. The value of 255 is reserved for future use as an extension field.
<br />
<br />Chunk types are encoded such that the highest-order two bits specify the action that must be taken if the processing endpoint does not recognize the Chunk type.<br /></li>
<li><ul><li>00 - Stop processing this SCTP packet and discard it, do not process any further chunks within it. <br /></li>
<li>01 - Stop processing this SCTP packet and discard it, do not process any further chunks within it, and report the unrecognized parameter in an 'Unrecognized Parameter Type' (in either an ERROR or in the INIT ACK). <br /></li>
<li>10 - Skip this chunk and continue processing. <br /></li>
<li>11 - Skip this chunk and continue processing, but report in an ERROR Chunk using the 'Unrecognized Chunk Type' cause of error. </li></ul><br /></li>
<li>The total length of a chunk MUST be a multiple of 4 bytes. If the length of the chunk is not a multiple of 4 bytes, the sender MUST pad the chunk with all zero bytes and this padding is not included in the chunk length field. The sender should never pad with more than 3 bytes. The receiver MUST ignore the padding bytes.
<br /><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Chunk type</td><td>Description</td></tr><tr><td>0</td><td>DATA, Payload Data.</td></tr><tr><td>1</td><td>INIT, Initiation.</td></tr><tr><td>2</td><td>INIT ACK, Initiation Acknowledgement.</td></tr><tr><td>3</td><td>SACK, Selective Acknowledgement.</td></tr><tr><td>4</td><td>HEARTBEAT, Heartbeat Request.</td></tr><tr><td>5</td><td>HEARTBEAT ACK, Heartbeat Acknowledgement.</td></tr><tr><td>6</td><td>ABORT, Abort.</td></tr><tr><td>7</td><td>SHUTDOWN, Shutdown.</td></tr><tr><td>8</td><td>SHUTDOWN ACK, Shutdown Acknowledgement.</td></tr><tr><td>9</td><td>ERROR, Operation Error.</td></tr><tr><td>10</td><td>COOKIE ECHO, State Cookie.</td></tr><tr><td>11</td><td>COOKIE ACK, Cookie Acknowledgement.</td></tr><tr><td>12</td><td>ECNE, Reserved for Explicit Congestion Notification Echo.</td></tr><tr><td>13</td><td>CWR, Reserved for Congestion Window Reduced.</td></tr><tr><td>14</td><td>SHUTDOWN COMPLETE, Shutdown Complete.</td></tr><tr><td>15-191</td><td> </td></tr><tr><td>192</td><td>Forward TSN.</td></tr><tr><td>193-255</td><td> </td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Chunk Flags</b>
<br />The usage of these bits depends on the chunk type as given by the Chunk Type. Unless otherwise specified, they are set to zero on transmit and are ignored on receipt.<br /><br /></li>

<li><b>Chunk Length</b>
<br />This value represents the size of the chunk in bytes including the Chunk Type, Chunk Flags, Chunk Length, and Chunk Value fields. Therefore, if the Chunk Value field is zero-length, the Length field will be set to 4. The Chunk Length field does not count any padding.<br /><br /></li>

<li><b>Chunk Value</b>
<br />The Chunk Value field contains the actual information to be transferred in the chunk. The usage and format of this field is dependent on the Chunk Type.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Normal Association Establishment</b>

In the following example, "A" initiates the association and then sends a user message 
to "Z", then "Z" sends two user messages to "A" later (assuming no bundling or 
fragmentation occurs):

          Endpoint A                                          Endpoint Z
          {app sets association with Z}
          (build TCB)
          INIT [I-Tag=Tag_A
                &amp; other info]  --------
          (Start T1-init timer)         
          (Enter COOKIE-WAIT state)      ---&gt; (compose temp TCB and Cookie_Z)

                                          /--- INIT ACK [Veri Tag=Tag_A,
                                         /              I-Tag=Tag_Z,
          (Cancel T1-init timer) &lt;------/               Cookie_Z, &amp; other info]
                                               (destroy temp TCB)
          COOKIE ECHO [Cookie_Z] ------
          (Start T1-init timer)         
          (Enter COOKIE-ECHOED state)    ---&gt; (build TCB enter ESTABLISHED state)

                                         /---- COOKIE-ACK
                                        /
          (Cancel T1-init timer, &lt;-----/
           Enter ESTABLISHED state)
          {app sends 1st user data; strm 0}
          DATA [TSN=initial TSN_A
              Strm=0,Seq=1 &amp; user data]--
           (Start T3-rtx timer)            
                                            -&gt;
                                        /----- SACK [TSN Ack=init
                                                    TSN_A,Block=0]
          (Cancel T3-rtx timer) &lt;------/

                                               ...
                                               {app sends 2 messages;strm 0}
                                         /---- DATA
                                        /        [TSN=init TSN_Z
                                    &lt;--/          Strm=0,Seq=1 &amp; user data 1]
          SACK [TSN Ack=init TSN_Z,      /---- DATA
                Block=0]     --------  /        [TSN=init TSN_Z +1,
                                      /          Strm=0,Seq=2 &amp; user data 2]
                               &lt;------/
                                        
                                         ------&gt;

If the T1-init timer expires at "A" after the INIT or COOKIE ECHO chunks are sent, the 
same INIT or COOKIE ECHO chunk with the same Initiate Tag (i.e., Tag_A) or State 
Cookie shall be retransmitted and the timer restarted. This shall be repeated 
Max.Init.Retransmits times before "A" considers "Z" unreachable and reports the failure 
to its upper layer (and thus the association enters the CLOSED state).</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Association Restart</b>

In the following example, "A" initiates the association after a restart has 
occurred. Endpoint "Z" had no knowledge of the restart until the exchange 
(i.e. Heartbeats had not yet detected the failure of "A"). (assuming no 
bundling or fragmentation occurs):

          Endpoint A                                          Endpoint Z
          &lt;-------------- Association is established----------------------&gt;
          Tag=Tag_A                                             Tag=Tag_Z
          &lt;---------------------------------------------------------------&gt;
          {A crashes and restarts}
          {app sets up a association with Z}
          (build TCB)
          INIT [I-Tag=Tag_A'
                &amp; other info]  --------
          (Start T1-init timer)         
          (Enter COOKIE-WAIT state)      ---&gt; (find a existing TCB
                                                compose temp TCB and Cookie_Z
                                                with Tie-Tags to previous
                                                association)
                                          /--- INIT ACK [Veri Tag=Tag_A',
                                         /               I-Tag=Tag_Z',
          (Cancel T1-init timer) &lt;------/                Cookie_Z[TieTags=
                                                         Tag_A,Tag_Z
                                                          &amp; other info]
                                               (destroy temp TCB,leave original in place)
          COOKIE ECHO [Veri=Tag_Z',
                       Cookie_Z
                       Tie=Tag_A,
                       Tag_Z]----------
          (Start T1-init timer)         
          (Enter COOKIE-ECHOED state)    ---&gt; (Find existing association,
                                                Tie-Tags match old tags,
                                                Tags do not match i.e.
                                                case X X M M above,
                                                Announce Restart to ULP
                                                and reset association).
                                         /---- COOKIE-ACK
                                        /
          (Cancel T1-init timer, &lt;-----/ Enter ESTABLISHED state)
          {app sends 1st user data; strm 0}
          DATA [TSN=initial TSN_A
               Strm=0,Seq=1 &amp; user data]--
          (Start T3-rtx timer)            
                                           -&gt;
                                        /----- SACK [TSN Ack=init TSN_A,Block=0]
          (Cancel T3-rtx timer) &lt;------/</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SCTP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Bundling</b><br />Bundling is an optional multiplexing operation, whereby more than one user message may be carried in the same SCTP packet. Each user message occupies its own DATA chunk.<br /><br /><b>Chunk</b><br />Chunk is a unit of information within an SCTP packet, consisting of a chunk header and chunk-specific content.<br /><br /><b>Cookie</b><br />A cookie is a random number used by a mobile node to prevent spoofing by a bogus correspondent node in the return routability procedure.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>MTU</b><br />MTU (Maximum transmission unit) is the size of the largest packet that can be transmitted over a particular medium. Packets exceeding the MTU value in size are fragmented or segmented, and then reassembled at the receiving end. If fragmentation is not supported or possible, a packet that exceeds the MTU value is dropped.<br /><br /><b>PSTN</b><br />PSTN (Public Switched Telephone Network), which refers to the international telephone system based on copper wires carrying analog voice data. This is in contrast to newer telephone networks base on digital technologies, such as ISDN and FDDI.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>Path</b><br />The route taken by the SCTP packets sent by one SCTP endpoint to a specific destination transport address of its peer SCTP endpoint. Sending to different destination transport addresses does not necessarily guarantee getting separate paths.<br /><br /><b>SCTP</b><br />SCTP (Stream Control Transmission Protocol) is a type of mobility management for IP-based networks that focuses on the transport and session layers, rather the network layer. SCTP, in general terms, is a reliable transport protocol operating on top of potentially unreliable connectionless packet service.<br /><br /><b>Service</b><br />The NAS provides a service to the dial-in user, such as PPP or Telnet.<br /><br /><b>Stream</b><br />Stream is a uni-directional logical channel established from one to another associated SCTP endpoint, within which all user messages are delivered in sequence except for those submitted to the unordered delivery service.<br /><br /><b>TSN</b><br />Transmission Sequence Number (TSN) is a 32-bit sequence number used internally by SCTP. One TSN is attached to each chunk containing user data to permit the receiving SCTP endpoint to acknowledge its receipt and detect duplicate deliveries.<br /><br /><b>Transport address</b><br />The Transport Address is traditionally defined by Network Layer address, Transport Layer protocol and Transport Layer port number. In the case of SCTP running over IP, a transport address is defined by the combination of an IP address and an SCTP port number (where SCTP is the Transport protocol).<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/sctp-parameters">SCTP parameters</a>
                <a href="https://www.sctp.org/www_sctp_default.html">sctp.org</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2960.html">RFC 2960</a>] Stream Control Transmission Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc3257.html">RFC 3257</a>] Stream Control Transmission Protocol Applicability Statement.
[<a href="https://www.rfc-editor.org/rfc/rfc3286.html">RFC 3286</a>] An Introduction to the Stream Control Transmission Protocol (SCTP).
[<a href="https://www.rfc-editor.org/rfc/rfc3309.html">RFC 3309</a>] Stream Control Transmission Protocol (SCTP) Checksum Change.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2960.html">RFC 2960</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3436.html">RFC 3436</a>] Transport Layer Security over Stream Control Transmission Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc3554.html">RFC 3554</a>] On the Use of Stream Control Transmission Protocol (SCTP) with IPsec.
[<a href="https://www.rfc-editor.org/rfc/rfc3708.html">RFC 3708</a>] Using TCP Duplicate Selective Acknowledgement (DSACKs) and Stream Control Transmission Protocol (SCTP) Duplicate Transmission Sequence Numbers (TSNs) to Detect Spurious Retransmissions.
[<a href="https://www.rfc-editor.org/rfc/rfc3758.html">RFC 3758</a>] Stream Control Transmission Protocol (SCTP) Partial Reliability Extension.
                Defines SCTP chunk type 192 (Forward TSN). 
[<a href="https://www.rfc-editor.org/rfc/rfc3873.html">RFC 3873</a>] Stream Control Transmission Protocol (SCTP) Management Information Base (MIB).
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.sctpMIB (1.3.6.1.2.1.104). 
[<a href="https://www.rfc-editor.org/rfc/rfc4138.html">RFC 4138</a>] Forward RTO-Recovery (F-RTO): An Algorithm for Detecting Spurious Retransmission Timeouts with TCP and the Stream Control Transmission Protocol (SCTP).<hr /><b>Publications:</b>
[ISBN 0201721864] Stream Control Transmission Protocol (SCTP).
                		  </div>
		  
</section>


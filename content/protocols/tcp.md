---
id: protocol-tcp
slug: tcp
name: TCP
expandedName: Transmission Control Protocol
origin: historical
provenance:
  source: protocols/protocol_TCP.htm
  sha256: 8c21fa1a24a022829ce7f75ca7b97f63357c95a156f00de1287e929027847951
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Transmission Control Protocol
layers:
  - Transport Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Transmission Control Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Transport Layer
  - label: Type
    html: Connection oriented byte stream protocol
  - label: Latest Version
    html: '6'
  - label: SNMP MIBs
    html: |-
      iso.org.dod.internet.mgmt.mib-2.tcp (1.3.6.1.2.1.6). 
      <br />iso.org.dod.internet.mgmt.mib-2.tcpMIB (1.3.6.1.2.1.49)
      <br />
  - label: Related protocols
    html: 'IP,<br />IPv6,<br />UDP,<br />ICMP,<br />FTP,<br />TELNET,<br />SMTP,<br />ARP,<br />RARP,<br />RPC'
  - label: Working groups
    html: |-
      Pilc, Performance Implications of Link Characteristics
      <br />Tcpimpl, TCP Implementation
      <br />Tcpm, TCP Maintenance and Minor Extensions
      <br />Tsvwg, Transport Area Working Group
originalUpdate: '2005-11-10 16:11:46'
rfcs:
  - 721
  - 761
  - 793
  - 801
  - 813
  - 816
  - 832
  - 833
  - 834
  - 835
  - 836
  - 837
  - 838
  - 839
  - 842
  - 843
  - 845
  - 846
  - 872
  - 879
  - 889
  - 896
  - 939
  - 942
  - 962
  - 964
  - 1006
  - 1025
  - 1063
  - 1066
  - 1072
  - 1106
  - 1110
  - 1122
  - 1144
  - 1145
  - 1146
  - 1156
  - 1158
  - 1180
  - 1185
  - 1191
  - 1213
  - 1263
  - 1323
  - 1337
  - 1347
  - 1379
  - 1475
  - 1644
  - 1693
  - 1705
  - 1791
  - 1812
  - 1858
  - 1859
  - 1883
  - 1948
  - 1981
  - 2001
  - 2012
  - 2018
  - 2126
  - 2140
  - 2147
  - 2385
  - 2401
  - 2414
  - 2415
  - 2416
  - 2452
  - 2460
  - 2474
  - 2481
  - 2488
  - 2507
  - 2525
  - 2581
  - 2582
  - 2675
  - 2757
  - 2760
  - 2780
  - 2861
  - 2873
  - 2883
  - 2884
  - 2914
  - 2923
  - 2988
  - 2990
  - 3042
  - 3081
  - 3128
  - 3135
  - 3148
  - 3150
  - 3155
  - 3168
  - 3360
  - 3390
  - 3430
  - 3448
  - 3449
  - 3465
  - 3481
  - 3517
  - 3522
  - 3540
  - 3562
  - 3649
  - 3708
  - 3742
  - 3782
related:
  - protocol-ip
  - protocol-ipv6
  - protocol-udp
  - protocol-icmp
  - protocol-ftp
  - protocol-telnet
  - protocol-smtp
  - protocol-arp
  - protocol-rarp
  - protocol-rpc
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

			TCP is typically used by applications that require guaranteed delivery. It is a sliding window protocol that provides handling for both timeouts and retransmissions.
<br />
<br />TCP provides a reliable stream delivery and virtual connection service to applications through the use of sequenced acknowledgment with retransmission of packets when necessary. TCP establishes a full duplex virtual connection between two endpoints. Each endpoint is defined by an IP address and a TCP port number and is implemented as a finite state machine.The protocol suite gets its name because most TCP/IP protocols are based on TCP, which is in turn based on IP. TCP and IP are the twin pillars of TCP/IP.
<br /><hr />
<br /><b>Operation</b>
<br />The primary purpose of the TCP is to provide reliable, securable logical circuit or connection service between pairs of processes. To provide this service on top of a less reliable internet communication system requires facilities in the following areas:
<br />
<br /><ul><li><b>Basic Data Transfer</b><br /></li>
<li>The TCP is able to transfer a continuous stream of octets in each direction between its users by packaging some number of octets into segments for transmission through the internet system.  In general, the TCPs decide when to block and forward data at their own convenience.
<br /><br /></li>
<li>Sometimes users need to be sure that all the data they have submitted to the TCP has been transmitted.  For this purpose a push function is defined. To assure that data submitted to a TCP is actually transmitted the sending user indicates that it should be pushed through to the receiving user. A push causes the TCPs to promptly forward and deliver data up to that point to the receiver. The exact push point might not be visible to the receiving user and the push function does not supply a record boundary marker.
<br /><br /></li>
<li><b></b></li><li><b>TCP Reliability</b><br /></li>
<li>TCP reliability depends upon the existence of a bound on the lifetime of a segment: the "Maximum Segment Lifetime" or MSL. An MSL is generally required by any reliable transport protocol, since every sequence number field must be finite, and therefore any sequence number may eventually be reused.  In the Internet protocol suite, the MSL bound is enforced by an IP-layer mechanism, the "Time-to-Live" or TTL field.
<br /></li><li>Duplication of sequence numbers might happen in either of two ways:
<br /></li><li><ul><li>Sequence number wrap-around on the current connection
<br />A TCP sequence number contains 32 bits.  At a high enough transfer rate, the 32-bit sequence space may be "wrapped" (cycled) within the time that a segment is delayed in queues.<br /><br /></li>

<li>Earlier incarnation of the connection
<br />Suppose that a connection terminates, either by a proper close sequence or due to a host crash, and the same connection (i.e., using the same pair of sockets) is immediately reopened.  A delayed segment from the terminated connection could fall within the current window for the new incarnation and be accepted as valid.</li></ul><br /></li>
<li><b>Flow Control</b><br /></li>
<li>TCP provides a means for the receiver to govern the amount of data sent by the sender. This is achieved by returning a "window" with every ACK indicating a range of acceptable sequence numbers beyond the last segment successfully received.  The window indicates an allowed number of octets that the sender may transmit before receiving further permission.
<br /><br /></li>
<li><b>Multiplexing</b><br /></li>
<li>To allow for many processes within a single Host to use TCP communication facilities simultaneously, the TCP provides a set of addresses or ports within each host. Concatenated with the network and host addresses from the internet communication layer, this forms a socket. A pair of sockets uniquely identifies each connection. That is, a socket may be simultaneously used in multiple connections.
<br /></li><li>The binding of ports to processes is handled independently by each Host. However, it proves useful to attach frequently used processes (e.g., a "logger" or timesharing service) to fixed sockets which are made known to the public.  These services can then be accessed through the known addresses.  Establishing and learning the port addresses of other processes may involve more dynamic mechanisms.
<br /><br /></li>
<li><b>Connections</b><br /></li>
<li>The reliability and flow control mechanisms described above require that TCPs initialize and maintain certain status information for each data stream.  The combination of this information, including sockets, sequence numbers, and window sizes, is called a connection. Each connection is uniquely specified by a pair of sockets identifying its two sides.
<br /></li><li>When two processes wish to communicate, their TCP's must first establish a connection (initialize the status information on each side). When their communication is complete, the connection is terminated or closed to free the resources for other uses.
<br /></li><li>Since connections must be established between unreliable hosts and over the unreliable internet communication system, a handshake mechanism with clock-based sequence numbers is used to avoid erroneous initialization of connections.
<br /><br /></li>
<li><b>Precedence and Security</b><br /></li>
<li>The users of TCP may indicate the security and precedence of their communication.  Provision is made for default values to be used when these features are not needed.</li></ul>
<br />
<br /><b>Full-duplex Operation</b>
<br />No matter what the particular application, TCP almost always operates full-duplex. The algorithms described below operate in both directions, in an almost completely independent manner. It's sometimes useful to think of a TCP session as two independent byte streams, traveling in opposite directions. No TCP mechanism exists to associate data in the forward and reverse byte streams. Only during connection start and close sequences can TCP exhibit asymmetric behavior (i.e. data transfer in the forward direction but not in the reverse, or vice versa). 
<br /><hr />
<br /><b>Window Size and Buffering</b>
<br />Each endpoint of a TCP connection will have a buffer for storing data that is transmitted over the network before the application is ready to read the data. This lets network transfers take place while applications are busy with other processing, improving overall performance. 
<br />
<br />To avoid overflowing the buffer, TCP sets a Window Size field in each packet it transmits. This field contains the amount of data that may be transmitted into the buffer. If this number falls to zero, the remote TCP can send no more data. It must wait until buffer space becomes available and it receives a packet announcing a non-zero window size. 
<br />
<br />Sometimes, the buffer space is too small. This happens when the network's bandwidth-delay product exceeds the buffer size. The simplest solution is to increase the buffer, but for extreme cases the protocol itself becomes the bottleneck (because it doesn't support a large enough Window Size). Under these conditions, the network is termed an LFN (Long Fat Network - pronounced elephant). 
<br />
<br /><b>Round-Trip Time Estimation</b>
<br />When a host transmits a TCP packet to its peer, it must wait a period of time for an acknowledgment. If the reply does not come within the expected period, the packet is assumed to have been lost and the data is retransmitted. The obvious question - How long do we wait? - lacks a simple answer. Over an Ethernet, no more than a few microseconds should be needed for a reply. If the traffic must flow over the wide-area Internet, a second or two might be reasonable during peak utilization times. If we're talking to an instrument package on a satellite hurtling toward Mars, minutes might be required before a reply. There is no one answer to the question - How long? 
<br />
<br />All modern TCP implementations seek to answer this question by monitoring the normal exchange of data packets and developing an estimate of how long is "too long". This process is called Round-Trip Time (RTT) estimation. RTT estimates are one of the most important performance parameters in a TCP exchange, especially when you consider that on an indefinitely large transfer, all TCP implementations eventually drop packets and retransmit them, no matter how good the quality of the link. If the RTT estimate is too low, packets are retransmitted unnecessarily; if too high, the connection can sit idle while the host waits to timeout.
<br /><hr />
<br /><b>The TCP Header Structure</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td colspan="8"><p>16 </p></td><td><p>32 bits </p></td></tr><tr><td colspan="8"><p>Source port </p></td><td><p>Destination port </p></td></tr><tr><td colspan="9"><p>Sequence number </p></td></tr><tr><td colspan="9"><p>Acknowledgement number </p></td></tr><tr><td><p>Offset </p></td><td><p>Reserved </p></td><td><p>U </p></td><td><p>A </p></td><td><p>P </p></td><td><p>R </p></td><td><p>S </p></td><td><p>F </p></td><td><p>Window </p></td></tr><tr><td colspan="8"><p>Checksum </p></td><td><p>Urgent pointer </p></td></tr><tr><td colspan="9"><p>Option + Padding </p></td></tr><tr><td colspan="9"><p>Data </p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Source Port</b><br /></li>
<li>16 bits. Source port number.
<br /><br /></li>
<li><b>Destination Port</b><br /></li>
<li>16 bits. Destination port number.
<br /><br /></li>
<li><b>Sequence Number</b><br /></li>
<li>32 bits. The sequence number of the first data octet in this segment (except when SYN is present). If SYN is present, the sequence number is the initial sequence number (ISN) and the first data octet is ISN+1.
<br /><br /></li>
<li><b>Acknowledgment Number</b><br /></li>
<li>32 bits. If the ACK control bit is set, this field contains the value of the next sequence number which the sender of the segment is expecting to receive. Once a connection is established, this value is always sent.
<br /><br /></li>
<li><b>Data Offset</b><br /></li>
<li>4 bits. The number of 32-bit words in the TCP header. This indicates where the data begins. The length of the TCP header is always a multiple of 32 bits.
<br /><br /></li>
<li><b>Reserved</b><br /></li>
<li>6 bits. Reserved for future use. Must be cleared to zero.
<br /><br /></li>
<li><b>Control</b><br /></li>
<li>6 bits. The control bits may be (from right to left):
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>U (URG)</td><td>Urgent pointer field significant.</td></tr><tr><td>A (ACK)</td><td>Acknowledgment field significant.</td></tr><tr><td>P (PSH)</td><td>Push function.</td></tr><tr><td>R (RST) </td><td>Reset the connection. </td></tr><tr><td>S (SYN)</td><td>Synchronize sequence numbers.</td></tr><tr><td>F (FIN)</td><td>No more data from sender.</td></tr></tbody></table></div></div><br /></li>
<li><b>Window</b><br /></li>
<li>16 bits. It specifies the size of the sender's receive window, that is, the buffer space available in octets for incoming data.
<br /><br /></li>
<li><b>Checksum</b><br /></li>
<li>16 bits. The checksum field is the 16 bit one¡¯s complement of the one¡¯s complement sum of all 16-bit words in the header and text. If a segment contains an odd number of header and text octets to be checksummed, the last octet is padded on the right with zeros to form a 16-bit word for checksum purposes. The pad is not transmitted as part of the segment. While computing the checksum, the checksum field itself is replaced with zeros.
<br /><br /></li>
<li><b>Urgent Pointer</b><br /></li>
<li>16 bits. This field communicates the current value of the urgent pointer as a positive offset from the sequence number in this segment. The urgent pointer points to the sequence number of the octet following the urgent data. This field can only be interpreted in segments for which the URG control bit has been set.
<br /><br /></li>
<li><b>Options</b><br /></li>
<li>Options may be transmitted at the end of the TCP header and always have a length which is a multiple of 8 bits. All options are included in the checksum. An option may begin on any octet boundary.
<br /></li><li>There are two possible formats for an option: 
<br /></li><li><ul><li>A single octet of option type.<br /></li>
<li>An octet of option type, an octet of option length, and the actual option data octets.</li></ul><br /></li> 
<li>The option length includes the option type and option length, as well as the option data octets. The list of options may be shorter than that designated by the data offset field because the contents of the header beyond the End-of-Option option must be header padding i.e., zero.
<br /><br /></li>
<li><b>Padding</b><br /></li>
<li>Variable length. The TCP header padding is used to ensure that the TCP header ends and data begins on a 32 bit boundary. The padding is composed of zeros. The TCP header must be padded with zeros to make the header length a multiple of 32 bits.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Kind</td><td>Length</td><td>Description</td></tr><tr><td>0</td><td>1</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option000.htm">End of option list</a>.</td></tr><tr><td>1</td><td>1</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option001.htm">No operation</a>.</td></tr><tr><td>2</td><td>4</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option002.htm">Maximum Segment Size</a>.</td></tr><tr><td>3</td><td>3</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option003.htm">Window scale factor</a>.</td></tr><tr><td>4</td><td>2</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option004.htm">SACK permitted</a>.</td></tr><tr><td>5</td><td>Variable.</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option005.htm">SACK</a>.</td></tr><tr><td>6</td><td>6</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option006.htm">Echo</a>.</td></tr><tr><td>7</td><td>6</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option007.htm">Echo reply</a>.</td></tr><tr><td>8</td><td>10</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option008.htm">Timestamp</a>.</td></tr><tr><td>9</td><td>2</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option009.htm">Partial Order Connection Permitted</a>.</td></tr><tr><td>10</td><td>3</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option010.htm">Partial Order Service Profile</a>.</td></tr><tr><td>11</td><td>6</td><td>CC, Connection Count.</td></tr><tr><td>12</td><td>6</td><td>CC.NEW</td></tr><tr><td>13</td><td>6</td><td>CC.ECHO</td></tr><tr><td>14</td><td>3</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option014.htm">TCP Alternate Checksum Request</a>.</td></tr><tr><td>15</td><td>Variable.</td><td><a href="https://www.networksorcery.com/enp/protocol/tcp/option015.htm">TCP Alternate Checksum Data</a>.</td></tr><tr><td>16</td><td> </td><td>Skeeter.</td></tr><tr><td>17</td><td> </td><td>Bubba.</td></tr><tr><td>18</td><td>3</td><td>Trailer Checksum Option.</td></tr><tr><td>19</td><td>18</td><td>MD5 signature.</td></tr><tr><td>20</td><td> </td><td>SCPS Capabilities.</td></tr><tr><td>21</td><td> </td><td>Selective Negative Acknowledgements.</td></tr><tr><td>22</td><td> </td><td>Record Boundaries.</td></tr><tr><td>23</td><td> </td><td>Corruption experienced.</td></tr><tr><td>24</td><td> </td><td>SNAP.</td></tr><tr><td>25</td><td> </td><td> </td></tr><tr><td>26</td><td> </td><td>TCP Compression Filter.</td></tr></tbody></table></div></div><br /></li>
<li><b>Data</b><br /></li>
<li>Variable length. TCP data or higher layer protocol.</li></ul>
<br /><hr />
<br /><b>TCP Connection State Diagram</b>
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">
                              +---------+ ---------      active OPEN  
                              |  CLOSED |                -----------  
                              +---------+&lt;---------      create TCB  
                                |     ^                   snd SYN    
                   passive OPEN |     |   CLOSE                      
                   ------------ |     | ----------                   
                    create TCB  |     | delete TCB                   
                                V     |                              
                              +---------+            CLOSE    |       
                              |  LISTEN |          ---------- |     |  
                              +---------+          delete TCB |     |  
                   rcv SYN      |     |     SEND              |     |  
                  -----------   |     |    -------            |     V  
 +---------+      snd SYN,ACK  /          snd SYN          +---------+
 |         |&lt;-----------------           ------------------&gt;|         |
 |   SYN   |                    rcv SYN                     |   SYN   |
 |   RCVD  |&lt;-----------------------------------------------|   SENT  |
 |         |                    snd ACK                     |         |
 |         |------------------           -------------------|         |
 +---------+   rcv ACK of SYN         /  rcv SYN,ACK       +---------+
   |           --------------   |     |   -----------                  
   |                  x         |     |     snd ACK                    
   |                            V     V                                
   |  CLOSE                   +---------+                              
   | -------                  |  ESTAB  |                              
   | snd FIN                  +---------+                              
   |                   CLOSE    |     |    rcv FIN                     
   V                  -------   |     |    -------                     
 +---------+          snd FIN  /          snd ACK          +---------+
 |  FIN    |&lt;-----------------           ------------------&gt;|  CLOSE  |
 | WAIT-1  |------------------                              |   WAIT  |
 +---------+          rcv FIN                              +---------+
   | rcv ACK of FIN   -------   |                            CLOSE  |  
   | --------------   snd ACK   |                           ------- |  
   V        x                   V                           snd FIN V  
 +---------+                  +---------+                   +---------+
 |FINWAIT-2|                  | CLOSING |                   | LAST-ACK|
 +---------+                  +---------+                   +---------+
   |                rcv ACK of FIN |                 rcv ACK of FIN |  
   |  rcv FIN       -------------- |    Timeout=2MSL -------------- |  
   |  -------              x       V    ------------        x       V  
     snd ACK                 +---------+delete TCB         +---------+
     ------------------------&gt;|TIME WAIT|------------------&gt;| CLOSED  |
                              +---------+                   +---------+
</pre>
<br /><hr />
<br /><b>Sequence Numbers</b>
<br />TCP uses a 32-bit sequence number that counts bytes in the data stream. Each TCP packet contains the starting sequence number of the data in that packet, and the sequence number (called the acknowledgment number) of the last byte received from the remote peer. With this information, a sliding-window protocol is implemented. Forward and reverse sequence numbers are completely independent, and each TCP peer must track both its own sequence numbering and the numbering being used by the remote peer. 
<br />
<br />TCP uses a number of control flags to manage the connection. Some of these flags pertain to a single packet, such as the URG flag indicating valid data in the Urgent Pointer field, but two flags (SYN and FIN), require reliable delivery as they mark the beginning and end of the data stream. In order to insure reliable delivery of these two flags, they are assigned spots in the sequence number space. Each flag occupies a single byte. 
<br />
<br />The typical kinds of sequence number comparisons which the TCP must perform include:
<br /><ul><li>Determining that an acknowledgment refers to some sequence number sent but not yet acknowledged.<br /></li>
<li>Determining that all sequence numbers occupied by a segment have been acknowledged (e.g., to remove the segment from a retransmission queue).<br /></li>
<li>Determining that an incoming segment contains sequence numbers which are expected (i.e., that the segment "overlaps" the receive window).</li></ul>
<br />In response to sending data the TCP will receive acknowledgments. The following comparisons are needed to process the acknowledgments.
<br /><ul><li>SND.UNA = oldest unacknowledged sequence number
<br /></li><li>SND.NXT = next sequence number to be sent
<br /></li><li>SEG.ACK = acknowledgment from the receiving TCP (next sequence number expected by the receiving TCP)
<br /></li><li>SEG.SEQ = first sequence number of a segment
<br /></li><li>SEG.LEN = the number of octets occupied by the data in the segment  (counting SYN and FIN)
<br /></li><li>SEG.SEQ+SEG.LEN-1 = last sequence number of a segment</li></ul>
<br />
<br />A new acknowledgment (called an "acceptable ack"), is one for which the inequality below holds:
<br /><ul><li>SND.UNA &lt; SEG.ACK =&lt; SND.NXT</li></ul>
<br />A segment on the retransmission queue is fully acknowledged if the sum of its sequence number and length is less or equal than the acknowledgment value in the incoming segment.
<br />
<br />When data is received the following comparisons are needed:
<br /><ul><li>RCV.NXT = next sequence number expected on an incoming segments, and is the left or lower edge of the receive window
<br /></li><li>RCV.NXT+RCV.WND-1 = last sequence number expected on an incoming segment, and is the right or upper edge of the receive window
<br /></li><li>SEG.SEQ = first sequence number occupied by the incoming segment
<br /></li><li>SEG.SEQ+SEG.LEN-1 = last sequence number occupied by the incoming segment</li></ul>
<br />
<br />A segment is judged to occupy a portion of valid receive sequence space if
<br /><ul><li>RCV.NXT =&lt; SEG.SEQ &lt; RCV.NXT+RCV.WND</li></ul>
<br />or
<br /><ul><li>RCV.NXT =&lt; SEG.SEQ+SEG.LEN-1 &lt; RCV.NXT+RCV.WND</li></ul>
<br />
<br />The first part of this test checks to see if the beginning of the segment falls in the window, the second part of the test checks to see if the end of the segment falls in the window; if the segment passes either part of the test it contains data in the window.
<br />
<br />Actually, it is a little more complicated than this.  Due to zero windows and zero length segments, we have four cases for the acceptability of an incoming segment:
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">
          Segment Receive  Test
          Length  Window
          ------- -------  -------------------------------------------
             0       0     SEG.SEQ = RCV.NXT
             0      &gt;0     RCV.NXT =&lt; SEG.SEQ &lt; RCV.NXT+RCV.WND
            &gt;0       0     not acceptable
            &gt;0      &gt;0     RCV.NXT =&lt; SEG.SEQ &lt; RCV.NXT+RCV.WND
                        or RCV.NXT =&lt; SEG.SEQ+SEG.LEN-1 &lt; RCV.NXT+RCV.WND</pre>Note that when the receive window is zero no segments should be acceptable except ACK segments. Thus, it is be possible for a TCP to maintain a zero receive window while transmitting data and receiving ACKs. However, even when the receive window is zero, a TCP must process the RST and URG fields of all incoming segments.
<br /><hr />
<br /><b>Establishing a Connection</b>
<br />The "three-way handshake" is the procedure used to establish a connection.  This procedure normally is initiated by one TCP and responded to by another TCP.  The procedure also works if two TCP simultaneously initiate the procedure.  When simultaneous attempt occurs, each TCP receives a "SYN" segment which carries no acknowledgment after it has sent a "SYN".  Of course, the arrival of an old duplicate "SYN" segment can potentially make it appear, to the recipient, that a simultaneous connection initiation is in progress. Proper use of "reset" segments can disambiguate these cases.
<br />
<br /><b>Closing a Connection</b>
<br />CLOSE is an operation meaning "I have no more data to send."  The notion of closing a full-duplex connection is subject to ambiguous interpretation, of course, since it may not be obvious how to treat the receiving side of the connection.
<br />
<br />There are essentially three cases:
<br /><ul><li> The user initiates by telling the TCP to CLOSE the connection<br /></li>
<li>The remote TCP initiates by sending a FIN control signal<br /></li>
<li>Both users CLOSE simultaneously<br /><br /></li>

<li><ul><li><b>Case 1:  Local user initiates the close</b><br /></li>
<li>In this case, a FIN segment can be constructed and placed on the outgoing segment queue.  No further SENDs from the user will be accepted by the TCP, and it enters the FIN-WAIT-1 state.  RECEIVEs are allowed in this state.  All segments preceding and including FIN will be retransmitted until acknowledged.  When the other TCP has both acknowledged the FIN and sent a FIN of its own, the first TCP can ACK this FIN.  Note that a TCP receiving a FIN will ACK but not send its own FIN until its user has CLOSED the connection also.
<br /><br /></li>
<li><b>Case 2:  TCP receives a FIN from the network</b><br /></li>
<li>If an unsolicited FIN arrives from the network, the receiving TCP can ACK it and tell the user that the connection is closing.  The user will respond with a CLOSE, upon which the TCP can send a FIN to the other TCP after sending any remaining data.  The TCP then waits until its own FIN is acknowledged whereupon it deletes the connection.  If an ACK is not forthcoming, after the user timeout the connection is aborted and the user is told.
<br /><br /></li>
<li><b>Case 3:  both users close simultaneously</b><br /></li>
<li>A simultaneous CLOSE by users at both ends of a connection causes FIN segments to be exchanged.  When all segments preceding the FINs have been processed and acknowledged, each TCP can ACK the FIN it has received.  Both will, upon receiving these ACKs, delete the connection.</li></ul></li></ul>
<br />
<br /><b>Precedence and Security</b>
<br />The intent is that connection be allowed only between ports operating with exactly the same security and compartment values and at the higher of the precedence level requested by the two ports. TCP modules which operate only at the default value of precedence will still have to check the precedence of incoming segments and possibly raise the precedence level they use on the connection.
<br />
<br /><b>Data Communication</b>
<br />Once the connection is established data is communicated by the exchange of segments.  Because segments may be lost due to errors (checksum test failure), or network congestion, TCP uses retransmission (after a timeout) to ensure delivery of every segment. Duplicate segments may arrive due to network or TCP retransmission.
<br />
<br />The sender of data keeps track of the next sequence number to use in the variable SND.NXT. The receiver of data keeps track of the next sequence number to expect in the variable RCV.NXT. The sender of data keeps track of the oldest unacknowledged sequence number in the variable SND.UNA.  If the data flow is momentarily idle and all data sent has been acknowledged then the three variables will be equal.
<br />
<br />When the sender creates a segment and transmits it the sender advances SND.NXT.  When the receiver accepts a segment it advances RCV.NXT and sends an acknowledgment.  When the data sender receives an acknowledgment it advances SND.UNA.  The extent to which the values of these variables differ is a measure of the delay in the communication. The amount by which the variables are advanced is the length of the data in the segment.  Note that once in the ESTABLISHED state all segments must carry current acknowledgment information.
<br /><hr />
<br /><b>Application Programming Interface</b> 
<br />The TCP application programming interface is not fully defined. As is the case with most <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>s in the TCP/IP protocol suite, a great degree of freedom is left to the implementers, thereby allowing for optimal (operating system-dependent) implementations, resulting in better efficiency (greater throughput). 
<br />
<br />The following function calls are described in the <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>: 
<br /><ul><li><b>Open</b><br /></li> 
<li>To establish a connection, takes several parameters: 
<br /></li><li>Active/passive 
<br /></li><li>Foreign socket 
<br /></li><li>Local port number 
<br /></li><li>Timeout value (optional) 
<br /></li><li>And lots of other options 
<br /></li><li>Returns a local connection name, which is used to reference this particular connection in all other functions. 
<br /><br /></li>
<li><b>Send</b><br /></li> 
<li>Causes data in a referenced user buffer to be sent over the connection. Can optionally set the URGENT flag or the PUSH flag. 
<br /><br /></li>
<li><b>Receive</b><br /></li> 
<li>Copies incoming TCP data to a user buffer. 
<br /><br /></li>
<li><b>Close</b><br /></li> 
<li>Closes the connection; causes a push of all remaining data and a TCP segment with FIN flag set. 
<br /><br /></li>
<li><b>Status</b><br /></li> 
<li>Is an implementation-dependent call that could return information such as: 
<br /></li><li>Local and foreign socket 
<br /></li><li>Send and receive window sizes 
<br /></li><li>Connection state 
<br /></li><li>Local connection name 
<br /><br /></li>
<li><b>Abort</b><br /></li>
<li>Causes all pending Send and Receive operations to be aborted, and a RESET to be sent to the foreign TCP.
<br /><br /></li>
		    </ul>
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Send Sequence Space</b>

               1         2          3          4      
          ----------|----------|----------|---------- 
                 SND.UNA    SND.NXT    SND.UNA        
                                      +SND.WND       

          1 - Old sequence numbers which have been acknowledged.
          2 - Sequence numbers of unacknowledged data.
          3 - Sequence numbers allowed for new data transmission.
          4 - Future sequence numbers which are not yet allowed.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Receive Sequence Space</b>

            1          2          3      
          ----------|----------|---------- 
                 RCV.NXT    RCV.NXT        
                           +RCV.WND

          1 - Old sequence numbers which have been acknowledged.  
          2 - Sequence numbers allowed for new reception.         
          3 - Future sequence numbers which are not yet allowed.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Basic 3-Way Handshake for Connection Synchronization</b>

The three-way handshake reduces the possibility of false connections. It is the 
implementation of a trade-off between memory and messages to provide information for 
this checking.

              TCP A                                                TCP B
          1.  CLOSED                                               LISTEN
          2.  SYN-SENT    --&gt;                --&gt; SYN-RECEIVED
          3.  ESTABLISHED &lt;--   &lt;-- SYN-RECEIVED
          4.  ESTABLISHED --&gt;        --&gt; ESTABLISHED
          5.  ESTABLISHED --&gt;  --&gt; ESTABLISHED

Each line is numbered for reference purposes. Right arrows (--&gt;) indicate departure 
of a TCP segment from TCP A to TCP B, or arrival of a segment at B from A. Left 
arrows (&lt;--), indicate the reverse. Ellipsis (...) indicates a segment which is still 
in the network (delayed). An "XXX" indicates a segment which is lost or rejected. 
Comments appear in parentheses. TCP states represent the state AFTER the departure 
or arrival of the segment (whose contents are shown in the center of each line). 
Segment contents are shown in abbreviated form, with sequence number, control 
flags, and ACK field. Other fields such as window, addresses, lengths, and text 
have been left out in the interest of clarity.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: Simultaneous Connection Synchronization</b>

Simultaneous initiation is only slightly more complex. Each TCP cycles from CLOSED 
to SYN-SENT to SYN-RECEIVED to ESTABLISHED.

              TCP A                                            TCP B
          1.  CLOSED                                           CLOSED
          2.  SYN-SENT     --&gt;               ...
          3.  SYN-RECEIVED &lt;--               &lt;-- SYN-SENT
          4.               ...               --&gt; SYN-RECEIVED
          5.  SYN-RECEIVED --&gt;  ...
          6.  ESTABLISHED  &lt;--  &lt;-- SYN-RECEIVED
          7.               ...      --&gt; ESTABLISHED</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5: Recovery from Old Duplicate SYN</b>

As a simple example of recovery from old duplicates.

              TCP A                                                TCP B
          1.  CLOSED                                               LISTEN
          2.  SYN-SENT    --&gt;                ...
          3.  (duplicate) ...                --&gt; SYN-RECEIVED
          4.  SYN-SENT    &lt;--   &lt;-- SYN-RECEIVED
          5.  SYN-SENT    --&gt;                --&gt; LISTEN
          6.              ...                --&gt; SYN-RECEIVED
          7.  SYN-SENT    &lt;--   &lt;-- SYN-RECEIVED
          8.  ESTABLISHED --&gt;       --&gt; ESTABLISHED</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 6" tabindex="0"><b>Example 6: Half-Open Connection Discovery</b>

An established connection is said to be "half-open" if one of the TCPs has closed or 
aborted the connection at its end without the knowledge of the other, or if the two 
ends of the connection have become desynchronized owing to a crash that resulted 
in loss of memory. Such connections will automatically become reset if an attempt is 
made to send data in either direction. However, half-open connections are expected 
to be unusual, and the recovery procedure is mildly involved.

              TCP A                                           TCP B
          1.  (CRASH)                               (send 300,receive 100)
          2.  CLOSED                                           ESTABLISHED
          3.  SYN-SENT --&gt;               --&gt; (??)
          4.  (!!)     &lt;--      &lt;-- ESTABLISHED
          5.  SYN-SENT --&gt;               --&gt; (Abort!!)
          6.  SYN-SENT                                         CLOSED
          7.  SYN-SENT --&gt;               --&gt;</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 7" tabindex="0"><b>Example 7: Active Side Causes Half-Open Connection Discovery</b>

An interesting alternative case occurs when TCP A crashes and TCP B tries to send 
data on what it thinks is a synchronized connection. The data arriving at TCP A 
from TCP B (line 2) is unacceptable because no such connection exists, so TCP A 
sends a RST. The RST is acceptable so TCP B processes it and aborts the connection.

                TCP A                                              TCP B
         1.  (CRASH)                                   (send 300,receive 100)
         2.  (??)    &lt;--  &lt;-- ESTABLISHED
         3.          --&gt;                    --&gt; (ABORT!!)</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 8" tabindex="0"><b>Example 8: Old Duplicate SYN Initiates a Reset on two Passive Sockets</b>
The two TCPs A and B with passive connections wait for SYN.  An old duplicate 
arriving at TCP B (line 2) stirs B into action.  A SYN-ACK is returned (line 3) and 
causes TCP A to generate a RST (the ACK in line 3 is not acceptable).  TCP B 
accepts the reset and returns to its passive LISTEN state.

              TCP A                                         TCP B
          1.  LISTEN                                        LISTEN
          2.       ...                 --&gt;  SYN-RECEIVED
          3.  (??) &lt;--    &lt;--  SYN-RECEIVED
          4.       --&gt;               --&gt;  (return to LISTEN!)
          5.  LISTEN                                        LISTEN</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 9" tabindex="0"><b>Example 9: Normal Close Sequence</b>

              TCP A                                                TCP B
          1.  ESTABLISHED                                          ESTABLISHED
          2.  (Close)
                FIN-WAIT-1  --&gt;   --&gt; CLOSE-WAIT
          3.  FIN-WAIT-2  &lt;--       &lt;-- CLOSE-WAIT
          4.                                                       (Close)
                TIME-WAIT   &lt;--   &lt;-- LAST-ACK
          5.  TIME-WAIT   --&gt;       --&gt; CLOSED
          6.  (2 MSL)
                CLOSED</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 10" tabindex="0"><b>Simultaneous Close Sequence</b>

              TCP A                                                TCP B
          1.  ESTABLISHED                                          ESTABLISHED
          2.  (Close)                                              (Close)
                FIN-WAIT-1  --&gt;   ... FIN-WAIT-1
                            &lt;--   &lt;--
                            ...   --&gt;
          3.  CLOSING     --&gt;       ... CLOSING
                            &lt;--       &lt;--
                            ...       --&gt;
          4.  TIME-WAIT                                            TIME-WAIT
                (2 MSL)                                              (2 MSL)
                CLOSED                                               CLOSED</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>TCP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />SSH<br /><img src="/supporting/images/tline_r.gif" alt="" />Kerberos<br /><img src="/supporting/images/tline_r.gif" alt="" />DNS<br /><img src="/supporting/images/tline_r.gif" alt="" />BOOTP<br /><img src="/supporting/images/tline_r.gif" alt="" />HTTPS<br /><img src="/supporting/images/tline_r.gif" alt="" />Timbuktu<br /><img src="/supporting/images/tline_r.gif" alt="" />RTSP<br /><img src="/supporting/images/tline_r.gif" alt="" />L2TP<br /><img src="/supporting/images/tline_r.gif" alt="" />CSO<br /><img src="/supporting/images/tline_r.gif" alt="" />NetBIOS<br /><img src="/supporting/images/tline_r.gif" alt="" />CMIP Agent<br /><img src="/supporting/images/tline_r.gif" alt="" />Retrospect<br /><img src="/supporting/images/tline_r.gif" alt="" />RLOGIN<br /><img src="/supporting/images/tline_r.gif" alt="" />RSH<br /><img src="/supporting/images/tline_r.gif" alt="" />WINS<br /><img src="/supporting/images/tline_r.gif" alt="" />MSN<br /><img src="/supporting/images/tline_r.gif" alt="" />NFS<br /><img src="/supporting/images/tline_r.gif" alt="" />RPC<br /><img src="/supporting/images/tline_r.gif" alt="" />Lotus Notes<br /><img src="/supporting/images/tline_r.gif" alt="" />FileMaker<br /><img src="/supporting/images/tline_r.gif" alt="" />AOL<br /><img src="/supporting/images/tline_r.gif" alt="" />CU-SeeMe<br /><img src="/supporting/images/tline_r.gif" alt="" />HTTP Proxy<br /><img src="/supporting/images/tline_r.gif" alt="" />CIFS<br /><img src="/supporting/images/tline_r.gif" alt="" />SQL<br /><img src="/supporting/images/tline_r.gif" alt="" />NCP<br /><img src="/supporting/images/tline_r.gif" alt="" />SLP<br /><img src="/supporting/images/tline_r.gif" alt="" />PPTP<br /><img src="/supporting/images/tline_r.gif" alt="" />SIP<br /><img src="/supporting/images/tline_r.gif" alt="" />MGCP<br /><img src="/supporting/images/tline_r.gif" alt="" />SAP<br /><img src="/supporting/images/tline_r.gif" alt="" />H.323<br /><img src="/supporting/images/tline_r.gif" alt="" />H.225<br /><img src="/supporting/images/tline_r.gif" alt="" />Citrix ICA<br /><img src="/supporting/images/tline_r.gif" alt="" />GTP<br /><img src="/supporting/images/tline_r.gif" alt="" />LDAP<br /><img src="/supporting/images/tline_r.gif" alt="" />GroupWise<br /><img src="/supporting/images/tline_r.gif" alt="" />BitTorrent<br /><img src="/supporting/images/tline_r.gif" alt="" />HTTP<br /><img src="/supporting/images/tline_r.gif" alt="" />FTP<br /><img src="/supporting/images/tline_r.gif" alt="" />RTELNET<br /><img src="/supporting/images/tline_r.gif" alt="" />TELNET<br /><img src="/supporting/images/tline_r.gif" alt="" />SMTP<br /><img src="/supporting/images/tline_r.gif" alt="" />WhoIs<br /><img src="/supporting/images/tline_r.gif" alt="" />IMAP<br /><img src="/supporting/images/tline_r.gif" alt="" />BGP<br /><img src="/supporting/images/tline_r.gif" alt="" />IMAP3<br /><img src="/supporting/images/tline_r.gif" alt="" />Gopher<br /><img src="/supporting/images/tline_r.gif" alt="" />Finger<br /><img src="/supporting/images/tline_r.gif" alt="" />POP2<br /><img src="/supporting/images/tline_r.gif" alt="" />POP3<br /><img src="/supporting/images/tline_r.gif" alt="" />NNTP<br /><img src="/supporting/images/tline_r.gif" alt="" />AFP<br /><img src="/supporting/images/tline_r.gif" alt="" />Cayman IP ATalk<br /><img src="/supporting/images/tline_r.gif" alt="" />X-Windows<br /><img src="/supporting/images/tline_r.gif" alt="" />TNS<br /><img src="/supporting/images/tline_r.gif" alt="" />TDS<br /><img src="/supporting/images/tline_r.gif" alt="" />LDAPS<br /><img src="/supporting/images/tline_r.gif" alt="" />IMAPS<br /><img src="/supporting/images/tline_r.gif" alt="" />SCCP<br /><img src="/supporting/images/tline_r.gif" alt="" />Gnutella<br /><img src="/supporting/images/tline_r.gif" alt="" />iSCSI<br /><img src="/supporting/images/tline_r.gif" alt="" />LPD<br /><img src="/supporting/images/tline_r.gif" alt="" />ISO-8073<br /><img src="/supporting/images/tline_r.gif" alt="" />DCE<br /><img src="/supporting/images/tline_r.gif" alt="" />Fibre Channel<br /><img src="/supporting/images/tline_r.gif" alt="" />DAAP<br /><img src="/supporting/images/tline_r.gif" alt="" />WP DNX<br /><img src="/supporting/images/tline_r.gif" alt="" />POP3s<br /><img src="/supporting/images/tline_r.gif" alt="" />MSRDP<br /><img src="/supporting/images/tline_r.gif" alt="" />Shockwave<br /><img src="/supporting/images/tline_r.gif" alt="" />MSSQL<br /><img src="/supporting/images/tline_r.gif" alt="" />Goto MyPC<br /><img src="/supporting/images/tline_r.gif" alt="" />Srvc_registry<br /><img src="/supporting/images/tline_r.gif" alt="" />Other<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />COPS<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Connection</b><br />A logical communication path identified by a pair of endpoints.
<br />
<br />In dbAnywhere, a connection refers to the connection to the SQL Anywhere database.<br /><br /><b>LFN</b><br />LFN (Long Fat Network) is a communications path with a large bandwidth * delay product.<br /><br /><b>MSL</b><br />MSL(Maximum Segment Lifetime) is the maximum interval a TCP segment may life in the net. MSL is the time a TCP segment can exist in the internetwork system.  
<br />
<br />The MSL controls the maximum rate at which fragmented datagrams can be sent using distinct  values of the 16-bit Ident field; a larger MSL lowers the maximum rate.  The TCP specification [TCP:1] arbitrarily assumes a value of 2 minutes for MSL.<br /><br /><b>RTT</b><br />RTT(Round-trip Time), the time required for a network communication to travel from the source to the destination and back. RTT is used by some routing algorithms to aid in calculating optimal routes.<br /><br /><b>SACK</b><br />SACK(Selective Acknowledgement), this technique allows the data receiver to inform the sender about all segments that have arrived successfully, so the sender need retransmit only the segments that have actually been lost. This extension uses two TCP options. The first is an enabling option, SACK permitted, which may be sent in a SYN segment to indicate that the SACK option can be used once the connection is established. The other is the SACK option itself, which may be sent over an established connection once permission has been given.<br /><br /><b>Segment</b><br />In networks, a section of a network that is bounded by bridges, routers or switches. Dividing an Ethernet into multiple segments is one of the most common ways of increasing available bandwidth on the LAN. If segmented correctly, most network traffic will remain within a single segment, enjoying the full 10 Mbps bandwidth. Hubs and switches are used to connect each segment to the rest of the LAN.
<br />
<br />In virtual memory systems, a variable-sized portion of data that is swapped in and out of main memory. Contrast with page. 
<br />In graphics, a piece of a polyline, which is a fixed-sized portion of data.<br /><br /><b>TTL</b><br />TTL (Time to Live) is a field in the Internet Protocol (IP) that specifies how many more hops a packet can travel before being discarded or returned.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.iana.org/assignments/tcp-parameters">TCP option numbers</a><hr /><b>RFCs:</b>
[IEN 2] Comments on Internet Protocol and TCP.
[IEN 12] Issues in Reliable Host-to-Host Protocols.
[IEN 45] TCP Checksum Function Design.
[IEN 74] Sequence Number Arithmetic.
[IEN 92] Protocol Options.
[IEN 98] TCP Implementation Status.
[IEN 114] PROTOCOL OPTIONS.
[IEN 124] DOD STANDARD TRANSMISSION CONTROL PROTOCOL.
                Obsoletes: IEN 5, IEN 21, IEN 27, IEN 40, IEN 44, IEN 55, IEN 81, IEN 112. 
[IEN 150] TCP JSYS CALLING SEQUENCES.
[IEN 167] HP3000 TCP DESIGN DOCUMENT.
[<a href="https://www.rfc-editor.org/rfc/rfc721.html">RFC 721</a>] Out-of-Band Control Signals in a Host-to-Host Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc761.html">RFC 761</a>] DOD STANDARD TRANSMISSION CONTROL PROTOCOL.
[<a href="https://www.rfc-editor.org/rfc/rfc793.html">RFC 793</a>] Transmission Control Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc801.html">RFC 801</a>] NCP/TCP TRANSITION PLAN.
[<a href="https://www.rfc-editor.org/rfc/rfc813.html">RFC 813</a>] WINDOW AND ACKNOWLEDGEMENT STRATEGY IN TCP.
[<a href="https://www.rfc-editor.org/rfc/rfc816.html">RFC 816</a>] FAULT ISOLATION AND RECOVERY.
[<a href="https://www.rfc-editor.org/rfc/rfc832.html">RFC 832</a>] Who Talks TCP?
[<a href="https://www.rfc-editor.org/rfc/rfc833.html">RFC 833</a>] Who Talks TCP?
[<a href="https://www.rfc-editor.org/rfc/rfc834.html">RFC 834</a>] Who Talks TCP?
[<a href="https://www.rfc-editor.org/rfc/rfc835.html">RFC 835</a>] Who Talks TCP?
[<a href="https://www.rfc-editor.org/rfc/rfc836.html">RFC 836</a>] Who Talks TCP?
[<a href="https://www.rfc-editor.org/rfc/rfc837.html">RFC 837</a>] Who Talks TCP?
[<a href="https://www.rfc-editor.org/rfc/rfc838.html">RFC 838</a>] Who Talks TCP?
[<a href="https://www.rfc-editor.org/rfc/rfc839.html">RFC 839</a>] Who Talks TCP?
[<a href="https://www.rfc-editor.org/rfc/rfc842.html">RFC 842</a>] Who Talks TCP? - Survey of 1 February 83.
[<a href="https://www.rfc-editor.org/rfc/rfc843.html">RFC 843</a>] Who Talks TCP? -- Survey of 8 February 1983.
[<a href="https://www.rfc-editor.org/rfc/rfc845.html">RFC 845</a>] Who Talks TCP? -- Survey of 15 February 1983.
[<a href="https://www.rfc-editor.org/rfc/rfc846.html">RFC 846</a>] Who Talks TCP? -- Survey of 22 February 1983.
[<a href="https://www.rfc-editor.org/rfc/rfc872.html">RFC 872</a>] TCP-ON-A-LAN.
[<a href="https://www.rfc-editor.org/rfc/rfc879.html">RFC 879</a>] The TCP Maximum Segment Size and Related Topics.
[<a href="https://www.rfc-editor.org/rfc/rfc889.html">RFC 889</a>] Internet Delay Experiments.
[<a href="https://www.rfc-editor.org/rfc/rfc896.html">RFC 896</a>] Congestion Control in IP/TCP Internetworks.
[<a href="https://www.rfc-editor.org/rfc/rfc939.html">RFC 939</a>] Executive Summary of the NRC Report on Transport Protocols for Department of Defense Data Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc942.html">RFC 942</a>] TRANSPORT PROTOCOLS FOR DEPARTMENT OF DEFENSE DATA NETWORKS.
[<a href="https://www.rfc-editor.org/rfc/rfc962.html">RFC 962</a>] TCP-4 Prime.
[<a href="https://www.rfc-editor.org/rfc/rfc964.html">RFC 964</a>] SOME PROBLEMS WITH THE SPECIFICATION OF THE MILITARY STANDARD TRANSMISSION CONTROL PROTOCOL.
[<a href="https://www.rfc-editor.org/rfc/rfc1025.html">RFC 1025</a>] TCP AND IP BAKE OFF.
[<a href="https://www.rfc-editor.org/rfc/rfc1106.html">RFC 1106</a>] TCP Big Window and Nak Options.
[<a href="https://www.rfc-editor.org/rfc/rfc1110.html">RFC 1110</a>] A Problem with the TCP Big Window Option.
[<a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>] Requirements for Internet Hosts -- Communication Layers.
[<a href="https://www.rfc-editor.org/rfc/rfc1144.html">RFC 1144</a>] Compressing TCP/IP Headers for Low-Speed Serial Links.
[<a href="https://www.rfc-editor.org/rfc/rfc1146.html">RFC 1146</a>] TCP Alternate Checksum Options.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1145.html">RFC 1145</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1158.html">RFC 1158</a>] Management Information Base for Network Management of TCP/IP-based internets: MIB-II.
[<a href="https://www.rfc-editor.org/rfc/rfc1180.html">RFC 1180</a>] A TCP/IP Tutorial.
[<a href="https://www.rfc-editor.org/rfc/rfc1191.html">RFC 1191</a>] Path MTU Discovery.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1063.html">RFC 1063</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1263.html">RFC 1263</a>] TCP EXTENSIONS CONSIDERED HARMFUL.
[<a href="https://www.rfc-editor.org/rfc/rfc1323.html">RFC 1323</a>] TCP Extensions for High Performance.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1072.html">RFC 1072</a>, <a href="https://www.rfc-editor.org/rfc/rfc1185.html">RFC 1185</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1337.html">RFC 1337</a>] TIME-WAIT Assassination Hazards in TCP.
[<a href="https://www.rfc-editor.org/rfc/rfc1347.html">RFC 1347</a>] TCP and UDP with Bigger Addresses (TUBA), A Simple Proposal for Internet Addressing and Routing.
[<a href="https://www.rfc-editor.org/rfc/rfc1379.html">RFC 1379</a>] Extending TCP for Transactions -- Concepts.
[<a href="https://www.rfc-editor.org/rfc/rfc1475.html">RFC 1475</a>] TP/IX: The Next Internet.
[<a href="https://www.rfc-editor.org/rfc/rfc1644.html">RFC 1644</a>] T/TCP -- TCP Extensions for Transactions Functional Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc1693.html">RFC 1693</a>] An Extension to TCP : Partial Order Service.
[<a href="https://www.rfc-editor.org/rfc/rfc1705.html">RFC 1705</a>] Six Virtual Inches to the Left: The Problem with IPng.
[<a href="https://www.rfc-editor.org/rfc/rfc1791.html">RFC 1791</a>] TCP And UDP Over IPX Networks With Fixed Path MTU.
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc1858.html">RFC 1858</a>] Security Considerations for IP Fragment Filtering.
[<a href="https://www.rfc-editor.org/rfc/rfc1859.html">RFC 1859</a>] ISO Transport Class 2 Non-use of Explicit Flow Control over TCP RFC1006 extension.
[<a href="https://www.rfc-editor.org/rfc/rfc1948.html">RFC 1948</a>] Defending Against Sequence Number Attacks.
[<a href="https://www.rfc-editor.org/rfc/rfc1981.html">RFC 1981</a>] Path MTU Discovery for IP version 6.
[<a href="https://www.rfc-editor.org/rfc/rfc2012.html">RFC 2012</a>] SNMPv2 Management Information Base for the Transmission Control Protocol using SMIv2.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.tcpMIB (1.3.6.1.2.1.49). 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1213.html">RFC 1213</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2018.html">RFC 2018</a>] TCP Selective Acknowledgment Options.
[<a href="https://www.rfc-editor.org/rfc/rfc2126.html">RFC 2126</a>] ISO Transport Service on top of TCP (ITOT).
[<a href="https://www.rfc-editor.org/rfc/rfc2140.html">RFC 2140</a>] TCP Control Block Interdependence.
[<a href="https://www.rfc-editor.org/rfc/rfc2385.html">RFC 2385</a>] Protection of BGP Sessions via the TCP MD5 Signature Option.
                Defines the MD5 signature option. 
[<a href="https://www.rfc-editor.org/rfc/rfc2415.html">RFC 2415</a>] Simulation Studies of Increased Initial TCP Window Size.
[<a href="https://www.rfc-editor.org/rfc/rfc2416.html">RFC 2416</a>] When TCP Starts Up With Four Packets Into Only Three Buffers.
[<a href="https://www.rfc-editor.org/rfc/rfc2452.html">RFC 2452</a>] IP Version 6 Management Information Base for the Transmission Control Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc2460.html">RFC 2460</a>] Internet Protocol, Version 6 (IPv6) Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc2488.html">RFC 2488</a>] Enhancing TCP Over Satellite Channels using Standard Mechanisms.
[<a href="https://www.rfc-editor.org/rfc/rfc2507.html">RFC 2507</a>] IP Header Compression.
[<a href="https://www.rfc-editor.org/rfc/rfc2525.html">RFC 2525</a>] Known TCP Implementation Problems.
[<a href="https://www.rfc-editor.org/rfc/rfc2581.html">RFC 2581</a>] TCP Congestion Control.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2001.html">RFC 2001</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2675.html">RFC 2675</a>] IPv6 Jumbograms.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2147.html">RFC 2147</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2757.html">RFC 2757</a>] Long Thin Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2760.html">RFC 2760</a>] Ongoing TCP Research Related to Satellites.
[<a href="https://www.rfc-editor.org/rfc/rfc2780.html">RFC 2780</a>] IANA Allocation Guidelines For Values In the Internet Protocol and Related Headers.
[<a href="https://www.rfc-editor.org/rfc/rfc2861.html">RFC 2861</a>] TCP Congestion Window Validation.
                Defines the TCP congestion control algorithm CWV. 
[<a href="https://www.rfc-editor.org/rfc/rfc2873.html">RFC 2873</a>] TCP Processing of the IPv4 Precedence Field.
[<a href="https://www.rfc-editor.org/rfc/rfc2883.html">RFC 2883</a>] An Extension to the Selective Acknowledgement (SACK) Option for TCP.
[<a href="https://www.rfc-editor.org/rfc/rfc2884.html">RFC 2884</a>] Performance Evaluation of Explicit Congestion Notification (ECN) in IP Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2914.html">RFC 2914</a>] Congestion Control Principles.
[<a href="https://www.rfc-editor.org/rfc/rfc2923.html">RFC 2923</a>] TCP Problems with Path MTU Discovery.
[<a href="https://www.rfc-editor.org/rfc/rfc2988.html">RFC 2988</a>] Computing TCP's Retransmission Timer.
[<a href="https://www.rfc-editor.org/rfc/rfc2990.html">RFC 2990</a>] Next Steps for the IP QoS Architecture.
[<a href="https://www.rfc-editor.org/rfc/rfc3042.html">RFC 3042</a>] Enhancing TCP's Loss Recovery Using Limited Transmit.
[<a href="https://www.rfc-editor.org/rfc/rfc3081.html">RFC 3081</a>] Mapping the BEEP Core onto TCP.
[<a href="https://www.rfc-editor.org/rfc/rfc3128.html">RFC 3128</a>] Protection Against a Variant of the Tiny Fragment Attack.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1858.html">RFC 1858</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3135.html">RFC 3135</a>] Performance Enhancing Proxies Intended to Mitigate Link-Related Degradations.
[<a href="https://www.rfc-editor.org/rfc/rfc3148.html">RFC 3148</a>] A Framework for Defining Empirical Bulk Transfer Capacity Metrics.
[<a href="https://www.rfc-editor.org/rfc/rfc3150.html">RFC 3150</a>] End-to-end Performance Implications of Slow Links.
[<a href="https://www.rfc-editor.org/rfc/rfc3155.html">RFC 3155</a>] End-to-end Performance Implications of Links with Errors.
[<a href="https://www.rfc-editor.org/rfc/rfc3168.html">RFC 3168</a>] The Addition of Explicit Congestion Notification (ECN) to IP.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2481.html">RFC 2481</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc793.html">RFC 793</a>, <a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>, <a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3360.html">RFC 3360</a>] Inappropriate TCP Resets Considered Harmful.
[<a href="https://www.rfc-editor.org/rfc/rfc3390.html">RFC 3390</a>] Increasing TCP's Initial Window.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2414.html">RFC 2414</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2581.html">RFC 2581</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3430.html">RFC 3430</a>] Simple Network Management Protocol (SNMP) over Transmission Control Protocol (TCP) Transport Mapping.
                Defines the use of TCP as a transport protocol for SNMP. 
[<a href="https://www.rfc-editor.org/rfc/rfc3448.html">RFC 3448</a>] TCP Friendly Rate Control (TFRC): Protocol Specification.
                Defines the TFRC algorithm. 
[<a href="https://www.rfc-editor.org/rfc/rfc3449.html">RFC 3449</a>] TCP Performance Implications of Network Path Asymmetry.
                BCP: 69. 
[<a href="https://www.rfc-editor.org/rfc/rfc3465.html">RFC 3465</a>] TCP Congestion Control with Appropriate Byte Counting (ABC).
                Defines the TCP congestion control algorithm ABC. 
[<a href="https://www.rfc-editor.org/rfc/rfc3481.html">RFC 3481</a>] TCP over Second (2.5G) and Third (3G) Generation Wireless Networks.
                BCP: 71. 
[<a href="https://www.rfc-editor.org/rfc/rfc3517.html">RFC 3517</a>] A Conservative Selective Acknowledgment (SACK)-based Loss Recovery Algorithm for TCP.
[<a href="https://www.rfc-editor.org/rfc/rfc3522.html">RFC 3522</a>] The Eifel Detection Algorithm for TCP.
[<a href="https://www.rfc-editor.org/rfc/rfc3540.html">RFC 3540</a>] Robust Explicit Congestion Notification (ECN) Signaling with Nonces.
                Defines ECN bit NS (Nonce Sum). 
[<a href="https://www.rfc-editor.org/rfc/rfc3562.html">RFC 3562</a>] Key Management Considerations for the TCP MD5 Signature Option.
[<a href="https://www.rfc-editor.org/rfc/rfc3649.html">RFC 3649</a>] HighSpeed TCP for Large Congestion Windows.
[<a href="https://www.rfc-editor.org/rfc/rfc3708.html">RFC 3708</a>] Using TCP Duplicate Selective Acknowledgement (DSACKs) and Stream Control Transmission Protocol (SCTP) Duplicate Transmission Sequence Numbers (TSNs) to Detect Spurious Retransmissions.
[<a href="https://www.rfc-editor.org/rfc/rfc3742.html">RFC 3742</a>] Limited Slow-Start for TCP with Large Congestion Windows.
[<a href="https://www.rfc-editor.org/rfc/rfc3782.html">RFC 3782</a>] The NewReno Modification to TCP's Fast Recovery Algorithm.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2582.html">RFC 2582</a>.<hr /><b><b>Obsolete RFCs:</b></b>
[IEN 112] TRANSMISSION CONTROL PROTOCOL.
                Obsoleted by: IEN 124. 
                Obsoletes: IEN 5, IEN 21, IEN 27, IEN 40, IEN 44, IEN 55, IEN 81. 
[<a href="https://www.rfc-editor.org/rfc/rfc1063.html">RFC 1063</a>] IP MTU Discovery Options.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1191.html">RFC 1191</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1072.html">RFC 1072</a>] TCP Extensions for Long-Delay Paths.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1323.html">RFC 1323</a>, <a href="https://www.rfc-editor.org/rfc/rfc2018.html">RFC 2018</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1145.html">RFC 1145</a>] TCP Alternate Checksum Options.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1146.html">RFC 1146</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1185.html">RFC 1185</a>] TCP Extension for High-Speed Paths.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1323.html">RFC 1323</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2001.html">RFC 2001</a>] TCP Slow Start, Congestion Avoidance, Fast Retransmit, and Fast Recovery Algorithms.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2581.html">RFC 2581</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2147.html">RFC 2147</a>] TCP and UDP over IPv6 Jumbograms.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2675.html">RFC 2675</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1883.html">RFC 1883</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2414.html">RFC 2414</a>] Increasing TCP's Initial Window.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3390.html">RFC 3390</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2481.html">RFC 2481</a>] A Proposal to add Explicit Congestion Notification (ECN) to IP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3168.html">RFC 3168</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2582.html">RFC 2582</a>] The NewReno Modification to TCP's Fast Recovery Algorithm.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3782.html">RFC 3782</a>.
                		  </div>
		  
</section>


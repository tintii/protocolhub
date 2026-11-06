---
id: protocol-rtcp
slug: rtcp
name: RTCP
expandedName: Real-Time Transport Control Protocol
origin: historical
provenance:
  source: protocols/protocol_RTCP.htm
  sha256: ca17ab7ba9d472e81df628e0d9c0bfd6d1bb3d1a829553846c5778d85a9f554e
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Real-Time Transport Control Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Real-Time Transport Control Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: 5005 (UDP)
  - label: Related protocols
    html: 'UDP,<br />TCP,<br />RTSP,<br />RTP'
  - label: Working groups
    html: 'Avt, Audio/Video Transport'
originalUpdate: '2005-11-10 17:32:21'
rfcs:
  - 1889
  - 1890
  - 2032
  - 3158
  - 3550
  - 3551
  - 3605
  - 3611
  - 3711
related:
  - protocol-udp
  - protocol-tcp
  - protocol-rtsp
  - protocol-rtp
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

			The RTP control protocol (RTCP) is based on the periodic transmission of control packets to all participants in the session, using the same distribution mechanism as the data packets. The underlying protocol must provide multiplexing of the data and control packets. 
<br />
<br />RTCP performs four functions:
<br /><ul><li>The primary function is to provide feedback on the quality of the data distribution. This is an integral part of the RTP's role as a transport protocol and is related to the flow and congestion control functions of other transport protocols. The feedback may be directly useful for control of adaptive encodings, but experiments with IP multicasting have shown that it is also critical to get feedback from the receivers to diagnose faults in the distribution. Sending reception feedback reports to all participants allows one who is observing problems to evaluate whether those problems are local or global. With a distribution mechanism like IP multicast, it is also possible for an entity such as a network service provider who is not otherwise involved in the session to receive the feedback information and act as a third-party monitor to diagnose network problems. This feedback function is performed by the RTCP sender and receiver reports.<br /><br /></li>

<li>RTCP carries a persistent transport-level identifier for an RTP source called the canonical name or CNAME. Since the SSRC identifier may change if a conflict is discovered or a program is restarted, receivers require the CNAME to keep track of each participant. Receivers may also require the CNAME to associate multiple data streams from a given participant in a set of related RTP sessions, for example to synchronize audio and video. Inter-media synchronization also requires the NTP and RTP timestamps included in RTCP packets by data senders.<br /><br /></li>

<li>The first two functions require that all participants send RTCP packets, therefore the rate must be controlled in order for RTP to scale up to a large number of participants. By having each participant send its control packets to all the others, each can independently observe the number of participants. This number is used to calculate the rate at which the packets are sent.<br /><br /></li>

<li>A fourth, optional function is to convey minimal session control information, for example participant identification to be displayed in the user interface. This is most likely to be useful in "loosely controlled" sessions where participants enter and leave without membership control or parameter negotiation. RTCP serves as a convenient channel to reach all the participants, but it is not necessarily expected to support all the control communication requirements of an application. A higher-level session control protocol, which is beyond the scope of this document, may be needed.</li></ul>
<br /><hr />
<br /><b>Packet Format</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>2</p></td><td><p>3</p></td><td><p>8</p></td><td><p>16</p></td><td><p>32bit</p></td></tr><tr><td><p>Ver</p></td><td><p>P</p></td><td><p>Count</p></td><td><p>Type</p></td><td><p>Length</p></td></tr><tr><td colspan="5"><p>Data</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Ver (Version)</b>
<br />Identifies the RTP version which is the same in RTCP packets as in RTP data packets. The version defined by this specification is two (2).<br /><br /></li>

<li><b>P (Padding)</b>
<br />When set, this RTCP packet contains some additional padding octets at the end which are not part of the control information. The last octet of the padding is a count of how many padding octets should be ignored. Padding may be needed by some encryption algorithms with fixed block sizes. In a compound RTCP packet, padding should only be required on the last individual packet because the compound packet is encrypted as a whole. <br /><br /></li>

<li><b>Reception report count</b>
<br />The number of reception report blocks contained in this packet. A value of zero is valid. Packet type Contains the constant 200 to identify this as an RTCP SR packet.<br /><br /></li>

<li><b>Type</b>
<br />RTCP packet type.<br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Type</p></td><td><p>ab.</p></td><td><p>Description</p></td></tr><tr><td><p>0-191</p></td><td> </td><td> </td></tr><tr><td><p>192</p></td><td>FIR</td><td>Full INTRA-frame request, indicates that a receiver requires a full encoded image in order to either start decoding with an entire image or to refresh  its image and speed the recovery after a burst of lost packets.</td></tr><tr><td><p>193</p></td><td>NACK</td><td>Negative acknowledgement.</td></tr><tr><td><p>194-199</p></td><td> </td><td> </td></tr><tr><td><p>200</p></td><td>SR</td><td>Sender report, for transmission and reception statistics from participants that are active senders.</td></tr><tr><td><p>201</p></td><td>RR</td><td>Receiver report, for reception statistics from participants that are not active senders and in combination with SR for active senders reporting on more than 31 sources.</td></tr><tr><td><p>202</p></td><td>SDES</td><td>Source description items, including CNAME.</td></tr><tr><td><p>203</p></td><td>BYE</td><td>Goodbye, Indicates end of participation.</td></tr><tr><td><p>204</p></td><td>APP</td><td>Application-specific functions.</td></tr><tr><td><p>205</p></td><td>RTPFB</td><td>, Generic RTP Feedback.</td></tr><tr><td><p>206</p></td><td>PSFB</td><td>Payload-specific.</td></tr><tr><td><p>207</p></td><td>XR</td><td>RTCP extension.</td></tr><tr><td><p>208-255</p></td><td> </td><td> </td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Length</b>
<br />The length of this RTCP packet in 32-bit words minus one, including the header and any padding. (The offset of one makes zero a valid length and avoids a possible infinite loop in scanning a compound RTCP packet, while counting 32-bit words avoids a validity check for a multiple of 4.)</li></ul>
<br /><hr />
<br /><b>RTCP Transmission Interval</b>
<br />RTP is designed to allow an application to scale automatically over session sizes ranging from a few participants to thousands. For example, in an audio conference the data traffic is inherently self-limiting because only one or two people will speak at a time, so with multicast distribution the data rate on any given link remains relatively constant independent of the number of participants. However, the control traffic is not self-limiting. If the reception reports from each participant were sent at a constant rate, the control traffic would grow linearly with the number of participants. Therefore, the rate must be scaled down by dynamically calculating the interval between RTCP packet transmissions.
<br />
<br />For each session, it is assumed that the data traffic is subject to an aggregate limit called the "session bandwidth" to be divided among the participants. This bandwidth might be reserved and the limit enforced by the network. If there is no reservation, there may be other constraints, depending on the environment, that establish the "reasonable" maximum for the session to use, and that would be the session bandwidth. The session bandwidth may be chosen based on some cost or a priori knowledge of the available network bandwidth for the session. It is somewhat independent of the media encoding, but the encoding choice may be limited by the session bandwidth. Often, the session bandwidth is the sum of the nominal bandwidths of the senders expected to be concurrently active. For teleconference audio, this number would typically be one sender's bandwidth. For layered encodings, each layer is a separate RTP session with its own session bandwidth parameter.
<br />
<br />The session bandwidth parameter is expected to be supplied by a session management application when it invokes a media application, but media applications may set a default based on the single-sender data bandwidth for the encoding selected for the session. The application may also enforce bandwidth limits based on multicast scope rules or other criteria. All participants must use the same value for the session bandwidth so that the same RTCP interval will be calculated.
<br />
<br />Bandwidth calculations for control and data traffic include lower-layer transport and network protocols (e.g., UDP and IP) since that is what the resource reservation system would need to know. The application can also be expected to know which of these protocols are in use. Link level headers are not included in the calculation since the packet will be encapsulated with different link level headers as it travels.
<br />
<br />The control traffic should be limited to a small and known fraction of the session bandwidth: small so that the primary function of the transport protocol to carry data is not impaired; known so that the control traffic can be included in the bandwidth specification given to a resource reservation protocol, and so that each participant can independently calculate its share. The control traffic bandwidth is in addition to the session bandwidth for the data traffic. It is recommended that the fraction of the session bandwidth added for RTCP be fixed at 5%. It is also recommended that 1/4 of the RTCP bandwidth be dedicated to participants that are sending data so that in sessions with a large number of receivers but a small number of senders, newly joining participants will more quickly receive the CNAME for the sending sites. When the proportion of senders is greater than 1/4 of the participants, the senders get their proportion of the full RTCP bandwidth. While the values of these and other constants in the interval calculation are not critical, all participants in the session must use the same values so the same interval will be calculated. Therefore, these constants should be fixed for a particular profile.
<br />
<br />A profile may specify that the control traffic bandwidth may be a separate parameter of the session rather than a strict percentage of the session bandwidth. Using a separate parameter allows rate- adaptive applications to set an RTCP bandwidth consistent with a "typical" data bandwidth that is lower than the maximum bandwidth specified by the session bandwidth parameter.
<br />
<br />The calculated interval between transmissions of compound RTCP packets should also have a lower bound to avoid having bursts of packets exceed the allowed bandwidth when the number of participants is small and the traffic isn't smoothed according to the law of large numbers. It also keeps the report interval from becoming too small during transient outages like a network partition such that adaptation is delayed when the partition heals. At application startup, a delay should be imposed before the first compound RTCP packet is sent to allow time for RTCP packets to be received from other participants so the report interval will converge to the correct value more quickly. This delay may be set to half the minimum interval to allow quicker notification that the new participant is present. The recommended value for a fixed minimum interval is 5 seconds.
<br />
<br />An implementation may scale the minimum RTCP interval to a smaller value inversely proportional to the session bandwidth parameter with the following limitations:
<br /><ul><li>For multicast sessions, only active data senders may use the reduced minimum value to calculate the interval for transmission of compound RTCP packets.<br /><br /></li>

<li>For unicast sessions, the reduced value may be used by participants that are not active data senders as well, and the delay before sending the initial compound RTCP packet may be zero.<br /><br /></li>

<li>For all sessions, the fixed minimum should be used when calculating the participant timeout interval so that implementations which do not use the reduced value for transmitting RTCP packets are not timed out by other participants prematurely.<br /><br /></li>

<li>The recommended value for the reduced minimum in seconds is 360 divided by the session bandwidth in kilobits/second. This minimum is smaller than 5 seconds for bandwidths greater than 72 kb/s.</li></ul>
<br />
<br />It calculates the interval between sending compound RTCP packets to divide the allowed control traffic bandwidth among the participants. This allows an application to provide fast response for small sessions where, for example, identification of all participants is important, yet automatically adapt to large sessions. The algorithm incorporates the following characteristics:
<br /><ul><li>The calculated interval between RTCP packets scales linearly with the number of members in the group. It is this linear factor which allows for a constant amount of control traffic when summed across all members.
<br /><br /></li>
<li>The interval between RTCP packets is varied randomly over the range times the calculated interval to avoid unintended synchronization of all participants. The first RTCP packet sent after joining a session is also delayed by a random variation of half the minimum RTCP interval.
<br /><br /></li>
<li>A dynamic estimate of the average compound RTCP packet size is calculated, including all those packets received and sent, to automatically adapt to changes in the amount of control information carried.
<br /><br /></li>
<li>Since the calculated interval is dependent on the number of observed group members, there may be undesirable startup effects when a new user joins an existing session, or many users simultaneously join a new session. These new users will initially have incorrect estimates of the group membership, and thus their RTCP transmission interval will be too short. This problem can be significant if many users join the session simultaneously. To deal with this, an algorithm called "timer reconsideration" is employed. This algorithm implements a simple back-off mechanism which causes users to hold back RTCP packet transmission if the group sizes are increasing.
<br /><br /></li>
<li>When users leave a session, either with a BYE or by timeout, the group membership decreases, and thus the calculated interval should decrease. A "reverse reconsideration" algorithm is used to allow members to more quickly reduce their intervals in response to group membership decreases.
<br /><br /></li>
<li>BYE packets are given different treatment than other RTCP packets. When a user leaves a group, and wishes to send a BYE packet, it may do so before its next scheduled RTCP packet. However, transmission of BYEs follows a back-off algorithm which avoids floods of BYE packets should a large number of members simultaneously leave the session.</li></ul>
<br />
<br />This algorithm may be used for sessions in which all participants are allowed to send. In that case, the session bandwidth parameter is the product of the individual sender's bandwidth times the number of participants, and the RTCP bandwidth is 5% of that.
<br /><hr />
<br /><b>RTCP Packet Send and Receive Rules</b>
<br />The rules for how to send, and what to do when receiving an RTCP packet are outlined here. An implementation that allows operation in a multicast environment or a multipoint unicast environment must meet the requirements in RTCP Transmission Interval. Such an implementation may use the algorithm defined in this section to meet those requirements, or may use some other algorithm so long as it provides equivalent or better performance. An implementation which is constrained to two-party unicast operation should still use randomization of the RTCP transmission interval to avoid unintended synchronization of multiple instances operating in the same environment, but may omit the "timer reconsideration" and "reverse reconsideration" algorithms.
<br />
<br />To execute these rules, a session participant must maintain several pieces of state:
<br /><ul><li><b>tp</b>
<br />The last time an RTCP packet was transmitted.<br /><br /></li>

<li><b>tc</b>
<br />The current time.<br /><br /></li>

<li><b>tn</b>
<br />Tthe next scheduled transmission time of an RTCP packet.<br /><br /></li>

<li><b>pmembers</b>
<br />The estimated number of session members at the time tn was last recomputed.<br /><br /></li>

<li><b>members</b>
<br />The most current estimate for the number of session members.<br /><br /></li>

<li><b>senders</b>
<br />The most current estimate for the number of senders in the session.<br /><br /></li>

<li><b>rtcp_bw</b>
<br />The target RTCP bandwidth, i.e., the total bandwidth that will be used for RTCP packets by all members of this session, in octets per second. This will be a specified fraction of the "session bandwidth" parameter supplied to the application at startup.<br /><br /></li>

<li><b>we_sent</b>
<br />Flag that is true if the application has sent data since the 2nd previous RTCP report was transmitted.<br /><br /></li>

<li><b>avg_rtcp_size</b>
<br />The average compound RTCP packet size, in octets, over all RTCP packets sent and received by this participant. The size includes lower-layer transport and network protocol headers (e.g., UDP and IP).<br /><br /></li>

<li><b>initial</b>
<br />Flag that is true if the application has not yet sent an RTCP packet.</li></ul>
<br />
<br />Many of these rules make use of the "calculated interval" between packet transmissions. This interval is described in the following section.
<br />
<br /><b>Sender and Receiver Reports</b>
<br />RTP receivers provide reception quality feedback using RTCP report packets which may take one of two forms depending upon whether or not the receiver is also a sender. The only difference between the sender report (SR) and receiver report (RR) forms, besides the packet type code, is that the sender report includes a 20-byte sender information section for use by active senders. The SR is issued if a site has sent any data packets during the interval since issuing the last report or the previous one, otherwise the RR is issued.
<br />
<br />Both the SR and RR forms include zero or more reception report blocks, one for each of the synchronization sources from which this receiver has received RTP data packets since the last report. Reports are not issued for contributing sources listed in the CSRC list. Each reception report block provides statistics about the data received from the particular source indicated in that block. Since a maximum of 31 reception report blocks will fit in an SR or RR packet, additional RR packets SHOULD be stacked after the initial SR or RR packet as needed to contain the reception reports for all sources heard during the interval since the last report. If there are too many sources to fit all the necessary RR packets into one compound RTCP packet without exceeding the MTU of the network path, then only the subset that will fit into one MTU should be included in each interval. The subsets should be selected round-robin across multiple intervals so that all sources are reported.
<br />
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
<td class="MapParent" aria-label="Parent layer protocols">UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RTCP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Algorithm</b><br />Algorithm is a formula or set of steps for solving a particular problem. To be an algorithm, a set of rules must be unambiguous and have a clear stopping point. Algorithms can be expressed in any language, from natural languages like English or French to programming languages like FORTRAN.
<br />
<br />We use algorithms every day. For example, a recipe for baking a cake is an algorithm. Most programs, with the exception of some artificial intelligence applications, consist of algorithms. Inventing elegant algorithms -- algorithms that are simple and require the fewest steps possible -- is one of the principal challenges in programming.<br /><br /><b>Bandwidth</b><br />*A range within a band of frequencies or wavelengths.
<br />
<br />*The amount of data that can be transmitted in a fixed amount of time. For digital devices, the bandwidth is usually expressed in bits per second(bps) or bytes per second. For analog devices, the bandwidth is expressed in cycles per second, or Hertz (Hz).<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>MTU</b><br />MTU (Maximum transmission unit) is the size of the largest packet that can be transmitted over a particular medium. Packets exceeding the MTU value in size are fragmented or segmented, and then reassembled at the receiving end. If fragmentation is not supported or possible, a packet that exceeds the MTU value is dropped.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>NTP</b><br />Network Time Protocol, an Internet standard protocol (built on top of TCP/IP) that assures accurate synchronization to the millisecond of computer clock times in a network of computers. Based on UTC, NTP synchronizes client workstation clocks to the U.S. Naval Observatory Master Clocks in Washington, DC and Colorado Springs CO. Running as a continuous background client program on a computer, NTP sends periodic time requests to servers, obtaining server time stamps and using them to adjust the client's clock.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>Parameter</b><br />Characteristic, means defining the characteristics of something. In general, parameters are used to customize a program. For example, filenames, page lengths, and font specifications could all be considered parameters. 
<br />
<br />In programming, the term parameter is synonymous with argument, a value that is passed to a routine.<br /><br /><b>Program</b><br />An organized list of instructions that, when executed, causes the computer to behave in a predetermined manner. Without programs, computers are useless.
<br />
<br />A program is like a recipe. It contains a list of ingredients (called variables) and a list of directions (called statements) that tell the computer what to do with the variables. The variables can represent numeric data, text, or graphical images.<br /><br /><b>RTCP</b><br />The RTP control protocol (RTCP) is based on the periodic transmission of control packets to all participants in the session, using the same distribution mechanism as the data packets. The underlying protocol must provide multiplexing of the data and control packets.<br /><br /><b>RTP</b><br />RTP (Real-Time Transport Protocol) is an Internet protocol for transmitting real-time data such as audio and video. RTP itself does not guarantee real-time delivery of data, but it does provide mechanisms for the sending and receiving applications to support streaming data. Typically, RTP runs on top of the UDP protocol, although the specification is general enough to support other transport protocols.<br /><br /><b>SSRC</b><br />Synchronization source (SSRC) is the source of a stream of RTP packets, identified by a 32-bit numeric SSRC identifier carried in the RTP header so as not to be dependent upon the network address. All packets from a synchronization source form part of the same timing and sequence number space, so a receiver groups packets by synchronization source for playback.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br /><b>Session bandwidth</b><br />Session bandwidth is the sum of the nominal bandwidths of the senders expected to be concurrently active.<br /><br /><b>Traffic</b><br />*The load on a communications device or system. One of the principal jobs of a system administrator is to monitor traffic levels and take appropriate actions when traffic becomes heavy. 
<br />
<br />*The measurement of the amount of users that visit a Web site.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/rtp-parameters">RTP parameters</a>
                <a href="http://www.cs.columbia.edu/~hgs/rtp">www.cs.columbia.edu</a>
                <hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2032.html">RFC 2032</a>] RTP Payload Format for H.261 Video Streams.
                Defines RTCP packet types 192 (FIR) and 193 (NACK). 
[<a href="https://www.rfc-editor.org/rfc/rfc3158.html">RFC 3158</a>] RTP Testing Strategies.
[<a href="https://www.rfc-editor.org/rfc/rfc3550.html">RFC 3550</a>] RTP: A Transport Protocol for Real-Time Applications.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1889.html">RFC 1889</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc3551.html">RFC 3551</a>] RTP Profile for Audio and Video Conferences with Minimal Control.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1890.html">RFC 1890</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3605.html">RFC 3605</a>] Real Time Control Protocol (RTCP) attribute in Session Description Protocol (SDP).
                Defines SDP attribute rtcp. 
[<a href="https://www.rfc-editor.org/rfc/rfc3611.html">RFC 3611</a>] RTP Control Protocol Extended Reports (RTCP XR).
                Defines RTCP packet type 207 (XR). 
[<a href="https://www.rfc-editor.org/rfc/rfc3711.html">RFC 3711</a>] The Secure Real-time Transport Protocol (SRTP).
                Defines RTP profile RTP/SAVP. 
                <hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1889.html">RFC 1889</a>] RTP: A Transport Protocol for Real-Time Applications.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3550.html">RFC 3550</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1890.html">RFC 1890</a>] RTP Profile for Audio and Video Conferences with Minimal Control.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3551.html">RFC 3551</a>.
                		  </div>
		  
</section>


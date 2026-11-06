---
id: protocol-rtp
slug: rtp
name: RTP
expandedName: Real-time Transport Protocol
origin: historical
provenance:
  source: protocols/protocol_RTP.htm
  sha256: 5ac08ebb2fa2d3a5580470133b53601916bf42f31a1596b4adb1ce897c40e74b
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Real-time Transport Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Real-time Transport Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: SNMP MIBs
    html: |-
      iso.org.dod.internet.mgmt.mib-2.rtpMIB (1.3.6.1.2.1.10.87)
      <br />iso.org.dod.internet.mgmt.mib-2.rohcRtpMIB (1.3.6.1.2.1.114)
  - label: Ports
    html: 5004 (UDP)
  - label: Related protocols
    html: 'UDP,<br />TCP,<br />RTSP,<br />RTCP'
  - label: Working groups
    html: 'AVT, Audio/Video Transport'
originalUpdate: '2007-02-26 11:43:49'
rfcs:
  - 1889
  - 1890
  - 2029
  - 2032
  - 2035
  - 2038
  - 2190
  - 2198
  - 2250
  - 2343
  - 2429
  - 2431
  - 2435
  - 2508
  - 2658
  - 2733
  - 2736
  - 2762
  - 2793
  - 2833
  - 2862
  - 2959
  - 3009
  - 3016
  - 3047
  - 3095
  - 3119
  - 3158
  - 3189
  - 3190
  - 3267
  - 3389
  - 3497
  - 3545
  - 3550
  - 3551
  - 3555
  - 3557
  - 3558
  - 3625
  - 3640
  - 3711
  - 3816
  - 3952
  - 3984
  - 4040
  - 4060
  - 4103
  - 4170
  - 4175
  - 4184
  - 4298
  - 4348
  - 4351
  - 4352
related:
  - protocol-udp
  - protocol-tcp
  - protocol-rtsp
  - protocol-rtcp
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

			RTP provides end-to-end network transport functions suitable for applications transmitting real-time data, such as audio, video or simulation data, over multicast or unicast network services. RTP does not address resource reservation and does not guarantee quality-of-service for real-time services. The data transport is augmented by a control protocol (RTCP) to allow monitoring of the data delivery in a manner scalable to large multicast networks, and to provide minimal control and identification functionality. RTP and RTCP are designed to be independent of the underlying transport and network layers. The protocol supports the use of RTP-level translators and mixers.
<br />
<br />RTP does not have a standard TCP or UDP port that it communicates on. The only standard that it obeys is that UDP communications are done via an even port and the next higher odd port is used for RTP Control Protocol (RTCP) communications. Although there are no standards assigned, RTP is generally configured to use ports 16384-32767. RTP only carries voice/video data. Call setup and tear-down is usually performed by the SIP protocol. The fact that RTP uses a dynamic port range makes it difficult for it to traverse firewalls. In order to get around this problem, it is often necessary to set up a STUN server.
<br />
<br />It was originally designed as a multicast protocol, but has since been applied in many unicast applications. It is frequently used in streaming media systems (in conjunction with RTSP) as well as videoconferencing and push to talk systems (in conjunction with H.323 or SIP), making it the technical foundation of the Voice over IP industry. It goes along with the RTCP and it's built on top of the User Datagram Protocol (UDP). Applications using RTP are less sensitive to packet loss, but typically very sensitive to delays, so UDP is a better choice than TCP for such applications.
<br />
<br />According to <a href="https://www.rfc-editor.org/rfc/rfc1889.html">RFC 1889</a>, the services provided by RTP include:
<br /><ul><li>Payload-type identification - Indication of what kind of content is being carried<br /></li> 
<li>Sequence numbering - PDU sequence number <br /></li>
<li>Time stamping - presentation time of the content being carried in the PDU<br /></li> 
<li>Delivery monitoring</li></ul>
<br />
<br />RTP represents a new style of protocol following the principles of application level framing and integrated layer processing proposed by Clark and Tennenhouse. That is, RTP is intended to be malleable to provide the information required by a particular application and will often be integrated into the application processing rather than being implemented as a separate layer. RTP is a protocol framework that is deliberately not complete. This document specifies those functions expected to be common across all the applications for which RTP would be appropriate. Unlike conventional protocols in which additional functions might be accommodated by making the protocol more general or by adding an option mechanism that would require parsing, RTP is intended to be tailored through modifications and/or additions to the headers as needed.  
<br />
<br />Therefore, in addition to this document, a complete specification of RTP for a particular application will require one or more companion documents:
<br /><ul><li>A profile specification document, which defines a set of payload type codes and their mapping to payload formats (e.g., media encodings). A profile may also define extensions or modifications to RTP that are specific to a particular class of applications. Typically an application will operate under only one profile. A profile for audio and video data may be found in the companion <a>RFC <span class="unavailable"> [Malformed historical RFC reference: no identifier supplied]</span></a>.<br /><br /></li>

<li>Payload format specification documents, which define how a particular payload, such as an audio or video encoding, is to be carried in RTP.</li></ul>
<br /><hr />
<br /><b>Header format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>2</td><td>3</td><td>4</td><td>8</td><td>9</td><td>16bit</td><td>32bit</td></tr><tr><td>V</td><td>P</td><td>X</td><td>CSRC count</td><td>M</td><td>Payload type</td><td>Sequence number</td></tr><tr><td colspan="7">Timestamp</td></tr><tr><td colspan="7">Synchronization source (SSRC)</td></tr><tr><td colspan="7">Contributing source (CSRC: variable 0 - 15 items, 2 octets each)</td></tr></tbody></table></div></div>
<br /><ul><li><b>V (Version)</b><br /></li>
<li>V is RTP version number. Always set to 2.
<br /><br /></li>
<li><b>P (Padding)</b><br /></li>
<li>If set, this packet contains one or more additional padding bytes at the end which are not part of the payload. The last byte of the padding contains a count of how many padding bytes should be ignored. Padding may be needed by some encryption algorithms with fixed block sizes or for carrying several RTP packets in a lower-layer protocol data unit.
<br /><br /></li>
<li><b>X (Extension bit) </b><br /></li>
<li>When set, the fixed header is followed by exactly one header extension, with a defined format.
<br /><br /></li>
<li><b>CSRC count</b><br /></li>
<li>Contains the number of CSRC identifiers that follow the fixed header.
<br /><br /></li>
<li><b>M (Marker)</b><br /></li>
<li>The interpretation of the marker is defined by a profile. It is intended to allow significant events such as frame boundaries to be marked in the packet stream. A profile may define additional marker bits or specify that there is no marker bit by changing the number of bits in the payload type field.
<br /><br /></li>
<li><b>Payload type</b><br /></li>
<li>Identifies the format of the RTP payload and determines its interpretation by the application. A profile specifies a default static mapping of payload type codes to payload formats. Additional payload type codes may be defined dynamically through non-RTP means.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><b>PT</b></td><td><b>Name</b></td><td><b>Type</b></td><td><b>Clock rate (Hz)</b></td><td><b>Audio channels</b></td></tr><tr><td><b>0</b></td><td>PCMU</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>1</b></td><td>1016</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>2</b></td><td>G721</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>3</b></td><td>GSM</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>4</b></td><td>G723</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td>
<br /><b>5</b></td><td>DVI4</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>6</b></td><td>DVI4</td><td>Audio</td><td>16000</td><td>1</td></tr><tr><td><b>7</b></td><td>LPC</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>8</b></td><td>PCMA</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>9</b></td><td>G722</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>10</b></td><td>L16</td><td>Audio</td><td>44100</td><td>2</td></tr><tr><td><b>11</b></td><td>L16</td><td>Audio</td><td>44100</td><td>1</td></tr><tr><td><b>12</b></td><td>QCELP</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>13</b></td><td>CN</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>14</b></td><td>MPA</td><td>Audio</td><td>90000</td><td> </td></tr><tr><td><b>15</b></td><td>G728</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>16</b></td><td>DVI4</td><td>Audio</td><td>11025</td><td>1</td></tr><tr><td><b>17</b></td><td>DVI4</td><td>Audio</td><td>22050</td><td>1</td></tr><tr><td><b>18</b></td><td>G729</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>19</b></td><td>reserved</td><td>Audio</td><td>  </td><td>  </td></tr><tr><td><b>20-24</b></td><td>  </td><td>  </td><td>  </td><td>  </td></tr><tr><td><b>25</b></td><td>CellB</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>26</b></td><td>JPEG</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>27</b></td><td> </td><td> </td><td> </td><td> </td></tr><tr><td><b>28</b></td><td>nv</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>29-30</b></td><td> </td><td> </td><td> </td><td> </td></tr><tr><td><b>31</b></td><td>H261</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>32</b></td><td>MPV</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>33</b></td><td>MP2T</td><td>Audio/Video</td><td>90000</td><td> </td></tr><tr><td><b>34</b></td><td>H263</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>35-71</b></td><td> </td><td> </td><td> </td><td> </td></tr><tr><td><b>72-76</b></td><td>reserved</td><td> </td><td> </td><td> </td></tr><tr><td><b>77-95</b></td><td> </td><td> </td><td> </td><td> </td></tr><tr><td><b>96-127</b></td><td>dynamic</td><td> </td><td> </td><td> </td></tr><tr><td><b>dynamic</b></td><td>GSM-HR</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>dynamic</b></td><td>GSM-EFR</td><td>Audio</td><td>8000</td><td>1</td></tr><tr><td><b>dynamic</b></td><td>L8</td><td>Audio</td><td>variable</td><td>variable</td></tr><tr><td><b>dynamic</b></td><td>RED</td><td>Audio</td><td> </td><td> </td></tr><tr><td><b>dynamic</b></td><td>VDVI</td><td>Audio</td><td>variable</td><td>1</td></tr><tr><td><b>dynamic</b></td><td>BT656</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>dynamic</b></td><td>H263-1998</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>dynamic</b></td><td>MP1S</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>dynamic</b></td><td>MP2P</td><td>Video</td><td>90000</td><td> </td></tr><tr><td><b>dynamic</b></td><td>BMPEG</td><td>Video</td><td>90000</td><td> </td></tr></tbody></table></div></div><br /></li>
<li><b>Sequence Number</b><br /></li>
<li>The sequence number increments by one for each RTP data packet sent, and may be used by the receiver to detect packet loss and to restore packet sequence. The initial value of the sequence number is random (unpredictable) to make known-plaintext attacks on encryption more difficult, even if the source itself does not encrypt, because the packets may flow through a translator that does.
<br /><br /></li>
<li><b>Timestamp</b><br /></li>
<li>The timestamp reflects the sampling instant of the first octet in the RTP data packet. The sampling instant must be derived from a clock that increments monotonically and linearly in time to allow synchronization and jitter calculations. The resolution of the clock must be sufficient for the desired synchronization accuracy and for measuring packet arrival jitter (one tick per video frame is typically not sufficient). The clock frequency is dependent on the format of data carried as payload and is specified statically in the profile or payload format specification that defines the format, or may be specified dynamically for payload formats defined through non-RTP means. If RTP packets are generated periodically, the nominal sampling instant as determined from the sampling clock is to be used, not a reading of the system clock. As an example, for fixed-rate audio the timestamp clock would likely increment by one for each sampling period. If an audio application reads blocks covering 160 sampling periods from the input device, the timestamp would be increased by 160 for each such block, regardless of whether the block is transmitted in a packet or dropped as silent.
<br /><br /></li>
<li><b>SSRC (Synchronization source)</b><br /></li>
<li>Identifies the synchronization source. The value is chosen randomly, with the intent that no two synchronization sources within the same RTP session will have the same SSRC. Although the probability of multiple sources choosing the same identifier is low, all RTP implementations must be prepared to detect and resolve collisions. If a source changes its source transport address, it must also choose a new SSRC to avoid being interpreted as a looped source.
<br /><br /></li>
<li><b>CSRC (Contributing source)</b><br /></li>
<li>An array of 0 to 15 CSRC elements identifying the contributing sources for the payload contained in this packet. The number of identifiers is given by the CC field. If there are more than 15 contributing sources, only 15 may be identified. CSRC identifiers are inserted by mixers, using the SSRC identifiers of contributing sources. For example, for audio packets the SSRC identifiers of all sources that were mixed together to create packets are listed, allowing correct talker indication at the receiver.</li></ul>
<br /><hr />
<br /><b>RTP Use Scenarios</b>
<br />The following sections describe some aspects of the use of RTP. The examples were chosen to illustrate the basic operation of applications using RTP, not to limit what RTP may be used for.  In these examples, RTP is carried on top of IP and UDP, and follows the conventions established by the profile for audio and video specified in the companion <a href="https://www.rfc-editor.org/rfc/rfc3551.html">RFC 3551</a>.
<br />
<br /><ul><li><b>Simple Multicast Audio Conference</b><br /></li>
<li>A working group of the IETF meets to discuss the latest protocol document, using the IP multicast services of the Internet for voice communications. Through some allocation mechanism the working group chair obtains a multicast group address and pair of ports. One port is used for audio data, and the other is used for control (RTCP) packets. This address and port information is distributed to the intended participants. If privacy is desired, the data and control packets may be encrypted as specified in Section 9.1, in which case an encryption key must also be generated and distributed. The exact details of these allocation and distribution mechanisms are beyond the scope of RTP.
<br /><br /></li>
<li>The audio conferencing application used by each conference participant sends audio data in small chunks of, say, 20 ms duration. Each chunk of audio data is preceded by an RTP header; RTP header and data are in turn contained in a UDP packet. The RTP header indicates what type of audio encoding (such as PCM, ADPCM or LPC) is contained in each packet so that senders can change the encoding during a conference, for example, to accommodate a new participant that is connected through a low-bandwidth link or react to indications of network congestion.
<br /><br /></li>
<li>The Internet, like other packet networks, occasionally loses and reorders packets and delays them by variable amounts of time. To cope with these impairments, the RTP header contains timing information and a sequence number that allow the receivers to reconstruct the timing produced by the source, so that in this example, chunks of audio are contiguously played out the speaker every 20 ms. This timing reconstruction is performed separately for each source of RTP packets in the conference. The sequence number can also be used by the receiver to estimate how many packets are being lost.
<br /><br /></li>
<li>Since members of the working group join and leave during the conference, it is useful to know who is participating at any moment and how well they are receiving the audio data. For that purpose, each instance of the audio application in the conference periodically multicasts a reception report plus the name of its user on the RTCP (control) port. The reception report indicates how well the current speaker is being received and may be used to control adaptive encodings. In addition to the user name, other identifying information may also be included subject to control bandwidth limits. A site sends the RTCP BYE packet when it leaves the conference.
<br /><br /></li>
<li><b>Audio and Video Conference</b><br /></li>
<li>If both audio and video media are used in a conference, they are transmitted as separate RTP sessions. That is, separate RTP and RTCP packets are transmitted for each medium using two different UDP port pairs and/or multicast addresses. There is no direct coupling at the RTP level between the audio and video sessions, except that a user participating in both sessions should use the same distinguished (canonical) name in the RTCP packets for both so that the sessions can be associated.
<br /><br /></li>
<li>One motivation for this separation is to allow some participants in the conference to receive only one medium if they choose. Despite the separation, synchronized playback of a source's audio and video can be achieved using timing information carried in the RTCP packets for both sessions.
<br /><br /></li>
<li><b>Mixers and Translators</b><br /></li>
<li>So far, we have assumed that all sites want to receive media data in the same format. However, this may not always be appropriate. Consider the case where participants in one area are connected through a low-speed link to the majority of the conference participants who enjoy high-speed network access. Instead of forcing everyone to use a lower-bandwidth, reduced-quality audio encoding, an RTP-level relay called a mixer may be placed near the low-bandwidth area. This mixer resynchronizes incoming audio packets to reconstruct the constant 20 ms spacing generated by the sender, mixes these reconstructed audio streams into a single stream, translates the audio encoding to a lower-bandwidth one and forwards the lower-bandwidth packet stream across the low-speed link. These packets might be unicast to a single recipient or multicast on a different address to multiple recipients. The RTP header includes a means for mixers to identify the sources that contributed to a mixed packet so that correct talker indication can be provided at the receivers.
<br /><br /></li>
<li>Some of the intended participants in the audio conference may be connected with high bandwidth links but might not be directly reachable via IP multicast. For example, they might be behind an application-level firewall that will not let any IP packets pass. For these sites, mixing may not be necessary, in which case another type of RTP-level relay called a translator may be used. Two translators are installed, one on either side of the firewall, with the outside one funneling all multicast packets received through a secure connection to the translator inside the firewall. The translator inside the firewall sends them again as multicast packets to a multicast group restricted to the site's internal network.
<br /><br /></li>
<li>Mixers and translators may be designed for a variety of purposes. An example is a video mixer that scales the images of individual people in separate video streams and composites them into one video stream to simulate a group scene. Other examples of translation include the connection of a group of hosts speaking only IP/UDP to a group of hosts that understand only ST-II, or the packet-by-packet encoding translation of video streams from individual sources without resynchronization or mixing.  
<br /><br /></li>
<li><b>Layered Encodings</b><br /></li>
<li>Multimedia applications should be able to adjust the transmission rate to match the capacity of the receiver or to adapt to network congestion. Many implementations place the responsibility of rate-adaptivity at the source. This does not work well with multicast transmission because of the conflicting bandwidth requirements of heterogeneous receivers. The result is often a least-common denominator scenario, where the smallest pipe in the network mesh dictates the quality and fidelity of the overall live multimedia "broadcast".
<br /><br /></li>
<li>Instead, responsibility for rate-adaptation can be placed at the receivers by combining a layered encoding with a layered transmission system. In the context of RTP over IP multicast, the source can stripe the progressive layers of a hierarchically represented signal across multiple RTP sessions each carried on its own multicast group. Receivers can then adapt to network heterogeneity and control their reception bandwidth by joining only the appropriate subset of the multicast groups.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">UDP<img src="/supporting/images/tline_l_top.gif" alt="" /><br />VINES<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RTP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Audio<br /><img src="/supporting/images/tline_r.gif" alt="" />Video<br /><img src="/supporting/images/tline_r.gif" alt="" />Audeo/Video<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Dynamic<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>CSRC</b><br />CSRC (Contributing source) is a source of a stream of RTP packets that has contributed to the combined stream produced by an RTP mixer. The mixer inserts a list of the SSRC identifiers of the sources that contributed to the generation of a particular packet into the RTP header of that packet. This list is called the CSRC list. An example application is audio conferencing where a mixer indicates all the talkers whose speech was combined to produce the outgoing packet, allowing the receiver to indicate the current talker, even though all the audio packets contain the same SSRC identifier.<br /><br /><b>H.323</b><br />H.323 is an umbrella recommendation from the ITU-T, that defines the protocols to provide audio-visual communication sessions on any packet network. It is currently implemented by various Internet real-time applications such as NetMeeting and GnomeMeeting. It is a part of the H.32x series of protocols which also address communications over ISDN, PSTN or SS7. H.323 is commonly used in Voice over IP (VoIP) and IP-based videoconferencing.<br /><br /><b>Mixer</b><br />Mixer is an intermediate system that receives RTP packets from one or more sources, possibly changes the data format, combines the packets in some manner and then forwards a new RTP packet. Since the timing among multiple input sources will not generally be synchronized, the mixer will make timing adjustments among the streams and generate its own timing for the combined stream. Thus, all data packets originating from a mixer will be identified as having the mixer as their synchronization source.<br /><br /><b>Monitor</b><br />Monitor is an application that receives RTCP packets sent by participants in an RTP session, in particular the reception reports, and estimates the current quality of service for distribution monitoring, fault diagnosis and long-term statistics. The monitor function is likely to be built into the application(s) participating in the session, but may also be a separate application that does not otherwise participate and does not send or receive the RTP data packets. These are called third party monitors.
<br /><br /><br /><b>Non-RTP means</b><br />Non-RTP means are protocols and mechanisms that may be needed in addition to RTP to provide a usable service. In particular, for multimedia conferences, a control protocol may distribute multicast addresses and keys for encryption, negotiate the encryption algorithm to be used, and define dynamic mappings between RTP payload type values and the payload formats they represent for formats that do not have a predefined payload type value.<br /><br /><b>RTCP</b><br />The RTP control protocol (RTCP) is based on the periodic transmission of control packets to all participants in the session, using the same distribution mechanism as the data packets. The underlying protocol must provide multiplexing of the data and control packets.<br /><br /><b>RTCP packet</b><br />RTCP packet is a control packet consisting of a fixed header part similar to that of RTP data packets, followed by structured elements that vary depending upon the RTCP packet type. Typically, multiple RTCP packets are sent together as a compound RTCP packet in a single packet of the underlying protocol; this is enabled by the length field in the fixed header of each RTCP packet.<br /><br /><b>RTP</b><br />RTP (Real-Time Transport Protocol) is an Internet protocol for transmitting real-time data such as audio and video. RTP itself does not guarantee real-time delivery of data, but it does provide mechanisms for the sending and receiving applications to support streaming data. Typically, RTP runs on top of the UDP protocol, although the specification is general enough to support other transport protocols.<br /><br /><b>RTP packet</b><br />RTP packet is a data packet consisting of the fixed RTP header, a possibly empty list of contributing sources (see below), and the payload data. Some underlying protocols may require an encapsulation of the RTP packet to be defined.<br /><br /><b>SIP</b><br />Session Initiated Protocol (SIP) is an application-layer control protocol; a signaling protocol for Internet Telephony. SIP can establish sessions for features such as audio/videoconferencing, interactive gaming, and call forwarding to be deployed over IP networks, thus enabling service providers to integrate basic IP telephony services with Web, e-mail, and chat services.<br /><br /><b>SSRC</b><br />Synchronization source (SSRC) is the source of a stream of RTP packets, identified by a 32-bit numeric SSRC identifier carried in the RTP header so as not to be dependent upon the network address. All packets from a synchronization source form part of the same timing and sequence number space, so a receiver groups packets by synchronization source for playback.<br /><br /><b>Translator</b><br />Translator is an intermediate system that forwards RTP packets with their synchronization source identifier intact. Examples of translators include devices that convert encodings without mixing, replicators from multicast to unicast, and application- level filters in firewalls.<br /><br /><b>Transport address</b><br />The Transport Address is traditionally defined by Network Layer address, Transport Layer protocol and Transport Layer port number. In the case of SCTP running over IP, a transport address is defined by the combination of an IP address and an SCTP port number (where SCTP is the Transport protocol).<br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br /><b>Unicast</b><br />Unicast is a communication that takes place over a network between a single sender and a single receiver.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links</b>
                <a href="https://www.iana.org/assignments/rtp-parameters/&quot;">RTP parameters</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2029.html">RFC 2029</a>] RTP Payload Format of Sun's CellB Video Encoding.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2032.html">RFC 2032</a>] RTP Payload Format for H.261 Video Streams.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2190.html">RFC 2190</a>] RTP Payload Format for H.263 Video Streams.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2198.html">RFC 2198</a>] RTP Payload for Redundant Audio Data.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2250.html">RFC 2250</a>] RTP Payload Format for MPEG1/MPEG2 Video. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2038.html">RFC 2038</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc2343.html">RFC 2343</a>] RTP Payload Format for Bundled MPEG.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2429.html">RFC 2429</a>] RTP Payload Format for the 1998 Version of ITU-T Rec. H.263 Video (H.263+).
                
[<a href="https://www.rfc-editor.org/rfc/rfc2431.html">RFC 2431</a>] RTP Payload Format for BT.656 Video Encoding.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2435.html">RFC 2435</a>] RTP Payload Format for JPEG-compressed Video.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2035.html">RFC 2035</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc2508.html">RFC 2508</a>] Compressing IP/UDP/RTP Headers for Low-Speed Serial Links.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2658.html">RFC 2658</a>] RTP Payload Format for PureVoice(tm) Audio.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2733.html">RFC 2733</a>] An RTP Payload Format for Generic Forward Error Correction.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2736.html">RFC 2736</a>] Guidelines for Writers of RTP Payload Format Specifications.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2762.html">RFC 2762</a>] Sampling of the Group Membership in RTP.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2833.html">RFC 2833</a>] RTP Payload for DTMF Digits, Telephony Tones and Telephony Signals.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2862.html">RFC 2862</a>] RTP Payload Format for Real-Time Pointers.
                
[<a href="https://www.rfc-editor.org/rfc/rfc2959.html">RFC 2959</a>] Real-Time Transport Protocol Management Information Base.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.rtpMIB (1.3.6.1.2.1.10.87). 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3009.html">RFC 3009</a>] Registration of parityfec MIME types.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3016.html">RFC 3016</a>] RTP Payload Format for MPEG-4 Audio/Visual Streams.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3047.html">RFC 3047</a>] RTP Payload Format for ITU-T Recommendation G.722.1.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3095.html">RFC 3095</a>] RObust Header Compression (ROHC): Framework and four profiles: RTP, UDP, ESP, and uncompressed.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3119.html">RFC 3119</a>] A More Loss-Tolerant RTP Payload Format for MP3 Audio.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3158.html">RFC 3158</a>] RTP Testing Strategies.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3189.html">RFC 3189</a>] RTP Payload Format for DV (IEC 61834) Video.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3190.html">RFC 3190</a>] RTP Payload Format for 12-bit DAT Audio and 20- and 24-bit Linear Sampled Audio.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3267.html">RFC 3267</a>] Real-Time Transport Protocol (RTP) Payload Format and File Storage Format for the Adaptive Multi-Rate (AMR) and Adaptive Multi-Rate Wideband (AMR-WB) Audio Codecs.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3389.html">RFC 3389</a>] Real-time Transport Protocol (RTP) Payload for Comfort Noise (CN).
                Defines MIME media subtype audio/CN. 
                Defines RTP payload type CN. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3497.html">RFC 3497</a>] RTP Payload Format for Society of Motion Picture and Television Engineers (SMPTE) 292M Video.
                Defines MIME media subtype video/SMPTE292M. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3558.html">RFC 3558</a>] RTP Payload Format for Enhanced Variable Rate Codecs (EVRC) and Selectable Mode Vocoders (SMV).
                Defines MIME media subtypes audio/EVRC, audio/EVRC0, audio/SMV and audio/SMV0. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3545.html">RFC 3545</a>] Enhanced Compressed RTP (CRTP) for Links with High Delay, Packet Loss and Reordering.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3550.html">RFC 3550</a>] RTP: A Transport Protocol for Real-Time Applications.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1889.html">RFC 1889</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3551.html">RFC 3551</a>] RTP Profile for Audio and Video Conferences with Minimal Control.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1890.html">RFC 1890</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3555.html">RFC 3555</a>] MIME Type Registration of RTP Payload Formats.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3625.html">RFC 3625</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3557.html">RFC 3557</a>] RTP Payload Format for European Telecommunications Standards Institute (ETSI) European Standard ES 201 108 Distributed Speech Recognition Encoding.
                Defines MIME media subtype audio/dsr-es201108. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3640.html">RFC 3640</a>] RTP Payload Format for Transport of MPEG-4 Elementary Streams.
                
[<a href="https://www.rfc-editor.org/rfc/rfc3711.html">RFC 3711</a>] The Secure Real-time Transport Protocol (SRTP).
                Defines RTP profile RTP/SAVP. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3816.html">RFC 3816</a>] Definitions of Managed Objects for RObust Header Compression (ROHC).
                iso.org.dod.internet.mgmt.mib-2.rohcMIB (1.3.6.1.2.1.112) 
                iso.org.dod.internet.mgmt.mib-2.rohcUncmprMIB (1.3.6.1.2.1.113) 
                iso.org.dod.internet.mgmt.mib-2.rohcRtpMIB (1.3.6.1.2.1.114) 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3952.html">RFC 3952</a>] Real-time Transport Protocol (RTP) Payload Format for internet Low Bit Rate Codec (iLBC) Speech.
                Defines MIME media subtype audio/iLBC. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc3984.html">RFC 3984</a>] RTP Payload Format for H.264 Video.
                Defines MIME media subtype video/H264. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4040.html">RFC 4040</a>] RTP Payload Format for a 64 kbit/s Transparent Call.
                Defines MIME media subtype audio/clearmode. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4060.html">RFC 4060</a>] RTP Payload Formats for European Telecommunications Standards Institute (ETSI) European Standard ES 202 050, ES 202 211, and ES 202 212 Distributed Speech Recognition Encoding.
                Defines MIME media subtypes audio/dsr-es202050, audio/dsr-es202211 and audio/dsr-es202212. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4103.html">RFC 4103</a>] RTP Payload for Text Conversation.
                Defines MIME media subtype text/t140. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2793.html">RFC 2793</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4170.html">RFC 4170</a>] Tunneling Multiplexed Compressed RTP (TCRTP).
                BCP: 110. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4175.html">RFC 4175</a>] RTP Payload Format for Uncompressed Video.
                Defines MIME media subtype video/raw. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4184.html">RFC 4184</a>] RTP Payload Format for AC-3 Audio.
                
[<a href="https://www.rfc-editor.org/rfc/rfc4298.html">RFC 4298</a>] RTP Payload Format for BroadVoice Speech Codecs.
                Defines MIME media subtypes audio/BV16 and audio/BV32. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4348.html">RFC 4348</a>] Real-Time Transport Protocol (RTP) Payload Format for the Variable-Rate Multimode Wideband (VMR-WB) Audio Codec.
                Category: Standards Track. 
                Defines MIME media subtype audio/VMR-WB. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4351.html">RFC 4351</a>] Real-Time Transport Protocol (RTP) Payload for Text Conversation Interleaved in an Audio Stream.
                Category: Historic. 
                Defines MIME media subtype audio/t140c. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc4352.html">RFC 4352</a>] RTP Payload Format for the Extended Adaptive Multi-Rate Wideband (AMR-WB+) Audio Codec.
                Category: Standards Track. 
                Defines MIME media subtype audio/amr-wb+. <hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1889.html">RFC 1889</a>] RTP: A Transport Protocol for Real-Time Applications.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3550.html">RFC 3550</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc1890.html">RFC 1890</a>] RTP Profile for Audio and Video Conferences with Minimal Control.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3551.html">RFC 3551</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc2035.html">RFC 2035</a>] RTP Payload Format for JPEG-compressed Video.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2435.html">RFC 2435</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc2038.html">RFC 2038</a>] RTP Payload Format for MPEG1/MPEG2 Video.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2250.html">RFC 2250</a>. 
                
[<a href="https://www.rfc-editor.org/rfc/rfc2793.html">RFC 2793</a>] RTP Payload for Text Conversation.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc4103.html">RFC 4103</a>. 
                Defines MIME media subtype text/t140.
                		  </div>
		  
</section>


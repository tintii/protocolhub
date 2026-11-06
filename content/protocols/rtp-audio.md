---
id: protocol-rtp-audio
slug: rtp-audio
name: RTP Audio
expandedName: Real-time Transport Protocol Audio
origin: historical
provenance:
  source: protocols/protocol_RTP Audio.htm
  sha256: 142055c63e9b8ff3eb4b2f0938fe932f906150206259197e35fa540f2588b401
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Real-time Transport Protocol Audio
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Real-time Transport Protocol  Audio
  - label: Protocol suite
    html: ' TCP/IP'
  - label: Layer
    html: ' Application Layer'
  - label: SNMP MIBs
    html: |-
      iso.org.dod.internet.mgmt.mib-2.rtpMIB (1.3.6.1.2.1.10.87). 
      <br />iso.org.dod.internet.mgmt.mib-2.rohcRtpMIB (1.3.6.1.2.1.114)
  - label: Ports
    html: 5004 (UDP)
  - label: Related protocols
    html: 'RTP,<br />UDP,<br />TCP,<br />RTSP,<br />RTCP'
  - label: Working groups
    html: 'AVT, Audio/Video Transport'
originalUpdate: '2007-02-26 11:45:11'
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
  - protocol-rtp
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

			<b>Encoding-Independent Rules</b>
<br />Since the ability to suppress silence is one of the primary motivations for using packets to transmit voice, the RTP header carries both a sequence number and a timestamp to allow a receiver to distinguish between lost packets and periods of time when no data was transmitted.  Discontiguous transmission (silence suppression) may be used with any audio payload format.  Receivers must assume that senders may suppress silence unless this is restricted by signaling specified elsewhere. (Even if the transmitter does not suppress silence, the receiver should be prepared to handle periods when no data is present since packets may be lost.)
<br />
<br />Some payload formats define a "silence insertion descriptor" or "comfort noise" frame to specify parameters for artificial noise that may be generated during a period of silence to approximate the background noise at the source. For other payload formats, a generic Comfort Noise (CN) payload format is specified in <a href="https://www.rfc-editor.org/rfc/rfc3389.html">RFC 3389</a> [9]. When the CN payload format is used with another payload format, different values in the RTP payload type field distinguish comfort-noise packets from those of the selected payload format.
<br />
<br />For applications which send either no packets or occasional comfort- noise packets during silence, the first packet of a talkspurt, that is, the first packet after a silence period during which packets have not been transmitted contiguously, should be distinguished by setting the marker bit in the RTP data header to one. The marker bit in all other packets is zero. The beginning of a talkspurt MAY be used to adjust the playout delay to reflect changing network delays. Applications without silence suppression MUST set the marker bit to zero.
<br />
<br />The RTP clock rate used for generating the RTP timestamp is independent of the number of channels and the encoding; it usually equals the number of sampling periods per second. For N-channel encodings, each sampling period (say, 1/8,000 of a second) generates N samples.  (This terminology is standard, but somewhat confusing, as the total number of samples generated per second is then the sampling rate times the channel count.)
<br />
<br />If multiple audio channels are used, channels are numbered left-to- right, starting at one. In RTP audio packets, information from lower-numbered channels precedes that from higher-numbered channels.
<br />
<br />For more than two channels, the convention followed by the AIFF-C audio interchange format should be followed, using the following notation, unless some other convention is specified for a particular encoding or payload format:
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>1</td><td>left</td></tr><tr><td>R</td><td>right</td></tr><tr><td>C</td><td>center</td></tr><tr><td>S</td><td>surround</td></tr><tr><td>F</td><td>front</td></tr><tr><td>R</td><td>rear</td></tr></tbody></table></div></div>
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">channels description
                                1     2   3   4   5   6
      _________________________________________________
      2         stereo          l     r
      3                         l     r   c
      4                         l     c   r   S
      5                        Fl     Fr  Fc  Sl  Sr
      6                         l     lc  c   r   rc  S</pre>
<br />
<br />Note: <a href="https://www.rfc-editor.org/rfc/rfc1890.html">RFC 1890</a> defined two conventions for the ordering of four audio channels. Since the ordering is indicated implicitly by the number of channels, this was ambiguous. In this revision, the order described as "quadrophonic" has been eliminated to remove the ambiguity. This choice was based on the observation that quadrophonic consumer audio format did not become popular whereas surround-sound subsequently has.
<br /><hr />
<br /><b>Operating Recommendations</b>
<br />The following recommendations are default operating parameters. Applications SHOULD be prepared to handle other values. The ranges given are meant to give guidance to application writers, allowing a set of applications conforming to these guidelines to interoperate without additional negotiation. These guidelines are not intended to restrict operating parameters for applications that can negotiate a set of interoperable parameters, e.g., through a conference control protocol.
<br />
<br />For packetized audio, the default packetization interval should have a duration of 20 ms or one frame, whichever is longer, unless otherwise noted in Table 1 (column "ms/packet"). The packetization interval determines the minimum end-to-end delay; longer packets introduce less header overhead but higher delay and make packet loss more noticeable. For non-interactive applications such as lectures or for links with severe bandwidth constraints, a higher packetization delay MAY be used. A receiver should accept packets representing between 0 and 200 ms of audio data. (For framed audio encodings, a receiver should accept packets with a number of frames equal to 200 ms divided by the frame duration, rounded up.) This restriction allows reasonable buffer sizing for the receiver.
<br />
<br /><b>Guidelines for Sample-Based Audio Encodings</b>
<br />In sample-based encodings, each audio sample is represented by a fixed number of bits. Within the compressed audio data, codes for individual samples may span octet boundaries. An RTP audio packet may contain any number of audio samples, subject to the constraint that the number of bits per sample times the number of samples per packet yields an integral octet count. Fractional encodings produce less than one octet per sample.
<br />
<br />The duration of an audio packet is determined by the number of samples in the packet.
<br />
<br />For sample-based encodings producing one or more octets per sample, samples from different channels sampled at the same sampling instant should be packed in consecutive octets. For example, for a two-channel encoding, the octet sequence is (left channel, first sample), (right channel, first sample), (left channel, second sample), (right channel, second sample), .... For multi-octet encodings, octets should be transmitted in network byte order (i.e., most significant octet first).
<br />
<br />The packing of sample-based encodings producing less than one octet per sample is encoding-specific.
<br />
<br />The RTP timestamp reflects the instant at which the first sample in the packet was sampled, that is, the oldest information in the packet.
<br />
<br /><b>Guidelines for Frame-Based Audio Encodings</b>
<br />Frame-based encodings encode a fixed-length block of audio into another block of compressed data, typically also of fixed length. For frame-based encodings, the sender may choose to combine several such frames into a single RTP packet. The receiver can tell the number of frames contained in an RTP packet, if all the frames have the same length, by dividing the RTP payload length by the audio frame size which is defined as part of the encoding. This does not work when carrying frames of different sizes unless the frame sizes are relatively prime. If not, the frames must indicate their size.
<br />
<br />For frame-based codecs, the channel order is defined for the whole block.  That is, for two-channel audio, right and left samples should be coded independently, with the encoded frame for the left channel preceding that for the right channel.
<br />
<br />All frame-oriented audio codecs should be able to encode and decode several consecutive frames within a single packet. Since the frame size for the frame-oriented codecs is given, there is no need to use a separate designation for the same encoding, but with different number of frames per packet.
<br />
<br />RTP packets shall contain a whole number of frames, with frames inserted according to age within a packet, so that the oldest frame (to be played first) occurs immediately after the RTP packet header. The RTP timestamp reflects the instant at which the first sample in the first frame was sampled, that is, the oldest information in the packet.
<br />
<br /><b>Audio Encodings</b>
<br />Properties of Audio Encodings (N/A: not applicable; var.: variable)
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><b>Name</b></td><td><b>sample/frame</b></td><td><b>bits/sample</b></td><td><b>sampling rate</b></td><td><b>ms/frame</b></td><td><b>default ms/packet</b></td></tr><tr><td>DVI4</td><td>sample</td><td>4</td><td>var.</td><td>20</td><td> </td></tr><tr><td>G722</td><td>sample</td><td>8</td><td>16,000</td><td>20</td><td> </td></tr><tr><td>G723</td><td>frame</td><td>N/A</td><td>8,000</td><td>30</td><td>30</td></tr><tr><td>G726-40</td><td>sample</td><td>5</td><td>8,000</td><td>20</td><td> </td></tr><tr><td>G726-32</td><td>sample</td><td>4</td><td>8,000</td><td>20</td><td> </td></tr><tr><td>G726-24</td><td>sample</td><td>3</td><td>8,000</td><td>20</td><td> </td></tr><tr><td>G726-16</td><td>sample</td><td>2</td><td>8,000</td><td>20</td><td> </td></tr><tr><td>G728</td><td>frame</td><td>N/A</td><td>8,000</td><td>2.5</td><td>20</td></tr><tr><td>G729</td><td>frame</td><td>N/A</td><td>8,000</td><td>10</td><td>20</td></tr><tr><td>G729D</td><td>frame</td><td>N/A</td><td>8,000</td><td>10</td><td>20</td></tr><tr><td>G729E</td><td>frame</td><td>N/A</td><td>8,000</td><td>10</td><td>20</td></tr><tr><td>GSM</td><td>frame</td><td>N/A</td><td>8,000</td><td>20</td><td>20</td></tr><tr><td>GSM-EFR</td><td>frame</td><td>N/A</td><td>8,000</td><td>20</td><td>20</td></tr><tr><td>L8</td><td>sample</td><td>8</td><td>var.</td><td>20</td><td> </td></tr><tr><td>L16</td><td>sample</td><td>16</td><td>var.</td><td>20</td><td> </td></tr><tr><td>LPC</td><td>frame</td><td>N/A</td><td>8,000</td><td>20</td><td>20</td></tr><tr><td>MPA</td><td>frame</td><td>N/A</td><td>var.</td><td>var.</td><td> </td></tr><tr><td>PCMA</td><td>sample</td><td>8</td><td>var.</td><td>20</td><td> </td></tr><tr><td>PCMU</td><td>sample</td><td>8</td><td>var.</td><td>20</td><td> </td></tr><tr><td>QCELP</td><td>frame</td><td>N/A</td><td>8,000</td><td>20</td><td>20</td></tr><tr><td>VDVI</td><td>sample</td><td>var.</td><td>var.</td><td>20</td><td> </td></tr></tbody></table></div></div>
<br />
<br />The characteristics of the audio encodings described in this document are shown in Table 1; they are listed in order of their payload type in Table 4. While most audio codecs are only specified for a fixed sampling rate, some sample-based algorithms (indicated by an entry of "var." in the sampling rate column of Table 1) may be used with different sampling rates, resulting in different coded bit rates. When used with a sampling rate other than that for which a static payload type is defined, non-RTP means beyond the scope of this memo must be used to define a dynamic payload type and must indicate the selected RTP timestamp clock rate, which is usually the same as the sampling rate for audio.
<br />
<br />
<br />		    
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		</blockquote>
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
			<b>RFCs:</b>
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
                Defines MIME media subtype audio/amr-wb+. 
                <hr /><b><b>Obsolete RFCs:</b></b>
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


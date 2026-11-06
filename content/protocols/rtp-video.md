---
id: protocol-rtp-video
slug: rtp-video
name: RTP Video
expandedName: Real-time Transport Protocol Video
origin: historical
provenance:
  source: protocols/protocol_RTP Video.htm
  sha256: f268f3e2a85ee5c1e2cb48d9e0eafac30a8dbec30a35edc7be111e48a4f92aec
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Real-time Transport Protocol Video
layers:
  - Application Layer
suites: []
summary:
  - label: Protocol
    html: Real-time Transport Protocol Video
  - label: Layer
    html: ' Application Layer'
  - label: SNMP MIBs
    html: |2-
       iso.org.dod.internet.mgmt.mib-2.rtpMIB (1.3.6.1.2.1.10.87). 
      <br />iso.org.dod.internet.mgmt.mib-2.rohcRtpMIB (1.3.6.1.2.1.114)
  - label: Ports
    html: 5004 (UDP).
  - label: Related protocols
    html: 'RTP,<br />UDP,<br />TCP,<br />RTSP,<br />RTCP'
  - label: Working groups
    html: 'AVT, Audio/Video Transport.'
originalUpdate: '2007-02-26 11:44:38'
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

			All of these video encodings use an RTP timestamp frequency of 90,000 Hz, the same as the MPEG presentation time stamp frequency. This frequency yields exact integer timestamp increments for the typical 24 (HDTV), 25 (PAL), and 29.97 (NTSC) and 30 Hz (HDTV) frame rates and 50, 59.94 and 60 Hz field rates. While 90 kHz is the recommended rate for future video encodings used within this profile, other rates may be used. However, it is not sufficient to use the video frame rate (typically between 15 and 30 Hz) because that does not provide adequate resolution for typical synchronization requirements when calculating the RTP timestamp corresponding to the NTP timestamp in an RTCP SR packet. The timestamp resolution must also be sufficient for the jitter estimate contained in the receiver reports.
<br />
<br />For most of these video encodings, the RTP timestamp encodes the sampling instant of the video image contained in the RTP data packet. If a video image occupies more than one packet, the timestamp is the same on all of those packets. Packets from different video images are distinguished by their different timestamps.
<br />
<br />Most of these video encodings also specify that the marker bit of the RTP header should be set to one in the last packet of a video frame and otherwise set to zero. Thus, it is not necessary to wait for a following packet with a different timestamp to detect that a new frame should be displayed.
<br />
<br /><b>CelB</b>
<br />The CELL-B encoding is a proprietary encoding proposed by Sun Microsystems. The Cell image compression algorithm is a variable bit-rate video coding scheme. It provides "high" quality, low bit-rate image compression at low computational cost. The bytestream that is produced by the Cell encoder consists of instructional codes and information about the compressed image.
<br />
<br />Currently, there are two versions of the Cell compression technology: CellA and CellB. CellA is primarily designed for the encoding of stored video intended for local display, and will not be discussed in this memo.
<br />
<br />CellB, derived from CellA, has been optimized for network-based video applications. It is computationally symmetric in both encode and decode. CellB utilizes a fixed colormap and vector quantization techniques in the YUV color space to achieve compression.
<br />
<br /><b>JPEG</b>
<br />The encoding is specified in ISO Standards 10918-1 and 10918-2. The Joint Photographic Experts Group (JPEG) standard defines a family of compression algorithms for continuous-tone, still images. This still image compression standard can be applied to video by compressing each frame of video as an independent still image and transmitting them in series. Video coded in this fashion is often called Motion-JPEG.
<br />
<br />The JPEG standard defines four modes of operation: the sequential DCT mode, the progressive DCT mode, the lossless mode, and the hierarchical mode. Depending on the mode, the image is represented in one or more passes. Each pass (called a frame in the JPEG standard) is further broken down into one or more scans. Within each scan, there are one to four components, which represent the three components of a color signal (e.g., "red, green, and blue", or a luminance signal and two chrominance signals). These components can be encoded as separate scans or interleaved into a single scan.
<br />
<br />Each frame and scan is preceded with a header containing optional definitions for compression parameters like quantization tables and Huffman coding tables. The headers and optional parameters are identified with "markers" and comprise a marker segment; each scan appears as an entropy-coded bit stream within two marker segments. Markers are aligned to byte boundaries and (in general) cannot appear in the entropy-coded segment, allowing scan boundaries to be determined without parsing the bit stream.
<br />
<br />Compressed data is represented in one of three formats: the interchange format, the abbreviated format, or the table-specification format. The interchange format contains definitions for all the tables used by the entropy-coded segments, while the abbreviated format might omit some assuming they were defined out-of-band or by a "previous" image.
<br />
<br />The JPEG standard does not define the meaning or format of the components that comprise the image. Attributes like the color space and pixel aspect ratio must be specified out-of-band with respect to the JPEG bit stream. The JPEG File Interchange Format (JFIF) is a de-facto standard that provides this extra information using an application marker segment (APP0). Note that a JFIF file is simply a JPEG interchange format image along with the APP0 segment. In the case of video, additional parameters must be defined out-of-band (e.g., frame rate, interlaced vs. non-interlaced, etc.).
<br />
<br /><b>H261</b>
<br />The H.261 information is carried as payload data within the RTP protocol. The following fields of the RTP header are specified:
<br />
<br />The payload type should specify H.261 payload format (see the companion RTP profile document <a href="https://www.rfc-editor.org/rfc/rfc1890.html">RFC 1890</a>).
<br />
<br />The RTP timestamp encodes the sampling instant of the first video image contained in the RTP data packet. If a video image occupies more than one packet, the timestamp will be the same on all of those packets. Packets from different video images must have different timestamps so that frames may be distinguished by the timestamp. For H.261 video streams, the RTP timestamp is based on a 90kHz clock. This clock rate is a multiple of the natural H.261 frame rate (i.e. 30000/1001 or approx. 29.97 Hz). That way, for each frame time, the clock is just incremented by the multiple and this removes inaccuracy in calculating the timestamp. Furthermore, the initial value of the timestamp is random (unpredictable) to make known-plaintext attacks on encryption more difficult, see RTP [1]. Note that if multiple frames are encoded in a packet (e.g. when there are very little changes between two images), it is necessary to calculate display times for the frames after the first using the timing information in the H.261 frame header. This is required because the RTP timestamp only gives the display time of the first frame in the packet.
<br />
<br />The marker bit of the RTP header is set to one in the last packet of a video frame, and otherwise, must be zero. Thus, it is not necessary to wait for a following packet (which contains the start code that terminates the current frame) to detect that a new frame should be displayed.
<br />
<br /><b>H263</b>
<br />The encoding is specified in the 1996 version of ITU-T Recommendation H.263, "Video coding for low bit rate communication". The packetization and RTP-specific properties are described in <a href="https://www.rfc-editor.org/rfc/rfc2190.html">RFC 2190</a>. 
<br />
<br />H.263 is based on the ITU-T Recommendation H.261 (referred to as H.261 in this document). Compared to H.261, H.263 employs similar techniques to reduce both temporal and spatial redundancy, but there are several major differences between the two algorithms that affect the design of packetization schemes significantly. This section summarizes those differences.
<br />
<br /><b>H263-1998</b>
<br />The encoding is specified in the 1998 version of ITU-T Recommendation H.263, "Video coding for low bit rate communication". The packetization and RTP-specific properties are described in <a href="https://www.rfc-editor.org/rfc/rfc2429.html">RFC 2429</a>. Because the 1998 version of H.263 is a superset of the 1996 syntax, this payload format can also be used with the 1996 version of H.263, and is recommended for this use by new implementations. This payload format does not replace <a href="https://www.rfc-editor.org/rfc/rfc2190.html">RFC 2190</a>, which continues to be used by existing implementations, and may be required for backward compatibility in new implementations. Implementations using the new features of the 1998 version of H.263 MUST use the payload format described in <a href="https://www.rfc-editor.org/rfc/rfc2429.html">RFC 2429</a>.
<br />
<br /><b>MPV</b>
<br />MPV designates the use of MPEG-1 and MPEG-2 video encoding elementary streams as specified in ISO Standards ISO/IEC 11172 and 13818-2, respectively. The RTP payload format is as specified in <a href="https://www.rfc-editor.org/rfc/rfc2250.html">RFC 2250</a>, Section 3.
<br />
<br />The MIME registration for MPV in <a href="https://www.rfc-editor.org/rfc/rfc3555.html">RFC 3555</a> specifies a parameter that MAY be used with MIME or SDP to restrict the selection of the type of MPEG video.
<br />
<br /><b>MP2T</b>
<br />MP2T designates the use of MPEG-2 transport streams, for either audio or video. The RTP payload format is described in <a href="https://www.rfc-editor.org/rfc/rfc2250.html">RFC 2250</a>.
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


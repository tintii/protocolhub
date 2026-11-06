---
id: protocol-ppp
slug: ppp
name: PPP
expandedName: Point-to-Point Protocol
origin: historical
provenance:
  source: protocols/protocol_PPP.htm
  sha256: 93203ef1ff69a94cca1a913574d9a81af8313645bab08d7e1e1264bf1fd180b1
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Point-to-Point Protocol
layers:
  - Data Link Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Point-to-Point Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Data Link Layer
  - label: Related protocols
    html: >-
      PPPoE,<br />PPPoA,<br />SLIP,<br />CHAP,<br />PAP,<br />HDLC,<br />LCP,<br />NCP,<br />IPCP,<br />L2TP,<br
      />IP,<br />IPX,<br />DECnet
  - label: Working groups
    html: 'PPPEXT, Point-to-Point Protocol Extensions'
originalUpdate: '2005-11-10 16:13:09'
rfcs:
  - 1134
  - 1171
  - 1172
  - 1220
  - 1331
  - 1332
  - 1333
  - 1334
  - 1376
  - 1377
  - 1378
  - 1471
  - 1472
  - 1473
  - 1474
  - 1547
  - 1548
  - 1549
  - 1552
  - 1570
  - 1598
  - 1618
  - 1619
  - 1638
  - 1661
  - 1662
  - 1663
  - 1716
  - 1717
  - 1762
  - 1763
  - 1764
  - 1812
  - 1841
  - 1877
  - 1915
  - 1934
  - 1962
  - 1963
  - 1967
  - 1968
  - 1969
  - 1973
  - 1974
  - 1975
  - 1976
  - 1977
  - 1978
  - 1979
  - 1989
  - 1990
  - 1993
  - 1994
  - 2023
  - 2043
  - 2097
  - 2118
  - 2125
  - 2153
  - 2284
  - 2290
  - 2363
  - 2364
  - 2419
  - 2420
  - 2433
  - 2472
  - 2484
  - 2509
  - 2516
  - 2615
  - 2637
  - 2686
  - 2687
  - 2688
  - 2759
  - 2794
  - 2823
  - 2878
  - 3032
  - 3078
  - 3153
  - 3241
  - 3255
  - 3336
  - 3337
  - 3544
  - 3748
  - 3772
  - 3818
related:
  - protocol-pppoe
  - protocol-ncp
  - protocol-l2tp
  - protocol-ip
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

			PPP (Point-to-Point Protocol) is designed for simple links which transport packets between two peers. These links provide full-duplex simultaneous bi-directional operation, and are assumed to deliver packets in order. It is intended that PPP provide a common solution for easy connection of a wide variety of hosts, bridges and routers. 
<br /><ul><li><b>Encapsulation</b><br /></li>
<li>The PPP encapsulation provides for multiplexing of different network-layer protocols simultaneously over the same link. Only 8 additional octets are necessary to form the encapsulation when used within the default HDLC-like framing. To support high speed implementations, the default encapsulation uses only simple fields, only one of which needs to be examined for demultiplexing.
<br /><br /></li>
<li><b>Link Control Protocol</b><br /></li>
<li>In order to be sufficiently versatile to be portable to a wide variety of environments, PPP provides a Link Control Protocol (LCP). The LCP is used to automatically agree upon the encapsulation format options, handle varying limits on sizes of packets, detect a looped-back link and other common misconfiguration errors, and terminate the link.
<br /><br /></li>
<li><b>Network Control Protocols</b><br /></li>
<li>Point-to-Point links tend to exacerbate many problems with the current family of network protocols. For instance, assignment and management of IP addresses, which is a problem even in LAN environments, is especially difficult over circuit-switched point-to-point links (such as dial-up modem servers).
<br /><br /></li>
<li><b>Configuration</b><br /></li>
<li>It is intended that PPP links be easy to configure. By design, the standard defaults handle all common configurations. The implementor can specify improvements to the default configuration, which are automatically communicated to the peer without operator intervention.</li></ul>
<br />
<br />PPP provides a method for transmitting datagrams over serial point-to-point links. PPP contains three main components:
<br /><ul><li>A method for encapsulating datagrams over serial links. PPP uses the High-Level Data Link Control (HDLC) protocol as a basis for encapsulating datagrams over point-to-point links.<br /><br /></li> 

<li>An extensible LCP to establish, configure, and test the data link connection.<br /><br /></li>

<li>A family of NCPs for establishing and configuring different network layer protocols. PPP is designed to allow the simultaneous use of multiple network layer protocols.</li></ul>
<br />
<br />To establish communications over a point-to-point link, the originating PPP first sends LCP frames to configure and (optionally) test the data link. After the link has been established and optional facilities have been negotiated as needed by the LCP, the originating PPP sends NCP frames to choose and configure one or more network layer protocols. When each of the chosen network layer protocols has been configured, packets from each network layer protocol can be sent over the link. The link will remain configured for communications until explicit LCP or NCP frames close the link, or until some external event occurs
<br />
<br />Here are some key PPP features, all of which are lacking in SLIP: 
<br /><ul><li><b>Address Notification</b><br /></li>
<li>Address Notification allows a server to inform a dial-up client of its IP address for that link, but the mechanism is powerful enough for clients to request IP addresses and supports fallback configurations. SLIP required the user to configure this information manually. 
<br /><br /></li>
<li><b>Authentication</b><br /></li>
<li>Authentication is available as an option, either with the Password Authentication Protocol (PAP), or the Challenge-Handshake Authentication Protocol (CHAP). 
<br /><br /></li>
<li><b>Authentication</b><br /></li>
<li>Authentication can interoperate on the same link, simply by running additional NCPs. For example, both IP and IPX traffic can share a PPP link. 
<br /><br /></li>
<li><b>Link Monitoring</b><br /></li>
<li>Link Monitoring facilities include a link-level echo facility which can periodically check link operation.</li></ul>
<br />
<br />PPP uses the principles, terminology, and frame structure of the International Organization for Standardization (ISO) HDLC procedures, as modified by ISO 3309:1984/PDAD1 "Addendum 1: Start/Stop Transmission." ISO 3309-1979 specifies the HDLC frame structure for use in synchronous environments. ISO 3309:1984/PDAD1 specifies proposed modifications to ISO 3309-1979 to allow its use in asynchronous environments. The PPP control procedures use the definitions and control field encodings standardized in ISO 4335-1979 and ISO 4335-1979/Addendum 1-1979.
<br /><hr />
<br /><b>PPP Packet Format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>1 byte</p></td><td><p>1 byte</p></td><td><p>1 byte </p></td><td><p>2 bytes </p></td><td><p>variable </p></td><td><p>2 or 4 bytes </p></td></tr><tr><td><p>Flag</p></td><td><p>Address</p></td><td><p>Control</p></td><td><p>Protocol</p></td><td><p>Information</p></td><td><p>FCS</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Flag</b><br /></li>
<li>A single byte that indicates the beginning or end of a frame. The flag field consists of the binary sequence 01111110.
<br /><br /></li>
<li><b>Address</b><br /></li>
<li>HDLC broadcast address. PPP does not assign individual station addresses. The value of this field is always set to FF Hex.
<br /><br /></li>
<li><b>Control</b><br /></li>
<li>HDLC command for Unnumbered Information (UI) with the Poll/Final bit set to zero. The value of this field is always set to 03 Hex. Frames containing any other value in this field are discarded. 
<br /><br /></li>
<li><b>Protocol</b><br /></li> 
<li>8 or 16 bits. The structure of this field is consistent with the ISO 3309 extension mechanism for address fields. All valid protocols have the least significant bit of the least significant byte set to 1 and the least significant bit of the most significant byte is cleared to 0. Frames that do not comply are treated as having an unrecognized protocol. </li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Value</td><td>Protocol</td><td>References</td></tr><tr><td></td><td>0x0XXX - 0x3XXX, Network layer protocols.</td><td></td></tr><tr><td>0x0001</td><td>Padding Protocol.</td><td></td></tr><tr><td>0x0003</td><td>ROHC small-CID.</td><td>A small CID with the value 0 is represented using zero      bits.</td></tr><tr><td>0x0005</td><td>ROHC large-CID.</td><td></td></tr><tr><td>0x0007<br />-<br />0x001F</td><td>Reserved (transparency inefficient).</td><td></td></tr><tr><td>0x0021</td><td>IP, Internet Protocol.</td><td></td></tr><tr><td>0x0023</td><td>OSI Network Layer.</td><td></td></tr><tr><td>0x0025</td><td>Xerox NS IDP.</td><td></td></tr><tr><td>0x0027</td><td>DECnet Phase IV.</td><td></td></tr><tr><td>0x0029</td><td>Appletalk.</td><td></td></tr><tr><td>0x002B</td><td>IPX.</td><td></td></tr><tr><td>0x002D</td><td>Van Jacobson Compressed TCP/IP.</td><td></td></tr><tr><td>0x002F</td><td>Van Jacobson Uncompressed TCP/IP.</td><td></td></tr><tr><td>0x0031</td><td>Bridging PDU.</td><td></td></tr><tr><td>0x0033</td><td>ST-II, Stream Protocol.</td><td></td></tr><tr><td>0x0035</td><td>Banyan Vines.</td><td></td></tr><tr><td>0x0037</td><td>Reserved (until 1993).</td><td></td></tr><tr><td>0x0039</td><td>AppleTalk EDDP.</td><td></td></tr><tr><td>0x003B</td><td>AppleTalk SmartBuffered.</td><td></td></tr><tr><td>0x003D</td><td>MP, PPP Multilink Protocol.</td><td></td></tr><tr><td>0x003F</td><td>NETBIOS Framing.</td><td></td></tr><tr><td>0x0041</td><td>Cisco Systems.</td><td></td></tr><tr><td>0x0043</td><td>Ascom Timeplex.</td><td></td></tr><tr><td>0x0045</td><td>LBLB, Fujitsu Link Backup and Load Balancing.</td><td></td></tr><tr><td>0x0047</td><td>DCA Remote Lan.</td><td></td></tr><tr><td>0x0049</td><td>SDTP, PPP Serial Data Transport Protocol.</td><td></td></tr><tr><td>0x004B</td><td>SNA over 802.2.</td><td></td></tr><tr><td>0x004D</td><td>SNA.</td><td></td></tr><tr><td>0x004F</td><td>IP6 Header Compression.</td><td></td></tr><tr><td>0x0051</td><td>KNX Bridging Data.</td><td></td></tr><tr><td>0x0053</td><td>Encryption.</td><td></td></tr><tr><td>0x0055</td><td>Individual Link Encryption.</td><td></td></tr><tr><td>0x0057</td><td>IPv6, Internet Protocol version 6.</td><td></td></tr><tr><td>0x0059</td><td>PPP Multiplexing.</td><td>The method sends multiple PPP encapsulated packets in      a single PPP frame.</td></tr><tr><td>0x005B</td><td>VSNP, Vendor-Specific Network Protocol.</td><td></td></tr><tr><td>0x0061</td><td>RTP IPHC Full Header.</td><td>RTP IPHC communicates the uncompressed IP header plus      any following headers and data to establish the uncompressed header state      in the decompressor for a particular context.</td></tr><tr><td>0x0063</td><td>RTP IPHC Compressed TCP.</td><td>It indicates a packet with a compressed TCP header,      containing a CID, a flag octet identifying what fields have changed, and      the changed fields encoded as the difference from the previous value.</td></tr><tr><td>0x0065</td><td>RTP IPHC Compressed Non TCP.</td><td>Indicates a non-TCP packet with a compressed header.</td></tr><tr><td>0x0067</td><td>RTP IPHC Compressed UDP 8.</td><td>It      communicates the IP and UDP headers compressed to 8 bytes, followed by any      subsequent headers (possibly RTP) in uncompressed form, plus data.</td></tr><tr><td>0x0069</td><td>RTP IPHC Compressed RTP 8.</td><td>Indicates that the RTP header is compressed along with      the IP and UDP headers.</td></tr><tr><td>0x006F</td><td>Stampede Bridging.</td><td></td></tr><tr><td>0x0071</td><td>Reserved.</td><td></td></tr><tr><td>0x0073</td><td>MP+, PPP Ascend's Multilink Protocol Plus.</td><td></td></tr><tr><td>0x007D</td><td>Reserved (Control Escape).</td><td></td></tr><tr><td>0x007F</td><td>Reserved (compression inefficient).</td><td></td></tr><tr><td>0x0081</td><td>Reserved (until 20-Oct-2000).</td><td></td></tr><tr><td>0x0083</td><td>Reserved (until 20-Oct-2000).</td><td></td></tr><tr><td>0x00C1</td><td>NTCITS IPI.</td><td></td></tr><tr><td>0x00CF</td><td>Reserved (PPP NLPID).</td><td></td></tr><tr><td>0x00FB</td><td>Single link compression in multilink.</td><td></td></tr><tr><td>0x00FD</td><td>Compressed datagram.</td><td></td></tr><tr><td>0x00FF</td><td>Reserved (compression inefficient).</td><td></td></tr><tr><td></td><td>0x02XX - 0x1EXX, Compression inefficient protocols.</td><td></td></tr><tr><td>0x0201</td><td>802.1d Hello Packets.</td><td></td></tr><tr><td>0x0203</td><td>IBM Source Routing BPDU.</td><td></td></tr><tr><td>0x0205</td><td>DEC LANBridge100 Spanning Tree.</td><td></td></tr><tr><td>0x0207</td><td>Cisco Discovery Protocol.</td><td></td></tr><tr><td>0x0209</td><td>Netcs Twin Routing.</td><td></td></tr><tr><td>0x020B</td><td>STP, Scheduled Transfer Protocol.</td><td></td></tr><tr><td>0x020D</td><td>EDP, Extreme Discovery Protocol.</td><td></td></tr><tr><td>0x0211</td><td>OSCP, Optical Supervisory Channel Protocol.</td><td></td></tr><tr><td>0x0213</td><td>OSCP, Optical Supervisory Channel Protocol.</td><td></td></tr><tr><td>0x0231</td><td>Luxcom.</td><td></td></tr><tr><td>0x0233</td><td>Sigma Network Systems.</td><td></td></tr><tr><td>0x0235</td><td>Apple Client Server Protocol.</td><td></td></tr><tr><td>0x0281</td><td>Multi-Protocol Label Switching, unicast.</td><td></td></tr><tr><td>0x0283</td><td>Multi-Protocol Label Switching, multicast.</td><td></td></tr><tr><td>0x0285</td><td>IEEE p1284.4 standard - data packets.</td><td></td></tr><tr><td>0x0287</td><td>ETSI TETRA Network Protocol Type 1.</td><td></td></tr><tr><td>0x0289</td><td>Multichannel Flow Treatment Protocol.</td><td></td></tr><tr><td>0x2063</td><td>RTP IPHC Compressed TCP No Delta.</td><td>Indicates a packet with a compressed TCP header where      all fields that are normally sent as the difference to the previous value      are instead sent as-is.</td></tr><tr><td>0x2065</td><td>RTP IPHC Context State.</td><td>Indicates a special packet sent from the decompressor      to the compressor to communicate a list of context IDs for which      synchronization has or may have been lost.</td></tr><tr><td>0x2067</td><td>RTP IPHC Compressed UDP 16.</td><td>Communicates the IP and UDP headers compressed to 16      bytes, followed by any subsequent headers (possibly RTP) in uncompressed      form, plus data.</td></tr><tr><td>0x2069</td><td>RTP IPHC Compressed RTP 16.</td><td>Indicates that the RTP header is compressed along with      the IP and UDP headers.</td></tr><tr><td></td><td>0x4XXX - 0x7XXX, Low volume traffic without an      associated NCP.</td><td></td></tr><tr><td>0x4001</td><td>Cray Communications Control Protocol.</td><td></td></tr><tr><td>0x4003</td><td>CDPD Mobile Network Registration Protocol.</td><td></td></tr><tr><td>0x4005</td><td>Expand accelerator protocol.</td><td></td></tr><tr><td>0x4007</td><td>ODSICP NCP.</td><td></td></tr><tr><td>0x4021</td><td>LZS, PPP Stac LZS Compression Protocol.</td><td></td></tr><tr><td>0x4023</td><td>RefTek Protocol.</td><td></td></tr><tr><td>0x4025</td><td>Fibre Channel.</td><td></td></tr><tr><td>0x4027</td><td>EMIT Protocols.</td><td></td></tr><tr><td>0x405B</td><td>VSP, Vendor-Specific Protocol.</td><td></td></tr><tr><td></td><td>0x8XXX - 0xBXXX, Network Control Protocols.</td><td></td></tr><tr><td>0x8001<br />-<br />0x801F</td><td>Reserved.</td><td></td></tr><tr><td>0x8021</td><td>IPCP, PPP Internet Protocol Control Protocol.</td><td></td></tr><tr><td>0x8023</td><td>OSINLCP, PPP OSI Network Layer Control Protocol.</td><td></td></tr><tr><td>0x8025</td><td>XNSCP, PPP XNS IDP Control Protocol.</td><td></td></tr><tr><td>0x8027</td><td>DNCP, DECnet Phase IV Control Protocol.</td><td></td></tr><tr><td>0x8029</td><td>ATCP, PPP AppleTalk Control Protocol.</td><td></td></tr><tr><td>0x802B</td><td>IPXCP, PPP IPX Control Protocol.</td><td></td></tr><tr><td>0x802D</td><td>Reserved.</td><td></td></tr><tr><td>0x802F</td><td>Reserved.</td><td></td></tr><tr><td>0x8031</td><td>BCP, PPP Bridging Control Protocol.</td><td></td></tr><tr><td>0x8033</td><td>Stream Protocol Control Protocol.</td><td></td></tr><tr><td>0x8035</td><td>BVCP, Banyan Vines Control Protocol.</td><td></td></tr><tr><td>0x8037</td><td>Reserved (until 1993).</td><td></td></tr><tr><td>0x8039</td><td>Reserved.</td><td></td></tr><tr><td>0x803B</td><td>Reserved.</td><td></td></tr><tr><td>0x803D</td><td>Multi-Link Control Protocol.</td><td></td></tr><tr><td>0x803F</td><td>NBFCP, PPP NetBIOS Frames Control Protocol.</td><td></td></tr><tr><td>0x8041</td><td>PPP-LEX, PPP LAN extension protocol.</td><td></td></tr><tr><td>0x8043</td><td>Ascom Timeplex.</td><td></td></tr><tr><td>0x8045</td><td>Fujitsu LBLB Control Protocol.</td><td></td></tr><tr><td>0x8047</td><td>RLNCP, DCA Remote Lan Network Control Protocol.</td><td></td></tr><tr><td>0x8049</td><td>SDCP, PPP Serial Data Control Protocol.</td><td></td></tr><tr><td>0x804B</td><td>SNACP, SNA over 802.2 Control Protocol.</td><td></td></tr><tr><td>0x804D</td><td>SNACP, SNA Control Protocol.</td><td></td></tr><tr><td>0x804F</td><td>IP6 Header Compression Control Protocol.</td><td></td></tr><tr><td>0x8051</td><td>KNX Bridging Control Protocol.</td><td></td></tr><tr><td>0x8053</td><td>ECP, PPP Encryption Control Protocol.</td><td></td></tr><tr><td>0x8055</td><td>Individual Link Encryption Control Protocol.</td><td></td></tr><tr><td>0x8057</td><td>IPV6CP, PPP IPv6 Control Protocol.</td><td></td></tr><tr><td>0x8059</td><td>PPP Multiplexing Control Protocol.</td><td></td></tr><tr><td>0x805B</td><td>VSNCP, Vendor-Specific Network Control Protocol.</td><td></td></tr><tr><td>0x806F</td><td>Stampede Bridging Control Protocol.</td><td></td></tr><tr><td>0x8071</td><td>Reserved.</td><td></td></tr><tr><td>0x8073</td><td>MP+ Control Protocol.</td><td></td></tr><tr><td>0x807D</td><td>Reserved.</td><td></td></tr><tr><td>0x8081</td><td>Reserved (until 20-Oct-2000).</td><td></td></tr><tr><td>0x8083</td><td>Reserved (until 20-Oct-2000).</td><td></td></tr><tr><td>0x80C1</td><td>NTCITS IPI Control Protocol.</td><td></td></tr><tr><td>0x80CF</td><td>Reserved.</td><td></td></tr><tr><td>0x80FB</td><td>Compression on single link in multilink group control.</td><td></td></tr><tr><td>0x80FD</td><td>CCP, PPP Compression Control Protocol.</td><td></td></tr><tr><td>0x80FF</td><td>Reserved (not used).</td><td></td></tr><tr><td>0x8207</td><td>Cisco Discovery Protocol Control.</td><td></td></tr><tr><td>0x8209</td><td>Netcs Twin Routing.</td><td></td></tr><tr><td>0x820B</td><td>STP, Control Protocol.</td><td></td></tr><tr><td>0x820D</td><td>EDPCP, Extreme Discovery Protocol Control Protocol.</td><td></td></tr><tr><td>0x8235</td><td>Apple Client Server Protocol Control.</td><td></td></tr><tr><td>0x8281</td><td>MPLSCP, MPLS Control Protocol.</td><td></td></tr><tr><td>0x8283</td><td>Tag Switching - Multicast.</td><td></td></tr><tr><td>0x8285</td><td>IEEE p1284.4 standard - Protocol Control.</td><td></td></tr><tr><td>0x8287</td><td>ETSI TETRA NSP1 Control Protocol.</td><td></td></tr><tr><td>0x8289</td><td>Multichannel Flow Treatment Protocol.</td><td></td></tr><tr><td></td><td>0xCXXX - 0xFXXX, Link Control Protocols.</td><td></td></tr><tr><td>0xC021</td><td>LCP, Link Control Protocol.</td><td></td></tr><tr><td>0xC023</td><td>PAP, Password Authentication Protocol.</td><td></td></tr><tr><td>0xC025</td><td>Link Quality Repor<u>t</u>.</td><td></td></tr><tr><td>0xC027</td><td>SPAP, Shiva Password Authentication Protocol.</td><td></td></tr><tr><td>0xC029</td><td>CBCP, CallBack Control Protocol.</td><td></td></tr><tr><td>0xC02B</td><td>BACP, PPP Bandwidth Allocation Control Protocol.</td><td></td></tr><tr><td>0xC02D</td><td>BAP, PPP Bandwidth Allocation Protocol.</td><td></td></tr><tr><td>0xC05B</td><td>VSAP, Vendor-Specific Authentication Protocol.</td><td></td></tr><tr><td>0xC081</td><td>Container Control Protocol.</td><td></td></tr><tr><td>0xC223</td><td>CHAP, Challenge Handshake Authentication Protocol.</td><td></td></tr><tr><td>0xC225</td><td>RSA Authentication Protocol.</td><td></td></tr><tr><td>0xC227</td><td>EAP, Extensible Authentication Protocol.</td><td></td></tr><tr><td>0xC229</td><td>SIEP, Mitsubishi Security Info Exch Protocol.</td><td></td></tr><tr><td>0xC26F</td><td>Stampede Bridging Authorization Protocol.</td><td></td></tr><tr><td>0xC281</td><td>Proprietary Authentication Protocol.</td><td></td></tr><tr><td>0xC283</td><td>Proprietary Authentication Protocol.</td><td></td></tr><tr><td>0xC481</td><td>Proprietary Node ID Authentication Protocol.</td><td></td></tr></tbody></table></div></div><br /></li>
<li><b>Information</b><br /></li>
<li>Higher-level protocol data. Zero or more bytes that contain the datagram for the protocol specified in the protocol field. The end of the information field is found by locating the closing flag sequence and allowing 2 bytes for the FCS field. The default maximum length 
<br /></li><li>of the information field is 1,500 bytes. By prior agreement, consenting PPP implementations can use other values for the maximum information field length.
<br /><br /></li>
<li><b>FCS</b><br /></li>
<li>Value of the frame checksum calculation. PPP verifies the contents of the FCS field upon receipt of the packet.</li></ul>
<br /><hr />
<br /><b>PPP Link Operation</b>
<br />In order to establish communications over a point-to-point link, each end of the PPP link MUST first send LCP packets to configure and test the data link.
<br />
<br /><ul><li><b>Phase Diagram</b><br /></li>
<li>In the process of configuring, maintaining and terminating the point-to-point link, the PPP link goes through several distinct phases which are specified in the following simplified state diagram:
</li></ul>
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">
  +------+        +-----------+           +--------------+
  |      | UP     |           | OPENED    |              | SUCCESS/NONE
  | Dead |-------&gt;| Establish |----------&gt;| Authenticate |--+
  |      |        |           |           |              |  |
  +------+        +-----------+           +--------------+  |
     ^               |                        |             |
     |          FAIL |                   FAIL |             |
     +&lt;--------------+             +----------+             |
     |                             |                        |
     |            +-----------+    |           +---------+  |
     |       DOWN |           |    |   CLOSING |         |  |
     +------------| Terminate |&lt;---+&lt;----------| Network |&lt;-+
                  |           |                |         |
                  +-----------+                +---------+
</pre>
<br />		    
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">PPPoE Session<img src="/supporting/images/tline_l_top.gif" alt="" /><br />GRE<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>PPP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Padding<br /><img src="/supporting/images/tline_r.gif" alt="" />1st Choice Compression<br /><img src="/supporting/images/tline_r.gif" alt="" />IP<br /><img src="/supporting/images/tline_r.gif" alt="" />IP Control Protocol<br /><img src="/supporting/images/tline_r.gif" alt="" />Link Control Protocol<br /><img src="/supporting/images/tline_r.gif" alt="" />Password Authentication Protocol<br /><img src="/supporting/images/tline_r.gif" alt="" />Link Quality Report<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Challenge Handshake<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>CHAP</b><br />CHAP (Challenge-Handshake Authentication Protocol) is an authentication protocol used for remote logon, usually between a client and server or Web browser and Web server. Both the sender and peer share a predefined secret. The peer concatenates the random value (or nonce), the ID and the secret and calculates a one-way hash using MD5. The hash value is sent to the authenticator, which in turn builds that same string on its side, calculates the MD5 sum itself and compares the result with the value received from the peer. If the values match, the peer is authenticated. 
<br />
<br />By transmitting only the hash, the secret can't be reverse-engineered. The ID value is increased with each CHAP dialogue to protect against replay attacks.<br /><br /><b>HDLC</b><br />HDLC (High-Level Data Link Control) protocol which operates at the data link layer uses the services of a physical layer, and provides either a best effort or reliable communications path between the transmitter and receiver. The HDLC protocol embeds information in a data frame that allows devices to control data flow and correct errors. HDLC is an ISO standard developed from the Synchronous Data Link Control (SDLC) standard proposed by IBM in the 1970's. 
<br />
<br />For any HDLC communications session, one station is designated primary and the other secondary. A session can use one of the following connection modes, which determine how the primary and secondary stations interact. 
<br />    Normal unbalanced: The secondary station responds only to the primary station. 
<br />
<br />    Asynchronous: The secondary station can initiate a message. 
<br />    Asynchronous balanced: Both stations send and receive over its part of a duplex line. This mode is used for X.25 packet-switching networks. 
<br />
<br />The Link Access Procedure-Balanced (LAP-B) and Link Access Procedure D-channel (LAP-D) protocols are subsets of HDLC.<br /><br /><b>IPX</b><br />IPX(Internetwork Packet Exchange), a networking protocol used by the Novell NetWare operating systems. Like UDP/IP, IPX is a datagram protocol used for connectionless communications. Higher-level protocols, such as SPX and NCP, are used for additional error recovery services. <br /><br /><b>ISO</b><br />ISO (International Organization for Standardization) is a network of the national standards institutes of 146 countries, on the basis of one member per country, with a Central Secretariat in Geneva, Switzerland, that coordinates the system. ISO has defined a number of important computer standards, the most significant of which is perhaps OSI (Open Systems Interconnection), a standardized architecture for designing networks.<br /><br /><b>LCP</b><br />LCP (Link Control Protocol) is used to automatically agree upon the encapsulation format options, handle varying limits on sizes of packets, detect a looped-back link and other common misconfiguration errors, and terminate the link. The LCP checks the identity of the linked device and either accepts or rejects the peer device, determines the acceptable packet size for transmission, searches for errors in configuration and can terminate the link if the parameters are not satisfied. Data cannot be transmitted over the network until the LCP packet determines that the link is acceptable.<br /><br /><b>NCP</b><br />NCP (Novell NetWare Core Protocol) manages access to the primary NetWare server resources. Used to establish and configure one or more network layer protocols that will be used by the link. Protocol field values in the range of 0x8XXX to 0xBXXX identify packets belonging to the associated Network Control Protocol.<br /><br /><b>PAP</b><br />PAP (Password Authentication Protocol) is the most basic form of authentication, in which a user's name and password are transmitted over a network and compared to a table of name-password pairs. Typically, the passwords stored in the table are encrypted. The Basic Authentication feature built into the HTTP protocol uses PAP. The main weakness of PAP is that both the username and password are transmitted "in the clear" -- that is, in an unencrypted form. Contrast with CHAP.<br /><br /><b>Peer</b><br />The other end of a point-to-point link.<br /><br /><b>Peer-to-peer</b><br />Peer-to-peer(peer-to-peer architecture), or abbreviated P2P, a type of network in which each workstation has equivalent capabilities and responsibilities. This differs from client/server architectures, in which some computers are dedicated to serving the others. Peer-to-peer networks are generally simpler, but they usually do not offer the same performance under heavy loads.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/ppp-numbers">PPP Assigned numbers</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1332.html">RFC 1332</a>] The PPP Internet Protocol Control Protocol (IPCP). 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1172.html">RFC 1172</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc1377.html">RFC 1377</a>] The PPP OSI Network Layer Control Protocol (OSINLCP).
[<a href="https://www.rfc-editor.org/rfc/rfc1378.html">RFC 1378</a>] The PPP AppleTalk Control Protocol (ATCP).
[<a href="https://www.rfc-editor.org/rfc/rfc1471.html">RFC 1471</a>] The Definitions of Managed Objects for the Link Control Protocol of the Point-to-Point Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1472.html">RFC 1472</a>] The Definitions of Managed Objects for the Security Protocols of the Point-to-Point Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1473.html">RFC 1473</a>] The Definitions of Managed Objects for the IP Network Control Protocol of the Point-to-Point Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1474.html">RFC 1474</a>] The Definitions of Managed Objects for the Bridge Network Control Protocol of the Point-to-Point Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1547.html">RFC 1547</a>] Requirements for an Internet Standard Point-to-Point Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1549.html">RFC 1549</a>] PPP in HDLC Framing.
[<a href="https://www.rfc-editor.org/rfc/rfc1552.html">RFC 1552</a>] The PPP Internetwork Packet Exchange Control Protocol (IPXCP).
[<a href="https://www.rfc-editor.org/rfc/rfc1570.html">RFC 1570</a>] PPP LCP Extensions.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1548.html">RFC 1548</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1598.html">RFC 1598</a>] PPP in X.25.
[<a href="https://www.rfc-editor.org/rfc/rfc1618.html">RFC 1618</a>] PPP over ISDN.
[<a href="https://www.rfc-editor.org/rfc/rfc1619.html">RFC 1619</a>] PPP over SONET/SDH.
[<a href="https://www.rfc-editor.org/rfc/rfc1661.html">RFC 1661</a>] The Point-to-Point Protocol (PPP).
                STD: 51. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1548.html">RFC 1548</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1662.html">RFC 1662</a>] PPP in HDLC-like Framing.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1549.html">RFC 1549</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1663.html">RFC 1663</a>] PPP Reliable Transmission.
[<a href="https://www.rfc-editor.org/rfc/rfc1716.html">RFC 1716</a>] Towards Requirements for IP Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc1762.html">RFC 1762</a>] The PPP DECnet Phase IV Control Protocol (DNCP).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1376.html">RFC 1376</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1763.html">RFC 1763</a>] The PPP Banyan Vines Control Protocol (BVCP).
[<a href="https://www.rfc-editor.org/rfc/rfc1764.html">RFC 1764</a>] The PPP XNS IDP Control Protocol (XNSCP).
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc1841.html">RFC 1841</a>] PPP Network Control Protocol for LAN Extension.
[<a href="https://www.rfc-editor.org/rfc/rfc1877.html">RFC 1877</a>] PPP Internet Protocol Control Protocol Extensions for Name Server Addresses.
[<a href="https://www.rfc-editor.org/rfc/rfc1915.html">RFC 1915</a>] Variance for The PPP Connection Control Protocol and The PPP Encryption Control Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1934.html">RFC 1934</a>] Ascend's Multilink Protocol Plus (MP+).
[<a href="https://www.rfc-editor.org/rfc/rfc1962.html">RFC 1962</a>] The PPP Compression Control Protocol (CCP).
[<a href="https://www.rfc-editor.org/rfc/rfc1963.html">RFC 1963</a>] PPP Serial Data Transport Protocol (SDTP).
[<a href="https://www.rfc-editor.org/rfc/rfc1967.html">RFC 1967</a>] PPP LZS-DCP Compression Protocol (LZS-DCP).
[<a href="https://www.rfc-editor.org/rfc/rfc1968.html">RFC 1968</a>] The PPP Encryption Control Protocol (ECP).
[<a href="https://www.rfc-editor.org/rfc/rfc1973.html">RFC 1973</a>] PPP in Frame Relay.
[<a href="https://www.rfc-editor.org/rfc/rfc1974.html">RFC 1974</a>] PPP Stac LZS, Compression Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1975.html">RFC 1975</a>] PPP Magnalink Variable Resource Compression.
[<a href="https://www.rfc-editor.org/rfc/rfc1976.html">RFC 1976</a>] PPP for Data Compression in Data Circuit-Terminating Equipment (DCE).
[<a href="https://www.rfc-editor.org/rfc/rfc1977.html">RFC 1977</a>] PPP BSD Compression Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1978.html">RFC 1978</a>] PPP Predictor Compression Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1979.html">RFC 1979</a>] PPP Deflate Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1989.html">RFC 1989</a>] PPP Link Quality Monitoring.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1333.html">RFC 1333</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1990.html">RFC 1990</a>] The PPP Multilink Protocol (MP).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1717.html">RFC 1717</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc1993.html">RFC 1993</a>] PPP Gandalf FZA Compression Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1994.html">RFC 1994</a>] PPP Challenge Handshake Authentication Protocol (CHAP).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1334.html">RFC 1334</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2043.html">RFC 2043</a>] The PPP SNA Control Protocol (SNACP).
[<a href="https://www.rfc-editor.org/rfc/rfc2097.html">RFC 2097</a>] The PPP NetBIOS Frames Control Protocol (NBFCP).
[<a href="https://www.rfc-editor.org/rfc/rfc2118.html">RFC 2118</a>] Microsoft Point-To-Point Compression (MPPC) Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc2125.html">RFC 2125</a>] The PPP Bandwidth Allocation Protocol (BAP) The PPP Bandwidth Allocation Control Protocol (BACP).
[<a href="https://www.rfc-editor.org/rfc/rfc2153.html">RFC 2153</a>] PPP Vendor Extensions.
[<a href="https://www.rfc-editor.org/rfc/rfc2290.html">RFC 2290</a>] Mobile-IPv4 Configuration Option for PPP IPCP.
[<a href="https://www.rfc-editor.org/rfc/rfc2363.html">RFC 2363</a>] PPP Over FUNI.
[<a href="https://www.rfc-editor.org/rfc/rfc2364.html">RFC 2364</a>] PPP Over AAL5.
[<a href="https://www.rfc-editor.org/rfc/rfc2419.html">RFC 2419</a>] The PPP DES Encryption Protocol, Version 2 (DESE-bis).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1969.html">RFC 1969</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2420.html">RFC 2420</a>] The PPP Triple-DES Encryption Protocol (3DESE).
[<a href="https://www.rfc-editor.org/rfc/rfc2433.html">RFC 2433</a>] Microsoft PPP CHAP Extensions.
[<a href="https://www.rfc-editor.org/rfc/rfc2472.html">RFC 2472</a>] IP Version 6 over PPP.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2023.html">RFC 2023</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2484.html">RFC 2484</a>] PPP LCP Internationalization Configuration Option.
[<a href="https://www.rfc-editor.org/rfc/rfc2516.html">RFC 2516</a>] A Method for Transmitting PPP Over Ethernet (PPPoE).
[<a href="https://www.rfc-editor.org/rfc/rfc2615.html">RFC 2615</a>] PPP over SONET/SDH.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1619.html">RFC 1619</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2637.html">RFC 2637</a>] Point-to-Point Tunneling Protocol (PPTP).
[<a href="https://www.rfc-editor.org/rfc/rfc2686.html">RFC 2686</a>] The Multi-Class Extension to Multi-Link PPP.
                Describes LCP options 26 (Prefix elision) and 27 (Multilink header format). 
[<a href="https://www.rfc-editor.org/rfc/rfc2687.html">RFC 2687</a>] PPP in a Real-time Oriented HDLC-like Framing.
[<a href="https://www.rfc-editor.org/rfc/rfc2688.html">RFC 2688</a>] Integrated Services Mappings for Low Speed Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2759.html">RFC 2759</a>] Microsoft PPP CHAP Extensions, Version 2.
[<a href="https://www.rfc-editor.org/rfc/rfc2794.html">RFC 2794</a>] Mobile IP Network Access Identifier Extension for IPv4.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2290.html">RFC 2290</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2823.html">RFC 2823</a>] PPP over Simple Data Link (SDL) using SONET/SDH with ATM-like framing.
[<a href="https://www.rfc-editor.org/rfc/rfc2878.html">RFC 2878</a>] PPP Bridging Control Protocol (BCP).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1638.html">RFC 1638</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3032.html">RFC 3032</a>] MPLS Label Stack Encoding.
[<a href="https://www.rfc-editor.org/rfc/rfc3078.html">RFC 3078</a>] Microsoft Point-To-Point Encryption (MPPE) Protocol.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2118.html">RFC 2118</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3153.html">RFC 3153</a>] PPP Multiplexing.
[<a href="https://www.rfc-editor.org/rfc/rfc3255.html">RFC 3255</a>] Extending Point-to-Point Protocol (PPP) over Synchronous Optical NETwork/Synchronous Digital Hierarchy (SONET/SDH) with virtual concatenation, high order and low order payloads.
[<a href="https://www.rfc-editor.org/rfc/rfc3241.html">RFC 3241</a>] Robust Header Compression (ROHC) over PPP.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1332.html">RFC 1332</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3336.html">RFC 3336</a>] PPP Over Asynchronous Transfer Mode Adaptation Layer 2 (AAL2).
[<a href="https://www.rfc-editor.org/rfc/rfc3337.html">RFC 3337</a>] Class Extensions for PPP over Asynchronous Transfer Mode Adaptation Layer 2 (AAL2).
[<a href="https://www.rfc-editor.org/rfc/rfc3544.html">RFC 3544</a>] IP Header Compression over PPP.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2509.html">RFC 2509</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3748.html">RFC 3748</a>] Extensible Authentication Protocol (EAP).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2284.html">RFC 2284</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3772.html">RFC 3772</a>] Point-to-Point Protocol (PPP) Vendor Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc3818.html">RFC 3818</a>] IANA Considerations for the Point-to-Point Protocol (PPP).
                BCP: 88.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1134.html">RFC 1134</a>] The Point-to-Point Protocol: A Proposal for Multi-Protocol Transmission of Datagrams Over Point-to-Point Links.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1171.html">RFC 1171</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1171.html">RFC 1171</a>] The Point-to-Point Protocol for the Transmission of Multi-Protocol Datagrams Over Point-to-Point Links.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1331.html">RFC 1331</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1134.html">RFC 1134</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1172.html">RFC 1172</a>] The Point-to-Point Protocol (PPP) Initial Configuration Options.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1331.html">RFC 1331</a>, <a href="https://www.rfc-editor.org/rfc/rfc1332.html">RFC 1332</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1220.html">RFC 1220</a>] Point-to-Point Protocol Extensions for Bridging.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1638.html">RFC 1638</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1331.html">RFC 1331</a>] The Point-to-Point Protocol (PPP) for the Transmission of Multi-protocol Datagrams over Point-to-Point Links.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1548.html">RFC 1548</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1171.html">RFC 1171</a>, <a href="https://www.rfc-editor.org/rfc/rfc1172.html">RFC 1172</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1333.html">RFC 1333</a>] PPP Link Quality Monitoring.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1989.html">RFC 1989</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1334.html">RFC 1334</a>] PPP Authentication Protocols.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1994.html">RFC 1994</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1376.html">RFC 1376</a>] The PPP DECnet Phase IV Control Protocol (DNCP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1762.html">RFC 1762</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1548.html">RFC 1548</a>] The Point-to-Point Protocol (PPP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1661.html">RFC 1661</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1331.html">RFC 1331</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1549.html">RFC 1549</a>] PPP in HDLC Framing.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1662.html">RFC 1662</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1619.html">RFC 1619</a>] PPP over SONET/SDH.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2615.html">RFC 2615</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1638.html">RFC 1638</a>] PPP Bridging Control Protocol (BCP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2878.html">RFC 2878</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1220.html">RFC 1220</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1717.html">RFC 1717</a>] The PPP Multilink Protocol (MP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1990.html">RFC 1990</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1969.html">RFC 1969</a>] The PPP DES Encryption Protocol (DESE).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2419.html">RFC 2419</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2023.html">RFC 2023</a>] IP Version 6 over PPP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2472.html">RFC 2472</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2284.html">RFC 2284</a>] PPP Extensible Authentication Protocol (EAP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3748.html">RFC 3748</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2509.html">RFC 2509</a>] IP Header Compression over PPP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3544.html">RFC 3544</a>.
                		  </div>
		  
</section>


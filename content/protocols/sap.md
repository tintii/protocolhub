---
id: protocol-sap
slug: sap
name: SAP
expandedName: Session Announcement Protocol
origin: historical
provenance:
  source: protocols/protocol_SAP.htm
  sha256: 9f2165b1042b7a89686ff5d541b66323997c257126b85cb8c5d89a51c7e0b7f2
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Session Announcement Protocol
layers:
  - Application Layer
suites:
  - VOIP
summary:
  - label: Protocol
    html: Session Announcement Protocol
  - label: Protocol suite
    html: VOIP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: '9875'
  - label: Related protocols
    html: 'UDP,<br />TCP,<br />RTSP,<br />SIP,<br />RTP,<br />SDP'
originalUpdate: '2005-11-14 15:45:10'
rfcs:
  - 2974
related:
  - protocol-udp
  - protocol-tcp
  - protocol-rtsp
  - protocol-sip
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

			Session Announcement Protocol (SAP) is an announcement protocol that is used to assist the advertisement of multicast multimedia conferences and other multicast sessions, and to communicate the relevant session setup information to prospective participants. The announcement is multicast with the same scope as the session it is announcing, ensuring that the recipients of the announcement can also be potential recipients of the session the announcement describes (bandwidth and other such constraints permitting). This is also important for the scalability of the protocol, as it keeps local session announcements local.
<br /><hr />
<br /><b>Session Announcement</b>
<br />As noted previously, a SAP announcer periodically sends an announcement packet to a well known multicast address and port. There is no rendezvous mechanism - the SAP announcer is not aware of the presence or absence of any SAP listeners - and no additional reliability is provided over the standard best-effort UDP/IP semantics.
<br />
<br />That announcement contains a session description and should contain an authentication header. The session description may be encrypted although this is not recommended. A SAP announcement is multicast with the same scope as the session it is announcing, ensuring that the recipients of the announcement are within the scope of the session the announcement describes. There are a number of possibilities:
<br /><ul><li>IPv4 global scope sessions use multicast addresses in the range 224.2.128.0 - 224.2.255.255 with SAP announcements being sent to 224.2.127.254 (note that 224.2.127.255 is used by the obsolete SAPv0 and must not be used).<br /><br /></li>

<li>IPv4 administrative scope sessions using administratively scoped IP multicast as defined in. The multicast address to be used for announcements is the highest multicast address in the relevant administrative scope zone. For example, if the scope range is 239.16.32.0 - 239.16.33.255, then 239.16.33.255 is used for SAP announcements.<br /><br /></li>

<li>IPv6 sessions are announced on the address FF0X:0:0:0:0:0:2:7FFE where X is the 4-bit scope value. For example, an announcement for a link-local session assigned the address FF02:0:0:0:0:0:1234:5678, should be advertised on SAP address FF02:0:0:0:0:0:2:7FFE.</li></ul>
<br />
<br />If a session uses addresses in multiple administrative scope ranges, it is necessary for the announcer to send identical copies of the announcement to each administrative scope range. It is up to the listeners to parse such multiple announcements as the same session. The announcement rate for each administrative scope range must be calculated separately, as if the multiple announcements were separate.
<br />
<br />Multiple announcers may announce a single session, as an aid to robustness in the face of packet loss and failure of one or more announcers. The rate at which each announcer repeats its announcement must be scaled back such that the total announcement rate is equal to that which a single server would choose. Announcements made in this manner must be identical.
<br />
<br />If multiple announcements are being made for a session, then each announcement must carry an authentication header signed by the same key, or be treated as a completely separate announcement by listeners.
<br />
<br />An IPv4 SAP listener should listen on the IPv4 global scope SAP address and on the SAP addresses for each IPv4 administrative scope zone it is within. The discovery of administrative scope zones is outside the scope of this memo, but it is assumed that each SAP listener within a particular scope zone is aware of that scope zone. A SAP listener which supports IPv6 should also listen to the IPv6 SAP addresses.
<br />
<br /><b>Session deletion</b>
<br />Sessions may be deleted in one of several ways:
<br /><ul><li><b>Explicit Timeout </b>
<br />The session description payload may contain timestamp information specifying the start- and end-times of the session. If the current time is later than the end-time of the session, then the session should be deleted from the receiver's session cache.<br /><br /></li>

<li><b>Implicit Timeout </b>
<br />A session announcement message should be received periodically for each session description in a receiver's session cache. The announcement period can be predicted by the receiver from the set of sessions currently being announced. If a session announcement message has not been received for ten times the announcement period, or one hour, whichever is the greater, then the session is deleted from the receiver's session cache. The one hour minimum is to allow for transient network partitioning.<br /><br /></li>

<li><b>Explicit Deletion </b>
<br />A session deletion packet is received specifying the session to be deleted. Session deletion packets should have a valid authentication header, matching that used to authenticate previous announcement packets. If this authentication is missing, the deletion message should be ignored.</li></ul>
<br />
<br /><b>Session Modification</b>
<br />A pre-announced session can be modified by simply announcing the modified session description. In this case, the version hash in the SAP header must be changed to indicate to receivers that the packet contents should be parsed (or decrypted and parsed if it is encrypted). The session itself, as distinct from the session announcement, is uniquely identified by the payload and not by the message identifier hash in the header.
<br />
<br />The same rules apply for session modification as for session deletion:
<br /><ul><li>Either the modified announcement must contain an authentication header signed by the same key as the cached session announcement it is modifying.<br /><br /></li>

<li>The cached session announcement must not contain an authentication header, and the session modification announcement must originate from the same host as the session it is modifying.</li></ul>
<br /><hr />
<br /><b>Protocol structure</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td><td><p>7</p></td><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32bit</p></td></tr><tr><td><p>V</p></td><td><p>A</p></td><td><p>R</p></td><td><p>T</p></td><td><p>E</p></td><td><p>C</p></td><td><p>Auth len</p></td><td colspan="2"><p>Msg ID hash</p></td></tr><tr><td colspan="9"><p>Originating source (32 or 128 bits)</p></td></tr><tr><td colspan="9"><p>Optional Authentication Data</p></td></tr><tr><td colspan="9"><p>Optional timeout</p></td></tr><tr><td colspan="9"><p>Optional payload type</p></td></tr><tr><td colspan="7"> </td><td colspan="2">0</td></tr><tr><td colspan="9"><p>Payload</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>V - Version Number </b>
<br />The version number field MUST be set to 1 (SAPv2 announcements which use only SAPv1 features are backwards compatible, those which use new features can be detected by other means, so the SAP version number doesn't need to change).<br /><br /></li>

<li><b>A - Address type</b>
<br />If the A bit is 0, the originating source field contains a 32-bit IPv4 address. If the A bit is 1, the originating source contains a 128-bit IPv6 address.<br /><br /></li>

<li><b>R - Reserved</b>
<br />SAP announcers MUST set this to 0, SAP listeners must ignore the contents of this field.<br /><br /></li>

<li><b>T - Message Type</b>
<br />If the T field is set to 0 this is a session announcement packet, if 1 this is a session deletion packet.<br /><br /></li>

<li><b>E - Encryption Bit</b>
<br />If the encryption bit is set to 1, the payload of the SAP packet is encrypted. If this bit is 0 the packet is not encrypted.<br /><br /></li>

<li><b>C - Compressed bit</b>
<br />If the compressed bit is set to 1, the payload is compressed using the zlib compression algorithm. If the payload is to be compressed and encrypted, the compression must be performed first.<br /><br /></li>

<li><b>Authentication Length</b>
<br />Authentication Length is a unsigned quantity giving the number of 32 bit words following the main SAP header that contain authentication data. If it is zero, no authentication header is present. Authentication data containing a digital signature of the packet, with length as specified by the authentication length header field. <br /><br /></li>

<li><b>Message Identifier Hash</b>
<br />Message Identifier Hash is used in combination with the originating source, provides a globally unique identifier indicating the precise version of this announcement. The choice of value for this field is not specified here, except that it must be unique for each session announced by a particular SAP announcer and it must be changed if the session description is modified (and a session deletion message should be sent for the old version of the session).<br /><br /></li>

<li><b>Originating Source</b>
<br />This gives the IP address of the original source of the message. This is an IPv4 address if the A field is set to zero, else it is an IPv6 address. The address is stored in network byte order.<br /><br /></li>

<li><b>Timeout</b>
<br />When the session payload is encrypted, the detailed timing fields in the payload are not available to listeners not trusted with the decryption key. Under such circumstances, the header includes an additional 32-bit timestamp field stating when the session should be timed out. The value is an unsigned quantity giving the NTP time in seconds at which time the session is timed out. It is in network byte order.<br /><br /></li>

<li><b>Payload Type</b>
<br />The payload type field is a MIME content type specified, describing the format of the payload. This is a variable length ASCII text string, followed by a single zero byte (ASCII NUL).<br /><br /></li>

<li><b>Payload</b>
<br />The Payload field includes various sub fields:
<br /><ul><li><b>Version number </b>
<br />The version number of the authentication format is 1.<br /><br /></li>

<li><b>Padding Bit </b>
<br />If necessary, the authentication data is padded to be a multiple of 32 bits and the padding bit is set. In this case the last byte of the authentication data contains the number of padding bytes (including the last byte) that must be discarded.<br /><br /></li>

<li><b>Authentication Type (Auth)</b>
<br />The authentication type is a 4 bit encoded field that denotes the authentication infrastructure the sender expects the recipients to use to check the authenticity and integrity of the information. This defines the format of the authentication sub-header and can take the values: 0=PGP format, 1=CMS format. All other values are undefined.</li></ul></li></ul>
<br /><hr />
<br /><b>Authenticated Announcements</b>
<br />The authentication header can be used for two purposes:
<br /><ul><li>Verification that changes to a session description or deletion of a session is permitted.<br /></li>
<li>Authentication of the identity of the session creator.</li></ul>
<br />In some circumstances only verification is possible because a certificate signed by a mutually trusted person or authority is not available. However, under such circumstances, the session originator may still be authenticated to be the same as the session originator of previous sessions claiming to be from the same person. This may or may not be sufficient depending on the purpose of the session and the people involved.
<br />
<br /><b>PGP Authentication</b>
<br />PGP (Pretty Good Privacy) is a family of software systems developed by Philip R. Zimmermann from which OpenPGP is based. When using PGP for SAP authentication the basic format specific authentication subheader comprises a digital signature packet. The signature type must be 0x01 which means the signature is that of a canonical text document.
<br />
<br /><b>CMS Authentication</b>
<br />The Cryptographic Message Syntax is used to digitally sign, digest, authenticate, or encrypt arbitrary messages. The format specific authentication subheader will, in the CMS case, have an ASN.1 ContentInfo type with the ContentType being signedData.
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
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/tline_l_top.gif" alt="" /><br />IPX<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SAP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Request<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Reply<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Bandwidth</b><br />*A range within a band of frequencies or wavelengths.
<br />
<br />*The amount of data that can be transmitted in a fixed amount of time. For digital devices, the bandwidth is usually expressed in bits per second(bps) or bytes per second. For analog devices, the bandwidth is expressed in cycles per second, or Hertz (Hz).<br /><br /><b>CMS</b><br />The Cryptographic Message Syntax describes an encapsulation syntax for data protection. It supports digital signatures, message authentication codes, and encryption. The syntax allows multiple encapsulation, so one encapsulation envelope can be nested inside another.<br /><br /><b>Encryption</b><br />The translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text; encrypted data is referred to as cipher text. 
<br />
<br />There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>IPv4</b><br />IPv4 is version 4 of the Internet Protocol (IP). It was the first version of the Internet Protocol to be widely deployed, and forms the basis for most of the current Internet. IPv4 uses 32-bit addresses, limiting it to 4,294,967,296 unique addresses, many of which are reserved for special purposes such as local networks or multicast addresses, reducing the number of addresses that can be allocated as public Internet addresses.<br /><br /><b>IPv6</b><br />IPv6 is designed as an evolutionary upgrade to the Internet Protocol and will, in fact, coexist with the older IPv4 for some time. IPv6 is designed to allow the Internet to grow steadily, both in terms of the number of hosts connected and the total amount of data traffic transmitted.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>Multimedia</b><br />The use of computers to present text, graphics, video, animation, and sound in an integrated way. Long touted as the future revolution in computing, multimedia applications were, until the mid-90s, uncommon due to the expensive hardware required. With increases in performance and decreases in price, however, multimedia is now commonplace. Nearly all PCs are capable of displaying video, though the resolution available depends on the power of the computer's video adapter and CPU.<br /><br /><b>NTP</b><br />Network Time Protocol, an Internet standard protocol (built on top of TCP/IP) that assures accurate synchronization to the millisecond of computer clock times in a network of computers. Based on UTC, NTP synchronizes client workstation clocks to the U.S. Naval Observatory Master Clocks in Washington, DC and Colorado Springs CO. Running as a continuous background client program on a computer, NTP sends periodic time requests to servers, obtaining server time stamps and using them to adjust the client's clock.<br /><br /><b>PGP</b><br />PGP (Pretty Good Privacy) is a family of software systems developed by Philip R. Zimmermann and can be used to provide privacy and authentication using the Multipurpose Internet Mail Extensions (MIME) security content types. PGP and Pretty Good Privacy are trademarks of Philip Zimmermann.<br /><br /><b>Payload</b><br />Payload or mission bit stream is the data, such as a data field, block, or stream, being processed or transported ¡ª the part that represents user information and user overhead information. It may include user-requested additional information, such as network management and accounting information. Note that the payload does not include system overhead information for the processing or transportation system.<br /><br /><b>Port</b><br />Port is an interface on a computer to which you can connect a device. Personal computers have various types of ports. Internally, there are several ports for connecting disk drives, display screens, and keyboards. Externally, personal computers have ports for connecting modems, printers, mice, and other peripheral devices. 
<br />
<br />Almost all personal computers come with a serial RS-232C port or RS-422 port for connecting a modem or mouse and a parallel port for connecting a printer. On PCs, the parallel port is a Centronics interface that uses a 25-pin connector. SCSI (Small Computer System Interface) ports support higher transmission speeds than do conventional ports and enable you to attach up to seven devices to the same port.<br /><br /><b>SAP</b><br />SAP (Session Announcement Protocol) is an announcement protocol that is used to assist the advertisement of multicast multimedia conferences and other multicast sessions, and to communicate the relevant session setup information to prospective participants.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2974.html">RFC 2974</a>] Session Announcement Protocol.
                		  </div>
		  
</section>


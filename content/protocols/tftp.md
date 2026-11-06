---
id: protocol-tftp
slug: tftp
name: TFTP
expandedName: Trivial File Transfer Protocol
origin: historical
provenance:
  source: protocols/protocol_TFTP.htm
  sha256: c16252f5b42c563549e60893af3d9b0a1114014856892deb93430e49c86ad0df
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Trivial File Transfer Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Trivial File Transfer Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: File transfer protocol
  - label: Ports
    html: 69 (UDP) server; 1758 (UDP) multicast
  - label: URI
    html: tftp
  - label: Working groups
    html: 'TFTPEXTS, TFTP Extensions'
originalUpdate: '2005-11-07 16:59:03'
rfcs:
  - 783
  - 854
  - 906
  - 1123
  - 1350
  - 1782
  - 1783
  - 1784
  - 1785
  - 2090
  - 2347
  - 2348
  - 2349
  - 3617
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

			Trivial File Transfer Protocol (TFTP) is a very simple file transfer protocol akin to a basic version of FTP. TFTP is often used to transfer small files between hosts on a network.
<br />
<br />Any transfer begins with a request to read or write a file, which also serves to request a connection. If the server grants the request, the connection is opened and the file is sent in fixed length blocks of 512 bytes. Each data packet contains one block of data, and must be acknowledged by an acknowledgment packet before the next packet can be sent. A data packet of less than 512 bytes signals termination of a transfer. If a packet gets lost in the network, the intended recipient will timeout and may retransmit his last packet (which may be data or an acknowledgment), thus causing the sender of the lost packet to retransmit that lost packet. The sender has to keep just one packet on hand for retransmission, since the lock step acknowledgment guarantees that all older packets have been received. Notice that both machines involved in a transfer are considered senders and receivers. One sends data and receives acknowledgments, the other sends acknowledgments and receives data.
<br />
<br />TFTP recognizes only one error condition that does not cause termination, the source port of a received packet being incorrect. In this case, an error packet is sent to the originating host.
<br />
<br />The order of contents of packet 
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>Local Medium</p></td><td><p>Internet</p></td><td><p>Datagram</p></td><td><p>TFTP</p></td></tr></tbody></table></div></div>
<br />As shown in the above illustration: local medium header, if used, Internet header, Datagram header, TFTP header, followed by the remainder of the TFTP packet. (This may or may not be data depending on the type of packet as specified in the TFTP header.) TFTP does not specify any of the values in the Internet header. On the other hand, the source and destination port fields of the Datagram header (its format is given in the appendix) are used by TFTP and the length field reflects the size of the TFTP packet. The transfer identifiers (TID's) used by TFTP are passed to the Datagram layer to be used as ports; therefore they must be between 0 and 65,535. The initialization of TID's is discussed in the section on initial connection protocol.
<br />
<br />The TFTP header consists of a 2 byte opcode field which indicates the packet's type (e.g., DATA, ERROR, etc.). These opcodes and the formats of the various types of packets are discussed further in the section on TFTP packets.
<br /><hr />
<br /><b>TFTP Packets</b>
<br />TFTP supports five types of packets, all of which have been mentioned above:
<br /><ul><li><b>Opcode operation</b><br /></li>
<li>16 bits, unsigned. Specifies the format of the TFTP message.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Opcode</p></td><td><p>Description</p></td></tr><tr><td><p>1</p></td><td><p>RRQ. Read request.</p></td></tr><tr><td><p>2</p></td><td><p>WRQ. Write request.</p></td></tr><tr><td><p>3</p></td><td><p>DATA. Read or write the next block of data.</p></td></tr><tr><td><p>4</p></td><td><p>ACK. Acknowledgment.</p></td></tr><tr><td><p>5</p></td><td><p>ERROR. Error message.</p></td></tr><tr><td><p>6</p></td><td><p>OACK. Option acknowledgment.</p></td></tr></tbody></table></div></div><br /></li>
<li>The TFTP header contains the opcode associated with the packet. 
<br /></li><li><ul><li><b>RRQ/WRQ Packet</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>2 bytes</p></td><td><p>string</p></td><td><p>1 byte</p></td><td><p>string</p></td><td><p>1 byte</p></td></tr><tr><td><p>Opcode</p></td><td><p>Filename</p></td><td><p>0</p></td><td><p>Mode</p></td><td><p>0</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Data Packet</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>2 bytes</p></td><td><p>2 bytes</p></td><td><p>up to 512 bytes of data</p></td></tr><tr><td><p>Opcode</p></td><td><p>Block#</p></td><td><p>Data</p></td></tr></tbody></table></div></div><br /></li>
<li><b>ACK Packet</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>2 bytes</p></td><td><p>2 bytes</p></td></tr><tr><td>Opcode</td><td><p>Block#</p></td></tr></tbody></table></div></div><br /></li>
<li><b>ERROR Packet</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>2 bytes</p></td><td><p>2 bytes</p></td><td><p>string</p></td><td><p>1 byte</p></td></tr><tr><td><p>Opcode</p></td><td><p>Block#</p></td><td><p>ErrMsg</p></td><td><p>1</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Error codes</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p><b>Error</b></p></td><td><p><b>Description</b></p></td></tr><tr><td><p>0</p></td><td><p>No error.</p></td></tr><tr><td><p>1</p></td><td><p>File not found.</p></td></tr><tr><td><p>2</p></td><td><p>Access violation.</p></td></tr><tr><td><p>3</p></td><td><p>Disk full or allocation exceeded.</p></td></tr><tr><td><p>4</p></td><td><p>Illegal TFTP operation.</p></td></tr><tr><td><p>5</p></td><td><p>Unknown transfer ID.</p></td></tr><tr><td><p>6</p></td><td><p>File already exists.</p></td></tr><tr><td><p>7</p></td><td><p>No such user.</p></td></tr><tr><td><p>8</p></td><td><p>Terminate transfer due to option negotiation.</p></td></tr></tbody></table></div></div></li></ul></li></ul><br /></li>
<li><b>Parameters</b><br /></li>
<li>TFTP Read and Write Request commands use the following parameters:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 8" tabindex="0"><table><caption>Description: preserved table 8</caption><tbody><tr><td>Parameter </td><td><p>Description </p></td></tr><tr><td><p>Filename </p></td><td>The name of the file, expressed in quotes, where the protocol is to perform the read or write operation. </td></tr><tr><td><p>Mode </p></td><td>Datamode. The format of the file data that the protocol is to transfer. The following formats are possible:
<br />*NetASCII Standard ASCII character format.
<br />*Octet Eight-bit binary data.
<br />*Mail Standard ASCII character format with username in place of filename. </td></tr></tbody></table></div></div><br /></li>
<li><b>COMMAND</b><br /></li>
<li>TFTP data and data acknowledge commands use the following parameters:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 9" tabindex="0"><table><caption>Description: preserved table 9</caption><tbody><tr><td><p>Command</p></td><td><p>Description</p></td></tr><tr><td><p>Block</p></td><td><p>Block number or sequence number of the current frame of file data.</p></td></tr><tr><td><p>Data</p></td><td><p>First part of the file data displayed for TFTP data frames. </p></td></tr><tr><td><p>TFTP Errors</p></td><td><p>TFTP error frames contain an error code in parentheses followed by the error message, as follows:</p></td></tr><tr><td><p>(0000)</p></td><td><p>Unknown Error.</p></td></tr><tr><td><p>(0001)</p></td><td><p>File not found.</p></td></tr><tr><td><p>(0002)</p></td><td><p>Access violation.</p></td></tr><tr><td><p>(0003)</p></td><td><p>Out of disk space.</p></td></tr><tr><td><p>(0004)</p></td><td><p>Illegal TFTP operation.</p></td></tr><tr><td><p>(0005)</p></td><td><p>Unknown Transfer ID.</p></td></tr><tr><td><p>(0006)</p></td><td><p>Filename already exists.</p></td></tr><tr><td><p>(0007)</p></td><td><p>Unknown user.</p></td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>Data Modes</b>
<br />Three modes of transfer are currently defined in <a href="https://www.rfc-editor.org/rfc/rfc1350.html">RFC 1350</a>
<br /><ul><li><b>NetASCII</b><br /></li>
<li>US-ASCII as defined in USA Standard Code for Information Interchange with modifications specified in </li><li><a href="https://www.rfc-editor.org/rfc/rfc854.html">RFC 854</a></li><li> - Telnet Protocol Specification and extended to use the high order bit. That is, it is an 8-bit character set, unlike US-ASCII which is 7-bit. 
<br /><br /></li>
<li><b>Octet</b><br /></li> 
<li>Raw 8-bit bytes, also called binary. 
<br /><br /></li>
<li><b>Mail</b><br /></li> 
<li>This mode was originally defined in </li><li><a href="https://www.rfc-editor.org/rfc/rfc783.html">RFC 783</a></li><li> and was declared obsolete by </li><li><a href="https://www.rfc-editor.org/rfc/rfc1350.html">RFC 1350</a></li><li>. It allowed for sending mail to a user rather than transferring to a file.</li></ul>
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1</b>

          tftp://example.com/myconfigurationfile;mode=netascii

This example references file "myconfigurationfile" on server "example.com" and requests 
that the transfer occur in netascii mode.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2</b>

          tftp://example.com/mystartupfile

This file references file "mystartupfile" on server "example.com". The transfer should 
occur in octet mode, since no other mode was specified.	  </pre>
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>TFTP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>FTP</b><br />FTP (File Transfer Protocol) is the protocol for exchanging files over the Internet. FTP works in the same way as HTTP for transferring Web pages from a server to a user's browser and SMTP for transferring electronic mail across the Internet in that, like these technologies, FTP uses the Internet's TCP/IP protocols to enable data transfer. 
<br />
<br />FTP is most commonly used to download a file from a server using the Internet or to upload a file to a server (e.g., uploading a Web page file to a server).<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>Timeout</b><br />An interrupt signal generated by a program or device that has waited a certain length of time for some input but has not received it. Many programs perform time-outs so that the program does not sit idle waiting for input that may never come. For example, automatic bank-teller machines perform a time-out if you do not enter your password quickly enough.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[IEN 133] The TFTP Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc906.html">RFC 906</a>] Bootstrap Loading using TFTP.
[<a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>] Requirements for Internet Hosts -- Application and Support.
                Section 4.2. 
[<a href="https://www.rfc-editor.org/rfc/rfc1350.html">RFC 1350</a>] THE TFTP PROTOCOL (REVISION 2).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc783.html">RFC 783</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc1785.html">RFC 1785</a>] TFTP Option Negotiation Analysis.
[<a href="https://www.rfc-editor.org/rfc/rfc2090.html">RFC 2090</a>] TFTP Multicast Option.
[<a href="https://www.rfc-editor.org/rfc/rfc2347.html">RFC 2347</a>] TFTP Option Extension.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1782.html">RFC 1782</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2348.html">RFC 2348</a>] TFTP Blocksize Option.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1783.html">RFC 1783</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2349.html">RFC 2349</a>] TFTP Timeout Interval and Transfer Size Options.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1784.html">RFC 1784</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3617.html">RFC 3617</a>] Uniform Resource Identifier (URI) Scheme and Applicability Statement for the Trivial File Transfer Protocol (TFTP).
                Defines URI scheme tftp:.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc783.html">RFC 783</a>] THE TFTP PROTOCOL (REVISION 2).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1350.html">RFC 1350</a>. 
                Updates: IEN 133. 
[<a href="https://www.rfc-editor.org/rfc/rfc1782.html">RFC 1782</a>] TFTP Option Extension.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2347.html">RFC 2347</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1350.html">RFC 1350</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1783.html">RFC 1783</a>] TFTP Blocksize Option.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2348.html">RFC 2348</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1350.html">RFC 1350</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1784.html">RFC 1784</a>] TFTP Timeout Interval and Transfer Size Options.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2349.html">RFC 2349</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1350.html">RFC 1350</a>
                		  </div>
		  
</section>


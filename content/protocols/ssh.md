---
id: protocol-ssh
slug: ssh
name: SSH
expandedName: Secure Shell Protocol
origin: historical
provenance:
  source: protocols/protocol_SSH.htm
  sha256: d46e79e12ff60e9d9a51dcc02e3463c0291265e42d0cc3f649edc5547b9865b3
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Secure Shell Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Secure Shell Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: '22'
  - label: Related protocols
    html: TCP
  - label: Working groups
    html: 'SECSH, Secure Shell'
originalUpdate: '2006-01-13 09:19:36'
rfcs:
  - 3066
  - 3629
related:
  - protocol-tcp
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

			SSH is a protocol for secure remote login and other secure network services over an insecure network. It consists of three major components:
<br /><ul><li>The Transport Layer Protocol [SSH-TRANS] provides server authentication, confidentiality, and integrity. It may optionally also provide compression. The transport layer will typically be run over a TCP/IP connection, but might also be used on top of any other reliable data stream.<br /></li>
<li>The User Authentication Protocol [SSH-USERAUTH] authenticates the client-side user to the server. It runs over the transport layer protocol.<br /></li>
<li>The Connection Protocol [SSH-CONNECT] multiplexes the encrypted tunnel into several logical channels. It runs over the user authentication protocol.</li></ul>
<br />
<br />The client sends a service request once a secure transport layer connection has been established. The connection protocol provides channels that can be used for a wide range of purposes.
<br />
<br />The most common means of remote login is SSH, both a program and a protocol by the same name. Though remote login is the primary use of SSH, the protocol can be used as a general purpose cryptographic tunnel, capable of copying files, encrypting email connections, and triggering remote execution of programs.
<br />
<br />SSH operates over TCP. In its simplest mode of operation, it connects to a server, negotiates a shared secret key, and then begins encrypting the session (typically using the Blowfish cipher). A username and password are passed over the encrypted session and, if authenticated, the server starts a command shell over the encrypted session. Thus, in its simplest use, SSH represents a more secure alternative to TELNET. I particularly like to use the MindTerm Java applet, which allows encrypted logins from systems that don't have SSH clients - all you need is a web browser capable of running Java applets. 
<br />
<br />In more advanced usage, ssh allows the creation of RSA or DSA asymmetric key pairs. The private key is stored in an identity file, possibly encrypted using a passphrase.
<br />
<br />SSH supports generic tunneling, so it can be used to encrypt windowing system traffic, for example, operating X Windows over a encrypted session. It¡¯s ability to execute remote commands make it a common transport for other commands, such as rsync (incremental file transfer) and cvs (distributed version control).
<br /><hr />
<br /><b>Architecture</b>
<br /><ul><li><b>Host Keys</b><br /></li>
<li>Each server host SHOULD have a host key. The server host key is used during key exchange to verify that the client is really talking to the correct server.
<br /><br /></li>
<li>Two different trust models can be used:
<br /></li><li><ul><li>The client has a local database that associates each host name (as typed by the user) with the corresponding public host key.<br /></li>
<li>The host name-to-key association is certified by some trusted certification authority (CA).</li></ul><br /><br /></li>

<li><b>Extensibility</b><br /></li>
<li>We believe that the protocol will evolve over time, and some organizations will want to use their own encryption, authentication and/or key exchange methods. Central registration of all extensions is cumbersome, especially for experimental or classified features. On the other hand, having no central registration leads to conflicts in method identifiers, making interoperability difficult.
<br /><br /></li>
<li><b>Policy Issues</b><br /></li>
<li>The protocol allows full negotiation of encryption, integrity, key exchange, compression, and public key algorithms and formats. Encryption, integrity, public key, and compression algorithms can be different for each direction.
<br /><br /></li>
<li>The following policy issues SHOULD be addressed in the configuration mechanisms of each implementation:
<br /></li><li><ul><li>Encryption, integrity, and compression algorithms, separately for each direction.<br /></li>
<li>Public key algorithms and key exchange method to be used for host authentication. The existence of trusted host keys for different public key algorithms also affects this choice.<br /></li>
<li>The authentication methods that are to be required by the server for each user.<br /></li>
<li>The operations that the user is allowed to perform using the connection protocol.</li></ul><br /><br /></li>

<li><b>Security Properties</b><br /></li>
<li>The primary goal of the SSH protocol is to improve security on the Internet. It attempts to do this in a way that is easy to deploy, even at the cost of absolute security.
<br /></li><li><ul><li>All encryption, integrity, and public key algorithms used are well-known, well-established algorithms.<br /></li>
<li>All algorithms are used with cryptographically sound key sizes that are believed to provide protection against even the strongest cryptanalytic attacks for decades.<br /></li>
<li>All algorithms are negotiated, and in case some algorithm is broken, it is easy to switch to some other algorithm without modifying the base protocol.</li></ul><br /><br /></li>

<li><b>Localization and Character Set Support</b><br /></li>
<li>For the most part, the SSH protocols do not directly pass text that would be displayed to the user. However, there are some places where such data might be passed. When applicable, the character set for the data MUST be explicitly specified. In most places, ISO 10646 with UTF-8 encoding is used [</li><li><a href="https://www.rfc-editor.org/rfc/rfc3629.html">RFC 3629</a></li><li>]. When applicable, a field is also provided for a language tag [</li><li><a href="https://www.rfc-editor.org/rfc/rfc3066.html">RFC 3066</a></li><li>].</li></ul>
<br /><hr />
<br /><b>Data Type Representations Used in the SSH Protocols</b>
<br /><ul><li><b>Byte</b><br /></li>
<li>A byte represents an arbitrary 8-bit value (octet).
<br /><br /></li>
<li><b>Boolean</b><br /></li>
<li>A boolean value is stored as a single byte. The value 0 represents FALSE, and the value 1 represents TRUE.
<br /><br /></li>
<li><b>Uint32</b><br /></li>
<li>Represents a 32-bit unsigned integer. 
<br /><br /></li>
<li><b>Uint64</b><br /></li>
<li>Represents a 64-bit unsigned integer.).
<br /><br /></li>
<li><b>String</b><br /></li>
<li>Arbitrary length binary string. Strings are allowed to contain arbitrary binary data, including null characters and 8-bit characters. Strings are also used to store text. In that case, US-ASCII is used for internal names, and ISO-10646 UTF-8 for text that might be displayed to the user.
<br /><br /></li>
<li><b>Name-list</b><br /></li>
<li>A string containing a comma-separated list of names. A name-list is represented as a uint32 containing its length (number of bytes that follow) followed by a comma-separated list of zero or more names.</li></ul>
<br /><hr />
<br /><b>Message Numbers</b>
<br />SSH packets have message numbers in the range 1 to 255. These numbers have been allocated as follows:
<br /><ul><li><b>Transport layer protocol:</b><br /></li>
<li><ul><li>1 to 19 Transport layer generic (e.g., disconnect, ignore, debug, etc.)
<br /></li><li>20 to 29 Algorithm negotiation
<br /></li><li>30 to 49 Key exchange method specific (numbers can be reused for different authentication methods)</li></ul><br /></li>
<li><b>User authentication protocol:</b><br /></li>
<li><ul><li>50 to 59 User authentication generic
<br /></li><li>60 to 79 User authentication method specific (numbers can be reused for different authentication methods)</li></ul><br /></li>
<li><b>Connection protocol:</b><br /></li>
<li><ul><li>80 to 89 Connection protocol generic
<br /></li><li>90 to 127 Channel related messages</li></ul><br /></li>
<li><b>Reserved for client protocols:</b><br /></li>
<li><ul><li>128 to 191 Reserved</li></ul><br /></li>
<li><b>Local extensions:</b><br /></li>
<li><ul><li>192 to 255 Local extensions</li></ul></li></ul>
<br /><hr />
<br /><b>IANA Considerations</b>
<br />Allocation of the following types of names in the SSH protocols is assigned by IETF consensus:
<br /><ul><li><b>Service Names</b><br /></li>
<li><ul><li>Authentication Methods
<br /></li><li>Connection Protocol Channel Names
<br /></li><li>Connection Protocol Global Request Names
<br /></li><li>Connection Protocol Channel Request Names</li></ul><br /></li>
<li><b>Key Exchange Method Names</b><br /><br /></li>

<li><b>Assigned Algorithm Names</b><br /></li>
<li><ul><li>Encryption Algorithm Names
<br /></li><li>MAC Algorithm Names
<br /></li><li>Public Key Algorithm Names
<br /></li><li>Compression Algorithm Names</li></ul></li></ul>
<br />
<br /><b>Security Considerations</b>
<br />The transport protocol [SSH-TRANS] provides a confidential channel over an insecure network.
<br />The authentication protocol [SSH-USERAUTH] provides a suite of mechanisms which can be used to authenticate the client user to the server.
<br />The connection protocol [SSH-CONNECT] specifies a mechanism to multiplex multiple streams (channels) of data over the confidential and authenticated transport
<br />
<br /><b>SSH Transport Layer Protocol</b>
<br />The SSH transport layer is a secure low level transport protocol. It provides strong encryption, cryptographic host authentication, and integrity protection.
<br />
<br /><ul><li><b>Confidentiality</b><br /></li>
<li>It is beyond the scope of this document and the Secure Shell Working Group to analyze or recommend specific ciphers other than the ones which have been established and accepted within the industry.
<br /><br /></li>
<li>In the optimal case an implementor would need to add an extra packet only if the packet has been sent out onto the network and there are no other packets waiting for transmission. Implementors may wish to check to see if there are any unsent packets awaiting transmission, but unfortunately it is not normally easy to obtain this information from the kernel or buffers. If there are not, then a packet containing SSH_MSG_IGNORE SHOULD be sent. If a new packet is added to the stream every time the attacker knows the IV that is supposed to be used for the next packet, then the attacker will not be able to guess the correct IV, thus the attack will never be successful.
<br /><br /></li>
<li><b>Data Integrity</b><br /></li>
<li>This protocol does allow the Data Integrity mechanism to be disabled. Implementors SHOULD be wary of exposing this feature for any purpose other than debugging.  Users and administrators SHOULD be explicitly warned anytime the "none" MAC is enabled. So long as the "none" MAC is not used, this protocol provides data integrity.
<br /><br /></li>
<li><b>Replay</b><br /></li>
<li>The use of a MAC other than "none" provides integrity and authentication. In addition, the transport protocol provides a unique session identifier (bound in part to pseudo-random data that is part of the algorithm and key exchange process) that can be used by higher level protocols to bind data to a given session and prevent replay of data from prior sessions.
<br /></li><li>If two sessions happen to have the same session ID (hash of key exchanges) then packets from one can be replayed against the other.
<br /><br /></li>
<li><b>Man-in-the-middle</b><br /></li>
<li>This protocol makes no assumptions or provisions for an infrastructure or means for distributing the public keys of hosts. It is expected that this protocol will sometimes be used without first verifying the association between the server host key and the server host name.
<br /><br /></li>
<li>There are three cases of man-in-the-middle attacks to consider. The first is where an attacker places a device between the client and the server before the session is initiated. The second case that should be considered is similar to the first case in that it also happens at the time of connection but this case points out the need for the secure distribution of server public keys. In the third man-in-the-middle case, attackers may attempt to manipulate packets in transit between peers after the session has been established.
<br /><br /></li>
<li>In summary, the use of this protocol without a reliable association of the binding between a host and its host keys is inherently insecure and is NOT RECOMMENDED.
<br /><br /></li>
<li><b>Denial-of-service</b><br /></li>
<li>This protocol is designed to be used over a reliable transport. If transmission errors or message manipulation occur, the connection is closed. The connection SHOULD be re-established if this occurs. Denial of service attacks of this type ("wire cutter") are almost impossible to avoid.
<br /><br /></li>
<li>In addition, this protocol is vulnerable to Denial of Service attacks because an attacker can force the server to go through the CPU and memory intensive tasks of connection setup and key exchange without authenticating.
<br /><br /></li>
<li><b>Covert Channels</b><br /></li>
<li>The protocol was not designed to eliminate covert channels.</li></ul>
<br /><hr />
<br /><b>SSH Authentication Protocol</b>
<br />The purpose of this protocol is to perform client user authentication. It assumes that this run over a secure transport layer protocol, which has already authenticated the server machine, established an encrypted communications channel, and computed a unique session identifier for this session.
<br />
<br /><ul><li><b>Weak Transport</b><br /></li>
<li>If the transport layer does not provide confidentiality, authentication methods that rely on secret data SHOULD be disabled. If it does not provide strong integrity protection, requests to change authentication data (e.g., a password change) SHOULD be disabled to prevent an attacker from modifying the ciphertext without being noticed, or rendering the new authentication data unusable (denial of service).
<br /><br /></li>
<li><b>Debug Messages</b><br /></li>
<li>Special care should be taken when designing debug messages. These messages may reveal surprising amounts of information about the host if not properly designed. Debug messages can be disabled (during user authentication phase) if high security is required. Administrators of host machines should make all attempts to compartmentalize all event notification messages and protect them from unwarranted observation. Developers should be aware of the sensitive nature of some of the normal event messages and debug messages and may want to provide guidance to administrators on ways to keep this information away from unauthorized people.
<br /><br /></li>
<li><b>Local Security Policy</b><br /></li>
<li>Implementer MUST ensure that the credentials provided validate the professed user and also MUST ensure that the local policy of the server permits the user the access requested. In particular, because of the flexible nature of the SSH connection protocol, it may not be possible to determine the local security policy, if any, that should apply at the time of authentication because the kind of service being requested is not clear at that instant.
<br /><br /></li>
<li><b>Public Key Authentication</b><br /></li>
<li>The use of public-key authentication assumes that the client host has not been compromised. It also assumes that the private-key of the server host has not been compromised.
<br /><br /></li>
<li><b>Password Authentication</b><br /></li>
<li>The password mechanism as specified in the authentication protocol assumes that the server has not been compromised. If the server has been compromised, using password authentication will reveal a valid username / password combination to the attacker, which may lead to further compromises.
<br /><br /></li>
<li><b>Host Based Authentication</b><br /></li>
<li>Host based authentication assumes that the client has not been compromised. There are no mitigating strategies, other than to use host based authentication in combination with another authentication method.</li></ul>
<br /><hr />
<br /><b>SSH Connection Protocol</b>
<br />The SSH Connection Protocol has been designed to run on top of the SSH transport layer and user authentication protocols. It provides interactive login sessions, remote execution of commands, forwarded TCP/IP connections, and forwarded X11 connections. The service name for this protocol is "ssh-connection".
<br />
<br /><ul><li><b>End Point Security</b><br /></li>
<li>End point security is assumed by the connection protocol. If the server has been compromised, any terminal sessions, port forwarding, or systems accessed on the host are compromised. There are no mitigating factors for this.
<br /><br /></li>
<li><b>Proxy Forwarding</b><br /></li>
<li>The SSH connection protocol allows for proxy forwarding of other protocols such as SNMP, POP3, and HTTP. This may be a concern for network administrators who wish to control the access of certain applications by users located outside of their physical location.In addition, a reverse proxy forwarding functionality is available, which again can be used to bypass firewall controls.
<br /><br /></li>
<li>As indicated above, end-point security is assumed during proxy forwarding operations. Failure of end-point security will compromise all data passed over proxy forwarding.
<br /><br /></li>
<li><b>X11 Forwarding</b><br /></li>
<li>Another form of proxy forwarding provided by the SSH connection protocol is the forwarding of the X11 protocol. If end-point security has been compromised, X11 forwarding may allow attacks against the X11 server.
<br /><br /></li>
<li>Implementors of the X11 forwarding protocol SHOULD implement the magic cookie access checking spoofing mechanism as described in [SSH-CONNECT] as an additional mechanism to prevent unauthorized use of the proxy.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Confidentiality</b>

As an example, consider the following case:
          Client                                                  Server
          ------                                                  ------
          TCP(seq=x, len=500)             ----&gt;
           contains Record 1

                              [500 ms passes, no ACK]

          TCP(seq=x, len=1000)            ----&gt;
           contains Records 1,2

                                                                    ACK
    
1. The Nagle algorithm + TCP retransmits mean that the two records get coalesced 
into a single TCP segment.
2. Record 2 is *not* at the beginning of the TCP segment and never will be, since 
it gets ACKed.
3. Yet, the attack is possible because Record 1 has already been seen.

As this example indicates, it's totally unsafe to use the existence of unflushed data 
in the TCP buffers proper as a guide to whether you need an empty packet, since 
when you do the second write(), the buffers will contain the un-ACKed Record 1.</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SSH</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Cvs</b><br />CVS is the Concurrent Versions System, network-transparent program that allows developers to keep track of different development versions of source code. CVS does not maintain multiple versions of source code files but keeps a single copy and records of all of the changes that are made. When a developer wants a particular development version of a file, CVS will reconstruct that version based on its records. 
<br />
<br />Bugs can often get into code when it is modified and may not be detected until long after the modification is made. CVS can retrieve old versions of the code, allowing the developer to see precisely which change caused the bug. CVS is also useful when more than one person is working on a specific file, where it is possible for the developers to overwrite each other's changes. CVS solves this problem by having each developer work in an individual directory and then merging the work from each after the work is complete. 
<br />
<br />It is important to note that CVS is not a build system but rather a way to control disparate versions of code as it is developed over time. 
<br />
<br />CVS is also called a version control system.<br /><br /><b>DSA</b><br />DSA (Digital Signature Algorithm) Digital Signature Algorithm (DSA) is also called the Digital Signature Standard (DSS). DSA was developed by the U.S. Government, and DSA is used in conjunction with the the SHA-1 one-way hash function. DSA is fully described in FIPS 186 [FIPS 186]. The ASN.1 OIDs used to identify this signature algorithm are:
<br />        id-dsa-with-sha1 ID  ::=  {
<br />                iso(1) member-body(2) us(840) x9-57 (10040)
<br />                x9cm(4) 3 }
<br />
<br />The DSA parameters in the subjectPublicKeyInfo field of the certificate of the issuer shall apply to the verification of the signature.
<br />
<br />When signing, the DSA algorithm generates two values. These values are commonly referred to as r and s. To easily transfer these two values as one signature, they shall be ASN.1 encoded using the following ASN.1 structure:
<br />        Dss-Sig-Value  ::=  SEQUENCE  {
<br />                r       INTEGER,
<br />                s       INTEGER  }<br /><br /><b>RSA</b><br />RSA is an algorithm for public key encryption. It was the first algorithm known to be suitable for signing as well as encryption, and one of the first great advances in public key encryption. The RSA algorithm is based on the fact that there is no efficient way to factor very large numbers. Deducing an RSA key, therefore, requires an extraordinary amount of computer processing power and time. 
<br />
<br />The RSA algorithm has become the de facto standard for industrial-strength encryption, especially for data sent over the Internet. It is built into many software products, including Netscape Navigator and Microsoft Internet Explorer. The technology is so powerful that the U.S. government has restricted exporting it to foreign countries. 
<br />
<br />A similar technology that is also used widely is offered by a company called Cylink.<br /><br /><b>Rsync</b><br />The rsync is an open source utility that provides fast incremental file transfer.<br /><br /><b>X Windows</b><br />X Window System (commonly X11 or X) is a windowing system for bitmap displays. It is the standard graphical interface on Unix, Unix-like operating systems and OpenVMS, and is available for most other modern operating systems.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.ssh.com/">SSH</a><hr /><b>Publications:</b>
[ISBN 0596000111] SSH, The Secure Shell: The Definitive Guide.
                		  </div>
		  
</section>


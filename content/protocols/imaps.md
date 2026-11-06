---
id: protocol-imaps
slug: imaps
name: IMAPS
expandedName: Secure Internet Message Access Protocol
origin: historical
provenance:
  source: protocols/protocol_IMAPS.htm
  sha256: ee24619aeb7e87ebd4a71ae54867fc2710274424ad0d7de338d19568312e6600
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Secure Internet Message Access Protocol
layers:
  - Application layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Secure Internet Message Access Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application layer
  - label: Type
    html: Application layer email protocol
  - label: Ports
    html: '993'
  - label: Related protocols
    html: 'SMTP,<br />POP,<br />POP3,<br />TCP,<br />MIME,<br />IMAP'
  - label: URI
    html: imap
  - label: Working groups
    html: |-
      Imap, Internet Message Access Protocol.
      <br />Imapext, Internet Message Access Protocol Extension
originalUpdate: '2005-12-09 14:23:48'
rfcs: []
related:
  - protocol-smtp
  - protocol-pop
  - protocol-pop3
  - protocol-tcp
  - protocol-imap
glossary: []
sections:
  - id: description
    title: Description
  - id: relations
    title: Protocol relations
  - id: glossary
    title: Local glossary
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			The TLS protocol (formerly known as SSL) provides a way to secure an application protocol from tampering and eavesdropping. The option of using such security is desirable for IMAP, POP and ACAP due to common connection eavesdropping and hijacking attacks. Although advanced SASL authentication mechanisms can provide a lightweight version of this service, TLS is complimentary to simple authentication-only SASL mechanisms or deployed clear-text password login commands.
<br />
<br />Many sites have a high investment in authentication infrastructure (e.g., a large database of a one-way-function applied to user passwords), so a privacy layer which is not tightly bound to user authentication can protect against network eavesdropping attacks without requiring a new authentication infrastructure and/or forcing all users to change their password. Recognizing that such sites will desire simple password authentication in combination with TLS encryption, this specification defines the plan SASL mechanism for use with protocols which lack a simple password authentication command such as ACAP and SMTP.
<br />
<br />There is a strong desire in the IETF to eliminate the transmission of clear-text passwords over unencrypted channels. While SASL can be used for this purpose, TLS provides an additional tool with different deploy ability characteristics. A server supporting both TLS with simple passwords and a challenge/response SASL mechanism is likely to interoperate with a wide variety of clients without resorting to unencrypted clear-text passwords.
<br /><hr />
<br /><b>Basic Interoperability and Security Requirements</b>
<br />The following requirements apply to all implementations of the STARTTLS extension for POP3.
<br />
<br /><ul><li><b>Cipher Suite Requirements</b>
<br />Implementation of the TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA cipher suite is required. This is important as it assures that any two compliant implementations can be configured to interoperate.<br /><br /></li>

<li><b>Privacy Operational Mode Security Requirements</b>
<br />Both clients and servers should have a privacy operational mode which refuses authentication unless successful activation of an encryption layer (such as that provided by TLS) occurs prior to or at the time of authentication and which will terminate the connection if that encryption layer is deactivated. Implementations are encouraged to have flexibility with respect to the minimal encryption strength or cipher suites permitted. A minimalist approach to this recommendation would be an operational mode where the TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA cipher suite is mandatory prior to permitting authentication.
<br />
<br />Clients may have an operational mode which uses encryption only when it is advertised by the server, but authentication continues regardless. For backwards compatibility, servers should have an operational mode where only the authentication mechanisms required by the relevant base protocol specification are needed to successfully authenticate.<br /><br /></li>

<li><b>Clear-Text Password Requirements</b>
<br />Clients and servers which implement STARTTLS must be configurable to refuse all clear-text login commands or mechanisms (including both standards-track and nonstandard mechanisms) unless an encryption layer of adequate strength is active. Servers which allow unencrypted clear-text logins should be configurable to refuse clear-text logins both for the entire server, and on a per-user basis.<br /><br /></li>

<li><b>Server Identity Check</b>
<br />During the TLS negotiation, the client must check its understanding of the server hostname against the server's identity as presented in the server Certificate message, in order to prevent man-in-the-middle attacks. Matching is performed according to these rules:
<br /><ul><li>The client must use the server hostname it used to open the connection as the value to compare against the server name as expressed in the server certificate. The client must not use any form of the server hostname derived from an insecure remote source (e.g., insecure DNS lookup). CNAME canonicalization is not done.
<br /><br /></li>
<li>If a subject AltName extension of type dNSName is present in the certificate, it should be used as the source of the server's identity.
<br /><br /></li>
<li>Matching is case-insensitive.
<br /><br /></li>
<li>A "*" wildcard character may be used as the left-most name component in the certificate. For example, *.example.com would match a.example.com, for.example.com, etc. but would not match example.com.
<br /><br /></li>
<li>If the certificate contains multiple names (e.g. more than one dNSName field), then a match with any one of the fields is considered acceptable.
<br /><br /></li>
<li>If the match fails, the client should either ask for explicit user confirmation, or terminate the connection and indicate the server's identity is suspect.</li></ul><br /></li>
<li><b>TLS Security Policy Check</b>
<br />Both the client and server must check the result of the STARTTLS command and subsequent TLS negotiation to see whether acceptable authentication or privacy was achieved. Ignoring this step completely invalidates using TLS for security. The decision about whether acceptable authentication or privacy was achieved is made locally, is implementation-dependent, and is beyond the scope of this document.</li></ul>
<br />
<br /><b>IMAP STARTTLS extension</b>
<br />When the TLS extension is present in IMAP, STARTTLS is listed as a capability in response to the CAPABILITY command. This extension adds a single command, STARTTLS to the IMAP protocol which is used to begin a TLS negotiation.
<br />
<br /><ul><li><b>STARTTLS Command</b>
<br /><ul><li>Arguments: none
<br /></li><li>Responses: no specific responses for this command
<br /></li><li>Result: OK - begin TLS negotiation BAD - command unknown or arguments invalid</li></ul>
<br />A TLS negotiation begins immediately after the CRLF at the end of the tagged OK response from the server. Once a client issues a STARTTLS command, it must not issue further commands until a server response is seen and the TLS negotiation is complete.
<br />
<br />The STARTTLS command is only valid in non-authenticated state. The server remains in non-authenticated state, even if client credentials are supplied during the TLS negotiation. The SASL external mechanism may be used to authenticate once TLS client credentials are successfully exchanged, but servers supporting the STARTTLS command are not required to support the external mechanism.
<br />
<br />Once TLS has been started, the client must discard cached information about server capabilities and should re-issue the CAPABILITY command. This is necessary to protect against man-in-the-middle attacks which alter the capabilities list prior to STARTTLS. The server may advertise different capabilities after STARTTLS.
<br />
<br />The formal syntax for IMAP is amended as follows:
<br /><ul><li>        command_any   =/  "STARTTLS"</li></ul>
<br />
<br /></li><li><b>IMAP LOGINDISABLED capability</b>
<br />The current IMAP protocol specification requires the implementation of the LOGIN command which uses clear-text passwords. Many sites may choose to disable this command unless encryption is active for security reasons. An IMAP server may advertise that the LOGIN command is disabled by including the LOGINDISABLED capability in the capability response. Such a server will respond with a tagged "NO" response to any attempt to use the LOGIN command.
<br />
<br />An IMAP server which implements STARTTLS must implement support for the LOGINDISABLED capability on unencrypted connections. An IMAP client which complies with this specification must not issue the LOGIN command if this capability is present.
<br />
<br />This capability is useful to prevent clients compliant with this specification from sending an unencrypted password in an environment subject to passive attacks. It has no impact on an environment subject to active attacks as a man-in-the-middle attacker can remove this capability. 
<br />
<br />Servers advertising this capability will fail to interoperate with many existing compliant IMAP clients and will be unable to prevent those clients from disclosing the user's password.</li></ul>
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
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IMAPS</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>IMAP</b><br />IMAP 9Internet Message Access Protocol) is a protocol for retrieving e-mail messages. The latest version, IMAP4, is similar to POP3 but supports some additional features. For example, with IMAP4, you can search through your e-mail messages for keywords while the messages are still on mail server. You can then choose which messages to download to your machine.<br /><br /><b>ACAP</b><br />ACAP(Application Configuration Access Protocol) is an e-mail protocol being developed by the IETF to complement IMAP4, was previously known as IMSP (Interactive Mail Support Protocol). ACAP supports related e-mail services such as subscribing to bulletin boards, and organizing and searching mailboxes and address books. <br /><br /><b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>CNAME</b><br />CNAME (Canonical Name Record ) is a record in a DNS database that indicates the true, or canonical, host name of a computer that its aliases are associated with. A computer hosting a Web site must have an IP address in order to be connected to the World Wide Web. The DNS resolves the computer domain name to its IP address, but sometimes more than one domain name resolves to the same IP address, and this is where the CNAME is useful. A machine can have an unlimited number of CNAME aliases, but a separate CNAME record must be in the database for each alias.<br /><br /><b>CRLF</b><br />&lt;character&gt; /ker'l*f/, sometimes /kru'l*f/ or /C-R-L-F/ A carriage return (CR, ASCII 13) followed by a line feed (LF, ASCII 10).  Under Unix influence this usage has become less common because Unix uses just line feed as its line terminator.
<br />A carriage return (CR, ASCII 0001101) followed by a line feed (LF, ASCII 0001010). More loosely, whatever it takes to get you from the end of one line of text to the beginning of the next line.<br /><br /><b>Clear-text</b><br />Clear text is also called plain text.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>DNS</b><br />DNS(Domain Name System or Service or Server), an Internet service that translates domain names into IP addresses. Because domain names are alphabetic, they're easier to remember. The Internet however, is really based on IP addresses. Every time you use a domain name, therefore, a DNS service must translate the name into the corresponding IP address. For example, the domain name www.example.com might translate to 198.105.232.4. 
<br />
<br />The DNS system is, in fact, its own network. If one DNS server doesn't know how to translate a particular domain name, it asks another one, and so on, until the correct IP address is returned.<br /><br /><b>Database</b><br />A database is an organized collection of data. The term originated within the computer industry, but its meaning has been broadened by popular use, to the extent that the European Database Directive (which creates intellectual property rights for databases) includes non-electronic databases within its definition. This article is confined to a more technical use of the term; though even amongst computing professionals, some attach a much wider meaning to the word than others.<br /><br /><b>Encryption</b><br />The translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text; encrypted data is referred to as cipher text. 
<br />
<br />There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>IMAPS</b><br />Because of IMAP transfers data and passwords over the network in clear text. Secure IMAP overcomes this weakness by encrypting information, thus keeping it private.<br /><br /><b>Login</b><br />Alternative spellings for login are log in and log on.<br /><br /><b>Man-in-the-middle</b><br />In cryptography, a man in the middle attack (MITM) is an attack in which an attacker is able to read, insert and modify at will, messages between two parties without either party knowing that the link between them has been compromised. The attacker must be able to observe and intercept messages going between the two victims. <br /><br /><b>POP</b><br />POP (Post Office Protocol) is a protocol used to retrieve e-mail from a mail server. Most e-mail applications (sometimes called an e-mail client) use the POP protocol, although some can use the newer IMAP (Internet Message Access Protocol). There are two versions of POP. The first, called POP2, became a standard in the mid-80's and requires SMTP to send messages. The newer version, POP3, can be used with or without SMTP.<br /><br /><b>POP3</b><br />POP3 (Post Office Protocol 3) is the most recent version of a standard protocol for receiving e-mail. POP3 is a client/server protocol in which e-mail is received and held for you by your Internet server. Periodically, you (or your client e-mail receiver) check your mail-box on the server and download any mail, probably using POP3. This standard protocol is built into most popular e-mail products, such as Eudora and Outlook Express. It's also built into the Netscape and Microsoft Internet Explorer browsers. <br /><br /><b>Password</b><br />A secret series of characters that enables a user to access a file, computer, or program. On multi-user systems, each user must enter his or her password before the computer will respond to commands. The password helps ensure that unauthorized users do not access the computer. In addition, data files and programs may require a password.<br /><br /><b>SASL</b><br />SASL (Simple Authentication and Security Layer) is a method for adding authentication support to connection-based protocols. SASL takes effect when a protocol initiates a command for identifying and authenticating a user to a server. SASL also includes an option for negotiating protection of subsequent protocol interactions. With this option in effect, SASL places a security layer between the protocol and the connection.<br /><br /><b>SMTP</b><br />SMTP (Simple Mail Transfer Protocol) is a  protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.<br /><br /><b>SSL</b><br />SSL (Secure Sockets Layer) and TLS (Transport Layer Security), its successor, are cryptographic protocols which provide secure communications on the Internet. There are slight differences between SSL 3.0 and TLS 1.0, but the protocol remains substantially the same.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Service</b><br />The NAS provides a service to the dial-in user, such as PPP or Telnet.<br /><br /><b>TLS</b><br />TLS (Transport Layer Security), made up of two layers: the TLS Record Protocol and TLS Handshake Protocol, is a protocol that guarantees privacy and data integrity between client/server applications communicating over the Internet. TLS is application protocol-independent. Higher-level protocols can layer on top of the TLS protocol transparently.<br /><br /><b>User</b><br />User is an individual who uses a computer. This includes expert programmers as well as novices. An end user is any individual who runs an application program.<br /><br /><b>Wildcard</b><br />Wildcard character is a special symbol that stands for one or more characters. Many operating systems and applications support wildcards for identifying files and directories. This enables you to select multiple files with a single specification.<br /><br />			</div>
		  
</section>


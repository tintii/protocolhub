---
id: protocol-pop3s
slug: pop3s
name: POP3s
expandedName: POP3 over TLS/SSL
origin: historical
provenance:
  source: protocols/protocol_POP3s.htm
  sha256: 886801d696e04e5f3b69bdd93461301f46e658155615e03bbd24734dfc68c199
  provider: 'Colasoft Co., Ltd.'
aliases:
  - POP3 over TLS/SSL
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: POP3 over TLS/SSL
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: '995'
  - label: Related protocols
    html: 'POP3,<br />SMTP,<br />IMAP,<br />TCP'
originalUpdate: '2005-12-06 16:03:10'
rfcs: []
related:
  - protocol-pop3
  - protocol-smtp
  - protocol-imap
  - protocol-tcp
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
<br />Many sites have a high investment in authentication infrastructure (e.g., a large database of a one-way-function applied to user passwords), so a privacy layer which is not tightly bound to user authentication can protect against network eavesdropping attacks without requiring a new authentication infrastructure and/or forcing all users to change their password. Recognizing that such sites will desire simple password authentication in combination with TLS encryption, this specification defines the PLAIN SASL mechanism for use with protocols which lack a simple password authentication command such as ACAP and SMTP.
<br />
<br />There is a strong desire in the IETF to eliminate the transmission of clear-text passwords over unencrypted channels. While SASL can be used for this purpose, TLS provides an additional tool with different deploy ability characteristics. A server supporting both TLS with simple passwords and a challenge/response SASL mechanism is likely to interoperate with a wide variety of clients without resorting to unencrypted clear-text passwords.
<br /><hr />
<br /><b>Basic Interoperability and Security Requirements</b>
<br />The following requirements apply to all implementations of the STARTTLS extension for POP3.
<br /><ul><li><b>Cipher Suite Requirements</b>
<br />Implementation of the TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA cipher suite is required. This is important as it assures that any two compliant implementations can be configured to interoperate. All other cipher suites are optional.<br /><br /></li>

<li><b>Privacy Operational Mode Security Requirements</b>
<br />Both clients and servers should have a privacy operational mode which refuses authentication unless successful activation of an encryption layer (such as that provided by TLS) occurs prior to or at the time of authentication and which will terminate the connection if that encryption layer is deactivated. Implementations are encouraged to have flexibility with respect to the minimal encryption strength or cipher suites permitted. A minimalist approach to this recommendation would be an operational mode where the TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA cipher suite is mandatory prior to permitting authentication.
<br />
<br />Clients may have an operational mode which uses encryption only when it is advertised by the server, but authentication continues regardless. For backwards compatibility, servers should have an operational mode where only the authentication mechanisms required by the relevant base protocol specification are needed to successfully authenticate.<br /><br /></li>

<li><b>Clear-Text Password Requirements</b>
<br />Clients and servers which implement STARTTLS must be configurable to refuse all clear-text login commands or mechanisms (including both standards-track and nonstandard mechanisms) unless an encryption layer of adequate strength is active. Servers which allow unencrypted clear-text logins should be configurable to refuse clear-text logins both for the entire server, and on a per-user basis.<br /><br /></li>

<li><b>Server Identity Check</b>
<br />During the TLS negotiation, the client must check its understanding of the server hostname against the server's identity as presented in the server Certificate message, in order to prevent man-in-the-middle attacks. Matching is performed according to these rules:<br /></li>
<li><ul><li>The client must use the server hostname it used to open the connection as the value to compare against the server name as expressed in the server certificate. The client must not use any form of the server hostname derived from an insecure remote source (e.g., insecure DNS lookup). CNAME canonicalization is not done.<br /><br /></li>

<li>If a subjectAltName extension of type dNSName is present in the certificate, it should be used as the source of the server's identity.<br /><br /></li>

<li>Matching is case-insensitive.<br /><br /></li>

<li>A "*" wildcard character may be used as the left-most name component in the certificate. For example, *.example.com would match a.example.com, for.example.com, etc. but would not match example.com.<br /><br /></li>

<li>If the certificate contains multiple names (e.g. more than one dNSName field), then a match with any one of the fields is considered acceptable.<br /><br /></li>

<li>If the match fails, the client should either ask for explicit user confirmation, or terminate the connection and indicate the server's identity is suspect.</li></ul><br /><br /></li>

<li><b>TLS Security Policy Check</b>
<br />Both the client and server must check the result of the STARTTLS command and subsequent TLS negotiation to see whether acceptable authentication or privacy was achieved. Ignoring this step completely invalidates using TLS for security. The decision about whether acceptable authentication or privacy was achieved is made locally, is implementation-dependent, and is beyond the scope of this document.</li></ul>
<br />
<br /><b>POP3 STARTTLS extension</b>
<br />The POP3 STARTTLS extension adds the STLS command to POP3 servers. If this is implemented, the POP3 extension mechanism must also be implemented to avoid the need for client probing of multiple commands. The capability name STLS indicates this command is present and permitted in the current state.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">STLS
   Arguments: none

   Restrictions: Only permitted in AUTHORIZATION state.

   Discussion: 
   A TLS negotiation begins immediately after the CRLF at the end of the +OK response 
from the server. A -ERR response may result if a security layer is already active. Once 
a client issues a STLS command, it must not issue further commands until a server 
response is seen and the TLS negotiation is complete.

   The STLS command is only permitted in AUTHORIZATION state and the server remains 
in AUTHORIZATION state, even if client credentials are supplied during the TLS 
negotiation. The AUTH command with the EXTERNAL mechanism may be used to authenticate 
once TLS client credentials are successfully exchanged, but servers supporting the STLS 
command are not required to support the EXTERNAL mechanism.

   Once TLS has been started, the client must discard cached information about server 
capabilities and should re-issue the CAPA command. This is necessary to protect against 
man-in-the-middle attacks which alter the capabilities list prior to STLS. The server 
may advertise different capabilities after STLS.

   Possible Responses:
+OK -ERR

   Examples:
   C: STLS
   S: +OK Begin TLS negotiation

   ...
   C: STLS
   S: -ERR Command not permitted when TLS active</pre>
<br /><hr />
<br /><b>PLAIN SASL mechanism</b>
<br />Clear-text passwords are simple, interoperate with almost all existing operating system authentication databases, and are useful for a smooth transition to a more secure password-based authentication mechanism. The drawback is that they are unacceptable for use over an unencrypted network connection.
<br />
<br />This defines the "PLAIN" SASL mechanism for use with ACAP and other protocols with no clear-text login command. The PLAIN SASL mechanism must not be advertised or used unless a strong encryption layer (such as the provided by TLS) is active or backwards compatibility dictates otherwise.
<br />
<br />The mechanism consists of a single message from the client to the server. The client sends the authorization identity (identity to login as), followed by a US-ASCII NUL character, followed by the authentication identity (identity whose password will be used), followed by a US-ASCII NUL character, followed by the clear-text password. The client may leave the authorization identity empty to indicate that it is the same as the authentication identity.
<br />
<br />The server will verify the authentication identity and password with the system authentication database and verify that the authentication credentials permit the client to login as the authorization identity. If both steps succeed, the user is logged in.
<br />
<br />The server may also use the password to initialize any new authentication database, such as one suitable for CRAM-MD5.
<br />
<br />Non-US-ASCII characters are permitted as long as they are represented in UTF-8. Use of non-visible characters or characters which a user may be unable to enter on some keyboards is discouraged. The formal grammar for the client message using Augmented BNF follows.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">   message         = [authorize-id] NUL authenticate-id NUL password
   authenticate-id = 1*UTF8-SAFE      ; MUST accept up to 255 octets
   authorize-id    = 1*UTF8-SAFE      ; MUST accept up to 255 octets
   password        = 1*UTF8-SAFE      ; MUST accept up to 255 octets
   NUL             = %x00
   UTF8-SAFE       = %x01-09 / %x0B-0C / %x0E-7F / UTF8-2 /
                     UTF8-3 / UTF8-4 / UTF8-5 / UTF8-6
   UTF8-1          = %x80-BF
   UTF8-2          = %xC0-DF UTF8-1
   UTF8-3          = %xE0-EF 2UTF8-1

   UTF8-4          = %xF0-F7 3UTF8-1
   UTF8-5          = %xF8-FB 4UTF8-1
   UTF8-6          = %xFC-FD 5UTF8-1</pre>
<br /><b>POP3s ports</b>
<br />A number of problems have been observed with separate ports for secure variants of protocols. This is an attempt to enumerate some of those problems.
<br />
<br />Separate ports lead to a separate URL scheme which intrudes into the user interface in inappropriate ways. For example, many web pages use language like "click here if your browser supports SSL." This is a decision the browser is often more capable of making than the user.
<br />
<br />Separate ports imply a model of either "secure" or "not secure." This can be misleading in a number of ways. First, the "secure" port may not in fact be acceptably secure as an export-crippled cipher suite might be in use. This can mislead users into a false sense of security. Second, the normal port might in fact be secured by using a SASL mechanism which includes a security layer. Thus the separate port distinction makes the complex topic of security policy even more confusing. One common result of this confusion is that firewall administrators are often misled into permitting the "secure" port and blocking the standard port. This could be a poor choice given the common use of SSL with a 40-bit key encryption layer and plain-text password authentication is less secure than strong SASL mechanisms such as GSSAPI with Kerberos 5.
<br />
<br />Use of separate ports for SSL has caused clients to implement only two security policies: use SSL or don't use SSL. The desirable security policy "use TLS when available" would be cumbersome with the separate port model, but is simple with STARTTLS.
<br />
<br />Port numbers are a limited resource. While they are not yet in short supply, it is unwise to set a precedent that could double (or worse) the speed of their consumption.
<br /><hr />
<br /><b>TLS</b>
<br />TLS only provides protection for data sent over a network connection. Messages transferred over IMAP or POP3 are still available to server administrators and usually subject to eavesdropping, tampering and forgery when transmitted through SMTP or NNTP. TLS is no substitute for an end-to-end message security mechanism using MIME security multiparts.
<br />
<br />A man-in-the-middle attacker can remove STARTTLS from the capability list or generate a failure response to the STARTTLS command. In order to detect such an attack, clients should warn the user when session privacy is not active and/or be configurable to refuse to proceed without an acceptable level of security.
<br />
<br />A man-in-the-middle attacker can always cause a down-negotiation to the weakest authentication mechanism or cipher suite available. For this reason, implementations should be configurable to refuse weak mechanisms or cipher suites.
<br />
<br />Any protocol interactions prior to the TLS handshake are performed in the clear and can be modified by a man-in-the-middle attacker. For this reason, clients must discard cached information about server capabilities advertised prior to the start of the TLS handshake.
<br />
<br />Clients are encouraged to clearly indicate when the level of encryption active is known to be vulnerable to attack using modern hardware (such as encryption keys with 56 bits of entropy or less).
<br />
<br />The LOGINDISABLED IMAP capability only reduces the potential for passive attacks, it provides no protection against active attacks. The responsibility remains with the client to avoid sending a password over a vulnerable channel.
<br />
<br />The PLAIN mechanism relies on the TLS encryption layer for security. When used without TLS, it is vulnerable to a common network eavesdropping attack. Therefore PLAIN must not be advertised or used unless a suitable TLS encryption layer is active or backwards compatibility dictates otherwise.
<br />
<br />When the PLAIN mechanism is used, the server gains the ability to impersonate the user to all services with the same password regardless of any encryption provided by TLS or other network privacy mechanisms. While many other authentication mechanisms have similar weaknesses, stronger SASL mechanisms such as Kerberos address this issue. Clients are encouraged to have an operational mode where all mechanisms which are likely to reveal the user's password to the server are disabled.
<br />
<br />The security considerations for TLS apply to STARTTLS and the security considerations for SASL apply to the PLAIN mechanism.
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
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>POP3s</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ACAP</b><br />ACAP(Application Configuration Access Protocol) is an e-mail protocol being developed by the IETF to complement IMAP4, was previously known as IMSP (Interactive Mail Support Protocol). ACAP supports related e-mail services such as subscribing to bulletin boards, and organizing and searching mailboxes and address books. <br /><br /><b>ASCII</b><br />ASCII (American Standard Code for Information Interchange) is the most common format for text files in computers and on the Internet. In an ASCII file, each alphabetic, numeric, or special character is represented with a 7-bit binary number (a string of seven 0s or 1s). 128 possible characters are defined. 
<br />
<br />Unix and DOS-based operating systems use ASCII for text files. Windows NT and 2000 uses a newer code, Unicode. IBM's S/390 systems use a proprietary 8-bit code called EBCDIC. Conversion programs allow different operating systems to change a file from one code to another. 
<br />
<br />ASCII was developed by the American National Standards Institute (ANSI).<br /><br /><b>Authentication</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>CNAME</b><br />CNAME (Canonical Name Record ) is a record in a DNS database that indicates the true, or canonical, host name of a computer that its aliases are associated with. A computer hosting a Web site must have an IP address in order to be connected to the World Wide Web. The DNS resolves the computer domain name to its IP address, but sometimes more than one domain name resolves to the same IP address, and this is where the CNAME is useful. A machine can have an unlimited number of CNAME aliases, but a separate CNAME record must be in the database for each alias.<br /><br /><b>CRAM-MD5</b><br />CRAM-MD5 authentication was at one point proposed as a required mechanism for LDAPv3 servers. It has since been superseded by Digest-MD5 as the required mechanism.<br /><br /><b>Case-insensitive</b><br />Text sometimes exhibits case sensitivity, that is, words can differ in meaning based on the differing use of uppercase and lowercase letters. Words with capital letters don't always have the same meaning as words with lowercase letters. For example, Bill is the name of former president (Clinton) who signs a bill (which is a proposed law put before a legislature).<br /><br /><b>Clear-text</b><br />Clear text is also called plain text.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>DNS</b><br />DNS(Domain Name System or Service or Server), an Internet service that translates domain names into IP addresses. Because domain names are alphabetic, they're easier to remember. The Internet however, is really based on IP addresses. Every time you use a domain name, therefore, a DNS service must translate the name into the corresponding IP address. For example, the domain name www.example.com might translate to 198.105.232.4. 
<br />
<br />The DNS system is, in fact, its own network. If one DNS server doesn't know how to translate a particular domain name, it asks another one, and so on, until the correct IP address is returned.<br /><br /><b>Eavesdropping</b><br />Eavesdropping is the intercepting and reading of messages and conversations by unintended recipients. One who participates in eavesdropping, i.e. someone who secretly listens in on the conversations of others, is called an eavesdropper.<br /><br /><b>Encryption</b><br />The translation of data into a secret code. Encryption is the most effective way to achieve data security. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it. Unencrypted data is called plain text; encrypted data is referred to as cipher text. 
<br />
<br />There are two main types of encryption: asymmetric encryption (also called public-key encryption) and symmetric encryption.<br /><br /><b>GSS-API</b><br />The GSS-API (Generic Security Service Application Program Interface) is a generic API for doing client-server authentication.
<br />
<br />A typical GSS-API caller is itself a communications protocol, calling on GSS-API in order to protect its communications with authentication, integrity, and/or confidentiality security services. A GSS-API caller accepts tokens provided to it by its local GSS-API implementation and transfers the tokens to a peer on a remote system; that peer passes the received tokens to its local GSS-API implementation for processing. The security services available through GSS-API in this fashion are implementable (and have been implemented) over a range of underlying mechanisms based on secret-key and public-key cryptographic technologies.
<br />
<br />The GSS-API separates the operations of initializing a security context between peers, achieving peer entity authentication (GSS_Init_sec_context() and GSS_Accept_sec_context() calls), from the operations of providing per-message data origin authentication and data integrity protection (GSS_GetMIC() and GSS_VerifyMIC() calls) for messages subsequently transferred in conjunction with that context.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>IMAP</b><br />IMAP 9Internet Message Access Protocol) is a protocol for retrieving e-mail messages. The latest version, IMAP4, is similar to POP3 but supports some additional features. For example, with IMAP4, you can search through your e-mail messages for keywords while the messages are still on mail server. You can then choose which messages to download to your machine.<br /><br /><b>Kerberos</b><br />The name given to the Project Athena's authentication service, the protocol used by that service, or the code used to implement the authentication service. The name is adopted from the three-headed dog that guards Hades.<br /><br /><b>Login</b><br />Alternative spellings for login are log in and log on.<br /><br /><b>MIME</b><br />MIME (Multipurpose Internet Mail Extensions) is a specification for formatting non-ASCII messages so that they can be sent over the Internet. Many e-mail clients now support MIME, which enables them to send and receive graphics, audio, and video files via the Internet mail system. In addition, MIME supports messages in character sets other than ASCII. 
<br />
<br />There are many predefined MIME types, such as GIF graphics files and PostScript files. It is also possible to define your own MIME types. 
<br />
<br />In addition to e-mail applications, Web browsers also support various MIME types. This enables the browser to display or output files that are not in HTML format.<br /><br /><b>Man-in-the-middle</b><br />In cryptography, a man in the middle attack (MITM) is an attack in which an attacker is able to read, insert and modify at will, messages between two parties without either party knowing that the link between them has been compromised. The attacker must be able to observe and intercept messages going between the two victims. <br /><br /><b>NNTP</b><br />Network News Transfer Protocol or NNTP is an Internet application protocol used primarily for reading and posting Usenet articles, as well as transferring news among news servers.<br /><br /><b>OS</b><br />The most important program that runs on a computer. Every general-purpose computer must have an operating system to run other programs. Operating systems perform basic tasks, such as recognizing input from the keyboard, sending output to the display screen, keeping track of files and directories on the disk, and controlling peripheral devices such as disk drives and printers.<br /><br /><b>POP</b><br />POP (Post Office Protocol) is a protocol used to retrieve e-mail from a mail server. Most e-mail applications (sometimes called an e-mail client) use the POP protocol, although some can use the newer IMAP (Internet Message Access Protocol). There are two versions of POP. The first, called POP2, became a standard in the mid-80's and requires SMTP to send messages. The newer version, POP3, can be used with or without SMTP.<br /><br /><b>Password</b><br />A secret series of characters that enables a user to access a file, computer, or program. On multi-user systems, each user must enter his or her password before the computer will respond to commands. The password helps ensure that unauthorized users do not access the computer. In addition, data files and programs may require a password.<br /><br /><b>SASL</b><br />SASL (Simple Authentication and Security Layer) is a method for adding authentication support to connection-based protocols. SASL takes effect when a protocol initiates a command for identifying and authenticating a user to a server. SASL also includes an option for negotiating protection of subsequent protocol interactions. With this option in effect, SASL places a security layer between the protocol and the connection.<br /><br /><b>SMTP</b><br />SMTP (Simple Mail Transfer Protocol) is a  protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.<br /><br /><b>SSL</b><br />SSL (Secure Sockets Layer) and TLS (Transport Layer Security), its successor, are cryptographic protocols which provide secure communications on the Internet. There are slight differences between SSL 3.0 and TLS 1.0, but the protocol remains substantially the same.<br /><br /><b>TLS</b><br />TLS (Transport Layer Security), made up of two layers: the TLS Record Protocol and TLS Handshake Protocol, is a protocol that guarantees privacy and data integrity between client/server applications communicating over the Internet. TLS is application protocol-independent. Higher-level protocols can layer on top of the TLS protocol transparently.<br /><br /><b>UTF-8</b><br />UTF(Unicode Transformation Format) preserving the full US-ASCII range, providing compatibility with file systems, parsers and other software that rely on US-ASCII values but are transparent to other values. 
<br />
<br />UTF-8 encodes UCS-2 or UCS-4 characters as a varying number of octets, where the number of octets, and the value of each, depend on the integer value assigned to the character in ISO/IEC 10646.<br /><br />			</div>
		  
</section>


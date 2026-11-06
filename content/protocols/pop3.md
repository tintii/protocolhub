---
id: protocol-pop3
slug: pop3
name: POP3
expandedName: Post Office Protocol Version 3
origin: historical
provenance:
  source: protocols/protocol_POP3.htm
  sha256: e88f9dec32f3672924175c9bd69f71c3595e8806d05373198b87ee8634a63072
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Post Office Protocol Version 3
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Post Office Protocol Version 3
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Email access protocol
  - label: Ports
    html: Version 2 - 109 (TCP)<br />Version 3 - 110 (TCP)
  - label: Related protocols
    html: 'SMTP,<br />ESMTP,<br />IMAP4,<br />APOP,<br />ACAP'
  - label: URI
    html: pop
originalUpdate: '2006-09-29 11:14:45'
rfcs:
  - 918
  - 937
  - 1081
  - 1082
  - 1225
  - 1460
  - 1725
  - 1734
  - 1738
  - 1869
  - 1939
  - 1957
  - 2384
  - 2449
  - 2595
  - 3206
related:
  - protocol-smtp
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

			POP3 (Post Office Protocol 3) is the most recent version of a standard protocol for receiving e-mail. POP3 is a client/server protocol in which e-mail is received and held for you by your Internet server. Periodically, you (or your client e-mail receiver) check your mail-box on the server and download any mail, probably using POP3. This standard protocol is built into most popular e-mail products, such as Eudora and Outlook Express. It's also built into the Netscape and Microsoft Internet Explorer browsers. 
<br />
<br />POP3 is designed to delete mail on the server as soon as the user has downloaded it. However, some implementations allow users or an administrator to specify that mail be saved for some period of time. POP can be thought of as a "store-and-forward" service. 
<br />
<br />An alternative protocol is Internet Message Access Protocol (IMAP). IMAP provides the user more capabilities for retaining e-mail on the server and for organizing it in folders on the server. IMAP can be thought of as a remote file server. 
<br />
<br />POP and IMAP deal with the receiving of e-mail and are not to be confused with the Simple Mail Transfer Protocol (SMTP), a protocol for transferring e-mail across the Internet. You send e-mail with SMTP and a mail handler receives it on your recipient's behalf. Then the mail is read using POP or IMAP. 
<br />
<br />The conventional port number for POP3 is 110.
<br /><hr />
<br /><b>POP Commands</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>Command</p></td><td><p>Response</p></td><td><p>Description</p></td></tr><tr><td><p>APOP</p></td><td> </td><td><p>Login with MD5 signature.</p></td></tr><tr><td><p>AUTH</p></td><td> </td><td><p>Authentication request.</p></td></tr><tr><td><p>CAPA</p></td><td> </td><td><p>Get a list of capabilities supported by the server.</p></td></tr><tr><td><p>DELE</p></td><td>+OK message deleted-ERR no such message</td><td><p>Mark the message as deleted. The POP server will mark the message as deleted.  Any future operations on this message will generate an error.  The message is not actually deleted until the session is terminated.</p></td></tr><tr><td><p>LIST</p></td><td>+OK scan listing +OKscan listing for msg #1scan listing for msg #2</td><td><p>Get a scan listing of one or all messages. The server returns a scan listing for the specified message, or scan listings for all messages if no argument is given.  A scan listing for a message consists of the message number followed by the size of the message in octets</p></td></tr><tr><td><p>NOOP</p></td><td>+OK</td><td><p>The POP server does nothing.</p></td></tr><tr><td><p>PASS</p></td><td> </td><td><p>Cleartext password entry. The password associated with the user"s name.</p></td></tr><tr><td><p>QUIT</p></td><td>+OK-ERR</td><td><p>The POP server removes all messages marked as deleted, releases any lock that may be held on the mailbox, and closes the TCP connection.  Note that the status message indicates whether or not all of the marked messages were deleted.  No matter what happens the TCP connection will be closed.</p></td></tr><tr><td><p>RETR</p></td><td>+OK message follows-ERR no such message</td><td><p>Retrieve the message. After the initial +OK, the POP server sends the message corresponding to the given message number.  A line containing a single period "." marks the end of the message.</p></td></tr><tr><td><p>RSET</p></td><td>+OK</td><td><p>If any messages have been marked as deleted they are unmarked.</p></td></tr><tr><td><p>STAT</p></td><td>+OK nn mm</td><td><p>Get the drop listing. The server returns the number of messages (nn) in the maildrop and the total size of the mail drop (mm) in octets.</p></td></tr><tr><td><p>STLS</p></td><td> </td><td><p>Begin a TLS negotiation.</p></td></tr><tr><td><p>TOP</p></td><td> </td><td><p>Get the top n lines of the message.</p></td></tr><tr><td><p>UIDL</p></td><td> </td><td><p>Get a unique-id listing for one or all messages.</p></td></tr><tr><td><p>USER</p></td><td> </td><td><p>Mailbox login. The argument specifies the name of the user whose mailbox will be accessed using POP.</p></td></tr><tr><td><p>XTND</p></td><td> </td><td> </td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>POP Capabilities</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Capability</td><td>References</td></tr><tr><td>AUTH-RESP-CODE</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc3206.txt' target='_blank'&gt;RFC 3206&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc3206.html">RFC 3206</a></td></tr><tr><td>EXPIRE</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr><tr><td>IMPLEMENTATION</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr><tr><td>LOGIN-DELAY</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr><tr><td>PIPELINING</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr><tr><td>RESP-CODES</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr><tr><td>SASL</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr><tr><td>TOP</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr><tr><td>UIDL</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr><tr><td>USER</td><td><a href="https://www.rfc-editor.org/rfc/rfc.txt' target='_blank'&gt;RFC &lt;/a&gt;/&lt;a href='http://www.rfc-editor.org/rfc/rfc2449.txt' target='_blank'&gt;RFC 2449&lt;/a&gt;.txt"></a><a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a></td></tr></tbody></table></div></div>
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1</b>

A POP URL is of the general form:
          pop://;auth=@:

Where , , and  are as defined in RFC 1738, and some or 
all of the elements, except "pop://" and , may be omitted.</pre>
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2</b>

The following examples demonstrate how a POP client program might translate various 
POP URLs into a series of POP commands. Commands sent from the client to the server 
are prefixed with "C:", and responses sent from the server to the client are prefixed 
with "S:".

The URL:
          

Results in the following client commands:
          
          
          S: +OK POP3 server ready &lt;1896.697170952@mailsrv.qualcomm.com&gt;
          C: USER rg
          S: +OK
          C: PASS secret
          S: +OK rg's mailbox has 2 messages (320 octets)


The URL:
          

Results in the following client commands:
          
          
          S: +OK POP3 server ready &lt;1896.697170952@mail.eudora.com&gt;
          C: APOP rg c4c9334bac560ecc979e58001b3e22fb
          S: +OK mailbox has 1 message (369 octets)


The URL:
          

Results in the following client commands:
          

          S: +OK POP3 server ready &lt;1896.697170952@foo.bar&gt;
          C: AUTH SCRAM-MD5 AGNocmlzADx0NG40UGFiOUhCMEFtL1FMWEI3MmVnQGVsZW 
              Fub3IuaW5ub3NvZnQuY29tPg==
          S: +dGVzdHNhbHQBAAAAaW1hcEBlbGVhbm9yLmlubm9zb2Z0LmNvbQBq
              aGNOWmxSdVBiemlGcCt2TFYrTkN3
          C: AQAAAMg9jU8CeB4KOfk7sUhSQPs=
          S: + U0odqYw3B7XIIW0oSz65OQ==
          C:
          S: +OK mailbox has 1 message (369 octets)</pre>
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Sample POP Session</b>

          
          &gt; open connection 
          &lt;    +OK POP3 server ready 
          &gt;    APOP mrose c4c9334bac560ecc979e58001b3e22fb
          &lt;    +OK mrose's maildrop has 2 messages (320 octets)
          &gt;    STAT
          &lt;    +OK 2 320
          &gt;    LIST
          &lt;    +OK 2 messages (320 octets)
          &lt;    1 120
          &lt;    2 200
          &lt;    .
          &gt;    RETR 1
          &lt;    +OK 120 octets
          &lt;    The POP3 server sends message 1
          &lt;    .
          &gt;    DELE 1
          &lt;    +OK message 1 deleted
          &gt;    RETR 2
          &lt;    +OK 200 octets
          &lt;    
          
          &lt;    .
          &gt;    DELE 2
          &lt;    +OK message 2 deleted
          &gt;    QUIT
          &lt;    +OK dewey POP3 server signing off (maildrop empty)
          &lt;    close connection
          &lt;    wait for next connection...</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>POP3</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Browser</b><br />A program which allows a person to read hypertext. The two most popular browsers are Netscape Navigator and Microsoft Internet Explorer. Both of these are graphical browsers, which means that they can display graphics as well as text. In addition, most modern browsers can present multimedia information, including sound and video, though they require plug-ins for some formats.<br /><br /><b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>ESMTP</b><br />ESMTP (Extended Simple Mail Transfer Protocol) specifies extensions to the original protocol for sending e-mail that supports graphics, audio and video files, and text in various national languages. The original Internet protocols for sending e-mail are described in Request for Comments (RFC) 822, Standard for the Format of ARPA Internet Text Messages, Simple Mail Transfer Protocol (SMTP). As users began to want to attach various kinds of files to e-mail, the need for additional capabilities arose and resulted in <a href="https://www.rfc-editor.org/rfc/rfc1869.html">RFC 1869</a>, Extended Simple Mail Transfer Protocol. 
<br />
<br />ESMTP provides the capability for a client e-mail program to ask a server e-mail program which capabilities it supports and then communicate accordingly. Currently, most commercial e-mail servers and clients support ESMTP.<br /><br /><b>Eudora</b><br />Eudora is an email reading program, one of three that are supported by ACCC at UIC. (Pine for UNIX and WebMail for any Web browser are the other two.) <br /><br /><b>Internet Explorer</b><br />Internet Explorer often abbreviated as IE, Microsoft's Web browser. Like Netscape Navigator, Internet Explorer enables you to view Web pages. Both browsers support Java and JavaScript. Internet Explorer also supports ActiveX.<br /><br /><b>Mailbox</b><br />Mailbox is an area in memory or on a storage device where e-mail is placed. In e-mail systems, each user has a private mailbox. When the user receives e-mail, the mail system automatically puts it in the mailbox. 
<br />
<br />The mail system allows you to scan mail that is in your mailbox, copy it to a file, delete it, print it, or forward it to another user. If you want to save mail, it is a good idea to copy it to a file, because files tend to be more stable than mailboxes.<br /><br /><b>Netscape</b><br />Officially called Netscape Communications Corporation, Netscape was founded by James H. Clark and Marc Andreessen in 1994 and was acquired by AOL in 1999. It revolutionized the computer software market by giving away for free its popular Navigator Web browser until it had acquired an overwhelming market share for this category of software. 
<br />
<br />This strategy is now used by many other software companies, including Microsoft, which also distributes its Web browser, Internet Explorer, for free. 
<br />
<br />The term Netscape is often used as the name of the company's browser, not the company itself. <br /><br /><b>Outlook Express</b><br />Outlook Express is an email program supplied with Internet Explorer V4 and V5. Although closely connected with Internet Explorer, Outlook Express is a separate program. Outlook Express is completely different to and separate from Outlook. Sadly Outlook Express has arcane internal version numbers which bear no resemblance to the external version numbers.<br /><br /><b>SMTP</b><br />SMTP (Simple Mail Transfer Protocol) is a  protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/pop3-extension-mechanism">POP3 extension mechanism</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc937.html">RFC 937</a>] POST OFFICE PROTOCOL - VERSION 2.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc918.html">RFC 918</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1082.html">RFC 1082</a>] Post Office Protocol - Version 3 Extended Service Offerings.
[<a href="https://www.rfc-editor.org/rfc/rfc1734.html">RFC 1734</a>] POP3 AUTHentication command.
[<a href="https://www.rfc-editor.org/rfc/rfc1939.html">RFC 1939</a>] Post Office Protocol - Version 3.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1725.html">RFC 1725</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1957.html">RFC 1957</a>] Some Observations on Implementations of the Post Office Protocol (POP3).
[<a href="https://www.rfc-editor.org/rfc/rfc2384.html">RFC 2384</a>] POP URL Scheme.
                Defines URI scheme pop:. 
[<a href="https://www.rfc-editor.org/rfc/rfc2449.html">RFC 2449</a>] POP3 Extension Mechanism.
[<a href="https://www.rfc-editor.org/rfc/rfc2595.html">RFC 2595</a>] Using TLS with IMAP, POP3 and ACAP.
[<a href="https://www.rfc-editor.org/rfc/rfc3206.html">RFC 3206</a>] The SYS and AUTH POP Response Codes.<hr /><b>Obsolete RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc918.html">RFC 918</a>] POST OFFICE PROTOCOL.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc937.html">RFC 937</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1081.html">RFC 1081</a>] Post Office Protocol - Version 3.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1225.html">RFC 1225</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1225.html">RFC 1225</a>] Post Office Protocol - Version 3.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1460.html">RFC 1460</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1081.html">RFC 1081</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1460.html">RFC 1460</a>] Post Office Protocol - Version 3.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1725.html">RFC 1725</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1225.html">RFC 1225</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1725.html">RFC 1725</a>] Post Office Protocol - Version 3.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1939.html">RFC 1939</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1460.html">RFC 1460</a>.
                		  </div>
		  
</section>


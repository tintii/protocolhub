---
id: protocol-smtp
slug: smtp
name: SMTP
expandedName: Simple Mail Transfer Protocol
origin: historical
provenance:
  source: protocols/protocol_SMTP.htm
  sha256: 5f5e4bc72be0d68db37acc6ef6f583463b8e2fe5a51794da58d12bd29349d5e8
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Simple Mail Transfer Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Simple Mail Transfer Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Message transfer protocol
  - label: Ports
    html: |-
      25 (TCP)
      <br />366 (TCP) ODMR, On-Demand Mail Relay
  - label: Related protocols
    html: LMTP
  - label: MIME subtype
    html: application/batch-SMTP
  - label: Working groups
    html: 'Msgtrk, Message Tracking Protocol'
originalUpdate: '2005-11-10 16:24:14'
rfcs:
  - 772
  - 780
  - 788
  - 821
  - 876
  - 974
  - 1047
  - 1090
  - 1123
  - 1425
  - 1426
  - 1427
  - 1651
  - 1652
  - 1653
  - 1830
  - 1845
  - 1846
  - 1854
  - 1869
  - 1870
  - 1891
  - 1893
  - 1894
  - 1985
  - 2034
  - 2046
  - 2197
  - 2298
  - 2303
  - 2304
  - 2442
  - 2487
  - 2505
  - 2554
  - 2645
  - 2821
  - 2846
  - 2852
  - 2920
  - 3027
  - 3030
  - 3191
  - 3192
  - 3207
  - 3461
  - 3463
  - 3464
  - 3675
  - 3798
  - 3848
  - 3865
  - 3885
  - 3886
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

			SMTP (Simple Mail Transfer Protocol) is a TCP/IP protocol used in sending and receiving e-mail. However, since it is limited in its ability to queue messages at the receiving end, it is usually used with one of two other protocols, POP3 or IMAP, that let the user save messages in a server mailbox and download them periodically from the server. In other words, users typically use a program that uses SMTP for sending e-mail and either POP3 or IMAP for receiving e-mail. On Unix-based systems, sendmail is the most widely-used SMTP server for e-mail. A commercial package, Sendmail, includes a POP3 server. Microsoft Exchange includes an SMTP server and can also be set up to include POP3 support. 
<br />
<br />SMTP usually is implemented to operate over Internet port 25. An alternative to SMTP that is widely used in Europe is X.400. Many mail servers now support Extended Simple Mail Transfer Protocol (ESMTP), which allows multimedia files to be delivered as e-mail.
<br /><hr />
<br /><b>SMTP Commands</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Command</td><td>Description</td></tr><tr><td>ATRN</td><td>Authenticated TURN.</td></tr><tr><td>AUTH</td><td>Authentication.</td></tr><tr><td>BDAT</td><td>Binary data.</td></tr><tr><td>DATA</td><td>Data. Consider the lines following the command to be e-mail from the sender.</td></tr><tr><td>EHLO</td><td>Extended Hello.</td></tr><tr><td>ETRN</td><td> </td></tr><tr><td>EXPN</td><td>Expand. Ask the receiver to confirm that a mailing list has been identified.</td></tr><tr><td>HELO</td><td>Identify the SMTP sender to the SMTP receiver.</td></tr><tr><td>HELP</td><td>Help. Ask the receiver to send helpful information to the sender.</td></tr><tr><td>MAIL</td><td>Start an e-mail transaction to deliver the e-mail to one or more recipients.</td></tr><tr><td>NOOP</td><td>No operation. Ask the receiver to send a valid reply (but specify no other action).</td></tr><tr><td>QUIT</td><td>Quit. Ask the receiver to send a valid reply, and then close the transmission channel.</td></tr><tr><td>RCPT</td><td>Recipient. Identify an individual recipient of e-mail.</td></tr><tr><td>RSET</td><td>Reset. End the current e-mail transaction.</td></tr><tr><td>SAML</td><td>Send and mail. Deliver e-mail to one or more work stations and recipients if the user is not active.</td></tr><tr><td>SEND</td><td>Send. Deliver e-mail to one or more work stations.</td></tr><tr><td>SOML</td><td>Send or mail. Deliver e-mail to one or more work stations or recipients if the user is not active.</td></tr><tr><td>STARTTLS</td><td> </td></tr><tr><td>TURN</td><td>Turn. Ask the receiver to send a valid reply and then become the SMTP sender, or else ask the receiver to send a refusal reply and remain the SMTP receiver.</td></tr><tr><td>VRFY</td><td>Verify. Ask the receiver to confirm that a user has been identified.</td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>SMTP Replies</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>211</td><td>System status, or system help reply.</td></tr><tr><td>214</td><td>Help message.</td></tr><tr><td>220</td><td>Domain service ready. Ready to start TLS.</td></tr><tr><td>221</td><td>Domain service closing transmission channel.</td></tr><tr><td>250</td><td>OK, queuing for node node started. Requested mail action okay, completed.</td></tr><tr><td>251</td><td>OK, no messages waiting for node node. User not local, will forward to forwardpath.</td></tr><tr><td>252</td><td>OK, pending messages for node node started. Cannot VRFY user (e.g., info is not local), but will take message for this user and attempt delivery.</td></tr><tr><td>253</td><td>OK, messages pending messages for node node started.</td></tr><tr><td>354</td><td>Start mail input; end with..</td></tr><tr><td>355</td><td>Octet-offset is the transaction offset.</td></tr><tr><td>421</td><td>Domain service not available, closing transmission channel.</td></tr><tr><td>432</td><td>A password transition is needed.</td></tr><tr><td>450</td><td>Requested mail action not taken: mailbox unavailable. ATRN request refused.</td></tr><tr><td>451</td><td>Requested action aborted: local error in processing. Unable to process ATRN request now</td></tr><tr><td>452</td><td>Requested action not taken: insufficient system storage.</td></tr><tr><td>453</td><td>You have no mail.</td></tr><tr><td>454</td><td>TLS not available due to temporary reason. Encryption required for requested authentication mechanism.</td></tr><tr><td>458</td><td>Unable to queue messages for node node.</td></tr><tr><td>459</td><td>Node node not allowed: reason.</td></tr><tr><td>500</td><td>Command not recognized: command. Syntax error.</td></tr><tr><td>501</td><td>Syntax error, no parameters allowed.</td></tr><tr><td>502</td><td>Command not implemented.</td></tr><tr><td>503</td><td>Bad sequence of commands.</td></tr><tr><td>504</td><td>Command parameter not implemented.</td></tr><tr><td>521</td><td>Machine does not accept mail.</td></tr><tr><td>530</td><td>Must issue a STARTTLS command first. Encryption required for requested authentication mechanism.</td></tr><tr><td>534</td><td>Authentication mechanism is too weak.</td></tr><tr><td>538</td><td>Encryption required for requested authentication mechanism.</td></tr><tr><td>550</td><td>Requested action not taken: mailbox unavailable.</td></tr><tr><td>551</td><td>User not local; please try forwardpath.</td></tr><tr><td>552</td><td>Requested mail action aborted: exceeded storage allocation.</td></tr><tr><td>553</td><td>Requested action not taken: mailbox name not allowed.</td></tr><tr><td>554</td><td>Transaction failed.</td></tr></tbody></table></div></div>
<br /><hr />
<br /><b>Collected Status Codes</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td colspan="2">First Digit</td></tr><tr><td>2.X.X</td><td>Success</td></tr><tr><td>4.X.X</td><td>Persistent Transient Failure</td></tr><tr><td>5.X.X</td><td>Permanent Failure</td></tr><tr><td colspan="2">Second and Third Digits</td></tr><tr><td>X.1.0</td><td>Other address status</td></tr><tr><td>X.1.1</td><td>Bad destination mailbox address</td></tr><tr><td>X.1.2</td><td>Bad destination system address</td></tr><tr><td>X.1.3</td><td>Bad destination mailbox address syntax</td></tr><tr><td>X.1.4</td><td>Destination mailbox address ambiguous</td></tr><tr><td>X.1.5</td><td>Destination mailbox address valid</td></tr><tr><td>X.1.6</td><td>Mailbox has moved</td></tr><tr><td>X.1.7</td><td>Bad sender"s mailbox address syntax</td></tr><tr><td>X.1.8</td><td>Bad sender"s system address</td></tr><tr><td>X.2.0</td><td>Other or undefined mailbox status</td></tr><tr><td>X.2.1</td><td>Mailbox disabled, not accepting messages</td></tr><tr><td>X.2.2</td><td>Mailbox full</td></tr><tr><td>X.2.3</td><td>Message length exceeds administrative limit</td></tr><tr><td>X.2.4</td><td>Mailing list expansion problem</td></tr><tr><td>X.3.0</td><td>Other or undefined mail system status</td></tr><tr><td>X.3.1</td><td>Mail system full</td></tr><tr><td>X.3.2</td><td>System not accepting network messages</td></tr><tr><td>X.3.3</td><td>System not capable of selected features</td></tr><tr><td>X.3.4</td><td>Message too big for system</td></tr><tr><td>X.4.0</td><td>Other or undefined network or routing status</td></tr><tr><td>X.4.1</td><td>No answer from host</td></tr><tr><td>X.4.2</td><td>Bad connection</td></tr><tr><td>X.4.3</td><td>Routing server failure</td></tr><tr><td>X.4.4</td><td>Unable to route</td></tr><tr><td>X.4.5</td><td>Network congestion</td></tr><tr><td>X.4.6</td><td>Routing loop detected</td></tr><tr><td>X.4.7</td><td>Delivery time expired</td></tr><tr><td>X.5.0</td><td>Other or undefined protocol status</td></tr><tr><td>X.5.1</td><td>Invalid command</td></tr><tr><td>X.5.2</td><td>Syntax error</td></tr><tr><td>X.5.3</td><td>Too many recipients</td></tr></tbody></table></div></div>
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1</b>

This SMTP example shows mail sent by Smith at host Alpha.ARPA, to Jones, Green, and 
Brown at host Beta.ARPA. Here we assume that host Alpha contacts host Beta directly.
 
          S: MAIL FROM:
          R: 250 OK

          S: RCPT TO:
          R: 250 OK

          S: RCPT TO:
          R: 550 No such user here

          S: RCPT TO:
          R: 250 OK

          S: DATA
          R: 354 Start mail input; end with .
          S: Blah blah blah...
          S: ...etc. etc. etc.
          S: .
          R: 250 OK

The mail has now been accepted for Jones and Brown. Green did not have a mailbox at 
host Beta.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Forwarding</b>

Either
          S: RCPT TO:
          R: 251 User not local; will forward to 

       Or
          S: RCPT TO:
          R: 551 User not local; please try </pre>
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Verifying a User Name</b>

Either
          S: VRFY Smith
          R: 250 Fred Smith 

        Or
          S: VRFY Smith
          R: 251 User not local; will forward to 

        Or
          S: VRFY Jones
          R: 550 String does not match anything.

        Or
          S: VRFY Jones
          R: 551 User not local; please try 

        Or
          S: VRFY Gourzenkyinplatz
          R: 553 User ambiguous.

The case of expanding a mailbox list requires a multiline reply as shown in example 4.</pre>
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: Expanding a Mailing List</b>

Either
           S: EXPN Example-People
           R: 250-Jon Postel 
           R: 250-Fred Fonebone 
           R: 250-Sam Q. Smith 
           R: 250-Quincy Smith &lt;@USC-ISIF.ARPA:Q-Smith@ISI-VAXA.ARPA&gt;
           R: 250-
           R: 250 

        Or
           S: EXPN Executive-Washroom-List
           R: 550 Access Denied to You.</pre>
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5: Connection Opening</b>

           R: 220 BBN-UNIX.ARPA Simple Mail Transfer Service Ready
           S: HELO USC-ISIF.ARPA
           R: 250 BBN-UNIX.ARPA</pre>
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 6" tabindex="0"><b>Example 6: Undeliverable Mail Notification Message</b>

           S: MAIL FROM:&lt;&gt;
           R: 250 ok
           S: RCPT TO:&lt;@HOSTX.ARPA:JOE@HOSTW.ARPA&gt;
           R: 250 ok
           S: DATA
           R: 354 send the mail data, end with .
           S: Date: 23 Oct 81 11:22:33
           S: From: SMTP@HOSTY.ARPA
           S: To: JOE@HOSTW.ARPA
           S: Subject: Mail System Problem
           S:
           S:   Sorry JOE, your message to SAM@HOSTZ.ARPA lost.
           S:   HOSTZ.ARPA said this:
           S:    "550 No Such User"
           S: .
           R: 250 ok</pre>
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 7" tabindex="0"><b>Example 7: Return Path and Received Time Stamps</b>

Return-Path: &lt;@GHI.ARPA,@DEF.ARPA,@ABC.ARPA:JOE@ABC.ARPA&gt;   
           Received: from GHI.ARPA by JKL.ARPA ; 27 Oct 81 15:27:39 PST
           Received: from DEF.ARPA by GHI.ARPA ; 27 Oct 81 15:15:13 PST
           Received: from ABC.ARPA by DEF.ARPA ; 27 Oct 81 15:01:59 PST
           Date: 27 Oct 81 15:01:01 PST                                
           From: JOE@ABC.ARPA                                          
           Subject: Improved Mailing System Installed                  
           To: SAM@JKL.ARPA                                            </pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SMTP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Client</b><br />Clinet is a program which requests services of another program. It is a client part of a client-server architecture. Typically, a client is an application that runs on a personal computer or workstation and relies on a server to perform some operations. For example, an e-mail client is an application that enables you to send and receive e-mail.<br /><br /><b>Domain</b><br />A group of computers and devices on a network that are administered as a unit with common rules and procedures. Within the Internet, domains are defined by the IP address. All devices sharing a common part of the IP address are said to be in the same domain.
<br />
<br />In database technology, domain refers to the description of an attribute's allowed values. The physical description is a set of values the attribute can have, and the semantic, or logical, description is the meaning of the attribute.<br /><br /><b>ESMTP</b><br />ESMTP (Extended Simple Mail Transfer Protocol) specifies extensions to the original protocol for sending e-mail that supports graphics, audio and video files, and text in various national languages. The original Internet protocols for sending e-mail are described in Request for Comments (RFC) 822, Standard for the Format of ARPA Internet Text Messages, Simple Mail Transfer Protocol (SMTP). As users began to want to attach various kinds of files to e-mail, the need for additional capabilities arose and resulted in <a href="https://www.rfc-editor.org/rfc/rfc1869.html">RFC 1869</a>, Extended Simple Mail Transfer Protocol. 
<br />
<br />ESMTP provides the capability for a client e-mail program to ask a server e-mail program which capabilities it supports and then communicate accordingly. Currently, most commercial e-mail servers and clients support ESMTP.<br /><br /><b>IMAP</b><br />IMAP 9Internet Message Access Protocol) is a protocol for retrieving e-mail messages. The latest version, IMAP4, is similar to POP3 but supports some additional features. For example, with IMAP4, you can search through your e-mail messages for keywords while the messages are still on mail server. You can then choose which messages to download to your machine.<br /><br /><b>LMTP</b><br />LMTP(Local Mail Transfer Protocol)
<br />In some limited circumstances, outside the area of mail exchange between independent hosts on public networks, it is desirable to implement a system where a mail receiver does not manage a queue. LMTP protocol for transporting mail into such systems.
<br />
<br />Although LMTP is an alternative protocol to ESMTP, it uses (with a few changes) the syntax and semantics of ESMTP.  This design permits LMTP to utilize the extensions defined for ESMTP. LMTP should be used only by specific prior arrangement and configuration, and it MUST NOT be 
<br />
<br />used on TCP port 25.<br /><br /><b>Mailbox</b><br />Mailbox is an area in memory or on a storage device where e-mail is placed. In e-mail systems, each user has a private mailbox. When the user receives e-mail, the mail system automatically puts it in the mailbox. 
<br />
<br />The mail system allows you to scan mail that is in your mailbox, copy it to a file, delete it, print it, or forward it to another user. If you want to save mail, it is a good idea to copy it to a file, because files tend to be more stable than mailboxes.<br /><br /><b>Msgtrk</b><br />msgtrk(Message Tracking Protocol) is a diagnostic protocol for a message originator to request information about the submission, transport, and delivery of a message regardless of its delivery status.
<br />
<br />The group will produce two standards track documents: a message tracking model document and a protocol document.<br /><br /><b>ODMR</b><br />ODMR(On-Demand Mail Relay), an e-mail service that allows a user to request e-mail from any internet connection by using a dynamic IP address as opposed to a static IP address. With OMDR, the user connects to an ISP that supports OMDR, authenticates and then requests e-mail. When the user requests e-mail, the roles of client and server reverse and normal SMTP operations proceed.<br /><br /><b>POP3</b><br />POP3 (Post Office Protocol 3) is the most recent version of a standard protocol for receiving e-mail. POP3 is a client/server protocol in which e-mail is received and held for you by your Internet server. Periodically, you (or your client e-mail receiver) check your mail-box on the server and download any mail, probably using POP3. This standard protocol is built into most popular e-mail products, such as Eudora and Outlook Express. It's also built into the Netscape and Microsoft Internet Explorer browsers. <br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/mail-parameters">SMTP service extensions</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc876.html">RFC 876</a>] Survey of SMTP Implementations.
[<a href="https://www.rfc-editor.org/rfc/rfc1047.html">RFC 1047</a>] DUPLICATE MESSAGES AND SMTP.
[<a href="https://www.rfc-editor.org/rfc/rfc1090.html">RFC 1090</a>] SMTP on X.25.
[<a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>] Requirements for Internet Hosts -- Application and Support.
[<a href="https://www.rfc-editor.org/rfc/rfc1652.html">RFC 1652</a>] SMTP Service Extension for 8bit-MIME transport.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1426.html">RFC 1426</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1845.html">RFC 1845</a>] SMTP Service Extension for Checkpoint/Restart.
[<a href="https://www.rfc-editor.org/rfc/rfc1846.html">RFC 1846</a>] SMTP 521 Reply Code.
[<a href="https://www.rfc-editor.org/rfc/rfc1870.html">RFC 1870</a>] SMTP Service Extension for Message Size Declaration.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1653.html">RFC 1653</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1985.html">RFC 1985</a>] SMTP Service Extension for Remote Message Queue Starting.
                Defines the SMTP command ETRN. 
[<a href="https://www.rfc-editor.org/rfc/rfc2034.html">RFC 2034</a>] SMTP Service Extension for Returning Enhanced Error Codes.
[<a href="https://www.rfc-editor.org/rfc/rfc2442.html">RFC 2442</a>] The Batch SMTP Media Type.
[<a href="https://www.rfc-editor.org/rfc/rfc2505.html">RFC 2505</a>] Anti-Spam Recommendations for SMTP MTAs.
[<a href="https://www.rfc-editor.org/rfc/rfc2554.html">RFC 2554</a>] SMTP Service Extension for Authentication.
                Defines the SMTP command AUTH. 
[<a href="https://www.rfc-editor.org/rfc/rfc2645.html">RFC 2645</a>] ON-DEMAND MAIL RELAY (ODMR) SMTP with Dynamic IP Addresses.
                Describes ODMR, defines the SMTP command ATRN. 
[<a href="https://www.rfc-editor.org/rfc/rfc2821.html">RFC 2821</a>] Simple Mail Transfer Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc821.html">RFC 821</a>, <a href="https://www.rfc-editor.org/rfc/rfc974.html">RFC 974</a>, <a href="https://www.rfc-editor.org/rfc/rfc1869.html">RFC 1869</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2846.html">RFC 2846</a>] GSTN Address Element Extensions in E-mail Services.
[<a href="https://www.rfc-editor.org/rfc/rfc2852.html">RFC 2852</a>] Deliver By SMTP Service Extension.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1894.html">RFC 1894</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2920.html">RFC 2920</a>] SMTP Service Extension for Command Pipelining.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2197.html">RFC 2197</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3030.html">RFC 3030</a>] SMTP Service Extensions for Transmission of Large and Binary MIME Messages.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1830.html">RFC 1830</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3027.html">RFC 3027</a>] Protocol Complications with the IP Network Address Translator.
[<a href="https://www.rfc-editor.org/rfc/rfc3191.html">RFC 3191</a>] Minimal GSTN address format in Internet Mail.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2303.html">RFC 2303</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2846.html">RFC 2846</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3192.html">RFC 3192</a>] Minimal FAX address format in Internet Mail.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2304.html">RFC 2304</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2846.html">RFC 2846</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3207.html">RFC 3207</a>] SMTP Service Extension for Secure SMTP over Transport Layer Security.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2487.html">RFC 2487</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3461.html">RFC 3461</a>] Simple Mail Transfer Protocol (SMTP) Service Extension for Delivery Status Notifications (DSNs).
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3798.html">RFC 3798</a>, <a href="https://www.rfc-editor.org/rfc/rfc3885.html">RFC 3885</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1891.html">RFC 1891</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3463.html">RFC 3463</a>] Enhanced Mail System Status Codes.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3886.html">RFC 3886</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1893.html">RFC 1893</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3464.html">RFC 3464</a>] An Extensible Message Format for Delivery Status Notifications.
                Defines MIME content type message/delivery-status. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1894.html">RFC 1894</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3675.html">RFC 3675</a>] .sex Considered Dangerous.
[<a href="https://www.rfc-editor.org/rfc/rfc3798.html">RFC 3798</a>] Message Disposition Notification.
                Defines MIME media subtype message/disposition-notification. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2298.html">RFC 2298</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2046.html">RFC 2046</a>, <a href="https://www.rfc-editor.org/rfc/rfc3461.html">RFC 3461</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3848.html">RFC 3848</a>] ESMTP and LMTP Transmission Types Registration.
[<a href="https://www.rfc-editor.org/rfc/rfc3865.html">RFC 3865</a>] A No Soliciting Simple Mail Transfer Protocol (SMTP) Service Extension.
[<a href="https://www.rfc-editor.org/rfc/rfc3885.html">RFC 3885</a>] SMTP Service Extension for Message Tracking.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3461.html">RFC 3461</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3886.html">RFC 3886</a>] An Extensible Message Format for Message Tracking Responses.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3463.html">RFC 3463</a>.<hr /> <b>Obsolete RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc788.html">RFC 788</a>] SIMPLE MAIL TRANSFER PROTOCOL.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc821.html">RFC 821</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc821.html">RFC 821</a>] Simple Mail Transfer Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2821.html">RFC 2821</a>. 
                STD: 10. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc772.html">RFC 772</a>, <a href="https://www.rfc-editor.org/rfc/rfc780.html">RFC 780</a>, <a href="https://www.rfc-editor.org/rfc/rfc788.html">RFC 788</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1425.html">RFC 1425</a>] SMTP Service Extensions.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1651.html">RFC 1651</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1426.html">RFC 1426</a>] SMTP Service Extension for 8 bit-MIME transport.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1652.html">RFC 1652</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1427.html">RFC 1427</a>] SMTP Service Extension for Message Size Declaration.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1653.html">RFC 1653</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1651.html">RFC 1651</a>] SMTP Service Extensions.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1869.html">RFC 1869</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1425.html">RFC 1425</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1653.html">RFC 1653</a>] SMTP Service Extension for Message Size Declaration.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1870.html">RFC 1870</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1427.html">RFC 1427</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1830.html">RFC 1830</a>] SMTP Service Extensions for Transmission of Large and Binary MIME Messages.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3030.html">RFC 3030</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1854.html">RFC 1854</a>] SMTP Service Extension for Command Pipelining.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2197.html">RFC 2197</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1869.html">RFC 1869</a>] SMTP Service Extensions.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2821.html">RFC 2821</a>. 
                STD: 10. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1651.html">RFC 1651</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1891.html">RFC 1891</a>] SMTP Service Extension for Delivery Status Notifications.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3461.html">RFC 3461</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1893.html">RFC 1893</a>] Enhanced Mail System Status Codes.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3463.html">RFC 3463</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1894.html">RFC 1894</a>] An Extensible Message Format for Delivery Status Notifications.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3464.html">RFC 3464</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2197.html">RFC 2197</a>] SMTP Service Extension for Command Pipelining.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2920.html">RFC 2920</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1854.html">RFC 1854</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2303.html">RFC 2303</a>] Minimal PSTN address format in Internet Mail.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3191.html">RFC 3191</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2304.html">RFC 2304</a>] Minimal FAX address format in Internet Mail.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3192.html">RFC 3192</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2487.html">RFC 2487</a>] SMTP Service Extension for Secure SMTP over TLS.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3207.html">RFC 3207</a>. 
                Defines SMTP command STARTTLS.
                		  </div>
		  
</section>


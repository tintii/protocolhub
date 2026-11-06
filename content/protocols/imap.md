---
id: protocol-imap
slug: imap
name: IMAP
expandedName: Interactive Mail Access Protocol
origin: historical
provenance:
  source: protocols/protocol_IMAP.htm
  sha256: 196dd070843ebb3401513022035312615e7ad9a4ebe4e1778c2059d848c98eff
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Interactive Mail Access Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Interactive Mail Access Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Email protocol
  - label: Latest Version
    html: IMAP4
  - label: Ports
    html: '143 (TCP) IMAP2, IMAP4, IMAP 4rev1; 220 (TCP) IMAP3'
  - label: Related protocols
    html: 'POP,<br />SMTP'
  - label: URI
    html: imap
  - label: Working groups
    html: |-
      Imap, Internet Message Access Protocol.
      <br />Imapext, Internet Message Access Protocol Extension.
originalUpdate: '2005-11-10 16:00:30'
rfcs:
  - 822
  - 1064
  - 1176
  - 1203
  - 1731
  - 1732
  - 1733
  - 2060
  - 2061
  - 2062
  - 2086
  - 2087
  - 2088
  - 2095
  - 2177
  - 2180
  - 2192
  - 2193
  - 2195
  - 2221
  - 2342
  - 2359
  - 2595
  - 2683
  - 2971
  - 3348
  - 3501
  - 3502
  - 3503
  - 3516
  - 3691
related:
  - protocol-pop
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

			IMAP (Internet Message Access Protocol) is a standard protocol for accessing e-mail from your local server. IMAP is a client/server protocol in which e-mail is received and held for you by your Internet server. You (or your e-mail client) can view just the heading and the sender of the letter and then decide whether to download the mail. You can also create and manipulate multiple folders or mailboxes on the server, delete messages, or search for certain parts or an entire note. IMAP requires continual access to the server during the time that you are working with your mail.
<br />
<br /><b>Key goals for IMAP include</b>
<br /><ul><li>Be fully compatible with Internet messaging standards, e.g. MIME.<br /></li>
<li>Allow message access and management from more than one computer.<br /></li>
<li>Allow access without reliance on less efficient file access protocols.<br /></li>
<li>Provide support for "online", "offline", and "disconnected" access modes.<br /></li>
<li>Support for concurrent access to shared mailboxes. </li><li>Client software needs no knowledge about the server's file store format.</li></ul>
<br />
<br />IMAP's ability to access messages (both new and saved) from more than one computer has become extremely important as reliance on electronic messaging and use of multiple computers increase, but this functionality cannot be taken for granted: the widely used Post Office Protocol (POP) works best when one has only a single computer, since it was designed to support "offline" message access, wherein messages are downloaded and then deleted from the mail server. This mode of access is not compatible with access from multiple computers since it tends to sprinkle messages across all of the computers used for mail access. Thus, unless all of those machines share a common file system, the offline mode of access that POP was designed to support effectively ties the user to one computer for message storage and manipulation. 
<br />
<br />POP3 and IMAP deal with the receiving of e-mail from your local server and are not to be confused with Simple Mail Transfer Protocol (SMTP), a protocol used for exchanging e-mail between points on the Internet. Typically, SMTP is used for sending only and POP3 or IMAP are used to read e-mail. 
<br />
<br />The IMAP protocol attempts to remedy some of these problems. The strength of IMAP lies in online and disconnected operation. Unlike POP3, mail is not copied from the server and then deleted - instead, IMAP clients manipulate the mail on the server, and permit access to remote, server hosted mailboxes as though they were local resources. 
<br /><ul><li>An IMAP mail system has a number of immediate advantages for users.<br /><br /></li>

<li>As all mail is stored on the server, changing mail client becomes the work of seconds - all that is required is to configure a new IMAP client with the IMAP account details.<br /><br /></li>

<li>An IMAP client can easily be configured to view multiple mailboxes in physically separate servers.<br /><br /></li>

<li>Multiple IMAP clients can be used by each user. This makes implementing a webmail solution for roaming users a simple task.<br /><br /></li>

<li>IMAP maintains message status flags on the server for read, answered, etc.<br /><br /></li>

<li>IMAP allows the idea of shared folders. This makes it easier to implement generic email accounts for an organisation, and then allow multiple users to access those accounts.<br /><br /></li>

<li>Many implementations also allow server side filtering of mail. This can be an extremely useful feature when users are accessing their mailboxes through different email clients.</li></ul>
<br />The IMAP4rev1 protocol assumes a reliable data stream such as that provided by TCP.  When TCP is used, an IMAP4rev1 server listens on port 143.
<br />
<br />IMAP4 includes operations for creating, deleting, and renaming mailboxes; checking for new messages; permanently removing messages; setting and clearing flags; parsing; searching; and selective fetching of message attributes, texts, and portions thereof. Messages in IMAP4 are accessed by the use of numbers. These numbers are either message sequence numbers or unique identifiers.
<br /><hr />
<br /><b>Commands</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Command</td><td>Description</td></tr><tr><td>APPEND</td><td>Appends the literal argument as a new message to the end of the specified destination mailbox.</td></tr><tr><td>AUTHENTICATE</td><td>Indicates a [SASL] authentication mechanism to the server.</td></tr><tr><td>CAPABILITY</td><td>Requests a listing of capabilities that the server supports.</td></tr><tr><td>CHECK</td><td>Requests a checkpoint of the currently selected mailbox.</td></tr><tr><td>CLOSE</td><td>It permanently removes all messages that have the Deleted flag set from the currently selected mailbox, and returns to the authenticated state from the selected state.</td></tr><tr><td>DELETEACL</td><td>The DELETEACL command removes any  pair for the specified identifier from the access control list for the specified mailbox.</td></tr><tr><td>FETCH</td><td>Retrieves data associated with a message in the mailbox.</td></tr><tr><td>GETACL</td><td>Returns the access control list for mailbox in an untagged ACL reply.</td></tr><tr><td>GETQUOTA</td><td>Takes the name of a quota root and returns the quota root"s resource usage and limits in an untagged QUOTA response.</td></tr><tr><td>LIST</td><td>Returns a subset of names from the complete set of all names available to the client.</td></tr><tr><td>LISTRIGHTS</td><td>Takes a mailbox name and an identifier and returns information</td></tr><tr><td>LSUB</td><td>Returns a subset of names from the set of names that the user has declared as being "active" or "subscribed".</td></tr><tr><td>NOOP</td><td>Be used as a periodic poll for new messages or message status updates during a period of inactivity</td></tr><tr><td>UID</td><td>It takes as its arguments a COPY, FETCH, or STORE command with arguments appropriate for the associated command and SEARCH command with SEARCH command arguments.</td></tr></tbody></table></div></div>
<br /><b>Status Responses</b>
<br />Status responses MAY include an OPTIONAL response code. A response code consists of data inside square brackets in the form of an atom, possibly followed by a space and arguments. The response code contains additional information or status codes for client software beyond the OK/NO/BAD condition, and are defined when there is a specific action that a client can take based upon the additional information.
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Client Commands - Experimental/Expansion</b>

X Command
Arguments: implementation defined
Responses: implementation defined
Result: OK - command completed
        NO - failure
        BAD - command unknown or arguments invalid

Any command prefixed with an X is an experimental command. Commands which are not part 
of this specification, a standard or standards-track revision of this specification, or 
an IESG-approved experimental protocol, MUST use he X prefix.

Any added untagged responses issued by an experimental command MUST also be prefixed 
with an X. Server implementations MUST NOT send any such untagged responses, unless 
the client requested it by issuing the associated experimental command.

          C: a441 CAPABILITY
          S: * CAPABILITY IMAP4rev1 XPIG-LATIN
          S: a441 OK CAPABILITY completed
          C: A442 XPIG-LATI
          S: * XPIG-LATIN ow-nay eaking-spay ig-pay atin-lay
          S: A442 OK XPIG-LATIN ompleted-cay</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Sample IMAP4rev1 connection</b>

The following is a transcript of an IMAP4rev1 connection.  A long line in this sample 
is broken for editorial clarity.

          S:   * OK IMAP4rev1 Service Ready
          C:   a001 login mrc secret
          S:   a001 OK LOGIN completed
          C:   a002 select inbox
          S:   * 18 EXISTS
          S:   * FLAGS (Answered Flagged Deleted Seen Draft)
          S:   * 2 RECENT
          S:   * OK [UNSEEN 17] Message 17 is the first unseen message
          S:   * OK [UIDVALIDITY 3857529045] UIDs valid
          S:   a002 OK [READ-WRITE] SELECT completed
          C:   a003 fetch 12 full
          S:   * 12 FETCH (FLAGS (Seen) INTERNALDATE "17-Jul-1996 02:44:25 -0700"
               RFC822.SIZE 4286 ENVELOPE ("Wed, 17 Jul 1996 02:23:25 -0700 (PDT)"
               "IMAP4rev1 WG mtg summary and minutes"
               (("Terry Gray" NIL "gray" "cac.washington.edu"))
               (("Terry Gray" NIL "gray" "cac.washington.edu"))
               (("Terry Gray" NIL "gray" "cac.washington.edu"))
               ((NIL NIL "imap" "cac.washington.edu"))
               ((NIL NIL "minutes" "CNRI.Reston.VA.US")
               ("John Klensin" NIL "KLENSIN" "MIT.EDU")) NIL NIL
               "")
               BODY ("TEXT" "PLAIN" ("CHARSET" "US-ASCII") NIL NIL "7BIT" 3028
               92))
          S:    a003 OK FETCH completed
          C:    a004 fetch 12 body[header]
          S:    * 12 FETCH (BODY[HEADER] {342}
          S:    Date: Wed, 17 Jul 1996 02:23:25 -0700 (PDT)
          S:    From: Terry Gray 
          S:    Subject: IMAP4rev1 WG mtg summary and minutes
          S:    To: imap@cac.washington.edu
          S:    cc: minutes@CNRI.Reston.VA.US, John Klensin 
          S:    Message-Id: 
          S:    MIME-Version: 1.0
          S:    Content-Type: TEXT/PLAIN; CHARSET=US-ASCII
          S:
          S:    )
          S:    a004 OK FETCH completed
          C:    a005 store 12 +flags deleted
          S:    * 12 FETCH (FLAGS (Seen Deleted))
          S:    a005 OK +FLAGS completed
          C:    a006 logout
          S:    * BYE IMAP4rev1 server terminating connection
          S:    a006 OK LOGOUT completed</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Server Responses</b>

The command continuation request response is indicated by a "+" token instead of a tag. 
This form of response indicates that the server is ready to accept the continuation of 
a command from the client. The remainder of this response is a line of text.

          C: A001 LOGIN {11}
          S: + Ready for additional command text
          C: FRED FOOBAR {7}
          S: + Ready for additional command text
          C: fat man
          S: A001 OK LOGIN completed
          C: A044 BLURDYBLOOP {102856}
          S: A044 BAD No such command as "BLURDYBLOOP"</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IMAP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>MIME</b><br />MIME (Multipurpose Internet Mail Extensions) is a specification for formatting non-ASCII messages so that they can be sent over the Internet. Many e-mail clients now support MIME, which enables them to send and receive graphics, audio, and video files via the Internet mail system. In addition, MIME supports messages in character sets other than ASCII. 
<br />
<br />There are many predefined MIME types, such as GIF graphics files and PostScript files. It is also possible to define your own MIME types. 
<br />
<br />In addition to e-mail applications, Web browsers also support various MIME types. This enables the browser to display or output files that are not in HTML format.<br /><br /><b>POP</b><br />POP (Post Office Protocol) is a protocol used to retrieve e-mail from a mail server. Most e-mail applications (sometimes called an e-mail client) use the POP protocol, although some can use the newer IMAP (Internet Message Access Protocol). There are two versions of POP. The first, called POP2, became a standard in the mid-80's and requires SMTP to send messages. The newer version, POP3, can be used with or without SMTP.<br /><br /><b>POP3</b><br />POP3 (Post Office Protocol 3) is the most recent version of a standard protocol for receiving e-mail. POP3 is a client/server protocol in which e-mail is received and held for you by your Internet server. Periodically, you (or your client e-mail receiver) check your mail-box on the server and download any mail, probably using POP3. This standard protocol is built into most popular e-mail products, such as Eudora and Outlook Express. It's also built into the Netscape and Microsoft Internet Explorer browsers. <br /><br /><b>SMTP</b><br />SMTP (Simple Mail Transfer Protocol) is a  protocol for sending e-mail messages between servers. Most e-mail systems that send mail over the Internet use SMTP to send messages from one server to another; the messages can then be retrieved with an e-mail client using either POP or IMAP. In addition, SMTP is generally used to send messages from a mail client to a mail server. This is why you need to specify both the POP or IMAP server and the SMTP server when you configure your e-mail application.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/imap4-capabilities">IMAP4 capabilities</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1176.html">RFC 1176</a>] INTERACTIVE MAIL ACCESS PROTOCOL - VERSION 2.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1064.html">RFC 1064</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1203.html">RFC 1203</a>] INTERACTIVE MAIL ACCESS PROTOCOL - VERSION 3.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1064.html">RFC 1064</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1731.html">RFC 1731</a>] IMAP4 Authentication Mechanisms.
[<a href="https://www.rfc-editor.org/rfc/rfc1732.html">RFC 1732</a>] IMAP4 COMPATIBILITY WITH IMAP2 AND IMAP2BIS.
[<a href="https://www.rfc-editor.org/rfc/rfc1733.html">RFC 1733</a>] DISTRIBUTED ELECTRONIC MAIL MODELS IN IMAP4.
[<a href="https://www.rfc-editor.org/rfc/rfc2061.html">RFC 2061</a>] IMAP4 COMPATIBILITY WITH IMAP2BIS.
[<a href="https://www.rfc-editor.org/rfc/rfc2062.html">RFC 2062</a>] Internet Message Access Protocol - Obsolete Syntax.
[<a href="https://www.rfc-editor.org/rfc/rfc2086.html">RFC 2086</a>] IMAP4 ACL extension.
[<a href="https://www.rfc-editor.org/rfc/rfc2087.html">RFC 2087</a>] IMAP4 QUOTA extension.
[<a href="https://www.rfc-editor.org/rfc/rfc2088.html">RFC 2088</a>] IMAP4 non-synchronizing literals.
[<a href="https://www.rfc-editor.org/rfc/rfc2177.html">RFC 2177</a>] IMAP4 IDLE command.
                Defines the IMAP IDLE capability. 
[<a href="https://www.rfc-editor.org/rfc/rfc2180.html">RFC 2180</a>] IMAP4 Multi-Accessed Mailbox Practice.
[<a href="https://www.rfc-editor.org/rfc/rfc2192.html">RFC 2192</a>] IMAP URL Scheme.
                Defines URI scheme imap. 
[<a href="https://www.rfc-editor.org/rfc/rfc2193.html">RFC 2193</a>] IMAP4 Mailbox Referrals.
[<a href="https://www.rfc-editor.org/rfc/rfc2195.html">RFC 2195</a>] IMAP/POP AUTHorize Extension for Simple Challenge/Response.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2095.html">RFC 2095</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2221.html">RFC 2221</a>] IMAP4 Login Referrals.
[<a href="https://www.rfc-editor.org/rfc/rfc2342.html">RFC 2342</a>] IMAP4 Namespace.
[<a href="https://www.rfc-editor.org/rfc/rfc2359.html">RFC 2359</a>] IMAP4 UIDPLUS extension.
[<a href="https://www.rfc-editor.org/rfc/rfc2595.html">RFC 2595</a>] Using TLS with IMAP, POP3 and ACAP.
[<a href="https://www.rfc-editor.org/rfc/rfc2683.html">RFC 2683</a>] IMAP4 Implementation Recommendations.
[<a href="https://www.rfc-editor.org/rfc/rfc2971.html">RFC 2971</a>] IMAP4 ID extension.
[<a href="https://www.rfc-editor.org/rfc/rfc3348.html">RFC 3348</a>] The Internet Message Action Protocol (IMAP4) Child Mailbox Extension.
[<a href="https://www.rfc-editor.org/rfc/rfc3501.html">RFC 3501</a>] INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4rev1.
                Defines IMAP4rev1. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2060.html">RFC 2060</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3502.html">RFC 3502</a>] Internet Message Access Protocol (IMAP) - MULTIAPPEND Extension.
                Defines the IMAP MULTIAPPEND capability. 
[<a href="https://www.rfc-editor.org/rfc/rfc3503.html">RFC 3503</a>] Message Disposition Notification (MDN) profile for Internet Message Access Protocol (IMAP).
[<a href="https://www.rfc-editor.org/rfc/rfc3516.html">RFC 3516</a>] IMAP4 Binary Content Extension.
[<a href="https://www.rfc-editor.org/rfc/rfc3691.html">RFC 3691</a>] Internet Message Access Protocol (IMAP) UNSELECT command.
                Defines the IMAP UNSELECT capability and UNSELECT command.
                		  </div>
		  
</section>


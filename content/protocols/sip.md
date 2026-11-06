---
id: protocol-sip
slug: sip
name: SIP
expandedName: Session Initiation Protocol
origin: historical
provenance:
  source: protocols/protocol_SIP.htm
  sha256: d48aadc37a958143775a9bb60d01c02111860895745097d0b209f8b82176fff8
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Session Initiation Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Session Initiation Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Ports
    html: |-
      5060 (SCTP, TCP, UDP) server default
      <br />5061 (TLS)
  - label: Related protocols
    html: 'UDP,<br />TCP,<br />RTSP,<br />HTTP,<br />SAP,<br />RTP,<br />MEGACO,<br />H.248,<br />H.323'
  - label: URI
    html: 'sip, sips'
  - label: MIME subtype
    html: ' message/sip, message/sipfrag'
  - label: Working groups
    html: |-
      Enum, Telephone Number Mapping
      <br />Mmusic, Multiparty Multimedia Session Control
      <br />Simple, SIP for Instant Messaging and Presence Leveraging
      <br />Sip, Session Initiation Protocol
      <br />Sipping, Session Initiation Proposal Investigation
originalUpdate: '2005-11-11 15:40:28'
rfcs:
  - 2543
  - 2822
  - 2848
  - 2976
  - 3027
  - 3050
  - 3087
  - 3261
  - 3262
  - 3263
  - 3264
  - 3265
  - 3311
  - 3312
  - 3313
  - 3323
  - 3324
  - 3325
  - 3326
  - 3327
  - 3329
  - 3351
  - 3372
  - 3398
  - 3420
  - 3427
  - 3428
  - 3455
  - 3485
  - 3486
  - 3487
  - 3515
  - 3578
  - 3581
  - 3603
  - 3608
  - 3665
  - 3666
  - 3680
  - 3702
  - 3725
  - 3764
  - 3840
  - 3841
  - 3842
  - 3853
  - 3856
  - 3857
  - 3858
  - 3891
  - 3892
  - 3893
  - 3903
  - 3911
  - 3959
  - 3960
  - 3968
  - 3969
  - 3976
  - 4028
  - 4032
  - 4083
  - 4092
  - 4117
  - 4123
  - 4168
related:
  - protocol-udp
  - protocol-tcp
  - protocol-rtsp
  - protocol-http
  - protocol-sap
  - protocol-rtp
  - protocol-h-323
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

			SIP (Session Initiation Protocol) is an application-layer control protocol that can establish, modify, and terminate multimedia sessions such as Internet telephony calls (VOIP). These sessions include Internet multimedia conferences, Internet telephone calls and multimedia distribution. Members in a session can communicate via multicast or via a mesh of unicast relations, or a combination of these. The protocol can be compressed by using Signaling Compression.
<br />
<br />SIP invitations used to create sessions carry session descriptions which allow participants to agree on a set of compatible media types. SIP supports user mobility by proxying and redirecting requests to the user's current location. Users can register their current location. SIP is not tied to any particular conference control protocol. SIP is designed to be independent of the lower-layer transport protocol and can be extended with additional capabilities.
<br />
<br />Session Initiation Protocol is a protocol developed by the IETF MMUSIC Working Group and proposed standard for initiating, modifying, and terminating an interactive user session that involves multimedia elements such as video, voice, instant messaging, online games, and virtual reality. In November 2000, SIP was accepted as a 3GPP signaling protocol and permanent element of the IMS architecture. It is one of the leading signalling protocols for Voice over IP, along with H.323.
<br /><hr />
<br /><b>History</b>
<br />A goal for SIP was to provide a superset of the call processing functions and features present in the public switched telephone network (PSTN). As such, features that permit familiar telephone-like operations are present: dialing a number, causing a phone to ring, hearing ringback tones or a busy signal. Implementation and terminology are different.
<br />
<br />SIP also implements many of the more advanced call processing features present in Signalling System 7 (SS7), though the two protocols themselves could hardly be more different. SS7 is a highly centralized protocol, characterized by highly complex central network architecture and dumb endpoints (traditional telephone handsets). SIP is a peer-to-peer protocol. As such it requires only a very simple (and thus highly scalable) core network with intelligence distributed to the network edge, embedded in endpoints (terminating devices built in either hardware or software). Many SIP features are implemented in the communicating endpoints as opposed to traditional SS7 features, which are implemented in the network. Although many other VoIP signaling protocols exist, SIP is characterized by its proponents as having roots in the IP community rather than the telecom industry. SIP has been standardized and governed primarily by the IETF while the H.323 VoIP protocol has been traditionally more associated with the ITU. However, the two organizations have endorsed both protocols in some fashion.
<br />
<br />SIP works in concert with several other protocols and is only involved in the signaling portion of a communication session. SIP acts as a carrier for the Session Description Protocol (SDP), which describes the media content of the session, e.g. what IP ports to use, the codec being used etc. In typical use, SIP "sessions" are simply packet streams of the Real-time Transport Protocol (RTP). RTP is the carrier for the actual voice or video content itself.
<br />
<br />SIP is similar to HTTP and shares some of its design principles: It is human readable and request-response structured. SIP proponents also claim it to be simpler than H.323. However, some would counter that while SIP originally had a goal of simplicity, in its current state it has become as complex as H.323. SIP shares many HTTP status codes, such as the familiar '404 not found'. The promoters of SIP have said that the rapid innovation and application development that has characterized the Web will now mark the telephony industry, too. SIP and H.323 are not limited to voice communication but can mediate any kind of communication session from voice to video or future, unrealized applications.
<br />
<br /><b>SIP Functionality</b>
<br />SIP can also invite participants to already existing sessions, such as multicast conferences. Media can be added to (and removed from) an existing session. SIP transparently supports name mapping and redirection services, which supports personal mobility - users can maintain a single externally visible identifier regardless of their network location.
<br />
<br />SIP supports five facets of establishing and terminating multimedia communications:
<br /><ul><li>User location: determination of the end system to be used for communication.<br /><br /></li>

<li>User availability: determination of the willingness of the called party to engage in communications.<br /><br /></li>

<li>User capabilities: determination of the media and media parameters to be used.<br /><br /></li>

<li>Session setup: "ringing", establishment of session parameters at both called and calling party.<br /><br /></li>

<li>Session management: including transfer and termination of sessions, modifying session parameters, and invoking services.</li></ul>
<br />
<br />SIP is not a vertically integrated communications system. SIP is rather a component that can be used with other IETF protocols to build a complete multimedia architecture. Typically, these architectures will include protocols such as the Real-time Transport Protocol (RTP) for transporting real-time data and providing QoS feedback, the Real-Time streaming protocol (RTSP) for controlling delivery of streaming media, the MediaGateway Control Protocol (MEGACO) for controlling gateways to the Public Switched Telephone Network (PSTN), and the Session Description Protocol (SDP) for describing multimedia sessions. Therefore, SIP should be used in conjunction with other protocols in order to provide complete services to the users. However, the basic functionality and operation of SIP does not depend on any of these protocols.
<br />
<br />SIP does not provide services. Rather, SIP provides primitives that can be used to implement different services. For example, SIP can locate a user and deliver an opaque object to his current location. If this primitive is used to deliver a session description written in SDP, for instance, the endpoints can agree on the parameters of a session. If the same primitive is used to deliver a photo of the caller as well as the session description, a "caller ID" service can be easily implemented. As this example shows, a single primitive is typically used to provide several different services.
<br />
<br />SIP does not offer conference control services such as floor control or voting and does not prescribe how a conference is to be managed. SIP can be used to initiate a session that uses some other conference control protocol. Since SIP messages and the sessions they establish can pass through entirely different networks, SIP cannot, and does not, provide any kind of network resource reservation capabilities.
<br />
<br />The nature of the services provided make security particularly important. To that end, SIP provides a suite of security services, which include denial-of-service prevention, authentication (both user to user and proxy to user), integrity protection, and encryption and privacy services.
<br />
<br />SIP works with both IPv4 and IPv6.
<br /><hr />
<br /><b>SIP message</b>
<br />SIP is a text-based protocol and uses the UTF-8 character set. A SIP message is either a request from a client to a server, or a response from a server to a client.
<br />
<br />Both Request and Response messages use the basic format of <a href="https://www.rfc-editor.org/rfc/rfc2822.html">RFC 2822</a> [3], even though the syntax differs in character set and syntax specifics. Both types of messages consist of a start-line, one or more header fields, an empty line indicating the end of the header fields, and an optional message-body.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">         generic-message  =  start-line
                             *message-header
                             CRLF
                             [ message-body ]
         start-line       =  Request-Line / Status-Line</pre>
<br />
<br />The start-line, each message-header line, and the empty line MUST be terminated by a carriage-return line-feed sequence (CRLF). Note that the empty line MUST be present even if the message-body is not.
<br />
<br /><ul><li><b>Requests</b>
<br />SIP requests are distinguished by having a Request-Line for a start- line. A Request-Line contains a method name, a Request-URI, and the protocol version separated by a single space (SP) character.
<br />
<br />The Request-Line ends with CRLF. No CR or LF are allowed except in the end-of-line CRLF sequence. No linear whitespace (LWS) is allowed in any of the elements.
<br />Request-Line = Method SP Request-URI SP SIP-Version CRLF<br /><br /></li>

<li><ul><li><b>SIP methods</b><br /><br /></li>

<li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Method</td><td>References</td></tr><tr><td>ACK</td><td>setting up sessions</td></tr><tr><td>BYE</td><td>terminating sessions</td></tr><tr><td>CANCEL</td><td>setting up sessions</td></tr><tr><td>INFO</td><td>communicating mid-session signaling information along the signaling path for the call.</td></tr><tr><td>INVITE</td><td>setting up sessions</td></tr><tr><td>MESSAGE</td><td>sending instant messages using a metaphor similar to that of a two-way pager or SMS enabled handset.</td></tr><tr><td>NOTIFY</td><td>using to notify a SIP node that an event which has been requested by an earlier SUBSCRIBE method has occurred.</td></tr><tr><td>OPTIONS</td><td>querying servers about their capabilities</td></tr><tr><td>PRACK</td><td>supporting reliable transmission of provisional responses.</td></tr><tr><td>PUBLISH</td><td>publishing event state to an entity responsible for compositing this event state.</td></tr><tr><td>REFER</td><td>allowing the party sending the REFER to be notified of the outcome of the referenced request.</td></tr><tr><td>REGISTER</td><td>registering contact information</td></tr><tr><td>SUBSCRIBE</td><td>requesting asynchronous notification of an event or set of events at a later time.</td></tr><tr><td>UPDATE</td><td>allowing the caller or callee to provide updated session information before a final response to the initial INVITE request is generated.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Request-URI</b>
<br />The Request-URI is a SIP or SIPS URI or a general URI. It indicates the user or service to which this request is being addressed. The Request-URI must not contain unescaped spaces or control characters and must not be enclosed in "&lt;&gt;".
<br />
<br />SIP elements may support Request-URIs with schemes other than "sip" and "sips". SIP elements MAY translate non-SIP URIs using any mechanism at their disposal, resulting in SIP URI, SIPS URI, or some other scheme.<br /><br /></li>

<li><b>SIP-Version</b>
<br />Both request and response messages include the version of SIP in use, regarding version ordering, compliance requirements, and upgrading of version numbers. To be compliant with this specification, applications sending SIP messages must include a SIP-Version of "SIP/2.0". The SIP-Version string is case-insensitive, but implementations must send upper-case.
<br />
<br />Unlike HTTP/1.1, SIP treats the version number as a literal string. In practice, this should make no difference.</li></ul><br /><br /></li>

<li><b>Responses</b>
<br />SIP responses are distinguished from requests by having a Status-Line as their start-line. A Status-Line consists of the protocol version followed by a numeric Status-Code and its associated textual phrase, with each element separated by a single SP character.
<br />
<br />No CR or LF is allowed except in the final CRLF sequence.
<br />Status-Line = SIP-Version SP Status-Code SP Reason-Phrase CRLF
<br />
<br />The Status-Code is a 3-digit integer result code that indicates the outcome of an attempt to understand and satisfy a request. The Reason-Phrase is intended to give a short textual description of the Status-Code. The Status-Code is intended for use by automata, whereas the Reason-Phrase is intended for the human user. A client is not required to examine or display the Reason-Phrase.<br /><br /></li>

<li><ul><li><b>1xx: Provisional</b>
<br />Request received, continuing to process the request.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>100</td><td>Trying.</td></tr><tr><td>101-179</td><td> </td></tr><tr><td>180</td><td>Ringing.</td></tr><tr><td>181</td><td>Call is being forwarded.</td></tr><tr><td>182</td><td>Queued.</td></tr><tr><td>183</td><td>Session progress.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>2xx: Success</b>
<br />The action was successfully received, understood, and accepted.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>200</td><td>OK.</td></tr><tr><td>201</td><td> </td></tr><tr><td>202</td><td>Accepted.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>3xx: Redirection</b>
<br />Further action needs to be taken in order to complete the request.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>300</td><td>Multiple choices.</td></tr><tr><td>301</td><td>Moved permanently.</td></tr><tr><td>302</td><td>Moved temporarily.</td></tr><tr><td>303304</td><td> </td></tr><tr><td>305</td><td>Use proxy.</td></tr><tr><td>306-379</td><td> </td></tr><tr><td>380</td><td>Alternative service.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>4xx: Client error</b>
<br />The request contains bad syntax or cannot be fulfilled at this server.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>400</td><td>Bad request.</td></tr><tr><td>401</td><td>Unauthorized.</td></tr><tr><td>402</td><td>Payment required.</td></tr><tr><td>403</td><td>Forbidden.</td></tr><tr><td>404</td><td>Not found.</td></tr><tr><td>405</td><td>Method not allowed.</td></tr><tr><td>406</td><td>Not acceptable.</td></tr><tr><td>407</td><td>Proxy authentication required.</td></tr><tr><td>408</td><td>Request timeout.</td></tr><tr><td>409</td><td> </td></tr><tr><td>410</td><td>Gone.</td></tr><tr><td>411</td><td> </td></tr><tr><td>412</td><td>Conditional request failed.</td></tr><tr><td>413</td><td>Request entity too large.</td></tr><tr><td>414</td><td>Request-URI too long.</td></tr><tr><td>415</td><td>Unsupported media type.</td></tr><tr><td>416</td><td>Unsupported URI scheme.</td></tr><tr><td>417418419</td><td> </td></tr><tr><td>420</td><td>Bad extension.</td></tr><tr><td>421</td><td>Extension required.</td></tr><tr><td>422</td><td>Session Interval too small.</td></tr><tr><td>423</td><td>Interval too brief.</td></tr><tr><td>424-428</td><td> </td></tr><tr><td>429</td><td>Provide referrer identity.</td></tr><tr><td>430-479</td><td> </td></tr><tr><td>480</td><td>Temporarily unavailable.</td></tr><tr><td>481</td><td>Call/Transaction does not exist.</td></tr><tr><td>482</td><td>Loop detected.</td></tr><tr><td>483</td><td>Too many hops.</td></tr><tr><td>484</td><td>Address incomplete.</td></tr><tr><td>485</td><td>Ambiguous.</td></tr><tr><td>486</td><td>Busy here.</td></tr><tr><td>487</td><td>Request terminated.</td></tr><tr><td>488</td><td>Not acceptable here.</td></tr><tr><td>489</td><td>Bad event.</td></tr><tr><td>490</td><td> </td></tr><tr><td>491</td><td>Request pending.</td></tr><tr><td>492</td><td> </td></tr><tr><td>493</td><td>Undecipherable.</td></tr><tr><td>494</td><td>Security agreement required.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>5xx: Server error</b>
<br />The server failed to fulfill an apparently valid request.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>500</td><td>Server internal error.</td></tr><tr><td>501</td><td>Not implemented.</td></tr><tr><td>502</td><td>Bad gateway.</td></tr><tr><td>503</td><td>Service unavailable.</td></tr><tr><td>504</td><td>Server timeout.</td></tr><tr><td>505</td><td>Version not supported.</td></tr><tr><td>506-512</td><td> </td></tr><tr><td>513</td><td>Message too large.</td></tr><tr><td>514-579</td><td> </td></tr><tr><td>580</td><td>Precondition Failure.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>6xx: Global failure</b>
<br />The request cannot be fulfilled at any server.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>600</td><td>Busy everywhere.</td></tr><tr><td>601602</td><td> </td></tr><tr><td>603</td><td>Decline.</td></tr><tr><td>604</td><td>Does not exist anywhere.</td></tr><tr><td>605</td><td> </td></tr><tr><td>606</td><td>Not acceptable.</td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>Header Fields</b>
<br />SIP header fields are similar to HTTP header fields in both syntax and semantics. In particular, SIP header fields follow the [H4.2] definitions of syntax for the message-header and the rules for extending header fields over multiple lines. However, the latter is specified in HTTP with implicit whitespace and folding. 
<br />
<br />[H4.2] also specifies that multiple header fields of the same field name whose value is a comma-separated list can be combined into one header field. That applies to SIP as well, but the specific rule is different because of the different grammars. Specifically, any SIP header whose grammar is of the form, header = "header-name" HCOLON header-value *(COMMA header-value), allows for combining header fields of the same name into a comma - separated list. The Contact header field allows a comma-separated list unless the header field value is "*".</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Info uses</b>

The following are a few of the potential uses of the INFO message:
          - Carrying mid-call PSTN signaling messages between PSTN gateways.

          - Carrying DTMF digits generated during a SIP session.

          - Carrying wireless signal strength information in support of wireless 
            mobility applications.

          - Carrying account balance information.

          - Carrying images or other non streaming information between the
            participants of a session.

These are just potential uses; this document does not specify such uses nor does it 
necessarily recommend them.

It can also be envisioned that there will be other telephony and non-telephony uses 
of the INFO method.</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Messages Method</b>

An example message flow is shown in following. The message flow shows an initial IM 
sent from User 1 to User 2, both users in the same domain, "domain", through a single 
proxy.

           |  F1 MESSAGE          |                         |
           |--------------------&gt; |  F2 MESSAGE             |
           |                      | -----------------------&gt;|
           |                      |                         |
           |                      |  F3 200 OK              |
           |                      | &lt;-----------------------|
           |  F4 200 OK           |                         |
           |&lt;-------------------- |                         |
           |                      |                         |
           |                      |                         |
           |                      |                         |
        User 1                  Proxy
                    User 2

Message F1 looks like:
MESSAGE sip:user2@domain.com SIP/2.0
Via: SIP/2.0/TCP user1pc.domain.com;branch=z9hG4bK776sgdkse
Max-Forwards: 70
From: sip:user1@domain.com;tag=49583
To: sip:user2@domain.com
Call-ID: asd88asd77a@1.2.3.4
CSeq: 1 MESSAGE
Content-Type: text/plain
Content-Length: 18

Watson, come here.
User1 forwards this message to the server for domain.com. The proxy receives this 
request, and recognizes that it is the server for domain.com. It looks up user2 in its 
database (built up through registrations), and finds a binding from 
sip:user2@domain.com to sip:user2@user2pc.domain.com.  It forwards the request 
to user2. The resulting message, F2, looks like:

MESSAGE sip:user2@domain.com SIP/2.0
Via: SIP/2.0/TCP proxy.domain.com;branch=z9hG4bK123dsghds
Via: SIP/2.0/TCP user1pc.domain.com;branch=z9hG4bK776sgdkse; received=1.2.3.4
Max-Forwards: 69
From: sip:user1@domain.com;tag=49394
To: sip:user2@domain.com
Call-ID: asd88asd77a@1.2.3.4
CSeq: 1 MESSAGE
Content-Type: text/plain
Content-Length: 18

Watson, come here.
The message is received by user2, displayed, and a response is generated, message 
F3, and sent to the proxy:
SIP/2.0 200 OK
Via: SIP/2.0/TCP proxy.domain.com;branch=z9hG4bK123dsghds; received=192.0.2.1
Via: SIP/2.0/TCP user1pc.domain.com;;branch=z9hG4bK776sgdkse; received=1.2.3.4
From: sip:user1@domain.com;tag=49394
To: sip:user2@domain.com;tag=ab8asdasd9
Call-ID: asd88asd77a@1.2.3.4
CSeq: 1 MESSAGE
Content-Length: 0

Note that most of the header fields are simply reflected in the response. The proxy 
receives this response, strips off the top Via, and forwards to the address in the 
next Via, user1pc.domain.com, the result being message F4:
SIP/2.0 200 OK
Via: SIP/2.0/TCP user1pc.domain.com;branch=z9hG4bK776sgdkse; received=1.2.3.4
From: sip:user1@domain.com;;tag=49394
To: sip:user2@domain.com;tag=ab8asdasd9
Call-ID: asd88asd77a@1.2.3.4
CSeq: 1 MESSAGE
Content-Length: 0</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Registration</b>

Bob registers on start-up. The message flow is shown in the following figure. Note 
that the authentication usually required for registration is not shown for simplicity.

                  biloxi.com         Bob's
                   registrar       softphone
                      |                |
                      |   REGISTER F1  |
                      |&lt;---------------|
                      |    200 OK F2   |
                      |---------------&gt;|

F1 REGISTER Bob -&gt; Registrar

          REGISTER sip:registrar.biloxi.com SIP/2.0
          Via: SIP/2.0/UDP bobspc.biloxi.com:5060;branch=z9hG4bKnashds7
          Max-Forwards: 70
          To: Bob 
          From: Bob ;tag=456248
          Call-ID: 843817637684230@998sdasdh09
          CSeq: 1826 REGISTER
          Contact: 
          Expires: 7200
          Content-Length: 0

The registration expires after two hours. The registrar responds with a 200 OK:
F2 200 OK Registrar -&gt; Bob

           SIP/2.0 200 OK
           Via: SIP/2.0/UDP bobspc.biloxi.com:5060;branch=z9hG4bKnashds7;
                 received=192.0.2.4
           To: Bob ;tag=2493k59kd
           From: Bob ;tag=456248
           Call-ID: 843817637684230@998sdasdh09
           CSeq: 1826 REGISTER
           Contact: 
           Expires: 7200
           Content-Length: 0</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>SIP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>CRLF</b><br />&lt;character&gt; /ker'l*f/, sometimes /kru'l*f/ or /C-R-L-F/ A carriage return (CR, ASCII 13) followed by a line feed (LF, ASCII 10).  Under Unix influence this usage has become less common because Unix uses just line feed as its line terminator.
<br />A carriage return (CR, ASCII 0001101) followed by a line feed (LF, ASCII 0001010). More loosely, whatever it takes to get you from the end of one line of text to the beginning of the next line.<br /><br /><b>Core</b><br />Core designates the functions specific to a particular type of SIP entity, i.e., specific to either a stateful or stateless proxy, a user agent or registrar. All cores, except those for the stateless proxy, are transaction users.<br /><br /><b>Final response</b><br />A response that terminates a SIP transaction, as opposed to a provisional response that does not. All 2xx, 3xx, 4xx, 5xx and 6xx responses are final.<br /><br /><b>H.323</b><br />H.323 is an umbrella recommendation from the ITU-T, that defines the protocols to provide audio-visual communication sessions on any packet network. It is currently implemented by various Internet real-time applications such as NetMeeting and GnomeMeeting. It is a part of the H.32x series of protocols which also address communications over ISDN, PSTN or SS7. H.323 is commonly used in Voice over IP (VoIP) and IP-based videoconferencing.<br /><br /><b>HTTP</b><br />HTTP(HyperText Transfer Protocol) defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands. For example, when you enter a URL in your browser, this actually sends an HTTP command to the Web server directing it to fetch and transmit the requested Web page. 
<br />
<br />The other main standard that controls how the World Wide Web works is HTML, which covers how Web pages are formatted and displayed. 
<br />
<br />HTTP is called a stateless protocol because each command is executed independently, without any knowledge of the commands that came before it. This is the main reason that it is difficult to implement Web sites that react intelligently to user input. This shortcoming of HTTP is being addressed in a number of new technologies, including ActiveX, Java, JavaScript and cookies. <br /><br /><b>Header field</b><br />A component of the SIP message header. A header field can appear as one or more header field rows. Header field rows consist of a header field name and zero or more header field values. Multiple header field values on a given header field row are separated by commas. Some header fields can only have a single header field value, and as a result, always appear as a single header field row.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>IMS</b><br />The IP Multimedia Subsystem (IMS) is an open, standardised, operator friendly, Next Generation Networking (NGN) multi-media architecture for mobile and fixed IP services. It's a VoIP implementation based on a 3GPP variant of SIP, and runs over the standard Internet protocol (IP). It's used by telecom operators in NGN networks (which combine voice and data in a single packet switched network), to offer network controlled multimedia services.<br /><br /><b>ITU</b><br />The International Telecommunication Union (ITU) is an international organization established to standardize and regulate international radio and telecommunications. It was founded as the International Telegraph Union in Paris in May 17, 1865, and is today the world's oldest international organization. Its main tasks include standardization, allocation of the radio spectrum, and organizing interconnection arrangements between different countries to allow international phone calls. It is one of the specialized agencies of the United Nations, and has its headquarters in Geneva, Switzerland, next to the main United Nations campus.<br /><br /><b>Instant messaging</b><br />Instant messaging is the act of instantly communicating between two or more people over a network such as the Internet.<br /><br /><b>Loop</b><br />Loop is a request that arrives at a proxy, is forwarded, and later arrives back at the same proxy. When it arrives the second time, its Request-URI is identical to the first time, and other header fields that affect proxy operation are unchanged, so that the proxy would make the same processing decision on the request it made the first time. Looped requests are errors, and the procedures for detecting them and handling them are described by the protocol.<br /><br /><b>MEGACO</b><br />Media Gateway Control Protocol (MGCP) is a protocol used within a Voice over IP system. MGCP is defined in an informational (non-standard) IETF document. It superseded the Simple Gateway Control Protocol (SGCP). MGCP is an internal protocol used within a distributed system that can appear to the outside world as a single VoIP gateway.<br /><br /><b>Multimedia</b><br />The use of computers to present text, graphics, video, animation, and sound in an integrated way. Long touted as the future revolution in computing, multimedia applications were, until the mid-90s, uncommon due to the expensive hardware required. With increases in performance and decreases in price, however, multimedia is now commonplace. Nearly all PCs are capable of displaying video, though the resolution available depends on the power of the computer's video adapter and CPU.<br /><br /><b>PSTN</b><br />PSTN (Public Switched Telephone Network), which refers to the international telephone system based on copper wires carrying analog voice data. This is in contrast to newer telephone networks base on digital technologies, such as ISDN and FDDI.<br /><br /><b>Proxy server</b><br />An intermediary entity that acts as both a server and a client for the purpose of making requests on behalf of other clients. A proxy server primarily plays the role of routing, which means its job is to ensure that a request is sent to another entity "closer" to the targeted user. Proxies are also useful for enforcing policy (for example, making sure a user is allowed to make a call). A proxy interprets, and, if necessary, rewrites specific parts of a request message before forwarding it.<br /><br /><b>RTP</b><br />RTP (Real-Time Transport Protocol) is an Internet protocol for transmitting real-time data such as audio and video. RTP itself does not guarantee real-time delivery of data, but it does provide mechanisms for the sending and receiving applications to support streaming data. Typically, RTP runs on top of the UDP protocol, although the specification is general enough to support other transport protocols.<br /><br /><b>RTSP</b><br />Real Time Streaming Protocol (RTSP) is a standard for controlling streaming data over the World Wide Web. Like H.323, RTSP uses RTP (Real-Time Transport Protocol) to format packets of multimedia content. But whereas H.323 is designed for videoconferencing of moderately-sized groups, RTSP is designed to efficiently broadcast audio-visual data to large groups.<br /><br /><b>Ringback</b><br />The signaling tone produced by the calling party's application indicating that a called party is being alerted (ringing).<br /><br /><b>SDP</b><br />Session Description Protocol, a protocol that defines a text-based format for describing streaming media sessions and multicast transmissions. SDP is not a transport protocol but a method of describing the details of the transmission. For example, an SDP file contains information about the format, timing and authorship of the transmission, name and purpose of the session, any media, protocols or codec formats, the version number, contact information and broadcast times.<br /><br /><b>SIP</b><br />Session Initiated Protocol (SIP) is an application-layer control protocol; a signaling protocol for Internet Telephony. SIP can establish sessions for features such as audio/videoconferencing, interactive gaming, and call forwarding to be deployed over IP networks, thus enabling service providers to integrate basic IP telephony services with Web, e-mail, and chat services.<br /><br /><b>Server</b><br />A computer or device on a network that manages network resources. For example, a file server is a computer and storage device dedicated to storing files. Any user on the network can store files on the server. A database server is a computer system that processes database queries. Servers are often dedicated, meaning that they perform no other tasks besides their server tasks. On multiprocessing operating systems, however, a single computer can execute several programs at once. A server in this case could refer to the program that is managing resources rather than the entire computer.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br /><b>URI</b><br />URI (Uniform Resource Identifier) is the generic term for all types of names and addresses that refer to objects on the World Wide Web. A URL is one kind of URI.<br /><br /><b>UTF-8</b><br />UTF(Unicode Transformation Format) preserving the full US-ASCII range, providing compatibility with file systems, parsers and other software that rely on US-ASCII values but are transparent to other values. 
<br />
<br />UTF-8 encodes UCS-2 or UCS-4 characters as a varying number of octets, where the number of octets, and the value of each, depend on the integer value assigned to the character in ISO/IEC 10646.<br /><br /><b>VOIP</b><br />Voice over Internet Protocol, a category of hardware and software that enables people to use the Internet as the transmission medium for telephone calls by sending voice data in packets using IP rather than by traditional circuit transmissions of the PSTN. One advantage of VoIP is that the telephone calls over the Internet do not incur a surcharge beyond what the user is paying for Internet access, much in the same way that the user doesn't pay for sending individual e-mails over the Internet.<br /><br /><b>VR</b><br />Virtual reality (VR) is an environment that is simulated by a computer. Most virtual reality environments are primarily visual experiences, displayed either on a computer screen or through special stereoscopic displays, but some simulations include additional sensory information, such as sound through speakers or headphones. Some advanced and experimental systems have included limited tactile feedback.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a>Columbia University of Computer Science SIP page<span class="unavailable"> [Unavailable in the source snapshot]</span></a> 
                <a href="https://www.iana.org/assignments/sip-parameters">SIP parameters</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2848.html">RFC 2848</a>] The PINT Service Protocol: Extensions to SIP and SDP for IP Access to Telephone Call Services.
[<a href="https://www.rfc-editor.org/rfc/rfc2976.html">RFC 2976</a>] The SIP INFO Method.
[<a href="https://www.rfc-editor.org/rfc/rfc3027.html">RFC 3027</a>] Protocol Complications with the IP Network Address Translator.
[<a href="https://www.rfc-editor.org/rfc/rfc3050.html">RFC 3050</a>] Common Gateway Interface for SIP.
[<a href="https://www.rfc-editor.org/rfc/rfc3087.html">RFC 3087</a>] Control of Service Context using SIP Request-URI.
[<a href="https://www.rfc-editor.org/rfc/rfc3261.html">RFC 3261</a>] SIP: Session Initiation Protocol.
                Defines URI schemes sip: and sips:. 
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3853.html">RFC 3853</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2543.html">RFC 2543</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3262.html">RFC 3262</a>] Reliability of Provisional Responses in the Session Initiation Protocol (SIP).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2543.html">RFC 2543</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3263.html">RFC 3263</a>] Session Initiation Protocol (SIP): Locating SIP Servers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2543.html">RFC 2543</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3265.html">RFC 3265</a>] Session Initiation Protocol (SIP)-Specific Event Notification.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2543.html">RFC 2543</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3311.html">RFC 3311</a>] The Session Initiation Protocol (SIP) UPDATE Method.
                Defines SIP method UPDATE. 
[<a href="https://www.rfc-editor.org/rfc/rfc3312.html">RFC 3312</a>] Integration of Resource Management and Session Initiation Protocol (SIP).
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc4032.html">RFC 4032</a>. 
                Defines SIP Quality of Service preconditions. 
[<a href="https://www.rfc-editor.org/rfc/rfc3313.html">RFC 3313</a>] Private Session Initiation Protocol (SIP) Extensions for Media Authorization.
                Defines SIP header field P-Media-Authorization. 
[<a href="https://www.rfc-editor.org/rfc/rfc3323.html">RFC 3323</a>] A Privacy Mechanism for the Session Initiation Protocol (SIP).
                Defines SIP header field Privacy and option tag privacy. 
[<a href="https://www.rfc-editor.org/rfc/rfc3324.html">RFC 3324</a>] Short Term Requirements for Network Asserted Identity.
[<a href="https://www.rfc-editor.org/rfc/rfc3325.html">RFC 3325</a>] Private Extensions to the Session Initiation Protocol (SIP) for Asserted Identity within Trusted Networks.
                Defines SIP header fields P-Asserted-Identity and P-Preferred-Identity. 
[<a href="https://www.rfc-editor.org/rfc/rfc3326.html">RFC 3326</a>] The Reason Header Field for the Session Initiation Protocol (SIP).
                Defines SIP header field Reason. 
[<a href="https://www.rfc-editor.org/rfc/rfc3327.html">RFC 3327</a>] Session Initiation Protocol (SIP) Extension Header Field for Registering Non-Adjacent Contacts.
                Defines SIP header field Path and option tag path. 
[<a href="https://www.rfc-editor.org/rfc/rfc3329.html">RFC 3329</a>] Security Mechanism Agreement for the Session Initiation Protocol (SIP).
                Defines SIP header fields Security-Client, Security-Server, Security-Verify. 
[<a href="https://www.rfc-editor.org/rfc/rfc3351.html">RFC 3351</a>] User Requirements for the Session Initiation Protocol (SIP) in Support of Deaf, Hard of Hearing and Speech-impaired Individuals.
[<a href="https://www.rfc-editor.org/rfc/rfc3372.html">RFC 3372</a>] Session Initiation Protocol for Telephones (SIP-T): Context and Architectures.
[<a href="https://www.rfc-editor.org/rfc/rfc3398.html">RFC 3398</a>] Integrated Services Digital Network (ISDN) User Part (ISUP) to Session Initiation Protocol (SIP) Mapping.
[<a href="https://www.rfc-editor.org/rfc/rfc3420.html">RFC 3420</a>] Internet Media Type message/sipfrag.
                Defines MIME media subtype message/sipfrag. 
[<a href="https://www.rfc-editor.org/rfc/rfc3427.html">RFC 3427</a>] Change Process for the Session Initiation Protocol (SIP).
                BCP: 67.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3968.html">RFC 3968</a>, <a href="https://www.rfc-editor.org/rfc/rfc3969.html">RFC 3969</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3428.html">RFC 3428</a>] Session Initiation Protocol (SIP) Extension for Instant Messaging.
                Defines SIP method MESSAGE. 
[<a href="https://www.rfc-editor.org/rfc/rfc3455.html">RFC 3455</a>] Private Header (P-Header) Extensions to the Session Initiation Protocol (SIP) for the 3rd-Generation Partnership Project (3GPP).
                Defines SIP header fields P-Associated-URI, P-Called-Party-ID, P-Visited-Network-ID, P-Access-Network-Info, P-Charging-Function-Addresses, P-Charging-Vector. 
[<a href="https://www.rfc-editor.org/rfc/rfc3485.html">RFC 3485</a>] The Session Initiation Protocol (SIP) and Session Description Protocol (SDP) Static Dictionary for Signaling Compression (SigComp).
                Defines the SIP/SDP specific static dictionary for SigComp. 
[<a href="https://www.rfc-editor.org/rfc/rfc3486.html">RFC 3486</a>] Compressing the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc3487.html">RFC 3487</a>] Requirements for Resource Priority Mechanisms for the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc3515.html">RFC 3515</a>] The Session Initiation Protocol (SIP) Refer Method.
                Defines SIP method REFER and header field Refer-To. 
[<a href="https://www.rfc-editor.org/rfc/rfc3578.html">RFC 3578</a>] Mapping of Integrated Services Digital Network (ISDN) User Part (ISUP) Overlap Signalling to the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc3581.html">RFC 3581</a>] An Extension to the Session Initiation Protocol (SIP) for Symmetric Response Routing.
                Defines SIP Via header field parameter rport. 
[<a href="https://www.rfc-editor.org/rfc/rfc3603.html">RFC 3603</a>] Private Session Initiation Protocol (SIP) Proxy-to-Proxy Extensions for Supporting the PacketCable Distributed Call Signaling Architecture.
                Defines SIP extension headers P-DCS-Trace-Party-ID, P-DCS-OSPS, P-DCS-Billing-Info, P-DCS-LAES, P-DCS-Redirect. 
[<a href="https://www.rfc-editor.org/rfc/rfc3608.html">RFC 3608</a>] Session Initiation Protocol (SIP) Extension Header Field for Service Route Discovery During Registration.
                Defines SIP extension header field Service-Route. 
[<a href="https://www.rfc-editor.org/rfc/rfc3665.html">RFC 3665</a>] Session Initiation Protocol (SIP) Basic Call Flow Examples.
                BCP: 75. 
[<a href="https://www.rfc-editor.org/rfc/rfc3666.html">RFC 3666</a>] Session Initiation Protocol (SIP) Public Switched Telephone Network (PSTN) Call Flows.
                BCP: 76. 
[<a href="https://www.rfc-editor.org/rfc/rfc3680.html">RFC 3680</a>] A Session Initiation Protocol (SIP) Event Package for Registrations.
                Defines MIME media subtype application/reginfo+xml. 
[<a href="https://www.rfc-editor.org/rfc/rfc3702.html">RFC 3702</a>] Authentication, Authorization, and Accounting Requirements for the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc3725.html">RFC 3725</a>] Best Current Practices for Third Party Call Control (3pcc) in the Session Initiation Protocol (SIP).
                BCP: 85. 
[<a href="https://www.rfc-editor.org/rfc/rfc3764.html">RFC 3764</a>] enumservice registration for Session Initiation Protocol (SIP) Addresses-of-Record.
[<a href="https://www.rfc-editor.org/rfc/rfc3840.html">RFC 3840</a>] Indicating User Agent Capabilities in the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc3841.html">RFC 3841</a>] Caller Preferences for the Session Initiation Protocol (SIP).
                Defines SIP request header fields Accept-Contact, Reject-Contact and Request-Disposition. 
[<a href="https://www.rfc-editor.org/rfc/rfc3842.html">RFC 3842</a>] A Message Summary and Message Waiting Indication Event Package for the Session Initiation Protocol (SIP).
                Defines MIME media subtype application/simple-message-summary. 
[<a href="https://www.rfc-editor.org/rfc/rfc3856.html">RFC 3856</a>] A Presence Event Package for the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc3857.html">RFC 3857</a>] A Watcher Information Event Template-Package for the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc3858.html">RFC 3858</a>] An Extensible Markup Language (XML) Based Format for Watcher Information.
                Defines MIME media subtype application/watcherinfo+xml. 
[<a href="https://www.rfc-editor.org/rfc/rfc3891.html">RFC 3891</a>] The Session Initiation Protocol (SIP) "Replaces" Header.
                Defines SIP request header field Replaces. 
[<a href="https://www.rfc-editor.org/rfc/rfc3892.html">RFC 3892</a>] The Session Initiation Protocol (SIP) Referred-By Mechanism.
                Defines SIP request header field Referred-By. 
[<a href="https://www.rfc-editor.org/rfc/rfc3893.html">RFC 3893</a>] Session Initiation Protocol (SIP) Authenticated Identity Body (AIB) Format.
[<a href="https://www.rfc-editor.org/rfc/rfc3903.html">RFC 3903</a>] Session Initiation Protocol (SIP) Extension for Event State Publication.
                Defines SIP method PUBLISH. 
                Defines SIP header fields SIP-ETag and SIP-If-Match. 
[<a href="https://www.rfc-editor.org/rfc/rfc3911.html">RFC 3911</a>] The Session Initiation Protocol (SIP) "Join" Header.
                Defines SIP header field Join. 
[<a href="https://www.rfc-editor.org/rfc/rfc3959.html">RFC 3959</a>] The Early Session Disposition Type for the Session Initiation Protocol (SIP).
                Defines SIP option tag early-session. 
[<a href="https://www.rfc-editor.org/rfc/rfc3960.html">RFC 3960</a>] Early Media and Ringing Tone Generation in the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc3968.html">RFC 3968</a>] The Internet Assigned Number Authority (IANA) Header Field Parameter Registry for the Session Initiation Protocol (SIP).
                BCP: 98. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3427.html">RFC 3427</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3969.html">RFC 3969</a>] The Internet Assigned Number Authority (IANA) Uniform Resource Identifier (URI) Parameter Registry for the Session Initiation Protocol (SIP).
                BCP: 99. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3427.html">RFC 3427</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3976.html">RFC 3976</a>] Interworking SIP and Intelligent Network (IN) Applications.
[<a href="https://www.rfc-editor.org/rfc/rfc4032.html">RFC 4032</a>] Update to the Session Initiation Protocol (SIP) Preconditions Framework.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3312.html">RFC 3312</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc4028.html">RFC 4028</a>] Session Timers in the Session Initiation Protocol (SIP).
                Defines SIP header fields Min-SE and Session-Expires. 
[<a href="https://www.rfc-editor.org/rfc/rfc4083.html">RFC 4083</a>] Input 3rd-Generation Partnership Project (3GPP) Release 5 Requirements on the Session Initiation Protocol (SIP).
[<a href="https://www.rfc-editor.org/rfc/rfc4092.html">RFC 4092</a>] Usage of the Session Description Protocol (SDP) Alternative Network Address Types (ANAT) Semantics in the Session Initiation Protocol (SIP).
                Defines SIP option tag sdp-anat. 
[<a href="https://www.rfc-editor.org/rfc/rfc4117.html">RFC 4117</a>] Transcoding Services Invocation in the Session Initiation Protocol (SIP) Using Third Party Call Control (3pcc).
[<a href="https://www.rfc-editor.org/rfc/rfc4123.html">RFC 4123</a>] Session Initiation Protocol (SIP)-H.323 Interworking Requirements.
[<a href="https://www.rfc-editor.org/rfc/rfc4168.html">RFC 4168</a>] The Stream Control Transmission Protocol (SCTP) as a Transport for the Session Initiation Protocol (SIP).<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc2543.html">RFC 2543</a>] SIP: Session Initiation Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3261.html">RFC 3261</a>, <a href="https://www.rfc-editor.org/rfc/rfc3262.html">RFC 3262</a>, <a href="https://www.rfc-editor.org/rfc/rfc3263.html">RFC 3263</a>, <a href="https://www.rfc-editor.org/rfc/rfc3264.html">RFC 3264</a>, <a href="https://www.rfc-editor.org/rfc/rfc3265.html">RFC 3265</a>. 
                Defines the SIP protocol.<hr /><b>Publications:</b>
[ISBN 0471413992] Internet Communications Using SIP.
[ISBN 0071373403] SIP Demystified.
[ISBN 1580531687] SIP: Understanding the Session Initiation Protocol.
                		  </div>
		  
</section>


---
id: protocol-ntp
slug: ntp
name: NTP
expandedName: Network Time Protocol
origin: historical
provenance:
  source: protocols/protocol_NTP.htm
  sha256: 76cc0405add58fab613d20f08f25913c8f3f7f705218fc39a7a9d99c591eac51
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Network Time Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Network Time Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Time protocol
  - label: Latest Version
    html: 'NTPv4, NTPv3'
  - label: Multicast addresses
    html: 224.0.1.1
  - label: Ports
    html: 123 (UDP)
  - label: Related protocols
    html: 'SNTP,<br />Simple Network Time Protocol'
originalUpdate: '2005-11-07 17:17:02'
rfcs:
  - 958
  - 1059
  - 1119
  - 1128
  - 1129
  - 1165
  - 1305
  - 1589
  - 1708
  - 2783
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

			The Network Time Protocol (NTP) is a time synchronization system for computer clocks through the Internet network. It provides the mechanisms to synchronize time and coordinate time distribution in a large, diverse internet operating at rates from mundane to light wave. It uses a returnable time design in which a distributed sub network of time servers, operating in a self-organizing, hierarchical master-slave configuration, synchronize logical clocks within the sub network and to national time standards via wire or radio.
<br />
<br />NTP is designed to produce three products: clock offset, roundtrip delay and dispersion, all of which are relative to a selected reference clock. Clock offset represents the amount to adjust the local clock to bring it into correspondence with the reference clock. Roundtrip delay provides the capability to launch a message to arrive at the reference clock at a specified time. Dispersion represents the maximum error of the local clock relative to the reference clock. Since most host time servers will synchronize via another peer time server, there are two components in each of these three products, those determined by the peer relative to the primary reference source of standard time and those measured by the host relative to the peer. Each of these components is maintained separately in the protocol in order to facilitate error control and management of the subnet itself. They provide not only precision measurements of offset and delay, but also definitive maximum error bounds, so that the user interface can determine not only the time, but the quality of the time as well.
<br />
<br />NTP is evolved from the Time Protocol and the ICMP Timestamp message, but is specifically designed to maintain accuracy and robustness, even when used over typical Internet paths involving multiple gateways, highly dispersive delays and unreliable nets. NTP version 4 is the current version, which has superseded the previous versions and widely deployed.
<br /><hr />
<br /><b>NTP's Features</b>
<br /><ul><li>NTP needs some reference clock that defines the true time to operate. All clocks are set towards that true time. (It will not just make all systems agree on some time, but will make them agree upon the true time as defined by some standard.)<br /><br /></li>

<li>NTP is a fault-tolerant protocol that will automatically select the best of several available time sources to synchronize to. Multiple candidates can be combined to minimize the accumulated error. Temporarily or permanently insane time sources will be detected and avoided.<br /><br /></li>

<li>NTP is highly scalable: A synchronization network may consist of several reference clocks. Each node of such a network can exchange time information either bidirectional or unidirectional. Propagating time from one node to another forms a hierarchical graph with reference clocks at the top.<br /><br /></li>

<li>Having available several time sources, NTP can select the best candidates to build its estimate of the current time. The protocol is highly accurate, using a resolution of less than a nanosecond (about 2 - 32 seconds).<br /><br /></li>

<li>Even when a network connection is temporarily unavailable, NTP can use measurements from the past to estimate current time and error.<br /><br /></li>

<li>For formal reasons NTP will also maintain estimates for the accuracy of the local time.</li></ul>
<br /><hr />
<br /><b>Data Formats</b>
<br />All mathematical operations expressed or implied herein are in two's complement, fixed-point arithmetic. Data are specified as integer or fixed-point quantities, with bits numbered in big-endian fashion from zero starting at the left, or high-order, position. Since various implementations may scale externally derived quantities for internal use, neither the precision nor decimal-point placement for fixed-point quantities is specified. Unless specified otherwise, all quantities are unsigned and may occupy the full field width with an implied zero preceding bit zero. Hardware and software packages designed to work with signed quantities will thus yield surprising results when the most significant (sign) bit is set. It is suggested that externally derived, unsigned fixed-point quantities such as timestamps be shifted right one bit for internal use, since the precision represented by the full field width is seldom justified.
<br />
<br />Timestamps are determined by copying the current value of the local clock to a timestamp when some significant event, such as the arrival of a message, occurs. In order to maintain the highest accuracy, it is important that this be done as close to the hardware or software driver associated with the event as possible. In particular, departure timestamps should be redetermined for each link-level retransmission. In some cases a particular timestamp may not be available, such as when the host is rebooted or the protocol first starts up. In these cases the 64- bit field is set to zero, indicating the value is invalid or undefined.
<br />
<br /><ul><li><b>Header format</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>2</p></td><td><p>5</p></td><td><p>8</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32</p></td></tr><tr><td><p>LI </p></td><td><p>VN </p></td><td><p>Mode </p></td><td><p>Stratum </p></td><td><p>Poll </p></td><td><p>Precision </p></td></tr><tr><td colspan="6"><p>Root Delay</p></td></tr><tr><td colspan="6"><p>Root Dispersion</p></td></tr><tr><td colspan="6"><p>Reference Identifier</p></td></tr><tr><td colspan="6"><p>Reference timestamp (64)</p></td></tr><tr><td colspan="6"><p>Originate Timestamp (64)</p></td></tr><tr><td colspan="6"><p>Receive Timestamp (64) </p></td></tr><tr><td colspan="6"><p>Transmit Timestamp (64) </p></td></tr><tr><td colspan="6"><p>Key Identifier (optional) (32)</p></td></tr><tr><td colspan="6"><p>Message digest (optional) (128)</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>LI Leap Indicator</b>
<br />A 2-bit code warning of impending leap-second to be inserted at the end of the last day of the current month. Bits are coded as follows:<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>00</td><td>No warning.</td></tr><tr><td>01</td><td>+1 second (following minute has 61 seconds).</td></tr><tr><td>10 </td><td>-1 second (following minute has 59 seconds). </td></tr><tr><td>11</td><td>Alarm condition (clock not synchronized).</td></tr></tbody></table></div></div><br /></li>
<li><b>VN</b>
<br />Version number 3 bit code indicating the version number.<br /><br /></li>

<li><b>Mode</b>
<br />The mode: This field can contain the following values:<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>0</td><td>Reserved.</td></tr><tr><td>1</td><td>Symmetric active. </td></tr><tr><td>3</td><td>Client. </td></tr><tr><td>4</td><td>Server.</td></tr><tr><td>5</td><td>Broadcast.</td></tr><tr><td>6</td><td>NTP control message.</td></tr></tbody></table></div></div><br /></li>
<li><b>Stratum</b>
<br />An integer identifying the stratum level of the local clock. Values are defined as follows:<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>0</td><td>Unspecified.</td></tr><tr><td>1</td><td>Primary reference (e.g. radio clock).</td></tr><tr><td>2...n</td><td>Secondary reference (via NTP).</td></tr></tbody></table></div></div><br /></li>
<li><b>Poll</b>
<br />Signed integer indicating the maximum interval between successive messages, in seconds to the nearest power of 2.<br /><br /></li>

<li><b>Precision</b>
<br />Signed integer indicating the precision of the local clock, in seconds to the nearest power of 2.<br /><br /></li>

<li><b>Root Delay</b>
<br />Signed fixed-point number indicating the total roundtrip delay to the primary reference source, in seconds with fraction point between bits 15 and 16.<br /><br /></li>

<li><b>Root Dispersion</b>
<br />Unsigned fixed-point number indicating the nominal error relative to the primary reference source, in seconds with fraction point between bits 15 and 16.<br /><br /></li>

<li><b>Reference Identifier</b>
<br />Identifying the particular reference source.<br /><br /></li>

<li><b>Originate Timestamp</b>
<br />This is the time at which the request departed the client for the server, in 64-bit timestamp format.<br /><br /></li>

<li><b>Receive Timestamp</b>
<br />This is the time at which the request arrived at the server, in 64-bit timestamp format.<br /><br /></li>

<li><b>Transmit Timestamp</b>
<br />This is the time at which the reply departed the server for the client, in 64-bit timestamp format.<br /><br /></li>

<li><b>Authenticator (optional)</b>
<br />When the NTP authentication scheme is implemented, the Key Identifier and Message Digest fields contain the message authentication code (MAC) information defined.</li></ul></li></ul>
<br /><hr />
<br /><b>State Variables and Parameters</b>
<br />The various state variables and parameters are separated into classes of system variables, which relate to the operating system environment and local-clock mechanism; peer variables, which represent the state of the protocol machine specific to each peer; packet variables, which represent the contents of the NTP message; and parameters, which represent fixed configuration constants for all implementations of the current version. For each class the description of the variable is followed by its name and the procedure or value which controls it. Note that variables are in lower case, while parameters are in upper case. Additional details on formats and use are presented in later sections and Appendices.
<br />
<br /><b>Modes of Operation</b>
<br />Except in broadcast mode, an NTP association is formed when two peers exchange messages and one or both of them create and maintain an instantiation of the protocol machine, called an association. The association can operate in one of five modes as indicated by the host- mode variable (peer.mode): symmetric active, symmetric passive, client, server and broadcast, which are defined as follows:
<br />
<br /><ul><li><b>Symmetric Active</b>
<br />A host operating in this mode sends periodic messages regardless of the reachability state or stratum of its peer. By operating in this mode the host announces its willingness to synchronize and be synchronized by the peer.<br /><br /></li>

<li><b>Symmetric Passive</b>
<br />This type of association is ordinarily created upon arrival of a message from a peer operating in the symmetric active mode and persists only as long as the peer is reachable and operating at a stratum level less than or equal to the host; otherwise, the association is dissolved. However, the association will always persist until at least one message has been sent in reply. By operating in this mode the host announces its willingness to synchronize and be synchronized by the peer.<br /><br /></li>

<li><b>Client</b>
<br />A host operating in this mode sends periodic messages regardless of the reachability state or stratum of its peer. By operating in this mode the host, usually a LAN workstation, announces its willingness to be synchronized by, but not to synchronize the peer.<br /><br /></li>

<li><b>Server</b>
<br />This type of association is ordinarily created upon arrival of a client request message and exists only in order to reply to that request, after which the association is dissolved. By operating in this mode the host, usually a LAN time server, announces its willingness to synchronize, but not to be synchronized by the peer.<br /><br /></li>

<li><b>Broadcast</b>
<br />A host operating in this mode sends periodic messages regardless of the reachability state or stratum of the peers. By operating in this mode the host, usually a LAN time server operating on a high-speed broadcast medium, announces its willingness to synchronize all of the peers, but not to be synchronized by any of them.</li></ul>
<br /><hr />
<br /><b>Event Processing</b>
<br />The significant events of interest in NTP occur upon expiration of a peer timer (peer.timer), one of which is dedicated to each peer with an active association, and upon arrival of an NTP message from the various peers. An event can also occur as the result of an operator command or detected system fault, such as a primary reference source failure. This section describes the procedures invoked when these events occur.
<br />
<br /><ul><li><b>Notation Conventions</b>
<br />The NTP filtering and selection algorithms act upon a set of variables for clock offset (&lt;$Etheta ,~THETA&gt;), roundtrip delay (&lt;$Edelta ,~DELTA&gt;) and dispersion (&lt;$Eepsilon ,~EPSILON&gt;).<br /><br /></li>

<li><b>Transmit Procedure</b>
<br />The transmit procedure is executed when the peer timer decrements to zero for all modes except client mode with a broadcast server and server mode in all cases. In client mode with a broadcast server messages are never sent. In server mode messages are sent only in response to received messages. This procedure is also called by the receive procedure when an NTP message arrives that does not result in a persistent association.<br /><br /></li>

<li><b>Receive Procedure</b>
<br />The receive procedure is executed upon arrival of an NTP message. It validates the message, interprets the various modes and calls other procedures to filter the data and select the synchronization source. If the version number in the packet does not match the current version, the message may be discarded; however, exceptions may be advised on a case- by-case basis at times when the version is changed.<br /><br /></li>

<li><b>Packet Procedure</b>
<br />The packet procedure checks the message validity, computes delay/offset samples and calls other procedures to filter the data and select the synchronization source.<br /><br /></li>

<li><b>Clock-Update Procedure</b>
<br />The clock-update procedure is called from the receive procedure when valid clock offset, delay and dispersion data have been determined by the clock-filter procedure for the current peer.<br /><br /></li>

<li><b>Primary-Clock Procedure</b>
<br />When a primary reference source such as a radio clock is connected to the host, it is convenient to incorporate its information into the data base as if the clock were represented as an ordinary peer.<br /><br /></li>

<li><b>Clear Procedure</b>
<br />The clear procedure is called when some event occurs that results in a significant change in reachability state or potential disruption of the local clock.<br /><br /></li>

<li><b>Poll-Update Procedure</b>
<br />The poll-update procedure is called when a significant event occurs that may result in a change of the poll interval or peer timer.</li></ul>
<br />
<br /><b>Access Control Issues</b>
<br />The NTP design is such that accidental or malicious data modification (tampering) or destruction (jamming) at a time server should not in general result in timekeeping errors elsewhere in the synchronization subnet. However, the success of this approach depends on redundant time servers and diverse network paths, together with the assumption that tampering or jamming will not occur at many time servers throughout the synchronization subnet at the same time. In principle, the subnet vulnerability can be engineered through the selection of time servers known to be trusted and allowing only those time servers to become the synchronization source.
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Notation Conventions</b>

Each time the relevant peer variables are updated, all dispersions associated with that 
peer are updated to reflect the skew-error accumulation. The computations can be 
summarized as follows:

       &lt;$Etheta~==~roman peer.offset&gt;,
       &lt;$Edelta~==~roman peer.delay&gt;,
       &lt;$Eepsilon~==~roman peer.dispersion~=~rho~+~phi tau~+~epsilon sub sigma&gt;,
       &lt;$Elambda~==~epsilon~+~{| delta |} over 2&gt;,

Where &lt;$Etau&gt; is the interval since the original timestamp (from which &lt;$Etheta&gt; and 
&lt;$Edelta&gt; were determined) was transmitted to the present time and &lt;$Eepsilon sub 
sigma&gt; is the filter dispersion (see clock- filter procedure below). The variables 
relative to the root of the synchronization subnet via peer i are determined as 
follows:

       &lt;$ETHETA sub i~==~theta sub i&gt; ,
       &lt;$EDELTA sub i~==~roman peer.rootdelay~+~delta sub i&gt; ,
       &lt;$EEPSILON sub i~==~roman peer.rootdispersion~+~epsilon sub i~+~phi tausub i&gt;,
       &lt;$ELAMBDA sub i~==~EPSILON sub i~+~{| DELTA sub i |} over 2&gt;,

where all variables are understood to pertain to the ith peer. Finally, assuming the 
ith peer is selected for synchronization, the system variables are determined as 
follows:

       &lt;$ETHETA~=~&gt;combined final offset ,
       &lt;$EDELTA~=~DELTA sub i&gt; ,
       &lt;$EEPSILON~=~EPSILON sub i~+~epsilon sub xi~+~| THETA |&gt; ,
       &lt;$ELAMBDA~=~LAMBDA sub i&gt;</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Transmit Procedure</b>

The following initializes the packet buffer and copies the packet variables. The value 
skew is necessary to account for the skew-error accumulated over the interval since 
the local clock was last set.

       &lt;$Eroman pkt.peeraddr~&lt;&lt;-~roman peer.hostaddr&gt;;         /* copy system and 
peer variables */
       &lt;$Eroman pkt.peerport~&lt;&lt;-~roman peer.hostport&gt;;
       &lt;$Eroman pkt.hostaddr~&lt;&lt;-~roman peer.peeraddr&gt;;
       &lt;$Eroman pkt.hostport~&lt;&lt;-~roman peer.peerport&gt;;
       &lt;$Eroman pkt.leap~&lt;&lt;-~roman sys.leap&gt;;
       &lt;$Eroman pkt.version~&lt;&lt;-~roman NTP.VERSION&gt;;
       &lt;$Eroman pkt.mode~&lt;&lt;-~roman peer.mode&gt;;
       &lt;$Eroman pkt.stratum~&lt;&lt;-~roman sys.stratum&gt;;
       &lt;$Eroman pkt.poll~&lt;&lt;-~roman peer.hostpoll&gt;;
       &lt;$Eroman pkt.precision~&lt;&lt;-~roman sys.precision&gt;;
       &lt;$Eroman pkt.rootdelay~&lt;&lt;-~roman sys.rootdelay&gt;;
       if (sys.leap = 112 or (sys.clock &lt;196&gt; sys.reftime) &gt;&gt; NTP.MAXAGE)
               &lt;$Eskew~&lt;&lt;-~roman NTP.MAXSKEW&gt;;
       else
               &lt;$Eskew~&lt;&lt;-~phi roman {(sys.clock~-~sys.reftime)}&gt;;
       &lt;$Eroman {pkt.rootdispersion~&lt;&lt;-~roman sys.rootdispersion~+~(1~&lt;&lt; 
&lt;&lt;~sys.precision)}~+~skew&gt;;
       &lt;$Eroman pkt.refid~&lt;&lt;-~roman sys.refid&gt;;
       &lt;$Eroman pkt.reftime~&lt;&lt;-~roman sys.reftime&gt;</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Receive Procedure</b>

If there is no match a new instantiation of the protocol machine is created and the 
association mobilized.

       if (&lt;$Eroman pkt.version~!=~roman NTP.VERSION&gt;) exit;
      #ifdef (control messages implemented)
               if (&lt;$Eroman pkt.mode~=~6&gt;) call control-message;
               #endef
       for (all associations)                  /* access control goes here */
               match addresses and ports to associations;
       if (no matching association)
               call receive-instantiation procedure;   /* create association */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: Packet Procedure</b>

In case of broadcast mode (5) the apparent roundtrip delay will be zero and the full 
accuracy of the time-transfer operation may not be achievable. However, the accuracy 
achieved may be adequate for most purposes. The poll-update procedure is called with 
argument peer.hostpoll (peer.peerpoll may have changed).

begin packet procedure

       &lt;$Eroman peer.rec~&lt;&lt;-~roman sys.clock&gt;;     /*capture receive timestamp */
       if (&lt;$Eroman pkt.mode ~!=~5&gt;) begin
               &lt;$Etest1~&lt;&lt;-~( roman {pkt.xmt~!=~peer.org})&gt;;   /* test1 */
               &lt;$Etest2~&lt;&lt;-~( roman {pkt.org~=~peer.xmt})&gt;;    /* test2 */
               endif
       else begin
               &lt;$Eroman pkt.org~&lt;&lt;-~roman peer.rec&gt;;   /* fudge missing timestamps */
               &lt;$Eroman pkt.rec~&lt;&lt;-~roman pkt.xmt&gt;;
               &lt;$Etest1~&lt;&lt;-~bold roman true&gt;;              /* fake tests */
               &lt;$Etest2~&lt;&lt;-~bold roman true&gt;;
               endif
       &lt;$Eroman peer.org~&lt;&lt;-~roman pkt.xmt&gt;;          /* update originate timestamp */
       &lt;$Eroman peer.peerpoll~&lt;&lt;-~roman pkt.poll&gt;;    /* adjust poll interval */
       call poll-update(peer.hostpoll)</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5: Primary-Clock Procedure</b>

The distance procedure calculates the root delay &lt;$EDELTA&gt;, root dispersion &lt;$EEPSILON&gt; 
and root synchronization distance &lt;$ELAMBDA&gt; via the peer to the root of the 
synchronization subnet. The host will not synchronize to the selected peer if the 
distance is greater than NTP.MAXDISTANCE. The reason for the minimum clamp at 
NTP.MINDISPERSE is to discourage subnet route flaps that can happen with Bellman-Ford 
algorithms and small roundtrip delays.

       &lt;$ELAMBDA~
 &lt;~&gt;an distance (peer)&gt;;                         /* update system variables */
       if (&lt;$ELAMBDA~&gt;&gt;=~roman NTP.MAXDISTANCE&gt;) exit;
       &lt;$Eroman sys.leap~&lt;&lt;-~roman peer.leap&gt;;
       &lt;$Eroman sys.stratum~&lt;&lt;-~roman peer.stratum~+~1&gt;;
       &lt;$Eroman sys.refid~&lt;&lt;-~roman peer.peeraddr&gt;;
       call local-clock;
       if (local clock reset) begin           /* if reset, clear state variables */
               &lt;$Eroman sys.leap~&lt;&lt;-~11 sub 2&gt;;
               for (all peers) call clear;
               endif
       else begin
               &lt;$Eroman sys.peer~&lt;&lt;-~peer&gt;;   /* if not, adjust local clock */
               &lt;$Eroman sys.rootdelay~&lt;&lt;-~DELTA&gt;;
               &lt;$Eroman sys.rootdispersion~&lt;&lt;-~EPSILON~+~max 
(epsilon sub xi~+~| THETA |,~roman NTP.MINDISPERSE)&gt;;
               endif
       &lt;$Eroman sys.reftime~&lt;&lt;-~roman sys.clock&gt;;
       end clock-update procedure;</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 6" tabindex="0"><b>Example 6: Initialization Procedure</b>

The initialization procedure is called upon reboot or restart of the NTP daemon. The 
local clock is presumably undefined at reboot; however, in some equipment an estimate 
is available from the reboot environment, such as a battery-backed clock/calendar. 
The precision variable is determined by the intrinsic architecture of the local 
hardware clock. The authentication variables are used only if the authentication 
mechanism described in Appendix C is implemented. The values of these variables 
are determined using procedures beyond the scope of NTP itself.

begin initialization procedure

       #ifdef (authentication implemented)     / * see Appendix C */
               &lt;$Eroman sys.keys~&lt;&lt;-~as~required&gt;;
               #endef;
       &lt;$Eroman sys.leap~&lt;&lt;-~11 sub 2&gt;;           /* copy variables */
       &lt;$Eroman sys.stratum~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman sys.precision~&lt;&lt;-~host~precision&gt;;
       &lt;$Eroman sys.rootdelay~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman sys.rootdispersion~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman sys.refid~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman sys.reftime~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman sys.clock~&lt;&lt;-~external~reference&gt;;
       &lt;$Eroman sys.peer~&lt;&lt;-~roman NULL&gt;;
       &lt;$Eroman sys.poll~&lt;&lt;-~roman NTP.MINPOLL&gt;;
       for (all configured peers)         /* create configured associations */
               call initialization-instantiation procedure;
       end initialization procedure;</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 7" tabindex="0"><b>Example 7: Initialization-Instantiation Procedure</b>

This implementation-specific procedure is called from the initialization procedure to 
define an association. The addresses and modes of the peers are determined using 
information read during the reboot procedure or as the result of operator commands. 
The authentication variables are used only if the authentication mechanism 
described in Appendix C is implemented. The values of these variables are determined 
using procedures beyond the scope of NTP itself. With the authentication bits set as 
suggested, only properly authenticated peers can become the synchronization source.

begin initialization-instantiation procedure

       &lt;$Eroman peer.config~&lt;&lt;-~1&gt;;
       #ifdef (authentication implemented)     /* see Appendix C */
               &lt;$Eroman peer.authenable~&lt;&lt;-~1~(suggested)&gt;;
               &lt;$Eroman peer.authentic~&lt;&lt;-~0&gt;;
               &lt;$Eroman peer.hostkeyid~&lt;&lt;-~as~required&gt;;
               &lt;$Eroman peer.peerkeyid~&lt;&lt;-~0&gt;;
               #endef;
       &lt;$Eroman peer.peeraddr~&lt;&lt;-~peer~IP~address&gt;;    /* copy variables */
       &lt;$Eroman peer.peerport~&lt;&lt;-~roman NTP.PORT&gt;;
       &lt;$Eroman peer.hostaddr~&lt;&lt;-~host~IP~address&gt;;
       &lt;$Eroman peer.hostport~&lt;&lt;-~roman NTP.PORT&gt;;
       &lt;$Eroman peer.mode~&lt;&lt;-~host~mode&gt;;
       &lt;$Eroman peer.peerpoll~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman peer.timer~&lt;&lt;-~0&gt;;
       &lt;$Eroman peer.delay~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman peer.offset~&lt;&lt;-~0~(undefined)&gt;;
       call clear;           /* initialize association */
       end initialization-instantiation procedure;</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 8" tabindex="0"><b>Example 8: Receive-Instantiation Procedure</b>

The receive-instantiation procedure is called from the receive procedure when a new 
peer is discovered. It initializes the peer variables and mobilizes the association. 
The authentication variables are used only if the authentication mechanism 
described in Appendix C is implemented. If implemented, only properly authenticated 
non-configured peers can become the synchronization source.

begin receive-instantiation procedure

       #ifdef (authentication implemented)     /* see Appendix C */
               &lt;$Eroman peer.authenable~&lt;&lt;-~0&gt;;
               &lt;$Eroman peer.authentic~&lt;&lt;-~0&gt;;
               &lt;$Eroman peer.hostkeyid~&lt;&lt;-~as~required&gt;;
               &lt;$Eroman peer.peerkeyid~&lt;&lt;-~0&gt;;
               #endef
       &lt;$Eroman peer.config~&lt;&lt;-~0&gt;;          /* copy variables */
       &lt;$Eroman peer.peeraddr~&lt;&lt;-~roman pkt.peeraddr&gt;;
       &lt;$Eroman peer.peerport~&lt;&lt;-~roman pkt.peerport&gt;;
       &lt;$Eroman peer.hostaddr~&lt;&lt;-~roman pkt.hostaddr&gt;;
       &lt;$Eroman peer.hostport~&lt;&lt;-~roman pkt.hostport&gt;;
       if (pkt.mode = 3)       /* determine mode */
               &lt;$Eroman peer.mode~&lt;&lt;-~4&gt;;
               else
               &lt;$Eroman peer.mode~&lt;&lt;-~2&gt;;
       &lt;$Eroman peer.peerpoll~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman peer.timer~&lt;&lt;-~0&gt;;
       &lt;$Eroman peer.delay~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman peer.offset~&lt;&lt;-~0~(undefined)&gt;;
       call clear;          /* initialize association */
       end receive-instantiation procedure;</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 9" tabindex="0"><b>Example 9: Primary Clock-Instantiation Procedure</b>

This procedure is called from the initialization procedure in order to set up the 
state variables for the primary clock. The value for peer.precision is determined 
from the radio clock specification and hardware interface. The value for 
peer.rootdispersion is nominally ten times the inherent maximum error of the 
radio clock; for instance, &lt;$E10~mu s&gt; for a calibrated atomic clock, 10 ms for 
a WWVB or GOES radio clock and 100 ms for a less accurate WWV radio clock.

begin clock-instantiation procedure

       &lt;$Eroman peer.config~&lt;&lt;-~1&gt;;         /* copy variables */
       &lt;$Eroman peer.peeraddr~&lt;&lt;-~0~undefined&gt;;
       &lt;$Eroman peer.peerport~&lt;&lt;-~0~(not~used)&gt;;
       &lt;$Eroman peer.hostaddr~&lt;&lt;-~0~(not~used)&gt;;
       &lt;$Eroman peer.hostport~&lt;&lt;-~0~(not~used)&gt;;
       &lt;$Eroman peer.leap~&lt;&lt;-~11 sub 2&gt;;
       &lt;$Eroman peer.mode~&lt;&lt;-~0~(not~used)&gt;;
       &lt;$Eroman peer.stratum~&lt;&lt;-~0&gt;;
       &lt;$Eroman peer.peerpoll~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman peer.precision~&lt;&lt;-~clock~precision&gt;;
       &lt;$Eroman peer.rootdelay~&lt;&lt;-~0&gt;;
       &lt;$Eroman peer.rootdispersion~&lt;&lt;-~clock~dispersion&gt;;
       &lt;$Eroman peer.refid~&lt;&lt;-~0~(not~used)&gt;;
       &lt;$Eroman peer.reftime~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman peer.timer~&lt;&lt;-~0&gt;;
       &lt;$Eroman peer.delay~&lt;&lt;-~0~(undefined)&gt;;
       &lt;$Eroman peer.offset~&lt;&lt;-~0~(undefined)&gt;;
       call clear;       /* initialize association */
       end clock-instantiation procedure;</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>NTP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Clock offset</b><br />Clock offset represents the amount to adjust the local clock to bring it into correspondence with the reference clock.<br /><br /><b>Dispersion</b><br />Dispersion represents the maximum error of the local clock relative to the reference clock. This is a signed fixed-point number indicating the maximum error of the peer clock relative to the local clock over the network path between them, in seconds. Only positive values greater than zero are possible.<br /><br /><b>Roundtrip delay</b><br />Roundtrip delay provides the capability to launch a message to arrive at the reference clock at a specified time.<br /><br /><b>Time Protocol</b><br />This protocol provides a site-independent, machine readable date and time. The Time service sends back to the originating source the time in seconds since midnight on January first 1900. One motivation arises from the fact that not all systems have a date/time clock, and all are subject to occasional human or machine error.
<br />
<br />This protocol may be used either above the Transmission Control Protocol(TCP) or above the User Datagram Protocol(UDP).<br /><br /><b>Time synchronization</b><br />It alters your computer's time in very small steps by way of extension or compression of the system time. While all other protocols have timestamp types that are relative to a well-known reference time, timestamps in NetFlow are reported relative to the sysUpTime of the exporting device.  For applications that require the absolute start/end times of flows, this means that exporter sysUpTime has to be matched with absolute time.<br /><br /><b>Timestamp</b><br />A router has received a frame that has had its Time To Live field decremented to one. The router now decrements the field to zero and discards the frame.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1128.html">RFC 1128</a>] Measured Performance of the Network Time Protocol in the Internet System.
[<a href="https://www.rfc-editor.org/rfc/rfc1129.html">RFC 1129</a>] Internet Time Synchronization: the Network Time Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1165.html">RFC 1165</a>] Network Time Protocol (NTP) over the OSI Remote Operations Service.
[<a href="https://www.rfc-editor.org/rfc/rfc1305.html">RFC 1305</a>] Network Time Protocol (Version 3) Specification, Implementation and Analysis.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc958.html">RFC 958</a>, <a href="https://www.rfc-editor.org/rfc/rfc1059.html">RFC 1059</a>, <a href="https://www.rfc-editor.org/rfc/rfc1119.html">RFC 1119</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1589.html">RFC 1589</a>] A Kernel Model for Precision Timekeeping.
[<a href="https://www.rfc-editor.org/rfc/rfc1708.html">RFC 1708</a>] NTP PICS PROFORMA For the Network Time Protocol Version 3.
[<a href="https://www.rfc-editor.org/rfc/rfc2783.html">RFC 2783</a>] Pulse-Per-Second API for UNIX-like Operating Systems, Version 1.0.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc958.html">RFC 958</a>] Network Time Protocol (NTP).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1305.html">RFC 1305</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1059.html">RFC 1059</a>] Network Time Protocol (Version 1).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1305.html">RFC 1305</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1119.html">RFC 1119</a>] Network Time Protocol (Version 2) Specification and Implementation.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1305.html">RFC 1305</a>. 
                Available in Postscript and PDF format. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc958.html">RFC 958</a>, <a href="https://www.rfc-editor.org/rfc/rfc1059.html">RFC 1059</a>.
                		  </div>
		  
</section>


---
id: protocol-mgcp
slug: mgcp
name: MGCP
expandedName: Media Gateway Control Protocol
origin: historical
provenance:
  source: protocols/protocol_MGCP.htm
  sha256: c3db666b196c36f6fcd2fe5ef2702fe0dc02b89713d2e1fd196d141d8a7b6e04
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Media Gateway Control Protocol
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Media Gateway Control Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application layer protocol
  - label: Ports
    html: |-
      2427 (UDP) gateway
      <br />2727 (UDP) call agent
originalUpdate: '2005-11-10 16:21:44'
rfcs:
  - 2705
  - 2805
  - 2897
  - 3064
  - 3149
  - 3435
  - 3441
  - 3624
  - 3660
  - 3661
  - 3991
  - 3992
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

			Media Gateway Control Protocol (MGCP) is a VOIP protocol used between elements of a decomposed multimedia gateway which consists of a Call Agent, which contains the call control "intelligence", and a media gateway which contains the media functions, e.g., conversion from TDM voice to Voice over IP.
<br />
<br />Media Gateway Control Protocol (MGCP) is used for controlling telephony gateways from external call control elements called media gateway controllers or call agents. A telephony gateway is a network element that provides conversion between the audio signals carried on telephone circuits and data packets carried over the Internet or over other packet networks. The Call Agent can instruct the endpoints to detect certain events and generate signals. The endpoints automatically communicate changes in service state to the Call Agent. Furthermore, the Call Agent can audit endpoints as well as the connections on endpoints.
<br />
<br />MGCP assumes a call control architecture where the call control intelligence is outside the gateways and handled by external call control elements. The MGCP assumes that these call control elements, or Call Agents, will synchronize with each other to send coherent commands to the gateways under their control. MGCP is, in essence, a master/slave protocol, where the gateways are expected to execute commands sent by the Call Agents.
<br />
<br />MGCP assumes a connection model where the basic constructs are endpoints and connections. Endpoints are sources and/or sinks of data and can be physical or virtual. Creation of physical endpoints requires hardware installation, while creation of virtual endpoints can be done by software.
<br /><hr />
<br /><b>Media Gateway Control Interface</b>
<br /><ul><li><b>Model and Naming Conventions</b>
<br />The MGCP assumes a connection model where the basic constructs are endpoints and connections. Connections are grouped in calls. One or more connections can belong to one call. Connections and calls are set up at the initiative of one or more Call Agents.<br /><br /></li>

<li><b>Usage of SDP</b>
<br />The Call Agent uses the MGCP to provide the endpoint with the description of connection parameters such as IP addresses, UDP port and RTP profiles. These descriptions will follow the conventions delineated in the Session Description Protocol which is now an IETF proposed standard.<br /><br /></li>

<li><b>Commands:</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Code</td><td>Verb</td><td>Description</td></tr><tr><td>AUCX</td><td>AuditConnection</td><td>The AuditEndPoint command can be used by the Call Agent to find out the status of a given endpoint.</td></tr><tr><td>AUEP</td><td>AuditEndpoint</td><td>The AuditConnection command can be used by the Call Agent to retrieve the parameters attached to a connection.</td></tr><tr><td>CRCX</td><td>CreateConnection</td><td>This command is used to create a connection between two endpoints.</td></tr><tr><td>DLCX</td><td>DeleteConnection</td><td>This command is used to terminate a connection.</td></tr><tr><td>EPCF</td><td>EndpointConfiguration</td><td>The EndpointConfiguration command can be used to specify the encoding of the signals that will be received by the endpoint.</td></tr><tr><td>MDCX</td><td>ModifyConnection</td><td>This command is used to modify the characteristics of a gateway"s "view" of a connection.</td></tr><tr><td>RQNT</td><td>NotificationRequest</td><td>The NotificationRequest command is used to request the gateway to send notifications upon the occurrence of specified events in an endpoint.</td></tr><tr><td>NTFY</td><td>Notify</td><td>Notifications with the observed events are sent by the gateway via the Notify command when a triggering event occurs.</td></tr><tr><td>RSIP</td><td>RestartInProgress</td><td>The RestartInProgress command is used by the gateway to signal that an endpoint, or a group of endpoints, is put in-service or out-of- service.</td></tr></tbody></table></div></div>
<br />
<br /></li><li><b>Return Codes and Error Codes</b>
<br />All MGCP commands are acknowledged. The acknowledgment carries a return code, which indicates the status of the command. The return code is an integer number, for which the following ranges of values have been defined:<br /></li>
<li><ul><li><b>(0xx) Response acknowledgements:</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>0</td><td>The transaction is currently being executed. An actual completion message will follow on later.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>(1xx) Provisional response:</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>100</td><td>The transaction is currently being executed. An actual completion message will follow on later.</td></tr><tr><td>101</td><td>The transaction has been queued for execution. An actual completion message will follow later.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>(2xx) Successful completion:</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>200</td><td>The requested transaction was executed normally.</td></tr><tr><td>250</td><td>The connection was deleted.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>(4xx) Transient error:</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>400</td><td>The transaction could not be executed, due to a transient error.</td></tr><tr><td>401</td><td>The phone is already off hook.</td></tr><tr><td>402</td><td>The phone is already on hook.</td></tr><tr><td>403</td><td>The transaction could not be executed, because the endpoint does not have sufficient resources at this time.</td></tr><tr><td>404</td><td>Insufficient bandwidth at this time.</td></tr><tr><td>405</td><td>The transaction could not be executed, because the endpoint is "restarting".</td></tr><tr><td>406</td><td>Transaction time-out. The transaction did not complete in a reasonable period of time and has been aborted.</td></tr><tr><td>407</td><td>Transaction aborted. The transaction was aborted by some external action, e.g., a ModifyConnection command aborted by a DeleteConnection command.</td></tr><tr><td>409</td><td>The transaction could not be executed because of internal overload.</td></tr><tr><td>410</td><td>No endpoint available. A valid "any of" wildcard was used, however there was no endpoint available to satisfy the request.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>(5xx) Permanent error:</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>500</td><td>The transaction could not be executed, because the endpoint is unknown.</td></tr><tr><td>501</td><td>The transaction could not be executed, because the endpoint is not ready.</td></tr><tr><td>502</td><td>The transaction could not be executed, because the endpoint does not have sufficient resources.</td></tr><tr><td>503</td><td>"All of" wildcard too complicated.</td></tr><tr><td>504</td><td>Unknown or unsupported command.</td></tr><tr><td>505</td><td>Unsupported RemoteConnectionDescriptor. This SHOULD be used when one or more mandatory parameters or values in the RemoteConnectionDescriptor is not supported.</td></tr><tr><td>506</td><td>Unable to satisfy both LocalConnectionOptions and RemoteConnectionDescriptor. This SHOULD be used when the LocalConnectionOptions and RemoteConnectionDescriptor contain one or more mandatory parameters or values that conflict with each other and/or cannot be supported at the same time (except for codec negotiation failure, see error code 534).</td></tr><tr><td>507</td><td>Unsupported functionality. Some unspecified functionality required to carry out the command is not supported. Note that several other error codes have been defined for specific areas of unsupported functionality (e.g. 508, 511, etc.), and this error code SHOULD only be used if there is no other more specific error code for the unsupported functionality.</td></tr><tr><td>508</td><td>Unknown or unsupported quarantine handling.</td></tr><tr><td>509</td><td>Error in RemoteConnectionDescriptor. This SHOULD be used when there is a syntax or semantic error in the RemoteConnectionDescriptor.</td></tr><tr><td>510</td><td>The transaction could not be executed, because some unspecified protocol error was detected. Automatic recovery from such an error will be very difficult, and hence this code SHOULD only be used as a last resort.</td></tr><tr><td>511</td><td>The transaction could not be executed, because the command contained an unrecognized extension. This code SHOULD be used for unsupported critical parameter extensions ("X+").</td></tr><tr><td>512</td><td>The transaction could not be executed, because the gateway is not equipped to detect one of the requested events.</td></tr><tr><td>513</td><td>The transaction could not be executed, because the gateway is not equipped to generate one of the requested signals.</td></tr><tr><td>514</td><td>The transaction could not be executed, because the gateway cannot send the specified announcement.</td></tr><tr><td>515</td><td>The transaction refers to an incorrect connection-id (may have been already deleted).</td></tr><tr><td>516</td><td>The transaction refers to an unknown call-id.</td></tr><tr><td>517</td><td>Unsupported or invalid mode.</td></tr><tr><td>518</td><td>Unsupported or unknown package.</td></tr><tr><td>519</td><td>Endpoint does not have a digit map.</td></tr><tr><td>520</td><td>The transaction could not be executed, because the endpoint is "restarting".</td></tr><tr><td>521</td><td>Endpoint redirected to another Call Agent.</td></tr><tr><td>522</td><td>No such event or signal.</td></tr><tr><td>523</td><td>Unknown action or illegal combination of actions.</td></tr><tr><td>524</td><td>Internal inconsistency in LocalConnectionOptions.</td></tr><tr><td>525</td><td>Unknown extension in LocalConnectionOptions.</td></tr><tr><td>526</td><td>Insufficient bandwidth.</td></tr><tr><td>527</td><td>Missing RemoteConnectionDescriptor.</td></tr><tr><td>528</td><td>Incompatible protocol version.</td></tr><tr><td>529</td><td>Internal hardware failure.</td></tr><tr><td>530</td><td>CAS signaling protocol error.</td></tr><tr><td>531</td><td>Failure of a grouping of trunks (e.g. facility failure).</td></tr><tr><td>533</td><td>Response too large.</td></tr><tr><td>534</td><td>Codec negotiation failure.</td></tr><tr><td>535</td><td>Packetization period not supported.</td></tr><tr><td>536</td><td>Unknown or unsupported RestartMethod.</td></tr><tr><td>537</td><td>Unknown or unsupported digit map extension.</td></tr><tr><td>538</td><td>Event/signal parameter error (e.g., missing, erroneous, unsupported, unknown, etc.).</td></tr><tr><td>539</td><td>Invalid or unsupported command parameter. This code SHOULD only be used when the parameter is neither a package or vendor extension parameter.</td></tr><tr><td>540</td><td>Per endpoint connection limit exceeded.</td></tr><tr><td>541</td><td>Invalid or unsupported LocalConnectionOptions. This code SHOULD only be used when the LocalConnectionOptions is neither a package nor a vendor extension LocalConnectionOptions.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>(8xx) Package specific response codes:</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>800</td><td>Invalid NextEndpointName.</td></tr><tr><td>801</td><td>Invalid StartEndpointName.</td></tr><tr><td>802</td><td>Invalid or unsupported BulkRequestInfo Parameter.</td></tr><tr><td>803</td><td>Invalid or unsupported StateType.</td></tr><tr><td>804</td><td>Bulk Audit Type not supported.</td></tr><tr><td>805</td><td>Incorrectly specified endpoint range.</td></tr><tr><td>806</td><td>Requested StartEndpoint unknown or unavailable.</td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>Reason codes</b>
<br />Reason codes are used by the gateway when deleting a connection to inform the Call Agent about the reason for deleting the connection. They may also be used in a RestartInProgress command to inform the Call Agent of the reason for the RestartInProgress.
<br />
<br />The reason code is an integer number, and the following values have been defined:<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 8" tabindex="0"><table><caption>Description: preserved table 8</caption><tbody><tr><td>Code</td><td>Description</td></tr><tr><td>0</td><td>Endpoint state is nominal. (This code is used only in response to audit requests.).</td></tr><tr><td>900</td><td>Endpoint malfunctioning.</td></tr><tr><td>901</td><td>Endpoint taken out of service.</td></tr><tr><td>902</td><td>Loss of lower layer connectivity (e.g., downstream sync).</td></tr><tr><td>903</td><td>QoS resource reservation was lost.</td></tr><tr><td>904</td><td>Manual intervention.</td></tr><tr><td>905</td><td>Facility failure (e.g., DS-0 failure).</td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>Media Gateway Control Protocol</b>
<br />Reason codes are used by the gateway when deleting a connection to inform the Call Agent about the reason for deleting the connection. They may also be used in a RestartInProgress command to inform the Call Agent of the reason for the RestartInProgress.
<br />
<br />All responses are composed of a Response header, optionally followed by session description information.
<br />
<br />Headers and session descriptions are encoded as a set of text lines, separated by a carriage return and line feed character (or, optionally, a single line-feed character). The session descriptions are preceded by an empty line.
<br />
<br />MGCP uses a transaction identifier to correlate commands and responses. The transaction identifier is encoded as a component of the command header and repeated as a component of the response header
<br />
<br /><ul><li><b>Protocol Structure</b>
<br />The MGCP is a text based protocol. The transactions are composed of a command and a mandatory response. There are eight types of commands:<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 9" tabindex="0"><table><caption>Description: preserved table 9</caption><tbody><tr><td>MGC --&gt; MG</td><td>CreateConnection: Creates a connection between two endpoints; uses SDP to define the receive capabilities of the paricipating endpoints.</td></tr><tr><td>MGC --&gt; MG</td><td>ModifyConnection: Modifies the properties of a connection; has nearly the same parameters as the CreateConnection command.</td></tr><tr><td>MGC &lt;--&gt; MG</td><td>DeleteConnection: Terminates a connection and collects statistics on the execution of the connection.</td></tr><tr><td>MGC --&gt; MG</td><td>NotificationRequest: Requests the media gateway to send notifications on the occurrence of specified events in an endpoint.</td></tr><tr><td>MGC &lt;-- MG</td><td>Notify: Informs the media gateway controller when observed events occur.</td></tr><tr><td>MGC --&gt; MG</td><td>AuditEndpoint: Determines the status of an endpoint.</td></tr><tr><td>MGC --&gt; MG</td><td>AuditConnection: Retrieves the parameters related to a connection.</td></tr><tr><td>MGC &lt;-- MG</td><td>RestartInProgress: Signals that an endpoint or group of endpoints is take in or out of service.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Command header</b><br /></li>
<li>The command header is composed of:
<br /></li><li>A command line, identifying the requested action or verb, the transaction identifier, the endpoint towards which the action is requested, and the MGCP protocol version,
<br /><br /></li>
<li>A set of zero or more parameter lines, composed of a parameter name followed by a parameter value.
<br /><br /></li>
<li>Unless otherwise noted or dictated by other referenced standards (e.g., SDP), each component in the command header is case insensitive. This goes for verbs as well as parameters and values, and hence all comparisons MUST treat upper and lower case as well as combinations of these as being equal.
<br /><br /></li>
<li><ul><li><b>Format of response headers</b>
<br />The response header is composed of a response line, optionally followed by headers that encode the response parameters.
<br />
<br />An example of a response header could be:
<br />200 1203 OK
<br />
<br />The response line starts with the response code, which is a three digit numeric value. The code is followed by a white space, and the transaction identifier. Response codes defined in packages (8xx) are followed by white space, a slash ("/") and the package name. All response codes may furthermore be followed by optional commentary preceded by a white space.<br /><br /></li>

<li><b>Transmission over UDP</b>
<br />MGCP messages are transmitted over UDP. Commands are sent to one of the IP addresses defined in the DNS for the specified endpoint. The responses are sent back to the source address (i.e., IP address and UDP port number) of the commands - the response may or may not arrive from the same address as the command was sent to.<br /><br /></li>

<li><b>States, Failover and Race Conditions</b>
<br />In order to implement proper call signaling, the Call Agent must keep track of the state of the endpoint, and the gateway must make sure that events are properly notified to the Call Agent. Special conditions exist when the gateway or the Call Agent are restarted: the gateway must be redirected to a new Call Agent during "failover" procedures, the Call Agent must take special action when the gateway is taken offline, or restarted.</li></ul></li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: NotificationRequest</b>
The first example illustrates a NotificationRequest that will ring a phone and look 
for an off-hook event:

          RQNT 1201 aaln/1@rgw-2567.whatever.net MGCP 1.0
          N: ca@ca1.whatever.net:5678
          X: 0123456789AC
          R: l/hd(N)
          S: l/rg

The response indicates that the transaction was successful:

          200 1201 OK

The second example illustrates a NotificationRequest that will look for and accumulate 
an off-hook event, and then provide dial-tone and accumulate digits according to the 
digit map provided. The "notified entity" is set to "ca@ca1.whatever.net:5678", and 
since the SignalRequests parameter is empty (it could have been omitted as well), all 
currently active TO signals will be stopped. All events in the quarantine buffer will 
be processed, and the list of events to detect in the "notification" state will include 
fax tones in addition to the "requested events" and persistent events:

          RQNT 1202 aaln/1@rgw-2567.whatever.net MGCP 1.0
          N: ca@ca1.whatever.net:5678
          X: 0123456789AC
          R: L/hd(A, E(S(L/dl),R(L/oc, L/hu, D/[0-9#*T](D))))
          D: (0T|00T|#xxxxxxx|*xx|91xxxxxxxxxx|9011x.T)
          S:
          Q: process
          T: G/ft

The response indicates that the transaction was successful:

          200 1202 OK</pre>
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Notify</b>
The example below illustrates a Notify message that notifies an off- hook event 
followed by a 12-digit number beginning with "91". A transaction identifier correlating 
the Notify with the NotificationRequest it results from is included. The command is 
sent to the current "notified entity", which typically will be the actual value 
supplied in the NotifiedEntity parameter, i.e., "ca@ca1.whatever.net:5678" 
- a failover situation could have changed this:

          NTFY 2002 aaln/1@rgw-2567.whatever.net MGCP 1.0
          N: ca@ca1.whatever.net:5678
          X: 0123456789AC
          O: L/hd,D/9,D/1,D/2,D/0,D/1,D/8,D/2,D/9,D/4,D/2,D/6,D/6

The Notify response indicates that the transaction was successful:

          200 2002 OK</pre>
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: CreateConnection</b>
The first example illustrates a CreateConnection command to create a connection 
on the endpoint specified.  The connection will be part of the specified CallId. The 
LocalConnectionOptions specify that G.711 mu-law will be the codec used and the 
packetization period will be 10 ms. The connection mode will be "receive only":

          CRCX 1204 aaln/1@rgw-2567.whatever.net MGCP 1.0
          C: A3C47F21456789F0
          L: p:10, a:PCMU
          M: recvonly

The response indicates that the transaction was successful, and a connection 
identifier for the newly created connection is therefore included. A session 
description for the new connection is included as well - note that it is preceded 
by an empty line.

          200 1204 OK
          I: FDE234C8

          v=0
          o=- 25678 753849 IN IP4 128.96.41.1
          s=-
          c=IN IP4 128.96.41.1
          t=0 0
          m=audio 3456 RTP/AVP 0

The second example illustrates a CreateConnection command containing a notification 
request and a RemoteConnectionDescriptor:

          CRCX 1205 aaln/1@rgw-2569.whatever.net MGCP 1.0
          C: A3C47F21456789F0
          L: p:10, a:PCMU
          M: sendrecv
          X: 0123456789AD
          R: L/hd
          S: L/rg

          v=0
          o=- 25678 753849 IN IP4 128.96.41.1
          s=-
          c=IN IP4 128.96.41.1
          t=0 0
          m=audio 3456 RTP/AVP 0

The response indicates that the transaction failed, because the phone was already 
off-hook. Consequently, neither a connection-id nor a session description is 
returned:

          401 1205 Phone off-hook

Our third example illustrates the use of the provisional response and the three-way 
handshake. We create another connection and acknowledge the previous response 
received by using the response acknowledgement parameter:

          CRCX 1206 aaln/1@rgw-2569.whatever.net MGCP 1.0
          K: 1205
          C: A3C47F21456789F0
          L: p:10, a:PCMU
          M: inactive

          v=0
          o=- 25678 753849 IN IP4 128.96.41.1
          s=-
          c=IN IP4 128.96.41.1
          t=0 0
          m=audio 3456 RTP/AVP 0

A provisional response is returned initially:

          100 1206 Pending
          I: DFE233D1

          v=0
          o=- 4723891 7428910 IN IP4 128.96.63.25
          s=-
          c=IN IP4 128.96.63.25
          t=0 0
          m=audio 3456 RTP/AVP 0

A little later, the final response is received:

          200 1206 OK
          K:
          I: DFE233D1

          v=0
          o=- 4723891 7428910 IN IP4 128.96.63.25
          s=-
          c=IN IP4 128.96.63.25
          t=0 0
          m=audio 3456 RTP/AVP 0

The Call Agent acknowledges the final response as requested:

          000 1206

and the transaction is complete.</pre>
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: AuditEndpoint</b>
In the first example, the Call Agent wants to learn what endpoints are present on 
the gateway specified, hence the use of the "all of" wild-card for the local portion 
of the endpoint-name:

          AUEP 1200 *@rgw-2567.whatever.net MGCP 1.0

The gateway indicates success and includes a list of endpoint names:

          200 1200 OK
          Z: aaln/1@rgw-2567.whatever.net
          Z: aaln/2@rgw-2567.whatever.net

In the second example, the capabilities of one of the endpoints is requested:

          AUEP 1201 aaln/1@rgw-2567.whatever.net MGCP 1.0
          F: A

The response indicates success and the capabilities as well. Two codes are 
supported, however with different capabilities. Consequently two separate 
capability sets are returned:

          200 1201 OK
          A: a:PCMU, p:10-100, e:on, s:off, v:L;S, m:sendonly;
                   recvonly;sendrecv;inactive;netwloop;netwtest
          A: a:G729, p:30-90, e:on, s:on, v:L;S, m:sendonly;
                   recvonly;sendrecv;inactive;confrnce;netwloop

Note that the carriage return in the Capabilities lines are shown for formatting 
reasons only - they are not permissible in a real implementation.

In the third example, the Call Agent audits several types of information for the 
endpoint:

          AUEP 2002 aaln/1@rgw-2567.whatever.net MGCP 1.0
          F: R,D,S,X,N,I,T,O,ES

The response indicates success:

          200 2002 OK
          R: L/hu,L/oc(N),D/[0-9](N)
          D:
          S: L/vmwi(+)
          X: 0123456789B1
          N: [128.96.41.12]
          I: 32F345E2
          T: G/ft
          O: L/hd,D/9,D/1,D/2
          ES: L/hd

The list of requested events contains three events. Where no package name is 
specified, the default package is assumed. The same goes for actions, so the 
default action - Notify - must therefore be assumed for the "L/hu" event. The 
omission of a value for the "digit map" means the endpoint currently does not 
have a digit map. There are currently no active time-out signals, however the 
OO signal "vmwi" is currently on and is consequently included - in this case it 
was parameterized, however the parameter could have been excluded. The 
current "notified entity" refers to an IP-address and only a single connection 
exists for the endpoint. The current value of DetectEvents is "G/ft", and the list 
of ObservedEvents contains the four events specified. Finally, the event-states 
audited reveals that the phone was off-hook at the time the transaction was 
processed.</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>MGCP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Code</b><br />Written computer instructions. The term code is somewhat colloquial. For example, a programmer might say: "I wrote a lot of code this morning" or "There's one piece of code that doesn't work." 
<br />
<br />Code can appear in a variety of forms. The code that a programmer writes is called source code. After it has been compiled, it is called object code. Code that is ready to run is called executable code or machine code.<br /><br /><b>Command</b><br />Command is an instruction to a computer or device to perform a specific task. Commands come in different forms. They can be: special words (keywords) that a program understands, function keys 
<br />choices in a menu and buttons or other graphical objects on your screen 
<br />
<br />Every program that interacts with people responds to a specific set of commands. The set of commands and the syntax for entering them is called the user interface and varies from one program to another.<br /><br /><b>Connection</b><br />A logical communication path identified by a pair of endpoints.
<br />
<br />In dbAnywhere, a connection refers to the connection to the SQL Anywhere database.<br /><br /><b>Endpoint</b><br />SIP or H.323 terminal or gateway. An endpoint can call and be called. It generates and terminates the information stream.<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>MGCP</b><br />Media Gateway Control Protocol, developed by Telcordia and Level 3 Communications, a control and signal standards to compete with the older H.323 standard for the conversion of audio signals carried on telephone circuits (PSTN ) to data packets carried over the Internet or other packet networks.<br /><br /><b>Media</b><br />In computer networks, media refers to the cables linking workstations together. There are many different types of transmission media, the most popular being twisted-pair wire (normal electrical wire), coaxial cable (the type of cable used for cable television), and fiber optic cable (cables made out of glass).<br /><br /><b>Multimedia</b><br />The use of computers to present text, graphics, video, animation, and sound in an integrated way. Long touted as the future revolution in computing, multimedia applications were, until the mid-90s, uncommon due to the expensive hardware required. With increases in performance and decreases in price, however, multimedia is now commonplace. Nearly all PCs are capable of displaying video, though the resolution available depends on the power of the computer's video adapter and CPU.<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>RTP</b><br />RTP (Real-Time Transport Protocol) is an Internet protocol for transmitting real-time data such as audio and video. RTP itself does not guarantee real-time delivery of data, but it does provide mechanisms for the sending and receiving applications to support streaming data. Typically, RTP runs on top of the UDP protocol, although the specification is general enough to support other transport protocols.<br /><br /><b>SDP</b><br />Session Description Protocol, a protocol that defines a text-based format for describing streaming media sessions and multicast transmissions. SDP is not a transport protocol but a method of describing the details of the transmission. For example, an SDP file contains information about the format, timing and authorship of the transmission, name and purpose of the session, any media, protocols or codec formats, the version number, contact information and broadcast times.<br /><br /><b>TDM</b><br />Time Division Multiplexing, a type of multiplexing that combines data streams by assigning each stream a different time slot in a set. TDM repeatedly transmits a fixed sequence of time slots over a single transmission channel. Within T-Carrier systems, such as T-1 and T-3, TDM combines Pulse Code Modulated (PCM) streams created for each conversation or data stream.<br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br /><b>VOIP</b><br />Voice over Internet Protocol, a category of hardware and software that enables people to use the Internet as the transmission medium for telephone calls by sending voice data in packets using IP rather than by traditional circuit transmissions of the PSTN. One advantage of VoIP is that the telephone calls over the Internet do not incur a surcharge beyond what the user is paying for Internet access, much in the same way that the user doesn't pay for sending individual e-mails over the Internet.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.iana.org/assignments/mgcp-localconnectionoptions">MGCP LocalConnectionOptions</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2805.html">RFC 2805</a>] Media Gateway Control Protocol Architecture and Requirements.
[<a href="https://www.rfc-editor.org/rfc/rfc2897.html">RFC 2897</a>] Proposal for an MGCP Advanced Audio Package.
[<a href="https://www.rfc-editor.org/rfc/rfc3064.html">RFC 3064</a>] MGCP CAS Packages.
[<a href="https://www.rfc-editor.org/rfc/rfc3149.html">RFC 3149</a>] MGCP Business Phone Packages.
[<a href="https://www.rfc-editor.org/rfc/rfc3435.html">RFC 3435</a>] Media Gateway Control Protocol (MGCP) Version 1.0.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3661.html">RFC 3661</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2705.html">RFC 2705</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3441.html">RFC 3441</a>] Asynchronous Transfer Mode (ATM) Package for the Media Gateway Control Protocol (MGCP).
[<a href="https://www.rfc-editor.org/rfc/rfc3624.html">RFC 3624</a>] The Media Gateway Control Protocol (MGCP) Bulk Audit Package.
[<a href="https://www.rfc-editor.org/rfc/rfc3660.html">RFC 3660</a>] Basic Media Gateway Control Protocol (MGCP) Packages.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2705.html">RFC 2705</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3661.html">RFC 3661</a>] Media Gateway Control Protocol (MGCP) Return Code Usage.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3435.html">RFC 3435</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3991.html">RFC 3991</a>] Media Gateway Control Protocol (MGCP) Redirect and Reset Package.
[<a href="https://www.rfc-editor.org/rfc/rfc3992.html">RFC 3992</a>] Media Gateway Control Protocol (MGCP) Lockstep State Reporting Mechanism.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc2705.html">RFC 2705</a>] Media Gateway Control Protocol (MGCP) Version 1.0.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3435.html">RFC 3435</a>. 
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3660.html">RFC 3660</a>.
                		  </div>
		  
</section>


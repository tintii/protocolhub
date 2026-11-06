---
id: protocol-radius
slug: radius
name: RADIUS
expandedName: Remote Authentication Dial-In User Service
origin: historical
provenance:
  source: protocols/protocol_RADIUS.htm
  sha256: 9f3b51ce49d7c32a180aca25cf47d33fbad6c5f5922acce6d9b7fcbd1080dd09
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Remote Authentication Dial-In User Service
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Remote Authentication Dial-In User Service
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Application protocol
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.radiusMIB (1.3.6.1.2.1.67)
  - label: Ports
    html: |-
      1646 (UDP) obsolete
      <br />1812 (UDP) server
      <br />1813 (UDP) accounting
      <br />3799 dynamic authorization
  - label: Related protocols
    html: 'UDP,<br />CHAP,<br />RAP'
  - label: Working groups
    html: |-
      Aaa, Authentication, Authorization and Accounting
      <br />Radext, RADIUS Extensions
originalUpdate: '2005-11-10 16:08:36'
rfcs:
  - 2058
  - 2059
  - 2138
  - 2139
  - 2548
  - 2618
  - 2619
  - 2620
  - 2621
  - 2809
  - 2865
  - 2866
  - 2867
  - 2868
  - 2869
  - 2882
  - 2888
  - 2924
  - 2975
  - 3127
  - 3162
  - 3575
  - 3576
  - 3579
  - 3580
related:
  - protocol-udp
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

			Radius is a protocol for carrying authentication, authorization, and configuration information between a Network Access Server which desires to authenticate its links and a shared Authentication Server. RADIUS also carries accounting information between a Network Access Server and a shared Accounting Server. Radius uses UDP as the transport protocol.
<br /><b>Authentication, Authorization, and Accounting</b>
<br />Authentication is the process of identifying and verifying a user. Several methods can be used to authenticate a user, but the most common includes a combination of user name and password. Once a user is authenticated, authorization to various network resources and services can be granted. Authorization determines what a user can do, and accounting is the action of recording what a user is doing or has done.
<br />
<br />Managing dispersed serial line and modem pools for large numbers of users can create the need for significant administrative support. Since modem pools are by definition a link to the outside world, they require careful attention to security, authorization and accounting. This can be best achieved by managing a single "database" of users, which allows for authentication (verifying user name and password) as well as configuration information detailing the type of service to deliver to the user (for example, SLIP, PPP, telnet, rlogin).
<br />
<br /><b>Key features of RADIUS</b>
<br /><ul><li><b>Client/Server Model</b>
<br />A Network Access Server (NAS) operates as a client of RADIUS. The client is responsible for passing user information to designated RADIUS servers, and then acting on the response which is returned.<br /><br /></li>

<li><b>network Security</b>
<br />Transactions between the client and RADIUS server are authenticated through the use of a shared secret, which is never sent over the network.  In addition, any user passwords are sent encrypted between the client and RADIUS server, to eliminate the possibility that someone snooping on an unsecure network could determine a user's password.<br /><br /></li>

<li><b>Flexible Authentication Mechanisms</b>
<br />The RADIUS server can support a variety of methods to authenticate a user.  When it is provided with the user name and original password given by the user, it can support PPP PAP or CHAP, UNIX login, and other authentication mechanisms.<br /><br /></li>

<li><b>Extensible ProtocolM</b>
<br />All transactions are comprised of variable length Attribute- Length-Value 3-tuples.  New attribute values can be added without disturbing existing implementations of the protocol.</li></ul>
<br /><hr />
<br /><b>Operation</b>
<br />When a client is configured to use RADIUS, any user of the client presents authentication information to the client.  This might be with a customizable login prompt, where the user is expected to enter their username and password.  Alternatively, the user might use a link framing protocol such as the Point-to-Point Protocol (PPP), which has authentication packets which carry this information.
<br />
<br />Once the client has obtained such information, it may choose to authenticate using RADIUS. To do so, the client creates an "Access-Request" containing such Attributes as the user's name, the user's password, the ID of the client and the Port ID which the user is accessing.
<br />
<br />Once the RADIUS server receives the request, it validates the sending client. A request from a client for which the RADIUS server does not have a shared secret MUST be silently discarded.
<br />
<br /><ul><li><b>Challenge/Response</b>
<br />In challenge/response authentication, the user is given an unpredictable number and challenged to encrypt it and give back the result. Authorized users are equipped with special devices such as smart cards or software that facilitate calculation of the correct response with ease. Unauthorized users, lacking the appropriate device or software and lacking knowledge of the secret key necessary to emulate such a device or software, can only guess at the response.<br /><br /></li>

<li><b>Interoperation with PAP and CHAP</b>
<br />For PAP, the NAS takes the PAP ID and password and sends them in an Access-Request packet as the User-Name and User-Password. The NAS MAY include the Attributes Service-Type = Framed-User and Framed-Protocol = PPP as a hint to the RADIUS server that PPP service is expected.
<br />For CHAP, the NAS generates a random challenge (preferably 16 octets) and sends it to the user, who returns a CHAP response along with a CHAP ID and CHAP username.  The NAS then sends an Access-Request packet to the RADIUS server with the CHAP username as the User-Name and with the CHAP ID and CHAP response as the CHAP-Password.<br /><br /></li>

<li><b>Proxy</b>
<br />With proxy RADIUS, one RADIUS server receives an authentication (or accounting) request from a RADIUS client (such as a NAS), forwards the request to a remote RADIUS server, receives the reply from the remote server, and sends that reply to the client, possibly with changes to reflect local administrative policy. A common use for proxy RADIUS is roaming.  Roaming permits two or more administrative entities to allow each other's users to dial in to either entity's network for service.<br /><br /></li>

<li><b>Why UDP?</b>
<br />A frequently asked question is why RADIUS uses UDP instead of TCP as a transport protocol.  UDP was chosen for strictly technical reasons.
<br />RADIUS is a transaction based protocol which has several interesting characteristics:
<br /><ul><li>A copy of the request must be kept above the transport layer to allow for alternate transmission.<br /></li>
<li>The timing requirements of this particular protocol are significantly different than TCP provides.<br /></li>
<li>The stateless nature of this protocol simplifies the use of UDP.<br /></li>
<li>UDP simplifies the server implementation.</li></ul>
<br />
<br /></li><li><b>Retransmission Hints</b>
<br />If the RADIUS server and alternate RADIUS server share the same shared secret, it is OK to retransmit the packet to the alternate RADIUS server with the same ID and Request Authenticator, because the content of the attributes haven't changed.  If you want to use a new Request Authenticator when sending to the alternate server, you may.<br /><br /></li>

<li><b>Keep-Alives Considered Harmful</b>
<br />Some implementers have adopted the practice of sending test RADIUS requests to see if a server is alive. This practice is strongly discouraged, since it adds to load and harms scalability without providing any additional useful information. Since a RADIUS request is contained in a single datagram, in the time it would take you to send a ping you could just send the RADIUS request, and getting a reply tells you that the RADIUS server is up.</li></ul>
<br /><hr />
<br /><b>Packet Format</b>
<br />Header format 
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8 </p></td><td><p>16 </p></td><td><p>32 bits </p></td></tr><tr><td><p>Code</p></td><td><p>Identifier</p></td><td><p>Length</p></td></tr><tr><td colspan="3"><p>Authenticator<br /><br />¡¡</p><p> </p><p>Attributes</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>Code</b>
<br />8 bits. Identifies the type of RADIUS packet. If a packet is received with an invalid Code field, it is silently discarded.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Code</td><td>Description</td><td>References</td></tr><tr><td>1</td><td>Access-Request.</td><td>Access-Accept packets are sent by the RADIUS server, and provide specific configuration information necessary to begin delivery of service to the user.</td></tr><tr><td>2</td><td>Access-Accept.</td><td>The Identifier field is a copy of the Identifier field of the Access-Request which caused this Access-Accept.</td></tr><tr><td>3</td><td>Access-Reject.</td><td>If any value of the received Attributes is not acceptable, then the RADIUS server MUST transmit a packet with the Code field set to 3 (Access-Reject)</td></tr><tr><td>4</td><td>Accounting-Request.</td><td>Accounting-Request packets are sent from a client to a RADIUS accounting server, and convey information used to provide accounting for a service provided to a user.</td></tr><tr><td>5</td><td>Accounting-Response.</td><td>It is sent by the RADIUS accounting server to the client to acknowledge that the Accounting-Request has been received and recorded successfully.</td></tr><tr><td>6</td><td>Accounting-Status, Interim Accounting.</td><td>A RADIUS server issues an Access-Accept in response to a successful Access-Request.</td></tr><tr><td>7</td><td>Password-Request.</td><td> </td></tr><tr><td>8</td><td>Password-Ack.</td><td> </td></tr><tr><td>9</td><td>Password-Reject.</td><td> </td></tr><tr><td>10</td><td>Accounting-Message</td><td> </td></tr><tr><td>11</td><td>Access-Challenge.</td><td>If the RADIUS server desires to send the user a challenge requiring a response, then the RADIUS server MUST respond to the Access-Request by transmitting a packet with the Code field set to 11 (Access-Challenge).</td></tr><tr><td>12</td><td>Status-Server (experimental).</td><td> </td></tr><tr><td>13</td><td>Status-Client (experimental).</td><td> </td></tr><tr><td>14<br />-<br />20</td><td> </td><td> </td></tr><tr><td>21</td><td>Resource-Free-Request</td><td> </td></tr><tr><td>22</td><td>Resource-Free-Response</td><td> </td></tr><tr><td>23</td><td>Resource-Query-Request.</td><td> </td></tr><tr><td>24</td><td>Resource-Query-Response</td><td> </td></tr><tr><td>25</td><td>Alternate-Resource- Reclaim-Request.</td><td> </td></tr><tr><td>26</td><td>NAS-Reboot-Request</td><td> </td></tr><tr><td>27</td><td>NAS-Reboot-Response</td><td> </td></tr><tr><td>28</td><td> </td><td> </td></tr><tr><td>29</td><td>Next-Passcode.</td><td> </td></tr><tr><td>30</td><td>New-Pin.</td><td> </td></tr><tr><td>31</td><td>Terminate-Session.</td><td> </td></tr><tr><td>32</td><td>Password-Expired.</td><td> </td></tr><tr><td>33</td><td>Event-Request.</td><td> </td></tr><tr><td>34</td><td>Event-Response.</td><td> </td></tr><tr><td>35<br />-<br />39</td><td> </td><td> </td></tr><tr><td>40</td><td>Disconnect-Request.</td><td> </td></tr><tr><td>41</td><td>Disconnect-ACK.</td><td> </td></tr><tr><td>42</td><td>Disconnect-NAK.</td><td> </td></tr><tr><td>43</td><td>CoA-Request.</td><td> </td></tr><tr><td>44</td><td>CoA-ACK.</td><td> </td></tr><tr><td>45</td><td>CoA-NAK.</td><td> </td></tr><tr><td>46<br />-<br />49</td><td> </td><td> </td></tr><tr><td>50</td><td>IP-Address-Allocate.</td><td> </td></tr><tr><td>51</td><td>IP-Address-Release.</td><td> </td></tr><tr><td>52<br />-<br />249</td><td> </td><td> </td></tr><tr><td>250<br />-<br />253</td><td>Experimental use.</td><td> </td></tr><tr><td>254</td><td>Reserved.</td><td> </td></tr><tr><td>255</td><td>Reserved.</td><td> </td></tr></tbody></table></div></div><br /></li>
<li><b>Identifier</b>
<br />8 bits. Used to match RADIUS request and reply packets.<br /><br /></li>

<li><b>Length</b>
<br />16 bits. 20 to 4096. Indicates the length of the packet including the RADIUS header and Attribute fields. Bytes outside the range of the Length field should be treated as padding and should be ignored on reception. If the packet is shorter than the indicated length, it should be silently discarded.<br /><br /></li>

<li><b>Authenticator</b>
<br />16 bytes. Used to authenticate the reply from the RADIUS server and is used in the password hiding algorithm.<br /><br /></li>

<li><b>Attributes</b>
<br />Variable length. RADIUS Attributes carry the specific authentication, authorization and accounting details for the request and response. Some attributes MAY be included more than once. The effect of this is attribute specific, and is specified in each attribute description. The end of the list of attributes is indicated by the Length of the RADIUS packet.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32bit</p></td></tr><tr><td><p>Type</p></td><td><p>Length</p></td><td><p>Value</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Type</b> 
<br />8 bits.<br /><br /></li>

<li><b>Length</b> 
<br />8 bits. Indicates the length of this attribute including the Type, Length and Value fields. If an attribute is received in an Accounting-Request packet with an invalid Length, the entire request should be silently discarded.<br /><br /></li>

<li><b>Value</b> 
<br />Variable length. Contains information specific to the attribute. The format and length of this field is determined by the Type and Length fields. The format of the field can be one of the following data types:
<br /><ul><li><b>String:</b> 0 to 253 bytes.<br /></li>
<li><b>Address:</b> 32 bits, MSB.<br /></li>
<li><b>Integer:</b> 32 bits, MSB.<br /></li>
<li><b>Time:</b> 32 bits. seconds since 00:00:00 GMT, January 1, 1970.</li></ul></li></ul><br /><br /></li>

<li><b>The valid attributes:</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td>Type</td><td>Length</td><td>Description</td><td>References</td></tr><tr><td>1</td><td>&gt;= 3</td><td>User-Name.</td><td>The name of the user to be authenticated. It MUST be sent in Access-Request packets if available.</td></tr><tr><td>2</td><td>18 to 130</td><td>User-Password.</td><td>The password is first padded at the end with nulls to a multiple of 16 octets.</td></tr><tr><td>3</td><td>19</td><td>CHAP-Password.</td><td>The response value provided by a PPP Challenge-Handshake Authentication Protocol (CHAP) user in response to the challenge.</td></tr><tr><td>4</td><td>6</td><td>NAS-IP-Address.</td><td>The identifying IP Address of the NAS which is requesting authentication of the user, and SHOULD be unique to the NAS within the scope of the RADIUS server.</td></tr><tr><td>5</td><td>6</td><td>NAS-Port.</td><td>The physical port number of the NAS which is authenticating the user.</td></tr><tr><td>6</td><td>6</td><td>Service-Type.</td><td>The type of service the user has requested, or the type of service to be provided.</td></tr><tr><td>7</td><td>6</td><td>Framed-Protocol.</td><td>The framing to be used for framed access. It MAY be used in both Access-Request and Access-Accept packets.</td></tr><tr><td>8</td><td>6</td><td>Framed-IP-Address.</td><td>The address to be configured for the user.</td></tr><tr><td>9</td><td>6</td><td>Framed-IP-Netmask.</td><td>The IP netmask to be configured for the user when the user is a router to a network.  It MAY be used in Access-Accept packets.</td></tr><tr><td>10</td><td>6</td><td>Framed-Routing.</td><td>The routing method for the user, when the user is a router to a network.</td></tr><tr><td>11</td><td>&gt;= 3</td><td>Filter-Id.</td><td>The name of the filter list for this user. Zero or more Filter-Id attributes MAY be sent in an Access-Accept packet.</td></tr><tr><td>12</td><td>6</td><td>Framed-MTU.</td><td>The Maximum Transmission Unit to be configured for the user, when it is not negotiated by some other means (such as PPP).</td></tr><tr><td>13</td><td>6</td><td>Framed-Compression.</td><td>A compression protocol to be used for the link. It MAY be used in Access-Accept packets.</td></tr><tr><td>14</td><td>6</td><td>Login-IP-Host.</td><td>The system with which to connect the user, when the Login-Service Attribute is included.  It MAY be used in Access-Accept packets.</td></tr><tr><td>15</td><td>6</td><td>Login-Service.</td><td>The service to use to connect the user to the login host.</td></tr><tr><td>16</td><td>6</td><td>Login-TCP-Port.</td><td>The TCP port with which the user is to be connected, when the Login-Service Attribute is also present.</td></tr><tr><td>17</td><td> </td><td> </td><td> </td></tr><tr><td>18</td><td>&gt;= 3</td><td>Reply-Message.</td><td>The text which MAY be displayed to the user.</td></tr><tr><td>19</td><td>&gt;= 3</td><td>Callback-Number.</td><td>A dialing string to be used for callback. It MAY be used in Access-Accept packets.</td></tr><tr><td>20</td><td>&gt;= 3</td><td>Callback-Id.</td><td>The name of a place to be called, to be interpreted by the NAS.</td></tr><tr><td>21</td><td> </td><td> </td><td> </td></tr><tr><td>22</td><td>&gt;= 3</td><td>Framed-Route.</td><td>Provides routing information to be configured for the user on the NAS.</td></tr><tr><td>23</td><td>6</td><td>Framed-IPX-Network.</td><td>The IPX Network number to be configured for the user.</td></tr><tr><td>24</td><td>&gt;= 3</td><td>State.</td><td>It is sent by the server to the client in an Access-Challenge and MUST be sent unmodified from the client to the server in the new Access-Request reply to that challenge.</td></tr><tr><td>25</td><td>&gt;= 3</td><td>Class.</td><td>It is sent by the server to the client in a Access-Accept and SHOULD be sent unmodified by the client to the accounting server as part of the Accounting-Request packet if accounting is supported.</td></tr><tr><td>26</td><td>&gt;= 7</td><td>Vendor-Specific.</td><td>Allow vendors to support their own extended Attributes not suitable for general usage.</td></tr><tr><td>27</td><td>6</td><td>Session-Timeout.</td><td>The maximum number of seconds of service to be provided to the user before termination of the session or prompt.</td></tr><tr><td>28</td><td>6</td><td>Idle-Timeout.</td><td>The maximum number of consecutive seconds of idle connection allowed to the user before termination of the session or prompt.</td></tr><tr><td>29</td><td>6</td><td>Termination-Action.</td><td>What action the NAS should take when the specified service is completed.</td></tr><tr><td>30</td><td>&gt;= 3</td><td>Called-Station-Id.</td><td>Allows the NAS to send in the Access-Request packet the phone number that the user called.</td></tr><tr><td>31</td><td>&gt;= 3</td><td>Calling-Station-Id.</td><td>Allows the NAS to send in the Access-Request packet the phone number that the call came from.</td></tr><tr><td>32</td><td>&gt;= 3</td><td>NAS-Identifier.</td><td>A string identifying the NAS originating the Access-Request.</td></tr><tr><td>33</td><td>&gt;= 3</td><td>Proxy-State.</td><td>It is sent by a proxy server to another server when forwarding an Access-Request and MUST be returned unmodified in the Access-Accept, Access-Reject or Access-Challenge.</td></tr><tr><td>34</td><td>&gt;= 3</td><td>Login-LAT-Service.</td><td>The system with which the user is to be connected by LAT.</td></tr><tr><td>35</td><td>&gt;= 3</td><td>Login-LAT-Node.</td><td>The Node with which the user is to be automatically connected by LAT.</td></tr><tr><td>36</td><td>34</td><td>Login-LAT-Group.</td><td>A string identifying the LAT group codes which this user is authorized to use.</td></tr><tr><td>37</td><td>6</td><td>Framed-AppleTalk-Link.</td><td>The AppleTalk network number which should be used for the serial link to the user.</td></tr><tr><td>38</td><td>6</td><td>Framed-AppleTalk-Network.</td><td>The AppleTalk Network number which the NAS should probe to allocate an AppleTalk node for the user.</td></tr><tr><td>39</td><td>&gt;= 3</td><td>Framed-AppleTalk-Zone.</td><td>The AppleTalk Default Zone to be used for this user.</td></tr><tr><td>40</td><td>6</td><td>Acct-Status-Type.</td><td> </td></tr><tr><td>41</td><td>6</td><td>Acct-Delay-Time.</td><td> </td></tr><tr><td>42</td><td>6</td><td>Acct-Input-Octets.</td><td> </td></tr><tr><td>43</td><td>6</td><td>Acct-Output-Octets.</td><td> </td></tr><tr><td>44</td><td>&gt;= 3</td><td>Acct-Session-Id</td><td> </td></tr><tr><td>45</td><td>6</td><td>Acct-Authentic.</td><td> </td></tr><tr><td>46</td><td>6</td><td>Acct-Session-Time.</td><td> </td></tr><tr><td>47</td><td>6</td><td>Acct-Input-Packets.</td><td> </td></tr><tr><td>48</td><td>6</td><td>Acct-Output-Packets.</td><td> </td></tr><tr><td>49</td><td>6</td><td>Acct-Terminate-Cause.</td><td> </td></tr><tr><td>50</td><td>&gt;= 3</td><td>Acct-Multi-Session-Id.</td><td> </td></tr><tr><td>51</td><td>6</td><td>Acct-Link-Count.</td><td> </td></tr><tr><td>52</td><td>6</td><td>Acct-Input-Gigawords.</td><td>The times the Acct-Input-Octets counter has wrapped around 2-32 over the course of this service being provided.</td></tr><tr><td>53</td><td>6</td><td>Acct-Output-Gigawords.</td><td>The times the Acct-Output-Octets counter has wrapped around 2-32 in the course of delivering this service.</td></tr><tr><td>54</td><td> </td><td> </td><td> </td></tr><tr><td>55</td><td>6</td><td>Event-Timestamp.</td><td>The Accounting-Request packet to record the time that this event occurred on the NAS</td></tr><tr><td>56<br />-<br />59</td><td> </td><td> </td><td> </td></tr><tr><td>60</td><td>&gt;= 7</td><td>CHAP-Challenge.</td><td>The CHAP Challenge sent by the NAS to a PPP Challenge-Handshake Authentication Protocol (CHAP) user.</td></tr><tr><td>61</td><td>6</td><td>NAS-Port-Type.</td><td>The type of the physical port of the NAS which is authenticating the user.</td></tr><tr><td>62</td><td>6</td><td>Port-Limit.</td><td>The maximum number of ports to be provided to the user by the NAS.</td></tr><tr><td>63</td><td>&gt;= 3</td><td>Login-LAT-Port.</td><td>The Port with which the user is to be connected by LAT.</td></tr><tr><td>64</td><td>6</td><td>Tunnel-Type.</td><td>The tunneling protocol(s) to be used or the tunneling protocol in use.</td></tr><tr><td>65</td><td>6</td><td>Tunnel-Medium-Type.</td><td>The transport medium to use when creating a tunnel for those protocols.</td></tr><tr><td>66</td><td>&gt;= 3</td><td>Tunnel-Client-Endpoint.</td><td>The address of the initiator end of the tunnel.</td></tr><tr><td>67</td><td>&gt;= 3</td><td>Tunnel-Server-Endpoint.</td><td>The address of the server end of the tunnel.</td></tr><tr><td>68</td><td> </td><td>Acct-Tunnel-Connection.</td><td> </td></tr><tr><td>69</td><td>&gt;= 5</td><td>Tunnel-Password.</td><td>The password is used to authenticate to a remote server.</td></tr><tr><td>70</td><td>18</td><td>ARAP-Password.</td><td>It is present in an Access-Request packet containing a Framed-Protocol of ARAP.</td></tr><tr><td>71</td><td>16</td><td>ARAP-Features.</td><td>It is sent in an Access-Accept packet with Framed- Protocol of ARAP, and includes password information that the NAS should sent to the user in an ARAP "feature flags" packet.</td></tr><tr><td>72</td><td>6</td><td>ARAP-Zone-Access.</td><td>How the ARAP zone list for the user should be used.</td></tr><tr><td>73</td><td>6</td><td>ARAP-Security.</td><td>The ARAP Security Module to be used in an Access-Challenge packet.</td></tr><tr><td>74</td><td>&gt;= 3</td><td>ARAP-Security-Data.</td><td>The actual security module challenge or response</td></tr><tr><td>75</td><td>6</td><td>Password-Retry.</td><td>The times of authentication attempts a user may be allowed to attempt before being disconnected.</td></tr><tr><td>76</td><td>6</td><td>Prompt.</td><td>The NAS whether it should echo the user's response as it is entered, or not echo it.</td></tr><tr><td>77</td><td>&gt;= 3</td><td>Connect-Info.</td><td>The nature of the user's connection.</td></tr><tr><td>78</td><td>&gt;= 3</td><td>Configuration-Token.</td><td>Use in large distributed authentication networks based on proxy.</td></tr><tr><td>79</td><td>&gt;= 3</td><td>EAP-Message.</td><td>Allow the NAS to authenticate dial-in users via EAP without having to understand the EAP protocol.</td></tr><tr><td>80</td><td>18</td><td>Message-Authenticator.</td><td>Sign Access-Requests to prevent spoofing Access-Requests using CHAP, ARAP or EAP authentication methods.</td></tr><tr><td>81</td><td>&gt;= 3</td><td>Tunnel-Private-Group-ID.</td><td>The group ID for a particular tunneled session.</td></tr><tr><td>82</td><td>&gt;= 3</td><td>Tunnel-Assignment-ID.</td><td>The tunnel initiator the particular tunnel to which a session is to be assigned.</td></tr><tr><td>83</td><td>6</td><td>Tunnel-Preference.</td><td>The relative preference assigned to each tunnel if more than one set of tunneling attributes is returned by the RADIUS server to the tunnel initiator.</td></tr><tr><td>84</td><td>10</td><td>ARAP-Challenge-Response.</td><td>It is sent in an Access-Accept packet with Framed- Protocol of ARAP, and contains the response to the dial-in client's challenge.</td></tr><tr><td>85</td><td>6</td><td>Acct-Interim-Interval.</td><td>The number of seconds between each interim update in seconds for this specific session.</td></tr><tr><td>86</td><td> </td><td>Acct-Tunnel-Packets-Lost.</td><td> </td></tr><tr><td>87</td><td>&gt;= 3</td><td>NAS-Port-Id.</td><td>A text string which identifies the port of the NAS which is authenticating the user.</td></tr><tr><td>88</td><td>&gt;= 3</td><td>Framed-Pool.</td><td>The name of an assigned address pool that SHOULD be used to assign an address for the user.</td></tr><tr><td>89</td><td> </td><td> </td><td> </td></tr><tr><td>90</td><td>&gt;= 3</td><td>Tunnel-Client-Auth-ID.</td><td>The name used by the tunnel initiator during the authentication phase of tunnel establishment.</td></tr><tr><td>91</td><td>&gt;= 3</td><td>Tunnel-Server-Auth-ID.</td><td>The name used by the tunnel terminator during the authentication phase of tunnel establishment.</td></tr><tr><td>92<br />93</td><td> </td><td> </td><td> </td></tr><tr><td>94</td><td> </td><td>Originating-Line-Info.</td><td> </td></tr><tr><td>95</td><td>18</td><td>NAS-IPv6-Address.</td><td>The identifying IPv6 Address of the NAS which is requesting authentication of the user, and SHOULD be unique to the NAS within the scope of the RADIUS server.</td></tr><tr><td>96</td><td>10</td><td>Framed-Interface-Id.</td><td>The IPv6 interface identifier to be configured for the user.</td></tr><tr><td>97</td><td>4 to 20</td><td>Framed-IPv6-Prefix.</td><td>The IPv6 prefix to be configured for the user.</td></tr><tr><td>98</td><td>18</td><td>Login-IPv6-Host.</td><td>The system with which to connect the user, when the Login-Service Attribute is included.</td></tr><tr><td>99</td><td>&gt;= 3</td><td>Framed-IPv6-Route.</td><td>Routing information to be configured for the user on the NAS.</td></tr><tr><td>100</td><td>&gt;= 3</td><td>Framed-IPv6-Pool.</td><td>The name of an assigned pool that SHOULD be used to assign an IPv6 prefix for the user.</td></tr><tr><td>101</td><td> </td><td>Error-Cause Attribute.</td><td> </td></tr><tr><td>102<br />-<br />191</td><td> </td><td> </td><td> </td></tr><tr><td>192<br />-<br />223</td><td> </td><td>Experimental.</td><td> </td></tr><tr><td>224<br />-<br />240</td><td> </td><td>Implementation specific.</td><td> </td></tr><tr><td>241<br />-<br />255</td><td> </td><td>Reserved.</td><td> </td></tr></tbody></table></div></div></li></ul><hr />
<br /><b>Packet Types</b>
<br />The RADIUS Packet type is determined by the Code field in the first octet of the Packet.
<br /><ul><li><b>Access-Request</b>
<br />Access-Request packets are sent to a RADIUS server, and convey information used to determine whether a user is allowed access to a specific NAS, and any special services requested for that user. An implementation wishing to authenticate a user MUST transmit a RADIUS packet with the Code field set to 1 (Access-Request).
<br />An Access-Request SHOULD contain a User-Name attribute. It MUST contain either a NAS-IP-Address attribute or a NAS-Identifier attribute (or both).<br /><br /></li>

<li><b>Access-Accept</b>
<br />Access-Accept packets are sent by the RADIUS server, and provide specific configuration information necessary to begin delivery of service to the user. If all Attribute values received in an Access-Request are acceptable then the RADIUS implementation MUST transmit a packet with the Code field set to 2 (Access-Accept).<br /><br /></li>

<li><b>Access-Reject</b>
<br />If any value of the received Attributes is not acceptable, then the RADIUS server MUST transmit a packet with the Code field set to 3 (Access-Reject). It MAY include one or more Reply-Message Attributes with a text message which the NAS MAY display to the user.<br /><br /></li>

<li><b>Access-Challenge</b>
<br />If the RADIUS server desires to send the user a challenge requiring a response, then the RADIUS server MUST respond to the Access-Request by transmitting a packet with the Code field set to 11 (Access-Challenge).
<br />The Attributes field MAY have one or more Reply-Message Attributes, and MAY have a single State Attribute, or none. Vendor-Specific, Idle-Timeout, Session-Timeout and Proxy-State attributes MAY also be included.  No other Attributes defined in this document are permitted in an Access-Challenge.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: User Telnet to Specified Host</b>

The NAS at 192.168.1.16 sends an Access-Request UDP packet to the RADIUS Server for a 
user named nemo logging in on port 3 with password "arctangent". The Request 
Authenticator is a 16 octet random number generated by the NAS.The User-Password is 16 
octets of password padded at end with nulls, XORed with MD5(shared secret|Request 
Authenticator).

          01 00 00 38 0f 40 3f 94 73 97 80 57 bd 83 d5 cb
          98 f4 22 7a 01 06 6e 65 6d 6f 02 12 0d be 70 8d
          93 d4 13 ce 31 96 e4 3f 78 2a 0a ee 04 06 c0 a8
          01 10 05 06 00 00 00 03

           1 Code = Access-Request (1)
           1 ID = 0
           2 Length = 56
          16 Request Authenticator

          Attributes:
           6  User-Name = "nemo"
          18  User-Password
           6  NAS-IP-Address = 192.168.1.16
           6  NAS-Port = 3

The RADIUS server authenticates nemo, and sends an Access-Accept UDP packet to the 
NAS telling it to telnet nemo to host 192.168.1.3.

The Response Authenticator is a 16-octet MD5 checksum of the code (2), id (0), Length 
(38), the Request Authenticator from above, the attributes in this reply, and the 
shared secret.

          02 00 00 26 86 fe 22 0e 76 24 ba 2a 10 05 f6 bf
          9b 55 e0 b2 06 06 00 00 00 01 0f 06 00 00 00 00
          0e 06 c0 a8 01 03

           1 Code = Access-Accept (2)
           1 ID = 0 (same as in Access-Request)
           2 Length = 38
          16 Response Authenticator

          Attributes:
           6  Service-Type (6) = Login (1)
           6  Login-Service (15) = Telnet (0)
           6  Login-IP-Host (14) = 192.168.1.3</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Framed User Authenticating with CHAP</b>

The NAS at 192.168.1.16 sends an Access-Request UDP packet to the RADIUS Server for a 
user named flopsy logging in on port 20 with PPP, authenticating using CHAP. The NAS 
sends along the Service-Type and Framed-Protocol attributes as a hint to the RADIUS 
server that this user is looking for PPP, although the NAS is not required to do so.

The Request Authenticator is a 16 octet random number generated by the NAS, and is 
also used as the CHAP Challenge.The CHAP-Password consists of a 1 octet CHAP ID, in 
this case 22, followed by the 16 octet CHAP response.

          01 01 00 47 2a ee 86 f0 8d 0d 55 96 9c a5 97 8e
          0d 33 67 a2 01 08 66 6c 6f 70 73 79 03 13 16 e9
          75 57 c3 16 18 58 95 f2 93 ff 63 44 07 72 75 04
          06 c0 a8 01 10 05 06 00 00 00 14 06 06 00 00 00
          02 07 06 00 00 00 01

           1 Code = 1     (Access-Request)
           1 ID = 1
           2 Length = 71
          16 Request Authenticator

          Attributes:
           8  User-Name (1) = "flopsy"
          19  CHAP-Password (3)
           6  NAS-IP-Address (4) = 192.168.1.16
           6  NAS-Port (5) = 20
           6  Service-Type (6) = Framed (2)
           6  Framed-Protocol (7) = PPP (1)

The RADIUS server authenticates flopsy, and sends an Access-Accept UDP packet to the 
NAS telling it to start PPP service and assign an address for the user out of its 
dynamic address pool.

The Response Authenticator is a 16-octet MD5 checksum of the code (2), id (1), Length 
(56), the Request Authenticator from above, the attributes in this reply, and the 
shared secret.

          02 01 00 38 15 ef bc 7d ab 26 cf a3 dc 34 d9 c0
          3c 86 01 a4 06 06 00 00 00 02 07 06 00 00 00 01
          08 06 ff ff ff fe 0a 06 00 00 00 02 0d 06 00 00
          00 01 0c 06 00 00 05 dc

           1 Code = Access-Accept (2)
           1 ID = 1 (same as in Access-Request)
           2 Length = 56
          16 Response Authenticator

          Attributes:
           6  Service-Type (6) = Framed (2)
           6  Framed-Protocol (7) = PPP (1)
           6  Framed-IP-Address (8) = 255.255.255.254
           6  Framed-Routing (10) = None (0)
           6  Framed-Compression (13) = VJ TCP/IP Header Compression (1)
           6  Framed-MTU (12) = 1500</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: User with Challenge-Response card</b>

The NAS at 192.168.1.16 sends an Access-Request UDP packet to the RADIUS Server for 
a user named mopsy logging in on port 7. The user enters the dummy password "challenge" 
in this example. The challenge and response generated by the smart card for this 
example are "32769430" and "99101462".

The Request Authenticator is a 16 octet random number generated by the NAS.

The User-Password is 16 octets of password, in this case "challenge", padded at the 
end with nulls, XORed with MD5(shared secret|Request Authenticator).

          01 02 00 39 f3 a4 7a 1f 6a 6d 76 71 0b 94 7a b9
          30 41 a0 39 01 07 6d 6f 70 73 79 02 12 33 65 75
          73 77 82 89 b5 70 88 5e 15 08 48 25 c5 04 06 c0
          a8 01 10 05 06 00 00 00 07
           1 Code = Access-Request (1)
           1 ID = 2
           2 Length = 57
          16 Request Authenticator

          Attributes:
           7 User-Name (1) = "mopsy"
          18 User-Password (2)
           6  NAS-IP-Address (4) = 192.168.1.16
           6  NAS-Port (5) = 7

The RADIUS server decides to challenge mopsy, sending back a challenge string and 
looking for a response. The RADIUS server therefore and sends an Access-Challenge 
UDP packet to the NAS.

The Response Authenticator is a 16-octet MD5 checksum of the code (11), id (2), 
length (78), the Request Authenticator from above, the attributes in this reply, and 
the shared secret.

The Reply-Message is "Challenge 32769430.  Enter response at prompt."

The State is a magic cookie to be returned along with user's response; in this example 
8 octets of data (33 32 37 36 39 34 33 30 in hex).

      0b 02 00 4e 36 f3 c8 76 4a e8 c7 11 57 40 3c 0c
      71 ff 9c 45 12 30 43 68 61 6c 6c 65 6e 67 65 20
      33 32 37 36 39 34 33 30 2e 20 20 45 6e 74 65 72
      20 72 65 73 70 6f 6e 73 65 20 61 74 20 70 72 6f
      6d 70 74 2e 18 0a 33 32 37 36 39 34 33 30

       1 Code = Access-Challenge (11)
       1 ID = 2 (same as in Access-Request)
       2 Length = 78
      16 Response Authenticator

      Attributes:
      48  Reply-Message (18)
      10  State (24)

The user enters his response, and the NAS send a new Access-Request with that 
response, and includes the State Attribute.

The Request Authenticator is a new 16 octet random number.

The User-Password is 16 octets of the user's response, in this case "99101462", padded 
at the end with nulls, XORed with MD5(shared secret|Request Authenticator). The state 
is the magic cookie from the Access-Challenge packet, unchanged.

          01 03 00 43 b1 22 55 6d 42 8a 13 d0 d6 25 38 07
          c4 57 ec f0 01 07 6d 6f 70 73 79 02 12 69 2c 1f
          20 5f c0 81 b9 19 b9 51 95 f5 61 a5 81 04 06 c0
          a8 01 10 05 06 00 00 00 07 18 10 33 32 37 36 39
          34 33 30

           1 Code = Access-Request (1)
           1 ID = 3 (Note that this changes.)
           2 Length = 67
          16 Request Authenticator

          Attributes:
           7  User-Name = "mopsy"
          18  User-Password
           6  NAS-IP-Address (4) = 192.168.1.16
           6  NAS-Port (5) = 7
          10  State (24)

The Response was incorrect (for the sake of example), so the RADIUS server tells the 
NAS to reject the login attempt.

The Response Authenticator is a 16 octet MD5 checksum of the code (3), id (3), 
length(20), the Request Authenticator from above, the attributes in this reply (in this 
case, none), and the shared secret.

          03 03 00 14 a4 2f 4f ca 45 91 6c 4e 09 c8 34 0f
          9e 74 6a a0

           1 Code = Access-Reject (3)
           1 ID = 3 (same as in Access-Request)
           2 Length = 20
          16 Response Authenticator

          Attributes: (none, although a Reply-Message could be sent)</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>RADIUS</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Access-Accept</b><br />Access-Accept packets are sent by the RADIUS server, and provide specific configuration information necessary to begin delivery of service to the user.  If all Attribute values received in an Access-Request are acceptable then the RADIUS implementation MUST transmit a packet with the Code field set to 2 (Access-Accept).
<br />
<br />On reception of an Access-Accept, the Identifier field is matched with a pending Access-Request.  The Response Authenticator field MUST contain the correct response for the pending Access-Request. Invalid packets are silently discarded.<br /><br /><b>Access-Challenge</b><br />If the RADIUS server desires to send the user a challenge requiring a response, then the RADIUS server MUST respond to the Access-Request by transmitting a packet with the Code field set to 11 (Access-Challenge).  The Attributes field MAY have one or more Reply-Message Attributes, and MAY have a single State Attribute, or none. On receipt of an Access-Challenge, the Identifier field is matched with a pending Access-Request.
<br />
<br />If the NAS does not support challenge/response, it MUST treat an Access-Challenge as though it had received an Access-Reject instead.
<br />
<br />If the NAS supports challenge/response, receipt of a valid Access-Challenge indicates that a new Access-Request SHOULD be sent.<br /><br /><b>Access-Reject</b><br />If any value of the received Attributes is not acceptable, then the RADIUS server MUST transmit a packet with the Code field set to 3 (Access-Reject). It MAY include one or more Reply-Message Attributes with a text message which the NAS MAY display to the user.<br /><br /><b>Access-Request</b><br />Access-Request packets are sent to a RADIUS server, and convey information used to determine whether a user is allowed access to a specific NAS, and any special services requested for that user. An implementation wishing to authenticate a user MUST transmit a RADIUS packet with the Code field set to 1 (Access-Request).
<br />
<br />Upon receipt of an Access-Request from a valid client, an appropriate reply MUST be transmitted.
<br />
<br />An Access-Request SHOULD contain a User-Name attribute. An Access-Request MUST contain either a User-Password or a CHAP-Password or a State. An Access-Request SHOULD contain a NAS-Port or NAS-Port-Type attribute or both unless the type of access being requested does not involve a port or the NAS does not distinguish among its ports.<br /><br /><b>NAS</b><br />NAS (Netnews Administration System) is based on a database which contains information about certain groups and hierarchies. This database is structured in a hierarchical manner, distributed to various servers and is able to receive queries at any time.	The service is comparable to directory services like DNS, LDAP or	NIS. The NAS protocol is inspired by protocols like NNTP and SMTP. The port 991 is reserved for NAS and registered by the Internet Assigned Number Authority(IANA).<br /><br /><b>PPP</b><br />PPP(Point-to-Point Protocol) is a method of connecting a computer to the Internet. PPP is more stable than the older SLIP protocol and provides error checking features. Working in the data link layer of the OSI model, PPP sends the computer's TCP/IP packets to a server that puts them onto the Internet. <br /><br /><b>Service</b><br />The NAS provides a service to the dial-in user, such as PPP or Telnet.<br /><br /><b>Session</b><br />The session of activity that a user with a unique IP address spends on a Web site during a specified period of time. The number of user sessions on a site is used in measuring the amount of traffic a Web site gets. The site administrator determines what the time frame of a user session will be (e.g., 30 minutes).
<br />
<br />If the visitor comes back to the site within that time period, it is still considered one user session because any number of visits within that 30 minutes will only count as one session. If the visitor returns to the site after the allotted time period has expired, say an hour from the initial visit, then it is counted as a separate user session.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.iana.org/assignments/radius-types">Radius types</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2548.html">RFC 2548</a>] Microsoft Vendor-specific RADIUS Attributes.
[<a href="https://www.rfc-editor.org/rfc/rfc2618.html">RFC 2618</a>] RADIUS Authentication Client MIB.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.radiusMIB (1.3.6.1.2.1.67). 
[<a href="https://www.rfc-editor.org/rfc/rfc2619.html">RFC 2619</a>] RADIUS Authentication Server MIB.
[<a href="https://www.rfc-editor.org/rfc/rfc2620.html">RFC 2620</a>] RADIUS Accounting Client MIB.
[<a href="https://www.rfc-editor.org/rfc/rfc2621.html">RFC 2621</a>] RADIUS Accounting Server MIB.
[<a href="https://www.rfc-editor.org/rfc/rfc2809.html">RFC 2809</a>] Implementation of L2TP Compulsory Tunneling via RADIUS.
[<a href="https://www.rfc-editor.org/rfc/rfc2865.html">RFC 2865</a>] Remote Authentication Dial In User Service (RADIUS).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2138.html">RFC 2138</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2866.html">RFC 2866</a>] RADIUS Accounting.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2139.html">RFC 2139</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2867.html">RFC 2867</a>] RADIUS Accounting Modifications for Tunnel Protocol Support.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2866.html">RFC 2866</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2868.html">RFC 2868</a>] RADIUS Attributes for Tunnel Protocol Support.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2865.html">RFC 2865</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2869.html">RFC 2869</a>] RADIUS Extensions.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3579.html">RFC 3579</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2882.html">RFC 2882</a>] Network Access Servers Requirements: Extended RADIUS Practices.
[<a href="https://www.rfc-editor.org/rfc/rfc2888.html">RFC 2888</a>] Secure Remote Access with L2TP.
[<a href="https://www.rfc-editor.org/rfc/rfc2924.html">RFC 2924</a>] Accounting Attributes and Record Formats.
[<a href="https://www.rfc-editor.org/rfc/rfc2975.html">RFC 2975</a>] Introduction to Accounting Management.
[<a href="https://www.rfc-editor.org/rfc/rfc3127.html">RFC 3127</a>] Authentication, Authorization, and Accounting: Protocol Evaluation.
[<a href="https://www.rfc-editor.org/rfc/rfc3162.html">RFC 3162</a>] RADIUS and IPv6.
[<a href="https://www.rfc-editor.org/rfc/rfc3575.html">RFC 3575</a>] IANA Considerations for RADIUS (Remote Authentication Dial In User Service).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2865.html">RFC 2865</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3576.html">RFC 3576</a>] Dynamic Authorization Extensions to Remote Authentication Dial In User Service (RADIUS).
[<a href="https://www.rfc-editor.org/rfc/rfc3579.html">RFC 3579</a>] RADIUS (Remote Authentication Dial In User Service) Support For Extensible Authentication Protocol (EAP).
                Defines RADIUS attributes 79 (EAP-Message) and 80 for (Message-Authenticator). 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2869.html">RFC 2869</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3580.html">RFC 3580</a>] IEEE 802.1X Remote Authentication Dial In User Service (RADIUS) Usage Guidelines.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc2058.html">RFC 2058</a>] Remote Authentication Dial In User Service (RADIUS).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2138.html">RFC 2138</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2059.html">RFC 2059</a>] RADIUS Accounting.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2139.html">RFC 2139</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2138.html">RFC 2138</a>] Remote Authentication Dial In User Service (RADIUS).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2865.html">RFC 2865</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2058.html">RFC 2058</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2139.html">RFC 2139</a>] RADIUS Accounting.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2866.html">RFC 2866</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2059.html">RFC 2059</a>.<hr /><b>Publications:</b>
[ISBN 0596003226] Radius.
                Publisher: O'Reilly &amp; Associates. 
                Author: Hassell, Jonathan
                		  </div>
		  
</section>


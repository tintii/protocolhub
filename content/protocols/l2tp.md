---
id: protocol-l2tp
slug: l2tp
name: L2TP
expandedName: Layer Two Tunneling Protocol
origin: historical
provenance:
  source: protocols/protocol_L2TP.htm
  sha256: 4cd07a45388832333c60dfc0bea15d8ec7a44cc46db853dc5994d2f7444ed83f
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Layer Two Tunneling Protocol
layers:
  - Data Link Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Layer Two Tunneling Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Data Link Layer
  - label: Type
    html: Application layer tunneling protocol
  - label: Ports
    html: ' 1701 (UDP)'
  - label: Related protocols
    html: L2F
  - label: Working groups
    html: |-
      L2tpext, Layer Two Tunneling Protocol Extensions
      <br />Pppext, Point-to-Point Protocol Extensions.
originalUpdate: '2006-01-12 14:04:33'
rfcs:
  - 2661
  - 2809
  - 2888
  - 3070
  - 3145
  - 3193
  - 3301
  - 3308
  - 3355
  - 3371
  - 3437
  - 3438
  - 3573
  - 3817
  - 3931
  - 4045
related: []
glossary: []
sections:
  - id: description
    title: Description
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

			The Layer 2 Tunnel Protocol (L2TP) is an emerging Internet Engineering Task Force (IETF) standard that combines the best features of two existing tunneling protocols: Cisco's Layer 2 Forwarding (L2F) and Microsoft's Point-to-Point Tunneling Protocol (PPTP). L2TP is an extension to the Point-to-Point Protocol (PPP), which is an important component for VPNs. VPNs allow users and telecommuters to connect to their corporate intranets or extranets. VPNs are cost-effective because users can connect to the Internet locally and tunnel back to connect to corporate resources. This not only reduces overhead costs associated with traditional remote access methods, but also improves flexibility and scalability.
<br />
<br />L2TP uses packet-switched network connections to make it possible for the endpoints to be located on different machines. The user has an L2 connection to an access concentrator, which then tunnels individual PPP frames to the NAS, so that the packets can be processed separately from the location of the circuit termination. This means that the connection can terminate at a local circuit concentrator, eliminating possible long-distance charges, among other benefits. From the user's point of view, there is no difference in the operation.
<br /><hr />
<br /><b>Topology</b>
<br />The following diagram depicts a typical L2TP scenario. The goal is to tunnel PPP frames between the Remote System or LAC Client and LNS located at a Home LAN.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">                                                         [Home LAN]
                 [LAC Client]----------+                     |
                                   ____|_____                +--[Host]
                                  |          |               |
                    [LAC]---------| Internet |-----[LNS]-----+
                      |           |__________|               |
                 _____|_____                                 :
                |           |
                |  PSTN     |
      [Remote]--|  Cloud    |
      [System]  |           |                            [Home LAN]
                |___________|                                |
                      |          ______________              +---[Host]
                      |         |              |             |
                    [LAC]-------| Frame Relay  |---[LNS]-----+
                                | or ATM Cloud |             |
                                |______________|             :
Figure 1</pre>
<br />The Remote System initiates a PPP connection across the PSTN Cloud to an LAC. The LAC then tunnels the PPP connection across the Internet, Frame Relay, or ATM Cloud to LNS whereby access to a Home LAN is obtained. The Remote System is provided addresses from the home LAN via PPP NCP negotiation. Authentication, Authorization and Accounting may be provided by the home LAN's Management Domain as if the user were connected to a Network Access Server directly.
<br />
<br />A LAC Client (a Host which runs L2TP natively) may also participate in tunneling to the Home LAN without use of a separate LAC. In this case, the Host containing the LAC Client software already has a connection to the public Internet. A "virtual" PPP connection is then created and the local L2TP LAC Client software creates a tunnel to the LNS. As in the above case, Addressing, Authentication, Authorization and Accounting will be provided by the Home LAN's Management Domain.
<br />
<br /><b>Protocol Overview</b>
<br />L2TP utilizes two types of messages, control messages and data messages. Control messages are used in the establishment, maintenance and clearing of tunnels and calls. Data messages are used to encapsulate PPP frames being carried over the tunnel. Control messages utilize a reliable Control Channel within L2TP to guarantee delivery. Data messages are not retransmitted when packet loss occurs.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">          +-------------------+
          | PPP Frames        |
          +-------------------+    +-----------------------+
          | L2TP Data Messages|    | L2TP Control Messages |
          +-------------------+    +-----------------------+
          | L2TP Data Channel |    | L2TP Control Channel  |
          | (unreliable)      |    | (reliable)            |
          +------------------------------------------------+
          |      Packet Transport (UDP, FR, ATM, etc.)     |
          +------------------------------------------------+

Figure 2 L2TP Protocol Structure</pre>
<br />Figure 2 depicts the relationship of PPP frames and Control Messages over the L2TP Control and Data Channels. PPP Frames are passed over an unreliable Data Channel encapsulated first by an L2TP header and then a packet transport such as UDP, Frame Relay, ATM, etc. Control messages are sent over a reliable L2TP Control Channel which transmits packets in-band over the same packet transport.
<br />
<br />Sequence numbers are required to be present in all control messages and are used to provide reliable delivery on the Control Channel. Data Messages may use sequence numbers to reorder packets and detect lost packets.
<br /><hr />
<br /><b>L2TP Header Format</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td colspan="12"><p>8</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>T</p></td><td><p>L</p></td><td><p>X</p></td><td><p>X</p></td><td><p>S</p></td><td><p>X</p></td><td><p>O</p></td><td><p>P</p></td><td><p>X</p></td><td><p>X</p></td><td><p>X</p></td><td><p>X</p></td><td><p>VER</p></td><td><p>Length</p></td></tr><tr><td colspan="13"><p>Tunnel ID</p></td><td><p>SESSION ID</p></td></tr><tr><td colspan="13"><p>Ns</p></td><td><p>Nr</p></td></tr><tr><td colspan="13"><p>Offset size (opt)</p></td><td><p>Offset pad (opt)</p></td></tr><tr><td colspan="14"><p>Data</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>T</b>
<br />The T bit indicates the type of message. It is set to 0 for data messages and 1 for control messages.<br /><br /></li>

<li><b>L</b>
<br />When set, this indicates that the Length field is present, indicating the total length of the received packet. Must be set for control messages.<br /><br /></li>

<li><b>X</b>
<br />The X bits are reserved for future extensions. All reserved bits are set to 0 on outgoing messages and are ignored on incoming messages.<br /><br /></li>

<li><b>S</b>
<br />If the S bit is set, both the Nr and Ns fields are present. S must be set for control messages.<br /><br /></li>

<li><b>O</b>
<br />When set, this field indicates that the Offset Size field is present in payload messages. This bit is set to 0 for control messages.<br /><br /></li>

<li><b>P</b>
<br />If the Priority (P) bit is 1, this data message receives preferential treatment in its local queuing and transmission. LCP echo requests used as a keepalive for the link, for instance, are generally sent with this bit set to 1. Without it, a temporary interval of local congestion could result in interference with keepalive messages and unnecessary loss of the link. This feature is only for use with data messages. The P bit has a value of 0 for all control messages.<br /><br /></li>

<li><b>Ver</b>
<br />The value of the ver bit is always 002. This indicates a version 1 L2TP message.<br /><br /></li>

<li><b>Length</b>
<br />Overall length of the message, including header, message type AVP, plus any additional AVP's associated with a given control message type.<br /><br /></li>

<li><b>Tunnel ID</b>
<br />Identifies the tunnel to which a control message applies. If an Assigned Tunnel ID has not yet been received from the peer, Tunnel ID must be set to 0. Once an Assigned Tunnel ID is received, all further packets must be sent with Tunnel ID set to the indicated value.<br /><br /></li>

<li><b>Call ID</b>
<br />Identifies the user session within a tunnel to which a control message applies. If a control message does not apply to a single user session within the tunnel (for instance, a Stop-Control-Connection-Notification message), Call ID must be set to 0.<br /><br /></li>

<li><b>Nr</b>
<br />Indicates the sequence number expected in the next control message to be received. Thus, Nr is set to the Ns of the last in-order message received plus one (modulo 2**16). In data messages, Nr is reserved and, if present (as indicated by the S bit), MUST be ignored upon receipt.<br /><br /></li>

<li><b>Ns</b>
<br />Indicates the sequence number for this data or control message, beginning at zero and incrementing by one (modulo 2**16) for each message sent.<br /><br /></li>

<li><b>Offset size</b>
<br />This field specifies the number of bytes past the L2TP header at which the payload data is expected to start. It is recommended that data thus skipped be initialized to 0s. If the offset size is 0, or the O bit is not set, the first byte following the last byte of the L2TP header is the first byte of payload data.<br /><br /></li>

<li><b>AVP, Attribute Value Pair</b>
<br />The variable length concatenation of a unique Attribute (represented by an integer) and a Value containing the actual value identified by the attribute. Multiple AVPs make up Control Messages which are used in the establishment, maintenance, and teardown of tunnels.<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td colspan="6"><p>6</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>M</p></td><td><p>H</p></td><td><p>O</p></td><td><p>O</p></td><td><p>O</p></td><td><p>O</p></td><td><p>AVP length</p></td><td><p>AVP Vendor ID</p></td></tr><tr><td colspan="7"><p>AVP Type</p></td><td><p>AVP Value</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>M, Mandatory</b>
<br />Controls the behavior required of an implementation which receives an AVP which it does not recognize. If the M bit is set on an unrecognized AVP within a message associated with a particular session, the session associated with this message MUST be terminated. If the M bit is set on an unrecognized AVP within a message associated with the overall tunnel, the entire tunnel (and all sessions within) MUST be terminated. If the M bit is not set, an unrecognized AVP MUST be ignored. The control message must then continue to be processed as if the AVP had not been present.<br /><br /></li>

<li><b>H, Hidden</b>
<br />Identifies the hiding of data in the Attribute Value field of an AVP. This capability can be used to avoid the passing of sensitive data, such as user passwords, as cleartext in an AVP.<br /><br /></li>

<li><b>AVP Length</b>
<br />The number of bytes contained in this AVP. The length is calculated as 6 + the length of the Attribute Value field in bytes. If the length is 6, then the AVP Value field is absent.<br /><br /></li>

<li><b>AVP Vendor ID</b>
<br />The IANA assigned "SMI Network Management Private Enterprise Codes" value. The value 0, corresponding to IETF adopted attribute values, is used for all AVPs defined within this document. Any vendor wishing to implement their own L2TP extensions can use their own Vendor ID along with private Attribute values, guaranteeing that they will not collide with any other vendor's extensions, nor with future IETF extensions.<br /><br /></li>

<li><b>AVP Type</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>Type</p></td><td><p>Description</p></td><td><p>References</p></td></tr><tr><td><p>0</p></td><td><p>Message Type</p></td><td><p>Identifies the control message herein and defines the context in which the exact meaning of the AVPs.</p></td></tr><tr><td><p>1</p></td><td><p>Result Code</p></td><td><p>Indicates the reason for terminating the control channel or session.</p></td></tr><tr><td><p>2</p></td><td><p>Protocol Version</p></td><td><p>Indicates the L2TP protocol version of the sender.</p></td></tr><tr><td><p>3</p></td><td><p>Framing Capabilities</p></td><td><p>Provides the peer with an indication of the types of framing that will be accepted or requested by the sender.</p></td></tr><tr><td><p>4</p></td><td><p>Bearer Capabilities</p></td><td><p>Provides the peer with an indication of the bearer device types supported by the hardware interfaces of the sender for outgoing calls.</p></td></tr><tr><td><p>5</p></td><td><p>Tie Breaker</p></td><td><p>Indicates that the sender wishes a single tunnel to exist between the given LAC-LNS pair.</p></td></tr><tr><td><p>6</p></td><td><p>Firmware Revision</p></td><td><p>Indicates the firmware revision of the issuing device.</p></td></tr><tr><td><p>7</p></td><td><p>Host Name</p></td><td><p>Indicates the name of the issuing LAC or LNS.</p></td></tr><tr><td><p>8</p></td><td><p>Vendor Name</p></td><td><p>Contains a vendor specific (possibly human readable) string describing the type of LAC or LNS being used.</p></td></tr><tr><td><p>9</p></td><td><p>Assigned Tunnel ID</p></td><td><p>Encodes the ID being assigned to this tunnel by the sender.</p></td></tr><tr><td><p>10</p></td><td><p>Receive Window Size</p></td><td><p>Specifies the receive window size being offered to the remote peer.</p></td></tr><tr><td><p>11</p></td><td><p>Challenge</p></td><td><p>Indicates that the issuing peer wishes to authenticate the tunnel endpoints using a CHAP- style authentication mechanism.</p></td></tr><tr><td><p>12</p></td><td><p>Q.931 Cause Code</p></td><td><p>Q.931 Cause Code is used to give additional information in case of unsolicited call disconnection.</p></td></tr><tr><td><p>13</p></td><td><p>Response</p></td><td><p>Provides a response to a challenge received.</p></td></tr><tr><td><p>14</p></td><td><p>Assigned Session ID</p></td><td><p>Encodes the ID being assigned to this session by the sender.</p></td></tr><tr><td><p>15</p></td><td><p>Call Serial Number</p></td><td><p>Encodes an identifier assigned by the LAC or LNS to this call.</p></td></tr><tr><td><p>16</p></td><td><p>Minimum BPS</p></td><td><p>Encodes the lowest acceptable line speed for this call.</p><p> </p></td></tr><tr><td><p>17</p></td><td><p>Maximum BPS</p></td><td><p>Encodes the highest acceptable line speed for this call.</p></td></tr><tr><td><p>18</p></td><td><p>Bearer Type</p></td><td><p>Encodes the bearer type for the incoming or outgoing call.</p></td></tr><tr><td><p>19</p></td><td><p>Framing Type</p></td><td><p>encodes the framing type for the incoming or outgoing call.</p></td></tr><tr><td><p>20</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>21</p></td><td><p>Called Number</p></td><td><p>Encodes the telephone number to be called for an OCRQ, and the Called number for an ICRQ.</p></td></tr><tr><td><p>22</p></td><td><p>Calling Number</p></td><td><p>Encodes the originating number for the incoming call.</p></td></tr><tr><td><p>23</p></td><td><p>Sub-Address</p></td><td><p>Encodes additional dialing information.</p></td></tr><tr><td><p>24</p></td><td><p>Tx Connect Speed BPS</p></td><td><p>Encodes the speed of the facility chosen for the connection attempt.</p></td></tr><tr><td><p>25</p></td><td><p>Physical Channel ID</p></td><td><p>Encodes the vendor specific physical channel number used for a call.</p></td></tr><tr><td><p>26</p></td><td><p>Initial Received LCP CONFREQ</p></td><td><p>Provides the LNS with the Initial CONFREQ received by the LAC from the PPP Peer.</p></td></tr><tr><td><p>27</p></td><td><p>Last Sent LCP CONFREQ</p></td><td><p>Provides the LNS with the Last CONFREQ sent by the LAC to the PPP Peer.</p></td></tr><tr><td><p>28</p></td><td><p>Last Received LCP CONFREQ</p></td><td><p>Provides the LNS with the Last CONFREQ received by the LAC from the PPP Peer.</p></td></tr><tr><td><p>29</p></td><td><p>Proxy Authen Type</p></td><td><p>Determines if proxy authentication should be used.</p></td></tr><tr><td><p>30</p></td><td><p>Proxy Authen Name</p></td><td><p>Specifies the name of the authenticating client when using proxy authentication.</p></td></tr><tr><td><p>31</p></td><td><p>Proxy Authen Challenge</p></td><td><p>Specifies the challenge sent by the LAC to the PPP Peer, when using proxy authentication.</p></td></tr><tr><td><p>32</p></td><td><p>Proxy Authen ID</p></td><td><p>Specifies the ID value of the PPP Authentication that was started between the LAC and the PPP Peer, when proxy authentication is being used.</p></td></tr><tr><td><p>33</p></td><td><p>Proxy Authen Response</p></td><td><p>Specifies the PPP Authentication response received by the LAC from the PPP Peer, when proxy authentication is used.</p></td></tr><tr><td><p>34</p></td><td><p>Call Errors</p></td><td><p>Call Errors is used by the LAC to send error information to the LNS.</p></td></tr><tr><td><p>35</p></td><td><p>ACCM</p></td><td><p>ACCM is used by the LNS to inform LAC of the ACCM negotiated with the PPP Peer by the LNS.</p></td></tr><tr><td><p>36</p></td><td><p>Random Vector</p></td><td><p>Random Vector is used to enable the hiding of the Attribute Value of arbitrary AVPs.</p></td></tr><tr><td><p>37</p></td><td><p>Private Group ID</p></td><td><p>Private Group ID is used by the LAC to indicate that this call is to be associated with a particular customer group.</p></td></tr><tr><td><p>38</p></td><td><p>Rx Connect Speed</p></td><td><p>Represents the speed of the connection from the perspective of the LAC (e.g. data flowing from the remote system to the LAC).</p></td></tr><tr><td><p>39</p></td><td><p>Sequencing Required</p></td><td><p>Indicates to the LNS that Sequence Numbers MUST always be present on the data channel.</p></td></tr><tr><td><p>40</p></td><td><p>Rx Minimum</p></td><td><p>Encodes the lowest acceptable line speed for this call in the receive direction, for these cases where asymmetric transmission is required.</p></td></tr><tr><td><p>41</p></td><td><p>Rx Maximum</p></td><td><p>Encodes the highest acceptable line speed for this call in the receive direction, for these cases where asymmetric transmission is required.</p></td></tr><tr><td><p>42</p></td><td><p>Service Category</p></td><td><p>Indicates optional extra information on the Quality of Service expected for the call establishment on the broadband bearer medium.</p></td></tr><tr><td><p>43</p></td><td><p>Service Name</p></td><td><p>Provides the peer with an textual name for referring to an ATM VC connection.</p></td></tr><tr><td><p>44</p></td><td><p>Calling Sub-Address</p></td><td><p>Encodes additional Calling Party subaddress information.</p></td></tr><tr><td><p>45</p></td><td><p>VPI/VCI Identifier</p></td><td><p>Encodes the VPI/VCI value used at the ATM interface at the LAC.</p></td></tr><tr><td><p>46</p></td><td><p>PPP Disconnect Cause Code</p></td><td><p>PPP Disconnect Cause Code is used to provide a human-readable disconnect reason to the user.</p></td></tr><tr><td><p>47</p></td><td><p>CCDS</p></td><td><p>The CCDS AVP is encoded as Vendor ID 0, and the Attribute Type is 47.</p></td></tr><tr><td><p>48</p></td><td><p>SDS</p></td><td><p>SDS AVP is encoded as Vendor ID 0, and the Attribute Value is 48.</p></td></tr><tr><td><p>49</p></td><td><p>LCP Want Options</p></td><td><p>LCP Want Options contains a list of options that the LAC wants to be negotiated by the LNS.</p></td></tr><tr><td><p>50</p></td><td><p>LCP Allow Options</p></td><td><p>LCP Allow Options contains a list of options that the LAC wants to be negotiated by the LNS.</p></td></tr><tr><td><p>51</p></td><td><p>LNS Last Sent LCP Confreq</p></td><td><p>LNS Last Sent LCP Confreq is used to report negotiated LCP parameters from the LNS to the LAC</p></td></tr><tr><td><p>52</p></td><td><p>LNS Last Received LCP Confreq</p></td><td><p>LNS Last Received LCP Confreq is used to report negotiated LCP parameters from the LNS to the LAC</p></td></tr><tr><td><p>53</p></td><td><p>Modem On-Hold Capable</p></td><td><p>Indicates that the sender (an LNS) is capable of receiving MDMST control messages.</p></td></tr><tr><td><p>54</p></td><td><p>Modem On-Hold Status</p></td><td><p>Indicates the current on-hold status of the client modem.  This AVP MUST be present on the MDMST control message.</p></td></tr><tr><td><p>55</p></td><td><p>PPPoE Relay</p></td><td><p>Carries the entire PADI, PADO, PADR, PADS and PADT messages within, including Ethernet MAC source and destination addresses.</p></td></tr><tr><td><p>56</p></td><td><p>PPPoE Relay Response Capability</p></td><td><p>Indicates to an L2TP peer that the PPPoE Service Relay (SRRQ, SRRP) messages and the PPPoE Relay AVP will be processed and responded to when received.</p></td></tr><tr><td><p>57</p></td><td><p>PPPoE Relay Forward Capability</p></td><td><p>Indicates to an L2TP peer that PPPoE Service Relay (SRRQ, SRRP) messages and the PPPoE Relay AVP may be sent by this L2TP peer.</p></td></tr><tr><td><p>58</p></td><td><p>Extended Vendor ID</p></td><td><p>Encodes a vendor-specific AVP with a 32-bit Vendor ID space within the Attribute Value field.</p></td></tr><tr><td><p>59</p></td><td><p>Message Digest</p></td><td><p>Message Digest is used as an integrity and authentication check of the L2TP Control Message header and body.</p></td></tr><tr><td><p>60</p></td><td><p>Router ID</p></td><td><p>Router ID is an identifier used to identify an LCCE for control connection setup, tie breaking, and/or tunnel authentication.</p></td></tr><tr><td><p>61</p></td><td><p>Assigned Control Connection ID</p></td><td><p>Contains the ID being assigned to this control connection by the sender.</p></td></tr><tr><td><p>62</p></td><td><p>Pseudowire Capabilities List</p></td><td><p>Pseudowire Capabilities List indicates the L2 payload types the sender can support.</p></td></tr><tr><td><p>63</p></td><td><p>Local Session ID</p></td><td><p>Contains the identifier being assigned to this session by the sender.</p></td></tr><tr><td><p>64</p></td><td><p>Remote Session ID</p></td><td><p>Contains the identifier that was assigned to this session by the peer.</p></td></tr><tr><td><p>65</p></td><td><p>Assigned Cookie</p></td><td><p>Contains the Cookie value being assigned to this session by the sender.</p></td></tr><tr><td><p>66</p></td><td><p>Remote End ID</p></td><td><p>Contains an identifier used to bind L2TP sessions to a given circuit, interface, or bridging instance.</p></td></tr><tr><td><p>67</p></td><td><p>Application Code</p></td><td><p> </p></td></tr><tr><td><p>68</p></td><td><p>Pseudowire Type</p></td><td><p>The payload type being carried within an L2TP session.</p></td></tr><tr><td><p>69</p></td><td><p>L2-Specific Sublayer</p></td><td><p>L2-Specific Sublayer is an intermediary layer between the L2TP session header and the start of the tunneled frame.</p></td></tr><tr><td><p>70</p></td><td><p>Data Sequencing</p></td><td><p>Indicates that the sender requires some or all of the data packets that it receives to be sequenced.</p></td></tr><tr><td><p>71</p></td><td><p>Circuit Status</p></td><td><p>Indicates the initial status of or a status change in the circuit to which the session is bound.</p></td></tr><tr><td><p>72</p></td><td><p>Preferred Language</p></td><td><p>Provides a method for an LCCE to indicate to the peer the language in which human - readable messages it sends SHOULD be composed.</p></td></tr><tr><td><p>73</p></td><td><p>Control Message Authentication Nonce</p></td><td><p>Control Message Authentication Nonce must contain a cryptographically random value. This value is used for Control Message Authentication.</p></td></tr><tr><td><p>74</p></td><td><p>Tx Connect Speed</p></td><td><p>Contains the speed of the facility chosen for the connection attempt.</p></td></tr><tr><td><p>75</p></td><td><p>Rx Connect Speed</p></td><td><p>Represents the speed of the connection from the perspective of the LAC (i.e., data flowing from the remote system to the LAC).</p></td></tr><tr><td><p>76</p></td><td><p>Failover Capability</p></td><td><p> </p></td></tr><tr><td><p>77</p></td><td><p>Tunnel Recovery</p></td><td><p> </p></td></tr><tr><td><p>78</p></td><td><p>Suggested Control Sequence</p></td><td><p> </p></td></tr><tr><td><p>79</p></td><td><p>Failover Session State</p></td><td><p> </p></td></tr><tr><td><p>80</p></td><td><p>Multicast Capability</p></td><td><p>In order to inform the LNS that an LAC has the ability to handle multicast sessions, the LAC sends a Multicast Capability AVP during the control connection establishment phase.</p></td></tr><tr><td><p>81</p></td><td><p>New Outgoing Sessions</p></td><td><p>New Outgoing Sessions piggybacks every Session ID to which the multicast traffic has to be forwarded.</p></td></tr><tr><td><p>82</p></td><td><p>New Outgoing Sessions Acknowledgement</p></td><td><p>New Outgoing Sessions Acknowledgement informs the LNS that the LAC is ready to replicate traffic for every Session ID listed in the AVP.</p></td></tr><tr><td><p>83</p></td><td><p>Withdraw Outgoing Sessions</p></td><td><p>Withdraw Outgoing Sessions is sent whenever there is one or more withdrawn subscriptions for the corresponding multicast flow.</p></td></tr><tr><td><p>84</p></td><td><p>Multicast Packets Priority</p></td><td><p>Multicast Packets Priority is an optional AVP intended to indicate to the LAC how to process multicast traffic against unicast traffic.</p></td></tr><tr><td><p>85</p></td><td><p>Frame-Relay Header Length</p></td><td><p> </p></td></tr><tr><td><p>86</p></td><td><p>ATM Maximum Concatenated Cells</p></td><td><p> </p></td></tr><tr><td><p>87</p></td><td><p>OAM Emulation Required</p></td><td><p> </p></td></tr><tr><td><p>88</p></td><td><p>ATM Alarm Status</p></td><td><p> </p></td></tr><tr><td><p>89</p></td><td><p>Attachment Group Identifier</p></td><td><p> </p></td></tr><tr><td><p>90</p></td><td><p>Local End Identifier</p></td><td><p> </p></td></tr><tr><td><p>91</p></td><td><p>Interface Maximum Transmission Unit</p></td><td><p> </p></td></tr></tbody></table></div></div><br /><br /></li>

		    </ul>
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>L2TP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ATM</b><br />Asynchronous Transfer Mode (ATM) is a network technology based on transferring data in cells or packets of a fixed size. The cell used with ATM is relatively small compared to units used with older technologies. The small, constant cell size allows ATM equipment to transmit video, audio, and computer data over the same network, and assure that no single type of data hogs the line.<br /><br /><b>Cisco</b><br />One of the leading manufacturers of network equipment. Cisco's primary business is in internetworking products, such as routers, bridges, and switches.<br /><br /><b>Concentrator</b><br />Concentrator is a type of multiplexor that combines multiple channels onto a single transmission medium in such a way that all the individual channels can be simultaneously active. For example, ISPs use concentrators to combine their dial-up modem connections onto faster T-1 lines that connect to the Internet. 
<br />
<br />Concentrators are also used in local-area networks (LANs) to combine transmissions from a cluster of nodes. In this case, the concentrator is often called a hub or MAU.<br /><br /><b>Endpoint</b><br />SIP or H.323 terminal or gateway. An endpoint can call and be called. It generates and terminates the information stream.<br /><br /><b>Extranet</b><br />A buzzword that refers to an intranet that is partially accessible to authorized outsiders. Whereas an intranet resides behind a firewall and is accessible only to people who are members of the same company or organization, an extranet provides various levels of accessibility to outsiders. You can access an extranet only if you have a valid username and password, and your identity determines which parts of the extranet you can view.<br /><br /><b>Frame Relay</b><br />Frame Relay is a packet-switching protocol for connecting devices on a Wide Area Network (WAN). Frame Relay networks in the U.S. support data transfer rates at T-1 (1.544 Mbps) and T-3 (45 Mbps) speeds. In fact, you can think of Frame Relay as a way of utilizing existing T-1 and T-3 lines owned by a service provider. Most telephone companies now provide Frame Relay service for customers who want connections at 56 Kbps to T-1 speeds. (In Europe, Frame Relay speeds vary from 64 Kbps to 2 Mbps.<br /><br /><b>IETF</b><br />IETF (Internet Engineering Task Force) is the main standards organization for the Internet. The IETF is a large open international community of network designers, operators, vendors, and researchers concerned with the evolution of the Internet architecture and the smooth operation of the Internet. It is open to any interested individual.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Intranet</b><br />Intranet is a network based on TCP/IP protocols (an internet) belonging to an organization, usually a corporation, accessible only by the organization's members, employees, or others with authorization. An intranet's Web sites look and act just like any other Web sites, but the firewall surrounding an intranet fends off unauthorized access.<br /><br /><b>L2TP</b><br />Layer Two (2) Tunneling Protocol, an extension to the PPP protocol that enables ISPs to operate Virtual Private Networks (VPNs). L2TP merges the best features of two other tunneling protocols: PPTP from Microsoft and L2F from Cisco Systems. Like PPTP, L2TP requires that the ISP's routers support the protocol.<br /><br /><b>LAC</b><br />LAC (L2TP Access Concentrator) is a device attached to the switched network fabric (e.g., PSTN or ISDN) or co-located with a PPP end system capable of handling the L2TP protocol. The LAC need only implement the media over which L2TP is to operate to pass traffic to one or more LNS's. It may tunnel any protocol carried within PPP.<br /><br /><b>LNS</b><br />LNS (L2TP Network Server) operates on any platform capable of PPP termination. The LNS handles the server side of the L2TP protocol. L2TP is connection-oriented.<br /><br /><b>NAS</b><br />NAS (Netnews Administration System) is based on a database which contains information about certain groups and hierarchies. This database is structured in a hierarchical manner, distributed to various servers and is able to receive queries at any time.	The service is comparable to directory services like DNS, LDAP or	NIS. The NAS protocol is inspired by protocols like NNTP and SMTP. The port 991 is reserved for NAS and registered by the Internet Assigned Number Authority(IANA).<br /><br /><b>Network</b><br />Network is a group of two or more computer systems linked together. There are many types of computer networks, including: 
<br />LANs (local-area networks), WANs (wide-area networks), CANs (campus-area networks), MANs (metropolitan-area networks) and HANs (home-area networks).
<br />
<br />In addition to these types, the following characteristics are also used to categorize different types of networks: Topology, protocol and architecture.<br /><br /><b>PPP</b><br />PPP(Point-to-Point Protocol) is a method of connecting a computer to the Internet. PPP is more stable than the older SLIP protocol and provides error checking features. Working in the data link layer of the OSI model, PPP sends the computer's TCP/IP packets to a server that puts them onto the Internet. <br /><br /><b>PPTP</b><br />Point-to-Point Tunneling Protocol (PPTP) is a new technology for creating Virtual Private Networks (VPNs) , developed jointly by Microsoft Corporation, U.S. Robotics, and several remote access vendor companies, known collectively as the PPTP Forum. A VPN is a private network of computers that uses the public Internet to connect some nodes. Because the Internet is essentially an open network, the Point-to-Point Tunneling Protocol (PPTP) is used to ensure that messages transmitted from one VPN node to another are secure. With PPTP, users can dial in to their corporate network via the Internet.<br /><br /><b>Remote</b><br />In networks, remote refers to files, devices, and other resources that are not connected directly to your workstation. Resources at your workstation are considered local.<br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br /><b>VPN</b><br />VPN (virtual private network), a network that is constructed by using public wires to connect nodes. For example, there are a number of systems that enable you to create networks using the Internet as the medium for transporting data. These systems use encryption and other security mechanisms to ensure that only authorized users can access the network and that the data cannot be intercepted.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/l2tp-parameters">L2TP parameters</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2661.html">RFC 2661</a>] Layer Two Tunneling Protocol "L2TP".
                Defines L2TP version 2. 
[<a href="https://www.rfc-editor.org/rfc/rfc2809.html">RFC 2809</a>] Implementation of L2TP Compulsory Tunneling via RADIUS.
[<a href="https://www.rfc-editor.org/rfc/rfc2888.html">RFC 2888</a>] Secure Remote Access with L2TP.
[<a href="https://www.rfc-editor.org/rfc/rfc3070.html">RFC 3070</a>] Layer Two Tunneling Protocol (L2TP) over Frame Relay.
[<a href="https://www.rfc-editor.org/rfc/rfc3145.html">RFC 3145</a>] L2TP Disconnect Cause Information.
[<a href="https://www.rfc-editor.org/rfc/rfc3193.html">RFC 3193</a>] Securing L2TP using IPsec.
[<a href="https://www.rfc-editor.org/rfc/rfc3301.html">RFC 3301</a>] Layer Two Tunnelling Protocol (L2TP): ATM access network extensions.
[<a href="https://www.rfc-editor.org/rfc/rfc3308.html">RFC 3308</a>] Layer Two Tunneling Protocol (L2TP) Differentiated Services Extension.
                Defines L2TP AVP attributes 47 (CCDS AVP) and 48 (SDS AVP). 
[<a href="https://www.rfc-editor.org/rfc/rfc3355.html">RFC 3355</a>] Layer Two Tunnelling Protocol (L2TP) Over ATM Adaptation Layer 5 (AAL5).
[<a href="https://www.rfc-editor.org/rfc/rfc3371.html">RFC 3371</a>] Layer Two Tunneling Protocol "L2TP" Management Information Base.
[<a href="https://www.rfc-editor.org/rfc/rfc3437.html">RFC 3437</a>] Layer-Two Tunneling Protocol Extensions for PPP Link Control Protocol Negotiation.
[<a href="https://www.rfc-editor.org/rfc/rfc3438.html">RFC 3438</a>] Layer Two Tunneling Protocol (L2TP) Internet Assigned Numbers Authority (IANA) Considerations Update.
                BCP: 68. 
[<a href="https://www.rfc-editor.org/rfc/rfc3573.html">RFC 3573</a>] Signaling of Modem-On-Hold status in Layer 2 Tunneling Protocol (L2TP).
                Defines L2TP message type 17 (Modem Status). 
                Defines L2TP AVP attributes 53 (Modem On-Hold Capable) and 54 (Modem On-Hold Status). 
[<a href="https://www.rfc-editor.org/rfc/rfc3817.html">RFC 3817</a>] Layer 2 Tunneling Protocol (L2TP) Active Discovery Relay for PPP over Ethernet (PPPoE).
                Defines L2TP AVP attributes 55 (PPPoE Relay), 56 (PPPoE Relay Response Capability), 57(PPPoE Relay Forward Capability). 
[<a href="https://www.rfc-editor.org/rfc/rfc3931.html">RFC 3931</a>] Layer Two Tunneling Protocol - Version 3 (L2TPv3).
                Defines L2TP version 3. 
[<a href="https://www.rfc-editor.org/rfc/rfc4045.html">RFC 4045</a>] Extensions to Support Efficient Carrying of Multicast Traffic in Layer-2 Tunneling Protocol (L2TP).
                Defines L2TP AVP attributes 80 (Multicast Capability), 81 (New Outgoing Sessions), 82 (New Outgoing Sessions Acknowledgement), 83 (Withdraw Outgoing Sessions), 84 (Multicast Packets Priority).
                		  </div>
		  
</section>


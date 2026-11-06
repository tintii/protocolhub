---
id: protocol-igmp
slug: igmp
name: IGMP
expandedName: Internet Group Management Protocol
origin: historical
provenance:
  source: protocols/protocol_IGMP.htm
  sha256: 286f5e830620f2487e144cba51ba5a424d407daaa252e63b532a575da5bb4b5f
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Internet Group Management Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Internet Group Management Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Multicast protocol.
  - label: Latest Version
    html: 'IGMPv3, IGMPv2, IGMPv1'
  - label: Variant protocols
    html: |-
      DVMRP, Distance Vector Multicast Routing Protocol.
      <br />IGAP, IGMP for user Authentication Protocol.
      <br />RGMP, Router-port Group Manage
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.igmpStdMIB (1.3.6.1.2.1.85)
  - label: Multicast addresses
    html: 224.0.0.22
  - label: Working groups
    html: |-
      IDMR, Inter-Domain Multicast Routing.
      <br />MAGMA, Multicast &amp; Anycast Group Membership.
      <br />
originalUpdate: '2006-01-12 17:40:49'
rfcs:
  - 966
  - 988
  - 1009
  - 1054
  - 1112
  - 1122
  - 1716
  - 1812
  - 2236
  - 2715
  - 2933
  - 3228
  - 3376
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

			The Internet Group Management Protocol (IGMP) is used by IPv4 systems (hosts and routers) to report their IP multicast group memberships to any neighboring multicast routers. Note that an IP multicast router may itself be a member of one or more multicast groups, in which case it performs both the "multicast router part" of the protocol (to collect the membership information needed by its multicast routing protocol) and the "group member part" of the protocol (to inform itself and other, neighboring multicast routers of its memberships).
<br />
<br />IGMP is also used for other IP multicast management functions, using message types other than those used for group membership reporting. This document specifies only the group membership reporting functions and messages.
<br />
<br />IGMP has three version: IGMP version 1, IGMP version 2 and IGMP version 3.
<br /><ul><li><b>Version 1</b><br /></li>
<li>Version 1 was the first widely-deployed version and the first version to become an Internet Standard.
<br /><br /></li>
<li><b>Version 2</b><br /></li>
<li>Version 2 added support for "low leave latency", that is, a reduction in the time it takes for a multicast router to learn that there are no longer any members of a particular group present on an attached network.
<br /><br /></li>
<li><b>Version 3</b><br /></li>
<li>Version 3 adds support for "source filtering", that is, the ability for a system to report interest in receiving packets only from specific source addresses, as required to support Source-Specific Multicast(SSM), or from all but specific source addresses, sent to a particular multicast address. Version 3 is designed to be interoperable with Versions 1 and 2.
<br /><br /></li>
<li>IGMPv3 supports applications that explicitly signal sources from which they want to receive traffic. With IGMPv3, receivers signal membership to a multicast host group in the following two modes: 
<br /></li><li><ul><li><b>INCLUDE mode</b><br /></li>
<li>In this mode, the receiver announces membership to a host group and provides a list of IP addresses (the INCLUDE list) from which it wants to receive traffic. 
<br /><br /></li>
<li><b>EXCLUDE mode</b><br /></li>
<li>In this mode, the receiver announces membership to a host group and provides a list of IP addresses (the EXCLUDE list) from which it does not want to receive traffic. This indicates that the host wants to receive traffic only from other sources whose IP addresses are not listed in the EXCLUDE list. To receive traffic from all sources, like in the case of the Internet Standard Multicast (ISM) service model, a host expresses EXCLUDE mode membership with an empty EXCLUDE list.</li></ul><br /><br /></li>

<li>Multicast Listener Discovery (MLD) is used in a similar way by IPv6 systems. MLD version 1 implements the functionality of IGMP version 2; MLD version 2 implements the functionality of IGMP version 3.</li></ul>
<br />
<br />Within an IP system, there is (at least conceptually) a service interface used by upper-layer protocols or application programs to ask the IP layer to enable and disable reception of packets sent to specific IP multicast addresses. In order to take full advantage of the capabilities of IGMPv3, a system's IP service interface must support the following operation: IPMulticastListen (socket, interface, multicast-address, filter-mode, source-list)
<br />
<br />For each socket on which IPMulticastListen has been invoked, the system records the desired multicast reception state for that socket. That state conceptually consists of a set of records of the form: (interface, multicast-address, filter-mode, source-list) In addition to the per-socket multicast reception state, a system must also maintain or compute multicast reception state for each of its interfaces. That state conceptually consists of a set of records of the form: (multicast-address, filter-mode, source-list) At most one record per multicast-address exists for a given interface.
<br />
<br />After a multicast packet has been accepted from an interface by the IP layer, its subsequent delivery to the application or process listening on a particular socket depends on the multicast reception state of that socket [and possibly also on other conditions, such as what transport-layer port the socket is bound to].
<br /><hr />
<br /><b>Message Formats</b>
<br />IGMP messages are encapsulated in IPv4 datagrams, with an IP protocol number of 2. IGMP message types are registered by the IANA. There are two IGMP message types of concern to the IGMPv3 protocol:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Type Number (hex)</td><td><p>Message Name</p></td></tr><tr><td><p>0x11</p></td><td><p>Membership Query</p></td></tr><tr><td><p>0x22</p></td><td><p>Version 3 Membership Report</p></td></tr></tbody></table></div></div>
<br />An implementation of IGMPv3 MUST also support the following three message types:
<br /><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Type Number (hex)</p></td><td><p>Message Name</p></td></tr><tr><td><p>0x12</p></td><td><p>Version 1 Membership Report</p></td></tr><tr><td><p>0x16</p></td><td><p>Version 2 Membership Report</p></td></tr><tr><td><p>0x17</p></td><td><p>Version 2 Leave Group</p></td></tr></tbody></table></div></div>
<br />Unrecognized message types MUST be silently ignored.  Other message types may be used by newer versions or extensions of IGMP, by multicast routing protocols, or for other uses.
<br />
<br /><ul><li><b>Membership Query Message</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td colspan="3"><p>8</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td colspan="3"><p>Type</p></td><td><p>Max Resp Code</p></td><td><p>Checksum</p></td></tr><tr><td><p>Resv</p></td><td><p>S</p></td><td><p>QRV</p></td><td><p>QQIC</p></td><td><p>Number of Sources</p></td></tr><tr><td colspan="5"><p>Group address</p></td></tr><tr><td colspan="5"><p>Source Address</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Type</b><br /></li>
<li>The message type:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>0x11</p></td><td><p>Membership query. There are 2 sub-types of membership queries, general query and group-specific query.</p></td></tr><tr><td><p>0x16</p></td><td><p>Version 2 membership report.</p></td></tr><tr><td><p>0x12</p></td><td><p>Version 1 membership report. Provides compatibility with IGMPv1.</p></td></tr><tr><td><p>0x13</p></td><td><p>Distance Vector Multicast Routing Protocol</p></td></tr><tr><td><p>0x14</p></td><td><p>. PIMv1</p></td></tr><tr><td><p>0x15</p></td><td><p>Cisco Trace Messages.</p></td></tr><tr><td><p>0x16</p></td><td><p>IGMPv2 Membership Report.</p></td></tr><tr><td><p>0x17</p></td><td><p>Leave group</p></td></tr><tr><td><p>0x1E</p></td><td><p>Multicast Traceroute Response.</p></td></tr><tr><td><p>0x1F</p></td><td><p>Multicast Traceroute.</p></td></tr><tr><td><p>0x22</p></td><td><p>Version 3 membership report.</p></td></tr><tr><td><p>0x24</p></td><td><p>Multicast Router Advertisement.</p></td></tr><tr><td><p>0x25</p></td><td><p>Multicast Router Solicitation.</p></td></tr><tr><td><p>0x26</p></td><td><p>Multicast Router Termination.</p></td></tr><tr><td><p>0xF0<br />-<br />0xFF</p></td><td>Experimental.</td></tr></tbody></table></div></div><br /></li>
<li><b>Max Resp Code</b><br /></li>
<li>The Max Resp Code field specifies the maximum time allowed before sending a responding report. Specifies the maximum time allowed before sending a responding report in units of 1/10 second. In all other messages, it is set to 0 by the sender and ignored by the receiver.
<br /><br /></li>
<li>In a Reply message, the Code field specifies the outcome of the request.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>Code</p></td><td><p>Description</p></td></tr><tr><td><p>0</p></td><td><p>Request granted.</p></td></tr><tr><td><p>1</p></td><td><p>Request denied, no resources.</p></td></tr><tr><td><p>2</p></td><td><p>Request denied, invalid code.</p></td></tr><tr><td><p>3</p></td><td><p>Request denied, invalid group address.</p></td></tr><tr><td><p>4</p></td><td><p>Request denied, invalid access key.</p></td></tr><tr><td><p>5<br />-<br />255</p></td><td><p>Request pending, retry in this many seconds.</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Checksum</b><br /></li>
<li>The Checksum is the 16-bit one's complement of the one's complement sum of the whole IGMP message (the entire IP payload). For computing the checksum, the Checksum field is set to zero.  When receiving packets, the checksum MUST be verified before processing a packet.
<br /><br /></li>
<li><b>Group Address</b><br /></li>
<li>In a Membership query message, The Group address is set to 0 when sending a general query. It is set to the group address being queried, when sending a group specific query or group-and-source-specific query. In a membership report of a leave group message, it holds the IP multicast group address of the group being reported or left.
<br /><br /></li>
<li><b>Resv (Reserved)</b><br /></li>
<li>The Resv field is set to zero on transmission, and ignored on reception.
<br /><br /></li>
<li><b>S Flag (Suppress Router-Side Processing)</b><br /></li>
<li>When set to one, the S Flag indicates to any receiving multicast routers that they are to suppress the normal timer updates they perform upon hearing a Query. It does not, however, suppress the querier election or the normal "host-side" processing of a Query that a router may be required to perform as a consequence of itself being a group member.
<br /><br /></li>
<li><b>QRV (Querier's Robustness Variable)</b><br /></li>
<li>If non-zero, the QRV field contains the [Robustness Variable] value used by the querier, i.e., the sender of the Query. If the querier's  [Robustness Variable] exceeds 7, the maximum value of the QRV field, the QRV is set to zero.  Routers adopt the QRV value from the most recently received Query as their own [Robustness Variable] value, unless that most recently received QRV was zero, in which case the receivers use the default [Robustness Variable] value specified in section 8.1 or a statically configured value.
<br /><br /></li>
<li><b>QQIC (Querier's Query Interval Code)</b><br /></li>
<li>The Querier's Query Interval Code field specifies the [Query Interval] used by the querier. Multicast routers that are not the current querier adopt the QQI value from the most recently received Query as their own [Query Interval] value, unless that most recently received QQI was zero, in which case the receiving routers use the default [Query Interval] value.
<br /><br /></li>
<li><b>Number of Sources (N)</b><br /></li>
<li>The Number of Sources (N) field specifies how many source addresses are present in the Query. This number is zero in a General Query or a Group-Specific Query, and non-zero in a Group-and-Source-Specific Query. This number is limited by the MTU of the network over which the Query is transmitted. For example, on an Ethernet with an MTU of 1500 octets, the IP header including the Router Alert option consumes 24 octets, and the IGMP fields up to including the Number of Sources (N) field consume 12 octets, leaving 1464 octets for source addresses, which limits the number of source addresses to 366 (1464/4).
<br /><br /></li>
<li><b>Source Address</b><br /></li>
<li>The Source Address [i] fields are a vector of n IP unicast addresses, where n is the value in the Number of Sources (N) field.</li></ul><br /><br /></li>

<li><b>Version 3 Membership Report Message</b><br /></li>
<li>Version 3 Membership Reports are sent by IP systems to report (to neighboring routers) the current multicast reception state, or changes in the multicast reception state, of their interfaces. Reports have the following format:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>Type = 0x22</p></td><td><p>Reserved</p></td><td><p>Checksum</p></td></tr><tr><td colspan="2"><p>Reserved</p></td><td><p>Number of Group Records (M)</p></td></tr><tr><td colspan="3"><p>Group Record </p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Reserved</b><br /></li>
<li>The Reserved fields are set to zero on transmission, and ignored on reception.
<br /><br /></li>
<li><b>Checksum</b><br /></li>
<li>The Checksum is the 16-bit one's complement of the one's complement sum of the whole IGMP message (the entire IP payload). For computing the checksum, the Checksum field is set to zero. When receiving packets, the checksum MUST be verified before processing a message.
<br /></li><li>Number of Group Records (M)
<br /></li><li>The Number of Group Records (M) field specifies how many Group Records are present in this Report.
<br /><br /></li>
<li><b>Group Record</b><br /></li>
<li>Each Group Record is a block of fields containing information pertaining to the sender's membership in a single multicast group on the interface from which the Report is sent.</li></ul><br /><br /></li>

<li>Where each Group Record has the following internal format:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32 bits</p></td></tr><tr><td><p>Record Type</p></td><td><p>Aux Data Len</p></td><td><p>Number of Sources (N)</p></td></tr><tr><td colspan="3"><p>Multicast Address</p></td></tr><tr><td colspan="3"><p>Source Address</p></td></tr><tr><td colspan="3"><p>Auxiliary Data</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Aux Data Len</b><br /></li>
<li>The Aux Data Len field contains the length of the Auxiliary Data field in this Group Record, in units of 32-bit words. It may contain zero, to indicate the absence of any auxiliary data.
<br /><br /></li>
<li><b>Number of Sources (N)</b><br /></li>
<li>The Number of Sources (N) field specifies how many source addresses are present in this Group Record.
<br /><br /></li>
<li><b>Multicast Address</b><br /></li>
<li>The Multicast Address field contains the IP multicast address to which this Group Record pertains.
<br /><br /></li>
<li><b>Source Address</b><br /></li>
<li>The Source Address fields are a vector of n IP unicast addresses, where n is the value in this record's Number of Sources (N) field.
<br /><br /></li>
<li><b>Auxiliary Data</b><br /></li>
<li>The Auxiliary Data field, if present, contains additional information pertaining to this Group Record. The protocol specified in this document, IGMPv3, does not define any auxiliary data. Therefore, implementations of IGMPv3 MUST NOT include any auxiliary data (i.e., MUST set the Aux Data Len field to zero) in any transmitted Group Record, and MUST ignore any auxiliary data present in any received Group Record. The semantics and internal encoding of the Auxiliary Data field are to be defined by any future version or extension of IGMP that uses this field.</li></ul></li></ul>
<br /><hr />
<br /><b>Group Members</b>
<br />IGMP is an asymmetric protocol, specifying separate behaviors for group members -- that is, hosts or routers that wish to receive multicast packets -- and multicast routers. For interoperability with multicast routers running older versions of IGMP, systems maintain a MulticastRouterVersion variable for each interface on which multicast reception is supported. 
<br />
<br />There are two types of events that trigger IGMPv3 protocol actions on an interface:
<br /><ul><li>A change of the interface reception state, caused by a local invocation of IPMulticastListen.<br /></li>
<li>Reception of a Query.</li></ul>
<br />
<br />Received IGMP messages of types other than Query are silently ignored, except as required for interoperation with earlier versions of IGMP.
<br /><ul><li><b>Action on Change of Interface State</b><br /></li>
<li>An invocation of IPMulticastListen may cause the multicast reception state of an interface to change. Each such change affects the per-interface entry for a single multicast address.
<br /><br /></li>
<li>Each time a source is included in the difference report calculated above, retransmission state for that source needs to be maintained until [Robustness Variable] State-Change reports have been sent by the host.
<br /><br /></li>
<li><b>Action on Reception of a Query</b><br /></li>
<li>When a system receives a Query, it does not respond immediately. Instead, it delays its response by a random amount of time, bounded by the Max Resp Time value derived from the Max Resp Code in the received Query message.
<br /><br /></li>
<li>A system may receive a variety of Queries on different interfaces and of different kinds (e.g., General Queries, Group-Specific Queries, and Group-and-Source-Specific Queries), each of which may require its own delayed response.
<br /><br /></li>
<li>Before scheduling a response to a Query, the system must first consider previously scheduled pending responses and in many cases schedule a combined response. Therefore, the system must be able to maintain the following state:
<br /></li><li><ul><li>A timer per interface for scheduling responses to General Queries.<br /></li>
<li>A per-group and interface timer for scheduling responses to Group- Specific and Group-and-Source-Specific Queries.<br /></li>
<li>A per-group and interface list of sources to be reported in the response to a Group-and-Source-Specific Query.</li></ul><br /><br /></li>

<li><b>Multicast Routers</b><br /></li>
<li>The purpose of IGMP is to enable each multicast router to learn, for each of its directly attached networks, which multicast addresses are of interest to the systems attached to those networks. IGMP version 3 adds the capability for a multicast router to also learn which sources are of interest to neighboring systems, for packets sent to any particular multicast address. The information gathered by IGMP is provided to whichever multicast routing protocol is being used by the router, in order to ensure that multicast packets are delivered to all networks where there are interested receivers.
<br /><br /></li>
<li><ul><li><b>Conditions for IGMP Queries</b><br /></li>
<li>Multicast routers send General Queries periodically to request group membership information from an attached network. These queries are used to build and refresh the group membership state of systems on attached networks. Systems respond to these queries by reporting their group membership state (and their desired set of sources) with Current-State Group Records in IGMPv3 Membership Reports.
<br /><br /></li>
<li><b>IGMP State Maintained by Multicast Routers</b><br /></li>
<li>Multicast routers implementing IGMPv3 keep state per group per attached network. This group state consists of a filter-mode, a list of sources, and various timers. For each attached network running IGMP, a multicast router records the desired reception state for that network.
<br /><br /></li>
<li><b>IGMPv3 Source-Specific Forwarding Rules</b><br /></li>
<li>When a multicast router receives a datagram from a source destined to a particular group, a decision has to be made whether to forward the datagram onto an attached network or not. The multicast routing protocol in use is in charge of this decision, and should use the IGMPv3 information to ensure that all sources/groups desired on a subnetwork are forwarded to that subnetwork. IGMPv3 information does not override multicast routing information; for example, if the IGMPv3 filter-mode group for G is EXCLUDE, a router may still forward packets for excluded sources to a transit subnet.
<br /><br /></li>
<li><b>Action on Reception of Reports</b><br /></li>
<li>When receiving Current-State Records, a router updates both its group and source timers. In some circumstances, the reception of a type of group record will cause the router filter-mode for that group to change.
<br /><br /></li>
<li>When a change in the global state of a group occurs in a system, the system sends either a Source-List-Change Record or a Filter-Mode-Change Record for that group. As with Current-State Records, routers must act upon these records and possibly change their own state to reflect the new desired membership state of the network.</li></ul></li></ul>
<br /><hr />
<br />Interoperation With Older Versions of IGMP
<br />IGMP version 3 hosts and routers interoperate with hosts and routers that have not yet been upgraded to IGMPv3. This compatibility is maintained by hosts and routers taking appropriate actions depending on the versions of IGMP operating on hosts and routers within a network.
<br /><ul><li>Query Version Distinctions
<br /></li><li>The IGMP version of a Membership Query message is determined as follows:
<br /></li><li><ul><li>IGMPv1 Query: length = 8 octets AND Max Resp Code field is zero
<br /></li><li>IGMPv2 Query: length = 8 octets AND Max Resp Code field is non-zero
<br /></li><li>IGMPv3 Query: length &gt;= 12 octets</li></ul></li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: QQIC</b>

The actual interval, called the Querier's Query Interval (QQI), is represented in units 
of seconds and is derived from the Querier's Query Interval Code as follows:
If QQIC &lt; 128, QQI = QQIC
If QQIC &gt;= 128, QQIC represents a floating-point value as follows:

           0 1 2 3 4 5 6 7
          +-+-+-+-+-+-+-+-+
          |1| exp | mant  |
          +-+-+-+-+-+-+-+-+

   QQI = (mant | 0x10) &lt;&lt; (exp + 3)</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Configuration Examples</b>

The following configuration example shows how to configure a router (running IGMPv3) 
for SSM: 

          ip multicast-routing 
          ! 
          interface Ethernet3/1 
          ip address 172.21.200.203 255.255.255.0 
          ip pim sparse-dense-mode 
          ip igmp version 3 
          ! 
          interface Ethernet3/2 
          ip address 131.108.1.2 255.255.255.0 
          ip pim sparse-dense-mode 
          ip igmp version 3 
          ! 
          ip pim ssm default</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Command</b>

The following is sample output from the show ip igmp groups command: 

Router# show ip igmp groups 
IGMP Connected Group Membership 

          Group Address     Interface         Uptime      Expires     Last Reporter 
          239.255.255.254   Ethernet3/1       1w0d        00:02:19    172.21.200.159 
          224.0.1.40        Ethernet3/1       1w0d        00:02:15    172.21.200.1 
          224.0.1.40        Ethernet3/3       1w0d        never       171.69.214.251 
          224.0.1.1         Ethernet3/1       1w0d        00:02:11    172.21.200.11 
          224.9.9.2         Ethernet3/1       1w0d        00:02:10    172.21.200.155 
          232.1.1.1         Ethernet3/1       5d21h       stopped     172.21.200.206</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: Command</b>

The following is sample output from the show ip igmp groups command with the 
group-address argument and detail keyword: 

          Router# show ip igmp groups 232.1.1.1 detail 
          Interface: Ethernet3/2 
          Group: 232.1.1.1 
          Uptime: 01:58:28 
          Group mode:     INCLUDE 
          Last reporter: 10.0.119.133 
          CSR Grp Exp: 00:02:38 
          Group source list: (C - Cisco Src Report, U - URD, R - Remote) 
            Source Address Uptime v3 Exp CSR Exp Fwd Flags 
          171.69.214.1 01:58:28 stopped 00:02:31 Yes C</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IGMP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />IGAP<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />RGMP<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ISM</b><br />ISM is abbreviation of Internet Standard Multicast. There are two kinds of multicast-enabled networks available. The first is based on the original multicast service model. This model is known by a number of names including Internet Standard Multicast (ISM), Internet Traditional Multicast (ITM), Deering multicast, etc.<br /><br /><b>MLD</b><br />MLD (Multicast Listener Discovery Protocol) is used by IPv6 routers to discover the presence of multicast listeners on their directly attached links, and to discover specifically which multicast addresses are of interest to those neighboring nodes.<br /><br /><b>SSM</b><br />SSM (Source Specific Multicast) feature is an extension of IP multicast where datagram traffic is forwarded to receivers from only those multicast sources to which the receivers have explicitly joined.
<br />
<br />An SSM destination address range already exists for IPv6. A source S transmits IP datagrams to an SSM destination address G. A receiver can receive these datagrams by subscribing to the channel (Source, Group) or (S,G).<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/igmp-type-numbers">IGMP type numbers</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a>] Host Extensions for IP Multicasting.
                Defines IGMP version 1. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc988.html">RFC 988</a>, <a href="https://www.rfc-editor.org/rfc/rfc1054.html">RFC 1054</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>] Requirements for Internet Hosts -- Communication Layers.
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1009.html">RFC 1009</a>, <a href="https://www.rfc-editor.org/rfc/rfc1716.html">RFC 1716</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2715.html">RFC 2715</a>] Interoperability Rules for Multicast Routing Protocols.
[<a href="https://www.rfc-editor.org/rfc/rfc2933.html">RFC 2933</a>] Internet Group Management Protocol MIB.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.igmpStdMIB (1.3.6.1.2.1.85). 
[<a href="https://www.rfc-editor.org/rfc/rfc3228.html">RFC 3228</a>] IANA Considerations for IPv4 Internet Group Management Protocol (IGMP).
[<a href="https://www.rfc-editor.org/rfc/rfc3376.html">RFC 3376</a>] Internet Group Management Protocol, Version 3.
                Defines IGMP version 3. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2236.html">RFC 2236</a>.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc966.html">RFC 966</a>] Host Groups: A Multicast Extension to the Internet Protocol.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc988.html">RFC 988</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc988.html">RFC 988</a>] Host Extensions for IP Multicasting.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1054.html">RFC 1054</a>, <a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a>. 
                Defines IGMP version 0. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc966.html">RFC 966</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1009.html">RFC 1009</a>] Requirements for Internet Gateways.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1054.html">RFC 1054</a>] Host Extensions for IP Multicasting.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc988.html">RFC 988</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1716.html">RFC 1716</a>] Towards Requirements for IP Routers.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2236.html">RFC 2236</a>] Internet Group Management Protocol, Version 2.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3376.html">RFC 3376</a>. 
                Defines IGMP version 2.
                		  </div>
		  
</section>


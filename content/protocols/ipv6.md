---
id: protocol-ipv6
slug: ipv6
name: IPv6
expandedName: Internet Protocol version 6
origin: historical
provenance:
  source: protocols/protocol_IPv6.htm
  sha256: 4eeca6c595401b31319470129ad7c0b55af31aae5e8959be361b314f9ab3c837
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Internet Protocol version 6
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Internet Protocol version 6
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Connectionless network layer protocol
  - label: EtherType
    html: '0x86DD'
  - label: SNMP MIBs
    html: |-
      iso.org.dod.internet.mgmt.mib-2.ipv6MIB (1.3.6.1.2.1.55). 
      <br />iso.org.dod.internet.mgmt.mib-2.ipv6FlowLabelMIB (1.3.6.1.2.1.103).
      <br />iso.org.dod.internet.experimental.ipv6UdpMIB (1.3.6.1.3.87). 
  - label: Related protocols
    html: >-
      IP ,<br />IPv4 ,<br />TCP ,<br />UDP ,<br />ICMP ,<br />SNMP ,<br />FTP ,<br />TELNET ,<br />SMTP ,<br />ARP ,<br
      />RARP ,<br />RPC,<br />XDR,<br />NFS
  - label: Working groups
    html: |-
      IPv6, IP Version 6 Working Group
      <br />NGTRANS, Next Generation Transition
originalUpdate: '2006-08-30 14:46:14'
rfcs:
  - 1719
  - 1726
  - 1752
  - 1809
  - 1881
  - 1883
  - 1884
  - 1887
  - 1888
  - 1897
  - 1933
  - 1970
  - 1971
  - 1972
  - 1981
  - 2013
  - 2019
  - 2023
  - 2073
  - 2126
  - 2133
  - 2147
  - 2170
  - 2185
  - 2292
  - 2373
  - 2374
  - 2375
  - 2401
  - 2450
  - 2452
  - 2454
  - 2460
  - 2461
  - 2462
  - 2464
  - 2465
  - 2467
  - 2470
  - 2471
  - 2472
  - 2473
  - 2474
  - 2475
  - 2491
  - 2492
  - 2497
  - 2507
  - 2508
  - 2526
  - 2529
  - 2553
  - 2590
  - 2675
  - 2711
  - 2732
  - 2765
  - 2766
  - 2767
  - 2780
  - 2874
  - 2893
  - 2928
  - 3041
  - 3053
  - 3056
  - 3111
  - 3142
  - 3146
  - 3178
  - 3306
  - 3307
  - 3314
  - 3316
  - 3484
  - 3493
  - 3513
  - 3531
  - 3542
  - 3545
  - 3572
  - 3582
  - 3587
  - 3595
  - 3627
  - 3697
  - 3701
  - 3736
  - 3750
  - 3756
  - 3769
  - 3831
  - 3849
  - 3879
  - 3904
  - 3919
  - 3956
  - 3964
  - 3986
  - 4007
  - 4022
  - 4029
  - 4038
  - 4048
  - 4057
  - 4113
  - 4159
  - 4177
related:
  - protocol-ip
  - protocol-tcp
  - protocol-udp
  - protocol-icmp
  - protocol-snmp
  - protocol-ftp
  - protocol-telnet
  - protocol-smtp
  - protocol-arp
  - protocol-rarp
  - protocol-rpc
  - protocol-nfs
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

			IP version 6 (IPv6) is a new version of the Internet Protocol based on IPv4. IPv4 and IPv6 are demultiplexed at the media layer. For example, IPv6 packets are carried over Ethernet with the content type 86DD (hexadecimal) instead of IPv4¡¯s 0800.
<br />
<br />IPv6 increases the IP address size from 32 bits to 128 bits, to support more levels of addressing hierarchy, a much greater number of addressable nodes and simpler auto-configuration of addresses. Scalability of multicast addresses is introduced. A new type of address called an anycast address is also defined, to send a packet to any one of a group of nodes.
<br />
<br />IP version 6 (IPv6) is a new version of the Internet Protocol, designed as the successor to IP version 4 (IPv4). The changes from IPv4 to IPv6 fall primarily into the following categories:
<br />
<br /><ul><li><b>Expanded Addressing Capabilities</b>
<br />IPv6 increases the IP address size from 32 bits to 128 bits, to support more levels of addressing hierarchy, a much greater number of addressable nodes, and simpler auto-configuration of addresses. The scalability of multicast routing is improved by adding a "scope" field to multicast addresses. And a new type of address called an "anycast address" is defined, used to send a packet to any one of a group of nodes.<br /><br /></li>

<li><b>Header Format Simplification</b>
<br />Some IPv4 header fields have been dropped or made optional, to reduce the common-case processing cost of packet handling and to limit the bandwidth cost of the IPv6 header.<br /><br /></li>

<li><b>Improved Support for Extensions and Options</b>
<br />Changes in the way IP header options are encoded allows for more efficient forwarding, less stringent limits on the length of options, and greater flexibility for introducing new options in the future.<br /><br /></li>

<li><b>Flow Labeling Capability</b>
<br />A new capability is added to enable the labeling of packets belonging to particular traffic "flows" for which the sender requests special handling, such as non-default quality of service or "real-time" service.<br /><br /></li>

<li><b>Authentication and Privacy Capabilities</b>
<br />Extensions to support authentication, data integrity, and (optional) data confidentiality are specified for IPv6.</li></ul>
<br /><hr />
<br /><b>IPv6 header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>4</p></td><td><p>12</p></td><td><p>16</p></td><td><p>24</p></td><td><p>32</p></td></tr><tr><td><p>Version</p></td><td><p>Traffic Class</p></td><td colspan="3"><p>Flow Label</p></td></tr><tr><td colspan="3"><p>Payload Length</p></td><td><p>Next Header</p></td><td><p>Hop Limit</p></td></tr><tr><td colspan="5"><p>Source address</p></td></tr><tr><td colspan="5"><p>Destination address</p></td></tr><tr><td colspan="5"><p>Data</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b>
<br />Internet Protocol Version number (IPv6 is 6).<br /><br /></li>

<li><b>Traffic Class</b>
<br />Traffic class field enables a source to identify the desired delivery priority of the packets. Priority values are divided into ranges: traffic where the source provides congestion control and non-congestion control traffic.<br /><br /></li>

<li><b>Flow label</b>
<br />Used by a source to label those products for which it requests special handling by the IPv6 router. The flow is uniquely identified by the combination of a source address and a non-zero flow label.<br /><br /></li>

<li><b>Payload length</b>
<br />Specifies the length of the data in the packet. When cleared to zero, the option is a hop-by-hop Jumbo payload.<br /><br /></li>

<li><b>Next header</b>
<br />Identifies the type of header immediately following the IPv6 header. Uses the same values as the IPv4 Protocol field.<br /><br /></li>

<li><b>Hop limit</b>
<br />For each router that forwards the packet, the hop limit is decremented by 1. When the hop limit field reaches zero, the packet is discarded. This replaces the TTL field in the IPv4 header that was originally intended to be used as a time based hop limit.<br /><br /></li>

<li><b>Source address</b>
<br />128-bit address of the originator of the packet.<br /><br /></li>

<li><b>Destination address</b>
<br />128-bit address of the intended recipient of the packet.</li></ul>
<br />
<br /><b>IPv6 Extension Headers</b>
<br />In IPv6, optional internet-layer information is encoded in separate headers that may be placed between the IPv6 header and the upper- layer header in a packet. There are a small number of such extension headers, each identified by a distinct Next Header value. As illustrated in these examples, an IPv6 packet may carry zero, one, or more extension headers, each identified by the Next Header field of the preceding header:
<br />
<br /><div class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">   +---------------+------------------------
   |  IPv6 header  | TCP header + data
   |               |
   | Next Header = |
   |      TCP      |
   +---------------+------------------------

   +---------------+----------------+------------------------
   |  IPv6 header  | Routing header | TCP header + data
   |               |                |
   | Next Header = |  Next Header = |
   |    Routing    |      TCP       |
   +---------------+----------------+------------------------

   +---------------+----------------+-----------------+-----------------
   |  IPv6 header  | Routing header | Fragment header | fragment of TCP
   |               |                |                 |  header + data
   | Next Header = |  Next Header = |  Next Header =  |
   |    Routing    |    Fragment    |       TCP       |
   +---------------+----------------+-----------------+-----------------</div>
<br />
<br />With one exception, extension headers are not examined or processed by any node along a packet's delivery path, until the packet reaches the node (or each of the set of nodes, in the case of multicast) identified in the Destination Address field of the IPv6 header. There, normal demultiplexing on the Next Header field of the IPv6 header invokes the module to process the first extension header, or the upper-layer header if no extension header is present. The contents and semantics of each extension header determine whether or not to proceed to the next header. Therefore, extension headers must be processed strictly in the order they appear in the packet; a receiver must not, for example, scan through a packet looking for a particular kind of extension header and process that header prior to processing all preceding ones.
<br />
<br />The exception referred to in the preceding paragraph is the Hop-by- Hop Options header, which carries information that must be examined and processed by every node along a packet's delivery path, including the source and destination nodes. The Hop-by-Hop Options header, when present, must immediately follow the IPv6 header. Its presence is indicated by the value zero in the Next Header field of the IPv6 header.
<br />
<br />If, as a result of processing a header, a node is required to proceed to the next header but the Next Header value in the current header is unrecognized by the node, it should discard the packet and send an ICMP Parameter Problem message to the source of the packet, with an ICMP Code value of 1 ("unrecognized Next Header type encountered") and the ICMP Pointer field containing the offset of the unrecognized value within the original packet. The same action should be taken if a node encounters a Next Header value of zero in any header other than an IPv6 header.
<br />
<br />Each extension header is an integer multiple of 8 octets long, in order to retain 8-octet alignment for subsequent headers. Multi- octet fields within each extension header are aligned on their natural boundaries, i.e., fields of width n octets are placed at an integer multiple of n octets from the start of the header, for n = 1, 2, 4, or 8.
<br />
<br />A full implementation of IPv6 includes implementation of the following extension headers:
<br /><ul><li><b>Hop-by-Hop Options</b>
<br />The Hop-by-Hop Options header is used to carry optional information that must be examined by every node along a packet's delivery path. The Hop-by-Hop Options header is identified by a Next Header value of 0 in the IPv6 header.<br /><br /></li>

<li><b>Routing (Type 0)</b>
<br />The Routing header is used by an IPv6 source to list one or more intermediate nodes to be "visited" on the way to a packet's destination. This function is very similar to IPv4's Loose Source and Record Route option. The Routing header is identified by a Next Header value of 43 in the immediately preceding header.<br /><br /></li>

<li><b>Fragment</b>
<br />The Fragment header is used by an IPv6 source to send a packet larger than would fit in the path MTU to its destination. (Note: unlike IPv4, fragmentation in IPv6 is performed only by source nodes, not by routers along a packet's delivery path -- see section 5.) The Fragment header is identified by a Next Header value of 44 in the immediately preceding header.<br /><br /></li>

<li><b>Destination Options</b>
<br />The Destination Options header is used to carry optional information that need be examined only by a packet's destination node(s). The Destination Options header is identified by a Next Header value of 60 in the immediately preceding header.<br /><br /></li>

<li><b>Authentication</b>
<br />The IP Authentication Header (AH) is used to provide connectionless integrity and data origin authentication for IP datagrams, and to provide protection against replays. The protocol header (IPv4, IPv6, or Extension) immediately preceding the AH header will contain the value 51 in its Protocol (IPv4) or Next Header (IPv6, Extension) field.<br /><br /></li>

<li><b>Encapsulating Security Payload</b>
<br />The Encapsulating Security Payload (ESP) header is designed to provide a mix of security services in IPv4 and IPv6. ESP may be applied alone, in combination with the IP Authentication Header (AH), or in a nested fashion, e.g., through the use of tunnel mode.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1</b>
If an option X required two data fields, one of length 8 octets and one of length 
4 octets, it would be laid out as follows:

                                          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
                                          | Option Type=X |Opt Data Len=12|
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         4-octet field                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                                                               |
          +                         8-octet field                         +
          |                                                               |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Its alignment requirement is 8n+2, to ensure that the 8-octet field starts at a 
multiple-of-8 offset from the start of the enclosing header. A complete Hop-by-Hop 
or Destination Options header containing this one option would look as follows:

          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |  Next Header  | Hdr Ext Len=1 | Option Type=X |Opt Data Len=12|
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         4-octet field                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                                                               |
          +                         8-octet field                         +
          |                                                               |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2</b>
If an option Y required three data fields, one of length 4 octets, one of length 
2 octets, and one of length 1 octet, it would be laid out as follows:

                                                          +-+-+-+-+-+-+-+-+
                                                          | Option Type=Y |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Opt Data Len=7 | 1-octet field |         2-octet field         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         4-octet field                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

Its alignment requirement is 4n+3, to ensure that the 4-octet field starts at a 
multiple-of-4 offset from the start of the enclosing header. A complete Hop-by-Hop 
or Destination Options header containing this one option would look as follows:

          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |  Next Header  | Hdr Ext Len=1 | Pad1 Option=0 | Option Type=Y |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Opt Data Len=7 | 1-octet field |         2-octet field         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         4-octet field                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          | PadN Option=1 |Opt Data Len=2 |       0       |       0       |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3</b>
A Hop-by-Hop or Destination Options header containing both options X and Y 
from Examples 1 and 2 would have one of the two following formats, depending 
on which option appeared first:

          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |  Next Header  | Hdr Ext Len=3 | Option Type=X |Opt Data Len=12|
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         4-octet field                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                                                               |
          +                         8-octet field                         +
          |                                                               |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          | PadN Option=1 |Opt Data Len=1 |       0       | Option Type=Y |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Opt Data Len=7 | 1-octet field |         2-octet field         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         4-octet field                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          | PadN Option=1 |Opt Data Len=2 |       0       |       0       |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |  Next Header  | Hdr Ext Len=3 | Pad1 Option=0 | Option Type=Y |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Opt Data Len=7 | 1-octet field |         2-octet field         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         4-octet field                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          | PadN Option=1 |Opt Data Len=4 |       0       |       0       |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |       0       |       0       | Option Type=X |Opt Data Len=12|
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         4-octet field                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                                                               |
          +                         8-octet field                         +
          |                                                               |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/tline_l_top.gif" alt="" /><br />MPLS<img src="/supporting/images/tline_l.gif" alt="" /><br />Ethernet<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IPv6</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />ICMP<br /><img src="/supporting/images/tline_r.gif" alt="" />ICMPv6<br /><img src="/supporting/images/tline_r.gif" alt="" />IGMP<br /><img src="/supporting/images/tline_r.gif" alt="" />EGP<br /><img src="/supporting/images/tline_r.gif" alt="" />IGRP<br /><img src="/supporting/images/tline_r.gif" alt="" />EIGRP<br /><img src="/supporting/images/tline_r.gif" alt="" />SCTP<br /><img src="/supporting/images/tline_r.gif" alt="" />TCP<br /><img src="/supporting/images/tline_r.gif" alt="" />UDP<br /><img src="/supporting/images/tline_r.gif" alt="" />PUP<br /><img src="/supporting/images/tline_r.gif" alt="" />OSPF<br /><img src="/supporting/images/tline_r.gif" alt="" />VRRP<br /><img src="/supporting/images/tline_r.gif" alt="" />ESP<br /><img src="/supporting/images/tline_r.gif" alt="" />AH<br /><img src="/supporting/images/tline_r.gif" alt="" />GRE<br /><img src="/supporting/images/tline_r.gif" alt="" />RSVP<br /><img src="/supporting/images/tline_r.gif" alt="" />PIM<br /><img src="/supporting/images/tline_r.gif" alt="" />IPv6<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Other<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Anycast</b><br />Anycast is an identifier for a set of interfaces (typically belonging to different nodes). A packet sent to an anycast address is delivered to one of the interfaces identified by that address (the "nearest" one, according to the routing protocol's measure of distance). Note that an anycast address is syntactically indistinguishable from a unicast address. Thus, nodes sending packets to anycast addresses don't generally know that an anycast address is being used.<br /><br /><b>Authorization</b><br />The process of identifying an individual, usually based on a username and password. In security systems, authentication is distinct from authorization , which is the process of giving individuals access to system objects based on their identity. Authentication merely ensures that the individual is who he or she claims to be, but says nothing about the access rights of the individual.<br /><br /><b>Deprecated address</b><br />Deprecated address is an address assigned to an interface whose use is discouraged, but not forbidden. A deprecated address should no longer be used as a source address in new communications, but packets sent to deprecated addresses are delivered as expected. A deprecated address may continue to be used as a source address in communications where switching to a preferred address causes hardship to a specific upper-layer activity (e.g., an existing TCP connection).<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>IPv4</b><br />IPv4 is version 4 of the Internet Protocol (IP). It was the first version of the Internet Protocol to be widely deployed, and forms the basis for most of the current Internet. IPv4 uses 32-bit addresses, limiting it to 4,294,967,296 unique addresses, many of which are reserved for special purposes such as local networks or multicast addresses, reducing the number of addresses that can be allocated as public Internet addresses.<br /><br /><b>IPv6</b><br />IPv6 is designed as an evolutionary upgrade to the Internet Protocol and will, in fact, coexist with the older IPv4 for some time. IPv6 is designed to allow the Internet to grow steadily, both in terms of the number of hosts connected and the total amount of data traffic transmitted.<br /><br /><b>Node</b><br />In networks, node is a processing location. A node can be a computer or some other device, such as a printer. Every node has a unique network address, sometimes called a Data Link Control (DLC) address or Media Access Control (MAC) address. 
<br />
<br />In tree structures, node is a point where two or more lines meet. <br /><br /><b>Preferred address</b><br />Preferred address is an address assigned to an interface whose use by upper layer protocols is unrestricted. Preferred addresses may be used as the source (or destination) address of packets sent from (or to) the interface.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="http://www.iana.org/assignments/ipv6-address-space">address space</a>
                <a href="http://www.iana.org/assignments/ipv6-anycast-addresses">anycast</a>
                <a href="http://www.iana.org/assignments/ipv6-multicast-addresses">multicast</a>
                <a href="http://www.iana.org/assignments/perm-mcast-groupids">multicast groups</a>
                <a href="https://www.iana.org/assignments/ipv6-parameters">IPv6 parameters</a>
                <a href="https://www.iana.org/assignments/ipv6-tla-assignments">TLAs</a>
                <a href="https://www.ipv6.org/www_ipv6_default.html">www.ipv6.org</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1719.html">RFC 1719</a>] A Direction for IPng.
[<a href="https://www.rfc-editor.org/rfc/rfc1726.html">RFC 1726</a>] Technical Criteria for Choosing IP The Next Generation (IPng).
[<a href="https://www.rfc-editor.org/rfc/rfc1752.html">RFC 1752</a>] The Recommendation for the IP Next Generation Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc1809.html">RFC 1809</a>] Using the Flow Label Field in IPv6.
[<a href="https://www.rfc-editor.org/rfc/rfc1881.html">RFC 1881</a>] IPv6 Address Allocation Management.
[<a href="https://www.rfc-editor.org/rfc/rfc1887.html">RFC 1887</a>] An Architecture for IPv6 Unicast Address Allocation.
[<a href="https://www.rfc-editor.org/rfc/rfc1888.html">RFC 1888</a>] OSI NSAPs and IPv6.
[<a href="https://www.rfc-editor.org/rfc/rfc1981.html">RFC 1981</a>] Path MTU Discovery for IP version 6.
[<a href="https://www.rfc-editor.org/rfc/rfc2126.html">RFC 2126</a>] ISO Transport Service on top of TCP (ITOT).
[<a href="https://www.rfc-editor.org/rfc/rfc2170.html">RFC 2170</a>] Application REQuested IP over ATM (AREQUIPA).
[<a href="https://www.rfc-editor.org/rfc/rfc2185.html">RFC 2185</a>] Routing Aspects Of IPv6 Transition.
[<a href="https://www.rfc-editor.org/rfc/rfc2375.html">RFC 2375</a>] IPv6 Multicast Address Assignments.
[<a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>] Security Architecture for the Internet Protocol.
[<a href="https://www.rfc-editor.org/rfc/rfc2450.html">RFC 2450</a>] Proposed TLA and NLA Assignment Rules.
[<a href="https://www.rfc-editor.org/rfc/rfc2460.html">RFC 2460</a>] Internet Protocol, Version 6 (IPv6) Specification.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1883.html">RFC 1883</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2461.html">RFC 2461</a>] Neighbor Discovery for IP Version 6 (IPv6).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1970.html">RFC 1970</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2462.html">RFC 2462</a>] IPv6 Stateless Address Autoconfiguration.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1971.html">RFC 1971</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2464.html">RFC 2464</a>] Transmission of IPv6 Packets over Ethernet Networks.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1972.html">RFC 1972</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2465.html">RFC 2465</a>] Management Information Base for IP Version 6: Textual Conventions and General Group.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.ipv6MIB (1.3.6.1.2.1.55). 
[<a href="https://www.rfc-editor.org/rfc/rfc2467.html">RFC 2467</a>] Transmission of IPv6 Packets over FDDI Networks.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2019.html">RFC 2019</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2470.html">RFC 2470</a>] Transmission of IPv6 Packets over Token Ring Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2472.html">RFC 2472</a>] IP Version 6 over PPP.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2023.html">RFC 2023</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2473.html">RFC 2473</a>] Generic Packet Tunneling in IPv6 Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>] Definition of the Differentiated Services Field (DS Field) in the IPv4 and IPv6 Headers.
[<a href="https://www.rfc-editor.org/rfc/rfc2475.html">RFC 2475</a>] An Architecture for Differentiated Services.
[<a href="https://www.rfc-editor.org/rfc/rfc2491.html">RFC 2491</a>] IPv6 over Non-Broadcast Multiple Access (NBMA) networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2492.html">RFC 2492</a>] IPv6 over ATM Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2497.html">RFC 2497</a>] Transmission of IPv6 Packets over ARCnet Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2507.html">RFC 2507</a>] IP Header Compression.
[<a href="https://www.rfc-editor.org/rfc/rfc2508.html">RFC 2508</a>] Compressing IP/UDP/RTP Headers for Low-Speed Serial Links.
[<a href="https://www.rfc-editor.org/rfc/rfc2526.html">RFC 2526</a>] Reserved IPv6 Subnet Anycast Addresses.
[<a href="https://www.rfc-editor.org/rfc/rfc2529.html">RFC 2529</a>] Transmission of IPv6 over IPv4 Domains without Explicit Tunnels.
[<a href="https://www.rfc-editor.org/rfc/rfc2590.html">RFC 2590</a>] Transmission of IPv6 Packets over Frame Relay Networks Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc2675.html">RFC 2675</a>] IPv6 Jumbograms.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2147.html">RFC 2147</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2711.html">RFC 2711</a>] IPv6 Router Alert Option.
[<a href="https://www.rfc-editor.org/rfc/rfc2765.html">RFC 2765</a>] Stateless IP/ICMP Translation Algorithm (SIIT).
[<a href="https://www.rfc-editor.org/rfc/rfc2766.html">RFC 2766</a>] Network Address Translation - Protocol Translation (NAT-PT).
[<a href="https://www.rfc-editor.org/rfc/rfc2767.html">RFC 2767</a>] Dual Stack Hosts using the "Bump-In-the-Stack" Technique (BIS).
[<a href="https://www.rfc-editor.org/rfc/rfc2780.html">RFC 2780</a>] IANA Allocation Guidelines For Values In the Internet Protocol and Related Headers.
[<a href="https://www.rfc-editor.org/rfc/rfc2874.html">RFC 2874</a>] DNS Extensions to Support IPv6 Address Aggregation and Renumbering.
[<a href="https://www.rfc-editor.org/rfc/rfc2893.html">RFC 2893</a>] Transition Mechanisms for IPv6 Hosts and Routers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2928.html">RFC 2928</a>] Initial IPv6 Sub-TLA ID Assignments.
[<a href="https://www.rfc-editor.org/rfc/rfc3041.html">RFC 3041</a>] Privacy Extensions for Stateless Address Autoconfiguration in IPv6.
[<a href="https://www.rfc-editor.org/rfc/rfc3053.html">RFC 3053</a>] IPv6 Tunnel Broker.
[<a href="https://www.rfc-editor.org/rfc/rfc3056.html">RFC 3056</a>] Connection of IPv6 Domains via IPv4 Clouds.
[<a href="https://www.rfc-editor.org/rfc/rfc3111.html">RFC 3111</a>] Service Location Protocol Modifications for IPv6.
[<a href="https://www.rfc-editor.org/rfc/rfc3142.html">RFC 3142</a>] An IPv6-to-IPv4 Transport Relay Translator.
[<a href="https://www.rfc-editor.org/rfc/rfc3146.html">RFC 3146</a>] Transmission of IPv6 Packets over IEEE 1394 Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc3178.html">RFC 3178</a>] IPv6 Multihoming Support at Site Exit Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc3306.html">RFC 3306</a>] Unicast-Prefix-based IPv6 Multicast Addresses.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3956.html">RFC 3956</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3307.html">RFC 3307</a>] Allocation Guidelines for IPv6 Multicast Addresses.
[<a href="https://www.rfc-editor.org/rfc/rfc3314.html">RFC 3314</a>] Recommendations for IPv6 in Third Generation Partnership Project (3GPP) Standards.
[<a href="https://www.rfc-editor.org/rfc/rfc3316.html">RFC 3316</a>] Internet Protocol Version 6 (IPv6) for Some Second and Third Generation Cellular Hosts.
[<a href="https://www.rfc-editor.org/rfc/rfc3484.html">RFC 3484</a>] Default Address Selection for Internet Protocol version 6 (IPv6).
[<a href="https://www.rfc-editor.org/rfc/rfc3493.html">RFC 3493</a>] Basic Socket Interface Extensions for IPv6.
                Defines IPv6 modifications for the socket programming library. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2553.html">RFC 2553</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3513.html">RFC 3513</a>] Internet Protocol Version 6 (IPv6) Addressing Architecture.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2373.html">RFC 2373</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3531.html">RFC 3531</a>] A Flexible Method for Managing the Assignment of Bits of an IPv6 Address Block.
[<a href="https://www.rfc-editor.org/rfc/rfc3542.html">RFC 3542</a>] Advanced Sockets Application Program Interface (API) for IPv6.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2292.html">RFC 2292</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3545.html">RFC 3545</a>] Enhanced Compressed RTP (CRTP) for Links with High Delay, Packet Loss and Reordering.
[<a href="https://www.rfc-editor.org/rfc/rfc3572.html">RFC 3572</a>] Internet Protocol Version 6 over MAPOS (Multiple Access Protocol Over SONET/SDH).
[<a href="https://www.rfc-editor.org/rfc/rfc3582.html">RFC 3582</a>] Goals for IPv6 Site-Multihoming Architectures.
[<a href="https://www.rfc-editor.org/rfc/rfc3587.html">RFC 3587</a>] IPv6 Global Unicast Address Format.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2374.html">RFC 2374</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3595.html">RFC 3595</a>] Textual Conventions for IPv6 Flow Label.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.ipv6FlowLabelMIB (1.3.6.1.2.1.103). 
[<a href="https://www.rfc-editor.org/rfc/rfc3627.html">RFC 3627</a>] Use of /127 Prefix Length Between Routers Considered Harmful.
[<a href="https://www.rfc-editor.org/rfc/rfc3697.html">RFC 3697</a>] IPv6 Flow Label Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc3736.html">RFC 3736</a>] Stateless Dynamic Host Configuration Protocol (DHCP) Service for IPv6.
[<a href="https://www.rfc-editor.org/rfc/rfc3750.html">RFC 3750</a>] Unmanaged Networks IPv6 Transition Scenarios.
[<a href="https://www.rfc-editor.org/rfc/rfc3756.html">RFC 3756</a>] IPv6 Neighbor Discovery (ND) Trust Models and Threats.
[<a href="https://www.rfc-editor.org/rfc/rfc3769.html">RFC 3769</a>] Requirements for IPv6 Prefix Delegation.
[<a href="https://www.rfc-editor.org/rfc/rfc3831.html">RFC 3831</a>] Transmission of IPv6 Packets over Fibre Channel.
[<a href="https://www.rfc-editor.org/rfc/rfc3849.html">RFC 3849</a>] IPv6 Address Prefix Reserved for Documentation.
[<a href="https://www.rfc-editor.org/rfc/rfc3879.html">RFC 3879</a>] Deprecating Site Local Addresses.
                Deprecates IPv6 site-local unicast prefix FEC0::/10. 
[<a href="https://www.rfc-editor.org/rfc/rfc3904.html">RFC 3904</a>] Evaluation of IPv6 Transition Mechanisms for Unmanaged Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc3919.html">RFC 3919</a>] Remote Network Monitoring (RMON) Protocol Identifiers for IPv6 and Multi Protocol Label Switching (MPLS).
[<a href="https://www.rfc-editor.org/rfc/rfc3956.html">RFC 3956</a>] Embedding the Rendezvous Point (RP) Address in an IPv6 Multicast Address.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3306.html">RFC 3306</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3964.html">RFC 3964</a>] Security Considerations for 6to4.
[<a href="https://www.rfc-editor.org/rfc/rfc4007.html">RFC 4007</a>] IPv6 Scoped Address Architecture.
[<a href="https://www.rfc-editor.org/rfc/rfc4029.html">RFC 4029</a>] Scenarios and Analysis for Introducing IPv6 into ISP Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc4038.html">RFC 4038</a>] Application Aspects of IPv6 Transition.
[<a href="https://www.rfc-editor.org/rfc/rfc4048.html">RFC 4048</a>] <a href="https://www.rfc-editor.org/rfc/rfc1888.html">RFC 1888</a> Is Obsolete.
[<a href="https://www.rfc-editor.org/rfc/rfc4057.html">RFC 4057</a>] IPv6 Enterprise Network Scenarios.
[<a href="https://www.rfc-editor.org/rfc/rfc4113.html">RFC 4113</a>] Management Information Base for the User Datagram Protocol (UDP).
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.udp (1.3.6.1.2.1.7). 
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.udpMIB (1.3.6.1.2.1.50). 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2013.html">RFC 2013</a>, <a href="https://www.rfc-editor.org/rfc/rfc2454.html">RFC 2454</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc4159.html">RFC 4159</a>] Deprecation of "ip6.int".
[<a href="https://www.rfc-editor.org/rfc/rfc4177.html">RFC 4177</a>] Architectural Approaches to Multi-homing for IPv6.<hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc1883.html">RFC 1883</a>] Internet Protocol, Version 6 (IPv6) Specification.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2460.html">RFC 2460</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1884.html">RFC 1884</a>] IP Version 6 Addressing Architecture.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2373.html">RFC 2373</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1897.html">RFC 1897</a>] IPv6 Testing Address Allocation.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2471.html">RFC 2471</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>] Transition Mechanisms for IPv6 Hosts and Routers.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2893.html">RFC 2893</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1970.html">RFC 1970</a>] Neighbor Discovery for IP Version 6 (IPv6).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2461.html">RFC 2461</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1971.html">RFC 1971</a>] IPv6 Stateless Address Autoconfiguration.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2462.html">RFC 2462</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1972.html">RFC 1972</a>] A Method for the Transmission of IPv6 Packets over Ethernet Networks.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2464.html">RFC 2464</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2019.html">RFC 2019</a>] A Method for the Transmission of IPv6 Packets over FDDI Networks.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2467.html">RFC 2467</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2023.html">RFC 2023</a>] IP Version 6 over PPP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2472.html">RFC 2472</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2073.html">RFC 2073</a>] An IPv6 Provider-Based Unicast Address Format.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2374.html">RFC 2374</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2133.html">RFC 2133</a>] Basic Socket Interface Extensions for IPv6.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2553.html">RFC 2553</a>. 
                Defines IPv6 modifications for the socket programming library. 
[<a href="https://www.rfc-editor.org/rfc/rfc2147.html">RFC 2147</a>] TCP and UDP over IPv6 Jumbograms.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2675.html">RFC 2675</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1883.html">RFC 1883</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2292.html">RFC 2292</a>] Advanced Sockets API for IPv6.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3542.html">RFC 3542</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2553.html">RFC 2553</a>] Basic Socket Interface Extensions for IPv6.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3493.html">RFC 3493</a>. 
                Defines IPv6 modifications for the socket programming library. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2133.html">RFC 2133</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2373.html">RFC 2373</a>] IP Version 6 Addressing Architecture.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3513.html">RFC 3513</a>.
                Defines the IPv6 addressing architecture. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1884.html">RFC 1884</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2374.html">RFC 2374</a>] An IPv6 Aggregatable Global Unicast Address Format.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3587.html">RFC 3587</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2073.html">RFC 2073</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2452.html">RFC 2452</a>] IP Version 6 Management Information Base for the Transmission Control Protocol. 
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc4022.html">RFC 4022</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2454.html">RFC 2454</a>] IP Version 6 Management Information Base for the User Datagram Protocol. 
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc4113.html">RFC 4113</a>. 
                Defines SNMP MIB iso.org.dod.internet.experimental.ipv6UdpMIB (1.3.6.1.3.87). 
[<a href="https://www.rfc-editor.org/rfc/rfc2471.html">RFC 2471</a>] IPv6 Testing Address Allocation.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3701.html">RFC 3701</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1897.html">RFC 1897</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2732.html">RFC 2732</a>] Format for Literal IPv6 Addresses in URL's.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3986.html">RFC 3986</a>.<hr /><b>Publications:</b>
[ISBN 0138505055] IPv6: The New Internet Protocol.
                		  </div>
		  
</section>


---
id: protocol-ip-fragment
slug: ip-fragment
name: IP Fragment
expandedName: IP Fragment
origin: historical
provenance:
  source: protocols/protocol_IP Fragment.htm
  sha256: f6359cb85c19f70170afbeffd8861430623ae26ec10434416416ed76c312ae3c
  provider: 'Colasoft Co., Ltd.'
aliases: []
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: IP Fragment
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Connectionless network layer protocol
  - label: EtherType
    html: '0x0800'
  - label: SNMP MIBs
    html: |2-
       iso.org.dod.internet.mgmt.mib-2.ip (1.3.6.1.2.1.4) 
      <br />iso.org.dod.internet.mgmt.mib-2.ipMIB (1.3.6.1.2.1.48) 
      <br />iso.org.dod.internet.mgmt.mib-2.ipMRouteStdMIB (1.3.6.1.2.1.83)
  - label: Related protocols
    html: 'IPv6,<br />TCP,<br />UDP,<br />ICMP,<br />SNMP,<br />FTP,<br />TELNET,<br />SMTP,<br />ARP,<br />RARP'
  - label: Working groups
    html: |-
      Diffserv, Differentiated Services.
      <br />Iip1394, IP Over IEEE 1394
originalUpdate: '2005-12-09 11:48:31'
rfcs:
  - 760
  - 781
  - 791
  - 793
  - 795
  - 796
  - 815
  - 877
  - 894
  - 895
  - 917
  - 919
  - 922
  - 932
  - 936
  - 940
  - 948
  - 950
  - 963
  - 966
  - 988
  - 1009
  - 1038
  - 1042
  - 1044
  - 1046
  - 1051
  - 1054
  - 1055
  - 1060
  - 1063
  - 1066
  - 1070
  - 1071
  - 1088
  - 1103
  - 1108
  - 1112
  - 1122
  - 1123
  - 1132
  - 1141
  - 1156
  - 1158
  - 1180
  - 1188
  - 1191
  - 1195
  - 1201
  - 1209
  - 1213
  - 1219
  - 1226
  - 1234
  - 1236
  - 1242
  - 1247
  - 1248
  - 1349
  - 1354
  - 1356
  - 1365
  - 1366
  - 1374
  - 1375
  - 1390
  - 1393
  - 1454
  - 1455
  - 1466
  - 1469
  - 1475
  - 1577
  - 1597
  - 1608
  - 1620
  - 1624
  - 1626
  - 1716
  - 1744
  - 1755
  - 1770
  - 1797
  - 1812
  - 1814
  - 1821
  - 1825
  - 1826
  - 1827
  - 1858
  - 1860
  - 1878
  - 1917
  - 1918
  - 1932
  - 1933
  - 1944
  - 1953
  - 1954
  - 2002
  - 2003
  - 2004
  - 2005
  - 2006
  - 2011
  - 2022
  - 2067
  - 2085
  - 2096
  - 2101
  - 2113
  - 2143
  - 2176
  - 2225
  - 2226
  - 2285
  - 2336
  - 2344
  - 2365
  - 2401
  - 2432
  - 2474
  - 2475
  - 2481
  - 2507
  - 2508
  - 2509
  - 2625
  - 2697
  - 2698
  - 2728
  - 2734
  - 2757
  - 2765
  - 2766
  - 2767
  - 2780
  - 2834
  - 2835
  - 2893
  - 2932
  - 3021
  - 3095
  - 3128
  - 3142
  - 3168
  - 3330
  - 3393
  - 3544
  - 3545
  - 3754
  - 3789
  - 3790
  - 3791
  - 3792
  - 3793
  - 3794
  - 3795
  - 3796
  - 3843
related:
  - protocol-ipv6
  - protocol-tcp
  - protocol-udp
  - protocol-icmp
  - protocol-snmp
  - protocol-ftp
  - protocol-telnet
  - protocol-smtp
  - protocol-arp
  - protocol-rarp
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

			The Internet Protocol allows IP fragment so that datagrams can be fragmented into pieces small enough to pass over a link with a smaller MTU than the original datagram size. When one IP host has a large amount of data to send to another host, the data is transmitted as a series of IP datagrams. It is usually preferable that these datagrams be of the largest size that does not require fragmentation anywhere along the path from the source to the destination. This datagram size is referred to as the Path MTU (PMTU), and it is equal to the minimum of the MTUs of each hop in the path. A shortcoming of the current Internet protocol suite is the lack of a standard mechanism for a host to discover the PMTU of an arbitrary path.
<br />
<br />The IP layer at the receiving host must accumulate these fragments until enough have arrived to completely reconstitute the original datagram. The specification document for IP gives a complete description of the reassembly mechanism, and contains several examples. It also provides one possible algorithm for reassembly, based on keeping track of arriving fragments in a vector of bits. This document describes an alternate approach which should prove more suitable in some machines.
<br />
<br />A superficial examination of the reassembly process may suggest that it is rather complicated. First, it is necessary to keep track of all the fragments, which suggests a small bookkeeping job. Second, when a new fragment arrives, it may combine with the existing fragments in a number of different ways. It may precisely fill the space between two fragments, or it may overlap with existing fragments, or completely duplicate existing fragments, or partially fill a space between two fragments without abutting either of them. Thus, it might seem that the reassembly process might involve designing a fairly complicated algorithm that tests for a number of different options.
<br /><hr />
<br /><b>Fragment Processing Algorithm</b>
<br />An arriving fragment can fill any of the existing holes in a number of ways. Most simply, it can completely fill a hole. Alternatively, it may leave some remaining space at either the beginning or the end of an existing hole. Or finally, it can lie in the middle of an existing hole, breaking the hole in half and leaving a smaller hole at each end. Because of these possibilities, it might seem that a number of tests must be made when a new fragment arrives, leading to a rather complicated algorithm. In fact, if properly expressed, the algorithm can compare each hole to the arriving fragment in only four tests.
<br />
<br /><ul><li>Select the next hole descriptor from the hole descriptor list. If there are no more entries, go to step eight.<br /><br /></li>

<li>If fragment.first is greater than hole.last, go to step one.<br /><br /></li>

<li>If fragment.last is less than hole.first, go to step one.
<br />If either step two or step three is true, then the newly arrived fragment does not overlap with the hole in any way, so we need pay no further attention to this hole. We return to the beginning of the algorithm where we select the next hole for examination.<br /><br /></li>

<li>Delete the current entry from the hole descriptor list.
<br />Since neither step two nor step three was true, the newly arrived fragment does interact with this hole in some way. Therefore, the current descriptor will no longer be valid. We will destroy it, and in the next two steps we will determine whether or not it is necessary to create any new hole descriptors.<br /><br /></li>

<li>If fragment.first is greater than hole.first, then create a new hole descriptor "new_hole" with new_hole.first equal to hole.first, and new_hole.last equal to fragment.first minus one.
<br />
<br />If the test in step five is true, then the first part of the original hole is not filled by this fragment. We create a new descriptor for this smaller hole.<br /><br /></li>

<li>If fragment.last is less than hole.last and fragment.more fragments is true, then create a new hole descriptor "new_hole", with new_hole.first equal to fragment.last plus one and new_hole.last equal to hole.last.<br /><br /></li>

<li>Go to step one.<br /><br /></li>

<li>If the hole descriptor list is now empty, the datagram is now complete. Pass it on to the higher level protocol processor for further handling. Otherwise, return.</li></ul>
<br />
<br /><b>Complete Algorithm</b>
<br />In addition to the algorithm described above there are two parts to the reassembly process. First, when a fragment arrives, it is necessary to find the reassembly buffer associated with that fragment. This requires some mechanism for searching all the existing reassembly buffers. The correct reassembly buffer is identified by an equality of the following fields: the foreign and local internet address, the protocol ID, and the identification field. 
<br />
<br />The final part of the algorithm is some sort of timer based mechanism which decrements the time to live field of each partially reassembled datagram, so that incomplete datagrams which have outlived their usefulness can be detected and deleted. One can either create a demon which comes alive once a second and decrements the field in each datagram by one, or one can read the clock when each first fragment arrives, and queue some sort of timer call, using whatever system mechanism is appropriate, to reap the datagram when its time has come.
<br />
<br />An implementation of the complete algorithm comprising all these parts was constructed in BCPL as a test. The complete algorithm took less than one and one-half pages of listing, and generated approximately 400 nova machine instructions. That portion of the algorithm actually involved with management of hole descriptors is about 20 lines of code.
<br /><hr />
<br /><b>IP Fragment Filtering</b>
<br />IP fragmentation can be used to disguise TCP packets from IP filters used in routers and hosts.
<br />
<br />System administrators rely on manufacturers of networking equipment to provide them with packet filters; these filters are used for keeping attackers from accessing private systems and information, while permitting friendly agents to transfer data between private nets and the Internet. For this reason, it is important for network equipment vendors to anticipate possible attacks against their equipment and to implement robust mechanisms to deflect such attacks.
<br />
<br /><ul><li><b>Filtering IP Fragments</b>
<br />IP packet filters on routers are designed with a user interface that hides packet fragment from the administrator; conceptually, an IP filter is applied to each IP packet as a complete entity.
<br />
<br />One approach to fragment filtering, described by Mogul, involves keeping track of the results of applying filter rules to the first fragment (FO = 0) and applying them to subsequent fragments of the same packet. The filtering module would maintain a list of packets indexed by the source address, destination address, protocol, and IP ID. When the initial (FO = 0) fragment is seen, if the MF bit is set, a list item would be allocated to hold the result of filter access checks. When packets with a non-zero FO come in, look up the list element with a matching SA/DA/PROT/ID and apply the stored result (pass or block). When a fragment with a zero MF bit is seen, free the list element.
<br />
<br />Although this method (or some refinement of it) might successfully remove any trace of the offending whole packet, it has some difficulties. Fragments that arrive out of order, possibly because they traveled over different paths, violate one of the design assumptions, and undesired fragments can leak through as a result. Furthermore, if the filtering router lies on one of several parallel paths, the filtering module will not see every fragment and cannot guarantee complete fragment filtering in the case of packets that should be dropped.
<br />
<br />Fortunately, we do not need to remove all fragments of an offending packet. Since "interesting" packet information is contained in the headers at the beginning, filters are generally applied only to the first fragment. Non-first fragments are passed without filtering, because it will be impossible for the destination host to complete reassembly of the packet if the first fragment is missing, and therefore the entire packet will be discarded.
<br />
<br />The Internet Protocol allows fragment of packets into pieces so small as to be impractical because of data and computational overhead. Attackers can sometimes exploit typical filter behavior and the ability to create peculiar fragment sequences in order to sneak otherwise disallowed packets past the filter. In normal practice, such path a logical fragment is never used, so it is safe to drop these fragments without danger of preventing normal operation.<br /><br /></li>

<li><b>Tiny Fragment Attack</b>
<br />With many IP implementations it is possible to impose an unusually small fragment size on outgoing packets. If the fragment size is made small enough to force some of a TCP packet's TCP header fields into the second fragment, filter rules that specify patterns for those fields will not match. If the filtering implementation does not enforce a minimum fragment size, a disallowed packet might be passed because it didn't hit a match in the filter.
<br />
<br />Note that, for the purpose of security, it is not sufficient to merely guarantee that a fragment contains at least 8 octets of data beyond the IP header because important transport header information (e.g., the CODE field of the TCP header) might be beyond the 8th data octet.
<br />
<br />In a router, one can prevent this sort of attack by enforcing certain limits on fragments passing through, namely, that the first fragment be large enough to contain all the necessary header information.
<br />
<br />There are two ways to guarantee that the first fragment of a "passed" packet includes all the required fields, one direct, the other indirect.<br /><br /></li>

<li><b>Overlapping Fragment Attack</b>
<br />The current IP protocol specification, describes a reassembly algorithm that results in new fragments overwriting any overlapped portions of previously-received fragments.
<br />
<br />Given such a reassembly implementation, an attacker could construct a series of packets in which the lowest (zero-offset) fragment would contain innocuous data (and thereby be passed by administrative packet filters), and in which some subsequent packet having a non-zero offset would overlap TCP header information (destination port, for instance) and cause it to be modified. The second packet would be passed through most filter implementations because it does not have a zero fragment offset.
<br />
<br />Thus, fully-compliant IP implementations are not guaranteed to be immune to overlapping-fragment attacks. The 4.3 BSD reassembly implementation takes care to avoid these attacks by forcing data from lower-offset fragments to take precedence over data from higher-offset fragments. However, not all IP implementations are based on the original BSD code, and it is likely that some of them are vulnerable.
<br />
<br />Since no standard requires that an overlap-safe reassembly algorithm be used, the potential vulnerability of hosts to this attack is quite large.
<br />
<br />By adopting a better strategy in a router's IP filtering code, one can be assured of blocking this attack. If the router's filtering module enforces a minimum fragment offset for fragments that have non-zero offsets, it can prevent overlaps in filter parameter regions of the transport headers.
<br />
<br />In the case of TCP, this minimum is sixteen octets, to ensure that the TCP flags field is never contained in a non-zero-offset fragment. If a TCP fragment has FO = 1, it should be discarded because it starts only eight octets into the transport header. Conveniently, dropping FO = 1 fragments also protects against the tiny fragment attack, as discussed earlier.
<br />
<br />An IP stack must be capable of passing an 8 byte IP data payload without further fragmentation (fragments sit on 8 byte boundaries). Since an IP header can be up to 60 bytes long (including options), this means that the minimum MTU on a link should be 68 bytes.
<br />
<br />A typical IP header is only 20 bytes long and can therefore carry 48 bytes of data. No one in the real world should ever be generating a TCP packet with FO = 1, as it would require both that a previous system fragmenting IP data down to the 8 byte minimum and a 60 byte IP header.
<br />
<br />A general algorithm, then, for ensuring that filters work in the face of both the tiny fragment attack and the overlapping fragment attack is:
<br /><ul><li>         IF FO=1 and PROTOCOL=TCP then
<br /></li><li><ul><li>                 DROP PACKET</li></ul></li></ul>
<br />
<br />If filtering based on fields in other transport protocol headers is provided in a router, the minimum could be greater, depending on the position of those fields in the header. In particular, if filtering is permitted on data beyond the sixteenth octet of the transport header, either because of a flexible user interface or the implementation of filters for some new transport protocol, dropping packets with FO = 1 might not be sufficient.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Tiny Fragment Attack</b>

n this example, the first fragment contains only eight octets of data (the minimum 
fragment size). In the case of TCP, this is sufficient to contain the source and 
destination port numbers, but it will force the TCP flags field into the second 
fragment.

Filters that attempt to drop connection requests (TCP datagrams having SYN=1 and 
ACK=0) will be unable to test these flags in the first octet, and will typically ignore 
them in subsequent fragments.

FRAGMENT 1
          IP HEADER
          +-+-+-+     +-+-+-+-+-+-+-+-+-+-+-+     +-+-+-+
          |     | ... | Fragment Offset = 0 | ... |     |
          +-+-+-+     +-+-+-+-+-+-+-+-+-+-+-+     +-+-+-+

          TCP HEADER
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |        Source Port            |       Destination Port        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                       Sequence Number                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

          FRAGMENT 2
          IP HEADER
          +-+-+-+     +-+-+-+-+-+-+-+-+-+-+-+     +-+-+-+
          |     | ... | Fragment Offset = 1 | ... |     |
          +-+-+-+     +-+-+-+-+-+-+-+-+-+-+-+     +-+-+-+

          TCP HEADER
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                    Acknowledgment Number                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |  Data |           |U|A|P|R|S|F|                               |
          | Offset| Reserved  |R|C|S|S|Y|I|            Window             |
          |       |           |G|K|H|T|N|N|                               |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Overlapping Fragment Attack</b>

In this example, fragments are large enough to satisfy the minimum size requirements 
described in the previous section. The filter is configured to drop TCP connection 
request packets.

The first fragment contains values, e.g., SYN=0, ACK=1, that enable it to pass 
through the filter unharmed.

The second fragment, with a fragment offset of eight octets, contains TCP Flags that 
differ from those given in the first fragment, e.g., SYN=1, ACK=0. Since this second 
fragment is not a 0-offset fragment, it will not be checked, and it, too will pass 
through the filter.

The receiving host, if it conforms fully to the algorithms given in RFC 791, will 
reconstitute the packet as a connection request because the "bad" data arrived 
later.

FRAGMENT 1
          IP HEADER
          +-+-+-+     +-+-+-+-+-+-+-+-+-+-+-+     +-+-+-+
          |     | ... | Fragment Offset = 0 | ... |     |
          +-+-+-+     +-+-+-+-+-+-+-+-+-+-+-+     +-+-+-+

          TCP HEADER
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |        Source Port            |       Destination Port        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                       Sequence Number                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                    Acknowledgment Number                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |  Data |           |U|A|P|R|S|F|                               |
          | Offset| Reserved  |R|C|S|S|Y|I|            Window             |
          |       |           |G|K|H|T|N|N|                               |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
                                       .
                                       .
                                       .
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                        (Other data)                           |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

          FRAGMENT 2
          IP HEADER
          +-+-+-+     +-+-+-+-+-+-+-+-+-+-+-+     +-+-+-+
          |     | ... | Fragment Offset = 1 | ... |     |
          +-+-+-+     +-+-+-+-+-+-+-+-+-+-+-+     +-+-+-+

          TCP HEADER
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                    Acknowledgment Number                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |  Data |           |U|A|P|R|S|F|                               |
          | Offset| Reserved  |R|C|S|S|Y|I|            Window             |
          |       |           |G|K|H|T|N|N|                               |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
                                       .
                                       .
                                       .
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                        (Other data)                           |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+


If the receiving host has a reassembly algorithm that prevents new data from 
overwriting data received previously, we can send Fragment 2 first, followed by 
Fragment 1, and accomplish the same successful attack.</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">IP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IP Fragment</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Access</b><br />(v.) 
<br />*To use. For example, programs can access memory , which means they read data from or write data to main memory. A user can access files, directories, computers, or peripheral devices. 
<br />*More specifically, access often means to read data from or write data to a mass storage device. The time it takes to locate a single byte of information on a mass-storage device is called the access time. 
<br />*To visit a Web site. 
<br />
<br />(n.)
<br /> *The act of reading data from or writing data to a storage device. 
<br />*A privilege to use computer information in some manner. For example, a user might be granted read access to a file, meaning that the user can read the file but cannot modify or delete it. Most operating systems have several different types of access privileges that can be granted or denied to specific users or groups of users. 
<br />*When capitalized as Access, short for Microsoft Access.<br /><br /><b>Agent</b><br />Agent is a program that performs some information gathering or processing task in the background. Typically, an agent is given a very small and well-defined task.<br /><br /><b>Algorithm</b><br />Algorithm is a formula or set of steps for solving a particular problem. To be an algorithm, a set of rules must be unambiguous and have a clear stopping point. Algorithms can be expressed in any language, from natural languages like English or French to programming languages like FORTRAN.
<br />
<br />We use algorithms every day. For example, a recipe for baking a cake is an algorithm. Most programs, with the exception of some artificial intelligence applications, consist of algorithms. Inventing elegant algorithms -- algorithms that are simple and require the fewest steps possible -- is one of the principal challenges in programming.<br /><br /><b>BSD</b><br />BSD (Berkeley Software Distribution) is the Unix derivative distributed by the University of California, Berkeley starting in the 1970s. The name is also used collectively for the modern descendants of these distributions.<br /><br /><b>Bit</b><br />Bit (binary digit), the smallest unit of information on a machine, a leading statistician and adviser to five presidents. A single bit can hold only one of two values: 0 or 1. More meaningful information is obtained by combining consecutive bits into larger units. For example, a byte is composed of 8 consecutive bits.<br /><br /><b>Buffer</b><br />Buffer is a temporary storage area, usually in RAM. The purpose of most buffers is to act as a holding area, enabling the CPU to manipulate data before transferring it to a device. Because the processes of reading and writing data to a disk are relatively slow, many programs keep track of data changes in a buffer and then copy the buffer to a disk.<br /><br /><b>Byte</b><br />Byte (binary term) is a unit of storage capable of holding a single character. On almost all modern computers, a byte is equal to 8 bits. Large amounts of memory are indicated in terms of kilobytes (1,024 bytes), megabytes (1,048,576 bytes), and gigabytes (1,073,741,824 bytes).<br /><br /><b>Data</b><br />* Distinct pieces of information, usually formatted in a special way. All software is divided into two general categories: data and programs. Programs are collections of instructions for manipulating data. Data can exist in a variety of forms -- as numbers or text on pieces of paper, as bits and bytes stored in electronic memory, or as facts stored in a person's mind. Strictly speaking, data is the plural of datum, a single piece of information. In practice, however, people use data as both the singular and plural form of the word. 
<br />
<br />* The term data is often used to distinguish binary machine-readable information from textual human-readable information. For example, some applications make a distinction between data files (files that contain binary data) and text files (files that contain ASCII data). 
<br />
<br />* In database management systems, data files are the files that store the database information, whereas other files, such as index files and data dictionaries, store administrative information, known as metadata.<br /><br /><b>Datagram</b><br />A datagram is a self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network.
<br /> 	
<br />The term has been generally replaced by the term packet. Datagrams or packets are the message units that the Internet Protocol deals with and that the Internet transports. A datagram or packet needs to be self-contained without reliance on earlier exchanges because there is no connection of fixed duration between the two communicating points as there is, for example, in most voice telephone conversations.<br /><br /><b>Filter</b><br />*A program that accepts a certain type of data as input, transforms it in some manner, and then outputs the transformed data.
<br />*A pattern through which data is passed. Only data that matches the pattern is allowed to pass through the filter. 
<br />*In paint programs and image editors, a filter is an effect that can be applied to a bit map.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>IP</b><br />The IP (Internet Protocol) is a protocol which uses datagrams to communicate over a packet-switched network. IP specifies the format of packets, also called datagrams, and the addressing scheme. Most networks combine IP with a higher-level protocol called Transmission Control Protocol (TCP), which establishes a virtual connection between a destination and a source. 
<br />
<br />IP by itself is something like the postal system. It allows you to address a package and drop it in the system, but there's no direct link between you and the recipient. TCP/IP, on the other hand, establishes a connection between two hosts so that they can send messages back and forth for a period of time. 
<br />
<br />The current version of IP is IPv4. A new version, called IPv6 or IPng, is under development.<br /><br /><b>IP Filter</b><br />IP Filter (commonly referred to as ipf) is a software package that can be used to provide network address translation (NAT) or firewall services. It can either be used as a loadable kernel module or incorporated into the UNIX kernel; use as a loadable kernel module where possible is highly recommended.<br /><br /><b>IP Fragment</b><br />The Internet Protocol allows datagrams can be fragmented into pieces small enough to transmitted as a single unit will arrive at its final destination <br /><br /><b>Interface</b><br />Interface is the connection between a router and one of its attached networks. An interface has state information associated with it, which is obtained from the underlying lower level protocols and the routing protocol itself. An interface to a network has associated with it a single IP address and mask (unless the network is an unnumbered point-to-point network). An interface is sometimes also referred to as a link.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>MTU</b><br />MTU (Maximum transmission unit) is the size of the largest packet that can be transmitted over a particular medium. Packets exceeding the MTU value in size are fragmented or segmented, and then reassembled at the receiving end. If fragmentation is not supported or possible, a packet that exceeds the MTU value is dropped.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>Path</b><br />The route taken by the SCTP packets sent by one SCTP endpoint to a specific destination transport address of its peer SCTP endpoint. Sending to different destination transport addresses does not necessarily guarantee getting separate paths.<br /><br /><b>Process</b><br />(n) An executing program. The term is used loosely as a synonym of task. 
<br />(v) To perform some useful operations on data.<br /><br /><b>Protocol stack</b><br />Protocol stack is a set of network protocol layers that work together. The OSI Reference Model that defines seven protocol layers is often called a stack, as is the set of TCP/IP protocols that define communication over the internet.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>TCP/IP</b><br />TCP/IP(transmission Control Protocol/Internet Protocol) is the suite of communications protocols used to connect hosts on the Internet. TCP/IP uses several protocols, the two main ones being TCP and IP. TCP/IP is built into the UNIX operating system and is used by the Internet, making it the de facto standard for transmitting data over networks. Even network operating systems that have their own protocols, such as Netware, also support TCP/IP.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[IEN 92] Protocol Options.
[IEN 95] Source Routing.
[IEN 114] PROTOCOL OPTIONS.
[IEN 123] DOD STANDARD INTERNET PROTOCOL.
                Obsoletes: IEN 26, IEN 28, IEN 41, IEN 44, IEN 54, IEN 80, IEN 111. 
[IEN 186] PROPOSED DCEC IP SPECIFICATION.
[IEN 212] IP - Local Area Network Addressing Issues.
[<a href="https://www.rfc-editor.org/rfc/rfc781.html">RFC 781</a>] A SPECIFICATION OF THE INTERNET PROTOCOL (IP) TIMESTAMP OPTION.
[<a href="https://www.rfc-editor.org/rfc/rfc791.html">RFC 791</a>] Internet Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc760.html">RFC 760</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc795.html">RFC 795</a>] SERVICE MAPPINGS.
[<a href="https://www.rfc-editor.org/rfc/rfc796.html">RFC 796</a>] ADDRESS MAPPINGS.
                Obsoletes: IEN 115. 
[<a href="https://www.rfc-editor.org/rfc/rfc815.html">RFC 815</a>] IP DATAGRAM REASSEMBLY ALGORITHMS.
[<a href="https://www.rfc-editor.org/rfc/rfc894.html">RFC 894</a>] A Standard for the Transmission of IP Datagrams over Ethernet Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc895.html">RFC 895</a>] A Standard for the Transmission of IP Datagrams over Experimental Ethernet Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc917.html">RFC 917</a>] INTERNET SUBNETS.
[<a href="https://www.rfc-editor.org/rfc/rfc919.html">RFC 919</a>] BROADCASTING INTERNET DATAGRAMS.
[<a href="https://www.rfc-editor.org/rfc/rfc922.html">RFC 922</a>] BROADCASTING INTERNET DATAGRAMS IN THE PRESENCE OF SUBNETS.
[<a href="https://www.rfc-editor.org/rfc/rfc932.html">RFC 932</a>] A SUBNETWORK ADDRESSING SCHEME.
[<a href="https://www.rfc-editor.org/rfc/rfc936.html">RFC 936</a>] Another Internet Subnet Addressing Scheme.
[<a href="https://www.rfc-editor.org/rfc/rfc940.html">RFC 940</a>] Toward an Internet Standard Scheme for Subnetting.
[<a href="https://www.rfc-editor.org/rfc/rfc950.html">RFC 950</a>] IP Subnet Extension.
[<a href="https://www.rfc-editor.org/rfc/rfc963.html">RFC 963</a>] SOME PROBLEMS WITH THE SPECIFICATION OF THE MILITARY STANDARD INTERNET PROTOCOL.
[<a href="https://www.rfc-editor.org/rfc/rfc1042.html">RFC 1042</a>] A Standard for the Transmission of IP Datagrams over IEEE 802 Networks.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc948.html">RFC 948</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1044.html">RFC 1044</a>] Internet Protocol on Network Systems HYPERchannel Protocol Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc1046.html">RFC 1046</a>] A Queuing Algorithm to Provide Type-of-Service for IP Links.
[<a href="https://www.rfc-editor.org/rfc/rfc1055.html">RFC 1055</a>] A NONSTANDARD FOR TRANSMISSION OF IP DATAGRAMS OVER SERIAL LINES: SLIP.
[<a href="https://www.rfc-editor.org/rfc/rfc1070.html">RFC 1070</a>] Use of the Internet as a Subnetwork for Experimentation with the OSI Network Layer.
[<a href="https://www.rfc-editor.org/rfc/rfc1088.html">RFC 1088</a>] A Standard for the Transmission of IP Datagrams over NetBIOS Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1108.html">RFC 1108</a>] U.S. Department of Defense Security Options for the Internet Protocol.
                Defines IP options 2 and 5. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1038.html">RFC 1038</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a>] Host Extensions for IP Multicasting.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc988.html">RFC 988</a>, <a href="https://www.rfc-editor.org/rfc/rfc1054.html">RFC 1054</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>] Requirements for Internet Hosts -- Communication Layers.
[<a href="https://www.rfc-editor.org/rfc/rfc1132.html">RFC 1132</a>] A Standard for the Transmission of 802.2 Packets over IPX Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1141.html">RFC 1141</a>] Incremental Updating of the Internet Checksum.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1071.html">RFC 1071</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1180.html">RFC 1180</a>] A TCP/IP Tutorial.
[<a href="https://www.rfc-editor.org/rfc/rfc1188.html">RFC 1188</a>] A Proposed Standard for the Transmission of IP Datagrams over FDDI Networks.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1103.html">RFC 1103</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1191.html">RFC 1191</a>] Path MTU Discovery.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1063.html">RFC 1063</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1201.html">RFC 1201</a>] Transmitting IP Traffic over ARCNET Networks.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1051.html">RFC 1051</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1209.html">RFC 1209</a>] The Transmission of IP Datagrams over the SMDS Service.
[<a href="https://www.rfc-editor.org/rfc/rfc1213.html">RFC 1213</a>] Management Information Base for Network Management of TCP/IP-based internets: MIB-II.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1158.html">RFC 1158</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1219.html">RFC 1219</a>] On the Assignment of Subnet Numbers.
[<a href="https://www.rfc-editor.org/rfc/rfc1226.html">RFC 1226</a>] Internet Protocol Encapsulation of AX.25 Frames.
[<a href="https://www.rfc-editor.org/rfc/rfc1234.html">RFC 1234</a>] Tunneling IPX Traffic through IP Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1236.html">RFC 1236</a>] IP to X.121 Address Mapping for DDN.
[<a href="https://www.rfc-editor.org/rfc/rfc1242.html">RFC 1242</a>] Benchmarking Terminology for Network Interconnection Devices.
[<a href="https://www.rfc-editor.org/rfc/rfc1356.html">RFC 1356</a>] Multiprotocol Interconnect on X.25 and ISDN in the Packet Mode.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc877.html">RFC 877</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1365.html">RFC 1365</a>] An IP Address Extension Proposal.
[<a href="https://www.rfc-editor.org/rfc/rfc1375.html">RFC 1375</a>] Suggestion for New Classes of IP Addresses.
[<a href="https://www.rfc-editor.org/rfc/rfc1390.html">RFC 1390</a>] Transmission of IP and ARP over FDDI Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1393.html">RFC 1393</a>] Traceroute Using an IP Option.
[<a href="https://www.rfc-editor.org/rfc/rfc1454.html">RFC 1454</a>] Comparison of Proposals for Next Version of IP.
[<a href="https://www.rfc-editor.org/rfc/rfc1466.html">RFC 1466</a>] Guidelines for Management of IP Address Space.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1366.html">RFC 1366</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1469.html">RFC 1469</a>] IP Multicast over Token-Ring Local Area Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1475.html">RFC 1475</a>] TP/IX: The Next Internet.
[<a href="https://www.rfc-editor.org/rfc/rfc1577.html">RFC 1577</a>] Classical IP and ARP over ATM.
[<a href="https://www.rfc-editor.org/rfc/rfc1608.html">RFC 1608</a>] Representing IP Information in the X.500 Directory.
[<a href="https://www.rfc-editor.org/rfc/rfc1620.html">RFC 1620</a>] Internet Architecture Extensions for Shared Media.
[<a href="https://www.rfc-editor.org/rfc/rfc1624.html">RFC 1624</a>] Computation of the Internet Checksum via Incremental Update.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1141.html">RFC 1141</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1626.html">RFC 1626</a>] Default IP MTU for use over ATM AAL5.
[<a href="https://www.rfc-editor.org/rfc/rfc1716.html">RFC 1716</a>] Towards Requirements for IP Routers.
[<a href="https://www.rfc-editor.org/rfc/rfc1744.html">RFC 1744</a>] Observations on the Management of the Internet Address Space.
[<a href="https://www.rfc-editor.org/rfc/rfc1755.html">RFC 1755</a>] ATM Signaling Support for IP over ATM.
[<a href="https://www.rfc-editor.org/rfc/rfc1770.html">RFC 1770</a>] IPv4 Option for Sender Directed Multi-Destination Delivery.
[<a href="https://www.rfc-editor.org/rfc/rfc1797.html">RFC 1797</a>] Class A Subnet Experiment.
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1009.html">RFC 1009</a>, <a href="https://www.rfc-editor.org/rfc/rfc1716.html">RFC 1716</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1814.html">RFC 1814</a>] Unique Addresses are Good.
[<a href="https://www.rfc-editor.org/rfc/rfc1821.html">RFC 1821</a>] Integration of Real-time Services in an IP-ATM Network Architecture.
[<a href="https://www.rfc-editor.org/rfc/rfc1826.html">RFC 1826</a>] IP Authentication Header.
[<a href="https://www.rfc-editor.org/rfc/rfc1827.html">RFC 1827</a>] IP Encapsulating Security Payload (ESP).
[<a href="https://www.rfc-editor.org/rfc/rfc1858.html">RFC 1858</a>] Security Considerations for IP Fragment Filtering.
[<a href="https://www.rfc-editor.org/rfc/rfc1878.html">RFC 1878</a>] Variable Length Subnet Table For IPv4.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1860.html">RFC 1860</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1917.html">RFC 1917</a>] An Appeal to the Internet Community to Return Unused IP Networks (Prefixes) to the IANA.
[<a href="https://www.rfc-editor.org/rfc/rfc1918.html">RFC 1918</a>] Address Allocation for Private Internets.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1597.html">RFC 1597</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1932.html">RFC 1932</a>] IP over ATM: A Framework Document.
[<a href="https://www.rfc-editor.org/rfc/rfc1944.html">RFC 1944</a>] Benchmarking Methodology for Network Interconnect Devices.
[<a href="https://www.rfc-editor.org/rfc/rfc1953.html">RFC 1953</a>] Ipsilon Flow Management Protocol Specification for IPv4 Version 1.0.
[<a href="https://www.rfc-editor.org/rfc/rfc1954.html">RFC 1954</a>] Transmission of Flow Labelled IPv4 on ATM Data Links Ipsilon Version 1.0.
[<a href="https://www.rfc-editor.org/rfc/rfc2002.html">RFC 2002</a>] IP Mobility Support.
[<a href="https://www.rfc-editor.org/rfc/rfc2003.html">RFC 2003</a>] IP Encapsulation within IP.
[<a href="https://www.rfc-editor.org/rfc/rfc2004.html">RFC 2004</a>] Minimal Encapsulation within IP.
[<a href="https://www.rfc-editor.org/rfc/rfc2005.html">RFC 2005</a>] Applicability Statement for IP Mobility Support.
[<a href="https://www.rfc-editor.org/rfc/rfc2006.html">RFC 2006</a>] The Definitions of Managed Objects for IP Mobility Support using SMIv2.
[<a href="https://www.rfc-editor.org/rfc/rfc2011.html">RFC 2011</a>] SNMPv2 Management Information Base for the Internet Protocol using SMIv2.
                Updates SNMP MIB iso.org.dod.internet.mgmt.mib-2.icmp (1.3.6.1.2.1.5). 
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.ipMIB (1.3.6.1.2.1.48). 
[<a href="https://www.rfc-editor.org/rfc/rfc2022.html">RFC 2022</a>] Support for Multicast over UNI 3.0/3.1 based ATM Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2067.html">RFC 2067</a>] IP over HIPPI.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1374.html">RFC 1374</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2085.html">RFC 2085</a>] HMAC-MD5 IP Authentication with Replay Prevention.
[<a href="https://www.rfc-editor.org/rfc/rfc2096.html">RFC 2096</a>] IP Forwarding Table MIB.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1354.html">RFC 1354</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2101.html">RFC 2101</a>] IPv4 Address Behaviour Today.
[<a href="https://www.rfc-editor.org/rfc/rfc2113.html">RFC 2113</a>] IP Router Alert Option.
                Defines IP option 20 (Router Alert). 
[<a href="https://www.rfc-editor.org/rfc/rfc2143.html">RFC 2143</a>] Encapsulating IP with the Small Computer System Interface.
[<a href="https://www.rfc-editor.org/rfc/rfc2176.html">RFC 2176</a>] IPv4 over MAPOS Version 1.
                Describes how IP is encapsulated in MAPOS. 
[<a href="https://www.rfc-editor.org/rfc/rfc2225.html">RFC 2225</a>] Classical IP and ARP over ATM.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1577.html">RFC 1577</a>, <a href="https://www.rfc-editor.org/rfc/rfc1626.html">RFC 1626</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2226.html">RFC 2226</a>] IP Broadcast over ATM Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2285.html">RFC 2285</a>] Benchmarking Terminology for LAN Switching Devices.
[<a href="https://www.rfc-editor.org/rfc/rfc2336.html">RFC 2336</a>] Classical IP and ARP over ATM to NHRP Transition.
[<a href="https://www.rfc-editor.org/rfc/rfc2344.html">RFC 2344</a>] Reverse Tunneling for Mobile IP.
[<a href="https://www.rfc-editor.org/rfc/rfc2365.html">RFC 2365</a>] Administratively Scoped IP Multicast.
[<a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>] Security Architecture for the Internet Protocol.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1825.html">RFC 1825</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2432.html">RFC 2432</a>] Terminology for IP Multicast Benchmarking.
[<a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>] Definition of the Differentiated Services Field (DS Field) in the IPv4 and IPv6 Headers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1349.html">RFC 1349</a>, <a href="https://www.rfc-editor.org/rfc/rfc1455.html">RFC 1455</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2475.html">RFC 2475</a>] An Architecture for Differentiated Services.
[<a href="https://www.rfc-editor.org/rfc/rfc2507.html">RFC 2507</a>] IP Header Compression.
[<a href="https://www.rfc-editor.org/rfc/rfc2508.html">RFC 2508</a>] Compressing IP/UDP/RTP Headers for Low-Speed Serial Links.
[<a href="https://www.rfc-editor.org/rfc/rfc2625.html">RFC 2625</a>] IP and ARP over Fibre Channel.
[<a href="https://www.rfc-editor.org/rfc/rfc2697.html">RFC 2697</a>] A Single Rate Three Color Marker.
[<a href="https://www.rfc-editor.org/rfc/rfc2698.html">RFC 2698</a>] A Two Rate Three Color Marker.
[<a href="https://www.rfc-editor.org/rfc/rfc2728.html">RFC 2728</a>] The Transmission of IP Over the Vertical Blanking Interval of a Television Signal.
[<a href="https://www.rfc-editor.org/rfc/rfc2734.html">RFC 2734</a>] IPv4 over IEEE 1394.
[<a href="https://www.rfc-editor.org/rfc/rfc2757.html">RFC 2757</a>] Long Thin Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2765.html">RFC 2765</a>] Stateless IP/ICMP Translation Algorithm (SIIT).
[<a href="https://www.rfc-editor.org/rfc/rfc2766.html">RFC 2766</a>] Network Address Translation - Protocol Translation (NAT-PT).
[<a href="https://www.rfc-editor.org/rfc/rfc2767.html">RFC 2767</a>] Dual Stack Hosts using the "Bump-In-the-Stack" Technique (BIS).
[<a href="https://www.rfc-editor.org/rfc/rfc2780.html">RFC 2780</a>] IANA Allocation Guidelines For Values In the Internet Protocol and Related Headers.
[<a href="https://www.rfc-editor.org/rfc/rfc2834.html">RFC 2834</a>] ARP and IP Broadcast over HIPPI-800.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1374.html">RFC 1374</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2835.html">RFC 2835</a>] IP and ARP over HIPPI-6400 (GSN).
[<a href="https://www.rfc-editor.org/rfc/rfc2893.html">RFC 2893</a>] Transition Mechanisms for IPv6 Hosts and Routers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2932.html">RFC 2932</a>] IPv4 Multicast Routing MIB.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.ipMRouteStdMIB (1.3.6.1.2.1.83). 
[<a href="https://www.rfc-editor.org/rfc/rfc3021.html">RFC 3021</a>] Using 31-Bit Prefixes on IPv4 Point-to-Point Links.
[<a href="https://www.rfc-editor.org/rfc/rfc3095.html">RFC 3095</a>] RObust Header Compression (ROHC): Framework and four profiles: RTP, UDP, ESP, and uncompressed.
[<a href="https://www.rfc-editor.org/rfc/rfc3128.html">RFC 3128</a>] Protection Against a Variant of the Tiny Fragment Attack.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1858.html">RFC 1858</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3142.html">RFC 3142</a>] An IPv6-to-IPv4 Transport Relay Translator.
[<a href="https://www.rfc-editor.org/rfc/rfc3168.html">RFC 3168</a>] The Addition of Explicit Congestion Notification (ECN) to IP.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2481.html">RFC 2481</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc793.html">RFC 793</a>, <a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>, <a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3330.html">RFC 3330</a>] Special-Use IPv4 Addresses.
[<a href="https://www.rfc-editor.org/rfc/rfc3393.html">RFC 3393</a>] IP Packet Delay Variation Metric for IP Performance Metrics (IPPM).
[<a href="https://www.rfc-editor.org/rfc/rfc3544.html">RFC 3544</a>] IP Header Compression over PPP.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2509.html">RFC 2509</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3545.html">RFC 3545</a>] Enhanced Compressed RTP (CRTP) for Links with High Delay, Packet Loss and Reordering.
[<a href="https://www.rfc-editor.org/rfc/rfc3754.html">RFC 3754</a>] IP Multicast in Differentiated Services (DS) Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc3789.html">RFC 3789</a>] Introduction to the Survey of IPv4 Addresses in Currently Deployed IETF Standards Track and Experimental Documents.
[<a href="https://www.rfc-editor.org/rfc/rfc3790.html">RFC 3790</a>] Survey of IPv4 Addresses in Currently Deployed IETF Internet Area Standards Track and Experimental Documents.
[<a href="https://www.rfc-editor.org/rfc/rfc3791.html">RFC 3791</a>] Survey of IPv4 Addresses in Currently Deployed IETF Routing Area Standards Track and Experimental Documents.
[<a href="https://www.rfc-editor.org/rfc/rfc3792.html">RFC 3792</a>] Survey of IPv4 Addresses in Currently Deployed IETF Security Area Standards Track and Experimental Documents.
[<a href="https://www.rfc-editor.org/rfc/rfc3793.html">RFC 3793</a>] Survey of IPv4 Addresses in Currently Deployed IETF Sub-IP Area Standards Track and Experimental Documents.
[<a href="https://www.rfc-editor.org/rfc/rfc3794.html">RFC 3794</a>] Survey of IPv4 Addresses in Currently Deployed IETF Transport Area Standards Track and Experimental Documents.
[<a href="https://www.rfc-editor.org/rfc/rfc3795.html">RFC 3795</a>] Survey of IPv4 Addresses in Currently Deployed IETF Application Area Standards Track and Experimental Documents.
[<a href="https://www.rfc-editor.org/rfc/rfc3796.html">RFC 3796</a>] Survey of IPv4 Addresses in Currently Deployed IETF Operations &amp; Management Area Standards Track and Experimental Documents.
[<a href="https://www.rfc-editor.org/rfc/rfc3843.html">RFC 3843</a>] RObust Header Compression (ROHC): A Compression Profile for IP.
                <hr /><b><b>Obsolete RFCs:</b></b>
[IEN 111] INTERNET PROTOCOL.
                Obsoleted by: IEN 123. 
[IEN 115] ADDRESS MAPPINGS.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc796.html">RFC 796</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc760.html">RFC 760</a>] DOD STANDARD INTERNET PROTOCOL.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc791.html">RFC 791</a>. 
                Obsoletes: IEN 26, IEN 28, IEN 41, IEN 44, IEN 54, IEN 80, IEN 111, IEN 123. 
[<a href="https://www.rfc-editor.org/rfc/rfc877.html">RFC 877</a>] A Standard for the Transmission of IP Datagrams Over Public Data Networks.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1356.html">RFC 1356</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc948.html">RFC 948</a>] TWO METHODS FOR THE TRANSMISSION OF IP DATAGRAMS OVER IEEE 802.3 NETWORKS.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1042.html">RFC 1042</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc988.html">RFC 988</a>] Host Extensions for IP Multicasting.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1054.html">RFC 1054</a>, <a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a>. 
                Defines IGMP version 0. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc966.html">RFC 966</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1038.html">RFC 1038</a>] Draft Revised IP Security Option.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1108.html">RFC 1108</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1051.html">RFC 1051</a>] A Standard for the Transmission of IP Datagrams and ARP Packets over ARCNET Networks.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1201.html">RFC 1201</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1054.html">RFC 1054</a>] Host Extensions for IP Multicasting.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1063.html">RFC 1063</a>] IP MTU Discovery Options.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1191.html">RFC 1191</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>] Management Information Base for Network Management of TCP/IP-based internets.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1071.html">RFC 1071</a>] Computing the Internet Checksum.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1141.html">RFC 1141</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1103.html">RFC 1103</a>] A Proposed Standard for the Transmission of IP Datagrams over FDDI Networks.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1188.html">RFC 1188</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1349.html">RFC 1349</a>] Type of Service in the Internet Protocol Suite.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc791.html">RFC 791</a>, <a href="https://www.rfc-editor.org/rfc/rfc1060.html">RFC 1060</a>, <a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>, <a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>, <a href="https://www.rfc-editor.org/rfc/rfc1195.html">RFC 1195</a>, <a href="https://www.rfc-editor.org/rfc/rfc1247.html">RFC 1247</a>, <a href="https://www.rfc-editor.org/rfc/rfc1248.html">RFC 1248</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1354.html">RFC 1354</a>] IP Forwarding Table MIB.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2096.html">RFC 2096</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1366.html">RFC 1366</a>] Guidelines for Management of IP Address Space.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1466.html">RFC 1466</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1374.html">RFC 1374</a>] IP and ARP on HIPPI.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2834.html">RFC 2834</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1455.html">RFC 1455</a>] Physical Link Security Type of Service.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1597.html">RFC 1597</a>] Address Allocation for Private Internets.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1918.html">RFC 1918</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1860.html">RFC 1860</a>] Variable Length Subnet Table For IPv4.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1878.html">RFC 1878</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>] Transition Mechanisms for IPv6 Hosts and Routers.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2893.html">RFC 2893</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2481.html">RFC 2481</a>] A Proposal to add Explicit Congestion Notification (ECN) to IP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3168.html">RFC 3168</a>.
[<a href="https://www.rfc-editor.org/rfc/rfc2509.html">RFC 2509</a>] IP Header Compression over PPP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3544.html">RFC 3544</a>.
                		  </div>
		  
</section>


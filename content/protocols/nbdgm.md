---
id: protocol-nbdgm
slug: nbdgm
name: NBDGM
expandedName: NetBIOS Datagram Service
origin: historical
provenance:
  source: protocols/protocol_NBDGM.htm
  sha256: 389c5eba5a4342a76f63fb639ddfb201ea2365461e81e26d4fdf1ce2a41dff0e
  provider: 'Colasoft Co., Ltd.'
aliases:
  - NetBIOS Datagram Service
layers:
  - Transport Layer
suites:
  - IBM protocol suite
summary:
  - label: Protocol
    html: NetBIOS Datagram Service
  - label: Protocol suite
    html: IBM protocol suite
  - label: Layer
    html: Transport Layer
  - label: Ports
    html: 138 Datagram Service
  - label: Related protocols
    html: 'Domain Name Service,<br />Internet Group Multicast'
originalUpdate: '2005-11-07 17:39:06'
rfcs:
  - 1001
  - 1002
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

			Every NetBIOS datagram has a named destination and source. To transmit a NetBIOS datagram, the datagram service must perform a name query operation to learn the IP address and the attributes of the destination NetBIOS name. (This information may be cached to avoid the overhead of name query on subsequent NetBIOS datagrams.)
<br />
<br />NetBIOS datagrams are carried within UDP packets. If a NetBIOS datagram is larger than a single UDP packet, it may be fragmented into several UDP packets.
<br />
<br />End-nodes may receive NetBIOS datagrams addressed to names not held by the receiving node. Such datagrams should be discarded. If the name is unique then a DATAGRAM ERROR packet is sent to the source of that NetBIOS datagram.
<br /><ul><li><b>Unicast, Multicast, and Broadcast</b><br /></li>
<li>NetBIOS datagrams may be unicast, multicast, or broadcast. A NetBIOS datagram addressed to a unique NetBIOS name is unicast. A NetBIOS datagram addressed to a group NetBIOS name, whether there are zero, one, or more actual members, is multicast. A NetBIOS datagram sent using the NetBIOS "Send Broadcast Datagram" primitive is broadcast.
<br /><br /></li>
<li><b>Fragmentation of NetBIOS Datagrams</b><br /></li>
<li>When the header and data of a NetBIOS datagram exceeds the maximum amount of data allowed in a UDP packet, the NetBIOS datagram must be fragmented before transmission and reassembled upon receipt.
<br /><br /></li>
<li>A NetBIOS Datagram is composed of the following protocol elements:
<br /></li><li><ul><li>IP header of 20 bytes (minimum).<br /></li>
<li>UDP header of 8 bytes.<br /></li>
<li>NetBIOS Datagram Header of 14 bytes.<br /></li>
<li>The NetBIOS Datagram data.</li></ul><br /><br /></li>

<li>The NetBIOS Datagram data section is composed of 3 parts:
<br /></li><li><ul><li>Source NetBIOS name (255 bytes maximum)<br /></li>
<li>Destination NetBIOS name (255 bytes maximum)<br /></li>
<li>The NetBIOS user's data (maximum of 512 bytes)</li></ul></li></ul>
<br /><hr />
<br /><b>NetBIOS Datagram Header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32</p></td></tr><tr><td><p>MSG_TYPE</p></td><td><p>FLAGS</p></td><td><p>DGM_ID</p></td></tr><tr><td colspan="3"><p>SOURCE_IP</p></td></tr><tr><td colspan="2"><p>SOURCE_PORT</p></td><td><p>DGM_LENGTH</p></td></tr><tr><td colspan="2"><p>PACKET_OFFSET</p></td></tr></tbody></table></div></div>
<br />
<br /><ul><li><b>MSG_TYPE values (in hexadecimal)</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>10</td><td>DIRECT_UNIQUE DATAGRAM</td></tr><tr><td>11</td><td>DIRECT_GROUP DATAGRAM</td></tr><tr><td>12</td><td>BROADCAST DATAGRAM</td></tr><tr><td>13</td><td>DATAGRAM ERROR</td></tr><tr><td>14</td><td>DATAGRAM QUERY REQUEST</td></tr><tr><td>15</td><td>DATAGRAM POSITIVE QUERY RESPONSE</td></tr><tr><td>16</td><td>DATAGRAM NEGATIVE QUERY RESPONSE</td></tr></tbody></table></div></div><br /></li>
<li><ul><li><b>Direct_Unique, Direct_Group, &amp; Broadcast Datagram</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32</p></td></tr><tr><td><p>MSG_TYPE</p></td><td><p>FLAGS</p></td><td><p>DGM_ID</p></td></tr><tr><td colspan="3"><p>SOURCE_IP</p></td></tr><tr><td colspan="2"><p>SOURCE_PORT</p></td><td><p>DGM_LENGTH</p></td></tr><tr><td colspan="2"><p>PACKET_OFFSET</p></td><td></td></tr><tr><td colspan="3"><p>SOURCE_NAME</p></td></tr><tr><td colspan="3"><p>DESTINATION_NAME</p></td></tr><tr><td colspan="3"><p>USER_DATA</p></td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Datagram Error Packet</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td colspan="2"><p>32</p></td></tr><tr><td><p>MSG_TYPE</p></td><td><p>FLAGS</p></td><td colspan="2"><p>DGM_ID</p></td></tr><tr><td colspan="4"><p>SOURCE_IP</p></td></tr><tr><td colspan="2"><p>SOURCE_PORT</p></td><td><p>ERROR_CODE</p></td><td></td></tr></tbody></table></div></div><br /><br /></li>

<li><ul><li>ERROR_CODE
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td>No.</td><td>values (in hexadecimal)</td></tr><tr><td>82</td><td>DESTINATION NAME NOT PRESENT</td></tr><tr><td>83</td><td>INVALID SOURCE NAME FORMAT</td></tr><tr><td>84</td><td>INVALID DESTINATION NAME FORMAT</td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>Datagram Query Request</b><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32</p></td></tr><tr><td><p>MSG_TYPE</p></td><td><p>FLAGS</p></td><td><p>DGM_ID</p></td></tr><tr><td colspan="3"><p>SOURCE_IP</p></td></tr><tr><td colspan="2"><p>SOURCE_PORT</p></td></tr><tr><td colspan="3"><p>DESTINATION_NAME</p></td></tr></tbody></table></div></div><br /><br /></li>

<li>Datagram Positive and Negative Query Response<br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p>8</p></td><td><p>16</p></td><td><p>32</p></td></tr><tr><td><p>MSG_TYPE</p></td><td><p>FLAGS</p></td><td><p>DGM_ID</p></td></tr><tr><td colspan="3"><p>SOURCE_IP</p></td></tr><tr><td colspan="2"><p>SOURCE_PORT</p></td></tr><tr><td colspan="3"><p>DESTINATION_NAME</p></td></tr></tbody></table></div></div></li></ul><br /><br /></li>

<li><b>FLAGS</b><br /></li>
<li>Bit definitions of the FLAGS field.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 8" tabindex="0"><table><caption>Description: preserved table 8</caption><tbody><tr><td><p>0</p></td><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td><td><p>7</p></td></tr><tr><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td><p>0</p></td><td colspan="2"><p>SNT</p></td><td><p>F</p></td><td><p>M</p></td></tr></tbody></table></div></div><br /></li>
<li><ul><li><div><div class="table-scroll" role="region" aria-label="Description table 9" tabindex="0"><table><caption>Description: preserved table 9</caption><tbody><tr><td>Symbol</td><td>Bit(s)</td><td>Description</td></tr><tr><td><p>M</p></td><td><p>7</p></td><td>MORE flag, If set then more NetBIOS datagram fragments follow.</td></tr><tr><td><p>F</p></td><td><p>6</p></td><td>FIRST packet flag, If set then this is first(and possibly only) fragment of NetBIOS datagram</td></tr><tr><td><p>SNT</p></td><td>4,5</td><td>Source End-Node type: <br /> 00 = B node<br /> 01 = P node<br /> 10 = M node<br /> 11 = NBDD</td></tr><tr><td><p>RESERVED</p></td><td><p>0-3</p></td><td>Reserved, must be zero (0)</td></tr></tbody></table></div></div></li></ul><br /></li>
<li><hr /><br /></li>
<li><b>NetBIOS Datagrams by B Nodes</b><br /></li>
<li>For NetBIOS datagrams with a named destination (i.e. non- broadcast), a B node performs a name discovery for the destination name before sending the datagram. (Name discovery may be bypassed if information from a previous discovery is held in a cache.) If the name type returned by name discovery is UNIQUE, the datagram is unicast to the sole owner of the name. If the name type is GROUP, the datagram is broadcast to the entire broadcast area using the destination IP address BROADCAST_ADDRESS.
<br /><br /></li>
<li>A receiving node always filters datagrams based on the destination name. If the destination name is not owned by the node or if no RECEIVE DATAGRAM user operations are pending for the name, then the datagram is discarded. For datagrams with a UNIQUE name destination, if the name is not owned by the node then the receiving node sends a DATAGRAM ERROR packet. The error packet originates from the DGM_SRVC_UDP_PORT and is addressed to the SOURCE_IP and SOURCE_PORT from the bad datagram. The receiving node quietly discards datagrams with a GROUP name destination if the name is not owned by the node.
<br /><br /></li>
<li>Since broadcast NetBIOS datagrams do not have a named destination, the B node sends the DATAGRAM SERVICE packet(s) to the entire broadcast area using the destination IP address BROADCAST_ADDRESS. In order for the receiving nodes to distinguish this datagram as a broadcast NetBIOS datagram, the NetBIOS name used as the destination name is '*' (hexadecimal 2A) followed by 15 bytes of hexadecimal 00. The NetBIOS scope identifier is appended to the name before it is converted into second-level encoding. For example, if the scope identifier is "NETBIOS.SCOPE" then the first-level encoded name would be:
<br /></li><li>     CKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.NETBIOS.SCOPE
<br /><br /></li>
<li><b>NetBIOS Datagrams by P and M Nodes</b><br /></li>
<li>P and M nodes do not use IP broadcast to distribute NetBIOS datagrams.
<br /><br /></li>
<li>Like B nodes, P and M nodes must perform a name discovery or use cached information to learn whether a destination name is a group or a unique name.
<br /><br /></li>
<li>Datagrams to unique names are unicast directly to the destination by P and M nodes, exactly as they are by B nodes.
<br /><br /></li>
<li>Datagrams to group names and NetBIOS broadcast datagrams are unicast to the NBDD. The NBDD then relays the datagrams to each of the nodes specified by the destination name.
<br /><br /></li>
<li>An NBDD may not be capable of sending a NetBIOS datagram to a particular NetBIOS name, including the broadcast NetBIOS name ("*") defined above. A query mechanism is available to the end- node to determine if a NBDD will be able to relay a datagram to a given name. Before a datagram, or its fragments, are sent to the NBDD the P or M node may send a DATAGRAM QUERY REQUEST packet to the NBDD with the DESTINATION_NAME from the DATAGRAM SERVICE packet(s).
<br /><br /></li>
<li>An NBDD may not be capable of sending a NetBIOS datagram to a particular NetBIOS name, including the broadcast NetBIOS name ("*") defined above. A query mechanism is available to the end- node to determine if a NBDD will be able to relay a datagram to a given name. Before a datagram, or its fragments, are sent to the NBDD the P or M node may send a DATAGRAM QUERY REQUEST packet to the NBDD with the DESTINATION_NAME from the DATAGRAM SERVICE packet(s). The NBDD will respond with a DATAGRAM POSITIVE QUERY RESPONSE if it will relay datagrams to the specified destination name. After a positive response the end-node unicast the datagram to the NBDD. If the NBDD will not be able to relay a datagram to the destination name specified in the query, a DATAGRAM NEGATIVE QUERY RESPONSE packet is returned. If the NBDD can not distribute a datagram, the end-node then has the option of getting the name's owner list from the NBNS and sending the datagram directly to each of the owners.
<br /><br /></li>
<li>An NBDD must be able to respond to DATAGRAM QUERY REQUEST packets. The response may always be positive. However, the usage or implementation of the query mechanism by a P or M node is optional. An implementation may always unicast the NetBIOS datagram to the NBDD without asking if it will be relayed. Except for the datagram query facility described above, an NBDD provides no feedback to indicate whether it forwarded a datagram.
<br /><br /></li>
		    </ul>
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: B Node Transmission of NetBIOS Datagrams</b>

PROCEDURE send_datagram(data, source, destination, broadcast)

    /*
     * user initiated processing on B node
     */

    BEGIN
         group = FALSE;

         do name discovery on destination name, returns name type and IP address;

         IF name type is group name THEN
         BEGIN
              group = TRUE;
         END

         /*
          * build datagram service UDP packet;
          */
         convert source and destination NetBIOS names into half-ASCII, biased encoded 
name;
         SOURCE_NAME = cat(source, SCOPE_ID);
         SOURCE_IP = this nodes IP address;
         SOURCE_PORT =  DGM_SRVC_UDP_PORT;

         IF NetBIOS broadcast THEN
         BEGIN
              DESTINATION_NAME = cat("*", SCOPE_ID)
         END
         ELSE
         BEGIN
              DESTINATION_NAME = cat(destination, SCOPE_ID)
         END

         MSG_TYPE = select_one_from_set
              {BROADCAST, DIRECT_UNIQUE, DIRECT_GROUP}
         DGM_ID = next transaction id for Datagrams;
         DGM_LENGTH = length of data + length of second level encoded source and 
         destination names;

         IF (length of the NetBIOS Datagram, including UDP and IP headers, &gt; 
         MAX_DATAGRAM_LENGTH) THEN
         BEGIN
              /*
               * fragment NetBIOS datagram into 2 UDP packets
               */
              Put names into 1st UDP packet and any data that fits after names;
              Set MORE and FIRST bits in 1st UDP packet's FLAGS;
              OFFSET in 1st UDP = 0;

              Replicate NetBIOS Datagram header from 1st UDP packet into 2nd UDP packet;
              Put rest of data in 2nd UDP packet;
              Clear MORE and FIRST bits in 2nd UDP packet's FLAGS;
              OFFSET in 2nd UDP = DGM_LENGTH - number of name and data bytes in 1st 
UDP;
         END
         BEGIN
              /*
               * Only need one UDP packet
               */

              USER_DATA = data;
              Clear MORE bit and set FIRST bit in FLAGS;
              OFFSET = 0;
         END

         IF (group == TRUE) OR (NetBIOS broadcast) THEN
         BEGIN
              send UDP packet(s) to BROADCAST_ADDRESS;
         END
         ELSE
         BEGIN
              send UDP packet(s) to IP address returned by name discovery;
         END
    END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Reception of NetBIOS Datagrams by All Nodes</b>

The following algorithm discards out of order NetBIOS Datagram fragments. An 
implementation which reassembles out of order NetBIOS Datagram fragments conforms 
to this specification. The fragment discard timer is initialized to the value 
FRAGMENT_TO. This value should be user configurable. The default value is given in 
Section 6, "Defined Constants and Variables".

    PROCEDURE datagram_packet(packet)

    /*
     * processing initiated by datagram packet reception
     * on B, P and M nodes
     */
    BEGIN
         /*
          * if this node is a P node, ignore
          * broadcast packets.
          */

         IF this is a P node AND incoming packet is a broadcast packet THEN
         BEGIN
              discard packet;
         END
         CASE packet type OF

            DATAGRAM SERVICE:
            BEGIN
              IF FIRST bit in FLAGS is set THEN
              BEGIN
                   IF MORE bit in FLAGS is set THEN
                   BEGIN
                        Save 1st UDP packet of the Datagram;
                        Set this Datagram's fragment discard timer to FRAGMENT_TO;
                         return;
                   END
                   ELSE
                        Datagram is composed of a single UDP packet;
              END
              ELSE
              BEGIN
                   /* Have the second fragment of a Datagram */

                   Search for 1st fragment by source IP address and DGM_ID;
                   IF found 1st fragment THEN Process both UDP packets;
                   ELSE
                   BEGIN
                        discard 2nd fragment UDP packet;
                        return;
                   END
              END

              IF DESTINATION_NAME is '*' THEN
              BEGIN
                   /* NetBIOS broadcast */

                   deliver USER_DATA from UDP packet(s) to all outstanding 
receive broadcast datagram requests;
                   return;
              END
              ELSE
              BEGIN /* non-broadcast */
                   /* Datagram for Unique or Group Name */

                   IF DESTINATION_NAME is not present in the
                      local name table THEN
                   BEGIN
                        /* destination not present */
                        build DATAGRAM ERROR packet, clear FIRST and MORE bit,
put in this nodes IP and PORT, set ERROR_CODE;
                        send DATAGRAM ERROR packet to source IP address and 
port of UDP;
                        discard UDP packet(s);
                        return;
                   END
                   ELSE
                   BEGIN /* good */
                        /*

                         * Replicate received NetBIOS datagram for
                         * each recipient
                         */
                        FOR EACH pending NetBIOS user's receive datagram operation
                        BEGIN
                             IF source name of operation matches destination 
name of packet THEN
                             BEGIN
                                deliver USER_DATA from UDP packet(s);
                             END
                        END /* for each */
                        return;
                   END /* good */
              END /* non-broadcast */
         END /* datagram service */

            DATAGRAM ERROR:
            BEGIN
                 /*
                  * name service returned incorrect information
                  */

                 inform local name service that incorrect information was provided;

                 IF this is a P or M node THEN
                 BEGIN
                      /*
                       * tell NetBIOS Name Server that it may
                       * have given incorrect information
                       */

                      send NAME RELEASE REQUEST with name and incorrect IP address 
to NetBIOS Name Server;
                 END
            END /* datagram error */

         END /* case */
    END</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Protocols for the NBDD</b>

The key to NetBIOS Datagram forwarding service is the packet delivered to the 
destination end node must have the same NetBIOS header as if the source end node 
sent the packet directly to the destination end node. Consequently, the NBDD does 
not reassemble NetBIOS Datagrams. It forwards the UDP packet as is.

    PROCEDURE  datagram_packet(packet)

    /*
     * processing initiated by a incoming datagram service 
     * packet on a NBDD node.
     */

    BEGIN
          CASE packet type OF

            DATAGRAM SERVICE:
            BEGIN
                 IF packet was sent as a directed NetBIOS datagram THEN
                 BEGIN
                   /*
                    * provide group forwarding service
                    *
                    * Forward datagram to each member of the
                    * group.  Can forward via:
                    *   1) get list of group members and send
                    *   the DATAGRAM SERVICE packet unicast
                    *   to each
                    *   2) use Group Multicast, if available
                    *   3) combination of 1) and 2)
                    */

                   ...

                 END

                 ELSE
                 BEGIN
                   /*
                    * provide broadcast forwarding service
                    *
                    * Forward datagram to every node in the
                    * NetBIOS scope.  Can forward via:
                    *   1) get list of group members and send
                    *   the DATAGRAM SERVICE packet unicast
                    *   to each
                    *   2) use Group Multicast, if available
                    *   3) combination of 1) and 2)
                    */

                   ...

                 END
            END /* datagram service */

            DATAGRAM ERROR:

            BEGIN
              /*
               * Should never receive these because Datagrams
               * forwarded have source end node IP address and
               * port in NetBIOS header.
               */

              send DELETE NAME REQUEST with incorrect name and IP address to 
NetBIOS Name Server;

            END /* datagram error */

            DATAGRAM QUERY REQUEST:
            BEGIN
              IF can send packet to DESTINATION_NAME THEN BEGIN
                   /*
                    * NBDD is able to relay Datagrams for
                    * this name
                    */

                   send POSITIVE DATAGRAM QUERY RESPONSE to REQUEST source 
IP address and UDP port with request's DGM_ID;
              END
              ELSE
              BEGIN
                   /*
                    * NBDD is NOT able to relay Datagrams for
                    * this name
                    */

                   send NEGATIVE DATAGRAM QUERY RESPONSE to REQUEST source 
IP address and UDP port with request's DGM_ID;
              END
            END /* datagram query request */

         END /* case */
    END /* procedure */</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		</blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Broadcast</b><br />Broadcast is the term used to describe communication where a piece of information is sent from one point to all other points. Broadcasting is a useful feature in e-mail systems. It is also supported by some fax systems. 
<br />
<br />In networking, a distinction is made between broadcasting and multicasting. Broadcasting sends a message to everyone on the network whereas multicasting sends a message to a select list of recipients.<br /><br /><b>Datagram</b><br />A datagram is a self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network.
<br /> 	
<br />The term has been generally replaced by the term packet. Datagrams or packets are the message units that the Internet Protocol deals with and that the Internet transports. A datagram or packet needs to be self-contained without reliance on earlier exchanges because there is no connection of fixed duration between the two communicating points as there is, for example, in most voice telephone conversations.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>Multicast</b><br />Multicast is designed to transmit a single message to a select group of recipients. A simple example of multicasting is sending an e-mail message to a mailing list. Teleconferencing and videoconferencing also use multicasting, but require more robust protocols and networks.<br /><br /><b>NBDD</b><br />NBDD is Netbios datagram distribution. This server relays broadcast and multicast (group) datagrams to all intended recipients. When a P, M, or H node wishes to send a broadcast or multicast datagram, it will send the datagram to the NBDD. The NBDD will obtain the list of destination IPs from the NBNS and then unicast the datagram to each of those nodes.<br /><br /><b>NetBIOS</b><br />NetBIOS(Network Basic Input Output System) is an API that augments the DOS BIOS by adding special functions for local-area networks (LANs). Almost all Windows-based LANs for PCs are based on the NetBIOS. Some LAN manufacturers have even extended it, adding additional network capabilities. <br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br /><b>Unicast</b><br />Unicast is a communication that takes place over a network between a single sender and a single receiver.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b> 
[<a href="https://www.rfc-editor.org/rfc/rfc1001.html">RFC 1001</a>] PROTOCOL STANDARD FOR A NetBIOS SERVICE ON A TCP/UDP TRANSPORT: CONCEPTS AND METHODS. 
[<a href="https://www.rfc-editor.org/rfc/rfc1002.html">RFC 1002</a>] PROTOCOL STANDARD FOR A NetBIOS SERVICE ON A TCP/UDP TRANSPORT: DETAILED SPECIFICATIONS.
                		  </div>
		  
</section>


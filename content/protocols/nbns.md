---
id: protocol-nbns
slug: nbns
name: NBNS
expandedName: NetBIOS Name Service
origin: historical
provenance:
  source: protocols/protocol_NBNS.htm
  sha256: 219444c2f4beac424e191ec0423f66f46d6cf31a5b92dcdfd646ea4070db3912
  provider: 'Colasoft Co., Ltd.'
aliases:
  - NetBIOS Name Service
layers:
  - Presentation Layer
suites:
  - IBM protocol suite
summary:
  - label: Protocol
    html: NetBIOS Name Service
  - label: Protocol suite
    html: IBM protocol suite
  - label: Layer
    html: Presentation Layer
  - label: Ports
    html: 137 Name Service
  - label: Related protocols
    html: 'Domain Name Service,<br />Internet Group Multicast'
originalUpdate: '2005-11-07 17:36:11'
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

			A REQUEST packet is always sent to the well known UDP port - NAME_SERVICE_UDP_PORT. The destination address is normally either the IP broadcast address or the address of the NBNS - the address of the NBNS server it set up at initialization time. In rare cases, a request packet will be sent to an end node, e.g. a NAME QUERY REQUEST sent to "challenge" a node.
<br />
<br />A RESPONSE packet is always sent to the source UDP port and source IP address of the request packet.
<br />
<br />A DEMAND packet must always be sent to the well known UDP port - NAME_SERVICE_UDP_PORT.  There is no restriction on the target IP address.
<br />
<br />Each NetBIOS node can own more than one name. Names are acquired dynamically through the registration (name claim) procedures. Every node has a permanent unique name. This name, like any other name, must be explicitly registered by all end-node types.
<br />
<br />A name can be unique (exclusive) or group (non-exclusive). A unique name may be owned by a single node; a group name may be owned by any number of nodes. A name ceases to exist when it is not owned by at least one node. There is no intrinsic quality of a name which determines its characteristics: these are established at the time of registration.
<br />
<br />Each node maintains state information for each name it has registered. This information includes:
<br /><ul><li>Whether the name is a group or unique name<br /></li>
<li>Whether the name is "in conflict"<br /></li>
<li>Whether the name is in the process of being deleted</li></ul>
<br />B nodes perform name registration by broadcasting claim requests, soliciting a defense from any node already holding the name.
<br />
<br />P nodes perform name registration through the agency of the NBNS.
<br />
<br />M nodes register names through an initial broadcast, like B nodes, then, in the absence of an objection, by following the same procedures as a P node. In other words, the broadcast action may terminate the attempt, but is not sufficient to confirm the registration.
<br />
<br />NetBIOS names may be released explicitly or silently by an end- node. Silent release typically occurs when an end-node fails or is turned- off. Most of the mechanisms described below are present to detect silent name release.
<br />
<br />An end-node or the NBNS may ask any other end-node for a collection of information about the NetBIOS status of that node. This status consists of, among other things, a list of the names which the node believes it owns. The returned status is filtered to contain only those names which have the same NetBIOS scope identifier as the requestor's name.
<br />
<br />There are certain characteristics of end-node to NBNS interactions which are in common and are independent of any particular transaction type.
<br /><ul><li><b>UDP, TCP, and Truncation</b><br /></li>
<li>For all transactions between an end-node and an NBNS, either UDP or TCP may be used as a transport. If the NBNS receives a UDP based request, it will respond using UDP. If the amount of information exceeds what fits into a UDP packet, the response will contain a "truncation flag". In this situation, the end- node may open a TCP connection to the NBNS, repeat the request, and receive a complete, untruncated response.
<br /><br /></li>
<li><b>NBNS Wack</b><br /></li>
<li>While a name service request is in progress, the NBNS may issue a WAIT FOR ACKNOWLEDGEMENT RESPONSE (WACK) to assure the client end- node that the NBNS is still operational and is working on the request.
<br /><br /></li>
<li><b>NBNS Redirection</b><br /></li>
<li>The NBNS, because it follows Domain Name system styles of interaction, is permitted to redirect a client to another NBNS.</li></ul>
<br /><hr />
<br /><b>Name Registration Transactions</b>
<br />A name claim transaction initiated by a B node is broadcast throughout the broadcast area A name registration may proceed in various ways depending whether the name being registered is new to the NBNS. If the name is known to the NBNS, then challenges may be sent to the prior holder(s).
<br />
<br />An M node begin a name claim operation as if the node were a B node: it broadcasts a NAME REGISTRATION REQUEST and listens for NEGATIVE NAME REGISTRATION RESPONSEs. Any NEGATIVE NAME REGISTRATION RESPONSE prevents the M node from obtaining the name and terminates the claim operation.
<br /><hr />
<br /><b>Name Query Transactions</b>
<br />Name query transactions are initiated by end-nodes to obtain the IP address(es) and other attributes associated with a NetBIOS name.
<br /><ul><li><b>Query by B Nodes</b><br /></li>
<li>The following diagram shows how B nodes go about discovering who own a name.
<br /><br /></li>
<li>The left half of the diagram illustrates what happens if there are no holders of the name. In that case no responses are received in answer to the broadcast NAME QUERY REQUEST(s).
<br /><br /></li>
<li>The right half shows a POSITIVE NAME QUERY RESPONSE unicast by a name holder in answer to the broadcast request. A name holder will make this response to every NAME QUERY REQUEST that it hears. And each holder acts this way. Thus, the node sending the request may receive many responses, some duplicates, and from many nodes.
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">
                      B-NODE DISCOVERY PROCESS

&lt;------NAME NOT ON NETWORK------&gt;  &lt;---NAME PRESENT ON NETWORK--&gt;

   REQ. NODE                    NODE                     REQ.NODE
                                  HOLDING
                                NAME

    (BROADCAST) QUERY                           (BROADCAST) QUERY
----------------------&gt;                    &lt;---------------------

   NAME QUERY REQUEST                          NAME QUERY REQUEST
----------------------&gt;                    &lt;---------------------

        QUERY                        POSITIVE RESPONSE
----------------------&gt;           ------------------------------&gt;</pre><br /><br /></li>

<li><b>Query by P Nodes</b><br /></li>
<li>An NBNS answers queries from a P node with a list of IP address and other information for each owner of the name. If there are multiple owners (i.e. if the name is a group name), the NBNS loads as many answers into the response as will fit into a UDP packet. A truncation flag indicates whether any additional owner information remains. All the information may be obtained by repeating the query over a TCP connection.
<br /><br /></li>
<li><b>Query by M Nodes</b><br /></li>
<li>M node name query follows the B node pattern. In the absence of adequate results, the M node then continues by performing a P node type query.
<br /><br /></li>
<li><b>Acquire Group Membership List</b><br /></li>
<li>The entire membership of a group may be acquired by sending a NAME QUERY REQUEST to the NBNS. The NBNS will respond with a POSITIVE NAME QUERY RESPONSE or a NEGATIVE NAME QUERY RESPONSE. A negative response completes the procedure and indicates that there are no members in the group.</li></ul>
<br /><hr />
<br /><b>Name Release Transactions</b>
<br /><ul><li><b>Release by B Nodes</b><br /></li>
<li>A NAME RELEASE DEMAND contains the following information:
<br /></li><li><ul><li>NetBIOS name
<br /></li><li>The scope of the NetBIOS name
<br /></li><li>Name type: unique or group
<br /></li><li>IP address of the releasing node
<br /></li><li>Transaction ID</li></ul><br /><br /></li>

<li><b>Release by P Nodes</b><br /></li>
<li>A NAME RELEASE REQUEST contains the following information:
<br /></li><li><ul><li>NetBIOS name
<br /></li><li>The scope of the NetBIOS name
<br /></li><li>Name type: unique or group
<br /></li><li>IP address of the releasing node
<br /></li><li>Transaction ID</li></ul><br /><br /></li>

<li>A NAME RELEASE RESPONSE contains the following information:
<br /></li><li><ul><li>NetBIOS name
<br /></li><li>The scope of the NetBIOS name
<br /></li><li>Name type: unique or group
<br /></li><li>IP address of the releasing node
<br /></li><li>Transaction ID
<br /></li><li>Result:
<br /></li><li><ul><li>Yes: name was released
<br /></li><li>No: name was not released, a reason code is provided</li></ul></li></ul><br /><br /></li>

<li><b>Release by M Nodes</b><br /></li>
<li>The name release procedure of the M node is a combination of the P and B node name release procedures. The M node first performs the P release procedure. If the P procedure fails then the release procedure does not continue, it fails. If and only if the P procedure succeeds then the M node broadcasts the NAME RELEASE DEMAND to the broadcast area, the B procedure.</li></ul>
<br /><hr />
<br /><b>Name Maintenance Transactions</b>
<br /><ul><li><b>Name Refresh</b><br /></li>
<li>Name refresh transactions are used to handle the following situations:
<br /></li><li><ul><li>An NBNS node needs to detect if a P or M node has "silently" gone down, so that names held by that node can be purged from the data base.
<br /><br /></li>
<li>If the NBNS goes down, it needs to be able to reconstruct the data base when it comes back up.
<br /><br /></li>
<li>If the network should be partitioned, the NBNS needs to be able to able to update its data base when the network reconnects.</li></ul><br /><br /></li>

<li>Each P or M node is responsible for sending periodic NAME REFRESH REQUESTs for each name that it has registered. Each refresh packet contains a single name that has been successfully registered by that node. The interval between such packets is negotiated between the end node and the NBNS server at the time that the name is initially claimed. At name claim time, an end node will suggest a refresh timeout value. The NBNS node can modify this value in the reply packet. A NBNS node can also choose to tell the end node to not send any refresh packet by using the "infinite" timeout value in the response packet. The timeout value returned by the NBNS is the actual refresh timeout that the end node must use.
<br /><br /></li>
<li><b>Name Challenge</b><br /></li>
<li>Name challenge is done by sending a NAME QUERY REQUEST to an end node of any type. If a POSITIVE NAME QUERY RESPONSE is returned, then that node still owns the name. If a NEGATIVE NAME QUERY RESPONSE is received or if no response is received, it can be assumed that the end node no longer owns the name.
<br /><br /></li>
<li><b>Clear Name Conflict</b><br /></li>
<li>It is possible during a refresh request from a M or P node for a NBNS to detects a name in conflict. The response to the NAME REFRESH REQUEST must be a NEGATIVE NAME REGISTRATION RESPONSE. Optionally, in addition, the NBNS may send a NAME CONFLICT DEMAND or a NAME RELEASE REQUEST to the refreshing node. The NAME CONFLICT DEMAND forces the node to place the name in the conflict state. The node will eventually inform it's user of the conflict.  The NAME RELEASE REQUEST will force the node to flush the name from its local name table completely. This forces the node to flush the name in conflict.  This does not cause termination of existing sessions using this name.</li></ul>
<br /><hr />
<br /><b>Adapter Status Transactions</b>
<br />Adapter status is obtained from a node as follows:
<br />1. Perform a name discovery operation to obtain the IP addresses of a set of end-nodes.
<br />
<br />2. Repeat until all end-nodes from the set have been used:
<br /><ul><li>Select one end-node from the set.
<br /><br /></li>
<li>Send a NODE STATUS REQUEST to that end-node using UDP.
<br /><br /></li>
<li>Await a NODE STATUS RESPONSE. (If a timely response is not forthcoming, repeat step "b" UCAST_REQ_RETRY_COUNT times. After the last retry, go to step "a".)
<br /><br /></li>
<li>If the truncation bit is not set in the response, the response contains the entire node status.  Return the status to the user and terminate this procedure.
<br /><br /></li>
<li>If the truncation bit is set in the response, then not all status was returned because it would not fit into the response packet. The responder will set the truncation bit if the IP datagram length would exceed MAX_DATAGRAM_LENGTH. Return the status to the user and terminate this procedure.</li></ul>
<br />
<br />3. Return error to user, no status obtained.
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: B-Node Add Name</b>

PROCEDURE add_name(newname)

      /*
       * Host initiated processing for a B node
       */
      BEGIN

           REPEAT

                /* build name service packet */

                ONT = B_NODE; /* broadcast node */
                G = UNIQUE;   /* unique name */
                TTL = 0;

                broadcast NAME REGISTRATION REQUEST packet;

                /*
                 * remote node(s) will send response packet
                 * if applicable
                 */

                pause(BCAST_REQ_RETRY_TIMEOUT);

           UNTIL response packet is received or retransmit count has been exceeded

           IF no response packet was received THEN
           BEGIN /* no response */
                /*
                 * build packet
                 */

                ONT = B_NODE; /* broadcast node */
                G = UNIQUE;   /* unique name */
                TTL = 0;

                /*
                 * Let other nodes known you have the name
                 */

                broadcast NAME UPDATE REQUEST packet;
                /* name can be added to local name table */
                return success;
           END /* no response */
           ELSE
           BEGIN /* got response */

              /*
               * Match return transaction id
               * against tid sent in request
               */

             IF NOT response tid = request tid THEN
             BEGIN
             ignore response packet;
             END
             ELSE
             CASE packet type OF

             NEGATIVE NAME REGISTRATION RESPONSE:

                  return failure; /* name cannot be added */

            POSITIVE NAME REGISTRATION RESPONSE:
            END-NODE CHALLENGE NAME REGISTRATION RESPONSE:

                  /*
                   * B nodes should normally not get this
                   * response.
                   */

                   ignore packet;

               END /* case */;
           END /* got response */
        END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: B-Node Add_Group Name</b>

PROCEDURE add_group_name(newname)

      /*
       * Host initiated processing for a B node
       */

      BEGIN
           /*
            * same as for a unique name with the
            * exception that the group bit (G) must
            * be set in the request packets.
            */

           ...
           G = GROUP;
           ...
           ...

           /*
            * broadcast request ...
            */

      END</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: B-Node Find_Name</b>

PROCEDURE find_name(name)

      /*
       * Host initiated processing for a B node
       */

      BEGIN

           REPEAT
                /*
                 * build packet
                 */
                ONT = B;
                TTL = 0;
                G = DONT CARE;

                broadcast NAME QUERY REQUEST packet;

                /*
                 * a node might send response packet
                 */

                pause(BCAST_REQ_RETRY_TIMEOUT);
          UNTIL response packet received OR max transmit threshold exceeded

           IF no response packet received THEN return failure;
           ELSE
           IF NOT response tid = request tid THEN ignore packet;
           ELSE
           CASE packet type OF
           POSITIVE NAME QUERY RESPONSE:
              /*
               * Start a timer to detect conflict.
               *
               * Be prepared to detect conflict if
               * any more response packets are received.
               *
               */

              save response as authoritative response; start_timer(CONFLICT_TIMER); 
              return success;

           NEGATIVE NAME QUERY RESPONSE:
           REDIRECT NAME QUERY RESPONSE:

                /*
                 * B Node should normally not get either
                 * response.
                 */

                 ignore response packet;

           END /* case */
      END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 4" tabindex="0"><b>Example 4: B Node Name Release</b>

PROCEDURE delete_name (name)
      BEGIN

           REPEAT

                /*
                 * build packet
                 */

                ...

                /*
                 * send request
                 */

                broadcast NAME RELEASE REQUEST packet;

                /*
                 * no response packet expected
                 */

                pause(BCAST_REQ_RETRY_TIMEOUT);

           UNTIL retransmit count has been exceeded
      END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 5" tabindex="0"><b>Example 5: B-Node Incoming Packet Processing</b>

Following processing is done when broadcast or unicast packets are received at the 
NAME_SERVICE_UDP_PORT.

PROCEDURE process_incoming_packet(packet)

      /*
       * Processing initiated by incoming packets for a B node
       */

      BEGIN
           /*
            * Note: response packets are always sent
            * to:
            * source IP address of request packet
            * source UDP port of request packet
            */

           CASE packet type OF

           NAME REGISTRATION REQUEST (UNIQUE):
                IF name exists in local name table THEN
                      send NEGATIVE NAME REGISTRATION RESPONSE ;
           NAME REGISTRATION REQUEST (GROUP):
                IF name exists in local name table THEN
                BEGIN
                     IF local entry is a unique name THEN
                         send NEGATIVE NAME REGISTRATION RESPONSE ;
                END
           NAME QUERY REQUEST:
                IF name exists in local name table THEN
                BEGIN
                     build response packet;

                     send POSITIVE NAME QUERY RESPONSE;
           POSITIVE NAME QUERY RESPONSE:
                IF name conflict timer is not active THEN
                BEGIN
                     /*
                      * timer has expired already...  ignore this
                      * packet
                      */

                     return;
                END
                ELSE /* timer is active */
                IF a response for this name has previously been received THEN
                BEGIN /* existing entry */

                     /*
                      * we sent out a request packet, and
                      * have already received (at least)
                      * one response
                      *
                      * Check if conflict exists.
                      * If so, send out a conflict packet.
                      *
                      * Note: detecting conflict does NOT
                      * affect any existing sessions.
                      *
                      */

                     /*
                      * Check for name conflict.
                      * See "Name Conflict" in Concepts and Methods
                      */
                     check saved authoritative response against information in this 
response packet;
                     IF conflict detected THEN
                     BEGIN
                          unicast NAME CONFLICT DEMAND packet;
                          IF entry exists in cache THEN
                          BEGIN
                               remove entry from cache;
                          END
                     END
                END /* existing entry */
                ELSE
                BEGIN
                     /*
                      * Note: If this was the first response
                      * to a name query, it would have been
                      * handled in the
                      * find_name() procedure.

                      */

                     ignore packet;
                END
           NAME CONFLICT DEMAND:
                IF name exists in local name table THEN
                BEGIN
                     mark name as conflict detected;

                     /*
                      * a name in the state "conflict detected"
                      * does not "logically" exist on that node.
                      * No further session will be accepted on
                      * that name.
                      * No datagrams can be sent against that name.
                      * Such an entry will not be used for
                      * purposes of processing incoming request
                      * packets.
                      * The only valid user NetBIOS operation
                      * against such a name is DELETE NAME.
                      */
                END
           NAME RELEASE REQUEST:
                IF caching is being done THEN
                BEGIN
                     remove entry from cache;
                END
           NAME UPDATE REQUEST:
                IF caching is being done THEN
                BEGIN
                     IF entry exists in cache already, update cache;
                     ELSE IF name is "interesting" THEN
                     BEGIN
                         add entry to cache;
                     END
                END

           NODE STATUS REQUEST:
                IF name exists in local name table THEN
                BEGIN
                     /*
                      * send only those names that are
                      * in the same scope as the scope
                      * field in the request packet
                      */

                     send NODE STATUS RESPONSE;
              END
      END</pre>
<br />	  
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
			<b>Adapter</b><br />The circuitry required to support a particular device. For example, video adapters enable the computer to support graphics monitors, and network adapters enable a computer to attach to a network. Adapters can be built into the main circuitry of a computer or they can be separate add-ons that come in the form of expansion boards.<br /><br /><b>NBNS</b><br />NBNS (NetBIOS name server) is a server providing NetBIOS name to IP address mapping. The NBNS is part of the NBT mechanism and does not need to participate directly in the NetBIOS LAN.<br /><br /><b>NetBIOS</b><br />NetBIOS(Network Basic Input Output System) is an API that augments the DOS BIOS by adding special functions for local-area networks (LANs). Almost all Windows-based LANs for PCs are based on the NetBIOS. Some LAN manufacturers have even extended it, adding additional network capabilities. <br /><br /><b>UDP</b><br />UDP (User Datagram Protocol) is a connectionless protocol that, like TCP, runs on top of IP networks. Unlike TCP/IP, UDP/IP provides very few error recovery services, offering instead a direct way to send and receive datagrams over an IP network. It's used primarily for broadcasting messages over a network.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc1001.html">RFC 1001</a>] PROTOCOL STANDARD FOR A NetBIOS SERVICE ON A TCP/UDP TRANSPORT: CONCEPTS AND METHODS.
[<a href="https://www.rfc-editor.org/rfc/rfc1002.html">RFC 1002</a>] PROTOCOL STANDARD FOR A NetBIOS SERVICE ON A TCP/UDP TRANSPORT: DETAILED SPECIFICATIONS.
                		  </div>
		  
</section>


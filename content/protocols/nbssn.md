---
id: protocol-nbssn
slug: nbssn
name: NBSSN
expandedName: NetBIOS Session Service
origin: historical
provenance:
  source: protocols/protocol_NBSSN.htm
  sha256: 0ce6d3337cfd68cce5f9ad9888aa72b3eb4c958a2254bff225e4c28887f2cc4f
  provider: 'Colasoft Co., Ltd.'
aliases:
  - NetBIOS Session Service
layers:
  - Presentation Layer
suites:
  - IBM protocol suite
summary:
  - label: Protocol
    html: NetBIOS Session Service
  - label: Protocol suite
    html: IBM protocol suite
  - label: Layer
    html: Presentation Layer
  - label: Ports
    html: 139 Session Service
  - label: Related protocols
    html: 'Domain Name Service,<br />Internet Group Multicast'
originalUpdate: '2005-11-07 17:30:41'
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

			The NetBIOS session service begins after one or more IP addresses have been found for the target name. These addresses may have been acquired using the NetBIOS name query transactions or by other means, such as a local name table or cache.
<br />
<br />NetBIOS session service transactions, packets, and protocols are identical for all end-node types. They involve only directed (point-to-point) communications.
<br />
<br />Session service has three phases:
<br /><ul><li><b>Session establishment</b></li><li> - it is during this phase that the IP address and TCP port of the called name is determined, and a TCP connection is established with the remote party.
<br /><br /></li>
<li><b>Steady state</b></li><li> - it is during this phase that NetBIOS data messages are exchanged over the session. Keep-alive packets may also be exchanged if the participating nodes are so configured.
<br /><br /></li>
<li><b>Session close</b></li><li> - a session is closed whenever either a party (in the session) closes the session or it is determined that one of the parties has gone down.</li></ul>
<br />
<br /><b>Session Establishment Phase</b>
<br />An end-node begins establishment of a session to another node by somehow acquiring (perhaps using the name query transactions or a local cache) the IP address of the node or nodes purported to own the destination name.
<br />
<br />Every end-node awaits incoming NetBIOS session requests by listening for TCP calls to a well-known service port, SSN_SRVC_TCP_PORT.  Each incoming TCP connection represents the start of a separate NetBIOS session initiation attempt.  The NetBIOS session server, not the ultimate application, accepts the incoming TCP connection(s).
<br />
<br />Once the TCP connection is open, the calling node sends session service request packet.  This packet contains the following information:
<br /><ul><li>Calling IP address (see note)<br /></li>
<li>Calling NetBIOS name<br /></li>
<li>Called IP address (see note)<br /></li>
<li>Called NetBIOS name</li></ul>
<br />
<br />When the session service request packet arrives at the NetBIOS server, one of the following situations will exist:
<br /><ul><li>There exists a NetBIOS LISTEN compatible with the incoming call and there are adequate resources to permit session establishment to proceed.<br /><br /></li>

<li>There exists a NetBIOS LISTEN compatible with the incoming call, but there are inadequate resources to permit establishment of a session.<br /><br /></li>

<li>The called name does, in fact, exist on the called node, but there is no pending NetBIOS LISTEN compatible with the incoming call.<br /><br /></li>

<li>The called name does not exist on the called node.</li></ul>
<br />
<br />In all but the first case, a rejection response is sent back over the TCP connection to the caller. The TCP connection is then closed and the session phase terminates. Any retry is the responsibility of the caller. For retries in the case of a group name, the caller may use the next member of the group rather than immediately retrying the instant address. In the case of a unique name, the caller may attempt an immediate retry using the same target IP address unless the called name did not exist on the called node. In that one case, the NetBIOS name should be re-resolved.
<br /><ul><li><b>Retrying after Being Retargeted</b><br /></li>
<li>A calling node may find that it can not establish a session with a node to which it was directed by the retargeting procedure. Since retargeting may be nested, there is an issue whether the caller should begin a retry at the initial starting point or back-up to an intermediate retargeting point. The caller may use any method.
<br /><br /></li>
<li><b>Session Establishment to a Group Name</b><br /></li>
<li>Session establishment with a group name requires special consideration. When a NetBIOS CALL attempt is made to a group name, name discovery will result in a list (possibly incomplete) of the members of that group. The calling node selects one member from the list and attempts to build a session. If that fails, the calling node may select another member and make another attempt.</li></ul>
<br /><hr />
<br />All the following diagrams assume a name query operation was successfully completed by the caller node for the listener's name.
<br />
<br /><ul><li>This first diagram shows the sequence of network events used to successfully establish a session without retargeting by the listener. The TCP connection is first established with the well- known NetBIOS session service TCP port, SSN_SRVC_TCP_PORT. The caller then sends a SESSION REQUEST packet over the TCP connection requesting a session with the listener. The SESSION REQUEST contains the caller's name and the listener's name. The listener responds with a POSITIVE SESSION RESPONSE informing the caller this TCP connection is accepted as the connection for the data transfer phase of the session.<br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">            CALLER                     LISTENER

                       TCP CONNECT
           ====================================&gt;
                        TCP ACCEPT
           &lt;===================================
                     SESSION REQUEST
           ------------------------------------&gt;
                    POSITIVE RESPONSE
           &lt;-----------------------------------</pre><br /></li>
<li>The second diagram shows the sequence of network events used to successfully establish a session when the listener does retargeting.<br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">       CALLER        LISTEN PROCESSOR        LISTENER

                   TCP CONNECT
           =============================&gt;
                   TCP ACCEPT
           &lt;=============================
                   SESSION REQUEST
           -----------------------------&gt;

              SESSION RETARGET RESPONSE
           &lt;-----------------------------
                   TCP CLOSE
           &lt;=============================
                   TCP CLOSE
           =============================&gt;

                       TCP CONNECT
           ====================================================&gt;
                        TCP ACCEPT
           &lt;====================================================
                     SESSION REQUEST
           ----------------------------------------------------&gt;
                    POSITIVE RESPONSE
           &lt;----------------------------------------------------</pre><br /></li>
<li>The third diagram is the sequence of network events for a rejected session request with the listener. This type of rejection could occur with either a non-retargeting listener or a retargeting listener.<br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 3" tabindex="0">           CALLER                          LISTENER

                        TCP CONNECT
           ====================================&gt;
                        TCP ACCEPT
           &lt;===================================
                     SESSION REQUEST
           ------------------------------------&gt;
                    NEGATIVE RESPONSE
           &lt;-----------------------------------
                        TCP CLOSE
           &lt;===================================
                        TCP CLOSE
           ====================================&gt;</pre><br /></li>
<li>The fourth diagram is the sequence of network events when session establishment fails with a retargeting listener. After being redirected, and after the initial TCP connection is closed the caller tries to establish a TCP connection with the new IP address and TCP port.<br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 4" tabindex="0">           CALLER         LISTEN PROCESSOR        LISTENER

                   TCP CONNECT
           =============================&gt;
                   TCP ACCEPT
           &lt;=============================
                   SESSION REQUEST
           -----------------------------&gt;
                   REDIRECT RESPONSE
           &lt;-----------------------------
                   TCP CLOSE
           &lt;=============================
                   TCP CLOSE
           =============================&gt;

                       TCP CONNECT
           ====================================================&gt;

                     CONNECTION REFUSED OR TIMED OUT
           &lt;===================================================</pre></li></ul>
<br /><hr />
<br /><b>Steady State Phase</b>
<br />NetBIOS data messages are exchanged in the steady state.  NetBIOS messages are sent by prepending the user data with a message header and sending the header and the user data over the TCP connection. The receiver removes the header and passes the data to the NetBIOS user.
<br />
<br />In order to detect failure of one of the nodes or of the intervening network, "session keep alive" packets may be periodically sent in the steady state.
<br />
<br /><b>Session Termination Phase</b>
<br />A NetBIOS session is terminated normally when the user requests the session to be closed or when the session service detects the remote partner of the session has gracefully terminated the TCP connection. A NetBIOS session is abnormally terminated when the session service detects a loss of the connection. Connection loss can be detected with the keep-alive function of the session service or TCP, or on the failure of a SESSION MESSAGE send operation.
<br />
<br /><b>Session Data Transfer Phase</b>
<br />NetBIOS messages are exchanged in the steady state. Messages are sent by prepending user data with message header and sending the header and the user data over the TCP connection. The receiver removes the header and delivers the NetBIOS data to the user.
<br />
<br />In order to detect node failure or network partitioning, "session keep alive" packets are periodically sent in the steady state. A session keep alive packet is discarded by a peer node.
<br />
<br />A session keep alive timer is maintained for each session. This timer is reset whenever any data is sent to, or received from, the session peer. When the timer expires, a NetBIOS session keep-alive packet is sent on the TCP connection. Sending the keep-alive packet forces data to flow on the TCP connection, thus indirectly causing TCP to detect whether the connection is still active.
<br />
<br />Since many TCP implementations provide a parallel TCP "keep- alive" mechanism, the NetBIOS session keep-alive is made a configurable option. It is recommended that the NetBIOS keep- alive mechanism be used only in the absence of TCP keep-alive.
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: User request processing</b>

      PROCEDURE listen(listening name, caller name)
      /*
       * User initiated processing for B, P and M nodes
       *
       * This procedure assumes that an incoming session will be
       * retargetted here by a session server.
       */
       BEGIN
         Do TCP listen; /* Returns TCP port used */
         Register listen with Session Service, give names and TCP port;

         Wait for TCP connection to open;   /* Incoming call */

         Read SESSION REQUEST packet from connection

         Process session request (see section on processing initiated by the reception 
         of session service packets);

         Inform Session Service that NetBIOS listen is complete;

         IF session established THEN return success and session information to user;
         ELSE
              return failure;
      END /* procedure */

      PROCEDURE call(calling name, called name)
      /*
       * user initiated processing for B, P and M nodes
       */

      /*
       * This algorithm assumes that the called name is a unique name.
       * If the called name is a group name, the call() procedure
       * needs to cycle through the members of the group
       * until either (retry_count == SSN_RETRY_COUNT) or
       * the list has been exhausted.
       */
      BEGIN
         retry_count = 0;
         retarget = FALSE;   /* TRUE: caller is being retargetted */
         name_query = TRUE;  /* TRUE: caller must begin again with */
                                 /*       name query. */

         REPEAT
            IF name_query THEN
            BEGIN
               do name discovery, returns IP address;
               TCP port = SSN_SRVC_TCP_PORT;

               IF name discovery fails THEN return failure;
               ELSE
                    name_query = FALSE;
            END

            /*
             * now have IP address and TCP port of
             * remote party.
             */

            establish TCP connection with remote party, use an ephemeral port as 
            source TCP port;
            IF connection refused THEN
            BEGIN
              IF retarget THEN
              BEGIN
                    /* retry */
                      retarget = FALSE;

                      use original IP address and TCP port;
                      goto LOOP;
              END

              /* retry for just missed TCP listen */

              pause(SESSION_RETRY_TIMER);
              establish TCP connection, again use ephemeral port as source TCP port;

              IF connection refused OR connection timed out THEN return failure;
            END
            ELSE
            IF connection timed out THEN
            BEGIN
               IF retarget THEN
               BEGIN
                  /* retry */
                  retarget = FALSE;
                  use original IP address and TCP port;
                  goto LOOP;
               END
               ELSE
               BEGIN
                  /*
                   * incorrect name discovery was done,
                   * try again
                   */

                  inform name discovery process of possible error;
                  name_query = TRUE;
                  goto LOOP;
               END
            END

            /*
             * TCP connection has been established
             */

            wait for session response packet;
            CASE packet type OF

               POSITIVE SESSION RESPONSE:return success and session established 
               information;

               NEGATIVE SESSION RESPONSE:
               BEGIN

                 CASE error OF
                    NOT LISTENING ON CALLED NAME:
                    NOT LISTENING FOR CALLING NAME:
                    BEGIN
                      kill TCP connection;
                      return failure;
                    END

                    CALLED NAME NOT PRESENT:
                    BEGIN
                      /*
                       * called name does not exist on
                       * remote node
                       */

                      inform name discovery procedure of possible error;

                      IF this is a P or M node THEN
                      BEGIN
                         /*
                          * Inform NetBIOS Name Server
                          * it has returned incorrect
                          * information.
                          */
                         send NAME RELEASE REQUEST for called name and IP address 
                         to NetBIOS Name Server;
                      END
                      /* retry from beginning */
                      retarget = FALSE;
                      name_query = TRUE;
                      goto LOOP;
                    END /* called name not present */
                 END /* case */
              END /* negative response */

                RETARGET SESSION RESPONSE:
                BEGIN
                close TCP connection;
                  extract IP address and TCP port fromresponse;
                  retarget = TRUE;
                END /* retarget response */
            END /* case */

  LOOP:          retry_count = retry_count + 1;

       UNTIL (retry_count &gt; SSN_RETRY_COUNT);
       return failure;
  END /* procedure */</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Session data transfer user request processing</b>

          PROCEDURE send_message(user_message)
          BEGIN
               build SESSION MESSAGE header;
               send SESSION MESSAGE header;
               send user_message;
               reset and restart keep-alive timer;
               IF send fails THEN
               BEGIN
                    /*
                     * TCP connection has failed */
                     */
                    close NetBIOS session;
                    inform user that session is lost;
                    return failure;
               END
               ELSE
                    return success;
          END</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Session termination reception indication processing</b>

          PROCEDURE close_indication()
          /*
           * initiated by a TCP indication of a close request from
           * the remote connection partner.

           */
          BEGIN
               close gracefully TCP connection;

               close NetBIOS session;

               inform user session closed by remote partner;
          END /* procedure */</pre>
<br />
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
			<b>NetBIOS</b><br />NetBIOS(Network Basic Input Output System) is an API that augments the DOS BIOS by adding special functions for local-area networks (LANs). Almost all Windows-based LANs for PCs are based on the NetBIOS. Some LAN manufacturers have even extended it, adding additional network capabilities. <br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>RFCs:</b> 
[<a href="https://www.rfc-editor.org/rfc/rfc1001.html">RFC 1001</a>] PROTOCOL STANDARD FOR A NetBIOS SERVICE ON A TCP/UDP TRANSPORT: CONCEPTS AND METHODS. 
[<a href="https://www.rfc-editor.org/rfc/rfc1002.html">RFC 1002</a>] PROTOCOL STANDARD FOR A NetBIOS SERVICE ON A TCP/UDP TRANSPORT: DETAILED SPECIFICATIONS.
                		  </div>
		  
</section>


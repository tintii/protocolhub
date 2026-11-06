---
id: protocol-dns
slug: dns
name: DNS
expandedName: Domain Name System
origin: historical
provenance:
  source: protocols/protocol_DNS.htm
  sha256: 10d898e3f4c846978db36ce5ef0892ed90f77e8e960c82a3f2c619ee6dc9203d
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Domain Name System
layers:
  - Application Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Domain Name System
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Application Layer
  - label: Type
    html: Name space translation protocol
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.dns (1.3.6.1.2.1.32).
  - label: Ports
    html: '53 (TCP, UDP) server'
  - label: Working groups
    html: |-
      Dns, Domain Name System.
      <br />Dnsext, DNS Extensions.
      <br />Dnsind, DNS IXFR, Notification, and Dynamic Update.
      <br />Dnsop, Domain Name Server Operations.
originalUpdate: '2005-11-10 15:58:58'
rfcs:
  - 830
  - 881
  - 882
  - 883
  - 897
  - 920
  - 921
  - 973
  - 974
  - 1002
  - 1031
  - 1032
  - 1033
  - 1034
  - 1035
  - 1101
  - 1123
  - 1183
  - 1279
  - 1296
  - 1327
  - 1348
  - 1383
  - 1386
  - 1401
  - 1464
  - 1480
  - 1535
  - 1536
  - 1537
  - 1591
  - 1611
  - 1612
  - 1637
  - 1664
  - 1706
  - 1712
  - 1713
  - 1794
  - 1811
  - 1816
  - 1876
  - 1886
  - 1912
  - 1933
  - 1982
  - 1995
  - 1996
  - 2010
  - 2052
  - 2053
  - 2065
  - 2136
  - 2137
  - 2142
  - 2146
  - 2163
  - 2168
  - 2181
  - 2182
  - 2219
  - 2230
  - 2308
  - 2517
  - 2535
  - 2536
  - 2537
  - 2538
  - 2539
  - 2540
  - 2541
  - 2553
  - 2606
  - 2671
  - 2672
  - 2673
  - 2694
  - 2766
  - 2772
  - 2782
  - 2826
  - 2845
  - 2870
  - 2874
  - 2893
  - 2915
  - 2916
  - 2929
  - 2930
  - 2931
  - 3007
  - 3008
  - 3027
  - 3071
  - 3090
  - 3110
  - 3123
  - 3130
  - 3152
  - 3197
  - 3225
  - 3226
  - 3245
  - 3258
  - 3363
  - 3364
  - 3401
  - 3402
  - 3403
  - 3404
  - 3425
  - 3445
  - 3467
  - 3568
  - 3596
  - 3597
  - 3645
  - 3646
  - 3655
  - 3658
  - 3675
  - 3681
  - 3696
  - 3755
  - 3757
  - 3761
  - 3832
  - 3833
  - 3845
  - 3901
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

			DNS protocol is utilized to identify servers by their IP addresses and aliases given their registered name. The request is usually simple, including just the name of the server. The response however is usually very complex because it contains all the addresses and aliases that the server might have. Because of this a compression algorithm is utilized in all cases to reduce the number of redundant data and the size of the datagrams. UDP is utilized to send and receive DNS requests.
<br />
<br />Part of the confusion associated with the DNS protocol is that it lacks a special name. Thus DNS can refer either to the entire system, or to the protocol that makes it work. This page documents the protocol, which operates in one of two basic modes - lookups or zone transfers.
<br /><hr />
<br /><b>DNS Lookups</b>
<br />Normal resource records lookups are done with UDP. An "intelligent retransmission" is to be used, though one is not specified in the protocol, resulting in a mix of poor strategies with good ones. The protocol itself is stateless; all the information needed are:          
<br /><ul><li><b>Questions</b><br /></li>
<li>Questions are always Name, Type, Class tuples. For Internet applications, the Class is IN, the Type is a valid RR type, and the Name is a fully-qualified domain name, stored in a standard format. Names can't be wildcarded, but Types and Classes can be. In addition, special Types exist to wildcard mail records and to trigger zone transfers. The question is the only section included in a query message; the remaining sections being used for replies.
<br /><br /></li>
<li><b>Answers</b><br /></li>
<li>Answers are RRs that match the Name, Type, Class tuple. If any of the matching records are CNAME pointers leading to other records, the target records should also be included in the answer. There may be multiple answers, since there may be multiple RRs with the same labels.
<br /><br /></li>
<li><b>Authority</b><br /></li>
<li>Authority RRs are type NS records pointing to name servers closer to the target name in the naming hierarchy. This field is completely optional, but clients are encouraged to cache this information if further requests may be made in the same name hierarchy.
<br /><br /></li>
<li><b>Additional</b><br /></li>
<li>Additional RRs are records that the name server believes may be useful to the client. The most common use for this field is to supply A (address) records for the name servers listed in the Authority section.
<br /></li><li>However, more clever name servers are feasible. For example, if the question is for an MX record for FreeSoft.org, the answer will currently point to mail.adnc.com. The name server can infer that the client's next request will be an A query for mail.adnc.com, which will be answered by with a CNAME record, the DNS equivalent of a symbolic link, and the target of that link, an A record for gemini.adnc.com. The name server can avoid all this extra traffic by just including the CNAME and A records as additional RRs in the original reply. Not all name servers do this, however.</li></ul>
<br />
<br /><b>Zone Transfers</b>
<br />Sometimes, it is necessary to efficiently transfer the resource records of an entire DNS zone. This is most commonly done by a secondary name server having determined the need to update its database. 
<br />
<br />The operation of a zone transfer is almost identical to a normal DNS query, except that TCP is used (due to large quantity of reply records) and a special Class exists to trigger a zone transfer. A DNS query with Name=FreeSoft.org, Class=IN, Type=AXFR will trigger a zone transfer for FreeSoft.org. The end of a zone transfer is marked by duplicating the SOA RR that started the zone.
<br />
<br /><b>Lower-Level Transport</b>
<br />Either TCP or UDP can be used to transport DNS protocol messages, connecting to server port 53 for either. Ordinary DNS requests can be made with TCP, though convention dictates the use of UDP for normal operation. TCP must be used for zone transfers, however, because of the danger of dropping records with an unreliable delivery protocol such as UDP.
<br /><hr />
<br /><b>DNS Header</b>
<br />Header format
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>16</p></td><td><p>17</p></td><td><p>21</p></td><td><p>22</p></td><td><p>23</p></td><td><p>24</p></td><td><p>25</p></td><td><p>26</p></td><td><p>27</p></td><td><p>28</p></td><td><p>32</p></td></tr><tr><td><p>Identification</p></td><td><p>QR</p></td><td><p>Opcode</p></td><td><p>AA</p></td><td><p>TC</p></td><td><p>RD</p></td><td><p>RA</p></td><td><p>Z</p></td><td><p>AD</p></td><td><p>CD</p></td><td><p>Rcode</p></td></tr><tr><td><p>Question count</p></td><td colspan="10"><p>Answer count</p></td></tr><tr><td><p>Authority count</p></td><td colspan="10"><p>Additional count</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>ID</b><br /></li>
<li>16-bit field used to correlate queries and responses.
<br /><br /></li>
<li><b>QR - Query/Response</b><br /></li>
<li>1-bit field that identifies the message as a query or response.
<br /><br /></li>
<li><b>Opcode</b><br /></li>
<li>4bits dield
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td>Opcode</td><td>Description</td></tr><tr><td><p>0</p></td><td>QUERY, Standard query.</td></tr><tr><td><p>1</p></td><td>IQUERY, Inverse query.</td></tr><tr><td><p>2</p></td><td>STATUS, Server status request.</td></tr><tr><td><p>3</p></td><td>Reserved.</td></tr><tr><td><p>4</p></td><td>Notify.</td></tr><tr><td><p>5</p></td><td>Update.</td></tr><tr><td><p>6-15</p></td><td>Reserved.</td></tr></tbody></table></div></div><br /></li>
<li><b>AA - Authoritative Answer</b><br /></li>
<li>1-bit field. When set to 1, identifies the response as one made by an authoritative name server.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td><p>AA</p></td><td>Description</td></tr><tr><td><p>0</p></td><td>Not authoritative.</td></tr><tr><td><p>1</p></td><td>Is authoritative</td></tr></tbody></table></div></div><br /></li>
<li><b>TC - Truncation</b><br /></li>
<li>1-bit field. When set to 1, indicates the message has been truncated.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><p>TC</p></td><td>Description</td></tr><tr><td><p>0</p></td><td>Not truncated.</td></tr><tr><td><p>1</p></td><td>Message truncated</td></tr></tbody></table></div></div><br /></li>
<li><b>RD - Recursion Desired</b><br /></li>
<li>1-bit field. May be set in a query and is copied into the response. If set, the name server is directed to pursue the query recursively. Recursive query support is optional.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>RD</p></td><td>Description</td></tr><tr><td><p>0</p></td><td>Recursion not desired.</td></tr><tr><td><p>1</p></td><td>Recursion desired.</td></tr></tbody></table></div></div><br /></li>
<li><b>RA - Recursion Available</b><br /></li>
<li>1 bit field. Indicates if recursive query support is available in the name server.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td><p>RA</p></td><td>Description</td></tr><tr><td><p>0</p></td><td>Recursive query support not available.</td></tr><tr><td><p>1</p></td><td>Recursive query support available.</td></tr></tbody></table></div></div><br /></li>
<li><b>AD - Authenticated data</b><br /></li>
<li>1 bit field. Indicates in a response that all data included in the answer and authority sections of the response have been authenticated by the server according to the policies of that server. It should be set only if all data in the response has been cryptographically verified or otherwise meets the server's local security policy.
<br /><br /></li>
<li><b>RCode - Response Code</b><br /></li>
<li>4-bit field that is set by the name server to identify the status of the query.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><p>Rcode</p></td></tr><tr><td><p>0</p></td><td>No error. The request completed successfully.</td></tr><tr><td><p>1</p></td><td>Format error. The name server was unable to interpret the query.</td></tr><tr><td><p>2</p></td><td>Server failure. The name server was unable to process this query due to a problem with the name server.</td></tr><tr><td><p>3</p></td><td>Name Error. Meaningful only for responses from an authoritative name server, this code signifies that the domain name referenced in the query does not exist.</td></tr><tr><td><p>4</p></td><td>Not Implemented. The name server does not support the requested kind of query.</td></tr><tr><td><p>5</p></td><td>Refused. The name server refuses to perform the specified operation for policy reasons. For example, a name server may not wish to provide the information to the particular requester, or a name server may not wish to perform a particular operation (e.g., zone transfer) for particular data.</td></tr><tr><td><p>6</p></td><td>YXDomain. Name Exists when it should not.</td></tr><tr><td><p>7</p></td><td>YXRRSet. RR Set Exists when it should not.</td></tr><tr><td><p>8</p></td><td>NXRRSet. RR Set that should exist does not.</td></tr><tr><td><p>9</p></td><td>NotAuth. Server Not Authoritative for zone.</td></tr><tr><td><p>10</p></td><td>NotZone. Name not contained in zone.</td></tr><tr><td><p>11-15</p></td><td>Reserved.</td></tr><tr><td><p>16</p></td><td>BADVERS. Bad OPT Version.<br />BADSIG. TSIG Signature Failure.</td></tr><tr><td><p>17</p></td><td>BADKEY. Key not recognized.</td></tr><tr><td><p>18</p></td><td>BADTIME. Signature out of time window.</td></tr><tr><td><p>19</p></td><td>BADMODE. Bad TKEY Mode.</td></tr><tr><td><p>20</p></td><td>BADNAME.Duplicate key name.</td></tr><tr><td><p>21</p></td><td>BADALG.Algorithm not supported.</td></tr><tr><td><p>22-3840</p></td><td>¡¡</td></tr><tr><td><p>3841-4095</p></td><td>Private use.</td></tr><tr><td><p>4096-65535</p></td><td>¡¡</td></tr></tbody></table></div></div><br /></li>
<li><b>Question count</b><br /></li>
<li>16-bit field that defines the number of entries in the question section.
<br /><br /></li>
<li><b>Answer count</b><br /></li>
<li>16-bit field that defines the number of resource records in the answer section. 
<br /><br /></li>
<li><b>Authority count</b><br /></li>
<li>16-bit field that defines the number of name server resource records in the authority section.
<br /><br /></li>
<li><b>Additional count</b><br /></li>
<li>16-bit field that defines the number of resource records in the additional records section.</li></ul>
<br /><hr />
<br /><b>Query</b>
<br />Variable length
<br /><div><div class="table-scroll" role="region" aria-label="Description table 8" tabindex="0"><table><caption>Description: preserved table 8</caption><tbody><tr><td><p>16</p></td><td><p>32</p></td></tr><tr><td colspan="2"><p>Query Name</p></td></tr><tr><td><p>Type</p></td><td><p>Class</p></td></tr></tbody></table></div></div>
<br /><b>Resource Record</b>
<br />Variable length.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 9" tabindex="0"><table><caption>Description: preserved table 9</caption><tbody><tr><td><p>16</p></td><td><p>32</p></td></tr><tr><td colspan="2"><p>Name</p></td></tr><tr><td><p>Type</p></td><td><p>Class</p></td></tr><tr><td colspan="2"><p>TTL</p></td></tr><tr><td><p>Rdata Length</p></td><td><p> </p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Type</b><br /></li>
<li>16 bits, unsigned.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 10" tabindex="0"><table><caption>Description: preserved table 10</caption><tbody><tr><td><p>Type</p></td><td>Description</td></tr><tr><td><p>1</p></td><td>A, IPv4 address.</td></tr><tr><td><p>2</p></td><td>NS, Authoritative name server.</td></tr><tr><td><p>3</p></td><td>MD, Mail destination. Obsolete use MX instead.</td></tr><tr><td><p>4</p></td><td>MF, Mail forwarder. Obsolete use MX instead.</td></tr><tr><td><p>5</p></td><td>CNAME, Canonical name for an alias.</td></tr><tr><td><p>6</p></td><td>SOA, Marks the start of a zone of authority.</td></tr><tr><td><p>7</p></td><td>MB, Mailbox domain name.</td></tr><tr><td><p>8</p></td><td>MG, Mail group member.</td></tr><tr><td><p>9</p></td><td>MR, Mail rename domain name.</td></tr><tr><td><p>10</p></td><td>NULL, Null resource record.</td></tr><tr><td><p>11</p></td><td>WKS, Well known service description.</td></tr><tr><td><p>12</p></td><td>PTR, Domain name pointer.</td></tr><tr><td><p>13</p></td><td>HINFO, Host information.</td></tr><tr><td><p>14</p></td><td>MINFO, Mailbox or mail list information.</td></tr><tr><td><p>15</p></td><td>MX, Mail exchange.</td></tr><tr><td><p>16</p></td><td>TXT, Text strings.</td></tr><tr><td><p>17</p></td><td>RP, Responsible Person.</td></tr><tr><td><p>18</p></td><td>AFSDB, AFS Data Base location.</td></tr><tr><td><p>19</p></td><td>X25, X.25 PSDN address.</td></tr><tr><td><p>20</p></td><td>ISDN, ISDN address.</td></tr><tr><td><p>21</p></td><td>RT, Route Through.</td></tr><tr><td><p>22</p></td><td>NSAP, NSAP address. NSAP style A record.</td></tr><tr><td><p>23</p></td><td>NSAP-PTR.</td></tr><tr><td><p>24</p></td><td>SIG, Security signature.</td></tr><tr><td><p>25</p></td><td>KEY, Security key.</td></tr><tr><td><p>26</p></td><td>PX, X.400 mail mapping information.</td></tr><tr><td><p>27</p></td><td>GPOS, Geographical Position.</td></tr><tr><td><p>28</p></td><td>AAAA, IPv6 Address.</td></tr><tr><td><p>29</p></td><td>LOC, Location Information.</td></tr><tr><td><p>30</p></td><td>NXT, Next Domain (obsolete).</td></tr><tr><td><p>31</p></td><td>EID, Endpoint Identifier.</td></tr><tr><td><p>32</p></td><td>NIMLOC, Nimrod Locator.<br />NB, NetBIOS general Name Service.</td></tr><tr><td><p>33</p></td><td>SRV, Server Selection.<br />NBSTAT, NetBIOS NODE STATUS.</td></tr><tr><td><p>34</p></td><td>ATMA, ATM Address.</td></tr><tr><td><p>35</p></td><td>NAPTR, Naming Authority Pointer.</td></tr><tr><td><p>36</p></td><td>KX, Key Exchanger.</td></tr><tr><td><p>37</p></td><td>CERT.</td></tr><tr><td><p>38</p></td><td>A6.</td></tr><tr><td><p>39</p></td><td>DNAME.</td></tr><tr><td><p>40</p></td><td>SINK.</td></tr><tr><td><p>41</p></td><td>OPT.</td></tr><tr><td><p>42</p></td><td>APL.</td></tr><tr><td><p>43</p></td><td>DS, Delegation Signer.</td></tr><tr><td><p>44</p></td><td>SSHFP, SSH Key Fingerprint.</td></tr><tr><td><p>45</p></td><td> </td></tr><tr><td><p>46</p></td><td>RRSIG.</td></tr><tr><td><p>47</p></td><td>NSEC.</td></tr><tr><td><p>48</p></td><td>DNSKEY.</td></tr><tr><td><p>49-99</p></td><td> </td></tr><tr><td><p>100</p></td><td>UINFO.</td></tr><tr><td><p>101</p></td><td>UID.</td></tr><tr><td><p>102</p></td><td>GID.</td></tr><tr><td><p>103</p></td><td>UNSPEC.</td></tr><tr><td><p>104-247</p></td><td> </td></tr><tr><td><p>248</p></td><td>ADDRS.</td></tr><tr><td><p>249</p></td><td>TKEY.</td></tr><tr><td><p>250</p></td><td>TSIG, Transaction Signature.</td></tr><tr><td><p>251</p></td><td>IXFR, Incremental transfer.</td></tr><tr><td><p>252</p></td><td>AXFR, A request for a transfer of an entire zone.</td></tr><tr><td><p>253</p></td><td>MAILB, A request for mailbox-related records (MB, MG or MR).</td></tr><tr><td><p>254</p></td><td>MAILA, A request for mail agent RRs. Obsolete.</td></tr><tr><td><p>255</p></td><td>*. A request for all records.</td></tr></tbody></table></div></div><br /></li>
<li><b>Class</b><br /></li>
<li>16 bits, unsigned.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 11" tabindex="0"><table><caption>Description: preserved table 11</caption><tbody><tr><td>Class</td><td>Description</td></tr><tr><td>0</td><td>Reserved.</td></tr><tr><td>1</td><td>IN, Internet.</td></tr><tr><td>2</td><td>¡¡</td></tr><tr><td>3</td><td>CH, Chaos.</td></tr><tr><td>4</td><td>HS, Hesiod.</td></tr><tr><td>5-253</td><td>¡¡</td></tr><tr><td>254</td><td>None.</td></tr><tr><td>255</td><td>Any (QCLASS only).</td></tr><tr><td>256-65535</td><td>¡¡</td></tr></tbody></table></div></div></li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: SEND</b>

7E FF 03 00 21 45 00 00 40 00 02 00 00 3C 11 E0 30 CE D9 8F 1F C7 B6 78 CB 04 6D 00 35 00 
2C 0D 54 00 02 01 00 00 01 00 00 00 00 00 00 04 70 6F 70 64 02 69 78 06 6E 65 74 63 6F 6D 
03 63 6F 6D 00 00 01 00 01 C7 00 7E

    Start	       7E
    Address	       FF 03 
    SEP            00 21 
    IP Header      45 00 00 40 00 02 00 00 3C 11 E0 30 CE D9 8F 1F C7 B6 78 CB 04 6D
    UDP Header     00 35 00 2C 0D 54
    DNS Header     00 02 01 00 00 01 00 00 00 00 00 00
    DNS Message    04 70 6F 70 64 02 69 78 06 6E 65 74 63 6F 6D 03 63 6F 6D 00 00 01 00 01 
    FCS	       C7 00
    Stop	       7E

UDP Header
SRC_PORT=046D DEST_PORT=0035 UDP_LEN=002C UDP_SUM=0D54 

DNS Header
ID=2   QR=0  OPCODE=0  AA = 0  TC=0 RD = 1 RA=0 Z =0  RCCODE=0  QDCOUNT=1 
ANCOUNT=0 NSCOUNT=0 ARCOUNT=0

DNS Message 
QNAME=04 70 6F 70 64 02 69 78 06 6E 65 74 63 6F 6D 03 63 6F 6D 00  QTYPE=0001  
QCLASS=0001 

Client sends a UDP/IP packet with a DNS question (QR=0) as a standard query
(OPCODE=0) with one entry (QDCOUNT=1). It does not include any resource in neither one 
of the answer, authority or additional records (ANCOUNT=0 NSCOUNT=0 ARCOUNT=0). 
The QNAME specifies the domain name of the resource the client is searching for 
(QNAME = popd.ix.netcom.com.). Note that the periods in the domain name are replaced 
by the length of the name that follows. The type and class of resource the client is 
searching for are QTYPE=1(Host Address), QCLASS=1(Internet)</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: RECV</b>

7E 21 45 00 01 5F F6 79 40 00 F7 11 ED 98 C7 B6 78 CB CE D9 8F 1F 00 35 04 6D 01 4B 49 
AA 00 02 85 80 00 01 00 03 00 06 00 06 04 70 6F 70 64 02 69 78 06 6E 65 74 63 6F 6D 03 63 
6F 6D 00 00 01 00 01 C0 0C 00 05 00 01 00 00 00 3C 00 19 04 70 6F 70 64 04 62 65 73 74 02 
69 78 06 6E 65 74 63 6F 6D 03 63 6F 6D 00 C0 30 00 05 00 01 00 00 00 00 00 06 03 69 78 36 
C0 3A C0 55 00 01 00 01 00 00 1C 20 00 04 C7 B6 78 06 C0 3A 00 02 00 01 00 00 1C 20 00 06 
03 6E 73 31 C0 3A C0 3A 00 02 00 01 00 00 1C 20 00 06 03 6E 73 32 C0 3A C0 3A 00 02 00 01 
00 00 1C 20 00 06 03 6E 73 33 C0 3A C0 3A 00 02 00 01 00 00 1C 20 00 06 03 6E 73 34 C0 3A 
C0 3A 00 02 00 01 00 00 1C 20 00 0C 09 64 66 77 2D 69 78 6E 73 31 C0 3A C0 3A 00 02 00 01 
00 00 1C 20 00 0C 09 64 66 77 2D 69 78 6E 73 32 C0 3A C0 77 00 01 00 01 00 00 1C 20 00 04 
C7 B6 78 CB C0 89 00 01 00 01 00 00 1C 20 00 04 C7 B6 78 CA C0 9B 00 01 00 01 00 00 1C 20 
00 04 C7 B6 78 01 C0 AD 00 01 00 01 00 00 1C 20 00 04 C7 B6 78 02 C0 BF 00 01 00 01 00 00 
1C 20 00 04 CE D6 62 21 C0 D7 00 01 00 01 00 00 1C 20 00 04 CE D6 62 22 C8 4C 7E

IP Header
VER=4 IHL=5 TOS=0 TOL=351 ID=63097 FLG=02 FRO=00 TTL=247 PRO=17 IP_SUM=ED98 
SRC=199.182.120.203. DEST=206.217.143.31. OPT=00000000

UDP Header
SRC_PORT=0035   DEST_PORT=046D   UDP_LEN=014B  UDP_SUM=49AA

DNS Header
ID=2  QR=1  OPCODE=0  AA=1  TC=0  RD=1  RA=1  RCODE=0 QDCOUNT=1 ANCOUNT=3 NSCOUNT=6 
ARCOUNT=6

Server sends a response (QR=1) to the client standard query (OPCODE=0). 
Server is an authority for the domain name (AA=1) and can support recursive queries 
(RA=1). No errors occurred in the client's query (RCODE=0). The response has 1 entry 
in the question section (QDCOUNT=1), 3 resource records in the answer section 
(ANCOUNT=3), 6 resource records in the authority section (NSCOUNT=6) and 6 resource 
records in the additional records section (ARCOUNT=6). Note that offsets are used to 
replace domain names and reduce the size of the DNS message

    Start         7E
    SEP           21
    IP Header     45 00 01 5F F6 79 40 00 F7 11 ED 98 C7 B6 78 CB CE D9 8F 1F 
    UDP Header    00 35 04 6D 01 4B 49 AA 
    DNS Header    00 02 85 80 00 01 00 03 00 06 00 06 
    QUESTION      04 70 6F 70 64 02 69 78 06 6E 65 74 63 6F 6D 03 63 6F 6D 00 00 01 00 01
    ANSWER        Name [C0 0C] (offset to position 12 of the DNS message)
                  Type [00 05] Class [00 01] TTL [00 00 00 3C] RDLENGTH [00 19]
                  RDDATA [04 70 6F 70 64 04 62 65 73 74 02 69 78 06 6E 65 74 63 6F 6D 03 
                  63 6F 6D 00] 
                  C0 30 00 05 00 01 00 00 00 00 00 06
                  03 69 78 36 C0 3A 
                  C0 55 00 01 00 01 00 00 1C 20 00 04 
                  C7 B6 78 06
                  AUTHORITY	 C0 3A 00 02 00 01 00 00 1C 20 00 06
                  03 6E 73 31 C0 3A
                  C0 3A 00 02 00 01 00 00 1C 20 00 06
                  03 6E 73 32 C0 3A 
                  C0 3A 00 02 00 01 00 00 1C 20 00 06 03 
                  6E 73 33 C0 3A 
                  C0 3A 00 02 00 01 00 00 1C 20 00 06 03 
                  6E 73 34 C0 3A
                  C0 3A 00 02 00 01 00 00 1C 20 00 0C 09 
                  64 66 77 2D 69 78 6E 73 31 C0 3A 
                  C0 3A 00 02 00 01 00 00 1C 20 00 0C 09 
                  64 66 77 2D 69 78 6E 73 32 C0 3A 
                  ADDITIONAL C0 77 00 01 00 01 00 00 1C 20 00 04 
                  C7 B6 78 CB 
                  C0 89  00 01 00 01 00 00 1C 20 00 04 
                  C7 B6 78 CA
                  C0 9B 00 01 00 01 00 00 1C 20 00 04 
                  C7 B6 78 01
                  C0 AD 00 01 00 01 00 00 1C 20 00 04 
                  C7 B6 78 02
                  C0 BF 00 01 00 01 00 00 1C 20 00 04 
                  CE D6 62 21
                  C0 D7 00 01 00 01 00 00 1C 20 00 04 
                  CE D6 62 22 
                  FCS		    C8 4C 
                  Stop		    7E</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: QUESTION</b>

popd.ix.netcom.com QTYPE=1  QCLASS=1

        ANSWERS
        NAME: .popd.ix.netcom.com
        RDDATA: .popd.best.ix.netcom.com   TYPE=5 CLASS=1 TTL=60
        NAME: .popd.best.ix.netcom.com
        RDDATA: .ix6.ix.netcom.com   TYPE=5 CLASS=1 TTL=0
        NAME: .ix6.ix.netcom.com
        RDDATA: 199.182.120.6.   TYPE=1 CLASS=1 TTL=7200
        AUTORITIES
        NAME: .ix.netcom.com
        RDDATA: .ns1.ix.netcom.com   TYPE=2 CLASS=1 TTL=7200
        NAME: .ix.netcom.com
        RDDATA: .ns2.ix.netcom.com   TYPE=2 CLASS=1 TTL=7200
        NAME: .ix.netcom.com
        RDDATA: .ns3.ix.netcom.com   TYPE=2 CLASS=1 TTL=7200
        NAME: .ix.netcom.com
        RDDATA: .ns4.ix.netcom.com   TYPE=2 CLASS=1 TTL=7200
        NAME: .ix.netcom.com
        RDDATA: .dfw-ixns1.ix.netcom.com   TYPE=2 CLASS=1 TTL=7200
        NAME: .ix.netcom.com
        RDDATA: .dfw-ixns2.ix.netcom.com   TYPE=2 CLASS=1 TTL=7200

ADDITIONAL RECORDS

        NAME: .ns1.ix.netcom.com
        RDDATA: 199.182.120.203.   TYPE=1 CLASS=1 TTL=7200
        NAME: .ns2.ix.netcom.com
        RDDATA: 199.182.120.202.   TYPE=1 CLASS=1 TTL=7200
        NAME: .ns3.ix.netcom.com
        RDDATA: 199.182.120.1.   TYPE=1 CLASS=1 TTL=7200
        NAME: .ns4.ix.netcom.com
        RDDATA: 199.182.120.2.   TYPE=1 CLASS=1 TTL=7200
        NAME: .dfw-ixns1.ix.netcom.com
        RDDATA: 206.214.98.33.   TYPE=1 CLASS=1 TTL=7200
        NAME: .dfw-ixns2.ix.netcom.com
        RDDATA: 206.214.98.34.   TYPE=1 CLASS=1 TTL=7200

        DNS Address = 199.182.120.6</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">TCP/UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>DNS</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />Query<br /><img src="/supporting/images/tline_r.gif" alt="" />Response<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />Error<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>CNAME</b><br />CNAME (Canonical Name Record ) is a record in a DNS database that indicates the true, or canonical, host name of a computer that its aliases are associated with. A computer hosting a Web site must have an IP address in order to be connected to the World Wide Web. The DNS resolves the computer domain name to its IP address, but sometimes more than one domain name resolves to the same IP address, and this is where the CNAME is useful. A machine can have an unlimited number of CNAME aliases, but a separate CNAME record must be in the database for each alias.<br /><br /><b>Zone</b><br />A part of the DNS tree, that is treated as a unit.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/dns-header-flags">DNS header flags</a>
                <a href="https://www.iana.org/assignments/dns-parameters">DNS parameters</a>
                <a href="https://www.iana.org/assignments/dns-sec-alg">DNS security algorithm numbers</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc830.html">RFC 830</a>] A Distributed System for Internet Name Service.
[<a href="https://www.rfc-editor.org/rfc/rfc881.html">RFC 881</a>] The Domain Names Plan and Schedule.
[<a href="https://www.rfc-editor.org/rfc/rfc897.html">RFC 897</a>] Domain Name System Implementation Schedule.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc881.html">RFC 881</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc920.html">RFC 920</a>] Domain Requirements.
[<a href="https://www.rfc-editor.org/rfc/rfc921.html">RFC 921</a>] Domain Name System Implementation Schedule - Revised.
[<a href="https://www.rfc-editor.org/rfc/rfc974.html">RFC 974</a>] MAIL ROUTING AND THE DOMAIN SYSTEM.
[<a href="https://www.rfc-editor.org/rfc/rfc1002.html">RFC 1002</a>] Protocol Standard for a NetBIOS service on a TCP/UDP transport: Detailed specifications.
[<a href="https://www.rfc-editor.org/rfc/rfc1031.html">RFC 1031</a>] MILNET NAME DOMAIN TRANSITION.
[<a href="https://www.rfc-editor.org/rfc/rfc1032.html">RFC 1032</a>] DOMAIN ADMINISTRATORS GUIDE.
[<a href="https://www.rfc-editor.org/rfc/rfc1033.html">RFC 1033</a>] DOMAIN ADMINISTRATORS OPERATIONS GUIDE.
[<a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>] DOMAIN NAMES - CONCEPTS AND FACILITIES.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc882.html">RFC 882</a>, <a href="https://www.rfc-editor.org/rfc/rfc883.html">RFC 883</a>, <a href="https://www.rfc-editor.org/rfc/rfc973.html">RFC 973</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>] DOMAIN NAMES - IMPLEMENTATION AND SPECIFICATION.
                STD: 13. 
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3658.html">RFC 3658</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc882.html">RFC 882</a>, <a href="https://www.rfc-editor.org/rfc/rfc883.html">RFC 883</a>, <a href="https://www.rfc-editor.org/rfc/rfc973.html">RFC 973</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1101.html">RFC 1101</a>] DNS Encoding of Network Names and Other Types.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>, <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1123.html">RFC 1123</a>] Requirements for Internet Hosts -- Application and Support.
[<a href="https://www.rfc-editor.org/rfc/rfc1183.html">RFC 1183</a>] New DNS RR Definitions.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>, <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1279.html">RFC 1279</a>] X.500 and Domains.
[<a href="https://www.rfc-editor.org/rfc/rfc1296.html">RFC 1296</a>] Internet Growth (1981-1991).
[<a href="https://www.rfc-editor.org/rfc/rfc1383.html">RFC 1383</a>] An Experiment in DNS Based IP Routing.
[<a href="https://www.rfc-editor.org/rfc/rfc1401.html">RFC 1401</a>] Correspondence between the IAB and DISA on the use of DNS throughout the Internet.
[<a href="https://www.rfc-editor.org/rfc/rfc1464.html">RFC 1464</a>] Using the Domain Name System To Store Arbitrary String Attributes.
[<a href="https://www.rfc-editor.org/rfc/rfc1480.html">RFC 1480</a>] The US Domain.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1386.html">RFC 1386</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1535.html">RFC 1535</a>] A Security Problem and Proposed Correction With Widely Deployed DNS Software.
[<a href="https://www.rfc-editor.org/rfc/rfc1536.html">RFC 1536</a>] Common DNS Implementation Errors and Suggested Fixes.
[<a href="https://www.rfc-editor.org/rfc/rfc1591.html">RFC 1591</a>] Domain Name System Structure and Delegation.
[<a href="https://www.rfc-editor.org/rfc/rfc1611.html">RFC 1611</a>] DNS Server MIB Extensions.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.dns (1.3.6.1.2.1.32). 
[<a href="https://www.rfc-editor.org/rfc/rfc1612.html">RFC 1612</a>] DNS Resolver MIB Extensions.
[<a href="https://www.rfc-editor.org/rfc/rfc1706.html">RFC 1706</a>] DNS NSAP Resource Records.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1348.html">RFC 1348</a>, <a href="https://www.rfc-editor.org/rfc/rfc1637.html">RFC 1637</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1712.html">RFC 1712</a>] DNS Encoding of Geographical Location.
[<a href="https://www.rfc-editor.org/rfc/rfc1713.html">RFC 1713</a>] Tools for DNS debugging.
[<a href="https://www.rfc-editor.org/rfc/rfc1794.html">RFC 1794</a>] DNS Support for Load Balancing.
[<a href="https://www.rfc-editor.org/rfc/rfc1876.html">RFC 1876</a>] A Means for Expressing Location Information in the Domain Name System.
                Defines DNS Type LOC. 
[<a href="https://www.rfc-editor.org/rfc/rfc1912.html">RFC 1912</a>] Common DNS Operational and Configuration Errors.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1537.html">RFC 1537</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1982.html">RFC 1982</a>] Serial Number Arithmetic.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>, <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1995.html">RFC 1995</a>] Incremental Zone Transfer in DNS.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1996.html">RFC 1996</a>] A Mechanism for Prompt Notification of Zone Changes (DNS NOTIFY).
                Defines the DNS notify opcode. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2053.html">RFC 2053</a>] The AM (Armenia) Domain.
[<a href="https://www.rfc-editor.org/rfc/rfc2136.html">RFC 2136</a>] Dynamic Updates in the Domain Name System (DNS UPDATE).
[<a href="https://www.rfc-editor.org/rfc/rfc2142.html">RFC 2142</a>] MAILBOX NAMES FOR COMMON SERVICES, ROLES AND FUNCTIONS.
[<a href="https://www.rfc-editor.org/rfc/rfc2146.html">RFC 2146</a>] U.S. Government Internet Domain Names.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1816.html">RFC 1816</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2163.html">RFC 2163</a>] Using the Internet DNS to Distribute MIXER Conformant Global Address Mapping (MCGAM).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1664.html">RFC 1664</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2181.html">RFC 2181</a>] Clarifications to the DNS Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc2182.html">RFC 2182</a>] Selection and Operation of Secondary DNS Servers.
[<a href="https://www.rfc-editor.org/rfc/rfc2219.html">RFC 2219</a>] Use of DNS Aliases for Network Services.
[<a href="https://www.rfc-editor.org/rfc/rfc2230.html">RFC 2230</a>] Key Exchange Delegation Record for the DNS.
[<a href="https://www.rfc-editor.org/rfc/rfc2308.html">RFC 2308</a>] Negative Caching of DNS Queries (DNS NCACHE).
[<a href="https://www.rfc-editor.org/rfc/rfc2517.html">RFC 2517</a>] Building Directories from DNS: Experiences from WWWSeeker.
[<a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>] Domain Name System Security Extensions. 
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3655.html">RFC 3655</a>, <a href="https://www.rfc-editor.org/rfc/rfc3658.html">RFC 3658</a>, <a href="https://www.rfc-editor.org/rfc/rfc3755.html">RFC 3755</a>, <a href="https://www.rfc-editor.org/rfc/rfc3757.html">RFC 3757</a>, <a href="https://www.rfc-editor.org/rfc/rfc3845.html">RFC 3845</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2065.html">RFC 2065</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2536.html">RFC 2536</a>] DSA KEYs and SIGs in the Domain Name System (DNS).
[<a href="https://www.rfc-editor.org/rfc/rfc2538.html">RFC 2538</a>] Storing Certificates in the Domain Name System (DNS).
[<a href="https://www.rfc-editor.org/rfc/rfc2539.html">RFC 2539</a>] Storage of Diffie-Hellman Keys in the Domain Name System (DNS).
[<a href="https://www.rfc-editor.org/rfc/rfc2540.html">RFC 2540</a>] Detached Domain Name System (DNS) Information.
[<a href="https://www.rfc-editor.org/rfc/rfc2541.html">RFC 2541</a>] DNS Security Operational Considerations.
[<a href="https://www.rfc-editor.org/rfc/rfc2606.html">RFC 2606</a>] Reserved Top Level DNS Names.
[<a href="https://www.rfc-editor.org/rfc/rfc2671.html">RFC 2671</a>] Extension Mechanisms for DNS (EDNS0).
                Defines DNS Type OPT. 
[<a href="https://www.rfc-editor.org/rfc/rfc2672.html">RFC 2672</a>] Non-Terminal DNS Name Redirection.
                Defines DNS Type DNAME. 
[<a href="https://www.rfc-editor.org/rfc/rfc2673.html">RFC 2673</a>] Binary Labels in the Domain Name System.
[<a href="https://www.rfc-editor.org/rfc/rfc2694.html">RFC 2694</a>] DNS extensions to Network Address Translators (DNS_ALG).
[<a href="https://www.rfc-editor.org/rfc/rfc2782.html">RFC 2782</a>] A DNS RR for specifying the location of services (DNS SRV).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2052.html">RFC 2052</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2826.html">RFC 2826</a>] IAB Technical Comment on the Unique DNS Root.
[<a href="https://www.rfc-editor.org/rfc/rfc2845.html">RFC 2845</a>] Secret Key Transaction Authentication for DNS (TSIG).
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3645.html">RFC 3645</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2870.html">RFC 2870</a>] Root Name Server Operational Requirements.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2010.html">RFC 2010</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2874.html">RFC 2874</a>] DNS Extensions to Support IPv6 Address Aggregation and Renumbering.
                Defines DNS Type A6. 
[<a href="https://www.rfc-editor.org/rfc/rfc2893.html">RFC 2893</a>] Transition Mechanisms for IPv6 Hosts and Routers.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2929.html">RFC 2929</a>] Domain Name System (DNS) IANA Considerations.
[<a href="https://www.rfc-editor.org/rfc/rfc2930.html">RFC 2930</a>] Secret Key Establishment for DNS (TKEY RR).
[<a href="https://www.rfc-editor.org/rfc/rfc2931.html">RFC 2931</a>] DNS Request and Transaction Signatures ( SIG(0)s ).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3007.html">RFC 3007</a>] Secure Domain Name System (DNS) Dynamic Update.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2137.html">RFC 2137</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2136.html">RFC 2136</a>, <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3008.html">RFC 3008</a>] Domain Name System Security (DNSSEC) Signing Authority.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3658.html">RFC 3658</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3027.html">RFC 3027</a>] Protocol Complications with the IP Network Address Translator.
[<a href="https://www.rfc-editor.org/rfc/rfc3071.html">RFC 3071</a>] Reflections on the DNS, <a href="https://www.rfc-editor.org/rfc/rfc1591.html">RFC 1591</a>, and Categories of Domains.
[<a href="https://www.rfc-editor.org/rfc/rfc3090.html">RFC 3090</a>] DNS Security Extension Clarification on Zone Status.
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3658.html">RFC 3658</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3110.html">RFC 3110</a>] RSA/SHA-1 SIGs and RSA KEYs in the Domain Name System (DNS).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2537.html">RFC 2537</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3123.html">RFC 3123</a>] A DNS RR Type for Lists of Address Prefixes (APL RR).
[<a href="https://www.rfc-editor.org/rfc/rfc3130.html">RFC 3130</a>] Notes from the State-Of-The-Technology: DNSSEC.
[<a href="https://www.rfc-editor.org/rfc/rfc3197.html">RFC 3197</a>] Applicability Statement for DNS MIB Extensions.
[<a href="https://www.rfc-editor.org/rfc/rfc3225.html">RFC 3225</a>] Indicating Resolver Support of DNSSEC.
[<a href="https://www.rfc-editor.org/rfc/rfc3226.html">RFC 3226</a>] DNSSEC and IPv6 A6 aware server/resolver message size requirements.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>, <a href="https://www.rfc-editor.org/rfc/rfc2874.html">RFC 2874</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3245.html">RFC 3245</a>] The History and Context of Telephone Number Mapping (ENUM) Operational Decisions: Informational Documents Contributed to ITU-T Study Group 2 (SG2).
[<a href="https://www.rfc-editor.org/rfc/rfc3258.html">RFC 3258</a>] Distributing Authoritative Name Servers via Shared Unicast Addresses.
[<a href="https://www.rfc-editor.org/rfc/rfc3363.html">RFC 3363</a>] Representing Internet Protocol version 6 (IPv6) Addresses in the Domain Name System (DNS).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2673.html">RFC 2673</a>, <a href="https://www.rfc-editor.org/rfc/rfc2874.html">RFC 2874</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3364.html">RFC 3364</a>] Tradeoffs in Domain Name System (DNS) Support for Internet Protocol version 6 (IPv6).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2673.html">RFC 2673</a>, <a href="https://www.rfc-editor.org/rfc/rfc2874.html">RFC 2874</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3403.html">RFC 3403</a>] Dynamic Delegation Discovery System (DDDS) Part Three: The Domain Name System (DNS) Database.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2168.html">RFC 2168</a>, <a href="https://www.rfc-editor.org/rfc/rfc2915.html">RFC 2915</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3425.html">RFC 3425</a>] Obsoleting IQUERY.
                Defines DNS opcode 1 (IQUERY) as obsolete. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3445.html">RFC 3445</a>] Limiting the Scope of the KEY Resource Record (RR).
                Limits the scope of the DNS KEY Resource Record. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3467.html">RFC 3467</a>] Role of the Domain Name System (DNS).
[<a href="https://www.rfc-editor.org/rfc/rfc3568.html">RFC 3568</a>] Known Content Network (CN) Request-Routing Mechanisms.
[<a href="https://www.rfc-editor.org/rfc/rfc3596.html">RFC 3596</a>] DNS Extensions to Support IP Version 6.
                Defines DNS Type AAAA. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1886.html">RFC 1886</a>, <a href="https://www.rfc-editor.org/rfc/rfc3152.html">RFC 3152</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3597.html">RFC 3597</a>] Handling of Unknown DNS Resource Record (RR) Types.
[<a href="https://www.rfc-editor.org/rfc/rfc3645.html">RFC 3645</a>] Generic Security Service Algorithm for Secret Key Transaction Authentication for DNS (GSS-TSIG).
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2845.html">RFC 2845</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3646.html">RFC 3646</a>] DNS Configuration options for Dynamic Host Configuration Protocol for IPv6 (DHCPv6).
                Defines DHCPv6 options 23 (OPTION_DNS_SERVERS) and 24 (OPTION_DOMAIN_LIST). 
[<a href="https://www.rfc-editor.org/rfc/rfc3658.html">RFC 3658</a>] Delegation Signer (DS) Resource Record (RR).
                Defines DNS Resource Record 43 (Delegation Signer). 
                Updated by <a href="https://www.rfc-editor.org/rfc/rfc3755.html">RFC 3755</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>, <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>, <a href="https://www.rfc-editor.org/rfc/rfc3008.html">RFC 3008</a>, <a href="https://www.rfc-editor.org/rfc/rfc3090.html">RFC 3090</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3675.html">RFC 3675</a>] .sex Considered Dangerous.
[<a href="https://www.rfc-editor.org/rfc/rfc3681.html">RFC 3681</a>] Delegation of E.F.F.3.IP6.ARPA.
                BCP: 80. 
[<a href="https://www.rfc-editor.org/rfc/rfc3696.html">RFC 3696</a>] Application Techniques for Checking and Transformation of Names.
[<a href="https://www.rfc-editor.org/rfc/rfc3755.html">RFC 3755</a>] Legacy Resolver Compatibility for Delegation Signer (DS).
                Updated by: <a href="https://www.rfc-editor.org/rfc/rfc3757.html">RFC 3757</a>, <a href="https://www.rfc-editor.org/rfc/rfc3845.html">RFC 3845</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>, <a href="https://www.rfc-editor.org/rfc/rfc3658.html">RFC 3658</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3757.html">RFC 3757</a>] Domain Name System KEY (DNSKEY) Resource Record (RR) Secure Entry Point (SEP) Flag.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3755.html">RFC 3755</a>, <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3761.html">RFC 3761</a>] The E.164 to Uniform Resource Identifiers (URI) Dynamic Delegation Discovery System (DDDS) Application (ENUM).
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2916.html">RFC 2916</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3832.html">RFC 3832</a>] Remote Service Discovery in the Service Location Protocol (SLP) via DNS SRV.
[<a href="https://www.rfc-editor.org/rfc/rfc3833.html">RFC 3833</a>] Threat Analysis of the Domain Name System (DNS).
[<a href="https://www.rfc-editor.org/rfc/rfc3845.html">RFC 3845</a>] DNS Security (DNSSEC) NextSECure (NSEC) RDATA Format.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc3755.html">RFC 3755</a>, <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3901.html">RFC 3901</a>] DNS IPv6 Transport Operational Guidelines.
                BCP: 91.<hr /><b>Obsolete RFCs</b>
[<a href="https://www.rfc-editor.org/rfc/rfc882.html">RFC 882</a>] DOMAIN NAMES - CONCEPTS and FACILITIES.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>, <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc883.html">RFC 883</a>] DOMAIN NAMES - IMPLEMENTATION and SPECIFICATION.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>, <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc973.html">RFC 973</a>] Domain System Changes and Observations.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>, <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc882.html">RFC 882</a>, <a href="https://www.rfc-editor.org/rfc/rfc883.html">RFC 883</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1348.html">RFC 1348</a>] DNS NSAP RRs.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1706.html">RFC 1706</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>, <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1386.html">RFC 1386</a>] The US Domain.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1480.html">RFC 1480</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1537.html">RFC 1537</a>] Common DNS Data File Configuration Errors.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1912.html">RFC 1912</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1637.html">RFC 1637</a>] DNS NSAP Resource Records.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1706.html">RFC 1706</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1348.html">RFC 1348</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1664.html">RFC 1664</a>] Using the Internet DNS to Distribute RFC1327 Mail Address Mapping Tables.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2163.html">RFC 2163</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1811.html">RFC 1811</a>] U.S. Government Internet Domain Names.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1816.html">RFC 1816</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1816.html">RFC 1816</a>] U.S. Government Internet Domain Names.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2146.html">RFC 2146</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1811.html">RFC 1811</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1886.html">RFC 1886</a>] DNS Extensions to support IP version 6.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3596.html">RFC 3596</a>. 
                Defines DNS Type AAAA. 
[<a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>] Transition Mechanisms for IPv6 Hosts and Routers.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2893.html">RFC 2893</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2010.html">RFC 2010</a>] Operational Criteria for Root Name Servers.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2870.html">RFC 2870</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2052.html">RFC 2052</a>] A DNS RR for specifying the location of services (DNS SRV).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2782.html">RFC 2782</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>, <a href="https://www.rfc-editor.org/rfc/rfc1183.html">RFC 1183</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2065.html">RFC 2065</a>] Domain Name System Security Extensions.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc2535.html">RFC 2535</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1034.html">RFC 1034</a>, <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2137.html">RFC 2137</a>] Secure Domain Name System Dynamic Update.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3007.html">RFC 3007</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1035.html">RFC 1035</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2168.html">RFC 2168</a>] Resolution of Uniform Resource Identifiers using the Domain Name System.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3401.html">RFC 3401</a>, <a href="https://www.rfc-editor.org/rfc/rfc3402.html">RFC 3402</a>, <a href="https://www.rfc-editor.org/rfc/rfc3403.html">RFC 3403</a>, <a href="https://www.rfc-editor.org/rfc/rfc3404.html">RFC 3404</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2537.html">RFC 2537</a>] RSA/MD5 KEYs and SIGs in the Domain Name System (DNS).
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3110.html">RFC 3110</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2915.html">RFC 2915</a>] The Naming Authority Pointer (NAPTR) DNS Resource Record.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3401.html">RFC 3401</a>, <a href="https://www.rfc-editor.org/rfc/rfc3402.html">RFC 3402</a>, <a href="https://www.rfc-editor.org/rfc/rfc3403.html">RFC 3403</a>, <a href="https://www.rfc-editor.org/rfc/rfc3404.html">RFC 3404</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc2168.html">RFC 2168</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2916.html">RFC 2916</a>] E.164 number and DNS.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3761.html">RFC 3761</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3152.html">RFC 3152</a>] Delegation of IP6.ARPA.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3596.html">RFC 3596</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1886.html">RFC 1886</a>, <a href="https://www.rfc-editor.org/rfc/rfc2553.html">RFC 2553</a>, <a href="https://www.rfc-editor.org/rfc/rfc2766.html">RFC 2766</a>, <a href="https://www.rfc-editor.org/rfc/rfc2772.html">RFC 2772</a>, <a href="https://www.rfc-editor.org/rfc/rfc2874.html">RFC 2874</a>.<hr /><b>Publications</b>
[ISBN 0596001584] DNS and BIND
                		  </div>
		  
</section>


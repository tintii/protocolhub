---
id: protocol-mobile-ip
slug: mobile-ip
name: Mobile IP
expandedName: Mobile IP
origin: historical
provenance:
  source: protocols/protocol_Mobile IP.htm
  sha256: 981f3111802a63bf8f7130df2717cf211ded02b8a2566ba7397a5f11fc6141fd
  provider: 'Colasoft Co., Ltd.'
aliases: []
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Mobile IP
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: SNMP MIBs
    html: iso.org.dod.internet.mgmt.mib-2.mipMIB (1.3.6.1.2.1.44)
  - label: Ports
    html: 434 (UDP) control
  - label: Related protocols
    html: 'IP,<br />UDP,<br />IGMP,<br />ICMP'
  - label: Working groups
    html: IP Routing for Wireless/Mobile Hosts
originalUpdate: '2005-11-10 16:28:22'
rfcs:
  - 2002
  - 2005
  - 2006
  - 2344
  - 2977
  - 3012
  - 3024
  - 3025
  - 3115
  - 3220
  - 3344
  - 3519
  - 3543
  - 3583
  - 3846
  - 3957
  - 4064
  - 4093
related:
  - protocol-ip
  - protocol-udp
  - protocol-igmp
  - protocol-icmp
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

			Mobile IP is the key protocol to enable mobile computing and networking, which brings together two of the world's most powerful technologies, the Internet and mobile communication. In Mobile IP, two IP addresses are provided for each computer: home IP address which is fixed and care -of IP address which is changing as the computer moves. When the mobile moves to a new location, it must send its new address to an agent at home so that the agent can tunnel all communications to its new address timely.
<br />
<br />Mobile IP provides an efficient, scalable mechanism for node mobility within the Internet. Using Mobile IP, nodes may change their point-of-attachment to the Internet without changing their IP address. This allows them to maintain transport and higher-layer connections while moving. Node mobility is realized without the need to propagate host-specific routes throughout the Internet routing fabric.
<br />
<br />Mobile IP is most often found in wireless WAN environments where users need to carry their mobile devices across multiple LANs with different IP addresses. It may also be used in 3G networks to provide transparency when internet users migrate between cellular towers.
<br />
<br />In brief, Mobile IP routing works as follows. Packets destined to a mobile node are routed first to its home network -- a network identified by the network prefix of the mobile node's (permanent) home address. At the home network, the mobile node's home agent intercepts such packets and tunnels them to the mobile node's most recently reported care-of address. At the endpoint of the tunnel, the inner packets are decapsulated and delivered to the mobile node. In the reverse direction, packets sourced by mobile nodes are routed to their destination using standard IP routing mechanisms.
<br />
<br />The Mobile IP protocol defines the following:
<br /><ul><li>An authenticated registration procedure by which a mobile node informs its home agent(s) of its care-of address(es).<br /></li>
<li>An extension to ICMP Router Discovery which allows mobile nodes to discover prospective home agents and foreign agents.<br /></li>
<li>The rules for routing packets to and from mobile nodes, including the specification of one mandatory tunneling mechanism and several optional tunneling mechanisms.</li></ul>
<br /><hr /><b>IP Mobility Support Protocol for IPv4</b>
<br />The following support services are defined for Mobile IP:
<br /><ul><li><b>Agent Discovery</b>
<br />Home agents and foreign agents may advertise their availability on each link for which they provide service. A newly arrived mobile node can send a solicitation on the link to learn if any prospective agents are present.<br /><br /></li>

<li><b>Registration</b>
<br />When the mobile node is away from home, it registers its care-of address with its home agent. Depending on its method of attachment, the mobile node will register either directly with its home agent, or through a foreign agent which forwards the registration to the home agent.<br /><br /></li>

<li><b>Silently discard</b>
<br />The implementation discards the datagram without further processing, and without indicating an error to the sender. The implementation should provide the capability of logging the error, including the contents of the discarded datagram, and should record the event in a statistics counter.</li></ul>
<br />
<br />The following steps provide a rough outline of operation of the Mobile IP protocol:
<br /><ul><li>Mobility agents (i.e., foreign agents and home agents) advertise their presence via Agent Advertisement messages. A mobile node may optionally solicit an Agent Advertisement message from any locally attached mobility agents through an Agent Solicitation message.
<br /><br /></li>
<li>A mobile node receives these Agent Advertisements and determines whether it is on its home network or a foreign network.
<br /><br /></li>
<li>When the mobile node detects that it is located on its home network, it operates without mobility services. If returning to its home network from being registered elsewhere, the mobile node deregisters with its home agent, through exchange of a Registration Request and Registration Reply message with it.
<br /><br /></li>
<li>When a mobile node detects that it has moved to a foreign network, it obtains a care -of address on the foreign network. The care -of address can either be determined from a foreign agent's advertisements (a foreign agent care-of address), or by some external assignment mechanism such as DHCP (a co- located care-of address).
<br /><br /></li>
<li>The mobile node operating away from home then registers its new care-of address with its home agent through exchange of a Registration Request and Registration Reply message with it, possibly via a foreign agent.
<br /><br /></li>
<li>Datagrams sent to the mobile node's home address are intercepted by its home agent, tunneled by the home agent to the mobile node's care-of address, received at the tunnel endpoint (either at a foreign agent or at the mobile node itself), and finally delivered to the mobile node.
<br /><br /></li>
<li>In the reverse direction, datagrams sent by the mobile node are generally delivered to their destination using standard IP routing mechanisms, not necessarily passing through the home agent.</li></ul>
<br />
<br />When away from home, Mobile IP uses protocol tunneling to hide a mobile node's home address from intervening routers between its home network and its current location. The tunnel terminates at the mobile node's care-of address. The care -of address must be an address to which datagrams can be delivered via conventional IP routing. At the care-of address, the original datagram is removed from the tunnel and delivered to the mobile node.
<br />
<br />Mobile IP provides two alternative modes for the acquisition of a care -of address:
<br /><ul><li>A "foreign agent care-of address" is a care-of address provided by a foreign agent through its Agent Advertisement messages. In this case, the care-of address is an IP address of the foreign agent. In this mode, the foreign agent is the endpoint of the tunnel and, upon receiving tunneled datagrams, decapsulates them and delivers the inner datagram to the mobile node. This mode of acquisition is preferred because it allows many mobile nodes to share the same care-of address and therefore does not place unnecessary demands on the already limited IPv4 address space.<br /><br /></li>

<li>A "co-located care-of address" is a care-of address acquired by the mobile node as a local IP address through some external means, which the mobile node then associates with one of its own network interfaces. The address may be dynamically acquired as a temporary address by the mobile node such as through DHCP, or may be owned by the mobile node as a long-term address for its use only while visiting some foreign network. Specific external methods of acquiring a local IP address for use as a co-located care-of address are beyond the scope of this document. When using a co-located care-of address, the mobile node serves as the endpoint of the tunnel and itself performs decapsulation of the datagrams tunneled to it.</li></ul>
<br />
<br />It is important to understand the distinction between the care-of address and the foreign agent functions. The care-of address is simply the endpoint of the tunnel. It might indeed be an address of a foreign agent (a foreign agent care-of address), but it might instead be an address temporarily acquired by the mobile node (a co- located care-of address). A foreign agent, on the other hand, is a mobility agent that provides services to mobile nodes. 
<br />
<br />For example, the following figure illustrates the routing of datagrams to and from a mobile node away from home, once the mobile node has registered with its home agent. The mobile node is using a foreign agent care-of address, not a co-located care-of address.
<br />
<br /><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">              2) Datagram is intercepted   3) Datagram is
                 by home agent and            detunneled and
                 is tunneled to the           delivered to the
                 care-of address.             mobile node.

                   +-----+          +-------+         +------+
                   |home | =======&gt; |foreign| ------&gt; |mobile|
                   |agent|          | agent | &lt;------ | node |
                   +-----+          +-------+         +------+
   1) Datagram to    /|         /
      mobile node     |        /   4) For datagrams sent by the
      arrives on      |      /        mobile node, standard IP
      home network    |    /          routing delivers each to its
      via standard    |  |_           destination.  In this figure,
      IP routing.   +----+            the foreign agent is the
                    |host|            mobile node's default router.
                    +----+</pre>
<br />
<br /><b>Header format</b>
<br />
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>8</p></td><td><p>32 bit</p></td></tr><tr><td><p>Type</p></td><td><p>Data</p></td></tr></tbody></table></div></div>
<br /><ul><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><p>Type</p></td><td><p>Length</p></td><td><p>Description</p></td></tr><tr><td><p>0</p></td><td><p> </p></td><td><p>One byte padding.</p></td></tr><tr><td><p>1</p></td><td><p> </p></td><td><p>Registration request.</p></td></tr><tr><td><p>2</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>3</p></td><td><p> </p></td><td><p>Registration reply.</p></td></tr><tr><td><p>4</p></td><td><p> </p></td><td><p>MIP Tunnel Data Message.</p></td></tr><tr><td><p>56</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>7</p></td><td><p> </p></td><td><p>Registration Revocation.</p></td></tr><tr><td><p>8-14</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>15</p></td><td><p> </p></td><td><p>Revocation Acknowledgment.</p></td></tr><tr><td><p>16</p></td><td><p> </p></td><td><p>Mobility Agent Advertisement.</p></td></tr><tr><td><p>1718</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>19</p></td><td><p> </p></td><td><p>Prefix-Lengths.</p></td></tr><tr><td><p>20-23</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>24</p></td><td><p> </p></td><td><p>Challenge Extension.</p></td></tr><tr><td><p>25-31</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>32</p></td><td><p> </p></td><td><p>Mobile-Home authentication.</p></td></tr><tr><td><p>33</p></td><td><p> </p></td><td><p>Mobile-Foreign authentication.</p></td></tr><tr><td><p>34</p></td><td><p> </p></td><td><p>Foreign-Home authentication.</p></td></tr><tr><td><p>35</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>36</p></td><td><p> </p></td><td><p>Generalized Mobile IP Authentication.</p></td></tr><tr><td><p>37</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>38</p></td><td><p> </p></td><td><p>CVSE, Critical Vendor/Organization Specific Extension.</p></td></tr><tr><td><p>39</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>40</p></td><td><p> </p></td><td><p>MN-FA-KeyGen Request.</p></td></tr><tr><td><p>41</p></td><td><p> </p></td><td><p>MN-FA-KeyGen Reply.</p></td></tr><tr><td><p>42</p></td><td><p> </p></td><td><p>MN-HA-KeyGen Request.</p></td></tr><tr><td><p>43</p></td><td><p> </p></td><td><p>MN-HA-KeyGen Reply.</p></td></tr><tr><td><p>44</p></td><td><p>6</p></td><td><p>UDP Tunnel Reply Extension.</p></td></tr><tr><td><p>45-126</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>127</p></td><td><p> </p></td><td><p>Non-skippable Extension for Experimental use.</p></td></tr><tr><td><p>128</p></td><td><p> </p></td><td><p>Deprecated (2001 Aug 31).</p></td></tr><tr><td><p>129</p></td><td><p> </p></td><td><p>SKIP Firewall Traversal Extension.</p></td></tr><tr><td><p>130</p></td><td><p> </p></td><td><p>Encapsulating Delivery Style Extension.</p></td></tr><tr><td><p>131</p></td><td><p> </p></td><td><p>Mobile Node NAI.</p></td></tr><tr><td><p>132</p></td><td><p> </p></td><td><p>MN-FA Challenge Extension.</p></td></tr><tr><td><p>133</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>134</p></td><td><p> </p></td><td><p>NVSE, Normal Vendor/Organization Specific Extension.</p></td></tr><tr><td><p>135</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>136</p></td><td><p> </p></td><td><p>NAI Carrying Extension.</p></td></tr><tr><td><p>137</p></td><td><p>1+</p></td><td><p>Revocation Support.</p></td></tr><tr><td><p>138</p></td><td><p> </p></td><td><p>CARD Request option.</p></td></tr><tr><td><p>139</p></td><td><p> </p></td><td><p>CARD Reply option.</p></td></tr><tr><td><p>140-143</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>144</p></td><td><p>6</p></td><td><p>UDP Tunnel Request Extension.</p></td></tr><tr><td><p>145-254</p></td><td><p> </p></td><td><p> </p></td></tr><tr><td><p>255</p></td><td><p> </p></td><td><p>Message for Experimental use.</p></td></tr></tbody></table></div></div></li></ul>
<br /><hr />
<br /><b>IP Mobility Support Protocol for IPv6</b>
<br />Mobile IPv6 also provides support for multiple home agents, and a limited support for the reconfiguration of the home network. In these cases, the mobile node may not know the IP address of its own home agent, and even the home subnet prefixes may change over time. A mechanism, known as "dynamic home agent address discovery" allows a mobile node to dynamically discover the IP address of a home agent on its home link, even when the mobile node is away from home. Mobile nodes can also learn new information about home subnet prefixes through the "mobile prefix discovery" mechanism.
<br />
<br /><ul><li><b>Mobility Header</b>
<br />Mobile IPv6 defines a new IPv6 protocol, using the Mobility Header. This Header is used to carry the following messages:
<br /><ul><li><b>Home Test Init</b>
<br />A mobile node sends a Home Test Init message to the correspondent node (via the home agent) to acquire the home keygen token.<br /><br /></li>

<li><b>Home Test</b>
<br />The Home Test message is sent in response to a Home Test Init message. It is sent via the home agent.<br /><br /></li>

<li><b>Care-of Test Init</b>
<br />The mobile node sends a Care-of Test Init message to the correspondent node (directly, not via the home agent) to acquire the care-of keygen token.<br /><br /></li>

<li><b>Care-of Test</b>
<br />These four messages are used to perform the return routability procedure from the mobile node to a correspondent node. This ensures authorization of subsequent Binding Updates.<br /><br /></li>

<li><b>Binding Update</b>
<br />A Binding Update is used by a mobile node to notify a correspondent node or the mobile node's home agent of its current binding. The Binding Update sent to the mobile node's home agent to register its primary care-of address is marked as a "home registration".<br /><br /></li>

<li><b>Binding Acknowledgement</b>
<br />A Binding Acknowledgement is used to acknowledge receipt of a Binding Update, if an acknowledgement was requested in the Binding Update, the binding update was sent to a home agent, or an error occurred.<br /><br /></li>

<li><b>Binding Refresh Request</b>
<br />A Binding Refresh Request is used by a correspondent node to request a mobile node to re-establish its binding with the correspondent node. This message is typically used when the cached binding is in active use but the binding's lifetime is close to expiration. The correspondent node may use, for instance, recent traffic and open transport layer connections as an indication of active use.<br /><br /></li>

<li><b>Binding Error</b>
<br />The Binding Error is used by the correspondent node to signal an error related to mobility, such as an inappropriate attempt to use the Home Address destination option without an existing binding.</li></ul>
<br />
<br /></li><li><b>New IPv6 ICMP Messages</b>
<br />Mobile IPv6 also introduces four new ICMP message types, two for use in the dynamic home agent address discovery mechanism, and two for renumbering and mobile configuration mechanisms. The following two new ICMP message types are used for home agent address discovery:<br /></li>
<li><ul><li>Home Agent Address Discovery Request.<br /><br /></li>

<li>Home Agent Address Discovery Reply.</li></ul><br /><br /></li>

<li>The next two message types are used for network renumbering and address configuration on the mobile node:
<br /></li><li><ul><li>Mobile Prefix Solicitation.<br /><br /></li>

<li>Mobile Prefix Advertisement.</li></ul><br /><br /></li>

<li><b>Site-Local Addressability</b>
<br />This specification requires that home and care -of addresses must be unicast routable addresses. Site-local addresses may be usable on networks that are not connected to the Internet, but this specification does not define when such usage is safe and when it is not. Mobile nodes may not be aware of which site they are currently in, it is hard to prevent accidental attachment to other sites, and ambiguity of site-local addresses can cause problems if the home and visited networks use the same addresses. Therefore, site-local addresses should not be used as home or care-of addresses.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: Registering with a Foreign Agent Care-of Address</b>

The mobile node receives an Agent Advertisement from a foreign agent and wishes to 
register with that agent using the advertised foreign agent care-of address. The mobile 
node wishes only IP-in-IP encapsulation, does not want broadcasts, and does not want 
simultaneous mobility bindings:

          IP fields:
            Source Address = mobile node's home address
            Destination Address = copied from the IP source address of the
              Agent Advertisement
            Time to Live = 1

          UDP fields:
            Source Port = 
            Destination Port = 434

          Registration Request fields:
            Type = 1
            S=0,B=0,D=0,M=0,G=0
            Lifetime = the Registration Lifetime copied from the
              Mobility Agent Advertisement Extension of the
              Router Advertisement message
            Home Address = the mobile node's home address
            Home Agent = IP address of mobile node's home agent
            Care-of Address = the Care-of Address copied from the
              Mobility Agent Advertisement Extension of the
              Router Advertisement message
            Identification = Network Time Protocol timestamp or Nonce

          Extensions:
            An authorization-enabling extension (e.g., the Mobile-Home Authentication 
          Extension)</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2: Registering with a Co-Located Care-of Address</b>

The mobile node enters a foreign network that contains no foreign agents. The mobile 
node obtains an address from a DHCP server for use as a co-located care-of address. 
The mobile node supports all forms of encapsulation (IP-in-IP, minimal encapsulation, 
and GRE), desires a copy of broadcast datagrams on the home network, and does not 
want simultaneous mobility bindings:

          IP fields:
            Source Address = care-of address obtained from DHCP server
            Destination Address = IP address of home agent
            Time to Live = 64

          UDP fields:
            Source Port = 
            Destination Port = 434

          Registration Request fields:
            Type = 1
            S=0,B=1,D=1,M=1,G=1
            Lifetime = 1800 (seconds)
            Home Address = the mobile node's home address
            Home Agent = IP address of mobile node's home agent
            Care-of Address = care-of address obtained from DHCP server
            Identification = Network Time Protocol timestamp or Nonce

          Extensions:
            The Mobile-Home Authentication Extension</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: Deregistration</b>

The mobile node returns home and wishes to deregister all care-of addresses with its 
home agent.

          IP fields:
            Source Address = mobile node's home address
            Destination Address = IP address of home agent
            Time to Live = 1
          UDP fields:
            Source Port = 
            Destination Port = 434
          Registration Request fields:
            Type = 1
            S=0,B=0,D=0,M=0,G=0
            Lifetime = 0
            Home Address = the mobile node's home address
            Home Agent = IP address of mobile node's home agent
            Care-of Address = the mobile node's home address
            Identification = Network Time Protocol timestamp or Nonce

          Extensions:
            An authorization-enabling extension (e.g., the Mobile-Home Authentication 
          Extension)</pre>
<br />	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">UDP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>Mobile IP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Address</b><br />A location of data, usually in main memory or on a disk. You can think of computer memory as an array of storage boxes, each of which is one byte in length. Each box has an address (a unique number) assigned to it. By specifying a memory address, programmers can access a particular byte of data. Disks are divided into tracks and sectors, each of which has a unique address. Usually, you do not need to worry about addresses unless you are a programmer. 
<br />
<br />A name or token that identifies a network component. In local area networks (LANs), for example, every node has a unique address. On the Internet, every file has a unique address called a URL.<br /><br /><b>Agent</b><br />Agent is a program that performs some information gathering or processing task in the background. Typically, an agent is given a very small and well-defined task.<br /><br /><b>Binding</b><br />A collection of configuration parameters, including at least an IP address, associated with a DHCP client. Bindings are managed by DHCP servers.<br /><br /><b>Care-of address</b><br />A unicast routable address associated with a mobile node while visiting a foreign link; the subnet prefix of this IP address is a foreign subnet prefix. Among the multiple care-of addresses that a mobile node may have at any given time (e.g., with different subnet prefixes), the one registered with the mobile node's home agent for a given home address is called its "primary" care-of address.<br /><br /><b>Cookie</b><br />A cookie is a random number used by a mobile node to prevent spoofing by a bogus correspondent node in the return routability procedure.<br /><br /><b>DHCP</b><br />Dynamic Host Configuration Protocol (DHCP) is a protocol for assigning dynamic IP addresses to devices on a network. With dynamic addressing, a device can have a different IP address every time it connects to the network. In some systems, the device's IP address can even change while it is still connected. DHCP also supports a mix of static and dynamic IP addresses. 
<br />
<br />Dynamic addressing simplifies network administration because the software keeps track of IP addresses rather than requiring an administrator to manage the task. This means that a new computer can be added to a network without the hassle of manually assigning it a unique IP address. Many ISPs use dynamic IP addressing for dial-up users.<br /><br /><b>Datagram</b><br />A datagram is a self-contained, independent entity of data carrying sufficient information to be routed from the source to the destination computer without reliance on earlier exchanges between this source and destination computer and the transporting network.
<br /> 	
<br />The term has been generally replaced by the term packet. Datagrams or packets are the message units that the Internet Protocol deals with and that the Internet transports. A datagram or packet needs to be self-contained without reliance on earlier exchanges because there is no connection of fixed duration between the two communicating points as there is, for example, in most voice telephone conversations.<br /><br /><b>Endpoint</b><br />SIP or H.323 terminal or gateway. An endpoint can call and be called. It generates and terminates the information stream.<br /><br /><b>Foreign Agent</b><br />A router on a mobile node's visited network which provides routing services to the mobile node while registered. The foreign agent detunnels and delivers datagrams to the mobile node that were tunneled by the mobile node's home agent. For datagrams sent by a mobile node, the foreign agent may serve as a default router for registered mobile nodes.<br /><br /><b>Home Agent</b><br />A router on a mobile node's home network which tunnels datagrams for delivery to the mobile node when it is away from home, and maintains current location information for the mobile node.<br /><br /><b>Home address</b><br />A unicast routable address assigned to a mobile node, used as the permanent address of the mobile node. This address is within the mobile node's home link. Standard IP routing mechanisms will deliver packets destined for a mobile node's home address to its home link. Mobile nodes can have multiple home addresses, for instance when there are multiple home prefixes on the home link.<br /><br /><b>Home link</b><br />The link on which a mobile node's home subnet prefix is defined.<br /><br /><b>Home subnet prefix</b><br />The IP subnet prefix corresponding to a mobile node's home address.<br /><br /><b>ICMP</b><br />Internet Control Message Protocol, an extension to the Internet Protocol (IP). ICMP supports packets containing error, control, and informational messages. The PING command, for example, uses ICMP to test an Internet connection.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>IPv4</b><br />IPv4 is version 4 of the Internet Protocol (IP). It was the first version of the Internet Protocol to be widely deployed, and forms the basis for most of the current Internet. IPv4 uses 32-bit addresses, limiting it to 4,294,967,296 unique addresses, many of which are reserved for special purposes such as local networks or multicast addresses, reducing the number of addresses that can be allocated as public Internet addresses.<br /><br /><b>IPv6</b><br />IPv6 is designed as an evolutionary upgrade to the Internet Protocol and will, in fact, coexist with the older IPv4 for some time. IPv6 is designed to allow the Internet to grow steadily, both in terms of the number of hosts connected and the total amount of data traffic transmitted.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Keygen token</b><br />A keygen token is a number supplied by a correspondent node in the return routability procedure to enable the mobile node to compute the necessary binding management key for authorizing a Binding Update.<br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>Mobile IP</b><br />Mobile IP is a standard that allows users with mobile devices whose IP addresses are associated with one network to stay connected when moving to a network with a different IP address. Mobile IP is most often found in wireless WAN environments where users need to carry their mobile devices across multiple LANs with different IP addresses.<br /><br /><b>Mobile Node</b><br />A host or router that changes its point of attachment from one network or subnetwork to another. A mobile node may change its location without changing its IP address; it may continue to communicate with other Internet nodes at any location using its (constant) IP address, assuming link-layer connectivity to a point of attachment is available.<br /><br /><b>Mobile node</b><br />A host or router that changes its point of attachment from one network or subnetwork to another. A mobile node may change its location without changing its IP address; it may continue to communicate with other Internet nodes at any location using its (constant) IP address, assuming link-layer connectivity to a point of attachment is available.<br /><br /><b>Node</b><br />In networks, node is a processing location. A node can be a computer or some other device, such as a printer. Every node has a unique network address, sometimes called a Data Link Control (DLC) address or Media Access Control (MAC) address. 
<br />
<br />In tree structures, node is a point where two or more lines meet. <br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>Register</b><br />(n) A, special, high-speed storage area within the CPU. All data must be represented in a register before it can be processed. For example, if two numbers are to be multiplied, both numbers must be in registers, and the result is also placed in a register. 
<br />
<br />(v) To notify a manufacturer that you have purchased its product. Registering a product is often a prerequisite to receiving customer support, and it is one of the ways that software producers control software piracy.<br /><br /><b>Router</b><br />A device that forwards data packets along networks. A router is connected to at least two networks, commonly two LANs or WANs or a LAN and its ISP network. Routers are located at gateways, the places where two or more networks connect. 
<br />
<br />Routers use headers and forwarding tables to determine the best path for forwarding the packets, and they use protocols such as ICMP to communicate with each other and configure the best route between any two hosts.<br /><br /><b>Tunnel</b><br />A tunnel is defined by a PNS-PAC pair. The tunnel protocol is defined by a modified version of GRE. The tunnel carries PPP datagrams between the PAC and the PNS. Many sessions are multiplexed on a single tunnel. A control connection operating over TCP controls the establishment, release, and maintenance of sessions and of the tunnel itself.<br /><br /><b>WAN</b><br />WAN (Wide Area Network) is a network that spans a large area, typically including routers, gateways, and many different IP address groups.
<br />
<br />In the context of firewalls, the WAN interface is the one directly connected to the Internet. In the context of corporate networks, the WAN generally refers to the network that connects all of the organization's locations onto the corporate network. Historically this was accomplished with expensive private leased lines like frame relay and similar technologies. With the low cost and widespread availability of broadband Internet connections, many organizations are switching to using VPN in lieu of leased lines. VPN provides the same functionality, though is not as reliable as leased lines and has higher latency.<br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/mobileip-numbers">Mobile IP numbers</a><hr /><b>RFCs:</b>
[<a href="https://www.rfc-editor.org/rfc/rfc2005.html">RFC 2005</a>] Applicability Statement for IP Mobility Support.
[<a href="https://www.rfc-editor.org/rfc/rfc2006.html">RFC 2006</a>] The Definitions of Managed Objects for IP Mobility Support using SMIv2.
                Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.mipMIB (1.3.6.1.2.1.44). 
[<a href="https://www.rfc-editor.org/rfc/rfc2977.html">RFC 2977</a>] Mobile IP Authentication, Authorization, and Accounting Requirements.
[<a href="https://www.rfc-editor.org/rfc/rfc3012.html">RFC 3012</a>] Mobile IPv4 Challenge/Response Extensions.
[<a href="https://www.rfc-editor.org/rfc/rfc3024.html">RFC 3024</a>] Reverse Tunneling for Mobile IP, revised.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2344.html">RFC 2344</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3115.html">RFC 3115</a>] Mobile IP Vendor/Organization-Specific Extensions.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc3025.html">RFC 3025</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3344.html">RFC 3344</a>] IP Mobility Support for IPv4.
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc3220.html">RFC 3220</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3519.html">RFC 3519</a>] Mobile IP Traversal of Network Address Translation (NAT) Devices.
                Defines Mobile IP control messages 4 (MIP Tunnel Data Message), 42 (UDP Tunnel Reply Extension) and 142 (UDP Tunnel Request Extension). 
[<a href="https://www.rfc-editor.org/rfc/rfc3543.html">RFC 3543</a>] Registration Revocation in Mobile IPv4.
                Defines Mobile IP control messages 7 (Registration Revocation), 15 (Revocation Acknowledgment) and 137 (Revocation Support). 
[<a href="https://www.rfc-editor.org/rfc/rfc3583.html">RFC 3583</a>] Requirements of a Quality of Service (QoS) Solution for Mobile IP.
[<a href="https://www.rfc-editor.org/rfc/rfc3846.html">RFC 3846</a>] Mobile IPv4 Extension for Carrying Network Access Identifiers.
                Defines Mobile IP control message 136 (NAI Carrying Extension). 
[<a href="https://www.rfc-editor.org/rfc/rfc3957.html">RFC 3957</a>] Authentication, Authorization, and Accounting (AAA) Registration Keys for Mobile IPv4.
                Defines Mobile IP control messages 40 (MN-FA-KeyGen Request), 41 (MN-FA-KeyGen Reply), 42 (MN-HA-KeyGen Request), 43 (MN-HA-KeyGen Reply). 
[<a href="https://www.rfc-editor.org/rfc/rfc4064.html">RFC 4064</a>] Experimental Message, Extensions, and Error Codes for Mobile IPv4.
                Defines Mobile IP control messages 127 (Non-skippable Extension for Experimental use) and 255 (Skippable Extension for Experimental use). 
[<a href="https://www.rfc-editor.org/rfc/rfc4093.html">RFC 4093</a>] Problem Statement: Mobile IPv4 Traversal of Virtual Private Network (VPN) Gateways.
                <hr /><b><b>Obsolete RFCs:</b></b>
[<a href="https://www.rfc-editor.org/rfc/rfc2002.html">RFC 2002</a>] IP Mobility Support.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3220.html">RFC 3220</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2344.html">RFC 2344</a>] Reverse Tunneling for Mobile IP.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3024.html">RFC 3024</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3025.html">RFC 3025</a>] Mobile IP Vendor/Organization-Specific Extensions.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3115.html">RFC 3115</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3220.html">RFC 3220</a>] IP Mobility Support for IPv4.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3344.html">RFC 3344</a>. 
                Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2002.html">RFC 2002</a>.
                		  </div>
		  
</section>


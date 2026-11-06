---
id: protocol-ip
slug: ip
name: IP
expandedName: Internet Protocol
origin: historical
provenance:
  source: protocols/protocol_IP.htm
  sha256: 64809a74379ba17485c297290e4f583a3bc331bee68ba696bcdfbe6fa75e449b
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Internet Protocol
layers:
  - Network Layer
suites:
  - TCP/IP
summary:
  - label: Protocol
    html: Internet Protocol
  - label: Protocol suite
    html: TCP/IP
  - label: Layer
    html: Network Layer
  - label: Type
    html: Connectionless
  - label: EtherType
    html: '0x0800'
  - label: Latest Version
    html: |-
      Internet Protocol Version 6 (IPv6). 
      <br />Internet Protocol Version 4 (IPv4) is most widely used version.
  - label: SNMP MIBs
    html: |-
      iso.org.dod.internet.mgmt.mib-2.ip 1.3.6.1.2.1.4) 
      <br />iso.org.dod.internet.mgmt.mib-2.ipMIB(1.3.6.1.2.1.48) 
      <br />iso.org.dod.internet.mgmt.mib-2.ipMRouteStdMIB (1.3.6.1.2.1.83)
  - label: Related protocols
    html: 'IPv6,<br />TCP,<br />UDP,<br />ICMP,<br />SNMP,<br />FTP,<br />TELNET,<br />SMTP,<br />ARP,<br />RARP'
  - label: Working groups
    html: |-
      Diffserv, Differentiated Services
      <br />IP1394, IP Over IEEE 1394
originalUpdate: '2005-12-09 11:31:15'
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

			The Internet Protocol (IP) is the method or protocol by which data is sent from one computer to another on the Internet. Each computer (known as a host) on the Internet has at least one IP address that uniquely identifies it from all other computers on the Internet. When you send or receive data (for example, an e-mail note or a Web page), the message gets divided into little chunks called packets. Each of these packets contains both the sender's Internet address and the receiver's address. Any packet is sent first to a gateway computer that understands a small part of the Internet. The gateway computer reads the destination address and forwards the packet to an adjacent gateway that in turn reads the destination address and so forth across the Internet until one gateway recognizes the packet as belonging to a computer within its immediate neighborhood or domain. That gateway then forwards the packet directly to the computer whose address is specified.
<br /> 
<br />Because a message is divided into a number of packets, each packet can, if necessary, be sent by a different route across the Internet. Packets can arrive in a different order than the order they were sent in. The Internet Protocol just delivers them. It's up to another protocol, the Transmission Control Protocol (TCP) to put them back in the right order. 
<br />
<br />IP is a connectionless protocol, which means that there is no continuing connection between the end points that are communicating. Each packet that travels through the Internet is treated as an independent unit of data without any relation to any other unit of data. (The reason the packets do get put in the right order is because of TCP, the connection-oriented protocol that keeps track of the packet sequence in a message.) In the Open Systems Interconnection (OSI) communication model, IP is in layer 3, the Networking Layer.
<br /><hr />
<br /><b>IP Header</b>
<br /><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td><p>4</p></td><td><p>8</p></td><td><p>16</p></td><td><p>19</p></td><td><p>32bits</p></td></tr><tr><td><p>Ver</p></td><td><p>IHL</p></td><td><p>Type of service</p></td><td colspan="2"><p>Total length</p></td></tr><tr><td colspan="3"><p>Identification</p></td><td><p>Flags</p></td><td><p>Fragment offset</p></td></tr><tr><td colspan="2"><p>Time to live</p></td><td><p>Protocol</p></td><td colspan="2"><p>Header checksum</p></td></tr><tr><td colspan="5"><p>Source address</p></td></tr><tr><td colspan="5"><p>Destination address</p></td></tr><tr><td colspan="5"><p>Option + Padding</p></td></tr><tr><td colspan="5"><p>Data</p></td></tr></tbody></table></div></div>
<br /><ul><li><b>Version</b><br /></li> 
<li>4 bits. The Version field indicates the format of the internet header. This document describes version 4. 
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 2" tabindex="0"><table><caption>Description: preserved table 2</caption><tbody><tr><td><b>Version</b></td><td><b>Description</b></td></tr><tr><td>0</td><td>Reserved.</td></tr><tr><td>1<br />2<br />3</td><td> </td></tr><tr><td>4</td><td>IP, Internet Protocol.</td></tr><tr><td>5</td><td>ST, ST Datagram Mode.</td></tr><tr><td>6</td><td>SIP, Simple Internet Protocol. <br />SIPP, Simple Internet Protocol Plus.<br />IPv6, Internet Protocol.</td></tr><tr><td>7</td><td>TP/IX, The Next Internet.</td></tr><tr><td>8</td><td>PIP, The P Internet Protocol.</td></tr><tr><td>9</td><td>TUBA</td></tr><tr><td>10<br />-<br />14</td><td> </td></tr><tr><td>15</td><td>Reserved.</td></tr></tbody></table></div></div><br /></li>
<li><b>Internet Header Length (IHL)</b><br /></li>
<li>4 bits. Internet Header Length is the length of the internet header in 32 bit words, and thus points to the beginning of the data. Note that the minimum value for a correct header is 5. 
<br /><br /></li>
<li><b>Type of Service (TOS)</b><br /></li>
<li>8 bits. The Type of Service provides an indication of the abstract parameters of the quality of service desired. These parameters are to be used to guide the selection of the actual service parameters when transmitting a datagram through a particular network. Several networks offer service precedence, which somehow treats high precedence traffic as more important than other traffic (generally by accepting only traffic above a certain precedence at time of high load). The major choice is a three way tradeoff between low-delay, high-reliability, and high-throughput.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 3" tabindex="0"><table><caption>Description: preserved table 3</caption><tbody><tr><td>Bits 0-2: </td><td>Precedence. </td></tr><tr><td>Bit 3: </td><td>0 = Normal Delay, 1 = Low Delay. </td></tr><tr><td>Bit 4: </td><td>0 = Normal Throughput, 1 = High Throughput. </td></tr><tr><td>Bit 5: </td><td>0 = Normal Relibility, 1 = High Relibility. </td></tr><tr><td>Bit 6-7: </td><td>Reserved for Future Use. </td></tr></tbody></table></div></div><br /></li>
<li><div><div class="table-scroll" role="region" aria-label="Description table 4" tabindex="0"><table><caption>Description: preserved table 4</caption><tbody><tr><td><b>Precedence</b> </td></tr><tr><td>111 </td><td>Network Control </td></tr><tr><td>110 </td><td>Internetwork Control </td></tr><tr><td>101 </td><td>CRITIC/ECP </td></tr><tr><td>100 </td><td>Flash Override </td></tr><tr><td>011 </td><td>Flash </td></tr><tr><td>010 </td><td>Immediate </td></tr><tr><td>001 </td><td>Priority </td></tr><tr><td>000 </td><td>Routine </td></tr></tbody></table></div></div><br /><br /></li>

<li><b>Total Length</b><br /></li>
<li>16 bits. Total Length is the length of the datagram, measured in octets, including internet header and data. This field allows the length of a datagram to be up to 65,535 octets. Such long datagrams are impractical for most hosts and networks. All hosts must be prepared to accept datagrams of up to 576 octets (whether they arrive whole or in fragments). It is recommended that hosts only send datagrams larger than 576 octets if they have assurance that the destination is prepared to accept the larger datagrams.
<br /><br /></li> 
<li>The number 576 is selected to allow a reasonable sized data block to be transmitted in addition to the required header information. For example, this size allows a data block of 512 octets plus 64 header octets to fit in a datagram. The maximal internet header is 60 octets, and a typical internet header is 20 octets, allowing a margin for headers of higher level protocols.
<br /><br /></li>
<li><b>Identification</b><br /></li>
<li>16 bits. Used to identify the fragments of one datagram from those of another. The originating protocol module of an internet datagram sets the identification field to a value that must be unique for that source-destination pair and protocol for the time the datagram will be active in the internet system. The originating protocol module of a complete datagram clears the MF bit to zero and the Fragment Offset field to zero.
<br /><br /></li>
<li><b>Flags</b><br /></li>
<li>3 bits. Various Control Flags.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 5" tabindex="0"><table><caption>Description: preserved table 5</caption><tbody><tr><td><p>Bit 0: </p></td><td><p>reserved, must be zero </p></td></tr><tr><td><p>Bit 1: </p></td><td><p>(DF) 0 = May Fragment, 1 = Don't Fragment. </p></td></tr><tr><td><p>Bit 2: </p></td><td><p>(MF) 0 = Last Fragment, 1 = More Fragments.</p></td></tr></tbody></table></div></div><br /></li>
<li><b>Fragment Offset:</b><br /></li>
<li>13 bits. This field indicates where in the datagram this fragment belongs. The fragment offset is measured in units of 8 octets (64 bits). The first fragment has offset zero.
<br /><br /></li>
<li><b>Time to Live (TTL)</b><br /></li>
<li>8 bits. This field indicates the maximum time the datagram is allowed to remain in the internet system. If this field contains the value zero, then the datagram must be destroyed. This field is modified in internet header processing. The time is measured in units of seconds, but since every module that processes a datagram must decrease the TTL by at least one even if it process the datagram in less than a second, the TTL must be thought of only as an upper bound on the time a datagram may exist. The intention is to cause undeliverable datagrams to be discarded, and to bound the maximum datagram lifetime.
<br /><br /></li>
<li><b>Protocol</b><br /></li>
<li>8 bits. This field indicates the next level protocol used in the data portion of the internet datagram.
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 6" tabindex="0"><table><caption>Description: preserved table 6</caption><tbody><tr><td>Value</td><td>Protocol</td></tr><tr><td>0</td><td>HOPOPT, IPv6 Hop-by-Hop Option.</td></tr><tr><td>1</td><td>Internet Control Message Protocol(ICMP).</td></tr><tr><td>2</td><td>IGAP, IGMP for user Authentication Protocol.IGMP, Internet Group Management Protocol.RGMP, Router-port Group Management Protocol.</td></tr><tr><td>3</td><td>GGP, Gateway to Gateway Protocol.</td></tr><tr><td>4</td><td>IP in IP encapsulation.</td></tr><tr><td>5</td><td>ST, Internet Stream Protocol.</td></tr><tr><td>6</td><td>TCP, Transmission Control Protocol.</td></tr><tr><td>7</td><td>UCL, CBT.</td></tr><tr><td>8</td><td>EGP, Exterior Gateway Protocol.</td></tr><tr><td>9</td><td>IGRP, Interior Gateway Routing Protocol.</td></tr><tr><td>10</td><td>BBN RCC Monitoring.</td></tr><tr><td>11</td><td>NVP, Network Voice Protocol.</td></tr><tr><td>12</td><td>PUP.</td></tr><tr><td>13</td><td>ARGUS.</td></tr><tr><td>14</td><td>EMCON, Emission Control Protocol.</td></tr><tr><td>15</td><td>XNET, Cross Net Debugger.</td></tr><tr><td>16</td><td>Chaos.</td></tr><tr><td>17</td><td>UDP, User Datagram Protocol.</td></tr><tr><td>18</td><td>TMux, Transport Multiplexing Protocol.</td></tr><tr><td>19</td><td>DCN Measurement Subsystems.</td></tr><tr><td>20</td><td>HMP, Host Monitoring Protocol.</td></tr><tr><td>21</td><td>Packet Radio Measurement.</td></tr><tr><td>22</td><td>XEROX NS IDP.</td></tr><tr><td>23</td><td>Trunk-1.</td></tr><tr><td>24</td><td>Trunk-2.</td></tr><tr><td>25</td><td>Leaf-1.</td></tr><tr><td>26</td><td>Leaf-2.</td></tr><tr><td>27</td><td>RDP, Reliable Data Protocol.</td></tr><tr><td>28</td><td>IRTP, Internet Reliable Transaction Protocol.</td></tr><tr><td>29</td><td>ISO Transport Protocol Class 4.</td></tr><tr><td>30</td><td>NETBLT, Network Block Transfer.</td></tr><tr><td>31</td><td>MFE Network Services Protocol.</td></tr><tr><td>32</td><td>MERIT Internodal Protocol.</td></tr><tr><td>33</td><td>SEP, Sequential Exchange Protocol.DCCP, Datagram Congestion Control Protocol.</td></tr><tr><td>34</td><td>Third Party Connect Protocol.</td></tr><tr><td>35</td><td>IDPR, Inter-Domain Policy Routing Protocol.</td></tr><tr><td>36</td><td>XTP, Xpress Transfer Protocol.</td></tr><tr><td>37</td><td>Datagram Delivery Protocol.</td></tr><tr><td>38</td><td>IDPR, Control Message Transport Protocol.</td></tr><tr><td>39</td><td>TP++ Transport Protocol.</td></tr><tr><td>40</td><td>IL Transport Protocol.</td></tr><tr><td>41</td><td>IPv6 over IPv4.</td></tr><tr><td>42</td><td>SDRP, Source Demand Routing Protocol.</td></tr><tr><td>43</td><td>IPv6 Routing header.</td></tr><tr><td>44</td><td>IPv6 Fragment header.</td></tr><tr><td>45</td><td>IDRP, Inter-Domain Routing Protocol.</td></tr><tr><td>46</td><td>RSVP, Reservation Protocol.</td></tr><tr><td>47</td><td>GRE, General Routing Encapsulation.</td></tr><tr><td>48</td><td>MHRP, Mobile Host Routing Protocol.</td></tr><tr><td>49</td><td>BNA.</td></tr><tr><td>50</td><td>ESP, Encapsulating Security Payload.</td></tr><tr><td>51</td><td>AH, Authentication Header.</td></tr><tr><td>52</td><td>Integrated Net Layer Security TUBA.</td></tr><tr><td>53</td><td>IP with Encryption.</td></tr><tr><td>54</td><td>NARP, NBMA Address Resolution Protocol.</td></tr><tr><td>55</td><td>Minimal Encapsulation Protocol.</td></tr><tr><td>56</td><td>TLSP, Transport Layer Security Protocol using Kryptonet key management.</td></tr><tr><td>57</td><td>SKIP.</td></tr><tr><td>58</td><td>ICMPv6, Internet Control Message Protocol for IPv6.MLD, Multicast Listener Discovery.</td></tr><tr><td>59</td><td>IPv6 No Next Header.</td></tr><tr><td>60</td><td>Destination Options for IPv6.</td></tr><tr><td>61</td><td>Any host internal protocol.</td></tr><tr><td>62</td><td>CFTP.</td></tr><tr><td>63</td><td>Any local network.</td></tr><tr><td>64</td><td>SATNET and Backroom EXPAK.</td></tr><tr><td>65</td><td>Kryptolan.</td></tr><tr><td>66</td><td>MIT Remote Virtual Disk Protocol.</td></tr><tr><td>67</td><td>Internet Pluribus Packet Core.</td></tr><tr><td>68</td><td>Any distributed file system.</td></tr><tr><td>69</td><td>SATNET Monitoring.</td></tr><tr><td>70</td><td>VISA Protocol.</td></tr><tr><td>71</td><td>Internet Packet Core Utility.</td></tr><tr><td>72</td><td>Computer Protocol Network Executive.</td></tr><tr><td>73</td><td>Computer Protocol Heart Beat.</td></tr><tr><td>74</td><td>Wang Span Network.</td></tr><tr><td>75</td><td>Packet Video Protocol.</td></tr><tr><td>76</td><td>Backroom SATNET Monitoring.</td></tr><tr><td>77</td><td>SUN ND PROTOCOL-Temporary.</td></tr><tr><td>78</td><td>WIDEBAND Monitoring.</td></tr><tr><td>79</td><td>WIDEBAND EXPAK.</td></tr><tr><td>80</td><td>ISO-IP.</td></tr><tr><td>81</td><td>VMTP, Versatile Message Transaction Protocol.</td></tr><tr><td>82</td><td>SECURE-VMTP</td></tr><tr><td>83</td><td>VINES.</td></tr><tr><td>84</td><td>TTP.</td></tr><tr><td>85</td><td>NSFNET-IGP.</td></tr><tr><td>86</td><td>Dissimilar Gateway Protocol.</td></tr><tr><td>87</td><td>TCF.</td></tr><tr><td>88</td><td>EIGRP.</td></tr><tr><td>89</td><td>OSPF, Open Shortest Path First Routing Protocol.MOSPF, Multicast Open Shortest Path First.</td></tr><tr><td>90</td><td>Sprite RPC Protocol.</td></tr><tr><td>91</td><td>Locus Address Resolution Protocol.</td></tr><tr><td>92</td><td>MTP, Multicast Transport Protocol.</td></tr><tr><td>93</td><td>AX.25.</td></tr><tr><td>94</td><td>IP-within-IP Encapsulation Protocol.</td></tr><tr><td>95</td><td>Mobile Internetworking Control Protocol.</td></tr><tr><td>96</td><td>Semaphore Communications Sec. Pro.</td></tr><tr><td>97</td><td>EtherIP.</td></tr><tr><td>98</td><td>Encapsulation Header.</td></tr><tr><td>99</td><td>Any private encryption scheme.</td></tr><tr><td>100</td><td>GMTP.</td></tr><tr><td>101</td><td>IFMP, Ipsilon Flow Management Protocol.</td></tr><tr><td>102</td><td>PNNI over IP.</td></tr><tr><td>103</td><td>PIM, Protocol Independent Multicast.</td></tr><tr><td>104</td><td>ARIS.</td></tr><tr><td>105</td><td>SCPS.</td></tr><tr><td>106</td><td>QNX.</td></tr><tr><td>107</td><td>Active Networks.</td></tr><tr><td>108</td><td>IPPCP, IP Payload Compression Protocol.</td></tr><tr><td>109</td><td>SNP, Sitara Networks Protocol.</td></tr><tr><td>110</td><td>Compaq Peer Protocol.</td></tr><tr><td>111</td><td>IPX in IP.</td></tr><tr><td>112</td><td>VRRP, Virtual Router Redundancy Protocol.</td></tr><tr><td>113</td><td>PGM, Pragmatic General Multicast.</td></tr><tr><td>114</td><td>any 0-hop protocol.</td></tr><tr><td>115</td><td>L2TP, Level 2 Tunneling Protocol.</td></tr><tr><td>116</td><td>DDX, D-II Data Exchange.</td></tr><tr><td>117</td><td>IATP, Interactive Agent Transfer Protocol.</td></tr><tr><td>118</td><td>ST, Schedule Transfer.</td></tr><tr><td>119</td><td>SRP, SpectraLink Radio Protocol.</td></tr><tr><td>120</td><td>UTI.</td></tr><tr><td>121</td><td>SMP, Simple Message Protocol.</td></tr><tr><td>122</td><td>SM.</td></tr><tr><td>123</td><td>PTP, Performance Transparency Protocol.</td></tr><tr><td>124</td><td>ISIS over IPv4.</td></tr><tr><td>125</td><td>FIRE.</td></tr><tr><td>126</td><td>CRTP, Combat Radio Transport Protocol.</td></tr><tr><td>127</td><td>CRUDP, Combat Radio User Datagram.</td></tr><tr><td>128</td><td>SSCOPMCE.</td></tr><tr><td>129</td><td>IPLT.</td></tr><tr><td>130</td><td>SPS, Secure Packet Shield.</td></tr><tr><td>131</td><td>PIPE, Private IP Encapsulation within IP.</td></tr><tr><td>132</td><td>SCTP, Stream Control Transmission Protocol.</td></tr><tr><td>133</td><td>Fibre Channel.</td></tr><tr><td>134</td><td>RSVP-E2E-IGNORE.</td></tr><tr><td>135</td><td>Mobility Header.</td></tr><tr><td>136</td><td>UDP-Lite, Lightweight User Datagram Protocol.</td></tr><tr><td>137</td><td>MPLS-in-IP.</td></tr><tr><td>138-252</td><td>¡¡</td></tr><tr><td>253254</td><td>Experimentation and testing.</td></tr><tr><td>255</td><td>reserved.</td></tr></tbody></table></div></div><br /></li>
<li><b>Header Checksum</b><br /></li>
<li>16 bits. A checksum on the header only. Since some header fields change (e.g., time to live), this is recomputed and verified at each point that the internet header is processed. 
<br /><br /></li>
<li><b>Source address/destination address</b><br /></li>
<li>32 bits each. A distinction is made between names, addresses and routes. A name indicates an object to be sought. An address indicates the location of the object. A route indicates how to arrive at the object. The Internet protocol deals primarily with addresses. It is the task of higher level protocols (such as host-to-host or application) to make the mapping from names to addresses. The Internet module maps Internet addresses to local net addresses. It is the task of lower level procedures (such as local net or gateways) to make the mapping from local net addresses to routes.
<br /><br /></li>
<li><b>Options</b><br /></li>
<li>variable length
<br /></li><li><div>The options may appear or not in datagrams. They must be implemented by all IP modules (host and gateways). What is optional is their transmission in any particular datagram, not their implementation. In some environments the security option may be required in all datagrams. 
<br />
<br />The option field is variable in length. There may be zero or more options. There are two cases for the format of an option: 
<br />      Case 1: A single octet of option-type. 
<br />      Case 2: An option-type octet, an option-length octet, and the actual option-data octets.
<br /> 
<br />The option-length octet counts the option-type octet and the option-length octet as well as the option-data octets. 
<br />The option-type octet is viewed as having 3 fields
<br /><div><div class="table-scroll" role="region" aria-label="Description table 7" tabindex="0"><table><caption>Description: preserved table 7</caption><tbody><tr><td><b>Value</b></td><td><b>Description</b></td></tr><tr><td>1 bit</td><td>Copied flag. </td></tr><tr><td>2 bits</td><td>Option class. </td></tr><tr><td>5 bits</td><td>Option number. </td></tr></tbody></table></div></div>
<br />The copied flag indicates that this option is copied into all fragments on fragmentation.
<br /><div><div class="table-scroll" role="region" aria-label="Description table 8" tabindex="0"><table><caption>Description: preserved table 8</caption><tbody><tr><td><b>Value</b></td><td><b>Description</b></td></tr><tr><td>0</td><td>Not copied. </td></tr><tr><td>1</td><td>Copied </td></tr></tbody></table></div></div>
<br />The option classes are
<br /><div><div class="table-scroll" role="region" aria-label="Description table 9" tabindex="0"><table><caption>Description: preserved table 9</caption><tbody><tr><td><b>Value</b></td><td><b>Description</b></td></tr><tr><td>0</td><td>Control. </td></tr><tr><td>1</td><td>Reserved for future use. </td></tr><tr><td>2</td><td>Debugging and measurement. </td></tr><tr><td>3</td><td>Reserved for future use. </td></tr></tbody></table></div></div>
<br />Defined options
<br /><div><div class="table-scroll" role="region" aria-label="Description table 10" tabindex="0"><table><caption>Description: preserved table 10</caption><tbody><tr><td><b>CLASS</b></td><td><b>NUMBER </b></td><td><b>LENGTH</b></td><td><b>DESCRIPTION </b></td></tr><tr><td>0 </td><td>0 </td><td>- </td><td>End of Option list. This option occupies only 1 octet; it has no length octet. </td></tr><tr><td>0 </td><td>1 </td><td>- </td><td>No Operation. This option occupies only 1 octet; it has no length octet. </td></tr><tr><td>0 </td><td>2 </td><td>11 </td><td>Security. Used to carry Security, Compartmentation, User Group (TCC), and Handling Restriction Codes compatible with DOD requirements. </td></tr><tr><td>0 </td><td>3 </td><td>var. </td><td>Loose Source Routing. Used to route the internet datagram based on information supplied by the source. </td></tr><tr><td>0 </td><td>9 </td><td>var. </td><td>Strict Source Routing. Used to route the internet datagram based on information supplied by the source. </td></tr><tr><td>0 </td><td>7 </td><td>var. </td><td>Record Route. Used to trace the route an internet datagram takes. </td></tr><tr><td>0 </td><td>8 </td><td>4 </td><td>Stream ID. Used to carry the stream identifier. </td></tr><tr><td>2 </td><td>4 </td><td>var. </td><td>Internet Timestamp. </td></tr></tbody></table></div></div>
<br /><ul><li><b>End of Option List</b><br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 1" tabindex="0">          +--------+
          |00000000|
          +--------+
           Type=0</pre></li><li>This option indicates the end of the option list. This might not coincide with the end of the internet header according to the internet header length. This is used at the end of all options, not the end of each option, and need only be used if the end of the options would not otherwise coincide with the end of the internet header. May be copied, introduced, or deleted on fragmentation, or for any other reason. 
<br /><br /></li>
<li><b>No Operation</b><br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 2" tabindex="0">          +--------+
          |00000001|
          +--------+
           Type=1</pre></li><li>This option may be used between options, for example, to align the beginning of a subsequent option on a 32 bit boundary. May be copied, introduced, or deleted on fragmentation, or for any other reason.
<br /><br /></li>
<li><b>Security</b><br /></li>
<li>This option provides a way for hosts to send security, compartmentation, handling restrictions, and TCC (closed user group)
<br /></li><li>parameters. The format for this option is as follows: 
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 3" tabindex="0">          +--------+--------+---//---+---//---+---//---+---//---+
          |10000010|00001011|SSS  SSS|CCC  CCC|HHH  HHH|  TCC   |
          +--------+--------+---//---+---//---+---//---+---//---+
            Type=130 Length=11</pre></li><li><ul><li><b>Security (S field):</b><br /></li>
<li>16 bits. Specifies one of 16 levels of security (eight of which are reserved for future use). 
<br /></li><li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 4" tabindex="0">          00000000 00000000 - Unclassified
          11110001 00110101 - Confidential
          01111000 10011010 - EFTO
          10111100 01001101 - MMMM
          01011110 00100110 - PROG
          10101111 00010011 - Restricted
          11010111 10001000 - Secret
          01101011 11000101 - Top Secret
          00110101 11100010 - (Reserved for future use)
          10011010 11110001 - (Reserved for future use)
          01001101 01111000 - (Reserved for future use)
          00100100 10111101 - (Reserved for future use)
          00010011 01011110 - (Reserved for future use)
          10001001 10101111 - (Reserved for future use)
          11000100 11010110 - (Reserved for future use)
          11100010 01101011 - (Reserved for future use)</pre></li><li><b>Compartments (C field)</b><br /></li> 
<li>16 bits. An all zero value is used when the information transmitted is not compartmented. Other values for the compartments field may be obtained from the Defense Intelligence Agency. 
<br /><br /></li>
<li><b>Handling Restrictions (H field)</b><br /></li> 
<li>16 bits. The values for the control and release markings are alphanumeric digraphs and are defined in the Defense Intelligence Agency Manual DIAM 65-19, "Standard Security Markings". 
<br /><br /></li>
<li><b>Transmission Control Code (TCC field)</b><br /></li> 
<li>24 bits. Provides a means to segregate traffic and define controlled communities of interest among subscribers. The TCC values are trigraphs, and are available from HQ DCA Code 530. 
<br /><br /></li>
<li>Must be copied on fragmentation. This option appears at most once in a datagram.</li></ul><br /></li>
<li><b>Loose Source and Record Route</b><br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 5" tabindex="0">          +--------+--------+--------+---------//--------+
          |10000011| length | pointer|     route data    |
          +--------+--------+--------+---------//--------+
           Type=131</pre></li><li>The loose source and record route (LSRR) option provides a means for the source of an internet datagram to supplyrouting information to be used by the gateways in forwarding the datagram to the destination, and to record the route information.
<br /><br /></li> 
<li>The option begins with the option type code. The second octet is the option length which includes the option type code and the length octet, the pointer octet, and length-3 octets of route data. The third octet is the pointer into the route data indicating the octet which begins the next source address to be processed. The pointer is relative to this option, and the smallest legal value for the pointer is 4. 
<br /><br /></li>
<li>A route data is composed of a series of internet addresses. Each internet address is 32 bits or 4 octets. If the pointer is greater than the length, the source route is empty (and the recorded route full) and the routing is to be based on the destination address field. If the address in destination address field has been reached and the pointer is not greater than
<br /></li><li>the length, the next address in the source route replaces the address in the destination address field, and the recorded route address replaces the source address just used, and pointer is increased by four. 
<br /><br /></li>
<li>The recorded route address is the internet module's own internet address as known in the environment into which this datagram is being forwarded. 
<br /><br /></li>
<li>This procedure of replacing the source route with the recorded route (though it is in the reverse of the order it must be in to be used as a source route) means the option (and the IP header as a whole) remains a constant length as the datagram progresses through the internet. 
<br /><br /></li>
<li>This option is a loose source route because the gateway or host IP is allowed to use any route of any number of other intermediate gateways to reach the next address in the route. 
<br /><br /></li>
<li>Must be copied on fragmentation. Appears at most once in a datagram.
<br /><br /></li>
<li><b>Strict Source and Record Route</b><br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 6" tabindex="0">          +--------+--------+--------+---------//--------+
          |10001001| length | pointer|     route data    |
          +--------+--------+--------+---------//--------+
           Type=137</pre></li><li>The strict source and record route (SSRR) option provides a means for the source of an internet datagram to supply routing information to be used by the gateways in forwarding the datagram to the destination, and to record the route information. The option begins with the option type code. The second octet is the option length which includes the option type code and the length octet, the pointer octet, and length-3 octets of route data. The third octet is the pointer into the route data indicating the octet which begins the next source address to be processed. The pointer is relative to this option, and the smallest legal value for the pointer is 4. 
<br /><br /></li>
<li>A route data is composed of a series of internet addresses. Each internet address is 32 bits or 4 octets. If the pointer is greater than the length, the source route is empty (and the recorded route full) and the routing is to be based on the destination address field. 
<br /><br /></li>
<li>If the address in destination address field has been reached and the pointer is not greater than the length, the next address in the source route replaces the address in the destination address field, and the recorded route address replaces the source address just used, and pointer is increased by four. 
<br /><br /></li>
<li>The recorded route address is the internet module's own internet address as known in the environment into which this datagram is being forwarded. 
<br /><br /></li>
<li>This procedure of replacing the source route with the recorded route (though it is in the reverse of the order it must be in to be used as a source route) means the option (and the IP header as a whole) remains a constant length as the datagram progresses through the internet. 
<br /><br /></li>
<li>This option is a strict source route because the gateway or host IP must send the datagram directly to the next address in the source route through only the directly connected network indicated in the next address to reach the next gateway or host specified in the route. 
<br /><br /></li>
<li>Must be copied on fragmentation. Appears at most once in a datagram.
<br /><br /></li>
<li><b>Record Route</b><br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 7" tabindex="0">          +--------+--------+--------+---------//--------+
          |00000111| length | pointer|     route data    |
          +--------+--------+--------+---------//--------+
           Type=7</pre></li><li>The record route option provides a means to record the route of an internet datagram. The option begins with the option type code. The second octet is the option length which includes the option type code and the length octet, the pointer octet, and length-3 octets of route data. The third octet is the pointer into the rout data indicating the octet which begins the next area to store a route address. The pointer is relative to this option, and the smallest legal value for the pointer is 4. 
<br /><br /></li>
<li>A recorded route is composed of a series of internet addresses. Each internet address is 32 bits or 4 octets. If the pointer is greater than the length, the recorded route data area is full. The originating host must compose this option with a large enough route data area to hold all the address expected. The size of the option does not change due to adding addresses.
<br /><br /></li> 
<li>The intitial contents of the route data area must be zero. 
<br /><br /></li>
<li>When an internet module routes a datagram it checks to see if the record route option is present. If it is, it inserts its own internet address as known in the environment into which this datagram is being forwarded into the recorded route begining
<br /></li><li>at the octet indicated by the pointer, and increments the pointer by four. 
<br /><br /></li>
<li>If the route data area is already full (the pointer exceeds the length) the datagram is forwarded without inserting the address into the recorded route. If there is some room but not enough room for a full address to be inserted, the original datagram is considered to be in error and is discarded. In either case an ICMP parameter problem message may be sent to the source host. 
<br /><br /></li>
<li>Not copied on fragmentation, goes in first fragment only. Appears at most once in a datagram.
<br /><br /></li>
<li><b>Stream Identifier</b><br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 8" tabindex="0">          +--------+--------+--------+--------+
          |10001000|00000010|    Stream ID    |
          +--------+--------+--------+--------+
           Type=136 Length=4</pre></li><li>This option provides a way for the 16-bit SATNET stream identifier to be carried through networks that do not support the stream concept. 
<br /><br /></li>
<li>Must be copied on fragmentation. Appears at most once in a datagram.
<br /><br /></li>
<li><b>Internet Timestamp</b><br /></li>
<li><pre class="legacy-pre" role="region" aria-label="Description: preformatted example 9" tabindex="0">          +--------+--------+--------+--------+
          |01000100| length | pointer|oflw|flg|
          +--------+--------+--------+--------+
          |         internet address          |
          +--------+--------+--------+--------+
          |             timestamp             |
          +--------+--------+--------+--------+
          |                 .                 |
                            .
                            .
          Type = 68</pre></li><li>The Option Length is the number of octets in the option counting the type, length, pointer, and overflow/flag octets (maximum length 40).
<br /><br /></li> 
<li>The Pointer is the number of octets from the beginning of this option to the end of timestamps plus one (i.e., it points to the octet beginning the space for next timestamp). The smallest legal value is 5. The timestamp area is full when the pointer is greater than the length. 
<br /><br /></li>
<li>The Overflow (oflw) [4 bits] is the number of IP modules that cannot register timestamps due to lack of space. 
<br /><br /></li>
<li>The Flag (flg) [4 bits] values are 
<br /></li><li>          0 -- time stamps only, stored in consecutive 32-bit words, 
<br /></li><li>          1 -- each timestamp is preceded with internet address of the registering entity, 
<br /></li><li>          3 -- the internet address fields are prespecified. An IP module only registers its timestamp if it matches its own address with the next specified internet address. 
<br /><br /></li>
<li>The Timestamp is a right-justified, 32-bit timestamp in milliseconds since midnight UT. If the time is not available in milliseconds or cannot be provided with respect to midnight UT then any time may be inserted as a timestamp provided the high order bit of the timestamp field is set to one to indicate the use of a non-standard value.
<br /><br /></li> 
<li>The originating host must compose this option with a large enough timestamp data area to hold all the timestamp information expected. The size of the option does not change due to adding timestamps. The intitial contents of the timestamp data area must be zero or internet address/zero pairs. 
<br /><br /></li>
<li>If the timestamp data area is already full (the pointer exceeds the length) the datagram is forwarded without inserting the timestamp, but the overflow count is incremented by one. 
<br /><br /></li>
<li>If there is some room but not enough room for a full timestamp to be inserted, or the overflow count itself overflows, the original datagram is considered to be in error and is discarded. In either case an ICMP parameter problem message may be sent to the source host. 
<br /><br /></li>
<li>The timestamp option is not copied upon fragmentation. It is carried in the first fragment. Appears at most once in a datagram.</li></ul></div><br /><br /></li>

<li><b>Padding</b><br /></li>
<li>Variable length. Used as a filler to guarantee that the data starts on a 32 bit boundary.</li></ul>
<br />
<br />		    
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0"><b>Example 1: the minimal data carrying internet datagram</b>

          0                   1                   2                   3   
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Ver= 4 |IHL= 5 |Type of Service|        Total Length = 21      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |      Identification = 111     |Flg=0|   Fragment Offset = 0   |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |   Time = 123  |  Protocol = 1 |        header checksum        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         source address                        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                      destination address                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     data      |                                                
          +-+-+-+-+-+-+-+-+
    
Note that each tick mark represents one bit position. 

This is a internet datagram in version 4 of internet protocol; the internet header 
consists of five 32 bit words, and the total length of the datagram is 21 octets. 
This datagram is a complete datagram (not a fragment).</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 2" tabindex="0"><b>Example 2</b>

In this example, we show first a moderate size internet datagram (452 data octets), 
then two internet fragments that might result from the fragmentation of this datagram 
if the maximum sized transmission allowed were 280 octets.

          0                   1                   2                   3   
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Ver= 4 |IHL= 5 |Type of Service|       Total Length = 472      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Identification = 111      |Flg=0|     Fragment Offset = 0 |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |   Time = 123  | Protocol = 6  |        header checksum        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         source address                        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                      destination address                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |


          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |             data              |                                
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+                                

The first fragment: results from splitting the datagram after 256 data octets:

          0                   1                   2                   3   
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Ver= 4 |IHL= 5 |Type of Service|       Total Length = 276      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Identification = 111      |Flg=1|     Fragment Offset = 0 |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |   Time = 119  | Protocol = 6  |        Header Checksum        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         source address                        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                      destination address                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |


          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+


And the second fragment:

          0                   1                   2                   3   
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Ver= 4 |IHL= 5 |Type of Service|       Total Length = 216      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |     Identification = 111      |Flg=0|  Fragment Offset  =  32 |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |   Time = 119  | Protocol = 6  |        Header Checksum        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                         source address                        |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                      destination address                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |


          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |            data               |                                
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre><pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 3" tabindex="0"><b>Example 3: a datagram containing options</b>

          0                   1                   2                   3   
          0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |Ver= 4 |IHL= 8 |Type of Service|       Total Length = 576      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |       Identification = 111    |Flg=0|     Fragment Offset = 0 |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |   Time = 123  |  Protocol = 6 |       Header Checksum         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                        source address                         |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                      destination address                      |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          | Opt. Code = x | Opt.  Len.= 3 | option value  | Opt. Code = x |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          | Opt. Len. = 4 |           option value        | Opt. Code = 1 |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          | Opt. Code = y | Opt. Len. = 3 |  option value | Opt. Code = 0 |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |


          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
          |                             data                              |
          +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">HDLC<img src="/supporting/images/tline_l_top.gif" alt="" /><br />WAN PPP<img src="/supporting/images/tline_l.gif" alt="" /><br />WAN Frame Relay<img src="/supporting/images/tline_l.gif" alt="" /><br />WAN X25<img src="/supporting/images/tline_l.gif" alt="" /><br />Ethernet<img src="/supporting/images/tline_l.gif" alt="" /><br />MPLS<img src="/supporting/images/tline_l.gif" alt="" /><br />PPP<img src="/supporting/images/tline_l_bottom.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>IP</div></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td class="MapChild" aria-label="Child layer protocols"><img src="/supporting/images/tline_r_top.gif" alt="" />ICMP<br /><img src="/supporting/images/tline_r.gif" alt="" />ICMPv6<br /><img src="/supporting/images/tline_r.gif" alt="" />IGMP<br /><img src="/supporting/images/tline_r.gif" alt="" />EGP<br /><img src="/supporting/images/tline_r.gif" alt="" />IGRP<br /><img src="/supporting/images/tline_r.gif" alt="" />EIGRP<br /><img src="/supporting/images/tline_r.gif" alt="" />SCTP<br /><img src="/supporting/images/tline_r.gif" alt="" />TCP<br /><img src="/supporting/images/tline_r.gif" alt="" />UDP<br /><img src="/supporting/images/tline_r.gif" alt="" />PUP<br /><img src="/supporting/images/tline_r.gif" alt="" />OSPF<br /><img src="/supporting/images/tline_r.gif" alt="" />VRRP<br /><img src="/supporting/images/tline_r.gif" alt="" />ESP<br /><img src="/supporting/images/tline_r.gif" alt="" />AH<br /><img src="/supporting/images/tline_r.gif" alt="" />GRE<br /><img src="/supporting/images/tline_r.gif" alt="" />RSVP<br /><img src="/supporting/images/tline_r.gif" alt="" />PIM<br /><img src="/supporting/images/tline_r.gif" alt="" />IPv6<br /><img src="/supporting/images/tline_r.gif" alt="" />Other<br /><img src="/supporting/images/tline_r_bottom.gif" alt="" />IP Fragment<br /></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>Connection</b><br />A logical communication path identified by a pair of endpoints.
<br />
<br />In dbAnywhere, a connection refers to the connection to the SQL Anywhere database.<br /><br /><b>Connection-oriented</b><br />In telecommunications, connection-oriented describes a means of transmitting data in which the devices at the end points use a preliminary protocol to establish an end-to-end connection before any data is sent. Connection-oriented protocol service is sometimes called a "reliable" network service, because it guarantees that data will arrive in the proper sequence. Transmission Control Protocol (TCP) is a connection-oriented protocol. 
<br />
<br />For connection-oriented communications, each end point must be able to transmit so that it can communicate. The alternative to connection-oriented transmission is the connectionless approach, in which data is sent from one end point to another without prior arrangement. Connectionless protocols are usually described as stateless because the end points have no protocol-defined way to remember where they are in a "conversation" of message exchanges. Because they can keep track of a conversation, connection-oriented protocols are sometimes described as stateful. <br /><br /><b>Diffserv</b><br />Diffserv (Differentiated services) are intended  to provide a framework and building blocks to enable deployment of scalable service discrimination in the Internet. 
<br />
<br />The differentiated services approach aims to speed deployment by separating the architecture into two major components, one of which is fairly well-understood and the other of which is just beginning to be understood.<br /><br /><b>Domain</b><br />A group of computers and devices on a network that are administered as a unit with common rules and procedures. Within the Internet, domains are defined by the IP address. All devices sharing a common part of the IP address are said to be in the same domain.
<br />
<br />In database technology, domain refers to the description of an attribute's allowed values. The physical description is a set of values the attribute can have, and the semantic, or logical, description is the meaning of the attribute.<br /><br /><b>E-mail</b><br />The transmission of messages over communications networks. Most mainframes, minicomputers, and computer networks have an e-mail system. Most e-mail systems include a rudimentary text editor for composing messages, but many allow you to edit your messages using any editor you want. Sent messages are stored in electronic mailboxes until the recipient fetches them. All online services and Internet Service Providers (ISPs) offer e-mail, and most also support gateways so that you can exchange mail with users of other systems. 
<br />
<br />Although different e-mail systems use different formats, there are some emerging standards that are making it possible for users on all systems to exchange messages. To date, though, the de facto addressing standard is the one used by the Internet system because almost all e-mail systems have an Internet gateway.<br /><br /><b>Ethertype</b><br />Ethertype is a 2 byte code indicating protocol type in an Ethernet packet. ETX: (End of Text) A control character in the DLG. ETX indicates the end of text information in a block.<br /><br /><b>Gateway</b><br />A network device used to translate between two different protocols. Used to interconnect two networks that use incompatible protocols. It is a node on a network that serves as an entrance to another network. In enterprises, the gateway is the computer that routes the traffic from a workstation to the outside network that is serving the Web pages. In homes, the gateway is the ISP that connects the user to the internet. 
<br />
<br />In enterprises, the gateway node often acts as a proxy server and a firewall. The gateway is also associated with both a router, which use headers and forwarding tables to determine where packets are sent, and a switch, which provides the actual path for the packet in and out of the gateway.
<br />
<br />It is also a computer system located on earth that switches data signals and voice signals between satellites and terrestrial networks and an earlier term for router, though now obsolete in this sense as router is commonly used.<br /><br /><b>Host</b><br />Host is a computer system that is accessed by a user working at a remote location. Typically, the term is used when there are two computer systems connected by modems and telephone lines. The system that contains the data is called the host, while the computer at which the user sits is called the remote terminal. 
<br />
<br />Host can refer to a computer that is connected to a TCP/IP network, including the Internet. Each host has a unique IP address. 
<br />
<br />Host can refer to provide the infrastructure for a computer service too. For example, there are many companies that host Web servers. This means that they provide the hardware, software, and communications lines required by the server, but the content on the server may be controlled by someone else.<br /><br /><b>IEEE</b><br />IEEE (Institute of Electrical and Electronics Engineers) is best known for developing standards for the computer and electronics industry, which founded in 1884 as the AIEE, the IEEE was formed in 1963 when AIEE merged with IRE. IEEE is an organization composed of engineers, scientists, and students. The IEEE is best known for developing standards for the computer and electronics industry. In particular, the IEEE 802 standards for local-area networks are widely followed.<br /><br /><b>IP address</b><br />IP address is an identifier for a computer or device on a TCP/IP network. Networks using the TCP/IP protocol route messages based on the IP address of the destination. The format of an IP address is a 32-bit numeric address written as four numbers separated by periods. Each number can be zero to 255. For example, 1.160.10.240 could be an IP address. Within an isolated network, you can assign IP addresses at random as long as each one is unique. However, connecting a private network to the Internet requires using registered IP addresses (called Internet addresses) to avoid duplicates. 
<br />
<br />The four numbers in an IP address are used in different ways to identify a particular network and a host on that network. Four regional Internet registries -- ARIN, RIPE NCC, LACNIC and APNIC -- assign Internet addresses from the following three classes. 
<br />Class A - supports 16 million hosts on each of 126 networks 
<br />Class B - supports 65,000 hosts on each of 16,000 networks 
<br />Class C - supports 254 hosts on each of 2 million networks 
<br />
<br />The number of unassigned Internet addresses is running out, so a new classless scheme called CIDR is gradually replacing the system based on classes A, B, and C and is tied to adoption of IPv6.<br /><br /><b>Internet</b><br />A global network connecting millions of computers. More than 100 countries are linked into exchanges of data, news and opinions. 
<br />
<br />Unlike online services, which are centrally controlled, the Internet is decentralized by design. Each Internet computer, called a host, is independent. Its operators can choose which Internet services to use and which local services to make available to the global Internet community. Remarkably, this anarchy by design works exceedingly well. 
<br />
<br />There are a variety of ways to access the Internet. Most online services, such as America Online, offer access to some Internet services. It is also possible to gain access through a commercial Internet Service Provider (ISP).<br /><br /><b>Internet datagram</b><br />Internet datagram is the unit of data exchanged between a pair of internet modules (includes the internet header).<br /><br /><b>Internet fragment</b><br />Internet fragment is a portion of the data of an internet datagram with an internet header.<br /><br /><b>Network Layer</b><br />In the Open Systems Interconnection (OSI) communications model, the Network layer knows the address of the neighboring nodes in the network, packages output with the correct network address information, selects routes and Quality of Service, and recognizes and forwards to the Transport layer incoming messages for local host domains. Among existing protocol that generally map to the OSI network layer are the Internet Protocol (IP) part of TCP/IP and NetWare IPX/SPX. Both IP Version 4 and IP Version 6 (IPv6) map to the OSI network layer. <br /><br /><b>OSI</b><br />ISO (Open Systems Interconnection) is a worldwide communications that defines a networking framework for implementing protocols in seven layers. Control is passed from one layer to the next, starting at the application layer in one station, proceeding to the bottom layer, over the channel to the next station and back up the hierarchy. 
<br />
<br />At one time, most vendors agreed to support OSI in one form or another, but OSI was too loosely defined and proprietary standards were too entrenched. Except for the OSI-compliant X.400 and X.500 e-mail and directory standards, which are widely used, what was once thought to become the universal communications standard now serves as the teaching model for all other protocols. 
<br />
<br />Most of the functionality in the OSI model exists in all communications systems, although two or three OSI layers may be incorporated into one. 
<br />
<br />OSI is also referred to as the OSI Reference Model or just the OSI Model.<br /><br /><b>Packet</b><br />A packet is the unit of data that is routed between an origin and a destination on the Internet or any other packet-switched network. When any file (e-mail message, HTML file, Graphics Interchange Format file, Uniform Resource Locator request, and so forth) is sent from one place to another on the Internet, the Transmission Control Protocol (TCP) layer of TCP/IP divides the file into "chunks" of an efficient size for routing. Each of these packets is separately numbered and includes the Internet address of the destination. The individual packets for a given file may travel different routes through the Internet. When they have all arrived, they are reassembled into the original file (by the TCP layer at the receiving end). <br /><br /><b>SNMP</b><br />SNMP (Simple Network Management Protocol) is a set of protocols for managing complex networks. The first versions of SNMP were developed in the early 80s. SNMP works by sending messages, called protocol data units (PDUs), to different parts of a network. SNMP-compliant devices, called agents, store data about themselves in Management Information Bases (MIBs) and return this data to the SNMP requesters.<br /><br /><b>TCP</b><br />TCP (Transmission Control Protocol) is one of the main protocols in TCP/IP networks. TCP is one of the main protocols in TCP/IP networks. Whereas the IP protocol deals only with packets, TCP enables two hosts to establish a connection and exchange streams of data. TCP guarantees delivery of data and also guarantees that packets will be delivered in the same order in which they were sent.<br /><br /><b>Web page</b><br />Web page is a document on the World Wide Web. Every Web page is identified by a unique URL (Uniform Resource Locator). <br /><br />			</div>
		  
</section>

<section aria-labelledby="references">
<h2 id="references">References</h2>

		  <div class="legacy-pre" role="region" aria-label="References: preformatted example 1" tabindex="0">
			<b>Related links:</b>
                <a href="https://www.iana.org/assignments/ip-parameters">IP Option Numbers</a>
                <a href="http://www.iana.org/assignments/protocol-numbers">IP Protocol Numbers</a>
                <a href="http://www.iana.org/assignments/dscp-registry">Differentiated Services Field Codepoints</a><hr /><b>RFCs:</b>
[IEN 92] Protocol Options.
[IEN 95] Source Routing.
[IEN 114] PROTOCOL OPTIONS.
[IEN 123] DOD STANDARD INTERNET PROTOCOL.Obsoletes: IEN 26, IEN 28, IEN 41, IEN 44, IEN 54, IEN 80, IEN 111. 
[IEN 186] PROPOSED DCEC IP SPECIFICATION.
[IEN 212] IP - Local Area Network Addressing Issues.
[<a href="https://www.rfc-editor.org/rfc/rfc781.html">RFC 781</a>] A SPECIFICATION OF THE INTERNET PROTOCOL (IP) TIMESTAMP OPTION.
[<a href="https://www.rfc-editor.org/rfc/rfc791.html">RFC 791</a>] Internet Protocol.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc760.html">RFC 760</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc795.html">RFC 795</a>] SERVICE MAPPINGS.
[<a href="https://www.rfc-editor.org/rfc/rfc796.html">RFC 796</a>] ADDRESS MAPPINGS.Obsoletes: IEN 115. 
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
[<a href="https://www.rfc-editor.org/rfc/rfc1042.html">RFC 1042</a>] A Standard for the Transmission of IP Datagrams over IEEE 802 Networks.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc948.html">RFC 948</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1044.html">RFC 1044</a>] Internet Protocol on Network Systems HYPERchannel Protocol Specification.
[<a href="https://www.rfc-editor.org/rfc/rfc1046.html">RFC 1046</a>] A Queuing Algorithm to Provide Type-of-Service for IP Links.
[<a href="https://www.rfc-editor.org/rfc/rfc1055.html">RFC 1055</a>] A NONSTANDARD FOR TRANSMISSION OF IP DATAGRAMS OVER SERIAL LINES: SLIP.
[<a href="https://www.rfc-editor.org/rfc/rfc1070.html">RFC 1070</a>] Use of the Internet as a Subnetwork for Experimentation with the OSI Network Layer.
[<a href="https://www.rfc-editor.org/rfc/rfc1088.html">RFC 1088</a>] A Standard for the Transmission of IP Datagrams over NetBIOS Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1108.html">RFC 1108</a>] U.S. Department of Defense Security Options for the Internet Protocol.Defines IP options 2 and 5. Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1038.html">RFC 1038</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a>] Host Extensions for IP Multicasting.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc988.html">RFC 988</a>, <a href="https://www.rfc-editor.org/rfc/rfc1054.html">RFC 1054</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1122.html">RFC 1122</a>] Requirements for Internet Hosts -- Communication Layers.
[<a href="https://www.rfc-editor.org/rfc/rfc1132.html">RFC 1132</a>] A Standard for the Transmission of 802.2 Packets over IPX Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1141.html">RFC 1141</a>] Incremental Updating of the Internet Checksum.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1071.html">RFC 1071</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1156.html">RFC 1156</a>] Management Information Base for Network Management of TCP/IP-based internets.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1066.html">RFC 1066</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1180.html">RFC 1180</a>] A TCP/IP Tutorial.
[<a href="https://www.rfc-editor.org/rfc/rfc1188.html">RFC 1188</a>] A Proposed Standard for the Transmission of IP Datagrams over FDDI Networks.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1103.html">RFC 1103</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1191.html">RFC 1191</a>] Path MTU Discovery.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1063.html">RFC 1063</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1201.html">RFC 1201</a>] Transmitting IP Traffic over ARCNET Networks.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1051.html">RFC 1051</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1209.html">RFC 1209</a>] The Transmission of IP Datagrams over the SMDS Service.
[<a href="https://www.rfc-editor.org/rfc/rfc1213.html">RFC 1213</a>] Management Information Base for Network Management of TCP/IP-based internets: MIB-II.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1158.html">RFC 1158</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1219.html">RFC 1219</a>] On the Assignment of Subnet Numbers.
[<a href="https://www.rfc-editor.org/rfc/rfc1226.html">RFC 1226</a>] Internet Protocol Encapsulation of AX.25 Frames.
[<a href="https://www.rfc-editor.org/rfc/rfc1234.html">RFC 1234</a>] Tunneling IPX Traffic through IP Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1236.html">RFC 1236</a>] IP to X.121 Address Mapping for DDN.
[<a href="https://www.rfc-editor.org/rfc/rfc1242.html">RFC 1242</a>] Benchmarking Terminology for Network Interconnection Devices.
[<a href="https://www.rfc-editor.org/rfc/rfc1356.html">RFC 1356</a>] Multiprotocol Interconnect on X.25 and ISDN in the Packet Mode.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc877.html">RFC 877</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1365.html">RFC 1365</a>] An IP Address Extension Proposal.
[<a href="https://www.rfc-editor.org/rfc/rfc1375.html">RFC 1375</a>] Suggestion for New Classes of IP Addresses.
[<a href="https://www.rfc-editor.org/rfc/rfc1390.html">RFC 1390</a>] Transmission of IP and ARP over FDDI Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc1393.html">RFC 1393</a>] Traceroute Using an IP Option.
[<a href="https://www.rfc-editor.org/rfc/rfc1454.html">RFC 1454</a>] Comparison of Proposals for Next Version of IP.
[<a href="https://www.rfc-editor.org/rfc/rfc1466.html">RFC 1466</a>] Guidelines for Management of IP Address Space.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1366.html">RFC 1366</a>. 
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
[<a href="https://www.rfc-editor.org/rfc/rfc1812.html">RFC 1812</a>] Requirements for IP Version 4 Routers.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1009.html">RFC 1009</a>, <a href="https://www.rfc-editor.org/rfc/rfc1716.html">RFC 1716</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1814.html">RFC 1814</a>] Unique Addresses are Good.
[<a href="https://www.rfc-editor.org/rfc/rfc1821.html">RFC 1821</a>] Integration of Real-time Services in an IP-ATM Network Architecture.
[<a href="https://www.rfc-editor.org/rfc/rfc1826.html">RFC 1826</a>] IP Authentication Header.
[<a href="https://www.rfc-editor.org/rfc/rfc1827.html">RFC 1827</a>] IP Encapsulating Security Payload (ESP).
[<a href="https://www.rfc-editor.org/rfc/rfc1858.html">RFC 1858</a>] Security Considerations for IP Fragment Filtering.
[<a href="https://www.rfc-editor.org/rfc/rfc1878.html">RFC 1878</a>] Variable Length Subnet Table For IPv4.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1860.html">RFC 1860</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc1917.html">RFC 1917</a>] An Appeal to the Internet Community to Return Unused IP Networks (Prefixes) to the IANA.
[<a href="https://www.rfc-editor.org/rfc/rfc1918.html">RFC 1918</a>] Address Allocation for Private Internets.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1597.html">RFC 1597</a>. 
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
                Updates SNMP MIB iso.org.dod.internet.mgmt.mib-2.icmp (1.3.6.1.2.1.5). Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.ipMIB (1.3.6.1.2.1.48). 
[<a href="https://www.rfc-editor.org/rfc/rfc2022.html">RFC 2022</a>] Support for Multicast over UNI 3.0/3.1 based ATM Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2067.html">RFC 2067</a>] IP over HIPPI.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1374.html">RFC 1374</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2085.html">RFC 2085</a>] HMAC-MD5 IP Authentication with Replay Prevention.
[<a href="https://www.rfc-editor.org/rfc/rfc2096.html">RFC 2096</a>] IP Forwarding Table MIB.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1354.html">RFC 1354</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2101.html">RFC 2101</a>] IPv4 Address Behaviour Today.
[<a href="https://www.rfc-editor.org/rfc/rfc2113.html">RFC 2113</a>] IP Router Alert Option.Defines IP option 20 (Router Alert). 
[<a href="https://www.rfc-editor.org/rfc/rfc2143.html">RFC 2143</a>] Encapsulating IP with the Small Computer System Interface.
[<a href="https://www.rfc-editor.org/rfc/rfc2176.html">RFC 2176</a>] IPv4 over MAPOS Version 1.Describes how IP is encapsulated in MAPOS. 
[<a href="https://www.rfc-editor.org/rfc/rfc2225.html">RFC 2225</a>] Classical IP and ARP over ATM.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1577.html">RFC 1577</a>, <a href="https://www.rfc-editor.org/rfc/rfc1626.html">RFC 1626</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2226.html">RFC 2226</a>] IP Broadcast over ATM Networks.
[<a href="https://www.rfc-editor.org/rfc/rfc2285.html">RFC 2285</a>] Benchmarking Terminology for LAN Switching Devices.
[<a href="https://www.rfc-editor.org/rfc/rfc2336.html">RFC 2336</a>] Classical IP and ARP over ATM to NHRP Transition.
[<a href="https://www.rfc-editor.org/rfc/rfc2344.html">RFC 2344</a>] Reverse Tunneling for Mobile IP.
[<a href="https://www.rfc-editor.org/rfc/rfc2365.html">RFC 2365</a>] Administratively Scoped IP Multicast.
[<a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>] Security Architecture for the Internet Protocol.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1825.html">RFC 1825</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2432.html">RFC 2432</a>] Terminology for IP Multicast Benchmarking.
[<a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>] Definition of the Differentiated Services Field (DS Field) in the IPv4 and IPv6 Headers.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1349.html">RFC 1349</a>, <a href="https://www.rfc-editor.org/rfc/rfc1455.html">RFC 1455</a>. 
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
[<a href="https://www.rfc-editor.org/rfc/rfc2834.html">RFC 2834</a>] ARP and IP Broadcast over HIPPI-800.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1374.html">RFC 1374</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2835.html">RFC 2835</a>] IP and ARP over HIPPI-6400 (GSN).
[<a href="https://www.rfc-editor.org/rfc/rfc2893.html">RFC 2893</a>] Transition Mechanisms for IPv6 Hosts and Routers.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc1933.html">RFC 1933</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc2932.html">RFC 2932</a>] IPv4 Multicast Routing MIB.Defines SNMP MIB iso.org.dod.internet.mgmt.mib-2.ipMRouteStdMIB (1.3.6.1.2.1.83). 
[<a href="https://www.rfc-editor.org/rfc/rfc3021.html">RFC 3021</a>] Using 31-Bit Prefixes on IPv4 Point-to-Point Links.
[<a href="https://www.rfc-editor.org/rfc/rfc3095.html">RFC 3095</a>] RObust Header Compression (ROHC): Framework and four profiles: RTP, UDP, ESP, and uncompressed.
[<a href="https://www.rfc-editor.org/rfc/rfc3128.html">RFC 3128</a>] Protection Against a Variant of the Tiny Fragment Attack.
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc1858.html">RFC 1858</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3142.html">RFC 3142</a>] An IPv6-to-IPv4 Transport Relay Translator.
[<a href="https://www.rfc-editor.org/rfc/rfc3168.html">RFC 3168</a>] The Addition of Explicit Congestion Notification (ECN) to IP.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2481.html">RFC 2481</a>. 
                Updates: <a href="https://www.rfc-editor.org/rfc/rfc793.html">RFC 793</a>, <a href="https://www.rfc-editor.org/rfc/rfc2401.html">RFC 2401</a>, <a href="https://www.rfc-editor.org/rfc/rfc2474.html">RFC 2474</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc3330.html">RFC 3330</a>] Special-Use IPv4 Addresses.
[<a href="https://www.rfc-editor.org/rfc/rfc3393.html">RFC 3393</a>] IP Packet Delay Variation Metric for IP Performance Metrics (IPPM).
[<a href="https://www.rfc-editor.org/rfc/rfc3544.html">RFC 3544</a>] IP Header Compression over PPP.Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc2509.html">RFC 2509</a>. 
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
[<a href="https://www.rfc-editor.org/rfc/rfc3843.html">RFC 3843</a>] RObust Header Compression (ROHC): A Compression Profile for IP.<hr /><b>Obsolete RFCs:</b>
[IEN 111] INTERNET PROTOCOL.
                Obsoleted by: IEN 123. 
[IEN 115] ADDRESS MAPPINGS.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc796.html">RFC 796</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc760.html">RFC 760</a>] DOD STANDARD INTERNET PROTOCOL.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc791.html">RFC 791</a>. Obsoletes: IEN 26, IEN 28, IEN 41, IEN 44, IEN 54, IEN 80, IEN 111, IEN 123. 
[<a href="https://www.rfc-editor.org/rfc/rfc877.html">RFC 877</a>] A Standard for the Transmission of IP Datagrams Over Public Data Networks.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1356.html">RFC 1356</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc948.html">RFC 948</a>] TWO METHODS FOR THE TRANSMISSION OF IP DATAGRAMS OVER IEEE 802.3 NETWORKS.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1042.html">RFC 1042</a>. 
[<a href="https://www.rfc-editor.org/rfc/rfc988.html">RFC 988</a>] Host Extensions for IP Multicasting.
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc1054.html">RFC 1054</a>, <a href="https://www.rfc-editor.org/rfc/rfc1112.html">RFC 1112</a>. Defines IGMP version 0. Obsoletes: <a href="https://www.rfc-editor.org/rfc/rfc966.html">RFC 966</a>. 
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
                Obsoleted by: <a href="https://www.rfc-editor.org/rfc/rfc3544.html">RFC 3544</a>.<hr /><b>Publications:</b>
[ISBN 0201633469] TCP/IP Illustrated, Volume 1 : The Protocols.
[ISBN 020166354X] TCP/IP Illustrated, Volume 2 : The Implementation
                		  </div>
		  
</section>


---
id: protocol-cdp
slug: cdp
name: CDP
expandedName: Cisco Discovery Protocol
origin: historical
provenance:
  source: protocols/protocol_CDP.htm
  sha256: 8e582e704ddf08f20c95e72e8570c9214d56514c851f4c3830cc9e3020d2fe1b
  provider: 'Colasoft Co., Ltd.'
aliases:
  - Cisco Discovery Protocol
layers:
  - Data link Layer
suites:
  - Cisco
summary:
  - label: Protocol
    html: Cisco Discovery Protocol
  - label: Protocol suite
    html: Cisco
  - label: Layer
    html: Data link Layer
  - label: Related protocols
    html: 'SNMP,<br />SNAP'
originalUpdate: '2005-11-07 17:03:54'
rfcs: []
related:
  - protocol-snmp
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
editorialNotes: []
---
<section aria-labelledby="description">
<h2 id="description">Description</h2>

			The Cisco Discovery Protocol (CDP) is a media- and network protocol independent layer 2 protocol that is used to discover information about neighboring network devices. Because CDP operates at the Data Link layer, it doesn't need a network layer protocol, such as IP or IPX, to transfer information. CDP devices send out periodic advertisements to the MAC multicast address 0100.0ccc.cccc, every 60 seconds by default. The holdtime is 180 seconds by default, when exceeded without receiving advertisements the CDP entry is removed from the CDP table.
<br />
<br />To aid in network management, Cisco developed the Cisco Discovery Protocol (CDP). CDP support is provided as part of the Cisco IOS software that runs on many types of Cisco equipment.
<br />
<br />CDP runs on various media that support the SNAP, including LAN, Frame Relay, and ATM media. CDP runs over the data link layer only. Therefore, two systems that support different network-layer protocols can learn about each other.
<br />
<br />When flooded with CDP neighbor announcements, the IOS uses up all it's memory to store the neighbor information. The device is then unable to perform operations that need additional memory such as receiving routing updates and accepting inbound telnet connections.
<br />
<br />Since it is a layer two protocol, these packets (frames) are not routed. The updates are send on
<br />Ethernet to the multicast address 01:00:0C:CC:CC:CC.
<br />
<br />If a Cisco device receives a CDP frame from another device, it copies the contents into internal data structures that can be viewed by the operator using the 'show cdp neighbors' command. The information includes the Device ID, capabilities, platform and sender's port ID. The CDP frames also include a hold timer value to tell the neighbor when he has to discard the information. The maximum values for this timer is 255 seconds (4 minutes, 15 seconds). 
<br />
<br />The internal data structure seems to use the remote device ID as key. When receiving two identical but long device IDs, some IOS versions are unable to identify them as identical and stores both of them as independent records. 
<br />
<br />When flooding a network segment with large CDP frames containing a random device ID and coming from a random data link address, different IOS versions react differently. The range of possible reactions includes:
<br /><ul><li>Reboot after 3 to 5 frames are received<br /></li>
<li>Completely stop working after some thousands of frames<br /></li>
<li>Use all available memory to store CDP neighbor information until the hold timer expires</li></ul>
<br />
<br />While the memory of the device is completely filled with CDP information, it is unable to perform other operations that need additional memory allocated. This includes accepting dynamic routing updates or new inbound telnet(1) sessions.
<br />
<br />If an operator on the device console tries to debug the CDP traffic using the command 'debug cdp packets', all tested devices crashed.
<br />
<br />Interesting is the reaction of the command line 'shell' when flooding the device as seen in the example. At least the help doesn't work anymore. It is not known if this behavior can be used for further exploitation of the device.
<br /><hr />
<br /><b>Technical Details</b>
<br />CDP uses SNAP frames at the data layer. Media that allow this: all LAN media, Frame Relay, and ATM. 
<br />The CDP information is sent periodically to a multicast address. The default period is 60 seconds. Using multicast is kinder and gentler than broadcasting it. It gives non-participants a chance to ignore the traffic, depending on how smart their NIC cards and drivers are. 
<br />
<br />The CDP announcement contains one or more addresses which can receive SNMP messages. There is also holdtime information in the announcement as well. This means that the information will be discarded if not refreshed before the holdtime expires. 
<br />
<br /><b>Configuring CDP</b>
<br />Configuring CDP is easy: it's on by default on routers and interfaces (despite what some versions of the documentation may say). 
<br /><ul><li>no cdp run: disables CDP globally<br /></li>
<li>no cdp enable: disables CDP on an interface (interface command)<br /><br /></li> 

<li>Other configuration commands: 
<br /></li><li><ul><li>cdp timer seconds: interval between CDP advertisements<br /></li>
<li>cdp holdtime seconds: holdtime before information should be discarded</li></ul><br /><br /></li>

<li>Some EXEC commands related to CDP: 
<br /></li><li><ul><li>clear cdp counters: reset traffic counters<br /></li>
<li>clear cdp table: purge the table of neighbor information</li></ul><br /><br /></li>

<li><b>Commands</b><br /></li>
<li>CDPv2 show commands can provide detailed output on VLAN Trunking Protocol (VTP) management domain and duplex modes of neighbor devices, CDP-related counters, and VLAN IDs of connecting ports. The following table lists the CDP commands:
<br /></li><li><div><div class="table-scroll" role="region" aria-label="Description table 1" tabindex="0"><table><caption>Description: preserved table 1</caption><tbody><tr><td>Command</td><td>Purpose</td></tr><tr><td>clear cdp counters</td><td>Resets the traffic counters to zero.</td></tr><tr><td>clear cdp table</td><td>Deletes the CDP table of information about neighbors.</td></tr><tr><td>show cdp</td><td>Displays the interval between transmissions of CDP advertisements, the number of seconds the CDP advertisement is valid for a given port, and the version of the advertisement.</td></tr><tr><td>show cdp entry entry-name [protocol | version]</td><td>Displays information about a specific neighbor. Display can be limited to protocol or version information.</td></tr><tr><td>show cdp interface [type number]</td><td>Displays information about interfaces on which CDP is enabled.</td></tr><tr><td>show cdp neighbors [type number] [detail]</td><td>Displays the type of device that has been discovered, the name of the device, the number and type of the local interface (port), the number of seconds the CDP advertisement is valid for the port, the device type, the device product number, and the port ID. Issuing the detail keyword displays information on the native VLAN ID, the duplex mode, and the VTP domain name associated with neighbor devices.</td></tr><tr><td>show cdp traffic</td><td>Displays CDP counters, including the number of packets sent and received and checksum errors.</td></tr><tr><td>show debugging</td><td>Displays information about the types of debugging that are enabled for your router. See the Cisco IOS Debug Command Reference for more information about CDP debug commands.</td></tr></tbody></table></div></div><br /><br /></li>

<li><b>CDPv2</b><br /></li>
<li>CDP Version-2 (CDPv2), the most recent release of the protocol, provides more intelligent device tracking features. These features include a reporting mechanism which allows for more rapid error tracking, thereby reducing costly downtime. Reported error messages can be sent to the console or to a logging server, and cover instances of unmatching native VLAN IDs (IEEE 802.1Q) on connecting ports, and unmatching port duplex states between connecting devices.
<br /><br /><br /></li>

		    </ul>
</section>

<section aria-labelledby="examples">
<h2 id="examples">Examples</h2>

			<pre class="legacy-pre" role="region" aria-label="Examples: preformatted example 1" tabindex="0">To send CDP messages, the cdp sender tool from the Phenoelit IRPAS package is use
(http://www.phenoelit.de/irpas/). The command line to send maximum sized cdp frames 
with random data link addresses and device names is:

linuxbox# ./cdp -i eth0 -m0 -n 100000 -l 1480 -r -v

Be careful when running this! All vulnerable Cisco devices in the data link multicast 
domain will be affected (read: all Cisco connected to your Ethernet hub/switch).

Reaction of a Cisco 1603 / IOS 11.2(4):

          radio#
          %SYS-2-MALLOCFAIL: Memory allocation of 1480 bytes failed from 
          0x81B3BE6, pool Processor, alignment 0
          -Process= "CDP Protocol", ipl= 0, pid= 9
          -Traceback= 80ABDCC 80ACF46 81B3BEE 81B3B72 81B276A 81B224C
          radio# 
          %SYS-2-MALLOCFAIL: Memory allocation of 96 bytes failed from 
          0x81B26D2, pool Processor, alignment 0
          -Process= "CDP Protocol", ipl= 0, pid= 9
          -Traceback= 80ABDCC 80ACF46 81B26DA 81B224C
          %SYS-2-MALLOCFAIL: Memory allocation of 96 bytes failed from 
          0x81B26D2, pool Processor, alignment 0
          -Process= "CDP Protocol", ipl= 0, pid= 9
          -Traceback= 80ABDCC 80ACF46 81B26DA 81B224C
          radio#sh ?
          % Unrecognized command
          radio#show ?
          % Unrecognized command
          radio#

Reaction after 'debug cdp packets':

          %Log packet overrun, potential memory corruption, PC 0x81B2720, format:
          %s
          %Log packet overrun, potential memory corruption, PC 0x81B2720, format:
          %s
          ....[lots of these].....
          %Log packet overrun, potential memory corruption, PC 0x81B2720, format:
          %s
          %Log packet overrun, potential memory corruption, PC 0x81B2720, format:
          %s

*** BUS ERROR ***
access address = 0x5f227998
program counter = 0x80ad45a
status register = 0x2700
vbr at time of exception = 0x4000000
special status word = 0x0045
faulted cycle was a longword read

monitor: command "boot" aborted due to exception

System Bootstrap, Version .....
Copyright (c) 1994-1996 by cisco Systems, Inc.
C1600 processor with 2048 Kbytes of main memory

program load complete, entry point: 0x4018060, size: 0x1da950</pre>	  
</section>

<section aria-labelledby="relations">
<h2 id="relations">Protocol relations</h2>

		  <blockquote>
		  ■  Parent layer<br />
		  ■  Child layer
		<div><div class="table-scroll" role="region" aria-label="Protocol relations table 1" tabindex="0"><table><caption>Protocol relations: preserved table 1</caption>
<tbody><tr>
<td class="MapParent" aria-label="Parent layer protocols">Ethernet SNAP<img src="/supporting/images/hline.gif" alt="" /><br /></td><td><img src="/supporting/images/hline.gif" alt="" /></td><td><div>CDP</div></td></tr></tbody></table></div></div></blockquote>
</section>

<section aria-labelledby="glossary">
<h2 id="glossary">Local glossary</h2>

			<div>
			<b>ATM</b><br />Asynchronous Transfer Mode (ATM) is a network technology based on transferring data in cells or packets of a fixed size. The cell used with ATM is relatively small compared to units used with older technologies. The small, constant cell size allows ATM equipment to transmit video, audio, and computer data over the same network, and assure that no single type of data hogs the line.<br /><br /><b>IOS</b><br />Internet over Satellit (IOS) technology allows a user to access the Internet via a satellite that orbits the earth. A satellite is placed at a static point above the earth's surface. The satellite in a fixed position, also referred to as geostationary or geosynchronous, is able to maintain a reliable connection to the antennas on the earth because the satellite orbits the earth at the exact speed of the earth's rotation. Because of the enormous distances signals must travel from the earth up to the satellite and back again, IOS is slightly slower than high-speed terrestrial connections over copper or fiber optic cables.<br /><br /><b>IPX</b><br />IPX(Internetwork Packet Exchange), a networking protocol used by the Novell NetWare operating systems. Like UDP/IP, IPX is a datagram protocol used for connectionless communications. Higher-level protocols, such as SPX and NCP, are used for additional error recovery services. <br /><br /><b>LAN</b><br />Local-area network (LAN) is a computer network that spans a relatively small area. Most LANs are confined to a single building or group of buildings. However, one LAN can be connected to other LANs over any distance via telephone lines and radio waves. A system of LANs connected in this way is called a wide-area network (WAN). 
<br />
<br />Most LANs connect workstations and personal computers. Each node (individual computer ) in a LAN has its own CPU with which it executes programs, but it also is able to access data and devices anywhere on the LAN. This means that many users can share expensive devices, such as laser printers, as well as data. Users can also use the LAN to communicate with each other, by sending e-mail or engaging in chat sessions.<br /><br /><b>SNAP</b><br />SubNetwork Access Protocol (SNAP) is used for encapsulating IP datagrams and ARP requests and replies on IEEE 802 networks. IP datagrams are sent on IEEE 802 networks encapsulated within the 802.2 LLC and SNAP data link layers and the 802.3, 802.4 or 802.5 physical network layers. The SNAP header follows the LLC header and contains an organization code indicating that the following 16 bits specify the EtherType code.<br /><br /><b>SNMP</b><br />SNMP (Simple Network Management Protocol) is a set of protocols for managing complex networks. The first versions of SNMP were developed in the early 80s. SNMP works by sending messages, called protocol data units (PDUs), to different parts of a network. SNMP-compliant devices, called agents, store data about themselves in Management Information Bases (MIBs) and return this data to the SNMP requesters.<br /><br /><b>VLAN</b><br />Virtual LAN (VLAN) is a network of computers that behave as if they are connected to the same wire even though they may actually be physically located on different segments of a LAN. VLANs are configured through software rather than hardware, which makes them extremely flexible. One of the biggest advantages of VLANs is that when a computer is physically moved to another location, it can stay on the same VLAN without any hardware reconfiguration.<br /><br />			</div>
		  
</section>


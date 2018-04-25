# Bare-Metal-Agentless-Introspection
## Agentless, out-of-box inspection of bare metal systems using M2 (Malleable Metal, formerly Bare Metal Imaging)

The End-to-End final application demo can be found [here](https://www.youtube.com/watch?v=IRjz0__lJ2c).

** **

### Project Overview
Bare-metal cloud is a public cloud service in which the customer rents hardware resources from a remote service provider. In such scenarios it is important to inform customers about vulnerabilities within the system in time, so that they can take corrective measures. These vulnerabilities could either be inherited from the base image or added by the user itself.

#### Problem Statement
Security Agents running on a node consume Bare Metal resources that affects the performance of the entire system. It also has an impact on other running applications on the system and can cause data noise. 
#### Proposed Solution
An Agentless system that would run introspection out of band and will have minimal impact on the running system. This system will mount node images on another Virtual Machine and perform introspection. Using this system, we can mount multiple Bare Metal images which makes it scalable. 
** **
### Vision and Goal of The Project
* To build an end-to-end agentless introspection system for Bare Metal Cloud Systems.
* To extend M2 API to implement _bmi introspect_ command that can provide vulnerability report for a particular image.

### Users/Personas of The Project
A user in the Bare Metal Cloud environment, with access to M2 services, can invoke an introspection on a node that he/she has access to and receive a vulnerability report for that node. The user will have access to a simple user interface which will list all the nodes allocated to his/her project. Along with such users, the MOC admin with access rights to M2 and projects allocated within M2 can also run introspection on nodes. The admin can use a CLI command to run introspection on any node for a project.

### Scope and Features of The Project
* Provides a command line operation that extends the M2 API for MOC admins.
  * _bmi introspect_ command takes in two parameters:
    1. Project name
    2. Node name (Must be one of the nodes allocated to the above Project)
* Provides a simple user interface for users.
  * After logging, a user can see a list of all nodes allocated to his/her project
  * A simple click on the node invokes the introspection for that node
* Introspection on a node:
  * Creates a snapshot of the node that is later mounted on another system
  * Crawling on the image generates a frame
  * Security Check is done on the generated frame and a report is sent back to the user

### Solution Concept

1. __M2 Services:__ Our system is based on M2 and leverages the services provided by M2 such as node provisioning and snap creation.
2. __Ceph:__ We use Ceph as our distributed image database. It stores all the golden images as well as snapshots of those images.
3. __Crawler:__ We leveraged the Agentless System Crawler from IBM that can generate frames by running on a mounted image.
4. __Vulnerability Detection Module:__ We built a Vulnerability Detection module that takes the generated frame from Agentless System Crawler as an input and creates a vulnerability report.

#### Agentless Introspection System Architecture
![picture alt](https://github.com/BU-NU-CLOUD-SP18/Bare-Metal-Agentless-Introspection/blob/master/Architecture_Agentless.jpg "Title is optional")

#### Workflow:
* A user can access the system through either User Interface or Command Line Interface, if he/she has access. The user invokes an introspection by specifying the project and node.
* Picasso is the RESTful interface of M2 and receives requests from either UI or CLI and forwards it to Einstein.
* Einstein is a service of M2 that is responsible for all the computations and performing operations in the back end.
* Once Einstein receives the introspection request from Picasso, it triggers a __bmi snap__ command of M2. This command creates a snapshot of the provided node and stores the copy in Ceph.
* Einstein then invokes a map and mount function, which maps the image to a system and then mounts it there.
* The Agentless System Crawler receives the mount point as a parameter and runs on the mounted image. It generates a Frame that contains all the metadata information of the OS running on the node along with package information of the system.
* A security check is performed on this generated frame by passing it to our Vulnerability Detection module. 
* The Vulnerability Detection module contains an in-memory database that has the security notices of all the vulnerable packages, obtained from public repositories like CVE or Ubuntu Security Notices. 
* The module compares the packages from the Frame to the database and generates a Vulnerability Report that contains the information about all the vulnerable packages within the system along with the severity of security threats for each package. It also contains information about the OS and the total number of packages within the system.
* This vulnerability report is then sent back to the user through either UI or CLI.

### Modified Elements

To implement our system, we were required to modify M2 services. We extended the M2 API to add the functionality of introspection of a node. 
  * We modified the CLI of M2 to add the __bmi introspect__ command.
  * We modified the Picasso service to add RESTful support to the command. This is accessed by both the CLI and the UI.
  * We implemented the functionality to Map and Mount an image from Ceph to another system in Einstein. We also integrated the Agentless System Crawler and our Vulnerability Detection module with Einstein service.

# Mihir Add Performance analysis also here. Refer professor's sample read me.

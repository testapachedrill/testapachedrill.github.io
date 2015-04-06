---
title: "Step 1. Install the MapR Drill ODBC Driver on Windows"
parent: "Using the MapR ODBC Driver on Windows"
previous: "/docs/using-the-mapr-odbc-driver-on-windows"
next: "/docs/step-2-configure-odbc-connections-to-drill-data-sources"
---
The MapR Drill ODBC Driver installer is available for 32-bit and 64-bit
applications. Both versions of the driver can be installed on a 64-bit
machine.

##  System Requirements

Each computer where you install the driver must meet the following system
requirements:

  * One of the following operating systems (32- and 64-bit editions are supported):
    * Windows® Vista
    * Windows® 7 Professional
    * Windows® Server 2008 R2
  * .NET Framework 2.0 is required to run the Drill Explorer application.
  * 60 MB of available disk space
  * The client must be able to resolve the actual hostname of the Drill node(s) with the IP(s). Verify that a DNS entry was created on the client machine for the Drill node(s). If not, create the following entry for the Drill node(s) in the `%WINDIR%\system32\drivers\etc\hosts` file:
    
    `<drill-machine-IP> <drill-machine-hostname>`  
    Example: `127.0.1.1 apachedemo`

To install the driver, you need Administrator privileges on the computer.

## Installing the Driver

  1. Download the installer that corresponds to the bitness of the client application from which you want to create an ODBC connection:
     * [MapRDrillODBC32.msi](http://package.mapr.com/tools/MapR-ODBC/MapR_Drill/MapRDrill_odbc/MapRDrillODBC32.msi) (32-bit)
     * [MapRDrillODBC64.msi](http://package.mapr.com/tools/MapR-ODBC/MapR_Drill/MapRDrill_odbc/MapRDrillODBC64.msi) (64-bit)
  2. Double-click the installer from the location where you downloaded it.
  3. Click **Next.**
  4. Select the check box to accept the terms of the License Agreement and click **Next**.
  5. Verify or change the install location. Then, click **Next**.
  6. Click **Install**.
  7. When the installation completes, click **Finish**.
  8. To verify the installation, click **Start > All Programs > MapR Drill ODBC Driver 1.0 (32|64-bit) > (32|64-bit) ODBC Administrator**. Then, click the **Drivers** tab and verify that the MapR Drill ODBC Driver appears in the list of drivers that are installed on the computer.

## The Tableau Data-connection Customization (TDC) File

The MapR Drill ODBC Driver includes a file named `MapRDrillODBC.TDC`. The TDC
file includes customizations that improve ODBC configuration and performance
when using Tableau.

If you install Tableau after you install the MapR Drill ODBC driver, you must
install the Tableau TDC FIle. When Tableau is already installed on the
machine, the TDC file is installed automatically with the MapR Drill ODBC
driver.

**To install the MapRDrillODBC.TDC file manually:**

  1. Click **Start > All Programs > MapR Drill ODBC Driver <version> (32|64-bit) > Install Tableau TDC File**. 
  2. When the installation completes, press any key to continue.   
For example, you can press the SPACEBAR key.

#### What's Next? Go to [Step 2. Configure ODBC Connections to Drill Data Sources](/docs/step-2-configure-odbc-connections-to-drill-data-sources).


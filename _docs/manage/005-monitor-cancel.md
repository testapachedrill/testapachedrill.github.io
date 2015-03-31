---
title: "Monitoring and Canceling Queries in the Drill Web UI"
parent: "Manage Drill"
---
You can monitor and cancel queries from the Drill Web UI. To access the Drill
Web UI, the Drillbit process must be running on the Drill node that you use to
access the Drill Web UI.

To monitor or cancel a query from the Drill Web UI, complete the following
steps:

  1. Navigate to the Drill Web UI at `<drill_node_ip_address>:8047.`  
When you access the Drill Web UI, you see some general information about Drill
running in your cluster, such as the nodes running the Drillbit process, the
various ports Drill is using, and the amount of direct memory assigned to
Drill.  
![drill query flow](/docs/img/7.png)

  2. Select **Profiles** in the toolbar. A list of running and completed queries appears. Drill assigns a query ID to each query and lists the Foreman node. The Foreman is the Drillbit node that receives the query from the client or application. The Foreman drives the entire query.
![drill query flow](/docs/img/51.png)  

  3. Click the **Query ID** for the query that you want to monitor or cancel. The Query and Planning window appears.  
![drill query flow](/docs/img/4.png)

  4. Select **Edit Query**.
  5. Click **Cancel query **to cancel the** query. The following message appears:
  ![drill query flow](/docs/img/46.png)  

  6. Optionally, you can re-run the query to see a query summary in this window.


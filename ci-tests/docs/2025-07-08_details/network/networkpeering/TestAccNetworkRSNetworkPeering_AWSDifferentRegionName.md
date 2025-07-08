# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 7 minutes
```
2025-07-01T08:45:58.4587692Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-01T08:45:58.4589764Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-01T08:45:58.4595019Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (450.00s)
```
### 2025-07-02
#### PASS 3 minutes
```
2025-07-02T00:41:12.3573175Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-02T00:41:12.3576708Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-02T00:41:12.3586654Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (207.56s)
```
### 2025-07-03
#### PASS 3 minutes
```
2025-07-03T00:41:46.0947942Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-03T00:41:46.0949696Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-03T00:41:46.0955967Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (216.58s)
```
### 2025-07-04
#### PASS 3 minutes
```
2025-07-04T00:41:12.9182733Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-04T00:41:12.9185086Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-04T00:41:12.9190022Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (217.69s)
```
### 2025-07-05
#### PASS 3 minutes
```
2025-07-05T00:40:18.8597171Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-05T00:40:18.8599310Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-05T00:40:18.8604918Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (217.61s)
```
### 2025-07-06
#### FAIL 4 minutes
```
2025-07-06T00:44:46.6247702Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6249960Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6379200Z === NAME  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6380616Z     resource_network_peering_test.go:180: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6381499Z         
2025-07-06T00:44:46.6382207Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6382816Z         
2025-07-06T00:44:46.6383408Z           with mongodbatlas_project.my_project,
2025-07-06T00:44:46.6384751Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-06T00:44:46.6385834Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-06T00:44:46.6386410Z         
2025-07-06T00:44:46.6387235Z         error getting project (6869c4077267b5775b682fe7): error getting project's
2025-07-06T00:44:46.6388081Z         limits (6869c4077267b5775b682fe7):
2025-07-06T00:44:46.6389130Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4077267b5775b682fe7/limits
2025-07-06T00:44:46.6390355Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6391484Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6392217Z         BadRequestDetail: 
2025-07-06T00:44:46.6394822Z --- FAIL: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (252.03s)
```
### 2025-07-07
#### PASS 3 minutes
```
2025-07-07T00:43:51.4393927Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-07T00:43:51.4396707Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-07T00:43:51.4404270Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (216.94s)
```
### 2025-07-08
#### PASS 3 minutes
```
2025-07-08T00:41:50.6678361Z === RUN   TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-08T00:41:50.6680762Z === CONT  TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-08T00:41:50.6686302Z --- PASS: TestAccNetworkRSNetworkPeering_AWSDifferentRegionName (230.01s)
```
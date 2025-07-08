# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 3 minutes
```
2025-07-01T08:45:58.4583457Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-01T08:45:58.4590154Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-01T08:45:58.4591287Z --- PASS: TestAccNetworkNetworkPeering_basicAWS (200.66s)
```
### 2025-07-02
#### PASS 2 minutes
```
2025-07-02T00:41:12.3565651Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-02T00:41:12.3577407Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-02T00:41:12.3584238Z --- PASS: TestAccNetworkNetworkPeering_basicAWS (168.06s)
```
### 2025-07-03
#### PASS 2 minutes
```
2025-07-03T00:41:46.0943408Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-03T00:41:46.0950449Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-03T00:41:46.0954983Z --- PASS: TestAccNetworkNetworkPeering_basicAWS (176.95s)
```
### 2025-07-04
#### PASS 2 minutes
```
2025-07-04T00:41:12.9178381Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-04T00:41:12.9184674Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-04T00:41:12.9188965Z --- PASS: TestAccNetworkNetworkPeering_basicAWS (178.12s)
```
### 2025-07-05
#### PASS 2 minutes
```
2025-07-05T00:40:18.8592956Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-05T00:40:18.8599698Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-05T00:40:18.8603534Z --- PASS: TestAccNetworkNetworkPeering_basicAWS (167.63s)
```
### 2025-07-06
#### FAIL 3 minutes
```
2025-07-06T00:44:46.6240028Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6251282Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6341988Z === NAME  TestAccNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6343263Z     resource_network_peering_test.go:26: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6344288Z         
2025-07-06T00:44:46.6345054Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6345665Z         
2025-07-06T00:44:46.6346258Z           with mongodbatlas_project.my_project,
2025-07-06T00:44:46.6347424Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "my_project":
2025-07-06T00:44:46.6348520Z           12: 	resource "mongodbatlas_project" "my_project" {
2025-07-06T00:44:46.6349091Z         
2025-07-06T00:44:46.6349918Z         error getting project (6869c407690ae45e168bd2ab): error getting project's
2025-07-06T00:44:46.6350758Z         limits (6869c407690ae45e168bd2ab):
2025-07-06T00:44:46.6351893Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c407690ae45e168bd2ab/limits
2025-07-06T00:44:46.6353319Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6354582Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6355320Z         BadRequestDetail: 
2025-07-06T00:44:46.6378356Z    test_name=TestAccNetworkRSNetworkPeering_AWSDifferentRegionName
2025-07-06T00:44:46.6392797Z --- FAIL: TestAccNetworkNetworkPeering_basicAWS (200.68s)
```
### 2025-07-07
#### PASS 2 minutes
```
2025-07-07T00:43:51.4389075Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-07T00:43:51.4397253Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-07T00:43:51.4401390Z --- PASS: TestAccNetworkNetworkPeering_basicAWS (168.78s)
```
### 2025-07-08
#### PASS 2 minutes
```
2025-07-08T00:41:50.6673717Z === RUN   TestAccNetworkNetworkPeering_basicAWS
2025-07-08T00:41:50.6680362Z === CONT  TestAccNetworkNetworkPeering_basicAWS
2025-07-08T00:41:50.6684715Z --- PASS: TestAccNetworkNetworkPeering_basicAWS (170.13s)
```
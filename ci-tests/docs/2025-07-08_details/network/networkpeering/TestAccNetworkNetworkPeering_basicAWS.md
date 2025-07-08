# network/networkpeering/TestAccNetworkNetworkPeering_basicAWS Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 2 minutes
### 2025-07-03
#### PASS 2 minutes
### 2025-07-04
#### PASS 2 minutes
### 2025-07-05
#### PASS 2 minutes
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
### 2025-07-08
#### PASS 2 minutes
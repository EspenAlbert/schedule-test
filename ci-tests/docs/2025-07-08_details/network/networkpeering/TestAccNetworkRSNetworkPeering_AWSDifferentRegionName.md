# network/networkpeering/TestAccNetworkRSNetworkPeering_AWSDifferentRegionName Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 3 minutes
### 2025-07-03
#### PASS 3 minutes
### 2025-07-04
#### PASS 3 minutes
### 2025-07-05
#### PASS 3 minutes
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
### 2025-07-08
#### PASS 3 minutes
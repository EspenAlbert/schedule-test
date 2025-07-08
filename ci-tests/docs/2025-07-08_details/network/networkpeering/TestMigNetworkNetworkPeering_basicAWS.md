# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 2 minutes
### 2025-07-03
#### PASS 2 minutes
### 2025-07-04
#### PASS 3 minutes
### 2025-07-05
#### PASS 2 minutes
### 2025-07-06
#### FAIL 36 seconds
```
2025-07-06T00:44:46.6238782Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6249244Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6276265Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-07-06T00:44:46.6277356Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:44:46.6278186Z         
2025-07-06T00:44:46.6278898Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6279495Z         
2025-07-06T00:44:46.6280134Z           with mongodbatlas_project.my_project,
2025-07-06T00:44:46.6281323Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-07-06T00:44:46.6282392Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-07-06T00:44:46.6282953Z         
2025-07-06T00:44:46.6283778Z         error getting project (6869c4087267b5775b68310d): error getting project's
2025-07-06T00:44:46.6284761Z         limits (6869c4087267b5775b68310d):
2025-07-06T00:44:46.6285811Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4087267b5775b68310d/limits
2025-07-06T00:44:46.6287045Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6288117Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6288845Z         BadRequestDetail: 
2025-07-06T00:44:46.6289430Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (36.12s)
```
### 2025-07-07
#### PASS 2 minutes
### 2025-07-08
#### PASS 2 minutes
# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 3 minutes
```
2025-07-01T08:45:58.4582729Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-01T08:45:58.4588567Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-01T08:45:58.4590533Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (195.06s)
```
### 2025-07-02
#### PASS 2 minutes
```
2025-07-02T00:41:12.3564438Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-02T00:41:12.3574677Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-02T00:41:12.3584971Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (171.38s)
```
### 2025-07-03
#### PASS 2 minutes
```
2025-07-03T00:41:46.0942687Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-03T00:41:46.0948864Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-03T00:41:46.0954561Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (173.73s)
```
### 2025-07-04
#### PASS 3 minutes
```
2025-07-04T00:41:12.9177687Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-04T00:41:12.9183586Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-04T00:41:12.9189545Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (183.07s)
```
### 2025-07-05
#### PASS 2 minutes
```
2025-07-05T00:40:18.8592263Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-05T00:40:18.8598147Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-05T00:40:18.8603954Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (172.27s)
```
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
```
2025-07-07T00:43:51.4388280Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-07T00:43:51.4394782Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-07T00:43:51.4401878Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (171.97s)
```
### 2025-07-08
#### PASS 2 minutes
```
2025-07-08T00:41:50.6672920Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-08T00:41:50.6679240Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-08T00:41:50.6685135Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (178.05s)
```
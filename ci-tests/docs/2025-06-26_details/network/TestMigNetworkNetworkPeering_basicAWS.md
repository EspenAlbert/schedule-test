# network/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 3 minutes
```
2025-06-20T00:41:01.7695684Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-20T00:41:01.7706283Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-20T00:41:01.7716132Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (212.58s)
```
### 2025-06-21
#### PASS 2 minutes
```
2025-06-21T00:41:03.3959544Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-21T00:41:03.3970660Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-21T00:41:03.3973911Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (176.67s)
```
### 2025-06-22
#### FAIL 35 seconds
```
2025-06-22T00:44:14.8815509Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-22T00:44:14.8826002Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-22T00:44:14.8881049Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-06-22T00:44:14.8882134Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:44:14.8882946Z         
2025-06-22T00:44:14.8883637Z         Error: error when getting project properties after create
2025-06-22T00:44:14.8884423Z         
2025-06-22T00:44:14.8885008Z           with mongodbatlas_project.my_project,
2025-06-22T00:44:14.8886151Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-06-22T00:44:14.8887203Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-06-22T00:44:14.8887763Z         
2025-06-22T00:44:14.8888584Z         error getting project (68574ef1af7a0954e84adeb9): error getting project's
2025-06-22T00:44:14.8889428Z         limits (68574ef1af7a0954e84adeb9):
2025-06-22T00:44:14.8890459Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef1af7a0954e84adeb9/limits
2025-06-22T00:44:14.8891677Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:44:14.8892733Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:44:14.8893452Z         BadRequestDetail: 
2025-06-22T00:44:14.8894029Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (35.09s)
```
### 2025-06-23
#### PASS 2 minutes
```
2025-06-23T00:43:34.5890500Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-23T00:43:34.5896976Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-23T00:43:34.5900334Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (177.15s)
```
### 2025-06-24
#### PASS 3 minutes
```
2025-06-24T00:41:41.0030290Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-24T00:41:41.0040915Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-24T00:41:41.0045796Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (183.83s)
```
### 2025-06-25
#### PASS 3 minutes
```
2025-06-25T00:42:01.3156627Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-25T00:42:01.3164518Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-25T00:42:01.3168381Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (223.21s)
```
### 2025-06-26
#### PASS 3 minutes
```
2025-06-26T00:41:55.7509184Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-06-26T00:41:55.7519396Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-06-26T00:41:55.7530015Z --- PASS: TestMigNetworkNetworkPeering_basicAWS (183.15s)
```
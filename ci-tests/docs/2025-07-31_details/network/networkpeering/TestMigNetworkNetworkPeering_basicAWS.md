# network/networkpeering/TestMigNetworkNetworkPeering_basicAWS Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4087267b5775b68310d/limits | qa | flaky_500 | 36.01s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafdfd583001f9eeb2e2/limits | qa | flaky_500 | 35.09s
[2025-07-14 00:56](#error-2025-07-14t0056420000) |  | dev |  | 1536.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 2 minutes
- 2025-07-03 PASS 2 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 2 minutes
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
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

- 2025-07-07 PASS 2 minutes
- 2025-07-08 PASS 2 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 2 minutes
  - FAIL 35 seconds

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8455855Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-10T13:19:33.8462792Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-10T13:19:33.8480301Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-07-10T13:19:33.8481190Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:19:33.8481675Z         
2025-07-10T13:19:33.8482087Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8482534Z         
2025-07-10T13:19:33.8482871Z           with mongodbatlas_project.my_project,
2025-07-10T13:19:33.8483523Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "my_project":
2025-07-10T13:19:33.8484130Z           14: 	resource "mongodbatlas_project" "my_project" {
2025-07-10T13:19:33.8484467Z         
2025-07-10T13:19:33.8485017Z         error getting project (686fbafdfd583001f9eeb2e2): error getting project's
2025-07-10T13:19:33.8485504Z         limits (686fbafdfd583001f9eeb2e2):
2025-07-10T13:19:33.8486099Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafdfd583001f9eeb2e2/limits
2025-07-10T13:19:33.8486788Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8487385Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8487808Z         BadRequestDetail: 
2025-07-10T13:19:33.8488148Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (35.89s)
```

- 2025-07-11 PASS 2 minutes
- 2025-07-12 PASS 2 minutes
- 2025-07-13 PASS 3 minutes
- 2025-07-14

### Error 2025-07-14T00:56:42+00:00
```
2025-07-14T00:56:42.4082355Z === RUN   TestMigNetworkNetworkPeering_basicAWS
2025-07-14T00:56:42.4089772Z === CONT  TestMigNetworkNetworkPeering_basicAWS
2025-07-14T00:56:42.4158082Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-07-14T00:56:42.4158792Z     resource_network_peering_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-07-14T00:56:42.4159280Z         
2025-07-14T00:56:42.4159816Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-07-14T00:56:42.4160248Z         
2025-07-14T00:56:42.4160593Z           with mongodbatlas_network_peering.test,
2025-07-14T00:56:42.4161260Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_network_peering" "test":
2025-07-14T00:56:42.4161874Z           25: 	resource "mongodbatlas_network_peering" "test" {
2025-07-14T00:56:42.4162202Z         
2025-07-14T00:56:42.4214701Z === NAME  TestMigNetworkNetworkPeering_basicAWS
2025-07-14T00:56:42.4215627Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T00:56:42.4216100Z         
2025-07-14T00:56:42.4216795Z         Error: error deleting MongoDB Network Peering Container (68744fd152cba864e5f1062a): couldn't find resource (21 retries)
2025-07-14T00:56:42.4217326Z         
2025-07-14T00:56:42.4217621Z --- FAIL: TestMigNetworkNetworkPeering_basicAWS (1536.78s)
```

- 2025-07-15 PASS 2 minutes
- 2025-07-16 PASS 3 minutes
- 2025-07-17 PASS 2 minutes
- 2025-07-18 PASS 3 minutes
- 2025-07-19 PASS 3 minutes
- 2025-07-20 PASS 3 minutes
- 2025-07-21 PASS 2 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-07-24 PASS 3 minutes
- 2025-07-25 PASS 3 minutes
- 2025-07-26 PASS 2 minutes
- 2025-07-27 PASS 3 minutes
- 2025-07-28 PASS 2 minutes
- 2025-07-29 PASS 2 minutes
- 2025-07-30 PASS 2 minutes
- 2025-07-31 PASS 3 minutes
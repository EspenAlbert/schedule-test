# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 5)
Success rate: 87.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 00:33](#error-2025-08-10t0033040000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8c2dacc1950586dabcc/limits | qa | flaky_500 | 1552.08s
[2025-08-17 00:31](#error-2025-08-17t0031120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d2aafa9a76ca8bb5f4/limits | qa | flaky_500 | 1887.04s
[2025-08-24 00:30](#error-2025-08-24t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2e4192cd1cc589c503/limits | qa | flaky_500 | 936.03s
[2025-08-31 00:29](#error-2025-08-31t0029480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b3977e7e07f9709daeb5c9/limits | qa | flaky_500 | 1613.00s
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 33 minutes
- 2025-08-07 PASS 47 minutes
- 2025-08-08 PASS 29 minutes
- 2025-08-09 PASS 33 minutes
- 2025-08-10

### Error 2025-08-10T00:33:04+00:00
```
2025-08-10T00:33:04.0513714Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-10T00:33:04.0521911Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-10T00:52:44.1485497Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-10T00:52:44.1486179Z     resource_cluster_test.go:1398: Step 4/7 error: Error running post-apply refresh plan: exit status 1
2025-08-10T00:52:44.1486618Z         
2025-08-10T00:52:44.1487101Z         Error: error when getting project properties after create
2025-08-10T00:52:44.1487421Z         
2025-08-10T00:52:44.1487797Z           with mongodbatlas_project.test,
2025-08-10T00:52:44.1488819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-10T00:52:44.1489403Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-10T00:52:44.1489686Z         
2025-08-10T00:52:44.1490117Z         error getting project (6897e8c2dacc1950586dabcc): error getting project's
2025-08-10T00:52:44.1490558Z         limits (6897e8c2dacc1950586dabcc):
2025-08-10T00:52:44.1491136Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8c2dacc1950586dabcc/limits
2025-08-10T00:52:44.1491785Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T00:52:44.1492343Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T00:52:44.1492944Z         BadRequestDetail: 
2025-08-10T00:56:55.7106615Z 2025/08/10 00:56:55 error setting `transaction_lifetime_limit_seconds` for MongoDB Cluster (): 0
2025-08-10T00:58:56.8507793Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1552.80s)
```

- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 32 minutes
  - PASS 27 minutes
- 2025-08-13 PASS 31 minutes
- 2025-08-14 PASS 34 minutes
- 2025-08-15 PASS 22 minutes
- 2025-08-16 PASS 55 minutes
- 2025-08-17

### Error 2025-08-17T00:31:12+00:00
```
2025-08-17T00:31:12.7449590Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-17T00:31:12.7451967Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-17T00:54:27.2084083Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-17T00:54:27.2085039Z     resource_cluster_test.go:1398: Step 3/7, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-08-17T00:54:27.2085676Z         
2025-08-17T00:54:27.2086063Z         Error: error when getting project properties after create
2025-08-17T00:54:27.2086490Z         
2025-08-17T00:54:27.2086786Z           with mongodbatlas_project.test,
2025-08-17T00:54:27.2087500Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:54:27.2088273Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:54:27.2088556Z         
2025-08-17T00:54:27.2089009Z         error getting project (68a122d2aafa9a76ca8bb5f4): error getting project's
2025-08-17T00:54:27.2089670Z         limits (68a122d2aafa9a76ca8bb5f4):
2025-08-17T00:54:27.2090250Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d2aafa9a76ca8bb5f4/limits
2025-08-17T00:54:27.2091188Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:54:27.2091768Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:54:27.2092160Z         BadRequestDetail: 
2025-08-17T01:02:40.1709108Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1887.43s)
```

- 2025-08-18 PASS 31 minutes
- 2025-08-19 PASS 34 minutes
- 2025-08-20
  - PASS 27 minutes
  - PASS 29 minutes
- 2025-08-21 PASS 27 minutes
- 2025-08-22 PASS 23 minutes
- 2025-08-23 PASS 32 minutes
- 2025-08-24

### Error 2025-08-24T00:30:35+00:00
```
2025-08-24T00:30:35.9504014Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-24T00:30:35.9545455Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-24T00:41:19.5122825Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-24T00:41:19.5123844Z     resource_cluster_test.go:1398: Step 2/7 error: Error running pre-apply plan: exit status 1
2025-08-24T00:41:19.5124470Z         
2025-08-24T00:41:19.5125030Z         Error: error when getting project properties after create
2025-08-24T00:41:19.5125572Z         
2025-08-24T00:41:19.5126076Z           with mongodbatlas_project.test,
2025-08-24T00:41:19.5127105Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:41:19.5128038Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:41:19.5128719Z         
2025-08-24T00:41:19.5129513Z         error getting project (68aa5d2e4192cd1cc589c503): error getting project's
2025-08-24T00:41:19.5130328Z         limits (68aa5d2e4192cd1cc589c503):
2025-08-24T00:41:19.5131350Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2e4192cd1cc589c503/limits
2025-08-24T00:41:19.5133309Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:41:19.5134357Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:41:19.5135036Z         BadRequestDetail: 
2025-08-24T00:46:12.2662412Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (936.31s)
```

- 2025-08-25 PASS 27 minutes
- 2025-08-26 PASS 34 minutes
- 2025-08-27 PASS 36 minutes
- 2025-08-28 PASS 33 minutes
- 2025-08-29 PASS 42 minutes
- 2025-08-30 PASS 29 minutes
- 2025-08-31

### Error 2025-08-31T00:29:48+00:00
```
2025-08-31T00:29:48.6570949Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T00:29:48.6573128Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T00:51:08.1987424Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T00:51:08.1988204Z     resource_cluster_test.go:1398: Step 5/7 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:51:08.1988989Z         
2025-08-31T00:51:08.1989619Z         Error: error when getting project properties after create
2025-08-31T00:51:08.1990461Z         
2025-08-31T00:51:08.1990897Z           with mongodbatlas_project.test,
2025-08-31T00:51:08.1991937Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:51:08.1992872Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:51:08.1993665Z         
2025-08-31T00:51:08.1994451Z         error getting project (68b3977e7e07f9709daeb5c9): error getting project's
2025-08-31T00:51:08.1995258Z         limits (68b3977e7e07f9709daeb5c9):
2025-08-31T00:51:08.1996273Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b3977e7e07f9709daeb5c9/limits
2025-08-31T00:51:08.1997516Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:51:08.1998563Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:51:08.1999320Z         BadRequestDetail: 
2025-08-31T00:56:41.6588902Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1613.00s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.6338464Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:20.6341591Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:21.4955439Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:21.4956508Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-09-01T00:30:21.4957214Z         
2025-09-01T00:30:21.4957961Z         Error: error creating project: test-acc-tf-p-8446519607991456159
2025-09-01T00:30:21.4958629Z         
2025-09-01T00:30:21.4959180Z           with mongodbatlas_project.test,
2025-09-01T00:30:21.4960304Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:30:21.4961324Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:30:21.4961855Z         
2025-09-01T00:30:21.4963104Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:21.4964343Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:21.4965464Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:21.4966575Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:21.4967317Z         BadRequestDetail: 
2025-09-01T00:30:21.5579938Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (0.93s)
```

  - PASS an hour
  - PASS an hour
  - PASS 28 minutes
  - PASS 26 minutes
  - PASS 37 minutes
  - PASS 31 minutes
  - PASS 28 minutes
- 2025-09-02 PASS 35 minutes
- 2025-09-03 PASS 42 minutes
- 2025-09-04 PASS 34 minutes
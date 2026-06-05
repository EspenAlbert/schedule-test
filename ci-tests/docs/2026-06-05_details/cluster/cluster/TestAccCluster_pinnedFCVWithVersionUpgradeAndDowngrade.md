# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 10)
Success rate: 67.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:05](#error-2026-05-09t0105110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-05-12 00:53](#error-2026-05-12t0053140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.06s
[2026-05-14 00:59](#error-2026-05-14t0059580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.10s
[2026-05-15 00:57](#error-2026-05-15t0057030000) |  | dev | timeout | 10809.01s
[2026-05-16 00:56](#error-2026-05-16t0056250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.04s
[2026-05-19 01:02](#error-2026-05-19t0102190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-05-26 02:08](#error-2026-05-26t0208170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-05-28 01:01](#error-2026-05-28t0101020000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.05s
[2026-05-30 01:05](#error-2026-05-30t0105570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.01s
[2026-06-02 01:07](#error-2026-06-02t0107530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 49 minutes
  - PASS an hour
- 2026-05-08 PASS 42 minutes
- 2026-05-09

### Error 2026-05-09T01:05:11+00:00
```
2026-05-09T01:05:11.5415674Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-09T01:05:11.5615826Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-09T01:06:15.7261448Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-09T01:06:15.7262018Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-05-09T01:06:15.7262400Z         
2026-05-09T01:06:15.7262793Z         Error: error creating project: test-acc-tf-p-5420659059532460159
2026-05-09T01:06:15.7263140Z         
2026-05-09T01:06:15.7263440Z           with mongodbatlas_project.test,
2026-05-09T01:06:15.7264004Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T01:06:15.7264532Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T01:06:15.7264817Z         
2026-05-09T01:06:15.7265246Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:06:15.7265833Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:06:15.7266374Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:06:15.7849563Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (64.26s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 36 minutes
- 2026-05-12

### Error 2026-05-12T00:53:14+00:00
```
2026-05-12T00:53:14.1898489Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-12T00:53:14.1958456Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-12T00:54:36.7653074Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-12T00:54:36.7653994Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-05-12T00:54:36.7654430Z         
2026-05-12T00:54:36.7655074Z         Error: error creating project: test-acc-tf-p-7430664830601343391
2026-05-12T00:54:36.7655503Z         
2026-05-12T00:54:36.7655863Z           with mongodbatlas_project.test,
2026-05-12T00:54:36.7656797Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-12T00:54:36.7657492Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:54:36.7657797Z         
2026-05-12T00:54:36.7658275Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:54:36.7658919Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:54:36.7659516Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:54:36.8116775Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (82.62s)
```

- 2026-05-13 PASS 39 minutes
- 2026-05-14

### Error 2026-05-14T00:59:58+00:00
```
2026-05-14T00:59:58.1995266Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-14T00:59:58.1997459Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-14T01:01:09.1300827Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-14T01:01:09.1301581Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-05-14T01:01:09.1302294Z         
2026-05-14T01:01:09.1302783Z         Error: error creating project: test-acc-tf-p-222623294945040230
2026-05-14T01:01:09.1303303Z         
2026-05-14T01:01:09.1303642Z           with mongodbatlas_project.test,
2026-05-14T01:01:09.1304658Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-14T01:01:09.1305281Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:01:09.1305826Z         
2026-05-14T01:01:09.1306316Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:01:09.1306971Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:01:09.1307824Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:01:09.1779940Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (70.98s)
```

- 2026-05-15

### Error 2026-05-15T00:57:03+00:00
```
2026-05-15T00:57:03.8362301Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-15T00:57:03.8364473Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-15T03:57:12.1944256Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-15T03:57:12.1945120Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-05-15T03:57:12.1945657Z         
2026-05-15T03:57:12.1946456Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-05-15T03:57:12.1947113Z         
2026-05-15T03:57:12.1947405Z           with mongodbatlas_cluster.test,
2026-05-15T03:57:12.1948385Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-05-15T03:57:12.1949125Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-05-15T03:57:12.1949432Z         
2026-05-15T03:57:12.8914955Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-15T03:57:12.8915596Z         
2026-05-15T03:57:12.8915904Z         Error: error when destroying resource
2026-05-15T03:57:12.8916191Z         
2026-05-15T03:57:12.8916550Z         error deleting project (6a066f62649b96da6ebad97c):
2026-05-15T03:57:12.8917154Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f62649b96da6ebad97c
2026-05-15T03:57:12.8917663Z         DELETE: HTTP 409 Conflict (Error code:
2026-05-15T03:57:12.8918213Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-05-15T03:57:12.8919110Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-05-15T03:57:12.8919574Z         Params: [], BadRequestDetail: 
2026-05-15T03:57:12.8920302Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (10809.06s)
```

- 2026-05-16

### Error 2026-05-16T00:56:25+00:00
```
2026-05-16T00:56:25.0143131Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-16T00:56:25.0682273Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-16T00:57:36.3269558Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-16T00:57:36.3270175Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-05-16T00:57:36.3270824Z         
2026-05-16T00:57:36.3271362Z         Error: error creating project: test-acc-tf-p-2761997206161948128
2026-05-16T00:57:36.3271859Z         
2026-05-16T00:57:36.3272163Z           with mongodbatlas_project.test,
2026-05-16T00:57:36.3272780Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:57:36.3273344Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:57:36.3273632Z         
2026-05-16T00:57:36.3274089Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:57:36.3274741Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:57:36.3275451Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:57:36.3774062Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (71.40s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 51 minutes
- 2026-05-19

### Error 2026-05-19T01:02:19+00:00
```
2026-05-19T01:02:19.9121595Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-19T01:02:19.9131225Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-19T01:03:26.7976771Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-19T01:03:26.7977632Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-05-19T01:03:26.7978177Z         
2026-05-19T01:03:26.7978609Z         Error: error creating project: test-acc-tf-p-6294834708507755712
2026-05-19T01:03:26.7979082Z         
2026-05-19T01:03:26.7979382Z           with mongodbatlas_project.test,
2026-05-19T01:03:26.7980040Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:03:26.7980700Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:03:26.7981006Z         
2026-05-19T01:03:26.7981715Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:03:26.7982435Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:03:26.7983081Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:26.8478403Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (66.94s)
```

- 2026-05-20 PASS 36 minutes
- 2026-05-21 PASS 39 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 39 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 40 minutes
- 2026-05-26

### Error 2026-05-26T02:08:17+00:00
```
2026-05-26T02:08:17.4837819Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-26T02:08:17.4849255Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-26T02:09:25.6822439Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-26T02:09:25.6823581Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-05-26T02:09:25.6824449Z         
2026-05-26T02:09:25.6825099Z         Error: error creating project: test-acc-tf-p-5537763954447386678
2026-05-26T02:09:25.6825547Z         
2026-05-26T02:09:25.6825914Z           with mongodbatlas_project.test,
2026-05-26T02:09:25.6826645Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:09:25.6827305Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:09:25.6827669Z         
2026-05-26T02:09:25.6828142Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:09:25.6829009Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:09:25.6829603Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:09:25.7304661Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (68.25s)
```

- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:02+00:00
```
2026-05-28T01:01:02.3488537Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-28T01:01:02.3494745Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-28T01:01:03.7918212Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-28T01:01:03.7918801Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-05-28T01:01:03.7919191Z         
2026-05-28T01:01:03.7919630Z         Error: error creating project: test-acc-tf-p-6189917646634871171
2026-05-28T01:01:03.7920030Z         
2026-05-28T01:01:03.7920402Z           with mongodbatlas_project.test,
2026-05-28T01:01:03.7921083Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:03.7921619Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:03.7921908Z         
2026-05-28T01:01:03.7922546Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:01:03.7923177Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:01:03.7923794Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:01:03.7924385Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:01:03.7924792Z         BadRequestDetail: 
2026-05-28T01:01:03.8411851Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1.49s)
```

- 2026-05-29 PASS 39 minutes
- 2026-05-30

### Error 2026-05-30T01:05:57+00:00
```
2026-05-30T01:05:57.0086948Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-30T01:05:57.0096092Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-30T01:07:18.0224811Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-05-30T01:07:18.0226533Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-05-30T01:07:18.0227808Z         
2026-05-30T01:07:18.0228973Z         Error: error creating project: test-acc-tf-p-4866667711533561264
2026-05-30T01:07:18.0230059Z         
2026-05-30T01:07:18.0231387Z           with mongodbatlas_project.test,
2026-05-30T01:07:18.0240405Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:07:18.0246923Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:07:18.0248077Z         
2026-05-30T01:07:18.0249360Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:07:18.0251207Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:07:18.0252684Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:07:18.0753152Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (81.07s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 50 minutes
- 2026-06-02

### Error 2026-06-02T01:07:53+00:00
```
2026-06-02T01:07:53.1498063Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-06-02T01:07:53.1503235Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-06-02T01:09:00.5119632Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-06-02T01:09:00.5120995Z     resource_cluster_test.go:1351: Step 1/7 error: Error running apply: exit status 1
2026-06-02T01:09:00.5121701Z         
2026-06-02T01:09:00.5122440Z         Error: error creating project: test-acc-tf-p-1158790605690775948
2026-06-02T01:09:00.5123070Z         
2026-06-02T01:09:00.5123596Z           with mongodbatlas_project.test,
2026-06-02T01:09:00.5124663Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:09:00.5125643Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:09:00.5126177Z         
2026-06-02T01:09:00.5126994Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:09:00.5128112Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:09:00.5129290Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:00.5694704Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (67.42s)
```

- 2026-06-03 PASS 43 minutes
- 2026-06-04 PASS 59 minutes
- 2026-06-05 PASS 37 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 36 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 33 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 34 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 32 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

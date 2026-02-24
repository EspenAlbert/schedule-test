# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveMultisharding Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035180000) |  | dev | timeout | 10805.06s
[2026-02-02 00:38](#error-2026-02-02t0038460000) |  | dev | timeout | 10806.07s
[2026-02-03 00:39](#error-2026-02-03t0039280000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143beb2e54ee995907df2/clusters | dev | out_of_capacity | 6.01s
[2026-02-24 00:37](#error-2026-02-24t0037040000) |  | dev | flaky_500 | 2096.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27 PASS 25 minutes
- 2026-01-28 PASS 28 minutes
- 2026-01-29 PASS 32 minutes
- 2026-01-30 PASS 38 minutes
- 2026-01-31

### Error 2026-01-31T00:35:18+00:00
```
2026-01-31T00:35:18.6270567Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-01-31T00:36:56.2142797Z === CONT  TestAccAdvancedCluster_moveMultisharding
2026-01-31T03:37:01.6366320Z === NAME  TestAccAdvancedCluster_moveMultisharding
2026-01-31T03:37:01.6367353Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.6368091Z         
2026-01-31T03:37:01.6369477Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:37:01.6370554Z         
2026-01-31T03:37:01.6371350Z           with mongodbatlas_cluster.old,
2026-01-31T03:37:01.6372503Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-01-31T03:37:01.6373766Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-01-31T03:37:01.6374318Z         
2026-01-31T03:37:01.7857652Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (10805.56s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:46+00:00
```
2026-02-02T00:38:46.2850222Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-02-02T00:40:19.8842478Z === CONT  TestAccAdvancedCluster_moveMultisharding
2026-02-02T03:40:26.5117080Z === NAME  TestAccAdvancedCluster_moveMultisharding
2026-02-02T03:40:26.5118016Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.5118767Z         
2026-02-02T03:40:26.5120182Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:40:26.5121087Z         
2026-02-02T03:40:26.5121416Z           with mongodbatlas_cluster.old,
2026-02-02T03:40:26.5122348Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-02-02T03:40:26.5123149Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-02-02T03:40:26.5123761Z         
2026-02-02T03:40:26.5609223Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (10806.68s)
```

- 2026-02-03

### Error 2026-02-03T00:39:28+00:00
```
2026-02-03T00:39:28.9659732Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-02-03T00:42:03.6230425Z === CONT  TestAccAdvancedCluster_moveMultisharding
2026-02-03T00:42:09.5352323Z === NAME  TestAccAdvancedCluster_moveMultisharding
2026-02-03T00:42:09.5353243Z     move_upgrade_state_test.go:45: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.5353907Z         
2026-02-03T00:42:09.5356146Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143beb2e54ee995907df2/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:42:09.5357594Z         
2026-02-03T00:42:09.5358153Z           with mongodbatlas_cluster.old,
2026-02-03T00:42:09.5359291Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-02-03T00:42:09.5360179Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-02-03T00:42:09.5360659Z         
2026-02-03T00:42:09.7184475Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (6.10s)
```

- 2026-02-04 PASS 37 minutes
- 2026-02-05 PASS 36 minutes
- 2026-02-06 PASS 35 minutes
- 2026-02-07 PASS 37 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 38 minutes
- 2026-02-10 PASS 43 minutes
- 2026-02-11 PASS 33 minutes
- 2026-02-12 PASS 35 minutes
- 2026-02-13 PASS 37 minutes
- 2026-02-14 PASS 35 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 38 minutes
- 2026-02-17 PASS 36 minutes
- 2026-02-18 PASS 36 minutes
- 2026-02-19 PASS 47 minutes
- 2026-02-20 PASS 36 minutes
- 2026-02-21 PASS 34 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 36 minutes
- 2026-02-24

### Error 2026-02-24T00:37:04+00:00
```
2026-02-24T00:37:04.0525716Z === RUN   TestAccAdvancedCluster_moveMultisharding
2026-02-24T00:40:00.5719582Z === CONT  TestAccAdvancedCluster_moveMultisharding
2026-02-24T01:11:23.4229595Z === NAME  TestAccAdvancedCluster_moveMultisharding
2026-02-24T01:11:23.4230466Z     move_upgrade_state_test.go:45: Step 2/2 error: Error running apply: exit status 1
2026-02-24T01:11:23.4231071Z         
2026-02-24T01:11:23.4231353Z         Error: Error in update
2026-02-24T01:11:23.4231728Z         
2026-02-24T01:11:23.4232103Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:11:23.4232989Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:11:23.4233773Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:11:23.4234267Z         
2026-02-24T01:11:23.4234743Z         cluster name: test-acc-tf-c-3130186782105040419, API error details: (503
2026-02-24T01:11:23.4235542Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:14:57.3573372Z --- FAIL: TestAccAdvancedCluster_moveMultisharding (2096.79s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 27 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 27 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 22 minutes
  - PASS 19 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 26 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING

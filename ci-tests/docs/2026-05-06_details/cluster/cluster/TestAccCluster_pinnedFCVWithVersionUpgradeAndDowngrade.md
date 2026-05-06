# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:43](#error-2026-04-11t0043400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 99.08s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032f981002038a8a1218d/clusters | dev | out_of_capacity | 7.09s
[2026-04-25 00:46](#error-2026-04-25t0046300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 57 minutes
- 2026-04-08 PASS 32 minutes
- 2026-04-09 PASS 43 minutes
- 2026-04-10 PASS 47 minutes
- 2026-04-11

### Error 2026-04-11T00:43:40+00:00
```
2026-04-11T00:43:40.1813078Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-11T00:43:40.1816774Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-11T00:45:19.9665952Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-11T00:45:19.9666964Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-04-11T00:45:19.9667625Z         
2026-04-11T00:45:19.9668059Z         Error: error creating project: test-acc-tf-p-1374916777894709189
2026-04-11T00:45:19.9668417Z         
2026-04-11T00:45:19.9668716Z           with mongodbatlas_project.test,
2026-04-11T00:45:19.9669322Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:45:19.9670016Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:45:19.9670317Z         
2026-04-11T00:45:19.9671171Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:45:19.9671846Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:45:19.9672435Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:20.0084250Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (99.83s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 35 minutes
- 2026-04-14 PASS 32 minutes
- 2026-04-15 PASS 32 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.0713498Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-16T00:53:12.0722066Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-16T00:53:19.2300256Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-16T00:53:19.2301182Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-04-16T00:53:19.2301786Z         
2026-04-16T00:53:19.2303595Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032f981002038a8a1218d/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:19.2304783Z         
2026-04-16T00:53:19.2305114Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:19.2305979Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:19.2306783Z           17: 		resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:19.2307119Z         
2026-04-16T00:53:19.9569294Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (7.89s)
```

- 2026-04-17 PASS 32 minutes
- 2026-04-18 PASS 37 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 30 minutes
- 2026-04-21 PASS 35 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 39 minutes
- 2026-04-24 PASS 32 minutes
- 2026-04-25

### Error 2026-04-25T00:46:30+00:00
```
2026-04-25T00:46:30.5603368Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-25T00:46:30.5616263Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-25T00:47:34.5964848Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2026-04-25T00:47:34.5965835Z     resource_cluster_test.go:1374: Step 1/7 error: Error running apply: exit status 1
2026-04-25T00:47:34.5966493Z         
2026-04-25T00:47:34.5967180Z         Error: error creating project: test-acc-tf-p-6590397352520621725
2026-04-25T00:47:34.5967558Z         
2026-04-25T00:47:34.5967874Z           with mongodbatlas_project.test,
2026-04-25T00:47:34.5968599Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-25T00:47:34.5969531Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-25T00:47:34.5970043Z         
2026-04-25T00:47:34.5970536Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-25T00:47:34.5971182Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-25T00:47:34.5971768Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:47:34.6421474Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (64.08s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 33 minutes
- 2026-04-28 PASS 35 minutes
- 2026-04-29 PASS 33 minutes
- 2026-04-30 PASS 46 minutes
- 2026-05-01 PASS 32 minutes
- 2026-05-02 PASS 30 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 37 minutes
- 2026-05-05 PASS 51 minutes
- 2026-05-06 PASS 43 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 31 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 31 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 31 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 30 minutes
  - PASS 29 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 34 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 30 minutes
- 2026-05-04 PASS 53 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 32 minutes

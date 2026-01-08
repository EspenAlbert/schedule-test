# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-13 00:30](#error-2025-12-13t0030110000) | OUT_OF_CAPACITY /api/atlas/v2/groups/693cb39371dde65088bae73d/clusters | dev | out_of_capacity | 8.00s
[2026-01-07 00:30](#error-2026-01-07t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da942d59b8466ea72ae92/clusters/test-acc-tf-c-7694656622029733890 | dev | flaky_500 | 161.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 29 minutes
  - PASS 27 minutes
- 2025-12-11 PASS 28 minutes
- 2025-12-12 PASS 30 minutes
- 2025-12-13

### Error 2025-12-13T00:30:11+00:00
```
2025-12-13T00:30:11.0014556Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-12-13T00:30:13.5105628Z     resource_test.go:1003: Adding variable groupId=693cb39371dde65088bae73d
2025-12-13T00:30:13.5106748Z     resource_test.go:1003: Adding variable clusterName=test-acc-tf-c-6954032573191987149
2025-12-13T00:31:44.5097936Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-12-13T00:31:49.9400960Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2025-12-13T00:31:49.9401606Z     resource_test.go:1003: Step 1/4 error: Error running apply: exit status 1
2025-12-13T00:31:49.9402081Z         
2025-12-13T00:31:49.9402342Z         Error: Error in create
2025-12-13T00:31:49.9402668Z         
2025-12-13T00:31:49.9403020Z           with mongodbatlas_advanced_cluster.test,
2025-12-13T00:31:49.9403810Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-12-13T00:31:49.9404744Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-12-13T00:31:49.9405059Z         
2025-12-13T00:31:49.9405471Z         cluster name: test-acc-tf-c-6954032573191987149, API error details:
2025-12-13T00:31:49.9406159Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693cb39371dde65088bae73d/clusters
2025-12-13T00:31:49.9407008Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-12-13T00:31:49.9407661Z         region is currently out of capacity for the requested instance size. Reason:
2025-12-13T00:31:49.9428149Z         Conflict. Params: [], BadRequestDetail: 
2025-12-13T00:31:49.9971400Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (8.00s)
```

- 2025-12-14: MISSING
- 2025-12-15 PASS 24 minutes
- 2025-12-16 PASS 29 minutes
- 2025-12-17 PASS 30 minutes
- 2025-12-18 PASS 27 minutes
- 2025-12-19 PASS 29 minutes
- 2025-12-20 PASS 25 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 28 minutes
- 2025-12-23 PASS 24 minutes
- 2025-12-24 PASS 30 minutes
- 2025-12-25 PASS 41 minutes
- 2025-12-26 PASS 25 minutes
- 2025-12-27 PASS 23 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 24 minutes
- 2025-12-31 PASS 30 minutes
- 2026-01-01 PASS 22 minutes
- 2026-01-02 PASS 28 minutes
- 2026-01-03 PASS 23 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 27 minutes
- 2026-01-06 PASS 23 minutes
- 2026-01-07

### Error 2026-01-07T00:30:58+00:00
```
2026-01-07T00:30:58.1064295Z === RUN   TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-01-07T00:31:01.6490982Z     resource_test.go:1003: Adding variable clusterName=test-acc-tf-c-7694656622029733890
2026-01-07T00:31:01.6492257Z     resource_test.go:1003: Adding variable groupId=695da942d59b8466ea72ae92
2026-01-07T00:31:16.8806523Z === CONT  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-01-07T00:33:54.7285187Z === NAME  TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate
2026-01-07T00:33:54.7286058Z     resource_test.go:1003: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:33:54.7286620Z         
2026-01-07T00:33:54.7286966Z         Error: Error in create
2026-01-07T00:33:54.7287256Z         
2026-01-07T00:33:54.7287573Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:33:54.7288151Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:33:54.7288858Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:33:54.7289280Z         
2026-01-07T00:33:54.7289701Z         cluster=test-acc-tf-c-7694656622029733890 didn't reach desired state: IDLE,
2026-01-07T00:33:54.7290077Z         error:
2026-01-07T00:33:54.7290729Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da942d59b8466ea72ae92/clusters/test-acc-tf-c-7694656622029733890
2026-01-07T00:33:54.7291479Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:54.7292026Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:54.7292409Z         BadRequestDetail: 
2026-01-07T00:33:54.7791456Z --- FAIL: TestAccMockableAdvancedCluster_replicasetAdvConfigUpdate (161.44s)
```

- 2026-01-08 PASS 24 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 28 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 21 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 23 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 24 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes

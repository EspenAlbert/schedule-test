# advanced_cluster/advancedcluster/TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:54](#error-2026-04-16t0054530000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters | dev | out_of_capacity | 15.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 49 minutes
- 2026-04-08 PASS 19 minutes
- 2026-04-09 PASS 34 minutes
- 2026-04-10 PASS 22 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 19 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 19 minutes
- 2026-04-16

### Error 2026-04-16T00:54:53+00:00
```
2026-04-16T00:54:53.9818420Z === RUN   TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-04-16T00:54:54.0732661Z === CONT  TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-04-16T00:55:08.9947201Z === NAME  TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-04-16T00:55:08.9949129Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:08.994424267Z, ProjectID: 69e032fc1ec945fedc7326a3, Cluster name: test-acc-tf-c-1700173315750390381
2026-04-16T00:55:09.6880141Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_name=TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy
2026-04-16T00:55:09.6881363Z     resource_test.go:3013: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:55:09.6881772Z         
2026-04-16T00:55:09.6882025Z         Error: Error in create
2026-04-16T00:55:09.6882362Z         
2026-04-16T00:55:09.6882914Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:09.6883735Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:09.6884649Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:09.6885065Z         
2026-04-16T00:55:09.6885503Z         cluster name: test-acc-tf-c-1700173315750390381, API error details:
2026-04-16T00:55:09.6886226Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032fc1ec945fedc7326a3/clusters
2026-04-16T00:55:09.6897395Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:09.6898581Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:09.6899130Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:09.7351573Z --- FAIL: TestAccAdvancedCluster_useAwsTimeBasedSnapshotCopy (15.75s)
```

- 2026-04-17 PASS 18 minutes
- 2026-04-18 PASS 30 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 19 minutes
- 2026-04-22 PASS 30 minutes
- 2026-04-23 PASS 38 minutes
- 2026-04-24 PASS 20 minutes
- 2026-04-25 PASS 18 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 19 minutes
- 2026-04-29 PASS 17 minutes
- 2026-04-30 PASS 27 minutes
- 2026-05-01 PASS 14 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 19 minutes
- 2026-05-05 PASS 35 minutes
- 2026-05-06 PASS 28 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 19 minutes
  - PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 18 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 20 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 19 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes

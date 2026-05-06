# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_withBackup Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050320000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc7175a5/clusters | dev | out_of_capacity | 15.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 42 minutes
- 2026-04-08 PASS 20 minutes
- 2026-04-09 PASS 24 minutes
- 2026-04-10 PASS 29 minutes
- 2026-04-11 PASS 18 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 17 minutes
- 2026-04-14 PASS 18 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T00:50:32+00:00
```
2026-04-16T00:50:32.5446653Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-04-16T00:50:38.6506665Z === CONT  TestAccGlobalClusterConfig_withBackup
2026-04-16T00:50:53.6526975Z === NAME  TestAccGlobalClusterConfig_withBackup
2026-04-16T00:50:53.6528761Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:53.652392144Z, ProjectID: 69e032551ec945fedc7175a5, Cluster name: test-acc-tf-c-1949038444888250864
2026-04-16T00:50:54.4688691Z    test_terraform_path=/home/runner/work/_temp/f944a3aa-b42a-41dd-a40a-7266bd007fad/terraform test_working_directory=/tmp/plugintest3540407184 test_name=TestAccGlobalClusterConfig_withBackup test_step_number=1
2026-04-16T00:50:54.4689929Z     resource_global_cluster_config_test.go:34: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:50:54.4690750Z         
2026-04-16T00:50:54.4691201Z         Error: Error in create
2026-04-16T00:50:54.4691515Z         
2026-04-16T00:50:54.4692015Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:50:54.4692944Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:50:54.4693874Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:50:54.4694237Z         
2026-04-16T00:50:54.4694816Z         cluster name: test-acc-tf-c-1949038444888250864, API error details:
2026-04-16T00:50:54.4695639Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc7175a5/clusters
2026-04-16T00:50:54.4696465Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:50:54.4697420Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:50:54.4698327Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:54.5141945Z --- FAIL: TestAccGlobalClusterConfig_withBackup (15.86s)
```

- 2026-04-17 PASS 20 minutes
- 2026-04-18 PASS 16 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 18 minutes
- 2026-04-21 PASS 19 minutes
- 2026-04-22 PASS 19 minutes
- 2026-04-23 PASS 20 minutes
- 2026-04-24 PASS 20 minutes
- 2026-04-25 PASS 16 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 25 minutes
- 2026-04-29 PASS 24 minutes
- 2026-04-30 PASS 31 minutes
- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 16 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 37 minutes
- 2026-05-06 PASS 59 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 17 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 17 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 15 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 17 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 16 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes

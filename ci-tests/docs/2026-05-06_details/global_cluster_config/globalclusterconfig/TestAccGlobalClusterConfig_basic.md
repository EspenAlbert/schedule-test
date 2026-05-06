# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050290000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc7175a5/clusters | dev | out_of_capacity | 8.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 43 minutes
- 2026-04-08 PASS 20 minutes
- 2026-04-09 PASS 22 minutes
- 2026-04-10 PASS 31 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 16 minutes
- 2026-04-14 PASS 17 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T00:50:29+00:00
```
2026-04-16T00:50:29.5125562Z === RUN   TestAccGlobalClusterConfig_basic
2026-04-16T00:50:29.5128086Z     resource_global_cluster_config_test.go:30: Creating execution project (1): test-acc-tf-p-4336699575765647539
2026-04-16T00:50:38.6503900Z === CONT  TestAccGlobalClusterConfig_basic
2026-04-16T00:50:43.6506501Z === NAME  TestAccGlobalClusterConfig_basic
2026-04-16T00:50:43.6508741Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:43.650322896Z, ProjectID: 69e032551ec945fedc7175a5, Cluster name: test-acc-tf-c-6053417159145940740
2026-04-16T00:50:44.4744254Z    test_working_directory=/tmp/plugintest212692703 test_step_number=1 test_terraform_path=/home/runner/work/_temp/f944a3aa-b42a-41dd-a40a-7266bd007fad/terraform test_name=TestAccGlobalClusterConfig_basic
2026-04-16T00:50:44.4746767Z     resource_global_cluster_config_test.go:30: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:50:44.4747700Z         
2026-04-16T00:50:44.4748059Z         Error: Error in create
2026-04-16T00:50:44.4748682Z         
2026-04-16T00:50:44.4749223Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:50:44.4750218Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:50:44.4751082Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:50:44.4751444Z         
2026-04-16T00:50:44.4751884Z         cluster name: test-acc-tf-c-6053417159145940740, API error details:
2026-04-16T00:50:44.4752599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc7175a5/clusters
2026-04-16T00:50:44.4753342Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:50:44.4754028Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:50:44.4754545Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:44.5203379Z --- FAIL: TestAccGlobalClusterConfig_basic (8.90s)
```

- 2026-04-17 PASS 20 minutes
- 2026-04-18 PASS 16 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 15 minutes
- 2026-04-21 PASS 19 minutes
- 2026-04-22 PASS 16 minutes
- 2026-04-23 PASS 21 minutes
- 2026-04-24 PASS 20 minutes
- 2026-04-25 PASS 17 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 17 minutes
- 2026-04-28 PASS 23 minutes
- 2026-04-29 PASS 22 minutes
- 2026-04-30 PASS 30 minutes
- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 16 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 38 minutes
- 2026-05-06 PASS 59 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 17 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 15 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 14 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 15 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 16 minutes
- 2026-05-04 PASS 16 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 16 minutes

# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_withBackup Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2) TIMEOUT
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035080000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d4e397d00588dcf9e9137/clusters | dev | out_of_capacity | 15.08s
[2026-02-02 00:38](#error-2026-02-02t0038310000) |  | dev |  | 7190.00s
[2026-02-03 00:39](#error-2026-02-03t0039190000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b3b2e54ee9959004a7/clusters | dev | out_of_capacity | 15.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 18 minutes
- 2026-01-28 PASS 17 minutes
- 2026-01-29 PASS 18 minutes
- 2026-01-30 PASS 20 minutes
- 2026-01-31

### Error 2026-01-31T00:35:08+00:00
```
2026-01-31T00:35:08.1082049Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-01-31T03:35:14.2017893Z === CONT  TestAccGlobalClusterConfig_withBackup
2026-01-31T03:35:29.2048594Z === NAME  TestAccGlobalClusterConfig_withBackup
2026-01-31T03:35:29.2050814Z     pre_check.go:46: Time before creating cluster: 2026-01-31T03:35:29.204450406Z, ProjectID: 697d4e397d00588dcf9e9137, Cluster name: test-acc-tf-c-5359987704289898046
2026-01-31T03:35:29.9925563Z    test_step_number=1
2026-01-31T03:35:29.9926839Z     resource_global_cluster_config_test.go:34: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:35:29.9927621Z         
2026-01-31T03:35:29.9928036Z         Error: Error in create
2026-01-31T03:35:29.9928441Z         
2026-01-31T03:35:29.9929079Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:29.9930370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:29.9931669Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:29.9932281Z         
2026-01-31T03:35:29.9933043Z         cluster name: test-acc-tf-c-5359987704289898046, API error details:
2026-01-31T03:35:29.9934302Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e397d00588dcf9e9137/clusters
2026-01-31T03:35:29.9935607Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:35:29.9937320Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:35:29.9938276Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:35:30.0457863Z --- FAIL: TestAccGlobalClusterConfig_withBackup (15.84s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:31+00:00
```
2026-02-02T00:38:31.5338086Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-02-02T03:38:37.6189411Z === CONT  TestAccGlobalClusterConfig_withBackup
2026-02-02T03:38:52.6202567Z === NAME  TestAccGlobalClusterConfig_withBackup
2026-02-02T03:38:52.6206996Z     pre_check.go:46: Time before creating cluster: 2026-02-02T03:38:52.619925763Z, ProjectID: 697ff204197cc66080b00e93, Cluster name: test-acc-tf-c-1669093048864487099
2026-02-02T05:38:27.9895457Z 		TestAccGlobalClusterConfig_basic (1h59m50s)
2026-02-02T05:38:27.9896256Z 		TestAccGlobalClusterConfig_iss (1h59m50s)
2026-02-02T05:38:27.9897018Z 		TestAccGlobalClusterConfig_withBackup (1h59m50s)
```

- 2026-02-03

### Error 2026-02-03T00:39:19+00:00
```
2026-02-03T00:39:19.2449239Z === RUN   TestAccGlobalClusterConfig_withBackup
2026-02-03T00:39:25.1504253Z === CONT  TestAccGlobalClusterConfig_withBackup
2026-02-03T00:39:40.1624173Z === NAME  TestAccGlobalClusterConfig_withBackup
2026-02-03T00:39:40.1625651Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:40.162145936Z, ProjectID: 698143b3b2e54ee9959004a7, Cluster name: test-acc-tf-c-5222762871866476283
2026-02-03T00:39:40.9270415Z    test_terraform_path=/home/runner/work/_temp/a49fc348-e1c4-4a76-975e-3f354e147b3e/terraform
2026-02-03T00:39:40.9271641Z     resource_global_cluster_config_test.go:34: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:39:40.9272440Z         
2026-02-03T00:39:40.9272858Z         Error: Error in create
2026-02-03T00:39:40.9273173Z         
2026-02-03T00:39:40.9273730Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:40.9274708Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:40.9275547Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:40.9276373Z         
2026-02-03T00:39:40.9277052Z         cluster name: test-acc-tf-c-5222762871866476283, API error details:
2026-02-03T00:39:40.9278253Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b3b2e54ee9959004a7/clusters
2026-02-03T00:39:40.9279450Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:40.9280627Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:40.9281535Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:40.9760843Z --- FAIL: TestAccGlobalClusterConfig_withBackup (15.83s)
```

- 2026-02-04 PASS 22 minutes
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 23 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 22 minutes
- 2026-02-10 PASS 21 minutes
- 2026-02-11 PASS 22 minutes
- 2026-02-12 PASS 22 minutes
- 2026-02-13 PASS 21 minutes
- 2026-02-14 PASS 23 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 24 minutes
- 2026-02-18 PASS 26 minutes
- 2026-02-19 PASS 22 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 23 minutes
- 2026-02-24 PASS 21 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 15 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 16 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 18 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 16 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 16 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 15 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING

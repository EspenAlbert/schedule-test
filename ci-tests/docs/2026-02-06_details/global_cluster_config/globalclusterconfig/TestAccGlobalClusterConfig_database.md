# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035080000) |  | dev | timeout | 10806.01s
[2026-02-02 00:38](#error-2026-02-02t0038310000) |  | dev | timeout | 10806.01s
[2026-02-03 00:39](#error-2026-02-03t0039190000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b3b2e54ee9959004a7/clusters | dev | out_of_capacity | 5.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09 PASS 30 minutes
- 2026-01-10 PASS 22 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 30 minutes
- 2026-01-13 PASS 33 minutes
- 2026-01-14 PASS 27 minutes
- 2026-01-15 PASS 29 minutes
- 2026-01-16 PASS 29 minutes
- 2026-01-17 PASS 23 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 21 minutes
- 2026-01-20 PASS 26 minutes
- 2026-01-21 PASS 29 minutes
- 2026-01-22 PASS 29 minutes
- 2026-01-23 PASS 30 minutes
- 2026-01-24 PASS 21 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 24 minutes
- 2026-01-27 PASS 26 minutes
- 2026-01-28 PASS 24 minutes
- 2026-01-29 PASS 31 minutes
- 2026-01-30 PASS 33 minutes
- 2026-01-31

### Error 2026-01-31T00:35:08+00:00
```
2026-01-31T00:35:08.1089260Z === RUN   TestAccGlobalClusterConfig_database
2026-01-31T00:35:13.1105004Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:13.11005681Z, ProjectID: 697d4e397d00588dcf9e9137, Cluster name: test-acc-tf-c-5615428654210109589
2026-01-31T03:35:14.1450588Z    test_working_directory=/tmp/plugintest1185953124 test_step_number=1 test_name=TestAccGlobalClusterConfig_database test_terraform_path=/home/runner/work/_temp/f0da4ac7-cf58-4841-b87e-c56fea012fbf/terraform
2026-01-31T03:35:14.1454769Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2026-01-31T03:35:14.1455615Z         
2026-01-31T03:35:14.1456034Z         Error: Error in create
2026-01-31T03:35:14.1456919Z         
2026-01-31T03:35:14.1457618Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:35:14.1458988Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:35:14.1460246Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:35:14.1460869Z         
2026-01-31T03:35:14.1461721Z         cluster=test-acc-tf-c-5615428654210109589 didn't reach desired state: IDLE,
2026-01-31T03:35:14.1462600Z         error: context deadline exceeded
2026-01-31T03:35:14.2016701Z --- FAIL: TestAccGlobalClusterConfig_database (10806.09s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:31+00:00
```
2026-02-02T00:38:31.5346003Z === RUN   TestAccGlobalClusterConfig_database
2026-02-02T00:38:36.5358806Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:38:36.535202002Z, ProjectID: 697ff204197cc66080b00e93, Cluster name: test-acc-tf-c-8237019620761168991
2026-02-02T03:38:37.5697515Z    test_working_directory=/tmp/plugintest2594399542 test_step_number=1
2026-02-02T03:38:37.5698771Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2026-02-02T03:38:37.5699566Z         
2026-02-02T03:38:37.5700005Z         Error: Error in create
2026-02-02T03:38:37.5700419Z         
2026-02-02T03:38:37.5701067Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-02T03:38:37.5702623Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-02T03:38:37.5703888Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-02T03:38:37.5704394Z         
2026-02-02T03:38:37.5705209Z         cluster=test-acc-tf-c-8237019620761168991 didn't reach desired state: IDLE,
2026-02-02T03:38:37.5706131Z         error: context deadline exceeded
2026-02-02T03:38:37.6188583Z --- FAIL: TestAccGlobalClusterConfig_database (10806.08s)
```

- 2026-02-03

### Error 2026-02-03T00:39:19+00:00
```
2026-02-03T00:39:19.2456248Z === RUN   TestAccGlobalClusterConfig_database
2026-02-03T00:39:24.2512875Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:24.250817863Z, ProjectID: 698143b3b2e54ee9959004a7, Cluster name: test-acc-tf-c-3143103067717078879
2026-02-03T00:39:25.0995421Z   
2026-02-03T00:39:25.0996461Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2026-02-03T00:39:25.0997257Z         
2026-02-03T00:39:25.0997695Z         Error: Error in create
2026-02-03T00:39:25.0998108Z         
2026-02-03T00:39:25.0998742Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:39:25.0999920Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:39:25.1001413Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:39:25.1001996Z         
2026-02-03T00:39:25.1002719Z         cluster name: test-acc-tf-c-3143103067717078879, API error details:
2026-02-03T00:39:25.1003914Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b3b2e54ee9959004a7/clusters
2026-02-03T00:39:25.1005210Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:39:25.1006711Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:39:25.1007629Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:39:25.1502914Z --- FAIL: TestAccGlobalClusterConfig_database (5.90s)
```

- 2026-02-04 PASS 49 minutes
- 2026-02-05 PASS 49 minutes
- 2026-02-06 PASS 51 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 28 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 20 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 22 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 25 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 26 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING

# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10809.02s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters | dev | out_of_capacity | 9.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
- 2026-01-09 PASS 26 minutes
- 2026-01-10 PASS 20 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 23 minutes
- 2026-01-13 PASS 30 minutes
- 2026-01-14 PASS 21 minutes
- 2026-01-15 PASS 24 minutes
- 2026-01-16 PASS 25 minutes
- 2026-01-17 PASS 23 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 21 minutes
- 2026-01-20 PASS 23 minutes
- 2026-01-21 PASS 23 minutes
- 2026-01-22 PASS 25 minutes
- 2026-01-23 PASS 23 minutes
- 2026-01-24 PASS 19 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 22 minutes
- 2026-01-27 PASS 26 minutes
- 2026-01-28 PASS 22 minutes
- 2026-01-29 PASS 31 minutes
- 2026-01-30 PASS 28 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6627382Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-01-31T03:36:47.6627980Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7890247239795880355
2026-01-31T03:36:47.6630695Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2026-01-31T03:36:47.6631970Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-01-31T03:36:47.6633121Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:20.417319529Z, ProjectID: 697d4e407d00588dcf9ed1b3, Cluster name: test-acc-tf-c-4262556798317294220
2026-01-31T03:36:47.6647294Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-01-31T03:36:47.6647818Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:47.6648203Z         
2026-01-31T03:36:47.6648463Z         Error: Error in create
2026-01-31T03:36:47.6648717Z         
2026-01-31T03:36:47.6649093Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6649843Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6650564Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6650928Z         
2026-01-31T03:36:47.6651395Z         cluster=test-acc-tf-c-4262556798317294220 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6651891Z         error: context deadline exceeded
2026-01-31T03:36:47.6652276Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (10809.23s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9855650Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-02-03T00:40:22.9856247Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-4678942826752659436
2026-02-03T00:40:22.9858942Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2026-02-03T00:40:22.9860219Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-02-03T00:40:22.9861129Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:26.367490046Z, ProjectID: 698143b5b2e54ee9959028e7, Cluster name: test-acc-tf-c-5333066995069009062
2026-02-03T00:40:22.9874588Z    test_name=TestAccBackupRSCloudBackupSnapshot_basic test_terraform_path=/home/runner/work/_temp/94eb3854-7c8a-40ca-953b-807f8c063dbc/terraform
2026-02-03T00:40:22.9875450Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:22.9875838Z         
2026-02-03T00:40:22.9876113Z         Error: Error in create
2026-02-03T00:40:22.9876378Z         
2026-02-03T00:40:22.9876766Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9877522Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9878244Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9878607Z         
2026-02-03T00:40:22.9879048Z         cluster name: test-acc-tf-c-5333066995069009062, API error details:
2026-02-03T00:40:22.9879757Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters
2026-02-03T00:40:22.9880492Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9881186Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9881711Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9882114Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (9.46s)
```

- 2026-02-04 PASS 21 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 23 minutes
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
- 2026-01-22 PASS 21 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 25 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 23 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 22 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING

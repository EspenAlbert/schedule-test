# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) |  | dev | timeout | 10815.10s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters | dev | out_of_capacity | 15.09s
[2026-02-19 01:18](#error-2026-02-19t0118290000) |  | dev | flaky_client | 2322.02s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 2612.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 27 minutes
- 2026-01-27 PASS 30 minutes
- 2026-01-28 PASS 31 minutes
- 2026-01-29 PASS 35 minutes
- 2026-01-30 PASS 36 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6628909Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-31T03:36:47.6631587Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-31T03:36:47.6635661Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-31T03:36:47.6636561Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:30.421550453Z, ProjectID: 697d4e407d00588dcf9ed1b3, Cluster name: test-acc-tf-c-1908402429456152472
2026-01-31T03:36:47.6647036Z   
2026-01-31T03:36:47.6679183Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-01-31T03:36:47.6679711Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-01-31T03:36:47.6680100Z         
2026-01-31T03:36:47.6680355Z         Error: Error in create
2026-01-31T03:36:47.6680617Z         
2026-01-31T03:36:47.6680979Z           with mongodbatlas_advanced_cluster.my_cluster,
2026-01-31T03:36:47.6681708Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2026-01-31T03:36:47.6682402Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2026-01-31T03:36:47.6682974Z         
2026-01-31T03:36:47.6683473Z         cluster=test-acc-tf-c-1908402429456152472 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6683972Z         error: context deadline exceeded
2026-01-31T03:36:47.6684375Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10815.96s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9857149Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-03T00:40:22.9859828Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-03T00:40:22.9906111Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-03T00:40:22.9907017Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:36.370227404Z, ProjectID: 698143b5b2e54ee9959028e7, Cluster name: test-acc-tf-c-1378474228191796520
2026-02-03T00:40:22.9919972Z    test_name=TestAccBackupRSCloudBackupSnapshot_sharded test_terraform_path=/home/runner/work/_temp/94eb3854-7c8a-40ca-953b-807f8c063dbc/terraform
2026-02-03T00:40:22.9920824Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-02-03T00:40:22.9921214Z         
2026-02-03T00:40:22.9921481Z         Error: Error in create
2026-02-03T00:40:22.9921748Z         
2026-02-03T00:40:22.9922125Z           with mongodbatlas_advanced_cluster.my_cluster,
2026-02-03T00:40:22.9922862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2026-02-03T00:40:22.9923568Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2026-02-03T00:40:22.9924038Z         
2026-02-03T00:40:22.9924619Z         cluster name: test-acc-tf-c-1378474228191796520, API error details:
2026-02-03T00:40:22.9925319Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5b2e54ee9959028e7/clusters
2026-02-03T00:40:22.9926044Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9926724Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9927255Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9927659Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (15.89s)
```

- 2026-02-04 PASS 42 minutes
- 2026-02-05 PASS 43 minutes
- 2026-02-06 PASS 48 minutes
- 2026-02-07 PASS 45 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 44 minutes
- 2026-02-10 PASS 43 minutes
- 2026-02-11 PASS 42 minutes
- 2026-02-12 PASS 44 minutes
- 2026-02-13 PASS 48 minutes
- 2026-02-14 PASS 46 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 45 minutes
- 2026-02-17 PASS 49 minutes
- 2026-02-18 PASS 43 minutes
- 2026-02-19

### Error 2026-02-19T01:18:29+00:00
```
2026-02-19T01:18:29.1719647Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-19T01:18:29.1722795Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-19T01:18:29.1726987Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-19T01:18:29.1727999Z     pre_check.go:46: Time before creating cluster: 2026-02-19T00:39:56.471943258Z, ProjectID: 69965bcb5b4417cf65b88492, Cluster name: test-acc-tf-c-4151662828642333364
2026-02-19T01:18:29.1733493Z   diagnostic_summary=
2026-02-19T01:18:29.1739219Z   
2026-02-19T01:18:29.1753258Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-19T01:18:29.1753864Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-02-19T01:18:29.1754273Z         
2026-02-19T01:18:29.1754559Z         Error: Error in create
2026-02-19T01:18:29.1754827Z         
2026-02-19T01:18:29.1755246Z           with mongodbatlas_advanced_cluster.my_cluster,
2026-02-19T01:18:29.1756089Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2026-02-19T01:18:29.1756863Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2026-02-19T01:18:29.1757237Z         
2026-02-19T01:18:29.1757776Z         cluster=test-acc-tf-c-4151662828642333364 didn't reach desired state: IDLE,
2026-02-19T01:18:29.1758236Z         error: Get
2026-02-19T01:18:29.1759097Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bcb5b4417cf65b88492/clusters/test-acc-tf-c-4151662828642333364":
2026-02-19T01:18:29.1759895Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-02-19T01:18:29.1760346Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (2322.24s)
```

- 2026-02-20 PASS 50 minutes
- 2026-02-21 PASS 41 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 45 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2692570Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-24T01:20:27.2697331Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-24T01:20:27.2704346Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-24T01:20:27.2706161Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:08.494587616Z, ProjectID: 699cf2a2ae2412ce621157e7, Cluster name: test-acc-tf-c-6898214486026203111
2026-02-24T01:20:27.2724191Z   
2026-02-24T01:20:27.2751463Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-02-24T01:20:27.2752389Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-02-24T01:20:27.2753067Z         
2026-02-24T01:20:27.2754292Z         Error: error taking a snapshot: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2755618Z         
2026-02-24T01:20:27.2756297Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-02-24T01:20:27.2757599Z           on terraform_plugin_test.tf line 65, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-02-24T01:20:27.2758837Z           65: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-02-24T01:20:27.2759455Z         
2026-02-24T01:20:27.2759994Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (2612.67s)
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
- 2026-02-01 PASS 30 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 29 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 31 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 28 minutes
  - PASS 26 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 28 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING

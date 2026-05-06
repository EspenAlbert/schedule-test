# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_onePolicy Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032558379397d109c237c/clusters | dev | out_of_capacity | 31.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 39 minutes
- 2026-04-08 PASS 15 minutes
- 2026-04-09 PASS 27 minutes
- 2026-04-10 PASS 22 minutes
- 2026-04-11 PASS 13 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 17 minutes
- 2026-04-14 PASS 14 minutes
- 2026-04-15 PASS 17 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.7968169Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-04-16T01:05:00.7973844Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-04-16T01:05:00.8049097Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-04-16T01:05:00.8049963Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:51:01.738838915Z, ProjectID: 69e032558379397d109c237c, Cluster name: test-acc-tf-c-5311449035062079892
2026-04-16T01:05:00.8063724Z    test_name=TestAccBackupRSCloudBackupSchedule_onePolicy
2026-04-16T01:05:00.8064387Z     resource_cloud_backup_schedule_test.go:222: Step 1/2 error: Error running apply: exit status 1
2026-04-16T01:05:00.8064855Z         
2026-04-16T01:05:00.8065136Z         Error: Error in create
2026-04-16T01:05:00.8065432Z         
2026-04-16T01:05:00.8065847Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8066889Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8067625Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8068010Z         
2026-04-16T01:05:00.8068461Z         cluster name: test-acc-tf-c-5311449035062079892, API error details:
2026-04-16T01:05:00.8069176Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032558379397d109c237c/clusters
2026-04-16T01:05:00.8069901Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8070593Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8071125Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8071558Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (31.61s)
```

- 2026-04-17 PASS 14 minutes
- 2026-04-18 PASS 22 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 15 minutes
- 2026-04-21 PASS 22 minutes
- 2026-04-22 PASS 53 minutes
- 2026-04-23 PASS 23 minutes
- 2026-04-24 PASS 18 minutes
- 2026-04-25 PASS 15 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 13 minutes
- 2026-04-28 PASS 14 minutes
- 2026-04-29 PASS 19 minutes
- 2026-04-30 PASS 28 minutes
- 2026-05-01 PASS 12 minutes
- 2026-05-02 PASS 16 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 minutes
- 2026-05-05 PASS 27 minutes
- 2026-05-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 16 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 17 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 13 minutes
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
- 2026-05-04 PASS 14 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 minutes

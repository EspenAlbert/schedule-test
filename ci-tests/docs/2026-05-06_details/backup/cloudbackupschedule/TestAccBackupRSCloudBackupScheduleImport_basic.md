# backup/cloudbackupschedule/TestAccBackupRSCloudBackupScheduleImport_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032558379397d109c237c/clusters | dev | out_of_capacity | 21.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 37 minutes
- 2026-04-08 PASS 16 minutes
- 2026-04-09 PASS 27 minutes
- 2026-04-10 PASS 21 minutes
- 2026-04-11 PASS 13 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 16 minutes
- 2026-04-14 PASS 16 minutes
- 2026-04-15 PASS 15 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.7971045Z === RUN   TestAccBackupRSCloudBackupScheduleImport_basic
2026-04-16T01:05:00.7975540Z === CONT  TestAccBackupRSCloudBackupScheduleImport_basic
2026-04-16T01:05:00.8024408Z === NAME  TestAccBackupRSCloudBackupScheduleImport_basic
2026-04-16T01:05:00.8025342Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:51.736948342Z, ProjectID: 69e032558379397d109c237c, Cluster name: test-acc-tf-c-471096669133339610
2026-04-16T01:05:00.8039590Z   
2026-04-16T01:05:00.8040103Z     resource_cloud_backup_schedule_test.go:377: Step 1/2 error: Error running apply: exit status 1
2026-04-16T01:05:00.8040570Z         
2026-04-16T01:05:00.8040860Z         Error: Error in create
2026-04-16T01:05:00.8041132Z         
2026-04-16T01:05:00.8041527Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8042277Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8042978Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8043344Z         
2026-04-16T01:05:00.8043774Z         cluster name: test-acc-tf-c-471096669133339610, API error details:
2026-04-16T01:05:00.8044470Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032558379397d109c237c/clusters
2026-04-16T01:05:00.8045177Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8045853Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8046548Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8046995Z --- FAIL: TestAccBackupRSCloudBackupScheduleImport_basic (21.01s)
```

- 2026-04-17 PASS 13 minutes
- 2026-04-18 PASS 20 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 13 minutes
- 2026-04-21 PASS 21 minutes
- 2026-04-22 PASS 51 minutes
- 2026-04-23 PASS 23 minutes
- 2026-04-24 PASS 15 minutes
- 2026-04-25 PASS 15 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 15 minutes
- 2026-04-28 PASS 15 minutes
- 2026-04-29 PASS 15 minutes
- 2026-04-30 PASS 26 minutes
- 2026-05-01 PASS 15 minutes
- 2026-05-02 PASS 15 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 14 minutes
- 2026-05-05 PASS 25 minutes
- 2026-05-06 PASS 23 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 16 minutes
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
- 2026-04-19 PASS 14 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 14 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 17 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 minutes
- 2026-05-04 PASS 16 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes

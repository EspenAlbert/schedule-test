# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032558379397d109c237c/clusters | dev | out_of_capacity | 55.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 43 minutes
- 2026-04-08 PASS 16 minutes
- 2026-04-09 PASS 28 minutes
- 2026-04-10 PASS 25 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 20 minutes
- 2026-04-14 PASS 16 minutes
- 2026-04-15 PASS 17 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.7966884Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-04-16T01:05:00.7974253Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2026-04-16T01:05:00.8047448Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-04-16T01:05:00.8048359Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:56.738667937Z, ProjectID: 69e032558379397d109c237c, Cluster name: test-acc-tf-c-6510577509187011265
2026-04-16T01:05:00.8089179Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2026-04-16T01:05:00.8089836Z     resource_cloud_backup_schedule_test.go:194: Step 1/4 error: Error running apply: exit status 1
2026-04-16T01:05:00.8090304Z         
2026-04-16T01:05:00.8090599Z         Error: Error in create
2026-04-16T01:05:00.8090875Z         
2026-04-16T01:05:00.8091281Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8092037Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8092744Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8093116Z         
2026-04-16T01:05:00.8093558Z         cluster name: test-acc-tf-c-6510577509187011265, API error details:
2026-04-16T01:05:00.8094259Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032558379397d109c237c/clusters
2026-04-16T01:05:00.8094977Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8095697Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8096230Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8096834Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (55.95s)
```

- 2026-04-17 PASS 18 minutes
- 2026-04-18 PASS 24 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 18 minutes
- 2026-04-21 PASS 21 minutes
- 2026-04-22 PASS 52 minutes
- 2026-04-23 PASS 25 minutes
- 2026-04-24 PASS 19 minutes
- 2026-04-25 PASS 16 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 17 minutes
- 2026-04-29 PASS 18 minutes
- 2026-04-30 PASS 28 minutes
- 2026-05-01 PASS 15 minutes
- 2026-05-02 PASS 18 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 minutes
- 2026-05-05 PASS 27 minutes
- 2026-05-06 PASS 19 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 18 minutes
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
- 2026-04-19 PASS 19 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 17 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 19 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 20 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 minutes

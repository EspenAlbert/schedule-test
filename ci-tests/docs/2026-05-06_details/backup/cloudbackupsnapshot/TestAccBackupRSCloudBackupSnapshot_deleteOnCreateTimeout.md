# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc71760a/clusters | dev | out_of_capacity | 11.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 46 minutes
- 2026-04-08 PASS 20 minutes
- 2026-04-09 PASS 26 minutes
- 2026-04-10 PASS 18 minutes
- 2026-04-11 PASS 16 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 21 minutes
- 2026-04-14 PASS 18 minutes
- 2026-04-15 PASS 20 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8101721Z === RUN   TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-04-16T01:05:00.8103308Z === CONT  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-04-16T01:05:00.8126430Z === NAME  TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout
2026-04-16T01:05:00.8127444Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:43.241668762Z, ProjectID: 69e032551ec945fedc71760a, Cluster name: test-acc-tf-c-2551991887723426340
2026-04-16T01:05:00.8141851Z   
2026-04-16T01:05:00.8142422Z     resource_test.go:111: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T01:05:00.8142937Z         
2026-04-16T01:05:00.8143217Z         Error: Error in create
2026-04-16T01:05:00.8143494Z         
2026-04-16T01:05:00.8143889Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8144643Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8145340Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8145711Z         
2026-04-16T01:05:00.8146148Z         cluster name: test-acc-tf-c-2551991887723426340, API error details:
2026-04-16T01:05:00.8147059Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc71760a/clusters
2026-04-16T01:05:00.8147777Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8148459Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8148990Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8149454Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_deleteOnCreateTimeout (11.03s)
```

- 2026-04-17 PASS 21 minutes
- 2026-04-18 PASS 26 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 16 minutes
- 2026-04-21 PASS 20 minutes
- 2026-04-22 PASS 57 minutes
- 2026-04-23 PASS 28 minutes
- 2026-04-24 PASS 22 minutes
- 2026-04-25 PASS 18 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 20 minutes
- 2026-04-28 PASS 21 minutes
- 2026-04-29 PASS 20 minutes
- 2026-04-30 PASS 26 minutes
- 2026-05-01 PASS 16 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 18 minutes
- 2026-05-05 PASS 31 minutes
- 2026-05-06 PASS 26 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 16 minutes
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
- 2026-04-19 PASS 20 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 20 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 24 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 18 minutes
- 2026-05-04 PASS 18 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 18 minutes

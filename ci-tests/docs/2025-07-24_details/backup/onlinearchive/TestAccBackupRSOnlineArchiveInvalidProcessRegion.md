# backup/onlinearchive/TestAccBackupRSOnlineArchiveInvalidProcessRegion Test Details
# Found 35 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-01 01:07](#error-2025-07-01t0107010000) |  | dev | unknown | 251.02s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 9 minutes
- 2025-06-26 PASS 13 minutes
- 2025-06-27 PASS 11 minutes
- 2025-06-28 PASS 11 minutes
- 2025-06-29 PASS 11 minutes
- 2025-06-30 PASS 14 minutes
- 2025-07-01
  - FAIL 4 minutes

### Error 2025-07-01T01:07:01+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-01T01:07:01.623000+00:00-TestAccBackupRSOnlineArchiveInvalidProcessRegion',confidence=1.0,ts_when='23 days ago')

```
2025-07-01T01:07:01.0623133Z === RUN   TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-07-01T01:07:01.0625276Z === CONT  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-07-01T01:07:01.0626312Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-07-01T01:07:01.0627198Z     pre_check.go:40: Time before creating cluster: 2025-07-01T00:43:20.432786918Z, ProjectID: 68632f208f2a6336ca1d1c57, Cluster name: test-acc-tf-c-1055619080495383280
2025-07-01T01:07:01.0643103Z === NAME  TestAccBackupRSOnlineArchiveInvalidProcessRegion
2025-07-01T01:07:01.0643838Z     resource_online_archive_test.go:219: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-07-01T01:07:01.0644527Z         
2025-07-01T01:07:01.0645746Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68632f208f2a6336ca1d1c57/clusters/test-acc-tf-c-1055619080495383280": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-07-01T01:07:01.0646618Z         
2025-07-01T01:07:01.0646974Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-07-01T01:07:01.0647665Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-07-01T01:07:01.0648313Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-07-01T01:07:01.0648766Z         
2025-07-01T01:07:01.0649099Z --- FAIL: TestAccBackupRSOnlineArchiveInvalidProcessRegion (251.16s)
```

  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-07-02 PASS 12 minutes
- 2025-07-03 PASS 11 minutes
- 2025-07-04 PASS 12 minutes
- 2025-07-05 PASS 11 minutes
- 2025-07-06 PASS 12 minutes
- 2025-07-07 PASS 12 minutes
- 2025-07-08 PASS 12 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 11 minutes
- 2025-07-13 PASS 12 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 11 minutes
- 2025-07-16 PASS 13 minutes
- 2025-07-17 PASS 11 minutes
- 2025-07-18 PASS 17 minutes
- 2025-07-19 PASS 9 minutes
- 2025-07-20 PASS 10 minutes
- 2025-07-21 PASS 11 minutes
- 2025-07-22 PASS 11 minutes
- 2025-07-23
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-07-24 PASS 12 minutes
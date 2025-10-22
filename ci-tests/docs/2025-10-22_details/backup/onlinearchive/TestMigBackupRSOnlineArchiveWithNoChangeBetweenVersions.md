# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 39 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:43](#error-2025-10-07t0343460000) |  | dev |  | 10804.05s
[2025-10-11 01:08](#error-2025-10-11t0108450000) |  | dev | flaky_client | 341.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 20 minutes
- 2025-09-25 PASS 26 minutes
- 2025-09-26 PASS 26 minutes
- 2025-09-27 PASS 19 minutes
- 2025-09-28 PASS 20 minutes
- 2025-09-29
  - PASS 40 minutes
  - PASS 17 minutes
- 2025-09-30
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 18 minutes
- 2025-10-01
  - PASS 22 minutes
  - PASS 23 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 22 minutes
  - PASS 31 minutes
  - PASS 21 minutes
- 2025-10-02 PASS 27 minutes
- 2025-10-03 PASS 37 minutes
- 2025-10-04 PASS 43 minutes
- 2025-10-05 PASS 17 minutes
- 2025-10-06 PASS 33 minutes
- 2025-10-07

### Error 2025-10-07T03:43:46+00:00
```
2025-10-07T03:43:46.8350205Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-10-07T03:43:46.8351234Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-7418075021019513977
2025-10-07T03:43:46.8356921Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-10-07T03:43:46.8376970Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-10-07T03:43:46.8377582Z     resource_migration_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-10-07T03:43:46.8377999Z         
2025-10-07T03:43:46.8378516Z         Error: Error in create
2025-10-07T03:43:46.8378792Z         
2025-10-07T03:43:46.8379169Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:43:46.8379864Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:43:46.8380511Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:43:46.8380849Z         
2025-10-07T03:43:46.8381301Z         cluster=test-acc-tf-c-8737380179009570287 didn't reach desired state: IDLE,
2025-10-07T03:43:46.8381764Z         error: context deadline exceeded
2025-10-07T03:43:46.8382211Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (10804.50s)
```

- 2025-10-08 PASS 20 minutes
- 2025-10-09 PASS 50 minutes
- 2025-10-10 PASS 20 minutes
- 2025-10-11

### Error 2025-10-11T01:08:45+00:00
```
2025-10-11T01:08:45.2825453Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-10-11T01:08:45.2826110Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-8326278247101969061
2025-10-11T01:08:45.2831158Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-10-11T01:08:45.2849958Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-10-11T01:08:45.2850570Z     resource_migration_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-10-11T01:08:45.2850968Z         
2025-10-11T01:08:45.2851232Z         Error: Error in create
2025-10-11T01:08:45.2851489Z         
2025-10-11T01:08:45.2851864Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-11T01:08:45.2852571Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-11T01:08:45.2853238Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-11T01:08:45.2853579Z         
2025-10-11T01:08:45.2854045Z         cluster=test-acc-tf-c-9002934197102644618 didn't reach desired state: IDLE,
2025-10-11T01:08:45.2854469Z         error: Get
2025-10-11T01:08:45.2855211Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e9a803e5f7141b76c1317d/clusters/test-acc-tf-c-9002934197102644618":
2025-10-11T01:08:45.2855943Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-11T01:08:45.2856427Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (341.57s)
```

- 2025-10-12 PASS 17 minutes
- 2025-10-13 PASS 25 minutes
- 2025-10-14 PASS 17 minutes
- 2025-10-15 PASS 18 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 19 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 21 minutes
- 2025-10-20 PASS 17 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 20 minutes
  - PASS 17 minutes
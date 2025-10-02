# backup/onlinearchive/TestAccBackupRSOnlineArchiveWithProcessRegion Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 01:22](#error-2025-09-14t0122590000) |  | qa |  | 999.10s
[2025-09-15 09:21](#error-2025-09-15t0921250000) |  | qa |  | 999.08s
[2025-09-29 01:37](#error-2025-09-29t0137280000) |  | dev | timeout | 1812.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 31 minutes
- 2025-09-04 PASS 33 minutes
- 2025-09-05 PASS 17 minutes
- 2025-09-06 PASS 24 minutes
- 2025-09-07 PASS 19 minutes
- 2025-09-08
  - PASS 27 minutes
  - PASS 26 minutes
  - PASS 24 minutes
- 2025-09-09 PASS 29 minutes
- 2025-09-10 PASS 22 minutes
- 2025-09-11 PASS 18 minutes
- 2025-09-12 PASS 19 minutes
- 2025-09-13 PASS 21 minutes
- 2025-09-14

### Error 2025-09-14T01:22:59+00:00
```
2025-09-14T01:22:59.4440479Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-14T01:22:59.4445796Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-14T01:22:59.4449457Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-14T01:22:59.4451005Z     pre_check.go:32: Time before creating cluster: 2025-09-14T00:48:59.212444692Z, ProjectID: 68c610f51411d835e95b7801, Cluster name: test-acc-tf-c-4043007584086502201
2025-09-14T01:22:59.4539914Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-14T01:22:59.4540483Z     resource_test.go:178: Step 2/4 error: Error running apply: exit status 1
2025-09-14T01:22:59.4540858Z         
2025-09-14T01:22:59.4541592Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-14T01:22:59.4542140Z         
2025-09-14T01:22:59.4542499Z           with mongodbatlas_online_archive.users_archive,
2025-09-14T01:22:59.4543209Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-14T01:22:59.4543845Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-14T01:22:59.4544175Z         
2025-09-14T01:22:59.4571488Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (999.97s)
```

- 2025-09-15
  - PASS 16 minutes
  - PASS 14 minutes
  - FAIL 16 minutes

### Error 2025-09-15T09:21:25+00:00
```
2025-09-15T09:21:25.3018546Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-15T09:21:25.3023776Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-15T09:21:25.3026974Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-15T09:21:25.3028524Z     pre_check.go:32: Time before creating cluster: 2025-09-15T06:41:00.847981468Z, ProjectID: 68c7b4f5fe60767b7f9b57de, Cluster name: test-acc-tf-c-250692727770407045
2025-09-15T09:21:25.3066199Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-15T09:21:25.3067128Z     resource_test.go:178: Step 2/4 error: Error running apply: exit status 1
2025-09-15T09:21:25.3067758Z         
2025-09-15T09:21:25.3069066Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-15T09:21:25.3070176Z         
2025-09-15T09:21:25.3070817Z           with mongodbatlas_online_archive.users_archive,
2025-09-15T09:21:25.3072071Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-15T09:21:25.3073221Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-15T09:21:25.3073798Z         
2025-09-15T09:21:25.3164690Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (999.82s)
```

- 2025-09-16 PASS 33 minutes
- 2025-09-17 PASS 20 minutes
- 2025-09-18 PASS 25 minutes
- 2025-09-19 PASS 20 minutes
- 2025-09-20 PASS 18 minutes
- 2025-09-21 PASS 17 minutes
- 2025-09-22 PASS 17 minutes
- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 19 minutes
- 2025-09-25 PASS 24 minutes
- 2025-09-26 PASS 23 minutes
- 2025-09-27 PASS 19 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29
  - FAIL 30 minutes

### Error 2025-09-29T01:37:28+00:00
```
2025-09-29T01:37:28.9335821Z === RUN   TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-29T01:37:28.9340619Z === CONT  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-29T01:37:28.9343638Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-29T01:37:28.9345004Z     pre_check.go:32: Time before creating cluster: 2025-09-29T00:48:02.403551498Z, ProjectID: 68d9d73b4e603f222fd99f4b, Cluster name: test-acc-tf-c-5386166454002091424
2025-09-29T01:37:28.9366597Z === NAME  TestAccBackupRSOnlineArchiveWithProcessRegion
2025-09-29T01:37:28.9367517Z     resource_test.go:178: Step 1/4 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-09-29T01:37:28.9369358Z --- FAIL: TestAccBackupRSOnlineArchiveWithProcessRegion (1812.38s)
```

  - PASS 16 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-10-01
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 31 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 31 minutes
  - PASS 22 minutes
- 2025-10-02 PASS 29 minutes
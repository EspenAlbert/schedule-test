# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL(x 2)
Success rate: 95.45%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-14 01:22](#error-2025-09-14t0122590000) |  | qa | 1126.02s
[2025-09-15 09:21](#error-2025-09-15t0921250000) |  | qa | 1004.10s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 26 minutes
- 2025-09-04 PASS 29 minutes
- 2025-09-05 PASS 18 minutes
- 2025-09-06 PASS 28 minutes
- 2025-09-07 PASS 23 minutes
- 2025-09-08
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-09-09 PASS 29 minutes
- 2025-09-10 PASS 21 minutes
- 2025-09-11 PASS 21 minutes
- 2025-09-12 PASS 20 minutes
- 2025-09-13 PASS 20 minutes
- 2025-09-14

### Error 2025-09-14T01:22:59+00:00
```
2025-09-14T01:22:59.4439269Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-09-14T01:22:59.4446437Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-09-14T01:22:59.4452145Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-09-14T01:22:59.4453590Z     pre_check.go:32: Time before creating cluster: 2025-09-14T00:49:04.212713071Z, ProjectID: 68c610f51411d835e95b7801, Cluster name: test-acc-tf-c-10977071853777326
2025-09-14T01:22:59.4553240Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-09-14T01:22:59.4553714Z     resource_test.go:131: Step 2/3 error: Error running apply: exit status 1
2025-09-14T01:22:59.4554074Z         
2025-09-14T01:22:59.4554791Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-14T01:22:59.4555329Z         
2025-09-14T01:22:59.4555690Z           with mongodbatlas_online_archive.users_archive,
2025-09-14T01:22:59.4556373Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-14T01:22:59.4557259Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-14T01:22:59.4557608Z         
2025-09-14T01:22:59.4565631Z    test_working_directory=/tmp/plugintest3651847681 test_step_number=2 test_name=TestAccBackupRSOnlineArchive test_terraform_path=/home/runner/work/_temp/76755be9-11a8-44ed-a330-8efa9cfcd25d/terraform
2025-09-14T01:22:59.4572892Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1126.20s)
```

- 2025-09-15
  - PASS 16 minutes
  - PASS 14 minutes
  - FAIL 16 minutes

### Error 2025-09-15T09:21:25+00:00
```
2025-09-15T09:21:25.3017329Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-09-15T09:21:25.3024411Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-09-15T09:21:25.3029842Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-09-15T09:21:25.3031326Z     pre_check.go:32: Time before creating cluster: 2025-09-15T06:41:05.850553134Z, ProjectID: 68c7b4f5fe60767b7f9b57de, Cluster name: test-acc-tf-c-3594136500740478939
2025-09-15T09:21:25.3089799Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-09-15T09:21:25.3090662Z     resource_test.go:131: Step 2/3 error: Error running apply: exit status 1
2025-09-15T09:21:25.3091297Z         
2025-09-15T09:21:25.3092599Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-15T09:21:25.3093595Z         
2025-09-15T09:21:25.3094232Z           with mongodbatlas_online_archive.users_archive,
2025-09-15T09:21:25.3095493Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-15T09:21:25.3096665Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-15T09:21:25.3097249Z         
2025-09-15T09:21:25.3112302Z    test_name=TestAccOnlineArchive_deleteOnCreateTimeout test_terraform_path=/home/runner/work/_temp/1835ed15-34f5-4758-9e25-9287d14b2827/terraform test_working_directory=/tmp/plugintest3593119127
2025-09-15T09:21:25.3165133Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (1004.96s)
```

- 2025-09-16 PASS 33 minutes
- 2025-09-17 PASS 20 minutes
- 2025-09-18 PASS 24 minutes
- 2025-09-19 PASS 17 minutes
- 2025-09-20 PASS 16 minutes
- 2025-09-21 PASS 17 minutes
- 2025-09-22 PASS 18 minutes
- 2025-09-23 PASS 20 minutes
- 2025-09-24 PASS 18 minutes
- 2025-09-25 PASS 25 minutes
- 2025-09-26 PASS 18 minutes
- 2025-09-27 PASS 18 minutes
- 2025-09-28 PASS 20 minutes
- 2025-09-29
  - PASS 31 minutes
  - PASS 14 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 19 minutes
  - PASS 18 minutes
- 2025-10-01
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 33 minutes
  - PASS 22 minutes
- 2025-10-02 PASS 28 minutes
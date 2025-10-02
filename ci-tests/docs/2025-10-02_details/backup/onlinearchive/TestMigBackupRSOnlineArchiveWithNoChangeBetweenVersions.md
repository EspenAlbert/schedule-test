# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-05 01:04](#error-2025-09-05t0104160000) |  | dev | 5.07s
[2025-09-14 01:22](#error-2025-09-14t0122590000) |  | qa | 1030.06s
[2025-09-15 09:21](#error-2025-09-15t0921250000) |  | qa | 1061.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 30 minutes
- 2025-09-04 PASS 34 minutes
- 2025-09-05

### Error 2025-09-05T01:04:16+00:00
```
2025-09-05T01:04:16.1365340Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-05T01:04:16.1366965Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-6292765060212362793
2025-09-05T01:04:16.1376255Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-05T01:04:16.1391522Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-05T01:04:16.1392173Z     resource_migration_test.go:26: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-09-05T01:04:16.1392597Z         
2025-09-05T01:04:16.1392927Z         Error: Insufficient replication_specs blocks
2025-09-05T01:04:16.1393223Z         
2025-09-05T01:04:16.1393807Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:04:16.1394453Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-05T01:04:16.1394785Z         
2025-09-05T01:04:16.1395131Z         At least 1 "replication_specs" blocks are required.
2025-09-05T01:04:16.1395432Z         
2025-09-05T01:04:16.1395698Z         Error: Unsupported argument
2025-09-05T01:04:16.1395957Z         
2025-09-05T01:04:16.1396544Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:04:16.1397051Z           21:   replication_specs = [{
2025-09-05T01:04:16.1397428Z         
2025-09-05T01:04:16.1397875Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-09-05T01:04:16.1398379Z         define a block of type "replication_specs"?
2025-09-05T01:04:16.1398669Z         
2025-09-05T01:04:16.1399090Z         Error: Unsupported argument
2025-09-05T01:04:16.1399356Z         
2025-09-05T01:04:16.1399927Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-05T01:04:16.1400393Z           36:   tags = {
2025-09-05T01:04:16.1400629Z         
2025-09-05T01:04:16.1401074Z         An argument named "tags" is not expected here. Did you mean to define a block
2025-09-05T01:04:16.1401489Z         of type "tags"?
2025-09-05T01:04:16.1401886Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (5.68s)
```

- 2025-09-06 PASS 29 minutes
- 2025-09-07 PASS 22 minutes
- 2025-09-08
  - PASS 27 minutes
  - PASS 27 minutes
  - PASS 25 minutes
- 2025-09-09 PASS 31 minutes
- 2025-09-10 PASS 26 minutes
- 2025-09-11 PASS 23 minutes
- 2025-09-12 PASS 21 minutes
- 2025-09-13 PASS 22 minutes
- 2025-09-14

### Error 2025-09-14T01:22:59+00:00
```
2025-09-14T01:22:59.4435179Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-14T01:22:59.4436330Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-142379678944038889
2025-09-14T01:22:59.4445006Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-14T01:22:59.4507822Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-14T01:22:59.4508877Z     resource_migration_test.go:26: Step 2/3 error: Error running apply: exit status 1
2025-09-14T01:22:59.4509549Z         
2025-09-14T01:22:59.4510843Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-14T01:22:59.4511792Z         
2025-09-14T01:22:59.4512416Z           with mongodbatlas_online_archive.users_archive,
2025-09-14T01:22:59.4513650Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-14T01:22:59.4514784Z           44: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-14T01:22:59.4515356Z         
2025-09-14T01:22:59.4538757Z    test_name=TestAccBackupRSOnlineArchiveWithProcessRegion test_terraform_path=/home/runner/work/_temp/76755be9-11a8-44ed-a330-8efa9cfcd25d/terraform test_working_directory=/tmp/plugintest2211156697
2025-09-14T01:22:59.4572025Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (1030.61s)
```

- 2025-09-15
  - PASS 18 minutes
  - PASS 17 minutes
  - FAIL 17 minutes

### Error 2025-09-15T09:21:25+00:00
```
2025-09-15T09:21:25.3013382Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-15T09:21:25.3014549Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-5921799338552365139
2025-09-15T09:21:25.3022980Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-15T09:21:25.3148860Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-09-15T09:21:25.3149674Z     resource_migration_test.go:26: Step 2/3 error: Error running apply: exit status 1
2025-09-15T09:21:25.3159265Z         
2025-09-15T09:21:25.3160760Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-15T09:21:25.3161334Z         
2025-09-15T09:21:25.3161729Z           with mongodbatlas_online_archive.users_archive,
2025-09-15T09:21:25.3162455Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-15T09:21:25.3163230Z           44: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-15T09:21:25.3163576Z         
2025-09-15T09:21:25.3165614Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (1061.75s)
```

- 2025-09-16 PASS 28 minutes
- 2025-09-17 PASS 20 minutes
- 2025-09-18 PASS 26 minutes
- 2025-09-19 PASS 17 minutes
- 2025-09-20 PASS 18 minutes
- 2025-09-21 PASS 19 minutes
- 2025-09-22 PASS 19 minutes
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
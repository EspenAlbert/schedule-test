# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 6)
Success rate: 84.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-15 01:06](#error-2025-08-15t0106440000) |  | dev |  | 4.05s
[2025-08-22 01:02](#error-2025-08-22t0102290000) |  | dev |  | 3.08s
[2025-08-25 01:28](#error-2025-08-25t0128190000) |  | dev | timeout | 1831.01s
[2025-08-27 01:25](#error-2025-08-27t0125560000) |  | dev | flaky_client | 397.07s
[2025-08-28 01:28](#error-2025-08-28t0128330000) |  | dev | timeout | 2434.06s
[2025-08-29 01:27](#error-2025-08-29t0127180000) |  | dev | unknown | 4.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 31 minutes
- 2025-08-07 PASS 41 minutes
- 2025-08-08 PASS 29 minutes
- 2025-08-09 PASS 26 minutes
- 2025-08-10 PASS 31 minutes
- 2025-08-11 PASS 42 minutes
- 2025-08-12
  - PASS 22 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 28 minutes
- 2025-08-15

### Error 2025-08-15T01:06:44+00:00
```
2025-08-15T01:06:44.4741947Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-15T01:06:44.4743438Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-694247614521293053
2025-08-15T01:06:44.4752596Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-15T01:06:44.4774678Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-15T01:06:44.4775805Z     resource_migration_test.go:26: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-08-15T01:06:44.4776517Z         
2025-08-15T01:06:44.4777094Z         Error: Insufficient replication_specs blocks
2025-08-15T01:06:44.4777597Z         
2025-08-15T01:06:44.4778666Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T01:06:44.4779827Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-15T01:06:44.4780406Z         
2025-08-15T01:06:44.4781015Z         At least 1 "replication_specs" blocks are required.
2025-08-15T01:06:44.4781536Z         
2025-08-15T01:06:44.4781999Z         Error: Unsupported argument
2025-08-15T01:06:44.4782702Z         
2025-08-15T01:06:44.4783962Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T01:06:44.4784877Z           21:   replication_specs = [{
2025-08-15T01:06:44.4785337Z         
2025-08-15T01:06:44.4786143Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-15T01:06:44.4787014Z         define a block of type "replication_specs"?
2025-08-15T01:06:44.4787518Z         
2025-08-15T01:06:44.4787973Z         Error: Unsupported argument
2025-08-15T01:06:44.4788417Z         
2025-08-15T01:06:44.4789467Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-15T01:06:44.4790467Z           36:   tags = {
2025-08-15T01:06:44.4790868Z         
2025-08-15T01:06:44.4791674Z         An argument named "tags" is not expected here. Did you mean to define a block
2025-08-15T01:06:44.4792606Z         of type "tags"?
2025-08-15T01:06:44.4793289Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (4.52s)
```

- 2025-08-16 PASS 31 minutes
- 2025-08-17 PASS 34 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 30 minutes
  - PASS 24 minutes
- 2025-08-21 PASS 28 minutes
- 2025-08-22

### Error 2025-08-22T01:02:29+00:00
```
2025-08-22T01:02:29.9791005Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-22T01:02:29.9792215Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-2815964850551924025
2025-08-22T01:02:29.9799354Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-22T01:02:29.9812883Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-22T01:02:29.9813534Z     resource_migration_test.go:26: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-08-22T01:02:29.9813961Z         
2025-08-22T01:02:29.9814293Z         Error: Insufficient replication_specs blocks
2025-08-22T01:02:29.9814593Z         
2025-08-22T01:02:29.9815190Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T01:02:29.9815857Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-22T01:02:29.9816189Z         
2025-08-22T01:02:29.9816536Z         At least 1 "replication_specs" blocks are required.
2025-08-22T01:02:29.9816847Z         
2025-08-22T01:02:29.9817114Z         Error: Unsupported argument
2025-08-22T01:02:29.9817373Z         
2025-08-22T01:02:29.9818100Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T01:02:29.9818637Z           21:   replication_specs = [{
2025-08-22T01:02:29.9818905Z         
2025-08-22T01:02:29.9819360Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-22T01:02:29.9819867Z         define a block of type "replication_specs"?
2025-08-22T01:02:29.9820155Z         
2025-08-22T01:02:29.9820410Z         Error: Unsupported argument
2025-08-22T01:02:29.9820669Z         
2025-08-22T01:02:29.9821254Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-22T01:02:29.9821917Z           36:   tags = {
2025-08-22T01:02:29.9822159Z         
2025-08-22T01:02:29.9822629Z         An argument named "tags" is not expected here. Did you mean to define a block
2025-08-22T01:02:29.9823186Z         of type "tags"?
2025-08-22T01:02:29.9823576Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (3.85s)
```

- 2025-08-23 PASS 28 minutes
- 2025-08-24 PASS 24 minutes
- 2025-08-25

### Error 2025-08-25T01:28:19+00:00
```
2025-08-25T01:28:19.2001337Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-25T01:28:19.2002359Z     resource_online_archive_migration_test.go:15: Creating execution project: test-acc-tf-p-6256036806304563613
2025-08-25T01:28:19.2007107Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-25T01:28:19.2029750Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-25T01:28:19.2030734Z     resource_online_archive_migration_test.go:27: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-25T01:28:19.2044861Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (1831.11s)
```

- 2025-08-26 PASS 37 minutes
- 2025-08-27

### Error 2025-08-27T01:25:56+00:00
```
2025-08-27T01:25:56.0284694Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-27T01:25:56.0285807Z     resource_online_archive_migration_test.go:15: Creating execution project: test-acc-tf-p-8818087856093071711
2025-08-27T01:25:56.0290484Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-27T01:25:56.0306267Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-27T01:25:56.0306932Z     resource_online_archive_migration_test.go:27: Step 1/3 error: Error running apply: exit status 1
2025-08-27T01:25:56.0307374Z         
2025-08-27T01:25:56.0308513Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae596d1868717faa7e3407/clusters/test-acc-tf-c-8938527517609897618": dial tcp 23.23.86.210:443: i/o timeout
2025-08-27T01:25:56.0309327Z         
2025-08-27T01:25:56.0309694Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-27T01:25:56.0310406Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-27T01:25:56.0311073Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-27T01:25:56.0311407Z         
2025-08-27T01:25:56.0311766Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (397.71s)
```

- 2025-08-28

### Error 2025-08-28T01:28:33+00:00
```
2025-08-28T01:28:33.0970442Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-28T01:28:33.0972001Z     resource_online_archive_migration_test.go:15: Creating execution project: test-acc-tf-p-8858178215918647129
2025-08-28T01:28:33.0980643Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-28T01:28:33.1019690Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-28T01:28:33.1021505Z     resource_online_archive_migration_test.go:27: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-08-28T01:28:33.1040790Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (2434.58s)
```

- 2025-08-29

### Error 2025-08-29T01:27:18+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-29T01:27:18.743000+00:00-TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions',confidence=1.0,ts_when='6 days ago')

```
2025-08-29T01:27:18.7431594Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-29T01:27:18.7432518Z     resource_migration_test.go:16: Creating execution project: test-acc-tf-p-8231866623375259970
2025-08-29T01:27:18.7438191Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-29T01:27:18.7451475Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-08-29T01:27:18.7452113Z     resource_migration_test.go:26: Step 1/3 error: Error running pre-apply plan: exit status 1
2025-08-29T01:27:18.7452530Z         
2025-08-29T01:27:18.7452862Z         Error: Insufficient replication_specs blocks
2025-08-29T01:27:18.7453165Z         
2025-08-29T01:27:18.7453751Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:27:18.7454404Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-29T01:27:18.7454741Z         
2025-08-29T01:27:18.7455081Z         At least 1 "replication_specs" blocks are required.
2025-08-29T01:27:18.7455385Z         
2025-08-29T01:27:18.7455664Z         Error: Unsupported argument
2025-08-29T01:27:18.7455925Z         
2025-08-29T01:27:18.7456505Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:27:18.7457142Z           21:   replication_specs = [{
2025-08-29T01:27:18.7457413Z         
2025-08-29T01:27:18.7457860Z         An argument named "replication_specs" is not expected here. Did you mean to
2025-08-29T01:27:18.7458365Z         define a block of type "replication_specs"?
2025-08-29T01:27:18.7458644Z         
2025-08-29T01:27:18.7458899Z         Error: Unsupported argument
2025-08-29T01:27:18.7459154Z         
2025-08-29T01:27:18.7459731Z           on terraform_plugin_test.tf line 36, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-29T01:27:18.7460203Z           36:   tags = {
2025-08-29T01:27:18.7460436Z         
2025-08-29T01:27:18.7460990Z         An argument named "tags" is not expected here. Did you mean to define a block
2025-08-29T01:27:18.7461530Z         of type "tags"?
2025-08-29T01:27:18.7461918Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (4.17s)
```

- 2025-08-30 PASS 29 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - PASS 2 hours
  - PASS 20 minutes
  - PASS 20 minutes
  - PASS 27 minutes
  - PASS 22 minutes
  - PASS 24 minutes
  - PASS 29 minutes
  - PASS 31 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03 PASS 30 minutes
- 2025-09-04 PASS 34 minutes
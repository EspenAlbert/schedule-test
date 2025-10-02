# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 4)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 01:22](#error-2025-09-14t0122590000) |  | qa |  | 1100.03s
[2025-09-15 09:21](#error-2025-09-15t0921250000) |  | qa |  | 984.08s
[2025-09-21 01:27](#error-2025-09-21t0127200000) | ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS /api/atlas/v2/groups/68cf4ac2bd1cb41a3e70933a/clusters/test-acc-tf-c-3509434194925150054/onlineArchives/68cf4dee5ccc8c441718edda | qa | flaky_500 | 1104.10s
[2025-09-29 01:37](#error-2025-09-29t0137280000) |  | dev | timeout | 1832.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 28 minutes
- 2025-09-04 PASS 33 minutes
- 2025-09-05 PASS 17 minutes
- 2025-09-06 PASS 30 minutes
- 2025-09-07 PASS 37 minutes
- 2025-09-08
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 26 minutes
- 2025-09-09 PASS 28 minutes
- 2025-09-10 PASS 20 minutes
- 2025-09-11 PASS 26 minutes
- 2025-09-12 PASS 19 minutes
- 2025-09-13 PASS 22 minutes
- 2025-09-14

### Error 2025-09-14T01:22:59+00:00
```
2025-09-14T01:22:59.4438183Z === RUN   TestAccBackupRSOnlineArchive
2025-09-14T01:22:59.4447186Z === CONT  TestAccBackupRSOnlineArchive
2025-09-14T01:22:59.4454695Z === NAME  TestAccBackupRSOnlineArchive
2025-09-14T01:22:59.4456253Z     pre_check.go:32: Time before creating cluster: 2025-09-14T00:49:09.216127229Z, ProjectID: 68c610f51411d835e95b7801, Cluster name: test-acc-tf-c-7102619596301524567
2025-09-14T01:22:59.4566441Z === NAME  TestAccBackupRSOnlineArchive
2025-09-14T01:22:59.4567131Z     resource_test.go:35: Step 2/7 error: Error running apply: exit status 1
2025-09-14T01:22:59.4567497Z         
2025-09-14T01:22:59.4568207Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-14T01:22:59.4568738Z         
2025-09-14T01:22:59.4569094Z           with mongodbatlas_online_archive.users_archive,
2025-09-14T01:22:59.4569780Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-14T01:22:59.4570417Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-14T01:22:59.4570740Z         
2025-09-14T01:22:59.4572513Z --- FAIL: TestAccBackupRSOnlineArchive (1100.25s)
```

- 2025-09-15
  - PASS 16 minutes
  - PASS 15 minutes
  - FAIL 16 minutes

### Error 2025-09-15T09:21:25+00:00
```
2025-09-15T09:21:25.3016240Z === RUN   TestAccBackupRSOnlineArchive
2025-09-15T09:21:25.3024973Z === CONT  TestAccBackupRSOnlineArchive
2025-09-15T09:21:25.3035361Z === NAME  TestAccBackupRSOnlineArchive
2025-09-15T09:21:25.3036812Z     pre_check.go:32: Time before creating cluster: 2025-09-15T06:41:15.857284535Z, ProjectID: 68c7b4f5fe60767b7f9b57de, Cluster name: test-acc-tf-c-8534449076425787364
2025-09-15T09:21:25.3137581Z === NAME  TestAccBackupRSOnlineArchive
2025-09-15T09:21:25.3138406Z     resource_test.go:35: Step 2/7 error: Error running apply: exit status 1
2025-09-15T09:21:25.3139024Z         
2025-09-15T09:21:25.3140287Z         Error: error creating MongoDB Atlas Online Archive:: (504 Gateway Timeout) failed to decode response body: undefined response type
2025-09-15T09:21:25.3140837Z         
2025-09-15T09:21:25.3141212Z           with mongodbatlas_online_archive.users_archive,
2025-09-15T09:21:25.3141914Z           on terraform_plugin_test.tf line 42, in resource "mongodbatlas_online_archive" "users_archive":
2025-09-15T09:21:25.3142566Z           42: 	resource "mongodbatlas_online_archive" "users_archive" {
2025-09-15T09:21:25.3142900Z         
2025-09-15T09:21:25.3147812Z    test_name=TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions test_terraform_path=/home/runner/work/_temp/1835ed15-34f5-4758-9e25-9287d14b2827/terraform test_working_directory=/tmp/plugintest1837302485 test_step_number=2
2025-09-15T09:21:25.3164267Z --- FAIL: TestAccBackupRSOnlineArchive (984.81s)
```

- 2025-09-16 PASS 29 minutes
- 2025-09-17 PASS 21 minutes
- 2025-09-18 PASS 26 minutes
- 2025-09-19 PASS 17 minutes
- 2025-09-20 PASS 17 minutes
- 2025-09-21

### Error 2025-09-21T01:27:20+00:00
```
2025-09-21T01:27:20.6619603Z === RUN   TestAccBackupRSOnlineArchive
2025-09-21T01:27:20.6625073Z === CONT  TestAccBackupRSOnlineArchive
2025-09-21T01:27:20.6633357Z === NAME  TestAccBackupRSOnlineArchive
2025-09-21T01:27:20.6634875Z     pre_check.go:32: Time before creating cluster: 2025-09-21T00:46:21.295328441Z, ProjectID: 68cf4ac2bd1cb41a3e70933a, Cluster name: test-acc-tf-c-3509434194925150054
2025-09-21T01:27:20.6646563Z   diagnostic_summary=
2025-09-21T01:27:20.6652450Z    tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_online_archive tf_req_id=a198eef1-b80f-fd35-ddb7-a5cc8f9e545c tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.9
2025-09-21T01:27:20.6685254Z === NAME  TestAccBackupRSOnlineArchive
2025-09-21T01:27:20.6686307Z     resource_test.go:35: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-21T01:27:20.6687101Z         
2025-09-21T01:27:20.6691800Z         Error: error deleting MongoDB Atlas Online Archive: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf4ac2bd1cb41a3e70933a/clusters/test-acc-tf-c-3509434194925150054/onlineArchives/68cf4dee5ccc8c441718edda DELETE: HTTP 400 Bad Request (Error code: "ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS") Detail: Too many concurrent operations were made to modify Online Archives. Please try again. Reason: Bad Request. Params: [], BadRequestDetail:  archive_id (68cf4dee5ccc8c441718edda)
2025-09-21T01:27:20.6695038Z         
2025-09-21T01:27:20.6695468Z --- FAIL: TestAccBackupRSOnlineArchive (1104.99s)
```

- 2025-09-22 PASS 19 minutes
- 2025-09-23 PASS 18 minutes
- 2025-09-24 PASS 20 minutes
- 2025-09-25 PASS 25 minutes
- 2025-09-26 PASS 17 minutes
- 2025-09-27 PASS 18 minutes
- 2025-09-28 PASS 19 minutes
- 2025-09-29
  - FAIL 30 minutes

### Error 2025-09-29T01:37:28+00:00
```
2025-09-29T01:37:28.9333758Z === RUN   TestAccBackupRSOnlineArchive
2025-09-29T01:37:28.9343053Z === CONT  TestAccBackupRSOnlineArchive
2025-09-29T01:37:28.9351563Z === NAME  TestAccBackupRSOnlineArchive
2025-09-29T01:37:28.9352491Z     pre_check.go:32: Time before creating cluster: 2025-09-29T00:48:22.409268585Z, ProjectID: 68d9d73b4e603f222fd99f4b, Cluster name: test-acc-tf-c-1525656519922969697
2025-09-29T01:37:28.9362877Z     resource_test.go:35: Step 1/7 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2025-09-29T01:37:28.9369788Z --- FAIL: TestAccBackupRSOnlineArchive (1832.69s)
```

  - PASS 16 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-10-01
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 23 minutes
  - PASS 31 minutes
  - PASS 22 minutes
- 2025-10-02 PASS 26 minutes
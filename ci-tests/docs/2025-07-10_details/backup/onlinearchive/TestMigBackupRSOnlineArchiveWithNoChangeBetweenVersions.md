# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029450000) |  | qa |  | 0.01s
[2025-06-05 00:36](#error-2025-06-05t0036030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e5a6161ca93c1f0542f4/clusters | dev | flaky_500 | 11.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 minutes
- 2025-04-13 PASS 24 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 17 minutes
- 2025-04-16
  - PASS 17 minutes
  - PASS 21 minutes
- 2025-04-17 PASS 17 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 16 minutes
- 2025-04-20 PASS 20 minutes
- 2025-04-21 PASS 16 minutes
- 2025-04-22 PASS 17 minutes
- 2025-04-23 PASS 15 minutes
- 2025-04-24 PASS 17 minutes
- 2025-04-25 PASS 17 minutes
- 2025-04-26 PASS 18 minutes
- 2025-04-27 PASS 19 minutes
- 2025-04-28 PASS 16 minutes
- 2025-04-29 PASS 17 minutes
- 2025-04-30 PASS 15 minutes
- 2025-05-01
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-05-02 PASS 17 minutes
- 2025-05-03 PASS 18 minutes
- 2025-05-04 PASS 17 minutes
- 2025-05-05 PASS 14 minutes
- 2025-05-06 PASS 19 minutes
- 2025-05-07 PASS 17 minutes
- 2025-05-08 PASS 17 minutes
- 2025-05-09 PASS 19 minutes
- 2025-05-10 PASS 17 minutes
- 2025-05-11

### Error 2025-05-11T00:29:45+00:00
```
2025-05-11T00:29:45.9976115Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-05-11T00:29:45.9976865Z     resource_online_archive_migration_test.go:15: Creating execution project: test-acc-tf-p-6952355378310893961
2025-05-11T00:29:45.9977450Z     resource_online_archive_migration_test.go:15: 
2025-05-11T00:29:45.9978366Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:45.9980213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:45.9982120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:45.9984037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/onlinearchive/resource_online_archive_migration_test.go:15
2025-05-11T00:29:45.9984877Z         	Error:      	Received unexpected error:
2025-05-11T00:29:45.9985699Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.9986354Z         	Test:       	TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-05-11T00:29:45.9987407Z         	Messages:   	Project creation failed: test-acc-tf-p-6952355378310893961, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:45.9988197Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (0.09s)
```

- 2025-05-12 PASS 19 minutes
- 2025-05-13
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-05-14 PASS 18 minutes
- 2025-05-15 PASS 19 minutes
- 2025-05-16 PASS 18 minutes
- 2025-05-17 PASS 17 minutes
- 2025-05-18 PASS 18 minutes
- 2025-05-19 PASS 17 minutes
- 2025-05-20 PASS 17 minutes
- 2025-05-21 PASS 16 minutes
- 2025-05-22 PASS 19 minutes
- 2025-05-23 PASS 20 minutes
- 2025-05-24 PASS 17 minutes
- 2025-05-25 PASS 17 minutes
- 2025-05-26 PASS 18 minutes
- 2025-05-27 PASS 18 minutes
- 2025-05-28
  - PASS 24 minutes
  - PASS 18 minutes
- 2025-05-29 PASS 30 minutes
- 2025-05-30
  - PASS an hour
  - PASS 18 minutes
- 2025-05-31 PASS 17 minutes
- 2025-06-01
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 16 minutes
  - PASS 17 minutes
- 2025-06-02
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-06-03 PASS 17 minutes
- 2025-06-04 PASS 18 minutes
- 2025-06-05

### Error 2025-06-05T00:36:03+00:00
```
2025-06-05T00:36:03.3437971Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-06-05T00:36:03.3439277Z     resource_online_archive_migration_test.go:15: Creating execution project: test-acc-tf-p-6153879103072158144
2025-06-05T00:36:03.3446854Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-06-05T00:36:03.3463206Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2025-06-05T00:36:03.3464432Z     resource_online_archive_migration_test.go:27: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:36:03.3465420Z         
2025-06-05T00:36:03.3468234Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e5a6161ca93c1f0542f4/clusters POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:36:03.3470363Z         
2025-06-05T00:36:03.3471043Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:36:03.3472354Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:36:03.3473575Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:36:03.3474181Z         
2025-06-05T00:36:03.3474978Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (11.81s)
```

- 2025-06-06 PASS 17 minutes
- 2025-06-07 PASS 18 minutes
- 2025-06-08 PASS 18 minutes
- 2025-06-09 PASS 16 minutes
- 2025-06-10 PASS 20 minutes
- 2025-06-11
  - PASS 18 minutes
  - PASS 17 minutes
- 2025-06-12 PASS 17 minutes
- 2025-06-13 PASS 19 minutes
- 2025-06-14 PASS 39 minutes
- 2025-06-15 PASS 18 minutes
- 2025-06-16 PASS 24 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18 PASS 18 minutes
- 2025-06-19 PASS 38 minutes
- 2025-06-20 PASS 20 minutes
- 2025-06-21 PASS 17 minutes
- 2025-06-22 PASS 19 minutes
- 2025-06-23 PASS 17 minutes
- 2025-06-24 PASS 17 minutes
- 2025-06-25 PASS 15 minutes
- 2025-06-26 PASS 27 minutes
- 2025-06-27 PASS 17 minutes
- 2025-06-28 PASS 18 minutes
- 2025-06-29 PASS 19 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 16 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 16 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06 PASS 17 minutes
- 2025-07-07 PASS 15 minutes
- 2025-07-08 PASS 18 minutes
- 2025-07-09 PASS 18 minutes
- 2025-07-10 PASS 18 minutes
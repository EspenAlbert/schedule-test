# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029430000) |  | qa |  | 0.02s
[2025-06-05 00:33](#error-2025-06-05t0033000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4bb161ca93c1f051e4e/clusters/test-acc-tf-c-3885445452259381646 | dev | flaky_500 | 190.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 18 minutes
- 2025-04-13 PASS 21 minutes
- 2025-04-14 PASS 17 minutes
- 2025-04-15 PASS 18 minutes
- 2025-04-16
  - PASS 19 minutes
  - PASS 22 minutes
- 2025-04-17 PASS 19 minutes
- 2025-04-18 PASS 19 minutes
- 2025-04-19 PASS 17 minutes
- 2025-04-20 PASS 20 minutes
- 2025-04-21 PASS 18 minutes
- 2025-04-22 PASS 20 minutes
- 2025-04-23 PASS 19 minutes
- 2025-04-24 PASS 19 minutes
- 2025-04-25 PASS 18 minutes
- 2025-04-26 PASS 18 minutes
- 2025-04-27 PASS 21 minutes
- 2025-04-28 PASS 17 minutes
- 2025-04-29 PASS 17 minutes
- 2025-04-30 PASS 19 minutes
- 2025-05-01
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-05-02 PASS 18 minutes
- 2025-05-03 PASS 20 minutes
- 2025-05-04 PASS 18 minutes
- 2025-05-05 PASS 17 minutes
- 2025-05-06 PASS 19 minutes
- 2025-05-07 PASS 19 minutes
- 2025-05-08 PASS 19 minutes
- 2025-05-09 PASS 19 minutes
- 2025-05-10 PASS 20 minutes
- 2025-05-11

### Error 2025-05-11T00:29:43+00:00
```
2025-05-11T00:29:43.5213365Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-05-11T00:29:43.5218464Z     resource_cloud_backup_snapshot_migration_test.go:13: Creating execution project: test-acc-tf-p-6938849563130105118
2025-05-11T00:29:43.5219720Z     resource_cloud_backup_snapshot_migration_test.go:13: 
2025-05-11T00:29:43.5221753Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.5224714Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.5227748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:43.5231983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_cloud_backup_snapshot_migration_test.go:13
2025-05-11T00:29:43.5233737Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.5235374Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.5236458Z         	Test:       	TestMigBackupRSCloudBackupSnapshot_basic
2025-05-11T00:29:43.5238336Z         	Messages:   	Project creation failed: test-acc-tf-p-6938849563130105118, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.5239632Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (0.18s)
```

- 2025-05-12 PASS 16 minutes
- 2025-05-13
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-05-14 PASS 27 minutes
- 2025-05-15 PASS 17 minutes
- 2025-05-16 PASS 18 minutes
- 2025-05-17 PASS 17 minutes
- 2025-05-18 PASS 19 minutes
- 2025-05-19 PASS 18 minutes
- 2025-05-20 PASS 18 minutes
- 2025-05-21 PASS 19 minutes
- 2025-05-22 PASS 20 minutes
- 2025-05-23 PASS 19 minutes
- 2025-05-24 PASS 19 minutes
- 2025-05-25 PASS 21 minutes
- 2025-05-26 PASS 17 minutes
- 2025-05-27 PASS 17 minutes
- 2025-05-28
  - PASS 27 minutes
  - PASS 18 minutes
- 2025-05-29 PASS 23 minutes
- 2025-05-30
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-05-31 PASS 17 minutes
- 2025-06-01
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 16 minutes
- 2025-06-02
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-06-03 PASS 17 minutes
- 2025-06-04 PASS 19 minutes
- 2025-06-05

### Error 2025-06-05T00:33:00+00:00
```
2025-06-05T00:33:00.5266901Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-06-05T00:33:00.5267584Z     resource_cloud_backup_snapshot_migration_test.go:13: Creating execution project: test-acc-tf-p-1428666664325556557
2025-06-05T00:33:00.5270794Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2025-06-05T00:33:00.5282288Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2025-06-05T00:33:00.5283041Z     resource_cloud_backup_snapshot_migration_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:33:00.5283517Z         
2025-06-05T00:33:00.5285310Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bb161ca93c1f051e4e/clusters/test-acc-tf-c-3885445452259381646 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:33:00.5286471Z         
2025-06-05T00:33:00.5286846Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:33:00.5287672Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:33:00.5288329Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:33:00.5288675Z         
2025-06-05T00:33:00.5288985Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (190.22s)
```

- 2025-06-06 PASS 18 minutes
- 2025-06-07 PASS 19 minutes
- 2025-06-08 PASS 18 minutes
- 2025-06-09 PASS 17 minutes
- 2025-06-10 PASS 30 minutes
- 2025-06-11
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-06-12 PASS 18 minutes
- 2025-06-13 PASS 18 minutes
- 2025-06-14 PASS 23 minutes
- 2025-06-15 PASS 18 minutes
- 2025-06-16 PASS 16 minutes
- 2025-06-17 PASS 17 minutes
- 2025-06-18 PASS 26 minutes
- 2025-06-19 PASS 29 minutes
- 2025-06-20 PASS 19 minutes
- 2025-06-21 PASS 20 minutes
- 2025-06-22 PASS 20 minutes
- 2025-06-23 PASS 16 minutes
- 2025-06-24 PASS 16 minutes
- 2025-06-25 PASS 18 minutes
- 2025-06-26 PASS 17 minutes
- 2025-06-27 PASS 18 minutes
- 2025-06-28 PASS 17 minutes
- 2025-06-29 PASS 20 minutes
- 2025-06-30 PASS 20 minutes
- 2025-07-01
  - PASS 17 minutes
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 17 minutes
- 2025-07-06 PASS 18 minutes
- 2025-07-07 PASS 18 minutes
- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 35 minutes
- 2025-07-10 PASS 16 minutes
# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029430000) |  | qa |  | 0.00s
[2025-06-05 00:33](#error-2025-06-05t0033000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4bb161ca93c1f051e4e/clusters/test-acc-tf-c-2898194829800831127 | dev | flaky_500 | 201.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 24 minutes
- 2025-04-13 PASS 27 minutes
- 2025-04-14 PASS 22 minutes
- 2025-04-15 PASS 23 minutes
- 2025-04-16
  - PASS 24 minutes
  - PASS 26 minutes
- 2025-04-17 PASS 25 minutes
- 2025-04-18 PASS 24 minutes
- 2025-04-19 PASS 23 minutes
- 2025-04-20 PASS 25 minutes
- 2025-04-21 PASS 22 minutes
- 2025-04-22 PASS 22 minutes
- 2025-04-23 PASS 22 minutes
- 2025-04-24 PASS 25 minutes
- 2025-04-25 PASS 24 minutes
- 2025-04-26 PASS 25 minutes
- 2025-04-27 PASS 24 minutes
- 2025-04-28 PASS 22 minutes
- 2025-04-29 PASS 23 minutes
- 2025-04-30 PASS 27 minutes
- 2025-05-01
  - PASS 23 minutes
  - PASS 24 minutes
  - PASS 24 minutes
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-05-02 PASS 22 minutes
- 2025-05-03 PASS 22 minutes
- 2025-05-04 PASS 22 minutes
- 2025-05-05 PASS 24 minutes
- 2025-05-06 PASS 24 minutes
- 2025-05-07 PASS 22 minutes
- 2025-05-08 PASS 26 minutes
- 2025-05-09 PASS 24 minutes
- 2025-05-10 PASS 22 minutes
- 2025-05-11

### Error 2025-05-11T00:29:43+00:00
```
2025-05-11T00:29:43.5284212Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-05-11T00:29:43.5285341Z     resource_cloud_backup_snapshot_test.go:71: Creating execution project: test-acc-tf-p-3243600166091877626
2025-05-11T00:29:43.5286322Z     resource_cloud_backup_snapshot_test.go:71: 
2025-05-11T00:29:43.5287952Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.5291269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.5295095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_cloud_backup_snapshot_test.go:71
2025-05-11T00:29:43.5296649Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.5298451Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.5299537Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2025-05-11T00:29:43.5301682Z         	Messages:   	Project creation failed: test-acc-tf-p-3243600166091877626, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.5302988Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (0.01s)
```

- 2025-05-12 PASS 25 minutes
- 2025-05-13
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-05-14 PASS 28 minutes
- 2025-05-15 PASS 23 minutes
- 2025-05-16 PASS 23 minutes
- 2025-05-17 PASS 23 minutes
- 2025-05-18 PASS 26 minutes
- 2025-05-19 PASS 24 minutes
- 2025-05-20 PASS 22 minutes
- 2025-05-21 PASS 23 minutes
- 2025-05-22 PASS 25 minutes
- 2025-05-23 PASS 24 minutes
- 2025-05-24 PASS 24 minutes
- 2025-05-25 PASS 23 minutes
- 2025-05-26 PASS 24 minutes
- 2025-05-27 PASS 22 minutes
- 2025-05-28
  - PASS 32 minutes
  - PASS 23 minutes
- 2025-05-29 PASS 28 minutes
- 2025-05-30
  - PASS 25 minutes
  - PASS 23 minutes
- 2025-05-31 PASS 23 minutes
- 2025-06-01
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-06-02
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 24 minutes
- 2025-06-05

### Error 2025-06-05T00:33:00+00:00
```
2025-06-05T00:33:00.5270046Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-06-05T00:33:00.5271895Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-06-05T00:33:00.5273776Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-06-05T00:33:00.5274716Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:05.411610829Z, ProjectID: 6840e4bb161ca93c1f051e4e, Cluster name: test-acc-tf-c-2898194829800831127
2025-06-05T00:33:00.5282027Z   
2025-06-05T00:33:00.5332625Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-06-05T00:33:00.5333228Z     resource_cloud_backup_snapshot_test.go:77: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:33:00.5333664Z         
2025-06-05T00:33:00.5335458Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bb161ca93c1f051e4e/clusters/test-acc-tf-c-2898194829800831127 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:33:00.5336624Z         
2025-06-05T00:33:00.5337097Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-06-05T00:33:00.5337784Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-06-05T00:33:00.5338427Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-06-05T00:33:00.5338762Z         
2025-06-05T00:33:00.5339067Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (201.03s)
```

- 2025-06-06 PASS 23 minutes
- 2025-06-07 PASS 23 minutes
- 2025-06-08 PASS 24 minutes
- 2025-06-09 PASS 23 minutes
- 2025-06-10 PASS 45 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-06-12 PASS 23 minutes
- 2025-06-13 PASS 25 minutes
- 2025-06-14 PASS 2 hours
- 2025-06-15 PASS 25 minutes
- 2025-06-16 PASS 26 minutes
- 2025-06-17 PASS 26 minutes
- 2025-06-18 PASS 32 minutes
- 2025-06-19 PASS 29 minutes
- 2025-06-20 PASS 24 minutes
- 2025-06-21 PASS 23 minutes
- 2025-06-22 PASS 21 minutes
- 2025-06-23 PASS 21 minutes
- 2025-06-24 PASS 24 minutes
- 2025-06-25 PASS 24 minutes
- 2025-06-26 PASS 21 minutes
- 2025-06-27 PASS 25 minutes
- 2025-06-28 PASS 22 minutes
- 2025-06-29 PASS 23 minutes
- 2025-06-30 PASS 25 minutes
- 2025-07-01
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 22 minutes
- 2025-07-02 PASS 23 minutes
- 2025-07-03 PASS 22 minutes
- 2025-07-04 PASS 37 minutes
- 2025-07-05 PASS 22 minutes
- 2025-07-06 PASS 23 minutes
- 2025-07-07 PASS 24 minutes
- 2025-07-08 PASS 23 minutes
- 2025-07-09 PASS 39 minutes
- 2025-07-10 PASS 25 minutes
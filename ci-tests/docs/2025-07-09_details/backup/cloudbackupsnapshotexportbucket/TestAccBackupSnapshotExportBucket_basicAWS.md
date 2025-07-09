# backup/cloudbackupsnapshotexportbucket/TestAccBackupSnapshotExportBucket_basicAWS Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL
Success rate: 99.12%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 40 seconds
### 2025-04-12
#### PASS 40 seconds
### 2025-04-13
#### PASS 39 seconds
### 2025-04-14
#### PASS 45 seconds
### 2025-04-15
#### PASS 41 seconds
### 2025-04-16
#### PASS 40 seconds
#### PASS 41 seconds
### 2025-04-17
#### PASS 41 seconds
### 2025-04-18
#### PASS 41 seconds
### 2025-04-19
#### PASS 40 seconds
### 2025-04-20
#### PASS 40 seconds
### 2025-04-21
#### PASS 40 seconds
### 2025-04-22
#### PASS 41 seconds
### 2025-04-23
#### PASS 43 seconds
### 2025-04-24
#### PASS 45 seconds
### 2025-04-25
#### PASS 40 seconds
### 2025-04-26
#### PASS 43 seconds
### 2025-04-27
#### PASS 42 seconds
### 2025-04-28
#### PASS 41 seconds
### 2025-04-29
#### PASS 43 seconds
### 2025-04-30
#### PASS 46 seconds
### 2025-05-01
#### PASS 40 seconds
#### PASS 41 seconds
#### PASS 41 seconds
#### PASS 40 seconds
#### PASS 48 seconds
#### PASS 41 seconds
#### PASS 53 seconds
### 2025-05-02
#### PASS 45 seconds
### 2025-05-03
#### PASS 42 seconds
### 2025-05-04
#### PASS 40 seconds
### 2025-05-05
#### PASS 45 seconds
### 2025-05-06
#### PASS 40 seconds
### 2025-05-07
#### PASS 47 seconds
### 2025-05-08
#### PASS 40 seconds
### 2025-05-09
#### PASS 40 seconds
### 2025-05-10
#### PASS 46 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:43.7234757Z === RUN   TestAccBackupSnapshotExportBucket_basicAWS
2025-05-11T00:29:43.7235948Z     resource_cloud_backup_snapshot_export_bucket_test.go:22: Creating execution project: test-acc-tf-p-8521916446052397244
2025-05-11T00:29:43.7237077Z     resource_cloud_backup_snapshot_export_bucket_test.go:22: 
2025-05-11T00:29:43.7238736Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.7241954Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.7245970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:33
2025-05-11T00:29:43.7250447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshotexportbucket/resource_cloud_backup_snapshot_export_bucket_test.go:22
2025-05-11T00:29:43.7272633Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.7274159Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.7275184Z         	Test:       	TestAccBackupSnapshotExportBucket_basicAWS
2025-05-11T00:29:43.7276960Z         	Messages:   	Project creation failed: test-acc-tf-p-8521916446052397244, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.7287859Z --- FAIL: TestAccBackupSnapshotExportBucket_basicAWS (0.01s)
```
### 2025-05-12
#### PASS 41 seconds
### 2025-05-13
#### PASS 45 seconds
#### PASS 40 seconds
### 2025-05-14
#### PASS 40 seconds
### 2025-05-15
#### PASS 41 seconds
### 2025-05-16
#### PASS 40 seconds
### 2025-05-17
#### PASS 44 seconds
### 2025-05-18
#### PASS 40 seconds
### 2025-05-19
#### PASS 40 seconds
### 2025-05-20
#### PASS 45 seconds
### 2025-05-21
#### PASS 43 seconds
### 2025-05-22
#### PASS 40 seconds
### 2025-05-23
#### PASS 45 seconds
### 2025-05-24
#### PASS 46 seconds
### 2025-05-25
#### PASS 44 seconds
### 2025-05-26
#### PASS 42 seconds
### 2025-05-27
#### PASS 39 seconds
### 2025-05-28
#### PASS 45 seconds
#### PASS 45 seconds
### 2025-05-29
#### PASS 45 seconds
### 2025-05-30
#### PASS 40 seconds
#### PASS 45 seconds
### 2025-05-31
#### PASS 40 seconds
### 2025-06-01
#### PASS 40 seconds
#### PASS 41 seconds
#### PASS 41 seconds
#### PASS 40 seconds
#### PASS 40 seconds
#### PASS 40 seconds
### 2025-06-02
#### PASS 45 seconds
#### PASS 42 seconds
#### PASS 58 seconds
### 2025-06-03
#### PASS 45 seconds
### 2025-06-04
#### PASS 43 seconds
### 2025-06-05
#### PASS 43 seconds
### 2025-06-06
#### PASS 41 seconds
### 2025-06-07
#### PASS 40 seconds
### 2025-06-08
#### PASS 45 seconds
### 2025-06-09
#### PASS 41 seconds
### 2025-06-10
#### PASS 40 seconds
### 2025-06-11
#### PASS 40 seconds
#### PASS 41 seconds
### 2025-06-12
#### PASS 41 seconds
### 2025-06-13
#### PASS 43 seconds
### 2025-06-14
#### PASS 45 seconds
### 2025-06-15
#### PASS 40 seconds
### 2025-06-16
#### PASS 42 seconds
### 2025-06-17
#### PASS 45 seconds
### 2025-06-18
#### PASS 46 seconds
### 2025-06-19
#### PASS 44 seconds
### 2025-06-20
#### PASS 45 seconds
### 2025-06-21
#### PASS 44 seconds
### 2025-06-22
#### PASS 44 seconds
### 2025-06-23
#### PASS 45 seconds
### 2025-06-24
#### PASS 41 seconds
### 2025-06-25
#### PASS 42 seconds
### 2025-06-26
#### PASS 45 seconds
### 2025-06-27
#### PASS 45 seconds
### 2025-06-28
#### PASS 40 seconds
### 2025-06-29
#### PASS 39 seconds
### 2025-06-30
#### PASS 40 seconds
### 2025-07-01
#### PASS 40 seconds
#### PASS 43 seconds
#### PASS 44 seconds
#### PASS 42 seconds
#### PASS 39 seconds
#### PASS 45 seconds
### 2025-07-02
#### PASS 43 seconds
### 2025-07-03
#### PASS 43 seconds
### 2025-07-04
#### PASS 43 seconds
### 2025-07-05
#### PASS 40 seconds
### 2025-07-06
#### PASS 45 seconds
### 2025-07-07
#### PASS 40 seconds
### 2025-07-08
#### PASS 42 seconds
### 2025-07-09
#### PASS 46 seconds
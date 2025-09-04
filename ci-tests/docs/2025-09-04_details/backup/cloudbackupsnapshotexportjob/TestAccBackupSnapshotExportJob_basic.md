# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL TIMEOUT
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-27 01:11](#error-2025-08-27t0111590000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68ae50fc8c9e474c785b7fb1/cloudProviderAccess/68ae587026447013f8332883 | dev | flaky_client | 758.03s
[2025-09-01 05:30](#error-2025-09-01t0530140000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68b4e91746ef690a79d6ca2e/cloudProviderAccess/68b5136b7af6b0372e9657f3 | dev |  | 7175.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 26 minutes
- 2025-08-07 PASS 36 minutes
- 2025-08-08 PASS 21 minutes
- 2025-08-09 PASS 22 minutes
- 2025-08-10 PASS 27 minutes
- 2025-08-11 PASS 24 minutes
- 2025-08-12
  - PASS 21 minutes
  - PASS 18 minutes
- 2025-08-13 PASS 29 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15 PASS 20 minutes
- 2025-08-16 PASS 25 minutes
- 2025-08-17 PASS 32 minutes
- 2025-08-18 PASS 18 minutes
- 2025-08-19 PASS 22 minutes
- 2025-08-20
  - PASS 23 minutes
  - PASS 32 minutes
- 2025-08-21 PASS 26 minutes
- 2025-08-22 PASS 20 minutes
- 2025-08-23 PASS 20 minutes
- 2025-08-24 PASS 28 minutes
- 2025-08-25 PASS 18 minutes
- 2025-08-26 PASS 29 minutes
- 2025-08-27

### Error 2025-08-27T01:11:59+00:00
```
2025-08-27T01:11:59.2145944Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-08-27T01:11:59.2147363Z     pre_check.go:40: Time before creating cluster: 2025-08-27T00:59:20.939063387Z, ProjectID: 68ae50fc8c9e474c785b7fb1, Cluster name: test-acc-tf-c-4455214272852881279
2025-08-27T01:11:59.2150314Z 2025/08/27 00:59:30 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae50fc8c9e474c785b7fb1/cloudProviderAccess/68ae587026447013f8332883 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3853771132237165699). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3853771132237165699], BadRequestDetail:  
2025-08-27T01:11:59.2152075Z 2025/08/27 00:59:30 retrying
2025-08-27T01:11:59.2164034Z   
2025-08-27T01:11:59.2164571Z     resource_cloud_backup_snapshot_export_job_test.go:20: Step 1/2 error: Error running apply: exit status 1
2025-08-27T01:11:59.2165039Z         
2025-08-27T01:11:59.2166181Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae50fc8c9e474c785b7fb1/clusters/test-acc-tf-c-4455214272852881279": dial tcp 23.23.86.210:443: i/o timeout
2025-08-27T01:11:59.2167006Z         
2025-08-27T01:11:59.2167371Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-27T01:11:59.2168071Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-27T01:11:59.2168909Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-27T01:11:59.2169255Z         
2025-08-27T01:11:59.2177526Z    test_name=TestAccBackupSnapshotExportJob_basic test_step_number=1 test_terraform_path=/home/runner/work/_temp/10e7b002-fa8e-402d-8e0b-83258ed03e32/terraform test_working_directory=/tmp/plugintest3598458066
2025-08-27T01:11:59.2178722Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-27T01:11:59.2179166Z         
2025-08-27T01:11:59.2180393Z         Error: error deleting cloud provider access Delete "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae50fc8c9e474c785b7fb1/cloudProviderAccess/AWS/68ae587026447013f8332883": dial tcp 3.228.247.77:443: i/o timeout
2025-08-27T01:11:59.2181278Z         
2025-08-27T01:11:59.2181556Z --- FAIL: TestAccBackupSnapshotExportJob_basic (758.26s)
```

- 2025-08-28 PASS 22 minutes
- 2025-08-29 PASS 35 minutes
- 2025-08-30 PASS 24 minutes
- 2025-08-31 PASS 28 minutes
- 2025-09-01
  - TIMEOUT an hour

### Error 2025-09-01T05:30:14+00:00
```
2025-09-01T05:30:14.9338750Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-09-01T05:30:14.9339589Z     pre_check.go:40: Time before creating cluster: 2025-09-01T03:30:44.710359651Z, ProjectID: 68b4e91746ef690a79d6ca2e, Cluster name: test-acc-tf-c-4759277122054485189
2025-09-01T05:30:14.9342302Z 2025/09/01 03:30:52 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b4e91746ef690a79d6ca2e/cloudProviderAccess/68b5136b7af6b0372e9657f3 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5490792625108675403). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5490792625108675403], BadRequestDetail:  
2025-09-01T05:30:14.9344049Z 2025/09/01 03:30:52 retrying
2025-09-01T05:30:14.9344312Z panic: test timed out after 5h0m0s
2025-09-01T05:30:14.9344588Z 	running tests:
2025-09-01T05:30:14.9344312Z panic: test timed out after 5h0m0s
2025-09-01T05:30:14.9344588Z 	running tests:
2025-09-01T05:30:14.9344882Z 		TestAccBackupSnapshotExportJob_basic (1h59m35s)
```

  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 20 minutes
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 21 minutes
- 2025-09-02 PASS 25 minutes
- 2025-09-03 PASS 31 minutes
- 2025-09-04 PASS 26 minutes
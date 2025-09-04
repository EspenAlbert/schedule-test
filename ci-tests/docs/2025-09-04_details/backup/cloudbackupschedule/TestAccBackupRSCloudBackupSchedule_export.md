# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-27 01:07](#error-2025-08-27t0107270000) |  | dev | dangling_resource | 42.00s
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10848.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 17 minutes
- 2025-08-07 PASS 25 minutes
- 2025-08-08 PASS 15 minutes
- 2025-08-09 PASS 18 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS 40 minutes
- 2025-08-12
  - PASS 31 minutes
  - PASS 16 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 19 minutes
- 2025-08-15 PASS 12 minutes
- 2025-08-16 PASS 41 minutes
- 2025-08-17 PASS 30 minutes
- 2025-08-18 PASS 17 minutes
- 2025-08-19 PASS 15 minutes
- 2025-08-20
  - PASS 16 minutes
  - PASS 35 minutes
- 2025-08-21 PASS 17 minutes
- 2025-08-22 PASS 12 minutes
- 2025-08-23 PASS 21 minutes
- 2025-08-24 PASS 16 minutes
- 2025-08-25 PASS 15 minutes
- 2025-08-26 PASS 24 minutes
- 2025-08-27

### Error 2025-08-27T01:07:27+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-08-27T01:07:27.865000+00:00-TestAccBackupRSCloudBackupSchedule_export',confidence=1.0,ts_when='8 days ago')

```
2025-08-27T01:07:27.0865332Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2025-08-27T01:07:27.0875014Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2025-08-27T01:07:27.0882198Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2025-08-27T01:07:27.0883052Z     pre_check.go:40: Time before creating cluster: 2025-08-27T00:28:05.506344184Z, ProjectID: 68ae50faaa49ce49aab87f23, Cluster name: test-acc-tf-c-1843536231637078190
2025-08-27T01:07:27.0891500Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2025-08-27T01:07:27.0892096Z     resource_cloud_backup_schedule_test.go:161: Step 1/1 error: Error running apply: exit status 1
2025-08-27T01:07:27.0892529Z         
2025-08-27T01:07:27.0893454Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-5874005981200313399): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T01:07:27.0894538Z         	status code: 409, request id: afd69d68-7444-4b83-bf74-2792c22a18f9
2025-08-27T01:07:27.0894908Z         
2025-08-27T01:07:27.0895198Z           with aws_iam_role.test_role,
2025-08-27T01:07:27.0895778Z           on terraform_plugin_test.tf line 126, in resource "aws_iam_role" "test_role":
2025-08-27T01:07:27.0896306Z          126:     resource "aws_iam_role" "test_role" {
2025-08-27T01:07:27.0896590Z         
2025-08-27T01:07:27.0898551Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (42.03s)
```

- 2025-08-28 PASS 19 minutes
- 2025-08-29 PASS 36 minutes
- 2025-08-30 PASS 16 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2906355Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2025-09-01T03:31:33.2913416Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2025-09-01T03:31:33.2918875Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2025-09-01T03:31:33.2919712Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:34.801451391Z, ProjectID: 68b4e91546ef690a79d6bd03, Cluster name: test-acc-tf-c-4258889040084612046
2025-09-01T03:31:33.3027945Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2025-09-01T03:31:33.3028609Z     resource_cloud_backup_schedule_test.go:161: Step 1/1 error: Error running apply: exit status 1
2025-09-01T03:31:33.3029045Z         
2025-09-01T03:31:33.3029757Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.3030306Z         
2025-09-01T03:31:33.3030664Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.3031481Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.3032136Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.3032474Z         
2025-09-01T03:31:33.3040534Z    test_working_directory=/tmp/plugintest2894890002 test_name=TestAccBackupRSCloudBackupSchedule_basic test_terraform_path=/home/runner/work/_temp/0c1781f9-fcce-4bb9-8b25-1b6dfc863162/terraform
2025-09-01T03:31:33.3057875Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (10848.33s)
```

  - PASS an hour
  - PASS an hour
  - PASS 18 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 24 minutes
- 2025-09-04 PASS 16 minutes
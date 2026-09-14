# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL(x 2)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 02:23](#error-2026-09-11t0223410000) |  | dev | 6095.04s
[2026-09-11 07:27](#error-2026-09-11t0727510000) |  | dev | 2528.08s

### Timeline
- 2026-09-07 PASS 28 minutes
- 2026-09-08 PASS 29 minutes
- 2026-09-09 PASS 42 minutes
- 2026-09-10 PASS 46 minutes
- 2026-09-11
  - FAIL an hour

### Error 2026-09-11T02:23:41+00:00
```
2026-09-11T02:23:41.1965845Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-09-11T02:23:41.1971024Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-09-11T02:23:41.1975329Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-09-11T02:23:41.1976278Z     pre_check.go:46: Time before creating cluster: 2026-09-11T00:41:59.183008935Z, ProjectID: 6aa34e451761787ecbe0ebf0, Cluster name: test-acc-tf-c-2261866820261663781
2026-09-11T02:23:41.1979316Z   diagnostic_summary=
2026-09-11T02:23:41.1981874Z    tf_rpc=ApplyResourceChange
2026-09-11T02:23:41.2019125Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-09-11T02:23:41.2019682Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-09-11T02:23:41.2020358Z         
2026-09-11T02:23:41.2021056Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa360851761787ecbe7d1f0) status was: failed
2026-09-11T02:23:41.2021607Z         
2026-09-11T02:23:41.2022010Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T02:23:41.2022769Z           on terraform_plugin_test.tf line 65, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T02:23:41.2023485Z           65: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T02:23:41.2023997Z         
2026-09-11T02:23:41.2035545Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (6095.36s)
```

  - FAIL 42 minutes

### Error 2026-09-11T07:27:51+00:00
```
2026-09-11T07:27:51.1454751Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-09-11T07:27:51.1457440Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-09-11T07:27:51.1462497Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-09-11T07:27:51.1464902Z     pre_check.go:46: Time before creating cluster: 2026-09-11T06:41:04.910351763Z, ProjectID: 6aa3a26f821e0ea7a45d7a63, Cluster name: test-acc-tf-c-8033390456788547857
2026-09-11T07:27:51.1467620Z   diagnostic_summary=
2026-09-11T07:27:51.1473584Z    tf_proto_version=6.11 tf_req_id=23da3dcf-6390-7526-bc65-8e158b3b8fd4 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-09-11T07:27:51.1495994Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-09-11T07:27:51.1496727Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-09-11T07:27:51.1497157Z         
2026-09-11T07:27:51.1497860Z         Error: error creating a snapshot: error creating MongoDB snapshot(6aa3aa4f821e0ea7a4626678) status was: failed
2026-09-11T07:27:51.1498405Z         
2026-09-11T07:27:51.1498808Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-09-11T07:27:51.1499703Z           on terraform_plugin_test.tf line 65, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-09-11T07:27:51.1500443Z           65: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-09-11T07:27:51.1500833Z         
2026-09-11T07:27:51.1501693Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (2528.78s)
```

- 2026-09-12 PASS 30 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 29 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING

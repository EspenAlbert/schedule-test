# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6902b115abf4374f3298c420/cloudProviderAccess/6902b120abf4374f32995d72 | dev | timeout | 11846.03s
[2025-11-24 03:30](#error-2025-11-24t0330300000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6923a6fd21519f56cb8536cb/cloudProviderAccess/6923ab4421519f56cb87411c | dev | timeout | 4395.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 19 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3646847Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-10-30T04:45:03.3647606Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project: test-acc-tf-p-6090005229631593068
2025-10-30T04:45:03.3650417Z 2025/10/30 00:28:18 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b115abf4374f3298c420/cloudProviderAccess/6902b120abf4374f32995d72 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5181402626815904208). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5181402626815904208], BadRequestDetail:  
2025-10-30T04:45:03.3652388Z 2025/10/30 00:28:18 retrying
2025-10-30T04:45:03.3661402Z    test_name=TestAccBackupSnapshotExportJob_basic
2025-10-30T04:45:03.3662168Z     resource_cloud_backup_snapshot_export_job_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:45:03.3662724Z         
2025-10-30T04:45:03.3662986Z         Error: Error in delete
2025-10-30T04:45:03.3663233Z         
2025-10-30T04:45:03.3663660Z         cluster=test-acc-tf-c-6031245316731403495 didn't reach desired state:
2025-10-30T04:45:03.3664275Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:45:03.3664739Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:45:03.3665101Z --- FAIL: TestAccBackupSnapshotExportJob_basic (11846.27s)
```

- 2025-10-31 PASS 20 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 21 minutes
- 2025-11-05
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-11-06 PASS 26 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 49 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 17 minutes
- 2025-11-11 PASS 20 minutes
- 2025-11-12 PASS 19 minutes
- 2025-11-13 PASS 31 minutes
- 2025-11-14 PASS 19 minutes
- 2025-11-15 PASS 20 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 17 minutes
- 2025-11-18 PASS 21 minutes
- 2025-11-19
  - PASS 18 minutes
  - PASS 16 minutes
- 2025-11-20 PASS 25 minutes
- 2025-11-21 PASS 16 minutes
- 2025-11-22 PASS 20 minutes
- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T03:30:30+00:00
```
2025-11-24T03:30:30.5878538Z === RUN   TestAccBackupSnapshotExportJob_basic
2025-11-24T03:30:30.5880408Z 2025/11/24 00:48:04 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6923a6fd21519f56cb8536cb/cloudProviderAccess/6923ab4421519f56cb87411c PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6939361349183689869). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6939361349183689869], BadRequestDetail:  
2025-11-24T03:30:30.5882287Z 2025/11/24 00:48:04 retrying
2025-11-24T03:30:30.5883079Z   diagnostic_summary=
2025-11-24T03:30:30.5889059Z    tf_req_id=852722b4-1966-2c30-c63a-0bcff491f66c tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_cloud_backup_snapshot diagnostic_detail="" diagnostic_severity=ERROR
2025-11-24T03:30:30.5899614Z   
2025-11-24T03:30:30.5900123Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-11-24T03:30:30.5900747Z         
2025-11-24T03:30:30.5901517Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-11-24T03:30:30.5902674Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-11-24T03:30:30.5905166Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6923a6fd21519f56cb8536cb/clusters/test-acc-tf-c-5240409085247654268/backup/snapshots/6923adf921519f56cb874e5e DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 6923adf921519f56cb874e5e. Reason: Bad Request. Params: [6923adf921519f56cb874e5e], BadRequestDetail: 
2025-11-24T03:30:30.5906630Z         
2025-11-24T03:30:30.5906982Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-11-24T03:30:30.5907673Z           on terraform_plugin_test.tf line 104, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-11-24T03:30:30.5908299Z          104: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-11-24T03:30:30.5908634Z         
2025-11-24T03:30:30.5908907Z --- FAIL: TestAccBackupSnapshotExportJob_basic (4395.09s)
```

- 2025-11-25 PASS 22 minutes
- 2025-11-26 PASS 17 minutes
- 2025-11-27 PASS 29 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 25 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 43 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 27 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 24 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 26 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING

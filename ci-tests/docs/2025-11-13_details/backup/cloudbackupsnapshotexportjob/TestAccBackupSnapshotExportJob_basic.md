# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6902b115abf4374f3298c420/cloudProviderAccess/6902b120abf4374f32995d72 | dev | timeout | 11846.03s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 18 minutes
- 2025-10-16 PASS 27 minutes
- 2025-10-17 PASS 17 minutes
- 2025-10-18 PASS 20 minutes
- 2025-10-19 PASS 28 minutes
- 2025-10-20
  - PASS 31 minutes
  - PASS 17 minutes
- 2025-10-21 PASS 19 minutes
- 2025-10-22
  - PASS 18 minutes
  - PASS 24 minutes
- 2025-10-23 PASS 24 minutes
- 2025-10-24 PASS 19 minutes
- 2025-10-25 PASS 19 minutes
- 2025-10-26 PASS 26 minutes
- 2025-10-27 PASS 19 minutes
- 2025-10-28 PASS 21 minutes
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
- 2025-11-02 PASS 25 minutes
- 2025-11-03 PASS 19 minutes
- 2025-11-04 PASS 21 minutes
- 2025-11-05
  - PASS 19 minutes
  - PASS 19 minutes
- 2025-11-06 PASS 26 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 49 minutes
- 2025-11-09 PASS 43 minutes
- 2025-11-10 PASS 17 minutes
- 2025-11-11 PASS 20 minutes
- 2025-11-12 PASS 19 minutes
- 2025-11-13
  - PASS 31 minutes
  - PASS 27 minutes
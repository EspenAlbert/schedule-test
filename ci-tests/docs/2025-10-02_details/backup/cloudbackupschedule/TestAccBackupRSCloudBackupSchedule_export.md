# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-11 00:46](#error-2025-09-11t0046290000) |  | dev | flaky_client | 1162.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 24 minutes
- 2025-09-04 PASS 16 minutes
- 2025-09-05 PASS 17 minutes
- 2025-09-06 PASS 21 minutes
- 2025-09-07 PASS 15 minutes
- 2025-09-08
  - PASS 26 minutes
  - PASS 17 minutes
  - PASS 20 minutes
- 2025-09-09 PASS 22 minutes
- 2025-09-10 PASS 20 minutes
- 2025-09-11

### Error 2025-09-11T00:46:29+00:00
```
2025-09-11T00:46:29.4220724Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2025-09-11T00:46:29.4227647Z === CONT  TestAccBackupRSCloudBackupSchedule_export
2025-09-11T00:46:29.4259859Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2025-09-11T00:46:29.4260850Z     pre_check.go:32: Time before creating cluster: 2025-09-11T00:27:26.205191064Z, ProjectID: 68c217554e35e91a1b2b2615, Cluster name: test-acc-tf-c-4912046139796381847
2025-09-11T00:46:29.4282077Z === NAME  TestAccBackupRSCloudBackupSchedule_export
2025-09-11T00:46:29.4282819Z     resource_cloud_backup_schedule_test.go:162: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-11T00:46:29.4283357Z         
2025-09-11T00:46:29.4283624Z         Error: Error in delete
2025-09-11T00:46:29.4283884Z         
2025-09-11T00:46:29.4284325Z         cluster=test-acc-tf-c-4912046139796381847 didn't reach desired state:
2025-09-11T00:46:29.4284757Z         DELETED, error: Get
2025-09-11T00:46:29.4285534Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c217554e35e91a1b2b2615/clusters/test-acc-tf-c-4912046139796381847":
2025-09-11T00:46:29.4286261Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-09-11T00:46:29.4286752Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (1162.63s)
```

- 2025-09-12 PASS 14 minutes
- 2025-09-13 PASS 21 minutes
- 2025-09-14 PASS 11 minutes
- 2025-09-15
  - PASS 11 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-09-16 PASS 16 minutes
- 2025-09-17 PASS 14 minutes
- 2025-09-18 PASS 24 minutes
- 2025-09-19 PASS 14 minutes
- 2025-09-20 PASS 16 minutes
- 2025-09-21 PASS 16 minutes
- 2025-09-22 PASS 14 minutes
- 2025-09-23 PASS 17 minutes
- 2025-09-24 PASS 19 minutes
- 2025-09-25 PASS 15 minutes
- 2025-09-26 PASS 14 minutes
- 2025-09-27 PASS 14 minutes
- 2025-09-28 PASS 15 minutes
- 2025-09-29
  - PASS 15 minutes
  - PASS 11 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-10-01
  - PASS 17 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-10-02 PASS 12 minutes
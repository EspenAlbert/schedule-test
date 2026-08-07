# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 18 TestRuns in dev, qa from 2026-07-10 to 2026-08-07 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-10 02:44](#error-2026-07-10t0244520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-756452455821544856 | dev | flaky_500 | 3268.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10

### Error 2026-07-10T02:44:52+00:00
```
2026-07-10T02:44:52.3105758Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-07-10T02:44:52.3107169Z     resource_migration_test.go:16: Creating execution project (1): test-acc-tf-p-5391018418490724214
2026-07-10T02:44:52.3114561Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-07-10T02:44:52.3164689Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-07-10T02:44:52.3165847Z     resource_migration_test.go:26: Step 1/3 error: Check failed: timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-07-10T02:44:52.3173918Z    test_working_directory=/tmp/plugintest3607884223 test_step_number=1 test_name=TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-07-10T02:44:52.3174888Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-10T02:44:52.3175384Z         
2026-07-10T02:44:52.3175672Z         Error: Error in delete
2026-07-10T02:44:52.3175955Z         
2026-07-10T02:44:52.3176410Z         cluster name: test-acc-tf-c-756452455821544856, API error details:
2026-07-10T02:44:52.3177334Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a504d34aea6151790a7c908/clusters/test-acc-tf-c-756452455821544856
2026-07-10T02:44:52.3178187Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2026-07-10T02:44:52.3178856Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2026-07-10T02:44:52.3179314Z         BadRequestDetail: 
2026-07-10T02:44:52.3179758Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (3268.22s)
```

- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13 PASS 50 minutes
- 2026-07-14: MISSING
- 2026-07-15 PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17 PASS 40 minutes
- 2026-07-18: MISSING
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22 PASS 59 minutes
- 2026-07-23: MISSING
- 2026-07-24 PASS 2 hours
- 2026-07-25: MISSING
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28: MISSING
- 2026-07-29 PASS 40 minutes
- 2026-07-30: MISSING
- 2026-07-31 PASS 25 minutes
- 2026-08-01: MISSING
- 2026-08-02: MISSING
- 2026-08-03 PASS 21 minutes
- 2026-08-04: MISSING
- 2026-08-05 PASS 20 minutes
- 2026-08-06: MISSING
- 2026-08-07 PASS 22 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 27 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 19 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 28 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 27 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29 PASS 23 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 19 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

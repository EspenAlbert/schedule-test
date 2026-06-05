# backup/onlinearchive/TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions Test Details
# Found 17 TestRuns in dev, qa from 2026-05-08 to 2026-06-05 from master branch: 1 unique tests, PASS(x 16) FAIL
Success rate: 94.12%

## DEV Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08 PASS 45 minutes
- 2026-05-09: MISSING
- 2026-05-10: MISSING
- 2026-05-11 PASS 39 minutes
- 2026-05-12: MISSING
- 2026-05-13 PASS 31 minutes
- 2026-05-14: MISSING
- 2026-05-15 PASS 31 minutes
- 2026-05-16: MISSING
- 2026-05-17: MISSING
- 2026-05-18 PASS 54 minutes
- 2026-05-19: MISSING
- 2026-05-20 PASS 39 minutes
- 2026-05-21: MISSING
- 2026-05-22 PASS an hour
- 2026-05-23: MISSING
- 2026-05-24: MISSING
- 2026-05-25 PASS 31 minutes
- 2026-05-26: MISSING
- 2026-05-27 PASS an hour
- 2026-05-28: MISSING
- 2026-05-29 PASS 43 minutes
- 2026-05-30: MISSING
- 2026-05-31: MISSING
- 2026-06-01 PASS 57 minutes
- 2026-06-02: MISSING
- 2026-06-03 PASS 43 minutes
- 2026-06-04: MISSING
- 2026-06-05 PASS 33 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-31 01:52](#error-2026-05-31t0152000000) | ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS /api/atlas/v2/groups/6a1b8e694b92bebf8ebc46dc/clusters/test-acc-tf-c-4020981114183656180/onlineArchives | qa | 1176.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 23 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 24 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 24 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31

### Error 2026-05-31T01:52:00+00:00
```
2026-05-31T01:52:00.5149240Z === RUN   TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-05-31T01:52:00.5149929Z     resource_migration_test.go:16: Creating execution project (1): test-acc-tf-p-8198099906448229614
2026-05-31T01:52:00.5154745Z === CONT  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-05-31T01:52:00.5263119Z === NAME  TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions
2026-05-31T01:52:00.5263719Z     resource_migration_test.go:26: Step 2/3 error: Error running apply: exit status 1
2026-05-31T01:52:00.5264134Z         
2026-05-31T01:52:00.5266418Z         Error: error creating MongoDB Atlas Online Archive:: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6a1b8e694b92bebf8ebc46dc/clusters/test-acc-tf-c-4020981114183656180/onlineArchives POST: HTTP 400 Bad Request (Error code: "ONLINE_ARCHIVE_CONCURRENT_MODIFICATIONS") Detail: Too many concurrent operations were made to modify Online Archives. Please try again. Reason: Bad Request. Params: [], BadRequestDetail: 
2026-05-31T01:52:00.5267856Z         
2026-05-31T01:52:00.5268229Z           with mongodbatlas_online_archive.users_archive,
2026-05-31T01:52:00.5268924Z           on terraform_plugin_test.tf line 44, in resource "mongodbatlas_online_archive" "users_archive":
2026-05-31T01:52:00.5269577Z           44: 	resource "mongodbatlas_online_archive" "users_archive" {
2026-05-31T01:52:00.5269941Z         
2026-05-31T01:52:00.5271606Z --- FAIL: TestMigBackupRSOnlineArchiveWithNoChangeBetweenVersions (1176.06s)
```

- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

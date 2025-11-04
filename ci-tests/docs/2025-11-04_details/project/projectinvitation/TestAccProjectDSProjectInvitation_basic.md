# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11eabf4374f32993d37 | dev | flaky_500 | 8.03s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 5 seconds
- 2025-10-07 PASS 8 seconds
- 2025-10-08 PASS 6 seconds
- 2025-10-09 PASS 6 seconds
- 2025-10-10 PASS 5 seconds
- 2025-10-11 PASS 5 seconds
- 2025-10-12 PASS 4 seconds
- 2025-10-13 PASS 5 seconds
- 2025-10-14 PASS 10 seconds
- 2025-10-15 PASS 5 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 9 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19 PASS 44 seconds
- 2025-10-20
  - PASS 6 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 8 seconds
- 2025-10-22
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 9 seconds
- 2025-10-24 PASS 9 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 6 seconds
- 2025-10-27 PASS 9 seconds
- 2025-10-28 PASS 8 seconds
- 2025-10-29 PASS 7 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1905829Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-10-30T00:31:58.1915623Z    test_working_directory=/tmp/plugintest205842104 test_step_number=1 test_name=TestAccProjectDSProjectInvitation_basic
2025-10-30T00:31:58.1916686Z     data_source_project_invitation_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1917222Z         
2025-10-30T00:31:58.1917524Z         Error: error when destroying resource
2025-10-30T00:31:58.1917803Z         
2025-10-30T00:31:58.1918137Z         error deleting project (6902b11eabf4374f32993d37):
2025-10-30T00:31:58.1918912Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993d37
2025-10-30T00:31:58.1919545Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1920143Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1920680Z         BadRequestDetail: 
2025-10-30T00:31:58.1921004Z --- FAIL: TestAccProjectDSProjectInvitation_basic (8.33s)
```

- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 5 seconds
- 2025-11-03 PASS 6 seconds
- 2025-11-04 PASS 10 seconds
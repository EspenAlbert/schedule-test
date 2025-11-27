# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b125e2dc7470847bf0e6 | dev | flaky_500 | 9.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 11 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1921395Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-10-30T00:31:58.1931069Z    test_step_number=3 test_name=TestAccProjectRSProjectInvitation_basic test_terraform_path=/home/runner/work/_temp/785eb1a1-1343-4400-bfd5-0280e1f5dff8/terraform
2025-10-30T00:31:58.1932119Z     resource_project_invitation_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1932630Z         
2025-10-30T00:31:58.1932922Z         Error: error when destroying resource
2025-10-30T00:31:58.1933206Z         
2025-10-30T00:31:58.1933537Z         error deleting project (6902b125e2dc7470847bf0e6):
2025-10-30T00:31:58.1934117Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b125e2dc7470847bf0e6
2025-10-30T00:31:58.1934738Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1935326Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1935742Z         BadRequestDetail: 
2025-10-30T00:31:58.1936064Z --- FAIL: TestAccProjectRSProjectInvitation_basic (9.23s)
```

- 2025-10-31 PASS 12 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 8 seconds
- 2025-11-04 PASS 10 seconds
- 2025-11-05
  - PASS 7 seconds
  - PASS 8 seconds
- 2025-11-06 PASS 8 seconds
- 2025-11-07 PASS 8 seconds
- 2025-11-08 PASS 8 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 9 seconds
- 2025-11-11 PASS 11 seconds
- 2025-11-12 PASS 11 seconds
- 2025-11-13 PASS 9 seconds
- 2025-11-14 PASS 8 seconds
- 2025-11-15 PASS 13 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 12 seconds
- 2025-11-18 PASS 11 seconds
- 2025-11-19 PASS 8 seconds
- 2025-11-20 PASS 9 seconds
- 2025-11-21 PASS 11 seconds
- 2025-11-22 PASS 11 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 7 seconds
- 2025-11-25 PASS 10 seconds
- 2025-11-26 PASS 12 seconds
- 2025-11-27 PASS 9 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 7 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 12 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 7 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 10 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 9 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING

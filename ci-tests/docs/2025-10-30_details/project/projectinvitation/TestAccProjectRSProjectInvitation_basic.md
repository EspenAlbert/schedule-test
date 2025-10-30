# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b125e2dc7470847bf0e6 | dev | flaky_500 | 9.02s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 12 seconds
  - PASS 7 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 12 seconds
- 2025-10-03 PASS 10 seconds
- 2025-10-04 PASS 14 seconds
- 2025-10-05 PASS a minute
- 2025-10-06 PASS 6 seconds
- 2025-10-07 PASS 11 seconds
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 7 seconds
- 2025-10-11 PASS 10 seconds
- 2025-10-12 PASS 7 seconds
- 2025-10-13 PASS 7 seconds
- 2025-10-14 PASS 14 seconds
- 2025-10-15 PASS 7 seconds
- 2025-10-16 PASS 17 seconds
- 2025-10-17 PASS 11 seconds
- 2025-10-18 PASS 11 seconds
- 2025-10-19 PASS 37 seconds
- 2025-10-20
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-10-21 PASS 14 seconds
- 2025-10-22
  - PASS 13 seconds
  - PASS 11 seconds
- 2025-10-23 PASS 12 seconds
- 2025-10-24 PASS 13 seconds
- 2025-10-25 PASS 11 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27 PASS 14 seconds
- 2025-10-28 PASS 9 seconds
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

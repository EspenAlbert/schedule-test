# project/projectinvitation/TestMigProjectInvitation_basic Test Details
# Found 19 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL(x 2)
Success rate: 89.47%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.08s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 2.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 16 seconds
  - PASS 9 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 14 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 12 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 16 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 15 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 12 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 9 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 15 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 14 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 14 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.3032923Z === RUN   TestMigProjectInvitation_basic
2026-01-07T00:33:18.3039096Z    test_working_directory=/tmp/plugintest4287662255 test_name=TestMigProjectInvitation_basic
2026-01-07T00:33:18.3039945Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:18.3040410Z         
2026-01-07T00:33:18.3040829Z         Error: error creating project: test-acc-tf-p-5913249869248961578
2026-01-07T00:33:18.3041176Z         
2026-01-07T00:33:18.3041483Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.3042075Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.3042617Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.3042918Z         
2026-01-07T00:33:18.3043374Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-01-07T00:33:18.3044002Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-01-07T00:33:18.3044661Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:33:18.3045059Z --- FAIL: TestMigProjectInvitation_basic (3.84s)
```

- 2026-01-08

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7823598Z === RUN   TestMigProjectInvitation_basic
2026-01-08T07:59:10.7830316Z   
2026-01-08T07:59:10.7830991Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7831604Z         
2026-01-08T07:59:10.7832196Z         Error: error creating project: test-acc-tf-p-2337015451863880555
2026-01-08T07:59:10.7832698Z         
2026-01-08T07:59:10.7833181Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7833949Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7834858Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7843905Z         
2026-01-08T07:59:10.7844647Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 401 Unauthorized
2026-01-08T07:59:10.7845337Z         (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7845778Z --- FAIL: TestMigProjectInvitation_basic (2.08s)
```


## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 13 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 12 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 14 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds

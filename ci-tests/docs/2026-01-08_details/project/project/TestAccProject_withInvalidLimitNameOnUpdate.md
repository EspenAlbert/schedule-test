# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 33 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:33](#error-2026-01-07t0033180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95bd59b8466ea72ec1e | dev | flaky_500 | 4.01s
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev |  | 4.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 seconds
  - PASS 10 seconds
- 2025-12-11 PASS 12 seconds
- 2025-12-12 PASS 15 seconds
- 2025-12-13 PASS 13 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 seconds
- 2025-12-16 PASS 13 seconds
- 2025-12-17 PASS 15 seconds
- 2025-12-18 PASS 13 seconds
- 2025-12-19 PASS 17 seconds
- 2025-12-20 PASS 15 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 seconds
- 2025-12-23 PASS 12 seconds
- 2025-12-24 PASS 10 seconds
- 2025-12-25 PASS 11 seconds
- 2025-12-26 PASS 16 seconds
- 2025-12-27 PASS 12 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 14 seconds
- 2025-12-31 PASS 17 seconds
- 2026-01-01 PASS 15 seconds
- 2026-01-02 PASS 15 seconds
- 2026-01-03 PASS 15 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 seconds
- 2026-01-06 PASS 13 seconds
- 2026-01-07

### Error 2026-01-07T00:33:18+00:00
```
2026-01-07T00:33:18.2831355Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-01-07T00:33:18.2835628Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-01-07T00:33:18.2891696Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-01-07T00:33:18.2892250Z     resource_project_test.go:1012: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:33:18.2892653Z         
2026-01-07T00:33:18.2892999Z         Error: error when getting project after create
2026-01-07T00:33:18.2893303Z         
2026-01-07T00:33:18.2893619Z           with mongodbatlas_project.test,
2026-01-07T00:33:18.2894219Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-07T00:33:18.2894993Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:33:18.2895309Z         
2026-01-07T00:33:18.2895655Z         error getting project (695da95bd59b8466ea72ec1e):
2026-01-07T00:33:18.2896245Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95bd59b8466ea72ec1e
2026-01-07T00:33:18.2896900Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:18.2897488Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:18.2897899Z         BadRequestDetail: 
2026-01-07T00:33:18.2898240Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (4.15s)
```

- 2026-01-08
  - PASS 16 seconds
  - FAIL 4 seconds

### Error 2026-01-08T07:59:10+00:00
```
2026-01-08T07:59:10.7588566Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2026-01-08T07:59:10.7595455Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2026-01-08T07:59:10.7606121Z   
2026-01-08T07:59:10.7743164Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2026-01-08T07:59:10.7743726Z     resource_project_test.go:1012: Step 1/2 error: Error running apply: exit status 1
2026-01-08T07:59:10.7744137Z         
2026-01-08T07:59:10.7744676Z         Error: error during project deletion when getting project settings
2026-01-08T07:59:10.7745050Z         
2026-01-08T07:59:10.7745356Z           with mongodbatlas_project.test,
2026-01-08T07:59:10.7745981Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-01-08T07:59:10.7746570Z           12: 		resource "mongodbatlas_project" "test" {
2026-01-08T07:59:10.7746895Z         
2026-01-08T07:59:10.7747247Z         error deleting project (695f63aaaa2a8443b4901966):
2026-01-08T07:59:10.7747897Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695f63aaaa2a8443b4901966/settings
2026-01-08T07:59:10.7748622Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-01-08T07:59:10.7749296Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-01-08T07:59:10.7749801Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (4.48s)
```

  - PASS 12 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 14 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 10 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 14 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 15 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 seconds

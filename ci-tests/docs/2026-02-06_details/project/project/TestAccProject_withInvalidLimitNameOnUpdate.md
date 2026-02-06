# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 36 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-08 07:59](#error-2026-01-08t0759100000) |  | dev | 4.05s

### Timeline
- 2026-01-07: MISSING
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
- 2026-01-09 PASS 13 seconds
- 2026-01-10 PASS 12 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 14 seconds
- 2026-01-13 PASS 12 seconds
- 2026-01-14 PASS 10 seconds
- 2026-01-15 PASS 13 seconds
- 2026-01-16 PASS 11 seconds
- 2026-01-17 PASS 16 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 13 seconds
- 2026-01-20 PASS 13 seconds
- 2026-01-21 PASS 14 seconds
- 2026-01-22
  - PASS 14 seconds
  - PASS 12 seconds
- 2026-01-23 PASS 17 seconds
- 2026-01-24 PASS 14 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 16 seconds
- 2026-01-27 PASS 15 seconds
- 2026-01-28 PASS 11 seconds
- 2026-01-29 PASS 12 seconds
- 2026-01-30 PASS 9 seconds
- 2026-01-31 PASS 14 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 18 seconds
- 2026-02-03 PASS 16 seconds
- 2026-02-04 PASS 12 seconds
- 2026-02-05 PASS 14 seconds
- 2026-02-06 PASS 12 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 9 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 10 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 9 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 14 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 12 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 13 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING

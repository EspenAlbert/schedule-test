# config/apikeyprojectassignment/TestAccApiKeyProjectAssignmentRS_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:43](#error-2026-04-09t0043550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.09s
[2026-04-11 00:48](#error-2026-04-11t0048500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 16 seconds
- 2026-04-08 PASS 11 seconds
- 2026-04-09

### Error 2026-04-09T00:43:55+00:00
```
2026-04-09T00:43:55.9940029Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-04-09T00:43:55.9940769Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-04-09T00:43:55.9951931Z   
2026-04-09T00:43:55.9952330Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-04-09T00:43:55.9952718Z         
2026-04-09T00:43:55.9953154Z         Error: error creating project: test-acc-tf-p-1880208672578915010
2026-04-09T00:43:55.9953534Z         
2026-04-09T00:43:55.9953872Z           with mongodbatlas_project.test,
2026-04-09T00:43:55.9954494Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-04-09T00:43:55.9955077Z           18: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:43:55.9955389Z         
2026-04-09T00:43:55.9956004Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:43:55.9956664Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:43:55.9957480Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:55.9957938Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (80.90s)
```

- 2026-04-10 PASS 11 seconds
- 2026-04-11

### Error 2026-04-11T00:48:50+00:00
```
2026-04-11T00:48:50.5642990Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-04-11T00:48:50.5644229Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-04-11T00:48:50.5662931Z   
2026-04-11T00:48:50.5663581Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-04-11T00:48:50.5664207Z         
2026-04-11T00:48:50.5664940Z         Error: error creating project: test-acc-tf-p-2679866875970877001
2026-04-11T00:48:50.5665691Z         
2026-04-11T00:48:50.5666220Z           with mongodbatlas_project.test,
2026-04-11T00:48:50.5667400Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-04-11T00:48:50.5668235Z           18: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:48:50.5668747Z         
2026-04-11T00:48:50.5669543Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:48:50.5670645Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:48:50.5671679Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:50.5672391Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (70.45s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 12 seconds
- 2026-04-14 PASS 14 seconds
- 2026-04-15 PASS 15 seconds
- 2026-04-16 PASS 16 seconds
- 2026-04-17 PASS 17 seconds
- 2026-04-18 PASS 17 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 14 seconds
- 2026-04-21 PASS 16 seconds
- 2026-04-22 PASS 11 seconds
- 2026-04-23 PASS 17 seconds
- 2026-04-24 PASS 15 seconds
- 2026-04-25 PASS 16 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 15 seconds
- 2026-04-28 PASS 17 seconds
- 2026-04-29 PASS 16 seconds
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 13 seconds
- 2026-05-02 PASS 15 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 12 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 14 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 13 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 12 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 10 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 9 seconds
  - PASS 11 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 11 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 14 seconds
- 2026-05-04 PASS 15 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 15 seconds

# project/project/TestAccProject_withInvalidLimitName Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-05 00:41](#error-2026-03-05t0041050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 5 seconds
- 2026-02-06 PASS 6 seconds
- 2026-02-07 PASS 11 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 5 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 5 seconds
- 2026-02-12 PASS 6 seconds
- 2026-02-13 PASS 4 seconds
- 2026-02-14 PASS 4 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 5 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 5 seconds
- 2026-02-20 PASS 5 seconds
- 2026-02-21 PASS 7 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 4 seconds
- 2026-02-24 PASS 7 seconds
- 2026-02-25 PASS 5 seconds
- 2026-02-26 PASS 6 seconds
- 2026-02-27 PASS 5 seconds
- 2026-02-28 PASS 5 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 5 seconds
- 2026-03-03 PASS 48 seconds
- 2026-03-04 PASS 7 seconds
- 2026-03-05

### Error 2026-03-05T00:41:05+00:00
```
2026-03-05T00:41:05.6362675Z === RUN   TestAccProject_withInvalidLimitName
2026-03-05T00:41:05.6386083Z === CONT  TestAccProject_withInvalidLimitName
2026-03-05T00:41:05.6427857Z === NAME  TestAccProject_withInvalidLimitName
2026-03-05T00:41:05.6428627Z     resource_project_test.go:997: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-03-05T00:41:05.6429208Z         
2026-03-05T00:41:05.6429667Z         Error: error creating project: test-acc-tf-p-1612576996581930632
2026-03-05T00:41:05.6430065Z         
2026-03-05T00:41:05.6430408Z           with mongodbatlas_project.test,
2026-03-05T00:41:05.6431045Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-03-05T00:41:05.6431653Z           12: 		resource "mongodbatlas_project" "test" {
2026-03-05T00:41:05.6431999Z         
2026-03-05T00:41:05.6432502Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-03-05T00:41:05.6433195Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-03-05T00:41:05.6433954Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-05T00:41:05.6434428Z --- FAIL: TestAccProject_withInvalidLimitName (82.07s)
```

- 2026-03-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 4 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 7 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 4 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 4 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 4 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING

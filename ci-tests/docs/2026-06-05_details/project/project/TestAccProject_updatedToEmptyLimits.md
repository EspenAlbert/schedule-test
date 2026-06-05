# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-12 00:59](#error-2026-05-12t0059160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.03s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.00s
[2026-06-02 01:12](#error-2026-06-02t0112190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 27 seconds
- 2026-05-08 PASS 28 seconds
- 2026-05-09 PASS a minute
- 2026-05-10: MISSING
- 2026-05-11 PASS 16 seconds
- 2026-05-12

### Error 2026-05-12T00:59:16+00:00
```
2026-05-12T00:59:16.8636709Z === RUN   TestAccProject_updatedToEmptyLimits
2026-05-12T00:59:16.8642549Z === CONT  TestAccProject_updatedToEmptyLimits
2026-05-12T00:59:16.8733279Z === NAME  TestAccProject_updatedToEmptyLimits
2026-05-12T00:59:16.8733844Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-05-12T00:59:16.8734280Z         
2026-05-12T00:59:16.8734723Z         Error: error creating project: test-acc-tf-p-3060099685597174607
2026-05-12T00:59:16.8735096Z         
2026-05-12T00:59:16.8735420Z           with mongodbatlas_project.test,
2026-05-12T00:59:16.8736035Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-12T00:59:16.8736615Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:59:16.8736936Z         
2026-05-12T00:59:16.8737411Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:59:16.8738070Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:59:16.8738670Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:59:16.8739105Z --- FAIL: TestAccProject_updatedToEmptyLimits (70.80s)
```

- 2026-05-13 PASS 17 seconds
- 2026-05-14 PASS a minute
- 2026-05-15 PASS 17 seconds
- 2026-05-16 PASS 50 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 18 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 25 seconds
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9150762Z === RUN   TestAccProject_updatedToEmptyLimits
2026-05-21T01:04:31.9155263Z === CONT  TestAccProject_updatedToEmptyLimits
2026-05-21T01:04:31.9312741Z === NAME  TestAccProject_updatedToEmptyLimits
2026-05-21T01:04:31.9313262Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:04:31.9313679Z         
2026-05-21T01:04:31.9314089Z         Error: error creating project: test-acc-tf-p-5014757004701840634
2026-05-21T01:04:31.9314447Z         
2026-05-21T01:04:31.9314738Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9315342Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9315910Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9316207Z         
2026-05-21T01:04:31.9316672Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9317317Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9317906Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9318322Z --- FAIL: TestAccProject_updatedToEmptyLimits (87.31s)
```

- 2026-05-22 PASS 22 seconds
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS 17 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 18 seconds
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1601216Z === RUN   TestAccProject_updatedToEmptyLimits
2026-05-28T00:58:34.1606090Z === CONT  TestAccProject_updatedToEmptyLimits
2026-05-28T00:58:34.1620929Z === NAME  TestAccProject_updatedToEmptyLimits
2026-05-28T00:58:34.1621501Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-05-28T00:58:34.1621925Z         
2026-05-28T00:58:34.1622354Z         Error: error creating project: test-acc-tf-p-331025330009268448
2026-05-28T00:58:34.1622722Z         
2026-05-28T00:58:34.1623034Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1623651Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1624391Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1624709Z         
2026-05-28T00:58:34.1625195Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1625899Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1626504Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1627127Z --- FAIL: TestAccProject_updatedToEmptyLimits (64.05s)
```

- 2026-05-29 PASS 18 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 17 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2436929Z === RUN   TestAccProject_updatedToEmptyLimits
2026-06-02T01:12:19.2443322Z === CONT  TestAccProject_updatedToEmptyLimits
2026-06-02T01:12:19.2468088Z === NAME  TestAccProject_updatedToEmptyLimits
2026-06-02T01:12:19.2469002Z     resource_project_test.go:963: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:12:19.2469678Z         
2026-06-02T01:12:19.2470409Z         Error: error creating project: test-acc-tf-p-3710485199694927682
2026-06-02T01:12:19.2471195Z         
2026-06-02T01:12:19.2471735Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2472854Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2474053Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2474557Z         
2026-06-02T01:12:19.2475387Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:19.2476512Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:19.2477542Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:19.2478285Z --- FAIL: TestAccProject_updatedToEmptyLimits (65.83s)
```

- 2026-06-03 PASS 17 seconds
- 2026-06-04 PASS 40 seconds
- 2026-06-05 PASS 18 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 17 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 28 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 27 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 28 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

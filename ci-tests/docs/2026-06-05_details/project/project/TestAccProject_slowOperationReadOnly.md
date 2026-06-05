# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s
[2026-05-16 00:55](#error-2026-05-16t0055420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.03s
[2026-05-21 01:04](#error-2026-05-21t0104310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.08s
[2026-05-23 01:02](#error-2026-05-23t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.04s
[2026-05-26 02:10](#error-2026-05-26t0210570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.07s
[2026-05-28 00:58](#error-2026-05-28t0058340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-06-02 01:12](#error-2026-06-02t0112190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 17 seconds
- 2026-05-08 PASS 20 seconds
- 2026-05-09

### Error 2026-05-09T00:56:55+00:00
```
2026-05-09T00:56:55.2668306Z === RUN   TestAccProject_slowOperationReadOnly
2026-05-09T00:56:55.2670155Z === CONT  TestAccProject_slowOperationReadOnly
2026-05-09T00:56:55.2702224Z === NAME  TestAccProject_slowOperationReadOnly
2026-05-09T00:56:55.2702764Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-05-09T00:56:55.2703181Z         
2026-05-09T00:56:55.2703591Z         Error: error creating project: test-acc-tf-p-739761805010705940
2026-05-09T00:56:55.2703955Z         
2026-05-09T00:56:55.2704254Z           with mongodbatlas_project.test,
2026-05-09T00:56:55.2704858Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:55.2705433Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:55.2705739Z         
2026-05-09T00:56:55.2706210Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:55.2707192Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:55.2707793Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:55.2708228Z --- FAIL: TestAccProject_slowOperationReadOnly (69.60s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 14 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 14 seconds
- 2026-05-14 PASS 54 seconds
- 2026-05-15 PASS 15 seconds
- 2026-05-16

### Error 2026-05-16T00:55:42+00:00
```
2026-05-16T00:55:42.7293416Z === RUN   TestAccProject_slowOperationReadOnly
2026-05-16T00:55:42.7294611Z === CONT  TestAccProject_slowOperationReadOnly
2026-05-16T00:55:42.7315567Z === NAME  TestAccProject_slowOperationReadOnly
2026-05-16T00:55:42.7316141Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-05-16T00:55:42.7316562Z         
2026-05-16T00:55:42.7316999Z         Error: error creating project: test-acc-tf-p-3542743846242552350
2026-05-16T00:55:42.7317368Z         
2026-05-16T00:55:42.7317682Z           with mongodbatlas_project.test,
2026-05-16T00:55:42.7318322Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T00:55:42.7318910Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T00:55:42.7319222Z         
2026-05-16T00:55:42.7319710Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T00:55:42.7320377Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T00:55:42.7321125Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:55:42.7321574Z --- FAIL: TestAccProject_slowOperationReadOnly (66.28s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 16 seconds
- 2026-05-19 PASS 57 seconds
- 2026-05-20 PASS 18 seconds
- 2026-05-21

### Error 2026-05-21T01:04:31+00:00
```
2026-05-21T01:04:31.9154207Z === RUN   TestAccProject_slowOperationReadOnly
2026-05-21T01:04:31.9157090Z === CONT  TestAccProject_slowOperationReadOnly
2026-05-21T01:04:31.9295395Z === NAME  TestAccProject_slowOperationReadOnly
2026-05-21T01:04:31.9296064Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-05-21T01:04:31.9296491Z         
2026-05-21T01:04:31.9296898Z         Error: error creating project: test-acc-tf-p-1371572432133427735
2026-05-21T01:04:31.9297265Z         
2026-05-21T01:04:31.9297558Z           with mongodbatlas_project.test,
2026-05-21T01:04:31.9298158Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:04:31.9298737Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:04:31.9299038Z         
2026-05-21T01:04:31.9299500Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:04:31.9300147Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:04:31.9300969Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:04:31.9301401Z --- FAIL: TestAccProject_slowOperationReadOnly (84.76s)
```

- 2026-05-22 PASS 18 seconds
- 2026-05-23

### Error 2026-05-23T01:02:27+00:00
```
2026-05-23T01:02:27.0947112Z === RUN   TestAccProject_slowOperationReadOnly
2026-05-23T01:02:27.0949220Z === CONT  TestAccProject_slowOperationReadOnly
2026-05-23T01:02:27.1022049Z === NAME  TestAccProject_slowOperationReadOnly
2026-05-23T01:02:27.1022621Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-05-23T01:02:27.1023070Z         
2026-05-23T01:02:27.1023490Z         Error: error creating project: test-acc-tf-p-3022185139516509697
2026-05-23T01:02:27.1024129Z         
2026-05-23T01:02:27.1024452Z           with mongodbatlas_project.test,
2026-05-23T01:02:27.1025078Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:02:27.1025658Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:02:27.1026221Z         
2026-05-23T01:02:27.1026704Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:02:27.1027367Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:02:27.1027963Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:27.1028390Z --- FAIL: TestAccProject_slowOperationReadOnly (70.37s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 14 seconds
- 2026-05-26

### Error 2026-05-26T02:10:57+00:00
```
2026-05-26T02:10:57.1899538Z === RUN   TestAccProject_slowOperationReadOnly
2026-05-26T02:10:57.1901049Z === CONT  TestAccProject_slowOperationReadOnly
2026-05-26T02:10:57.1991743Z === NAME  TestAccProject_slowOperationReadOnly
2026-05-26T02:10:57.1992271Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-05-26T02:10:57.1992672Z         
2026-05-26T02:10:57.1993079Z         Error: error creating project: test-acc-tf-p-9030542564454323346
2026-05-26T02:10:57.1993438Z         
2026-05-26T02:10:57.1993739Z           with mongodbatlas_project.test,
2026-05-26T02:10:57.1994342Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:57.1994916Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:57.1995337Z         
2026-05-26T02:10:57.1995800Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:57.1996442Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:57.1997022Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:57.1997445Z --- FAIL: TestAccProject_slowOperationReadOnly (72.66s)
```

- 2026-05-27 PASS 15 seconds
- 2026-05-28

### Error 2026-05-28T00:58:34+00:00
```
2026-05-28T00:58:34.1603939Z === RUN   TestAccProject_slowOperationReadOnly
2026-05-28T00:58:34.1606434Z === CONT  TestAccProject_slowOperationReadOnly
2026-05-28T00:58:34.1691675Z === NAME  TestAccProject_slowOperationReadOnly
2026-05-28T00:58:34.1692255Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-05-28T00:58:34.1692680Z         
2026-05-28T00:58:34.1693112Z         Error: error creating project: test-acc-tf-p-3394171044477682046
2026-05-28T00:58:34.1693491Z         
2026-05-28T00:58:34.1693798Z           with mongodbatlas_project.test,
2026-05-28T00:58:34.1694423Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T00:58:34.1695009Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T00:58:34.1695325Z         
2026-05-28T00:58:34.1695805Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T00:58:34.1696466Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T00:58:34.1697265Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:58:34.1698035Z --- FAIL: TestAccProject_slowOperationReadOnly (67.85s)
```

- 2026-05-29 PASS 15 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 15 seconds
- 2026-06-02

### Error 2026-06-02T01:12:19+00:00
```
2026-06-02T01:12:19.2441668Z === RUN   TestAccProject_slowOperationReadOnly
2026-06-02T01:12:19.2445745Z === CONT  TestAccProject_slowOperationReadOnly
2026-06-02T01:12:19.2497412Z === NAME  TestAccProject_slowOperationReadOnly
2026-06-02T01:12:19.2498363Z     resource_project_test.go:1128: Step 1/4 error: Error running apply: exit status 1
2026-06-02T01:12:19.2499093Z         
2026-06-02T01:12:19.2499813Z         Error: error creating project: test-acc-tf-p-4495659621026635486
2026-06-02T01:12:19.2500445Z         
2026-06-02T01:12:19.2500962Z           with mongodbatlas_project.test,
2026-06-02T01:12:19.2502158Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:12:19.2503132Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:12:19.2503662Z         
2026-06-02T01:12:19.2504460Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:12:19.2505569Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:12:19.2506572Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:12:19.2507301Z --- FAIL: TestAccProject_slowOperationReadOnly (66.54s)
```

- 2026-06-03 PASS 14 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 14 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 14 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 20 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 19 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 20 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

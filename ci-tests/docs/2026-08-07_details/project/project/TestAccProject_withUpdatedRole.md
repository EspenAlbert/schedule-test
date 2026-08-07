# project/project/TestAccProject_withUpdatedRole Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.07s
[2026-07-16 00:44](#error-2026-07-16t0044260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.06s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8534078Z === RUN   TestAccProject_withUpdatedRole
2026-07-09T01:01:39.8545412Z === CONT  TestAccProject_withUpdatedRole
2026-07-09T01:01:39.8792339Z === NAME  TestAccProject_withUpdatedRole
2026-07-09T01:01:39.8793045Z     resource_project_test.go:834: Step 1/2 error: Error running apply: exit status 1
2026-07-09T01:01:39.8793778Z         
2026-07-09T01:01:39.8794242Z         Error: error creating project: test-acc-tf-p-3693259987744414886
2026-07-09T01:01:39.8794637Z         
2026-07-09T01:01:39.8794976Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8795629Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8796242Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8796803Z         
2026-07-09T01:01:39.8797431Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:01:39.8798129Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:01:39.8798760Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8799198Z --- FAIL: TestAccProject_withUpdatedRole (87.69s)
```

- 2026-07-10 PASS 17 seconds
- 2026-07-11 PASS a minute
- 2026-07-12: MISSING
- 2026-07-13 PASS 17 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 18 seconds
- 2026-07-16

### Error 2026-07-16T00:44:26+00:00
```
2026-07-16T00:44:26.3849702Z === RUN   TestAccProject_withUpdatedRole
2026-07-16T00:44:26.3863137Z === CONT  TestAccProject_withUpdatedRole
2026-07-16T00:44:26.3973824Z === NAME  TestAccProject_withUpdatedRole
2026-07-16T00:44:26.3974735Z     resource_project_test.go:834: Step 1/2 error: Error running apply: exit status 1
2026-07-16T00:44:26.3975190Z         
2026-07-16T00:44:26.3975630Z         Error: error creating project: test-acc-tf-p-5439783120383183540
2026-07-16T00:44:26.3976015Z         
2026-07-16T00:44:26.3976338Z           with mongodbatlas_project.test,
2026-07-16T00:44:26.3976973Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:44:26.3977575Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:44:26.3977903Z         
2026-07-16T00:44:26.3978395Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:44:26.3979081Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:44:26.3979756Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:26.3980194Z --- FAIL: TestAccProject_withUpdatedRole (84.63s)
```

- 2026-07-17 PASS 16 seconds
- 2026-07-18 PASS a minute
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS a minute
- 2026-07-22 PASS 17 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.1146406Z === RUN   TestAccProject_withUpdatedRole
2026-07-23T00:46:48.1175485Z === CONT  TestAccProject_withUpdatedRole
2026-07-23T00:46:48.1262038Z === NAME  TestAccProject_withUpdatedRole
2026-07-23T00:46:48.1262619Z     resource_project_test.go:837: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:46:48.1263056Z         
2026-07-23T00:46:48.1263505Z         Error: error creating project: test-acc-tf-p-7607831128747377569
2026-07-23T00:46:48.1263899Z         
2026-07-23T00:46:48.1264230Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.1264862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.1265459Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.1265787Z         
2026-07-23T00:46:48.1266286Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.1267144Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.1267761Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.1268200Z --- FAIL: TestAccProject_withUpdatedRole (63.99s)
```

- 2026-07-24 PASS 17 seconds
- 2026-07-25 PASS 11 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 24 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 12 seconds
- 2026-07-30 PASS 14 seconds
- 2026-07-31
  - PASS 11 seconds
  - PASS 16 seconds
  - PASS 9 seconds
- 2026-08-01 PASS 13 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-08-04 PASS 13 seconds
- 2026-08-05 PASS 13 seconds
- 2026-08-06 PASS 9 seconds
- 2026-08-07 PASS 13 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 12 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 12 seconds
  - PASS 13 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 15 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

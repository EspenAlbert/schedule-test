# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.05s
[2026-04-11 00:45](#error-2026-04-11t0045440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 29 seconds
- 2026-04-09

### Error 2026-04-09T00:40:56+00:00
```
2026-04-09T00:40:56.7081959Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-04-09T00:40:56.7084423Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-04-09T00:40:56.7168222Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-04-09T00:40:56.7169137Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:40:56.7169777Z         
2026-04-09T00:40:56.7170470Z         Error: error creating project: test-acc-tf-p-5320712403046413011
2026-04-09T00:40:56.7171031Z         
2026-04-09T00:40:56.7171622Z           with mongodbatlas_project.test,
2026-04-09T00:40:56.7172658Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:56.7173616Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:56.7174355Z         
2026-04-09T00:40:56.7175145Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:56.7176232Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:56.7177397Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:56.7178183Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (77.51s)
```

- 2026-04-10 PASS 30 seconds
- 2026-04-11

### Error 2026-04-11T00:45:44+00:00
```
2026-04-11T00:45:44.5280418Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-04-11T00:45:44.5282848Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-04-11T00:45:44.5295435Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-04-11T00:45:44.5295981Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:45:44.5296342Z         
2026-04-11T00:45:44.5296746Z         Error: error creating project: test-acc-tf-p-4931955674647986610
2026-04-11T00:45:44.5297084Z         
2026-04-11T00:45:44.5297557Z           with mongodbatlas_project.test,
2026-04-11T00:45:44.5298124Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:45:44.5298660Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:45:44.5298961Z         
2026-04-11T00:45:44.5299410Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:45:44.5300020Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:45:44.5300564Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:44.5301009Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (62.98s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 29 seconds
- 2026-04-14 PASS 45 seconds
- 2026-04-15 PASS 37 seconds
- 2026-04-16 PASS 47 seconds
- 2026-04-17 PASS 36 seconds
- 2026-04-18 PASS 35 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 34 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 29 seconds
- 2026-04-23 PASS 38 seconds
- 2026-04-24 PASS 34 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 33 seconds
- 2026-04-28 PASS 39 seconds
- 2026-04-29 PASS 36 seconds
- 2026-04-30 PASS a minute
- 2026-05-01 PASS 30 seconds
- 2026-05-02 PASS 54 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 30 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 33 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 31 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 29 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 30 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 26 seconds
  - PASS 28 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 29 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 31 seconds
- 2026-05-04 PASS 33 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 35 seconds

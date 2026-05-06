# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s
[2026-04-11 00:45](#error-2026-04-11t0045440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s
[2026-04-25 00:50](#error-2026-04-25t0050310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 31 seconds
- 2026-04-09

### Error 2026-04-09T00:40:56+00:00
```
2026-04-09T00:40:56.7080624Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-09T00:40:56.7083751Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-09T00:40:56.7136401Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-09T00:40:56.7139645Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-04-09T00:40:56.7140302Z         
2026-04-09T00:40:56.7141026Z         Error: error creating project: test-acc-tf-p-8961825252016817650
2026-04-09T00:40:56.7141648Z         
2026-04-09T00:40:56.7142146Z           with mongodbatlas_project.test,
2026-04-09T00:40:56.7143201Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:56.7144176Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:56.7144685Z         
2026-04-09T00:40:56.7145485Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:56.7146591Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:56.7147799Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:56.7148614Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (68.41s)
```

- 2026-04-10 PASS 30 seconds
- 2026-04-11

### Error 2026-04-11T00:45:44+00:00
```
2026-04-11T00:45:44.5279544Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-11T00:45:44.5281594Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-11T00:45:44.5311876Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-11T00:45:44.5312388Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-04-11T00:45:44.5312750Z         
2026-04-11T00:45:44.5313141Z         Error: error creating project: test-acc-tf-p-6712238691534919346
2026-04-11T00:45:44.5313498Z         
2026-04-11T00:45:44.5313792Z           with mongodbatlas_project.test,
2026-04-11T00:45:44.5314360Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:45:44.5314910Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:45:44.5315199Z         
2026-04-11T00:45:44.5315734Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:45:44.5316336Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:45:44.5316889Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:44.5317508Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (65.51s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 30 seconds
- 2026-04-14 PASS 44 seconds
- 2026-04-15 PASS 34 seconds
- 2026-04-16 PASS 43 seconds
- 2026-04-17 PASS 37 seconds
- 2026-04-18 PASS 36 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 35 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 30 seconds
- 2026-04-23 PASS 40 seconds
- 2026-04-24 PASS 35 seconds
- 2026-04-25

### Error 2026-04-25T00:50:31+00:00
```
2026-04-25T00:50:31.9660668Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-25T00:50:31.9662792Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-25T00:50:31.9676590Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-25T00:50:31.9677139Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-04-25T00:50:31.9677534Z         
2026-04-25T00:50:31.9677968Z         Error: error creating project: test-acc-tf-p-7911328940493250310
2026-04-25T00:50:31.9678339Z         
2026-04-25T00:50:31.9678648Z           with mongodbatlas_project.test,
2026-04-25T00:50:31.9679271Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-25T00:50:31.9680103Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-25T00:50:31.9680423Z         
2026-04-25T00:50:31.9680901Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-25T00:50:31.9681563Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-25T00:50:31.9682174Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:50:31.9682655Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (68.51s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 33 seconds
- 2026-04-28 PASS 55 seconds
- 2026-04-29 PASS 38 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.7103695Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-30T01:01:13.7108780Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-30T01:01:13.7134748Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-04-30T01:01:13.7135835Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-04-30T01:01:13.7136636Z         
2026-04-30T01:01:13.7137513Z         Error: error creating project: test-acc-tf-p-4787344160473566006
2026-04-30T01:01:13.7138258Z         
2026-04-30T01:01:13.7138910Z           with mongodbatlas_project.test,
2026-04-30T01:01:13.7140221Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T01:01:13.7141391Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T01:01:13.7142164Z         
2026-04-30T01:01:13.7143130Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:01:13.7144435Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:01:13.7145563Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.7146498Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (77.72s)
```

- 2026-05-01 PASS 32 seconds
- 2026-05-02 PASS 46 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 30 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 33 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 32 seconds
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
- 2026-04-19 PASS 31 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 29 seconds
  - PASS 29 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 30 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 31 seconds
- 2026-05-04 PASS 33 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 34 seconds

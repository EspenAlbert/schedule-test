# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:59](#error-2026-05-09t0059140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.00s
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.03s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 80.07s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 119.08s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.08s
[2026-06-02 01:11](#error-2026-06-02t0111090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 38 seconds
- 2026-05-08 PASS 29 seconds
- 2026-05-09

### Error 2026-05-09T00:59:14+00:00
```
2026-05-09T00:59:14.3979912Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-09T00:59:14.3980924Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-09T00:59:14.3990603Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-09T00:59:14.3991021Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:59:14.3991333Z         
2026-05-09T00:59:14.3991670Z         Error: error creating project: test-acc-tf-p-2404282739228201747
2026-05-09T00:59:14.3991963Z         
2026-05-09T00:59:14.3992205Z           with mongodbatlas_project.test,
2026-05-09T00:59:14.3992676Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:59:14.3993118Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:59:14.3995707Z         
2026-05-09T00:59:14.3996124Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:59:14.3996665Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:59:14.3997139Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.3997519Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (79.04s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 35 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 36 seconds
- 2026-05-14 PASS 54 seconds
- 2026-05-15 PASS 33 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 34 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.8992110Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-19T01:08:20.8998014Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-19T01:08:20.9062942Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-19T01:08:20.9064343Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-05-19T01:08:20.9065189Z         
2026-05-19T01:08:20.9066097Z         Error: error creating project: test-acc-tf-p-359056198167881993
2026-05-19T01:08:20.9066904Z         
2026-05-19T01:08:20.9067584Z           with mongodbatlas_project.test,
2026-05-19T01:08:20.9068891Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:08:20.9070107Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:08:20.9070845Z         
2026-05-19T01:08:20.9071907Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:20.9073246Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:20.9075120Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.9076148Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (74.30s)
```

- 2026-05-20 PASS 36 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.7182826Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-21T01:07:04.7184086Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-21T01:07:04.7231651Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-21T01:07:04.7232201Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:07:04.7232600Z         
2026-05-21T01:07:04.7233040Z         Error: error creating project: test-acc-tf-p-3653198070761592382
2026-05-21T01:07:04.7233416Z         
2026-05-21T01:07:04.7233731Z           with mongodbatlas_project.test,
2026-05-21T01:07:04.7234357Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:07:04.7235079Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:07:04.7235396Z         
2026-05-21T01:07:04.7235879Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:07:04.7236543Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:07:04.7237148Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7237649Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (80.74s)
```

- 2026-05-22 PASS 35 seconds
- 2026-05-23 PASS 43 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 35 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 35 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7584001Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-28T01:01:56.7585229Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-28T01:01:56.7678489Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-28T01:01:56.7679023Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-05-28T01:01:56.7679402Z         
2026-05-28T01:01:56.7679812Z         Error: error creating project: test-acc-tf-p-1429032713315955142
2026-05-28T01:01:56.7680168Z         
2026-05-28T01:01:56.7680465Z           with mongodbatlas_project.test,
2026-05-28T01:01:56.7681238Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:56.7681824Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:56.7682124Z         
2026-05-28T01:01:56.7682582Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:01:56.7683231Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:01:56.7683819Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7684294Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (119.80s)
```

- 2026-05-29 PASS 30 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0193261Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-30T01:08:14.0194841Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-30T01:08:14.0226783Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-05-30T01:08:14.0227472Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:08:14.0227901Z         
2026-05-30T01:08:14.0228363Z         Error: error creating project: test-acc-tf-p-2758354521759193954
2026-05-30T01:08:14.0228756Z         
2026-05-30T01:08:14.0229083Z           with mongodbatlas_project.test,
2026-05-30T01:08:14.0229729Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:14.0230339Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:14.0230676Z         
2026-05-30T01:08:14.0231198Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:14.0231885Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:14.0232680Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0233205Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (72.85s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 31 seconds
- 2026-06-02

### Error 2026-06-02T01:11:09+00:00
```
2026-06-02T01:11:09.5983358Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-06-02T01:11:09.5985742Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-06-02T01:11:09.6013190Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2026-06-02T01:11:09.6013668Z     resource_test.go:561: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:11:09.6014139Z         
2026-06-02T01:11:09.6014586Z         Error: error creating project: test-acc-tf-p-300201331984761915
2026-06-02T01:11:09.6015132Z         
2026-06-02T01:11:09.6015540Z           with mongodbatlas_project.test,
2026-06-02T01:11:09.6016223Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:11:09.6016809Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:11:09.6017271Z         
2026-06-02T01:11:09.6017761Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:11:09.6018463Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:11:09.6019080Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:09.6019637Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (97.81s)
```

- 2026-06-03 PASS 36 seconds
- 2026-06-04 PASS 46 seconds
- 2026-06-05 PASS 34 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 33 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 33 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 35 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 31 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

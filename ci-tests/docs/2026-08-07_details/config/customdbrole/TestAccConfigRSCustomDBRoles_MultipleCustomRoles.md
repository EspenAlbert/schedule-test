# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-07-14 00:45](#error-2026-07-14t0045330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-23 00:48](#error-2026-07-23t0048140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7705364Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-09T00:58:00.7707864Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-09T00:58:00.7721923Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-09T00:58:00.7722497Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-07-09T00:58:00.7722909Z         
2026-07-09T00:58:00.7723356Z         Error: error creating project: test-acc-tf-p-2695744534357485825
2026-07-09T00:58:00.7723746Z         
2026-07-09T00:58:00.7724067Z           with mongodbatlas_project.test,
2026-07-09T00:58:00.7724838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:58:00.7726155Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:58:00.7726737Z         
2026-07-09T00:58:00.7727624Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:00.7728851Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:00.7729981Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7730869Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (63.03s)
```

- 2026-07-10 PASS 38 seconds
- 2026-07-11 PASS a minute
- 2026-07-12: MISSING
- 2026-07-13 PASS 34 seconds
- 2026-07-14

### Error 2026-07-14T00:45:33+00:00
```
2026-07-14T00:45:33.0983434Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-14T00:45:33.0985557Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-14T00:45:33.0999516Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-14T00:45:33.1000101Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-07-14T00:45:33.1000514Z         
2026-07-14T00:45:33.1000975Z         Error: error creating project: test-acc-tf-p-6938142312494251689
2026-07-14T00:45:33.1001537Z         
2026-07-14T00:45:33.1001875Z           with mongodbatlas_project.test,
2026-07-14T00:45:33.1002532Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:45:33.1003147Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:45:33.1003474Z         
2026-07-14T00:45:33.1003981Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:45:33.1004674Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:45:33.1005306Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:33.1005814Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (65.27s)
```

- 2026-07-15 PASS 34 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 31 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.8117073Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-18T00:51:48.8119720Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-18T00:51:48.8135781Z    test_name=TestAccConfigRSCustomDBRoles_MultipleCustomRoles test_terraform_path=/home/runner/work/_temp/d22df8ed-6efb-48c5-939a-9fa3d9587ee5/terraform
2026-07-18T00:51:48.8137370Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-07-18T00:51:48.8138051Z         
2026-07-18T00:51:48.8138826Z         Error: error creating project: test-acc-tf-p-6159235511444365017
2026-07-18T00:51:48.8139485Z         
2026-07-18T00:51:48.8140050Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8141180Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8142233Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8142976Z         
2026-07-18T00:51:48.8143846Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8145101Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8146052Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8147044Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (62.38s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3967775Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-21T00:53:42.3969319Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-21T00:53:42.3989445Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-21T00:53:42.3989823Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-07-21T00:53:42.3990151Z         
2026-07-21T00:53:42.3990451Z         Error: error creating project: test-acc-tf-p-7130710144204670939
2026-07-21T00:53:42.3990714Z         
2026-07-21T00:53:42.3990951Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.3991387Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.3991790Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.3992027Z         
2026-07-21T00:53:42.3992356Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.3992802Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.3993216Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3993897Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (63.14s)
```

- 2026-07-22 PASS 31 seconds
- 2026-07-23

### Error 2026-07-23T00:48:14+00:00
```
2026-07-23T00:48:14.9904707Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-23T00:48:14.9907625Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-23T00:48:14.9918408Z    test_name=TestAccConfigRSCustomDBRoles_WithInheritedRoles
2026-07-23T00:48:14.9936835Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-07-23T00:48:14.9937435Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-07-23T00:48:14.9937860Z         
2026-07-23T00:48:14.9938354Z         Error: error creating project: test-acc-tf-p-6175080348795987582
2026-07-23T00:48:14.9938791Z         
2026-07-23T00:48:14.9939213Z           with mongodbatlas_project.test,
2026-07-23T00:48:14.9939809Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:48:14.9940414Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:48:14.9940907Z         
2026-07-23T00:48:14.9941445Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:48:14.9942289Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:48:14.9942925Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:14.9943445Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (63.29s)
```

- 2026-07-24 PASS 34 seconds
- 2026-07-25 PASS 30 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 37 seconds
- 2026-07-28 PASS 30 seconds
- 2026-07-29 PASS 30 seconds
- 2026-07-30 PASS 28 seconds
- 2026-07-31 PASS 33 seconds
- 2026-08-01 PASS 29 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 28 seconds
- 2026-08-04 PASS 31 seconds
- 2026-08-05 PASS 28 seconds
- 2026-08-06 PASS 27 seconds
- 2026-08-07 PASS 35 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 30 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 30 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 30 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 28 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 26 seconds
  - PASS 26 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 33 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

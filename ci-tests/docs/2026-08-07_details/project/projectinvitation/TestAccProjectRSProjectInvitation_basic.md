# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 105.07s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s
[2026-07-16 00:45](#error-2026-07-16t0045140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.02s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.04s
[2026-07-21 00:47](#error-2026-07-21t0047040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.01s
[2026-07-23 00:47](#error-2026-07-23t0047310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8817223Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-07-09T01:01:39.8829054Z    test_name=TestAccProjectRSProjectInvitation_basic
2026-07-09T01:01:39.8829699Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-09T01:01:39.8830175Z         
2026-07-09T01:01:39.8830623Z         Error: error creating project: test-acc-tf-p-3145986202174647391
2026-07-09T01:01:39.8831007Z         
2026-07-09T01:01:39.8831335Z           with mongodbatlas_project.test,
2026-07-09T01:01:39.8831981Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T01:01:39.8832588Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T01:01:39.8832917Z         
2026-07-09T01:01:39.8833685Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T01:01:39.8834404Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T01:01:39.8835029Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8835522Z --- FAIL: TestAccProjectRSProjectInvitation_basic (105.74s)
```

- 2026-07-10 PASS 14 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5780738Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-07-11T00:54:38.5792307Z   
2026-07-11T00:54:38.5792805Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-11T00:54:38.5793279Z         
2026-07-11T00:54:38.5793719Z         Error: error creating project: test-acc-tf-p-8026433433308111046
2026-07-11T00:54:38.5794103Z         
2026-07-11T00:54:38.5794426Z           with mongodbatlas_project.test,
2026-07-11T00:54:38.5795072Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:54:38.5795810Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:54:38.5796137Z         
2026-07-11T00:54:38.5796632Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:54:38.5797315Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:54:38.5798070Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5798546Z --- FAIL: TestAccProjectRSProjectInvitation_basic (69.74s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 16 seconds
- 2026-07-14 PASS 54 seconds
- 2026-07-15 PASS 43 seconds
- 2026-07-16

### Error 2026-07-16T00:45:14+00:00
```
2026-07-16T00:45:14.1827707Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-07-16T00:45:14.1839011Z    test_working_directory=/tmp/plugintest2626200759
2026-07-16T00:45:14.1839627Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-16T00:45:14.1840099Z         
2026-07-16T00:45:14.1840533Z         Error: error creating project: test-acc-tf-p-2909504726551288277
2026-07-16T00:45:14.1840915Z         
2026-07-16T00:45:14.1858633Z           with mongodbatlas_project.test,
2026-07-16T00:45:14.1859420Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-16T00:45:14.1860070Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-16T00:45:14.1860411Z         
2026-07-16T00:45:14.1860923Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-16T00:45:14.1861996Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-16T00:45:14.1862652Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:45:14.1863157Z --- FAIL: TestAccProjectRSProjectInvitation_basic (68.23s)
```

- 2026-07-17 PASS 14 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.1097715Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-07-18T00:49:47.1127355Z   
2026-07-18T00:49:47.1127893Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-18T00:49:47.1128386Z         
2026-07-18T00:49:47.1128852Z         Error: error creating project: test-acc-tf-p-1724171506467831040
2026-07-18T00:49:47.1129252Z         
2026-07-18T00:49:47.1129588Z           with mongodbatlas_project.test,
2026-07-18T00:49:47.1130243Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:49:47.1131137Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:49:47.1131475Z         
2026-07-18T00:49:47.1131990Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:49:47.1132700Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:49:47.1133335Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1133811Z --- FAIL: TestAccProjectRSProjectInvitation_basic (82.44s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:04+00:00
```
2026-07-21T00:47:04.4319101Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-07-21T00:47:04.4330979Z   
2026-07-21T00:47:04.4331488Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-21T00:47:04.4331968Z         
2026-07-21T00:47:04.4332421Z         Error: error creating project: test-acc-tf-p-7741297290550043355
2026-07-21T00:47:04.4332815Z         
2026-07-21T00:47:04.4333278Z           with mongodbatlas_project.test,
2026-07-21T00:47:04.4333931Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:47:04.4334546Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:47:04.4334890Z         
2026-07-21T00:47:04.4335694Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:47:04.4336393Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:47:04.4337025Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:04.4337511Z --- FAIL: TestAccProjectRSProjectInvitation_basic (65.13s)
```

- 2026-07-22 PASS 16 seconds
- 2026-07-23

### Error 2026-07-23T00:47:31+00:00
```
2026-07-23T00:47:31.3075256Z === RUN   TestAccProjectRSProjectInvitation_basic
2026-07-23T00:47:31.3086799Z   
2026-07-23T00:47:31.3087341Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-07-23T00:47:31.3087832Z         
2026-07-23T00:47:31.3088644Z         Error: error creating project: test-acc-tf-p-190018361837561459
2026-07-23T00:47:31.3089036Z         
2026-07-23T00:47:31.3089372Z           with mongodbatlas_project.test,
2026-07-23T00:47:31.3090012Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:47:31.3090909Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:47:31.3091244Z         
2026-07-23T00:47:31.3091751Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:47:31.3092436Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:47:31.3093057Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:31.3093533Z --- FAIL: TestAccProjectRSProjectInvitation_basic (61.78s)
```

- 2026-07-24 PASS 15 seconds
- 2026-07-25 PASS 10 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 14 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 8 seconds
- 2026-07-30 PASS 11 seconds
- 2026-07-31
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 7 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 8 seconds
  - PASS 6 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 8 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 10 seconds
  - PASS 9 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 12 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

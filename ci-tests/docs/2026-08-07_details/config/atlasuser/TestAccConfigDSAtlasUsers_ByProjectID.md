# config/atlasuser/TestAccConfigDSAtlasUsers_ByProjectID Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-07-11 00:45](#error-2026-07-11t0045540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.08s
[2026-07-14 00:45](#error-2026-07-14t0045330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-18 00:51](#error-2026-07-18t0051480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.07s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-07-23 00:46](#error-2026-07-23t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:00+00:00
```
2026-07-09T00:58:00.7483288Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-07-09T00:58:00.7541423Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-09T00:58:00.7562500Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-09T00:58:00.7563107Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-07-09T00:58:00.7563566Z         
2026-07-09T00:58:00.7564020Z         Error: error creating project: test-acc-tf-p-8341513739961769858
2026-07-09T00:58:00.7564410Z         
2026-07-09T00:58:00.7564734Z           with mongodbatlas_project.test,
2026-07-09T00:58:00.7565703Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-09T00:58:00.7566333Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-09T00:58:00.7566667Z         
2026-07-09T00:58:00.7567183Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-09T00:58:00.7567881Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-09T00:58:00.7568512Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:00.7568974Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (68.57s)
```

- 2026-07-10 PASS 9 seconds
- 2026-07-11

### Error 2026-07-11T00:45:54+00:00
```
2026-07-11T00:45:54.1747000Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-07-11T00:45:54.1805106Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-11T00:45:54.1827391Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-11T00:45:54.1828181Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-07-11T00:45:54.1828668Z         
2026-07-11T00:45:54.1829129Z         Error: error creating project: test-acc-tf-p-4885493216159179916
2026-07-11T00:45:54.1829531Z         
2026-07-11T00:45:54.1829869Z           with mongodbatlas_project.test,
2026-07-11T00:45:54.1830536Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-11T00:45:54.1831164Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-11T00:45:54.1831499Z         
2026-07-11T00:45:54.1832279Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-11T00:45:54.1833027Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-11T00:45:54.1833894Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:54.1834372Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (83.83s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 10 seconds
- 2026-07-14

### Error 2026-07-14T00:45:33+00:00
```
2026-07-14T00:45:33.0834579Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-07-14T00:45:33.0896155Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-14T00:45:33.0921360Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-14T00:45:33.0922004Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-07-14T00:45:33.0922478Z         
2026-07-14T00:45:33.0922948Z         Error: error creating project: test-acc-tf-p-8943631939307506694
2026-07-14T00:45:33.0923359Z         
2026-07-14T00:45:33.0923696Z           with mongodbatlas_project.test,
2026-07-14T00:45:33.0924368Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-14T00:45:33.0924998Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-14T00:45:33.0925337Z         
2026-07-14T00:45:33.0925857Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-14T00:45:33.0926574Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-14T00:45:33.0927398Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T00:45:33.0927865Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (62.00s)
```

- 2026-07-15 PASS 9 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 6 seconds
- 2026-07-18

### Error 2026-07-18T00:51:48+00:00
```
2026-07-18T00:51:48.7888363Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-07-18T00:51:48.7953115Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-18T00:51:48.8043505Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-18T00:51:48.8044187Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-07-18T00:51:48.8044687Z         
2026-07-18T00:51:48.8045163Z         Error: error creating project: test-acc-tf-p-322335189289917634
2026-07-18T00:51:48.8045572Z         
2026-07-18T00:51:48.8045916Z           with mongodbatlas_project.test,
2026-07-18T00:51:48.8046587Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-18T00:51:48.8047217Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-18T00:51:48.8047566Z         
2026-07-18T00:51:48.8048088Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-18T00:51:48.8048801Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-18T00:51:48.8049444Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:48.8050296Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (73.71s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.3884382Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-07-21T00:53:42.3919196Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-21T00:53:42.3932726Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-21T00:53:42.3933128Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-07-21T00:53:42.3933419Z         
2026-07-21T00:53:42.3933723Z         Error: error creating project: test-acc-tf-p-1481152636167363208
2026-07-21T00:53:42.3933986Z         
2026-07-21T00:53:42.3934219Z           with mongodbatlas_project.test,
2026-07-21T00:53:42.3934640Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-21T00:53:42.3935037Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-21T00:53:42.3935257Z         
2026-07-21T00:53:42.3935595Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-21T00:53:42.3936035Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-21T00:53:42.3936435Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.3936741Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (68.26s)
```

- 2026-07-22 PASS 8 seconds
- 2026-07-23

### Error 2026-07-23T00:46:48+00:00
```
2026-07-23T00:46:48.4154162Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-07-23T00:46:48.4199427Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-23T00:46:48.4216674Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-07-23T00:46:48.4217177Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-07-23T00:46:48.4217548Z         
2026-07-23T00:46:48.4217928Z         Error: error creating project: test-acc-tf-p-4650900432024855281
2026-07-23T00:46:48.4218254Z         
2026-07-23T00:46:48.4218552Z           with mongodbatlas_project.test,
2026-07-23T00:46:48.4219068Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-07-23T00:46:48.4219553Z           12: 		resource "mongodbatlas_project" "test" {
2026-07-23T00:46:48.4219831Z         
2026-07-23T00:46:48.4220241Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-07-23T00:46:48.4220891Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-07-23T00:46:48.4221539Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:46:48.4222030Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (62.96s)
```

- 2026-07-24 PASS 9 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 10 seconds
- 2026-07-28 PASS 8 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 5 seconds
- 2026-07-31 PASS 7 seconds
- 2026-08-01 PASS 5 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 7 seconds
- 2026-08-05 PASS 6 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 9 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 8 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING

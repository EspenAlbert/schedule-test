# config/atlasuser/TestAccConfigDSAtlasUsers_ByProjectID Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:57](#error-2026-05-09t0057080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.09s
[2026-05-12 00:55](#error-2026-05-12t0055060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-05-23 01:00](#error-2026-05-23t0100260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-05-26 02:10](#error-2026-05-26t0210160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.02s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-05-30 01:02](#error-2026-05-30t0102010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-06-02 01:11](#error-2026-06-02t0111000000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 58 seconds
  - PASS 13 seconds
- 2026-05-08 PASS 7 seconds
- 2026-05-09

### Error 2026-05-09T00:57:08+00:00
```
2026-05-09T00:57:08.2106285Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-05-09T00:57:08.2162942Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-09T00:57:08.2190142Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-09T00:57:08.2190935Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-09T00:57:08.2191500Z         
2026-05-09T00:57:08.2192041Z         Error: error creating project: test-acc-tf-p-970860808008584633
2026-05-09T00:57:08.2192500Z         
2026-05-09T00:57:08.2192884Z           with mongodbatlas_project.test,
2026-05-09T00:57:08.2193801Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:57:08.2194556Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:57:08.2194942Z         
2026-05-09T00:57:08.2195548Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:57:08.2196397Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:57:08.2197160Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:57:08.2197729Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (67.86s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12

### Error 2026-05-12T00:55:06+00:00
```
2026-05-12T00:55:06.0360544Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-05-12T00:55:06.0444481Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-12T00:55:06.0519352Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-12T00:55:06.0520259Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-12T00:55:06.0521003Z         
2026-05-12T00:55:06.0521475Z         Error: error creating project: test-acc-tf-p-9075282974781229951
2026-05-12T00:55:06.0521867Z         
2026-05-12T00:55:06.0522182Z           with mongodbatlas_project.test,
2026-05-12T00:55:06.0522812Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-12T00:55:06.0523386Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-12T00:55:06.0523689Z         
2026-05-12T00:55:06.0524209Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T00:55:06.0524851Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T00:55:06.0525465Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:55:06.0526141Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (68.53s)
```

- 2026-05-13 PASS 10 seconds
- 2026-05-14 PASS 56 seconds
- 2026-05-15 PASS 9 seconds
- 2026-05-16 PASS 47 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 10 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 10 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.7033972Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-05-21T01:07:04.7090419Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-21T01:07:04.7111759Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-21T01:07:04.7112350Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:07:04.7112963Z         
2026-05-21T01:07:04.7113431Z         Error: error creating project: test-acc-tf-p-2608179340546900144
2026-05-21T01:07:04.7113805Z         
2026-05-21T01:07:04.7114287Z           with mongodbatlas_project.test,
2026-05-21T01:07:04.7114932Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:07:04.7115699Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:07:04.7116021Z         
2026-05-21T01:07:04.7116506Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:07:04.7117180Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:07:04.7117792Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7118235Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (65.27s)
```

- 2026-05-22 PASS 9 seconds
- 2026-05-23

### Error 2026-05-23T01:00:26+00:00
```
2026-05-23T01:00:26.3994239Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-05-23T01:00:26.4067998Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-23T01:00:26.4096133Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-23T01:00:26.4096866Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-23T01:00:26.4097428Z         
2026-05-23T01:00:26.4097962Z         Error: error creating project: test-acc-tf-p-6649738128083565760
2026-05-23T01:00:26.4098419Z         
2026-05-23T01:00:26.4098806Z           with mongodbatlas_project.test,
2026-05-23T01:00:26.4099587Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-23T01:00:26.4100327Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-23T01:00:26.4100816Z         
2026-05-23T01:00:26.4101425Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:00:26.4102274Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:00:26.4103043Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:00:26.4103604Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (64.29s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 11 seconds
- 2026-05-26

### Error 2026-05-26T02:10:16+00:00
```
2026-05-26T02:10:16.8070886Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-05-26T02:10:16.8144191Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-26T02:10:16.8164625Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-26T02:10:16.8165228Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-26T02:10:16.8165666Z         
2026-05-26T02:10:16.8166094Z         Error: error creating project: test-acc-tf-p-5012859245329493365
2026-05-26T02:10:16.8166458Z         
2026-05-26T02:10:16.8166752Z           with mongodbatlas_project.test,
2026-05-26T02:10:16.8167364Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:10:16.8167935Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:10:16.8168239Z         
2026-05-26T02:10:16.8168712Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:10:16.8169366Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:10:16.8169961Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:16.8170397Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (71.21s)
```

- 2026-05-27 PASS 9 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7439034Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-05-28T01:01:56.7494211Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-28T01:01:56.7514957Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-28T01:01:56.7515524Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-28T01:01:56.7515956Z         
2026-05-28T01:01:56.7516383Z         Error: error creating project: test-acc-tf-p-8657233354585141573
2026-05-28T01:01:56.7516868Z         
2026-05-28T01:01:56.7517174Z           with mongodbatlas_project.test,
2026-05-28T01:01:56.7517786Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:56.7518363Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:56.7518672Z         
2026-05-28T01:01:56.7519151Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:01:56.7519808Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:01:56.7520405Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7520836Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (69.09s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30

### Error 2026-05-30T01:02:01+00:00
```
2026-05-30T01:02:01.5154139Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-05-30T01:02:01.5222420Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-30T01:02:01.5243595Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-05-30T01:02:01.5244262Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-30T01:02:01.5244744Z         
2026-05-30T01:02:01.5245222Z         Error: error creating project: test-acc-tf-p-8667068260177507908
2026-05-30T01:02:01.5245619Z         
2026-05-30T01:02:01.5245957Z           with mongodbatlas_project.test,
2026-05-30T01:02:01.5246601Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:02:01.5247214Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:02:01.5247757Z         
2026-05-30T01:02:01.5248286Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:02:01.5248983Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:02:01.5249611Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:01.5250075Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (70.61s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02

### Error 2026-06-02T01:11:00+00:00
```
2026-06-02T01:11:00.7645385Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-06-02T01:11:00.7688431Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-06-02T01:11:00.7705687Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-06-02T01:11:00.7706166Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-06-02T01:11:00.7706521Z         
2026-06-02T01:11:00.7706875Z         Error: error creating project: test-acc-tf-p-371869783103582571
2026-06-02T01:11:00.7707185Z         
2026-06-02T01:11:00.7707446Z           with mongodbatlas_project.test,
2026-06-02T01:11:00.7707942Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:11:00.7708404Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:11:00.7708665Z         
2026-06-02T01:11:00.7709048Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:11:00.7709571Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:11:00.7710052Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:00.7710525Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (89.57s)
```

- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 40 seconds
- 2026-06-05 PASS 10 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 7 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING

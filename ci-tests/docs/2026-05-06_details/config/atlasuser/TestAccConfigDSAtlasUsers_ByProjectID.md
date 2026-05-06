# config/atlasuser/TestAccConfigDSAtlasUsers_ByProjectID Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 3)
Success rate: 91.43%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:44](#error-2026-04-11t0044210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.02s
[2026-04-18 00:46](#error-2026-04-18t0046420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.02s
[2026-04-30 01:01](#error-2026-04-30t0101130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS a minute
- 2026-04-08 PASS 9 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 7 seconds
- 2026-04-11

### Error 2026-04-11T00:44:21+00:00
```
2026-04-11T00:44:21.8876163Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-04-11T00:44:21.8948661Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-04-11T00:44:21.8984124Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-04-11T00:44:21.8985078Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-04-11T00:44:21.8985781Z         
2026-04-11T00:44:21.8986474Z         Error: error creating project: test-acc-tf-p-6263054657110611123
2026-04-11T00:44:21.8987070Z         
2026-04-11T00:44:21.8987720Z           with mongodbatlas_project.test,
2026-04-11T00:44:21.8988846Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:44:21.8989779Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:44:21.8990285Z         
2026-04-11T00:44:21.8991121Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:44:21.8992370Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:44:21.8993454Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:21.8994263Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (70.23s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 7 seconds
- 2026-04-14 PASS a minute
- 2026-04-15 PASS 8 seconds
- 2026-04-16 PASS 34 seconds
- 2026-04-17 PASS 8 seconds
- 2026-04-18

### Error 2026-04-18T00:46:42+00:00
```
2026-04-18T00:46:42.8850446Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-04-18T00:46:42.8906251Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-04-18T00:46:42.8927016Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-04-18T00:46:42.8927637Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-04-18T00:46:42.8928089Z         
2026-04-18T00:46:42.8928513Z         Error: error creating project: test-acc-tf-p-6164485699953652142
2026-04-18T00:46:42.8928884Z         
2026-04-18T00:46:42.8929195Z           with mongodbatlas_project.test,
2026-04-18T00:46:42.8930242Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-18T00:46:42.8930847Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-18T00:46:42.8931164Z         
2026-04-18T00:46:42.8931639Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-18T00:46:42.8932304Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-18T00:46:42.8932902Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:46:42.8933338Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (66.17s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 10 seconds
- 2026-04-21 PASS 30 seconds
- 2026-04-22 PASS 8 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 8 seconds
- 2026-04-25 PASS 30 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 8 seconds
- 2026-04-28 PASS 33 seconds
- 2026-04-29 PASS 10 seconds
- 2026-04-30

### Error 2026-04-30T01:01:13+00:00
```
2026-04-30T01:01:13.6816283Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2026-04-30T01:01:13.6918913Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2026-04-30T01:01:13.6959744Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2026-04-30T01:01:13.6961120Z     data_source_atlas_users_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-04-30T01:01:13.6962046Z         
2026-04-30T01:01:13.6962972Z         Error: error creating project: test-acc-tf-p-7750666868637710832
2026-04-30T01:01:13.6963788Z         
2026-04-30T01:01:13.6964479Z           with mongodbatlas_project.test,
2026-04-30T01:01:13.6965707Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T01:01:13.6966859Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T01:01:13.6967541Z         
2026-04-30T01:01:13.6968542Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T01:01:13.6969911Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T01:01:13.6971307Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:13.6972209Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (69.70s)
```

- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS 36 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 8 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 6 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 5 seconds
  - PASS 8 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 5 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 seconds
- 2026-05-04 PASS 9 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 7 seconds
